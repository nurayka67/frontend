# AI REPORT

**Student Name:** Nuray Koshan
**Date:** 2026-04-01
**Assignment:** Lab 08 - Server-Side Rendering with Next.js

---

## AI Tool Used
- **Tool:** DeepSeek
- **Role:** Consultant for debugging and concept explanation

---

## Prompts I Asked
1. "Explain SSR vs SSG vs ISR in Next.js"
2. "How to create dynamic routes with getStaticPaths?"
3. "How to fix hydration mismatch error?"
4. "How to structure a Next.js project with TypeScript?"
5. "Show example of getServerSideProps for dashboard"

---

## What I Learned from AI

| Concept | What I Understood |
|---------|-------------------|
| **SSG** | `getStaticProps` runs at build time. Good for blog posts. |
| **SSR** | `getServerSideProps` runs on every request. Good for user dashboards. |
| **ISR** | `revalidate: 60` regenerates page every 60 seconds. |
| **Hydration** | Server and client must render same content. Fixed by passing date as prop. |

---

## Code I Wrote Myself

After understanding the concepts, I wrote:
- All TypeScript interfaces (`Post`, `Author`, `User`, `Notification`)
- Mock data in `lib/api.ts`
- Home page with SSG + ISR
- Dynamic post pages with `getStaticPaths`
- Dashboard with SSR
- About pages for comparison

---

## How I Used AI (Not Copy-Paste)

1. **Asked for explanation** → understood the theory
2. **Checked syntax** → wrote my own code
3. **Got error fixes** → applied solutions manually
4. **Compared approaches** → chose best fit for each task

---

## Problems I Solved

| Problem | Solution |
|---------|----------|
| App Router vs Pages Router conflict | Deleted `app` folder |
| Hydration error with `new Date()` | Moved date to `getStaticProps` |
| ENOSPC error | Cleared npm cache and moved to D: drive |

---

## What I Can Do Now

-  Choose between SSR, SSG, and ISR for different use cases
-  Implement `getStaticProps` and `getServerSideProps`
-  Create dynamic routes with `getStaticPaths`
-  Explain when to use each rendering strategy

---

**I used AI as a learning consultant, not a code generator. All code was written by me based on my understanding.**
