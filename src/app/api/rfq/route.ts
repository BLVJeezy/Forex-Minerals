import { NextResponse } from "next/server";

/**
 * Request-for-quote endpoint.
 *
 * ⚠️ AWAITING CLIENT CONFIGURATION
 * Forex Minerals has not yet supplied the destination for procurement
 * enquiries. Until `RFQ_RECIPIENT_EMAIL` (and a transport such as
 * `RESEND_API_KEY`) is set, the endpoint validates the payload, records it in
 * the server log so nothing is lost, and replies `not_configured` — the form
 * then tells the visitor the request could not be transmitted rather than
 * silently pretending it was delivered.
 *
 * To activate: set the environment variables, then send `payload` on from the
 * marked section below.
 */

const REQUIRED = ["company", "fullName", "email", "material"] as const;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { status: "invalid", message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const missing = REQUIRED.filter(
    (key) => !String(payload[key] ?? "").trim(),
  );
  if (missing.length > 0) {
    return NextResponse.json(
      { status: "invalid", missing },
      { status: 422 },
    );
  }

  const email = String(payload.email ?? "");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { status: "invalid", missing: ["email"] },
      { status: 422 },
    );
  }

  const recipient = process.env.RFQ_RECIPIENT_EMAIL;

  // Always record the enquiry so it is recoverable from the server log.
  console.info("[rfq] enquiry received", {
    receivedAt: new Date().toISOString(),
    delivered: Boolean(recipient),
    payload,
  });

  if (!recipient) {
    return NextResponse.json({ status: "not_configured" }, { status: 503 });
  }

  // ---------------------------------------------------------------
  // TODO (once Forex Minerals confirms its contact details): deliver
  // `payload` to `recipient` through the chosen transport, e.g.
  //
  //   await resend.emails.send({
  //     from: process.env.RFQ_SENDER_EMAIL!,
  //     to: recipient,
  //     replyTo: email,
  //     subject: `Demande de devis — ${payload.company}`,
  //     text: formatEnquiry(payload),
  //   });
  // ---------------------------------------------------------------

  return NextResponse.json({ status: "received" });
}
