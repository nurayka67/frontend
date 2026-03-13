# AI Usage Report

**Student Name:** Nuray Koshan  
**Date:** 13.03.2026  

## AI Tools Used
- ChatGPT

## Prompts Used
1. "Create React TypeScript project with performance optimization examples"
2. "Implement React.memo, useMemo, useCallback examples"
3. "Create virtualized list with react-window"
4. "Fix TypeScript errors in react-window components"
5. "Generate sample data for large lists"

## How I Modified/Verified the Code
- **React.memo**: Verified that UserCard doesn't re-render when count changes in Dashboard
- **useMemo**: Confirmed that expensive calculation runs only when items change
- **useCallback**: Verified functions have stable references between renders
- **Virtualization**: Compared DOM nodes count in RegularList (1000+) vs VirtualList (~20)
- **TypeScript**: Fixed all type errors, added proper interfaces
- **Performance**: Measured render time using Chrome DevTools

## What I Learned
1. **React.memo** prevents unnecessary component re-renders when props haven't changed
2. **useMemo** caches expensive computation results, saving CPU time
3. **useCallback** stabilizes functions, critical when passing them to memoized components
4. **Virtualization** with react-window renders only visible items (10-20 instead of 10000+)
5. **Profiling** should be done before optimization to avoid optimizing what doesn't need it
6. **TypeScript** helps avoid type errors when working with libraries

## Challenges Faced
- Initially had type errors with react-window (solved by installing @types/react-window)
- Issues with JSX comments (Vite 8 has a strict parser)
- Setting correct dependencies in deps array for hooks

## Verification Steps
1. Ran both projects (`npm run dev`)
2. Opened Chrome DevTools (F12)
3. Checked console for re-render logs
4. Compared virtual vs regular list performance
5. Verified all components work as expected