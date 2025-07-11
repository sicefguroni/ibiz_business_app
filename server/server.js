const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


const submittedOnboardingData = [];


app.use(cors());
app.use(bodyParser.json());

//  http://localhost:5000/ 
app.get('/', (req, res) => {
    res.status(200).send('Fetching Data...');
});

// http://localhost:5000/api/onboarding
app.post('/api/onboarding', (req, res) => {
    const onboardingData = req.body;
    console.log('Received onboarding data:', onboardingData); // console

    // in-memory array
    submittedOnboardingData.push(onboardingData);

    res.status(200).json({ message: 'Onboarding data received successfully!', data: onboardingData });
});

// http://localhost:5000/api/onboarding-data (all submitted onboarding data)
app.get('/api/onboarding-data', (req, res) => {
    res.status(200).json(submittedOnboardingData);
});

// server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
