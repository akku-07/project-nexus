const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Schemas
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const feedbackSchema = new mongoose.Schema({
    name: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    try {
        await contact.save();
        res.status(201).send('Contact details saved successfully');
    } catch (error) {
        res.status(400).send('Error saving contact details');
    }
});

app.post('/api/feedback', async (req, res) => {
    const { name, message } = req.body;
    const feedback = new Feedback({ name, message });
    try {
        await feedback.save();
        res.status(201).send('Feedback saved successfully');
    } catch (error) {
        res.status(400).send('Error saving feedback');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
