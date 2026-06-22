---
layout: default
title: Privacy Policy
---

# Privacy Policy

**App:** My Fitness Journey  
**Developer:** DataCraft Studio LLC  
**Contact:** datacraftstudiollc@gmail.com  
**Effective Date:** June 19, 2026  
**Last Updated:** June 20, 2026  

---

## Overview

My Fitness Journey is a local-first fitness tracking app. Your health and fitness data — workouts, nutrition logs, biometrics, and goals — lives entirely on your device. We do not sync your fitness data to any server, and we cannot access it.

---

## Data Stored On Your Device

The following data is stored locally on your device using your phone's built-in storage (iOS: AsyncStorage and Keychain). None of this data is transmitted to us or any third party:

- **Workout logs** — exercise names, sets, reps, weights, and dates
- **Nutrition logs** — meal names, calorie counts, macros (protein, carbs, fat), and dates
- **Biometric entries** — body weight and body fat percentage measurements
- **Goals** — target weight, body fat, and workout frequency
- **User profile** — name, age, height, starting weight, sex, and activity level
- **App settings** — theme preference, unit preferences, and accessibility settings
- **API keys** — your Gemini or USDA API key, if provided (stored securely; see below)

You can delete all of this data at any time via **Settings → Manage Data → Delete All Data**.

**iCloud Backup**: iOS may include your app data in your iCloud backup by default. This backup is controlled entirely by you through your iPhone's iCloud settings and is governed by Apple's Privacy Policy. We do not have access to your iCloud backup.

---

## AI Coach — How It Works

When you use the AI Coach, Meal Planner, or Workout Split Builder, the app sends your fitness context (goals, recent workouts, nutrition summary) and your prompt **directly from your device to Google's Gemini API** (Gemini 2.5 Flash model) using your own API key. No data passes through our servers.

**What we store:** Nothing. AI requests go directly from your device to Google. We have no visibility into your prompts or responses.

**Your Gemini API key:** You provide your own key via **Settings → API Integrations**. It is stored in your device's secure enclave (iOS Keychain via `expo-secure-store`) and is never transmitted to us. Your use of the Gemini API is governed by [Google's Privacy Policy](https://policies.google.com/privacy).

---

## API Keys & Third-Party Services

**Expanded Food Search (USDA FoodData Central):** This is an optional feature that requires you to provide your own USDA API key. If you provide one:
- Your key is stored in your device's **secure enclave** (iOS Keychain via `expo-secure-store`) — not in plain text storage
- It is **never transmitted to us or our servers**
- Food search queries are sent directly from your device to the **USDA FoodData Central API** using your key

You can delete your USDA key at any time via **Settings → Manage Data → Delete All Data**, or individually via **Settings → API Integrations**.

---

## Data Sharing

We do not sell, rent, or share your personal data with any third party for marketing or advertising purposes.

The external services this app communicates with are:

| Service | Purpose | Data Sent | Their Privacy Policy |
|---|---|---|---|
| Google Gemini API | AI Coach responses *(requires your own key)* | Your fitness context + your prompt | [Link](https://policies.google.com/privacy) |
| USDA FoodData Central | Food search *(optional, requires your own key)* | Search query | [Link](https://www.usda.gov/privacy-policy) |

---

## Third-Party SDKs

This app is built with Expo and React Native, which include standard open-source libraries and development tooling. Some of these frameworks may collect minimal anonymous diagnostic data (such as crash signals or SDK version pings) as part of their standard operation. This data, if collected, is governed by their respective privacy policies and does not include any of your fitness or health data.

We do not configure or enable any additional third-party analytics, advertising, or tracking SDKs.

---

## California Residents (CCPA)

If you are a California resident, you have the right to know what personal information is collected about you, request deletion of your personal information, and opt out of the sale of your personal information. We do not sell personal information. Since all fitness and health data is stored locally on your device and never transmitted to us, you already have full control: you can view it in the app, export it, or delete it at any time via **Settings → Manage Data**.

---

## International Users (GDPR)

If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to access, correct, or erase your personal data. Since we do not collect or store your fitness data on any server, your data remains under your full control at all times. For any questions or requests, contact us at datacraftstudiollc@gmail.com.

---

## Children's Privacy

This app is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided information through this app, please contact us and we will take steps to delete it.

---

## Your Rights

Since all health and fitness data is stored locally on your device, you have full control:

- **Access**: all your data is visible within the app
- **Export**: export a full JSON copy via **Settings → Manage Data → Export Data**
- **Delete**: wipe everything via **Settings → Manage Data → Delete All Data**

For questions about data processed by Google (Gemini AI Coach requests) or USDA (food search queries), contact those providers directly or refer to their respective privacy controls: [Google](https://policies.google.com/privacy) · [USDA](https://www.usda.gov/privacy-policy).

---

## Changes to This Policy

If we make material changes to this privacy policy, we will update the "Last Updated" date above. Continued use of the app after changes constitutes acceptance of the updated policy. For significant changes, we will make reasonable efforts to notify you within the app.

---

## Contact

If you have questions or concerns about this privacy policy, please contact us:

**DataCraft Studio LLC**  
datacraftstudiollc@gmail.com
