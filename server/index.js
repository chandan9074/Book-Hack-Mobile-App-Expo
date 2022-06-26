import express from "express";
import Stripe from "stripe";

const app = express();
const port = 5000;

const PUBLISHABLE_KEY =
  "pk_test_51KOK6DDwHICDWFJIgFNP5rlR59k5W0DyjfGtaA7V6GTsaaAQCu17l4nkokTFHej5a9U3QCq3PLc62jXO8lW1gHDZ00sVd6tSCV";
const SECRET_KEY =
  "sk_test_51KOK6DDwHICDWFJIjuvyCd7S0PbN1J2FdvPysmxXDxbr0Lrbpok2LyFp9yurwtk21c6IrKtdtKTxDfrxOsP0GP5Q00FQVtKEF2";

const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log("server run");
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "usd",
      payment_method_types: ["card"],
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    // console.log(e.message);
    res.json({ error: e.message });
  }
});
