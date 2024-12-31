import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { paymentMethodId } = req.body;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000, // Amount in cents (e.g., $50.00)
        currency: "usd",
        payment_method: paymentMethodId,
        confirm: true,
      });

      res.status(200).json({ success: true, paymentIntent });
    } catch (error) {
      res.status(400).json({ error: { message: error.message } });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
