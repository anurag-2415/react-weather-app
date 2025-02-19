# React Weather App

## 🌐 Live Demo

[View Live Demo](https://anurag-2415.github.io/react-weather-app/)

## 📋 Overview

This project is a **React Weather Application** that allows users to search for and view current weather conditions in various cities worldwide. It fetches real-time weather data from a weather API and displays information such as temperature, weather description, and more.

## 🎨 Features

- **City Search**: Users can search for weather conditions in any city.
- **Current Weather Display**: Shows the current temperature, weather description, and other relevant data.
- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.

## 🛠️ Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **SCSS**: CSS preprocessor for easier and more efficient styling.
- **Weather API**: Fetches real-time weather data.

## 📂 Project Structure

- `react-weather-app/`: Main Folder.
  
- `public/index.html`: Contains the HTML template.
- `src/components/`: Houses React components like `WeatherDisplay`.
- `src/styles/`: Contains SCSS files for styling.
- `App.js`: Main React component.
- `index.js`: Entry point of the application.
- `.gitignore`
- `package.json`

## 🚀 Getting Started

To run this project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/anurag-2415/react-weather-app.git
   cd react-weather-app
   
2. **Install Dependencies**:

   ```bash
   npm install

3. **Start the Development Server**:

   ```bash
   npm start
   ```
   The app should now be running on http://localhost:3000.

## 🔧 Configuration

The app uses a weather API to fetch weather data. To set up your API key:

1. **Obtain an API Key**: Sign up on a weather service provider (e.g., OpenWeatherMap) to get your API key.
  
2. **Configure the API Key**: Create a .env file in the root directory and add:
    ```bash
    REACT_APP_WEATHER_API_KEY = your_api_key_here
    ```
     Please make sure that .gitignore includes .env to prevent exposing your API key.
   
## ✏️ Customization

Feel free to customize the app:

- **Styling**: Modify SCSS files in src/styles/ to change the app's appearance.

- **Components**: Enhance existing components or add new ones in src/components/.

- **API Integration**: If using a different weather API, update the API calls accordingly.

## 🛡️ License

This project is licensed under the MIT License.
