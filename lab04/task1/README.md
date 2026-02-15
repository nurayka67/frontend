# Lab 4.1: Event Handling - Registration From

## Student Information
- **Name:** Nuray Koshan
- **Date:** 14.02.2026
- **Course:** Fronted

## Project Overview
A user registration form with real-time validation  built using React hooks (useState) and controlled components. The form demonstrates event handling pattern from Chapter 4.

## Features
- Three input fields: Name, Email, Age
- Real-time validation on input change
- Prevents default form submission
- Success message on valid submission
- Clean, responsive styling

## Validation Rules
| Field | Rules |
| ------- | -------|
| Name | Required, minimum 2 characters|
| Email | Required, valid email format (user@domain.com) |
| Age | Required, must be 18 or order |

## Event Handling Approach
1. **Controlled Components**: Each input uses `value={state}` and `onChange={handler}`
2. **Inline Handlers**: `onChange={(e) => setState(e.target.value)}` for immediate updates
3. **Validation Functions**: Separate functions for each field called on change and submit
4. **Synthetic Event**: `e.preventDefault()` in onSubmit prevants page reload

## Component Structure