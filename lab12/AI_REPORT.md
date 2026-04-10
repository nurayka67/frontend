# AI REPORT

**Student Name:** Nuray Koshan
**Date:** 2026-04-03

---

## AI Tool Used
- **Tool:** DeepSeek
- **Role:** Consultant for React Native syntax and Flexbox best practices

---

## Prompts Used
1. "How to create a responsive grid in React Native?"
2. "How to use SafeAreaView for different platforms?"
3. "How to detect tablet or phone in React Native?"
4. "How does flexDirection and justifyContent work?"
5. "How to make an adaptive header with buttons?"

---

## How I Used AI

| Component | AI Helped With | I Did Myself |
|-----------|---------------|--------------|
| GridLayout | Example of responsive grid | Added tablet support, modified styles |
| ResponsiveHeader | Basic SafeAreaView structure | Platform-specific padding, landscape mode |
| AdaptiveLayout | useWindowDimensions hook | TabletLayout, FeatureCard, StatsRow |

---

## Verification
- Tested on Android emulator - working
- Tested on phone (portrait and landscape)
- TypeScript - no errors
- Flexbox working correctly

---

## What I Learned
- Flexbox in React Native is similar to CSS Flexbox
- useWindowDimensions is needed for responsive design
- SafeAreaView is important for notched devices
- Platform.select helps for different OS

---

## Statement
I wrote the code independently. AI was used only as a reference for syntax and best practices.
