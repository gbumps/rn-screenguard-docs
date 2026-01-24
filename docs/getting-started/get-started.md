---
sidebar_position: 1
---

# Get started

<p align="left">
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"/><span/></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"/><span/></a>
  <a href="https://aleen42.github.io/badges/src/eslint.svg"><img src="https://aleen42.github.io/badges/src/eslint.svg"/><span/></a>
</p>

A **native React Native library** for preventing your app from screenshots and screen recordings, with powerful event detection capabilities.

<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/26d8ac37-9bc3-4d5b-8ad5-93525fb90a72" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## ✨ Key Features

### 🛡️ Screenshot and Screen Recording prevention

Prevent your app's sensitive content from being captured or recorded, with 3 separated overlay types:

- **Solid color overlay** — Display a solid color (e.g., black, white, or your custom hex color).
- **Blur effect** — Apply a blur overlay that obscures the content.
- **Custom image** — Show your own image, logo, or watermark during capture.


### 📸 Screenshot Detection

Know exactly when users take screenshots of your app. The library provides real-time event detection that triggers immediately when a screenshot is captured:

- **React instantly** — Execute custom logic when a screenshot is taken,like showing a warning, log event, etc..........
- **Access screenshot metadata** — Retrieve the file path of the captured screenshot on the device for your own purposes.
- **Control event frequency** — Limit the number of screenshot events.
- **Track status** — Know whether Screenguard is currently active when the screenshot event occurs.

### 🎥 Screen Recording Detection

Monitor screen recording activity in real-time.

- **Detect recording state** — Know when screen recording begins and ends on the device.
- **Respond to recording attempts** — Execute custom actions when recording is detected.
- **Cross-platform support** — Works on **iOS 13+** and **Android 15+ (API 35+)**.

### 📝 Activity Logging

Comprehensive logging for editing or debugging purposes. The library automatically tracks all ScreenGuard-related events, usually for:

- **Debug issues** — Quickly identify when and how screen prevention was activated or deactivated during development.
- **Audit capture attempts** — Keep a record of all screenshot and screen recording events for security auditing or analytics.
- **Retrieve event history** — Access the full log of ScreenGuard activities programmatically for custom reporting or monitoring.

---

## How It Works

React Native ScreenGuard bridges native code (iOS Objective-C, Android Java) and JavaScript, using `FLAG_SECURE` on Android and `UITextField` with customizable on iOS.

:::tip Quick Start
1. [Install the library](./install.md)
2. [Initialize settings](../usages-and-apis/init-settings.md) with `initSettings()`
3. Activate ScreenGuard with `register()`, `registerWithBlurView()`, or `registerWithImage()`
4. (Optional) Listen to events with `useSGScreenShot` or `useSGScreenRecord` hooks
:::

### Pre-requisites

If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Native Screenguard quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done.

Here are some resources to help you out:

1. [React Native Express (Sections 1 to 4)](https://www.reactnative.express/)
2. [Main Concepts of React](https://react.dev/learn)
3. [React Hooks](https://react.dev/reference/react)
4. [Native module intro](https://reactnative.dev/docs/native-modules-intro)


### Minimum requirements

- [Node.js](https://nodejs.org/en/download/) version 15.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- `react-native` >= 0.68
- `Android SDK` >= 29
- `Cocoapods` >= 1.1.4
- `iOS minimum deployment target` >= 13
- `typescript` >= 4.0.0
