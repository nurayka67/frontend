# AI REPORT - Lab 13: Mobile Navigation

**Student Name:** Nuray Koshan
**Course:** Week 13 - Mobile Navigation
**Date:** April 24, 2026

**AI Tool Used:** DeepSeek

**Prompts Used:**
- Give me project structure for stack navigation with bottom tabs
- Fix arrow function syntax error
- Expo Go SDK version mismatch fix
- PlatformConstants error fix

**Modifications Made:**
- Fixed arrow functions: changed `= >` to `=>`
- Downgraded SDK from 55 to 54 for Expo Go compatibility
- Downgraded react-native-screens from 4.2.0 to 3.31.1
- Removed gesture-handler import, used native Switch instead

**What I Learned:**
- Expo Go requires matching SDK versions between project and phone
- react-native-screens 4.x causes native module errors on physical devices
- Web version is reliable fallback: `npx expo start --web`
- Arrow functions must be `=>` without space

**Final Working Solution:** Web browser with bottom tab navigation (Home, Search, Notifications, Profile) and stack navigation between screens.