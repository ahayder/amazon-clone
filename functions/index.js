const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQvOXI3Uh53RTiap1zxW5jSqSFksGJw865aiD9ynSV6H7NKwwGjNLeu9Y3mi29is5CdqH0xWSAnIjvyY3O54dEh00HPCgyJx7');

// API


// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send(
    'hellow world'
));

app.post('/payments/create', async (request, response) => {

    const total = request.query.total;

    console.log('payment request recieved boom!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});

// Listen command
exports.api = functions.https.onRequest(app);
