# Task 2: User Profile with useEffect

## Description
React component that fetches user data from API using useEffect hook.
Demonstrates data fetching, loading states, error handling,and cleanup.

## Features
- Fetches user data from JSONPlaceholder API
- Shows loading, error, and success states
- Cleanup with AbortController
- User selection buttons (1-10)
- Random user button
- Responsive design

## How to Run
1. Navigate to task2 folder
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open http://localhost:3000

## API Used
JSONPlaceholder: https://jsonplaceholder.typicode.com/user/{id}

## Key Concepts
- **useEffect**: Fetches data on component mount and userId change
- **Dependency array**: [userId] triggers re-fetch when userId changes
- **Cleanup**: AbortController cancels fetch on unmount
- **State management**: loading, error, user data states

## Component Structure
- App.jsx: Main component with user selection
- UserProfile: Displays user data with useEffect
- All in one file for simplicity

## Requirements Met
- Data fetching with useEffect
- Loading and error states
- Cleanup function with AbortController
- User selection functionality
- Proper dependency array usage