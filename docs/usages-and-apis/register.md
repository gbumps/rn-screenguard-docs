---
sidebar_position: 1
---

# `register`

Activate the screenguard with your custom background color layout. 

:::warning v2.0.0+ Requirement
You must call [`initSettings()`](./init-settings.md) before using this function.
:::

### Parameters

Accepted a JS object with following parameters:

| Name            | Required | Type     | Default value    | Description                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| backgroundColor | No       | string   | '#000000'(BLACK) | The background color you want to display |
| ~~timeAfterResume~~ | ~~No~~ | ~~number~~ | ~~1000~~ | ⚠️ **Removed in v2.0.0** - Use [`initSettings()`](./init-settings.md) instead |

> **v2.0.0 Migration:** In v1.x, `timeAfterResume` was passed directly to `register()`. Starting from v2.0.0, set it in [`initSettings()`](./init-settings.md) instead.


### Example code

```js
import ScreenGuardModule from 'react-native-screenguard';

// Initialize first (required in v2.0.0+)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// Then activate protection
await ScreenGuardModule.register({
  backgroundColor: '#0F9D58',
});
```

:::info Android Note
On Android, if `displayScreenguardOverlayAndroid` is set to `false` in `initSettings()`, calling `register()` will automatically switch to `registerWithoutEffect()` and show a warning.
:::

## Demo

**iOS**

{/* TODO: Add iOS demo video here */}


**Android**

{/* TODO: Add Android demo video here */}
