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

This Privacy Policy covers every app published by DataCraft Studio LLC — currently **My Fitness Journey** and **trvlr** — and applies automatically to any app we publish in the future. The **General** section below applies to all of our apps and to the shared account system. Each app then has its own section describing exactly what that app collects and how it works.

---

## General — Account & All Apps

**One account, shared across all our apps.** Some of our apps (currently trvlr; more may require this over time) let you create a single DataCraft Studio account — used only for signing in, nothing else — via Firebase Authentication, a service operated by Google. That one account works across every current and future DataCraft Studio app; you never need a separate account per app.

- **What we collect for the account:** your email address and a password, managed entirely by Firebase Authentication (we never see or store your password ourselves — Firebase Authentication handles that using industry-standard hashing).
- **Account actions:** every app that uses this account system offers the same core actions — Sign Up, Sign In, Sign Out, Forgot Password, and Change Password (from within Settings) — plus the ability to permanently delete your account and all data tied to it in every app.
- **Deleting your account** removes your account itself and all app-specific data associated with it (see each app's section below for exactly what that includes), across every app you've used with that account. This can't be undone.
- **Data isolation between apps:** each app's data is kept separate from every other app's data, even though it's tied to the same account. My Fitness Journey has no access to trvlr's data, and vice versa.
- Apps that don't currently require an account (see My Fitness Journey below) store all of their data locally on your device instead, with no account or server involved at all.

### Support Communications
If you contact us for support (e.g., by email), we may receive your email address, name, and any information you choose to include in your message. We use this only to respond to your request and provide support — we don't share it with third parties or use it for marketing.

### Third-Party SDKs
Our apps are built with Expo and React Native, which include standard open-source libraries and development tooling. Some of these frameworks may collect minimal anonymous diagnostic data (such as crash signals or SDK version pings) as part of their standard operation, governed by their own privacy policies. We do not currently use analytics or crash-reporting SDKs beyond what's included by default in the Expo/React Native framework. If that changes, we'll update this policy and disclose it in-app.

### California Residents (CCPA)
If you are a California resident, you have the right to know what personal information is collected about you, request deletion of it, and opt out of its sale. We do not sell personal information. For app-specific data stored locally on your device (see each app's section), you already have full control via that app's own data-management settings; for account data, request deletion via that app's account settings or by contacting us.

### International Users (GDPR)
If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to access, correct, or erase your personal data. Contact us at support@datacraftllc.com for any account-level request; app-specific data stored locally on your device remains under your full control at all times.

### Children's Privacy
Our apps are not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided information through one of our apps, contact us and we will take steps to address it.

### Changes to This Policy
If we make material changes to this policy, we'll update the "Last Updated" date above. Continued use of any of our apps after changes constitutes acceptance of the updated policy. For significant changes, we'll make reasonable efforts to notify you in-app.

### Contact
**DataCraft Studio LLC**  
support@datacraftllc.com

---

## My Fitness Journey

My Fitness Journey is a local-first fitness tracking app. Your health and fitness data — workouts, nutrition logs, biometrics, and goals — lives entirely on your device. My Fitness Journey does not currently require an account, has no cloud sync, and DataCraft Studio LLC does not receive, collect, or store your fitness data on any server.

**Data stored on your device** (AsyncStorage, and secure device storage for sensitive items — never transmitted to DataCraft Studio LLC, and only ever sent to a third-party service if you actively use an optional feature with your own API key):

- **Workout logs** — exercise names, sets, reps, weights, and dates
- **Nutrition logs** — meal names, calorie counts, macros (protein, carbs, fat), and dates
- **Biometric entries** — body weight and body fat percentage measurements
- **Goals** — target weight, body fat, and workout frequency
- **User profile** — name, age, height, starting weight, sex, and activity level
- **App settings** — theme preference, unit preferences, and accessibility settings
- **API keys** — your Gemini or USDA API key, if provided (stored using secure device storage)

You can delete all of this data at any time via **Settings → Manage Data → Delete All Data**.

**iCloud Backup:** iOS may include your app data in your iCloud backup by default, controlled entirely by you through your iPhone's iCloud settings and governed by Apple's Privacy Policy — we have no access to it.

**Data Loss:** If you delete the app or lose your device, locally stored data may be lost unless preserved by your device's own backup behavior. We recommend exporting your data periodically via **Settings → Manage Data → Export Data**.

**AI Features (AI Coach, Meal Planner, Workout Split Builder):** These require your own Google Gemini API key, entered in **Settings → API Integrations** and stored using secure device storage (`expo-secure-store`) — never transmitted to DataCraft Studio LLC. When used, relevant app context (goals, recent workouts, nutrition summary) and your prompt are sent **directly from your device to Google's Gemini API** using your own key; we have no visibility into your prompts, responses, or key. Responses are general guidance only, may be inaccurate, and are not a substitute for professional advice — do not enter sensitive medical information. Governed by [Google's Privacy Policy](https://policies.google.com/privacy).

**Food Search (USDA FoodData Central):** Optional, requires your own USDA API key in **Settings → API Integrations**, stored the same way as your Gemini key. Search queries go directly from your device to the USDA's API using your key; we have no visibility into them. Governed by the [USDA's privacy policy](https://www.usda.gov/privacy-policy). Delete your key anytime via **Settings → API Integrations** or **Settings → Manage Data → Delete All Data**.

| Service | Purpose | Data Sent | Their Privacy Policy |
|---|---|---|---|
| Google Gemini API | AI Coach, Meal Planner, Workout Split Builder *(your own key)* | App context + your prompt | [Link](https://policies.google.com/privacy) |
| USDA FoodData Central | Food search *(optional, your own key)* | Search query | [Link](https://www.usda.gov/privacy-policy) |

**Your Rights:** since all data is stored locally, you have full control — **Access** it anytime in the app, **Export** a full JSON copy via **Settings → Manage Data → Export Data**, or **Delete** everything via **Settings → Manage Data → Delete All Data**.

---

## trvlr

trvlr is an AI-assisted trip planning app. Unlike My Fitness Journey, trvlr requires a DataCraft Studio account (see General section above) — used to keep your Travel Points balance safe across devices and, if you choose, to sync your travel profile and trips.

**Data tied to your account, stored in Cloud Firestore (Google Cloud):**

- **Travel Points balance** — a points ledger used to pay for AI itinerary generation; server-managed, never directly editable by the app.
- **Travel profile** — name, home airport/city, date of birth, and your travel preferences (pace, budget, travel style, who you usually travel with).
- **Trips** — destinations, itineraries, activities, and notes for trips you create. **Photos you attach to a trip stay on your device only and are never synced or uploaded.**

**Data stored only on your device:** your Gemini API key (via secure device storage, same as My Fitness Journey — never sent to DataCraft Studio LLC), and trip photos.

**AI Features:** Trip generation and refinement require your own Google Gemini API key, entered in **Profile → API Integrations**. When you generate or refine a trip, your travel profile and prompt are sent **directly from your device to Google's Gemini API** using your own key — DataCraft Studio LLC has no visibility into your prompts, responses, or key. AI-generated itineraries may be inaccurate or outdated — always verify hours, prices, safety, road conditions, visa requirements, and bookings before you travel. Governed by [Google's Privacy Policy](https://policies.google.com/privacy).

**Deleting your account:** available via **Profile → Delete My Account** — permanently deletes your account, travel profile, all synced trips, and your Travel Points balance. This can't be undone.

| Service | Purpose | Data Sent | Their Privacy Policy |
|---|---|---|---|
| Firebase Authentication | Account sign-in | Email, password (handled by Firebase) | [Link](https://policies.google.com/privacy) |
| Cloud Firestore | Storing your travel profile, trips, and Travel Points balance | Travel profile, trip content, points balance | [Link](https://policies.google.com/privacy) |
| Google Gemini API | AI trip generation and refinement *(your own key)* | Travel profile + your prompt | [Link](https://policies.google.com/privacy) |
