# SkyCast App (React Native)

A mobile application built with **React Native** that provides the following weather-related features:

- **7-day forecast report** with weather information.
- **Search functionality** by **city name** to get weather data.
- Display of **sunrise**, **sunset**, and **windspeed** for the selected city.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Screenshots](#screenshots)
- [License](#license)

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/TheJSGirl/SkyCast.git
    ```

2. Navigate to the project directory:

    ```bash
    cd skycast
    ```

3. Install dependencies using `npm` or `yarn`:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

4. Run the application:

    For iOS (requires Xcode):

    ```bash
    npx react-native run-ios
    ```

    For Android (requires Android Studio):

    ```bash
    npx react-native run-android
    ```

---

## Usage

Upon launching the app, you will see the following features:

1. **7-Day Forecast Report**: 
   - The app fetches and displays a weather report for the next 7 days.
   - Information includes temperature, weather conditions (e.g., sunny, cloudy), and additional data like wind speed.

2. **Search by City Name**:
   - Use the search bar to search for weather information by city name.
   - Upon selecting a city, the app fetches and displays weather details such as temperature, wind speed, and sunrise/sunset times.

3. **Sunrise, Sunset & Windspeed**:
   - Detailed data is shown for **sunrise** and **sunset** times based on the current city.
   - **Wind speed** is also displayed, providing a complete weather snapshot.

4. **Background & Styling**:
   - The app uses custom fonts and a dynamic background image depending on the weather conditions.

---

## Features

- **7-day weather forecast**: View weather data for the next 7 days, including temperature and weather conditions.
- **City search**: Search and display weather for a specific city.
- **Sunrise and Sunset**: Shows the time of sunrise and sunset for the searched city.
- **Wind speed**: Displays the current wind speed in the selected city.
- **Responsive design**: Works well on both iOS and Android platforms.
- **Modern UI/UX**: Uses background images and weather icons that dynamically change based on the weather conditions.

---

## Libraries and Dependencies

This project uses the following libraries:

- **React Native**: The core library for building the mobile app.
- **Expo Location**: To fetch the user's current location and weather data based on latitude and longitude.
- **React Navigation**: To handle navigation between different screens in the app.
- **Axios**: To make HTTP requests to a weather API to fetch data.
- **Expo Fonts**: For custom fonts used in the app.
- **Moment.js**: For handling date and time formatting (e.g., for sunrise/sunset).
  
### List of key dependencies:
  
```json
"react": "18.x.x",
"react-native": "0.x.x",
"react-navigation": "^4.x.x",
"react-native-safe-area-context": "^3.x.x",
"axios": "^0.x.x",
"expo-location": "^14.x.x",
"moment": "^2.x.x",
"expo-font": "^10.x.x"
