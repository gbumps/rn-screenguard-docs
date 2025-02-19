---
sidebar_position: 1
---

# Limitation

- From `v0.3.6` and above, callbacks will not be activated on all functions. You may have to activate it yourself by using [registerScreenshotEventListener](/docs/usages-and-apis/register-screenshot-event-listener.md) or [registerScreenRecordingEventListener](/docs/usages-and-apis/register-screen-recording-event-listener.md) instead.

- This library support blocking screenshot for iOS 13+, Android 8+ only.

- Remember to call a function only <b>ONCE</b> and don't combine with other register functions for limitting errors and unexpected problems might happened during testing.

- Please remember that text input will be temporary disabled until calling `unregister` on Android except `registerWithoutEffect`. Workaround: You can use your own custom-made keyboard if included in your project, or find some react native libs which provide custom keyboard ui like `wix/react-native-ui-libs` could solve this.
