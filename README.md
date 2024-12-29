
# Digital Clock React App

A simple, elegant digital clock application built with React and Vite. The clock displays the current time in a 12-hour format with AM/PM indicator.

## Features

- Real-time clock updates
- 12-hour time format with AM/PM display
- Responsive design
- Blurred background effect
- Clean, monospace font display

## Technologies Used

- React 18.3
- Vite 6.0
- CSS3

## Getting Started

1. Clone the repository
2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Build for production:
```sh
npm run build
```

## Project Structure

- 

App.jsx

 - Main application component
- 

DigitalClock.jsx

 - Digital clock component
- 

index.css

 - Global styles and clock styling
- 

App.css

 - App-specific styles

## Component Details

The 

DigitalClock

 component uses React hooks (

useState

 and 

useEffect

) to maintain and update the time state every second. The time is displayed in a HH:MM:SS AM/PM format with a stylish backdrop filter effect.

## License

This project is using the default license as specified in the package.json.