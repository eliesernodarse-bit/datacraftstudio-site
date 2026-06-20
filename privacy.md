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

My Fitness Journey is a local-first fitness tracking app. Your health and fitness data — workouts, nutrition logs, biometrics, and goals — lives entirely on your device. We do not have a backend, we do not sync your data to any server, and we cannot access it.

---

## Data Stored On Your Device

The following data is stored locally on your device using your phone's built-in storage (iOS: AsyncStorage and Keychain). None of this data is transmitted to us or any third party:

- **Workout logs** — exercise names, sets, reps, weights, and dates
- **Nutrition logs** — meal names, calorie counts, macros (protein, carbs, fat), and dates
- **Biometric entries** — body weight and body fat percentage measurements
- **Goals** — target weight, body fat, and workout frequency
- **User profile** — name, age, height, starting weight, sex, and activity level
- **App settings** — theme preference, unit preferences, and accessibility settings
- **API keys** — your USDA API key, if provided (stored securely; see below)

You can delete all of this data at any time via **Settings → Manage Data → Delete All Data**.

**iCloud Backup**: iOS may include your app data in your iCloud backup by default. This backup is controlled entirely by you through your iPhone's iCloud settings and is governed by Apple's Privacy Policy. We do not have access to your iCloud backup.

---

## API Keys & Third-Party Services

**AI Coach (Groq — built in):** The app uses Groq's API (Meta's Llama 3.3 model) as the default AI provider. When you use the AI Coach or workout split builder, your fitness context and prompt are sent directly from your device to **Groq's API** — we are not a middleman and do not store or see these requests. Your use is also governed by [Groq's Privacy Policy](https://groq.com/privacy-policy/).

**AI Coach (Google Gemini — optional):** You may optionally add your own Google Gemini API key via **Settings → API Integrations**. If provided, it takes precedence over the built-in Groq connection. Your key is stored in your device's **secure enclave** (iOS Keychain via `expo-secure-store`) and is never transmitted to us. When active, your prompts are sent to Google's Gemini API instead of Groq. Your use is also governed by [Google's Privacy Policy](https://policies.google.com/privacy). You can delete your Gemini key at any time via **Settings → Manage Data → Delete All Data**, or individually via **Settings → API Integrations**.

**Expanded Food Search (USDA FoodData Central):** This is an optional feature that requires you to provide your own USDA API key. If you provide one:
- Your key is stored in your device's **secure enclave** (iOS Keychain via `expo-secure-store`) — not in plain text storage
- It is **never transmitted to us or our servers**
- Food search queries are sent directly from your device to the **USDA FoodData Central API** using your key

You can delete your USDA key at any time via **Settings → Manage Data → Delete All Data**, or individually via **Settings → API Integrations**.

---

## Data Sharing

We do not sell, rent, or share your personal data with any third party for marketing or advertising purposes.

The only external services this app communicates with are:

| Service | Purpose | Data Sent | Their Privacy Policy |
|---|---|---|---|
| Groq API | AI Coach + workout split builder *(built into the app)* | Your fitness context + your prompt | [Link](https://groq.com/privacy-policy/) |
| Google Gemini API | AI Coach + workout split builder *(optional — only if you add your own key)* | Your fitness context + your prompt | [Link](https://policies.google.com/privacy) |
| USDA FoodData Central | Food search *(optional, requires your own key)* | Search query | [Link](https://www.usda.gov/privacy-policy) |

The Groq AI integration is built into the app and does not require a key from you. Google Gemini is an optional override — only active if you add your own key in Settings. The USDA food search integration is optional and requires you to provide your own API key.

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

For questions about data processed by Groq (AI Coach requests), Google (Gemini API requests, if you've added your own key), or USDA (food search queries), contact those providers directly or refer to their respective privacy controls: [Groq](https://groq.com/privacy-policy/) · [Google](https://policies.google.com/privacy) · [USDA](https://www.usda.gov/privacy-policy).

---

## Changes to This Policy

If we make material changes to this privacy policy, we will update the "Last Updated" date above. Continued use of the app after changes constitutes acceptance of the updated policy. For significant changes, we will make reasonable efforts to notify you within the app.

---

## Contact

If you have questions or concerns about this privacy policy, please contact us:

**DataCraft Studio LLC**  
datacraftstudiollc@gmail.com
