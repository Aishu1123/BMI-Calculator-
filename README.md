# BMI Calculator Documentation

## Overview

The BMI Calculator is a web application designed to calculate Body Mass Index (BMI) based on user-provided weight and height. It consists of both frontend and backend components to facilitate seamless BMI calculation.

## Features

- **Backend API (calculateBMI):**
  - Provides an endpoint `/calculateBMI` accessible via POST requests.
  - Accepts parameters:
    - `height` (in meters)
    - `weight` (in kilograms)
  - Calculates BMI using the formula `weight (kg) / height (m^2)` and returns the result.

- **Frontend Interface:**
  - Input fields for weight (in kilograms) and height (in meters).
  - "Calculate BMI" button triggers the BMI calculation process.
  - Sends a POST request to the backend's `/calculateBMI` endpoint.
  - Displays the calculated BMI value and interpretation (Underweight, Normal weight, Overweight, or Obese) based on the BMI range table.

## Technical Stack

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express

## BMI Range Interpretation

| BMI           | Interpretation   |
|---------------|------------------|
| Below 18.5    | Underweight      |
| 18.5 - 24.9   | Normal weight    |
| 25.0 - 29.9   | Overweight       |
| 30.0 and above| Obese            |

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```
   cd BMI-Calculator-

   ```
5. Install dependencies:
   - Backend:
   ```
    cd Backend
    npm install
   ````
   - Frontend:
   ```
    cd Frontend
    
   ```
6. Start the backend server:
   ```
   cd Backend
   npm run server
   ```
8. Serve the frontend files:
   - Option 1: Serve from the backend server
   - Option 2: Use a static file server like `http-server` or `live-server`

## Usage

1. Open the browser and navigate to the frontend URL.
2. Enter the weight and height in the respective input fields.
3. Click the "Calculate BMI" button to see the result.
4. View the calculated BMI value and interpretation.

## Contribution

Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub workflow:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request


