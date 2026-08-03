---
layout: default
title: Terms of Service
---

# Terms of Service

**Developer:** DataCraft Studio LLC  
**Contact:** support@datacraftllc.com  
**Effective Date:** June 19, 2026  
**Last Updated:** August 3, 2026

---

These Terms of Service cover every app published by DataCraft Studio LLC — currently **fitr+** (with **travelr+** launching soon) — and apply automatically to any app we publish in the future. The **General** section below applies to all of our apps. Each app then has its own section covering anything specific to that app.

---

## General — All Apps

### 1. Acceptance of Terms

By downloading, installing, or using any app published by DataCraft Studio LLC ("we," "us," or "our," and each, an "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the App. Your continued use of any App after an update to these Terms constitutes acceptance of the revised Terms.

### 2. Accounts

All of our Apps require creating an account via Firebase Authentication. That one account works across every current and future DataCraft Studio app — you're responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You may delete your account at any time from within any App that uses it; this permanently deletes the account and all app-specific data tied to it (see each App's section below).

### 3. Eligibility

Our Apps are intended for users who are 13 years of age or older. By using an App, you represent that you are at least 13. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms.

### 4. Intellectual Property

Each App, including its design, code, graphics, and content, is owned by DataCraft Studio LLC and protected by applicable copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to use each App for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or sublicense any App or part of it; reverse engineer, decompile, or disassemble it; use it to build a competing product; or remove any proprietary notices.

### 5. Privacy

Your use of any App is also governed by our [Privacy Policy](https://datacraftstudiollc.com/apps/privacy), which is incorporated into these Terms by reference.

### 6. Third-Party Services (General)

Where an App uses a third-party service (e.g., Google Gemini, Firebase, Apple's In-App Purchase system), we are not responsible for the availability, accuracy, content, or policies of that service, and your use of it is governed by that provider's own terms. See each App's section below for which services it uses and how.

### 7. Disclaimer of Warranties

EACH APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. WE DO NOT WARRANT THAT ANY APP WILL MEET YOUR SPECIFIC REQUIREMENTS OR THAT ANY ERRORS WILL BE CORRECTED.

### 8. Limitation of Liability

TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, DATACRAFT STUDIO LLC AND ITS MEMBERS, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES; LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL; DAMAGES ARISING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA; OR DAMAGES ARISING FROM THE CONDUCT OF ANY THIRD-PARTY SERVICE. IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU ACROSS ALL APPS EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR $10 (USD), WHICHEVER IS GREATER. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO THE ABOVE MAY NOT APPLY TO YOU IN FULL.

### 9. Indemnification

You agree to indemnify, defend, and hold harmless DataCraft Studio LLC and its members, officers, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from your use of any App, your violation of these Terms or any third party's rights, or your use of any third-party service through an App.

### 10. Modifications, Termination, and Governing Law

We may modify, suspend, or discontinue any App (or part of it) at any time without notice, and are not liable for any such change. We may update these Terms from time to time; we'll update the "Last Updated" date above and make reasonable efforts to notify you in-app for material changes. These Terms remain in effect while you use an App; you may stop using it at any time, and (where applicable) delete your account per Section 2 above.

These Terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles. Disputes shall first be attempted through good-faith negotiation; if that fails, through binding arbitration under the American Arbitration Association's rules, conducted in Florida. You waive any right to a class action or class-wide arbitration. Either party may still seek injunctive or equitable relief from a court of competent jurisdiction.

If any provision of these Terms is found unenforceable, it will be limited or eliminated to the minimum extent necessary, and the rest remain in force. These Terms, together with our Privacy Policy, constitute the entire agreement between you and DataCraft Studio LLC regarding each App.

### Contact

**DataCraft Studio LLC**  
support@datacraftllc.com

---

## fitr+

**Description:** fitr+ is a personal fitness tracking application — log workouts, track nutrition, monitor biometrics, set goals, and optionally use AI-powered features (AI Coach, Meal Planner, Workout Split Builder — powered by Google's Gemini model through our own backend, no API key of your own required). The App requires a DataCraft Studio account (see General → Section 2) to keep your **Energy Points** balance — spent on AI Coach questions, Meal Plans, and Workout Splits — safe across devices, and to sync your workouts, nutrition logs, biometrics, goals, and profile so they survive a reinstall or a new device.

**Not Medical Advice.** THE APP IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE MEDICAL ADVICE. Workout logs, nutrition tracking, calorie/macro estimates, biometric monitoring, goal recommendations, and AI coaching responses are for **general informational and fitness tracking purposes only** and are not a substitute for professional medical advice, diagnosis, or treatment.

- Always consult a qualified healthcare provider before beginning any new exercise program, diet, or nutrition plan
- Never disregard or delay seeking professional medical advice because of something in the App
- Stop immediately and consult a healthcare professional if you experience pain, discomfort, dizziness, or shortness of breath during exercise
- The AI Coach is not a licensed medical professional, dietitian, or personal trainer, and its responses may be inaccurate or inappropriate for your circumstances — you are responsible for judging their suitability

**Assumption of Risk.** Physical exercise involves inherent risks, including muscle strain, injury, or serious harm. By using the App, you acknowledge and accept these risks. You are solely responsible for assessing your own fitness/health before undertaking any suggested exercise program, consulting a healthcare professional where appropriate, and using safe form and technique.

**Third-Party API Services.** When you use AI Coach, Meal Planner, or Workout Split Builder, your context and prompt are sent from your device to our own backend (Firebase Cloud Functions), which forwards them to Google's Gemini API using a key we manage and returns the response to your device — we do not store or log your prompts or Gemini's responses. You're responsible for complying with Google's terms for content generated this way, and your use is governed by [Google's Terms of Service](https://policies.google.com/terms). Food Search runs against a food database built into the App plus any foods you enter manually — no external service is involved. We're not responsible for outages, rate limits, or content from Google's Gemini API.

**Energy Points.** AI Coach questions, Meal Plans, and Workout Splits each consume Energy Points from a server-managed balance tied to your account; manual logging (workouts, nutrition, biometrics) never costs points. Energy Points are deducted the moment you start an AI action and are **non-refundable**, even if the request fails, is interrupted, or you leave or background the App before it finishes — the App warns you of this before each AI action starts, so keep it open in the foreground until it completes. Points may be purchased as one-time in-app packages, or obtained via Membership (below). Energy Points have no cash value, are non-transferable, and are not redeemable for cash.

**Membership (Auto-Renewing Subscription).** fitr+ offers an optional Membership subscription, currently priced at **$29.99/month**, which grants a daily Energy Points top-up (bringing your balance up to a fixed daily floor, not stacking on top of it) along with access to AI Coach, Workout Split Builder, and Meal Planner. Membership is a standard Apple in-app auto-renewing subscription:

- Payment is charged to your Apple ID account at confirmation of purchase.
- Your subscription **automatically renews** for the same price and duration unless you turn off auto-renewal at least 24 hours before the end of the current billing period.
- Your account will be charged for renewal within 24 hours prior to the end of the current period, at the then-current price.
- You can manage or cancel your subscription anytime in your **Apple ID Account Settings** (Settings → [your name] → Subscriptions on your device) — not through the App itself.
- Canceling stops future renewals but does not refund the current billing period; you keep Membership benefits through the end of the period you already paid for.
- **All purchases and subscriptions are processed by Apple**, not by DataCraft Studio LLC. Billing, refunds, and payment disputes are handled by Apple according to the [Apple Media Services Terms](https://www.apple.com/legal/internet-services/itunes/) — refund requests should be directed to Apple, not to us.

**Eligibility Note.** The App is not designed for individuals with serious medical conditions without prior written clearance from a qualified healthcare provider.

**Account Deletion.** Deleting your account (**Profile → Delete Account**) permanently deletes your account, Energy Points balance, and all synced fitness data (workouts, nutrition, biometrics, goals, profile) — this can't be undone, and any remaining Energy Points balance is forfeited. **Deleting your account does not cancel an active Membership subscription** — since Membership is billed and managed entirely through your Apple ID, you must separately cancel it in your Apple ID Account Settings, or it will continue to renew and charge you even after your DataCraft Studio account is gone.

---

## travelr+

**Description:** travelr+ is an AI-assisted trip planning app — build day-by-day itineraries, browse them on a map, and refine them with AI. Like fitr+, travelr+ requires a DataCraft Studio account (see General → Section 2) to keep your Travel Points balance safe across devices and to sync your travel profile and trips.

**AI-Generated Content.** Trip plans are generated using Google's Gemini model through our own backend (Firebase Cloud Functions) — no API key of your own required. AI-generated itineraries may be inaccurate, outdated, or unsuitable for your circumstances — **always verify hours, prices, safety, road conditions, visa requirements, and bookings before you travel.** Your prompt and travel profile are sent from your device to our Cloud Function, which forwards them to Google's Gemini API using a key we manage and returns the response to your device; we do not store or log your prompts or Gemini's responses. Your use is governed by [Google's Terms of Service](https://policies.google.com/terms), and we're not responsible for outages, rate limits, or the accuracy of Gemini's responses.

**Travel Points.** AI itinerary generation and refinement consume Travel Points from a server-managed balance tied to your account; manual planning never costs points. Travel Points are deducted the moment you start an AI action and are **non-refundable**, even if the request fails, is interrupted, or you leave or background the App before it finishes — the App warns you of this before each AI action starts, so keep it open in the foreground until it completes. Points may be purchased as in-app packages. Travel Points have no cash value, are non-transferable, and are not redeemable for cash.

**Account Deletion.** Deleting your account (**Profile → Delete My Account**) permanently deletes your account, travel profile, all synced trips, and your Travel Points balance — this can't be undone, and any remaining Travel Points balance is forfeited.
