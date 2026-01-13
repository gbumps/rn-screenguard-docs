---
sidebar_position: 2
---

# `registerWithBlurView`

Activate screenguard with a blurred effect view after captured.

Blurview on Android using [Blurry](https://github.com/wasabeef/Blurry).

:::warning v2.0.0+ Requirement
You must call [`initSettings()`](./init-settings.md) before using this function.
:::

### Parameters

Accepted a JS object with following parameters:

| Name            | Required | Type     | Default value    | Description                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| radius          | Yes      | number   |                  | Blur radius value in range `[15, 50]`. Throws warning if < 15 or > 50, exception if < 1 or NaN |
| ~~timeAfterResume~~ | ~~No~~ | ~~number~~ | ~~1000~~ | ⚠️ **Removed in v2.0.0** - Use [`initSettings()`](./init-settings.md) instead |

> **v2.0.0 Migration:** In v1.x, `timeAfterResume` was passed directly to `registerWithBlurView()`. Starting from v2.0.0, set it in [`initSettings()`](./init-settings.md) instead.

:::tip Blur Radius Recommendation
Set blur radius smaller than 15 won't help much, as content still looks very clear and easy to read. Same with bigger than 50 but content will be shrunk and vanished inside the view, blurring is meaningless. So, between **15 and 50** is recommended.
:::

### Example code

```js
import ScreenGuardModule from 'react-native-screenguard';

// Initialize first (required in v2.0.0+)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// Activate with blur effect
await ScreenGuardModule.registerWithBlurView({
  radius: 35,
});
```

:::info Android Note
On Android, if `displayScreenguardOverlayAndroid` is set to `false` in `initSettings()`, calling `registerWithBlurView()` will automatically switch to `registerWithoutEffect()` and show a warning.
:::

## Demo 

**iOS**

{/* TODO: Add iOS demo video here */}

**Android**

{/* TODO: Add Android demo video here */}
