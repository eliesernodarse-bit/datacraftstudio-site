---
layout: default
title: Privacy Policy
---

# Privacy Policy

**Developer:** DataCraft Studio LLC  
**Contact:** support@datacraftllc.com  
**Effective Date:** June 19, 2026  
**Last Updated:** July 6, 2026

---

This Privacy Policy covers every app published by DataCraft Studio LLC — currently **fitr+** (with **travelr+** launching soon) — and applies automatically to any app we publish in the future. The **General** section below applies to all of our apps and to the shared account system. Each app then has its own section describing exactly what that app collects and how it works.

---

## General — Account & All Apps

**One account, shared across all our apps.** All of our apps require you to create a single DataCraft Studio account — used only for signing in, nothing else — via Firebase Authentication, a service operated by Google. That one account works across every current and future DataCraft Studio app; you never need a separate account per app.

- **What we collect for the account:** your email address and a password. Your password is managed entirely by Firebase Authentication — we never see or store it ourselves, Firebase Authentication handles that using industry-standard hashing. Your email address is also stored, associated with your account identifier, in our Cloud Firestore database (Google Cloud) — this is what lets us identify your account for support requests and account-level actions like deletion.
- **Account actions:** every app offers the same core actions — Sign Up, Sign In, Sign Out, Forgot Password, and Change Password (from within Settings) — plus the ability to permanently delete your account and all data tied to it in every app.
- **Deleting your account** removes your account itself and all app-specific data associated with it (see each app's section below for exactly what that includes), across every app you've used with that account. This can't be undone.
- **Data isolation between apps:** each app's data is kept separate from every other app's data, even though it's tied to the same account. fitr+ has no access to travelr+'s data, and vice versa.

### Support Communications
If you contact us for support (e.g., by email), we may receive your email address, name, and any information you choose to include in your message. We use this only to respond to your request and provide support — we don't share it with third parties or use it for marketing.

### Third-Party SDKs
Our apps are built with Expo and React Native, which include standard open-source libraries and development tooling. Some of these frameworks may collect minimal anonymous diagnostic data (such as crash signals or SDK version pings) as part of their standard operation, governed by their own privacy policies. We do not currently use analytics or crash-reporting SDKs beyond what's included by default in the Expo/React Native framework. If that changes, we'll update this policy and disclose it in-app.

### California Residents (CCPA)
If you are a California resident, you have the right to know what personal information is collected about you, request deletion of it, and opt out of its sale. We do not sell personal information. Nearly all app data is tied to your account and deleted via each app's own account-deletion action (see each app's section below); the few things stored only on your device (remaining API keys, app settings) are already under your full control without any request needed.

### International Users (GDPR)
If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to access, correct, or erase your personal data. Contact us at support@datacraftllc.com for any account-level request, or use each app's own account-deletion action; anything stored only on your device (remaining API keys, app settings) remains under your full control at all times.

### Children's Privacy
Our apps are not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided information through one of our apps, contact us and we will take steps to address it.

### Changes to This Policy
If we make material changes to this policy, we'll update the "Last Updated" date above. Continued use of any of our apps after changes constitutes acceptance of the updated policy. For significant changes, we'll make reasonable efforts to notify you in-app.

### Contact
**DataCraft Studio LLC**  
support@datacraftllc.com

---

## fitr+

fitr+ is a fitness tracking app. fitr+ requires a DataCraft Studio account (see General above) — used to keep your **Energy Points** balance (spent on AI Coach questions, Meal Plans, and Workout Splits) safe across devices, and to sync your workouts, nutrition logs, biometrics, goals, and profile so they survive a reinstall or a new device.

**Data tied to your account, stored in Cloud Firestore (Google Cloud):**

- **Energy Points balance** — a points ledger used to pay for AI Coach questions, Meal Plans, and Workout Splits; server-managed, never directly editable by the app.
- **Workout logs** — exercise names, sets, reps, weights, and dates.
- **Nutrition logs** — meal names, calorie counts, macros (protein, carbs, fat), dates, saved meal favorites, and manually-entered foods.
- **Biometric entries** — body weight and body fat percentage measurements over time. This is the one place your weight history is stored — your profile itself does not duplicate it (see below).
- **Goals** — target weight, body fat, workout frequency, fitness goal, pace, and activity level.
- **User profile** — name, date of birth, height, sex, and activity level. Your **starting weight, entered during onboarding, is deliberately not included here** — it's stored as a biometric entry instead, so there's only one place your weight actually lives.
- **AI Workout Split** — your most recently generated/saved workout split, if any.
- **Weekly check-ins & nutrition target history** — the app's periodic nutrition recommendations and the record of target changes you've applied.

**Data stored only on your device** (never transmitted to DataCraft Studio LLC): your USDA API key (secure device storage), and app settings (theme, unit preferences, accessibility settings).

**iCloud Backup:** iOS may include your app data in your iCloud backup by default, controlled entirely by you through your iPhone's iCloud settings and governed by Apple's Privacy Policy — we have no access to it.

**AI Features (AI Coach, Meal Planner, Workout Split Builder):** These use Google's Gemini model through our own backend (Firebase Cloud Functions) — you do not need, and the app does not ask for, your own Gemini API key. When you use one of these features, relevant app context (goals, recent workouts, nutrition summary) and your prompt are sent from your device to our Cloud Function, which forwards them to Google's Gemini API using a key we manage, and returns the response to your device. **Our backend does not store or log your prompts or Gemini's responses** — the only thing recorded is which feature you used, when, and whether it succeeded, tied to your account (this is also what your Energy Points balance is spent against). Responses are general guidance only, may be inaccurate, and are not a substitute for professional advice — do not enter sensitive medical information. Governed by [Google's Privacy Policy](https://policies.google.com/privacy).

**Food Search (USDA FoodData Central):** Optional, requires your own USDA API key in **Settings → API Integrations**, stored using secure device storage (`expo-secure-store`) — never transmitted to DataCraft Studio LLC. Search queries go directly from your device to the USDA's API using your key; we have no visibility into them. Governed by the [USDA's privacy policy](https://www.usda.gov/privacy-policy). Delete your key anytime via **Settings → API Integrations**.

**Deleting your account:** available via **Profile → Delete Account** — permanently deletes your account, Energy Points balance, and all synced workouts/nutrition/biometrics/goals/profile data. This can't be undone. This is the only way to delete your fitness data — there is no separate local-only wipe.

**Your Rights:** **Access** your data anytime in the app, or **delete** everything (account + all synced data) via **Profile → Delete Account**.

| Service | Purpose | Data Sent | Their Privacy Policy |
|---|---|---|---|
| Firebase Authentication | Account sign-in | Email, password (handled by Firebase) | [Link](https://policies.google.com/privacy) |
| Cloud Firestore | Storing your Energy Points balance, workouts, nutrition logs, biometrics, goals, and profile | Fitness data + points balance | [Link](https://policies.google.com/privacy) |
| Cloud Functions (our backend) | Proxies AI Coach, Meal Planner, and Workout Split Builder requests to Gemini using our own key — not stored or logged | App context + your prompt (in transit only) | [Link](https://policies.google.com/privacy) |
| Google Gemini API | Generates AI Coach, Meal Planner, and Workout Split Builder responses | App context + your prompt (via our backend) | [Link](https://policies.google.com/privacy) |
| USDA FoodData Central | Food search *(optional, your own key)* | Search query | [Link](https://www.usda.gov/privacy-policy) |

---

## travelr+

travelr+ is an AI-assisted trip planning app. Like fitr+, travelr+ requires a DataCraft Studio account (see General section above) — used to keep your Travel Points balance safe across devices and to sync your travel profile and trips.

**Data tied to your account, stored in Cloud Firestore (Google Cloud):**

- **Travel Points balance** — a points ledger used to pay for AI itinerary generation; server-managed, never directly editable by the app.
- **Travel profile** — name, home airport/city, date of birth, and your travel preferences (pace, budget, travel style, who you usually travel with).
- **Trips** — destinations, itineraries, activities, and notes for trips you create. **Photos you attach to a trip stay on your device only and are never synced or uploaded.**

**Data stored only on your device:** trip photos, and app settings (theme, accessibility settings).

**AI Features:** Trip generation and refinement use Google's Gemini model through our own backend (Firebase Cloud Functions) — you do not need, and the app does not ask for, your own Gemini API key. When you generate or refine a trip, your travel profile and prompt are sent from your device to our Cloud Function, which forwards them to Google's Gemini API using a key we manage, and returns the response to your device. **Our backend does not store or log your prompts or Gemini's responses** — the only thing recorded is which action you took, when, and whether it succeeded, tied to your account (this is also what your Travel Points balance is spent against). AI-generated itineraries may be inaccurate or outdated — always verify hours, prices, safety, road conditions, visa requirements, and bookings before you travel. Governed by [Google's Privacy Policy](https://policies.google.com/privacy).

**Deleting your account:** available via **Profile → Delete My Account** — permanently deletes your account, travel profile, all synced trips, and your Travel Points balance. This can't be undone.

| Service | Purpose | Data Sent | Their Privacy Policy |
|---|---|---|---|
| Firebase Authentication | Account sign-in | Email, password (handled by Firebase) | [Link](https://policies.google.com/privacy) |
| Cloud Firestore | Storing your travel profile, trips, and Travel Points balance | Travel profile, trip content, points balance | [Link](https://policies.google.com/privacy) |
| Cloud Functions (our backend) | Proxies trip generation/refinement requests to Gemini using our own key — not stored or logged | Travel profile + your prompt (in transit only) | [Link](https://policies.google.com/privacy) |
| Google Gemini API | Generates trip itineraries and refinements | Travel profile + your prompt (via our backend) | [Link](https://policies.google.com/privacy) |
