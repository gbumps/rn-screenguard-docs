---
sidebar_position: 1
---

# Limitation

## v2.0.0+

- This library supports blocking screenshot for **iOS 13+** and **Android 8+** only.

- Screen recording detection is supported on **iOS 13+** and **Android 15+ (API 35+)** only.

- Remember to call a `register*` function only **once** and don't combine with other register functions to limit errors and unexpected problems during testing.

- In v2.0.0+, screenshot and screen recording events are handled via React hooks (`useSGScreenShot`, `useSGScreenRecord`) instead of manual event listeners.

- You must call [`initSettings()`](/docs/usages-and-apis/init-settings) before using any other ScreenGuard API.

---

## v1.x (Legacy)

- From `v0.3.6` and above, callbacks will not be activated on all functions. You may have to activate it yourself by using `registerScreenshotEventListener` or `registerScreenRecordingEventListener` instead.

- ~~Please remember that text input will be temporarily disabled until calling `unregister` on Android except `registerWithoutEffect`.~~ ✅ **This issue has been completely fixed in v2.0.0.**
