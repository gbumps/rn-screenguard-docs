---
sidebar_position: 4
---

# `registerWithoutEffect`

**(Android only)** Activate screenguard without any visual effect (blur, image, color) for Android.

This uses `FLAG_SECURE` to block screenshot and screen recording without showing any overlay.

:::warning v2.0.0+ Requirement
You must call [`initSettings()`](./init-settings.md) before using this function.
:::

### Usage

```js
import ScreenGuardModule from 'react-native-screenguard';

// Initialize first (required in v2.0.0+)
await ScreenGuardModule.initSettings();

// Activate without visual effect (Android only)
await ScreenGuardModule.registerWithoutEffect();
```

:::info Platform Note
- This function only works on Android.
- On iOS, calling this function will show a console warning and do nothing.
- This is useful when you want to block screenshots without showing any visual overlay to the user.
:::

## Demo

{/* TODO: Add Android demo video here */}
