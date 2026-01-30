# Task 1: Step Counter with State

## Description
React counter component with configurable step and history tracking using useState hook.

## Features
- Configurable initial value and step size
- Increment/decrement buttons
- History tracking (last 5 values)
- Operations counter
- Reset functionality
- Two independent counters

## How to run
1.Navigate to task1 folder
2.Install dependencies: `npm install`
3.Start development server: `npm start`
4.Open http://localhost:3000

## Props
- `initialValue`: Starting count (default: 0)
- `step`: Increment/decrement step (default: 1)

## State Variables
- `count`: Current counter value
- `history`: Array of all count values
- `operations`: Number of operations performed

## Key Concepts
- **useState**: Manages component state
- **Props**: Configuration from parent component
- **State**: Internal data that chanbges 
- **Component independence**: Each counter has separate state

## Component Structure
- App.jsx: Main component with two counters
- StepCounter: Reusable counter component
- All in one file for simplicity