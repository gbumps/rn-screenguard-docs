---
sidebar_position: 1
---

# 限制

## v2.0.0+

- 本库仅支持在 **iOS 13+** 和 **Android 8+** 上阻断截屏。

- 录屏检测仅支持在 **iOS 13+** 和 **Android 15+ (API 35+)** 上。

- 请记住，仅调用**一次** `register*` 函数，不要与其他注册函数结合使用，以减少测试过程中的错误和意外问题。

- 在 v2.0.0+ 中，截屏和录屏事件通过 React Hook (`useSGScreenShot`, `useSGScreenRecord`) 处理，而不是手动事件监听器。

- 在使用任何其他 ScreenGuard API 之前，必须调用 [`initSettings()`](/docs/usages-and-apis/init-settings)。

---

## v1.x (旧版)

- 从 `v0.3.6` 及以上版本开始，回调不会在所有函数上自动激活。您可能需要手动使用 `registerScreenshotEventListener` 或 `registerScreenRecordingEventListener` 来激活它们。

- ~~请记住，在 Android 上调用 `unregister` 之前，文本输入将暂时禁用，`registerWithoutEffect` 除外。~~ ✅ **此问题已在 v2.0.0 中完全修复。**
