---
layout: default
title: Privacy Policy
---

# Privacy Policy

**App:** My Fitness Journey  
**Developer:** DataCraft Studio LLC  
**Contact:** support@datacraftllc.com  
**Effective Date:** June 19, 2026  
**Last Updated:** June 23, 2026

---

## Overview

My Fitness Journey is a local-first fitness tracking app. Your health and fitness data — workouts, nutrition logs, biometrics, and goals — lives entirely on your device. There is no account system and no cloud sync. DataCraft Studio LLC does not receive, collect, or store your fitness data on any server.

---

## Data Stored On Your Device

The following data is stored locally on your device using your phone's built-in storage (AsyncStorage and, for sensitive items, secure device storage). Your app data is not transmitted to DataCraft Studio LLC. It is only sent to third-party services if you choose to use optional features — such as AI coaching or food search — and provide your own API key for those services.

- **Workout logs** — exercise names, sets, reps, weights, and dates
- **Nutrition logs** — meal names, calorie counts, macros (protein, carbs, fat), and dates
- **Biometric entries** — body weight and body fat percentage measurements
- **Goals** — target weight, body fat, and workout frequency
- **User profile** — name, age, height, starting weight, sex, and activity level
- **App settings** — theme preference, unit preferences, and accessibility settings
- **API keys** — your Gemini or USDA API key, if provided (stored using secure device storage; see below)

You can delete all of this data at any time via **Settings → Manage Data → Delete All Data**.

**iCloud Backup:** iOS may include your app data in your iCloud backup by default. This backup is controlled entirely by you through your iPhone's iCloud settings and is governed by Apple's Privacy Policy. We do not have access to your iCloud backup.

**Data Loss:** If you delete the app or lose your device, locally stored data may be lost unless it has been preserved by your device's backup behavior (e.g., iCloud backup on iOS). We recommend exporting your data periodically via **Settings → Manage Data → Export Data**.

---

## AI Features — How They Work

My Fitness Journey includes optional AI features: AI Coach, Meal Planner, and Workout Split Builder. These features require you to provide your own Google Gemini API key in **Settings → API Integrations**.

- **Your Gemini API key** is stored on your device using secure device storage via `expo-secure-store` (such as iOS Keychain on Apple devices). It is never transmitted to DataCraft Studio LLC.
- When you use an AI feature, relevant app context (such as your goals, recent workouts, or nutrition summary) and your prompt are sent **directly from your device to Google's Gemini API** using your own API key. DataCraft Studio LLC does not receive or have visibility into your prompts, responses, or API key.
- AI-generated responses are general fitness and nutrition guidance only. They may be inaccurate or incomplete and are not a substitute for professional advice.
- Do not enter sensitive medical information into AI features.
- Your use of the Gemini API is governed by [Google's Privacy Policy](https://policies.google.com/privacy).

---

## Food Search — USDA FoodData Central

The food search feature is optional and requires you to provide your own USDA FoodData Central API key in **Settings → API Integrations**.

- Your USDA API key is stored using secure device storage via `expo-secure-store` (such as iOS Keychain on Apple devices). It is never transmitted to DataCraft Studio LLC.
- When you perform a food search, your query is sent directly from your device to the USDA FoodData Central API using your own key. DataCraft Studio LLC does not receive or have visibility into your search queries.
- You can delete your USDA key at any time via **Settings → API Integrations** or **Settings → Manage Data → Delete All Data**.
- Your use of the USDA API is governed by the [USDA's privacy policy](https://www.usda.gov/privacy-policy).

---

## Data Sharing

We do not sell, rent, or share your personal data with any third party for marketing or advertising purposes.

The external services this app may communicate with — only when you actively use the relevant optional feature and provide your own API key — are:

| Service | Purpose | Data Sent | Their Privacy Policy |
|---|---|---|---|
| Google Gemini API | AI Coach, Meal Planner, Workout Split Builder *(requires your own key)* | App context + your prompt | [Link](https://policies.google.com/privacy) |
| USDA FoodData Central | Food search *(optional, requires your own key)* | Search query | [Link](https://www.usda.gov/privacy-policy) |

---

## Support Communications

If you contact us for support (e.g., by email), we may receive your email address, name, and any information you choose to include in your message. We use this information only to respond to your request and provide support. We do not share it with third parties or use it for marketing.

---

## Third-Party SDKs

This app is built with Expo and React Native, which include standard open-source libraries and development tooling. Some of these frameworks may collect minimal anonymous diagnostic data (such as crash signals or SDK version pings) as part of their standard operation. This data, if collected, is governed by their respective privacy policies and does not include any of your fitness or health data.

We do not currently use analytics or crash reporting SDKs beyond what is included by default in the Expo/React Native framework. We may add optional analytics or crash reporting in the future. If we do, we will update this Privacy Policy and provide appropriate disclosures within the app.

---

## California Residents (CCPA)

If you are a California resident, you have the right to know what personal information is collected about you, request deletion of your personal information, and opt out of the sale of your personal information. We do not sell personal information. Since all fitness and health data is stored locally on your device and never transmitted to us, you already have full control: you can view it in the app, export it, or delete it at any time via **Settings → Manage Data**.

---

## International Users (GDPR)

If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to access, correct, or erase your personal data. Since we do not collect or store your fitness data on any server, your data remains under your full control at all times. For any questions or requests, contact us at support@datacraftllc.com.

---

## Children's Privacy

This app is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided information through this app, please contact us and we will take steps to address it.

---

## Your Rights

Since all health and fitness data is stored locally on your device, you have full control:

- **Access:** all your data is visible within the app
- **Export:** export a full JSON copy via **Settings → Manage Data → Export Data**
- **Delete:** wipe everything via **Settings → Manage Data → Delete All Data**

For questions about data processed by Google (Gemini AI requests) or USDA (food search queries), contact those providers directly or refer to their respective privacy controls: [Google](https://policies.google.com/privacy) · [USDA](https://www.usda.gov/privacy-policy).

---

## Changes to This Policy

If we make material changes to this privacy policy, we will update the "Last Updated" date above. Continued use of the app after changes constitutes acceptance of the updated policy. For significant changes, we will make reasonable efforts to notify you within the app.

---

## Contact

If you have questions or concerns about this privacy policy, please contact us:

**DataCraft Studio LLC**  
support@datacraftllc.com
