# Activity Score History - React Native Assessment

A React Native mobile application that displays activity score history with a beautiful dark mode UI, built with Expo.

## Features

- **Activity Score History Screen**: Displays 7-day rolling activity performance
- **Interactive Date Selection**: Navigate between weeks using arrow buttons or select a specific week from a dropdown
- **Activity Graph**: Visual line chart showing activity scores over the selected week
- **Activity Breakdown Cards**: Six tappable cards displaying:
  - Aerobic Score
  - Strength Score
  - Moderate Minutes
  - Vigorous Minutes
  - Strength Sessions
  - Balance Days
- **Dark Mode Theme**: Beautiful dark purple theme (#160419) with green accent colors
- **Scrollable Layout**: Fully scrollable interface for smaller devices

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Expo CLI** (installed globally or via npx)
- **iOS Simulator** (for macOS) or **Xcode** with iOS Simulator

## Installation

1. Clone or navigate to the project directory:
   ```bash
   cd native-assessement
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

### iOS Simulator (Recommended)

1. Start the Expo development server:
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

2. Press `i` in the terminal to open the app in iOS Simulator, or scan the QR code with the Expo Go app on your iPhone.

   Alternatively, you can run directly:
   ```bash
   npm run ios
   ```
   or
   ```bash
   npx expo start --ios
   ```

### Using Expo Go App (Physical Device)

1. Install the **Expo Go** app from the App Store on your iPhone
2. Run `npm start` or `npx expo start`
3. Scan the QR code displayed in the terminal with your iPhone camera or the Expo Go app

## Project Structure

```
native-assessement/
├── components/          # Reusable UI components
│   ├── Header.js       # Status bar and time display
│   ├── DateSelector.js # Week navigation and picker
│   ├── ActivityGraph.js # Line chart component
│   ├── ActivityCard.js  # Individual activity metric card
│   └── ActivityBreakdown.js # Grid of activity cards
├── screens/            # Screen components
│   └── ActivityScoreHistoryScreen.js # Main screen
├── hooks/              # Custom React hooks
│   └── useWeekNavigation.js # Week state management
├── utils/              # Utility functions and constants
│   ├── theme.js        # Theme configuration
│   └── data.js         # Data generation and formatting helpers
├── App.js              # Main app entry point
└── package.json        # Dependencies and scripts
```

## Key Components

### ActivityScoreHistoryScreen
The main screen component that orchestrates all sub-components and manages the overall layout.

### DateSelector
Allows users to:
- Navigate to previous/next week using arrow buttons
- Open a week picker modal to select any week from the past 12 weeks

### ActivityGraph
Displays a line chart with:
- Activity scores for each day of the week
- Average score indicator
- Gradient fill under the line
- Selected date highlight

### ActivityCard
Tappable cards that:
- Display activity metrics with icons
- Show visual feedback on press
- Log to console when tapped

## State Management

The app uses React hooks for state management:
- `useWeekNavigation`: Manages current week state, generates week data, and provides navigation functions
- Week data is regenerated when the week changes
- Activity breakdown data updates with each week selection

## Styling

The app uses a centralized theme configuration (`utils/theme.js`) with:
- Dark background color: `#160419`
- Accent color: `#00FF88` (bright green)
- Consistent spacing, typography, and border radius values

## Dependencies

- **expo**: Expo framework
- **react**: React library
- **react-native**: React Native framework
- **react-native-svg**: For rendering the activity graph
- **expo-status-bar**: Status bar component

## Notes

- The app uses dummy/static data generated randomly for demonstration purposes
- All activity cards are tappable and log to console
- The graph is simplified but matches the dark theme aesthetic
- The app is optimized for iOS simulator but can run on physical devices via Expo Go

## Troubleshooting

### iOS Simulator not opening
- Make sure Xcode is installed and the iOS Simulator is available
- Try running `xcode-select --switch /Applications/Xcode.app/Contents/Developer` if needed

### Metro bundler issues
- Clear cache: `npx expo start -c`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

