const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Define BMI calculation endpoint
app.post('/calculateBMI', (req, res) => {
    const { height, weight } = req.body;

    // Validate input
    if (!height || !weight || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        return res.status(400).json({ error: "Invalid height or weight value." });
    }

    // Convert height to meters
    const heightInMeters = height / 100; // Assuming height is provided in centimeters

    // Calculate BMI
    const bmi = calculateBMI(weight, heightInMeters);
    
    // Determine interpretation based on BMI range
    let interpretation;
    if (bmi < 18.5) {
        interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        interpretation = "Overweight";
    } else {
        interpretation = "Obese";
    }

    res.json({ bmi, interpretation });
});

// BMI calculation function
function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}




app.use("/",(req,res)=>{
    res.send("Welcome to BMI Calculator")
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
