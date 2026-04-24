# AI Usage Report - Lab 14

**Student Name:** Nuray Koshan
**Date:** 24.04.2026
**AI Tool:** ChatGPT

---

## 1. Tool Used
ChatGPT  – used for consultations on React Native and debugging.

---

## 2. Prompts Used

- "how to properly structure an Expo project with TypeScript"
- "help fix Metro error: package.json invalid JSON"
- "why is expo-asset not found and how to fix it"
- "how to run the project in browser instead of phone"
- "why is TextInput not working on web"
- "how to implement pull-to-refresh in FlatList"
- "how to configure KeyboardAvoidingView correctly"

---

## 3. What I Did (myself)

1. **Created project structure:**
   - src/screens, src/types, src/utils
   - Wrote types.ts, mockData.ts

2. **Implemented ContactsScreen:**
   - Used FlatList with useCallback for optimization
   - Added RefreshControl for pull-to-refresh
   - Configured getItemLayout for fixed 80px height

3. **Implemented RegistrationScreen:**
   - Form with email validation using regex
   - KeyboardAvoidingView for iOS/Android
   - TouchableWithoutFeedback to dismiss keyboard

4. **Fixed Expo issues:**
   - Recreated package.json after parsing errors
   - Manually installed expo-asset
   - Switched to web version due to SDK incompatibility

5. **Adapted form for web:**
   - Replaced TextInput with HTML `<input>` for browser compatibility

---

## 4. AI Consultation (what AI suggested)

- Suggested using `useCallback` for renderItem
- Explained the difference between ScrollView and FlatList
- Recommended `getItemLayout` for performance
- Helped configure `KeyboardAvoidingView` (padding for iOS, height for Android)
- Suggested `--legacy-peer-deps` for dependency conflicts

---

## 5. What I Learned

- FlatList only renders visible items (virtualization)
- For performance, use `useCallback` and `getItemLayout`
- TextInput is unstable on web – better to use `<input>`
- Expo Go on phone only supports the latest SDK version
- For cross-platform development, testing in browser is convenient
