import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-08-18",
});

export async function POST(req) {
  try {
    const { priceId } = await req.json(); // Get the priceId from the request body

    const origin = req.headers.get("origin");
    if (!origin) {
      throw new Error("Origin header is missing");
    }

    const params = {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId, // Use the received priceId
          quantity: 1,
        },
      ],
      success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    };

    const checkoutSession = await stripe.checkout.sessions.create(params);

    return NextResponse.json(checkoutSession, {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new NextResponse(
      JSON.stringify({ error: { message: error.message } }),
      {
        status: 500,
      }
    );
  }
}
