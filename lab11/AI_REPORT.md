# AI Usage Report - Lab 11: React Native Fundamentals

**Student Name:** Nuray Koshan
**Date:** 9.04.2026

## AI Tool Used
- **Tool:** ChatGPT 
- **Version:** GPT-4

## Purpose of Using AI
I used AI as a coding assistant to help me understand React Native concepts, debug errors, and generate boilerplate code for the lab assignment. AI helped me learn the differences between React (web) and React Native, understand Expo setup, and implement core components correctly.

## Prompts I Used
1. "How to create a new Expo project with TypeScript?"
2. "Explain the difference between View and div in React Native"
3. "Help me fix 'Project is incompatible with Expo Go' error"
4. "Show me how to use FlatList in React Native"
5. "How to implement navigation between screens using React Navigation?"
6. "What is platform-specific code and how to use Platform.select?"
7. "Fix this error: 'Element type is invalid' in React Native"

## How I Modified and Verified the AI-Generated Code
I did not just copy-paste blindly. Here's what I did:

1. **ProfileCard component** - AI gave me a basic structure, I added proper TypeScript interfaces, custom styling, and changed the avatar image to a real URL.

2. **ContactSection** - AI provided the form logic, I added form validation, success message timeout, and styled it to match the lab requirements.

3. **ProductList with FlatList** - AI showed the pattern, I implemented pull-to-refresh functionality and proper keyExtractor.

4. **Navigation** - AI gave the setup code, I configured screen options and typed the navigation parameters correctly.

5. **Platform-specific code** - I used Platform.OS to show different messages for iOS and Android, and changed button colors based on the platform.

6. **Error fixes** - I debugged the "Expo Go version incompatibility" by reading the error message and upgrading the SDK version with AI's guidance.

## What I Learned
- React Native uses native components (View, Text) instead of HTML elements (div, p)
- Styling uses StyleSheet.create() similar to CSS-in-JS, not CSS classes
- Flexbox works similarly but defaults to column direction
- FlatList is more performant than ScrollView for long lists
- Navigation requires React Navigation library, not built-in
- Platform-specific code is necessary because iOS and Android have different UI patterns
- Expo Go has version limitations - project SDK must match the app version

## Final Note
AI helped me understand concepts faster, but I wrote the final code, fixed errors by researching documentation, and made sure everything works according to the lab rubric. All code has been tested on a physical device with Expo Go.
