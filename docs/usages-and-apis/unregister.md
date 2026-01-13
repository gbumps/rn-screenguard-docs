---
sidebar_position: 5
---

# `unregister`

Deactivate all the screenshot protection.

:::warning v2.0.0+ Requirement
You must call [`initSettings()`](./init-settings.md) before using this function.
:::

## Example code

```js
import ScreenGuardModule from 'react-native-screenguard';

await ScreenGuardModule.unregister();
```

:::tip v2.0.0 Changes
In v2.0.0+, you no longer need to manually remove event listeners:
- `useSGScreenShot` hook automatically cleans up on component unmount
- `useSGScreenRecord` hook automatically cleans up on component unmount

The old `removeScreenshotEventListener()` and `removeRecordingEventListener()` functions have been removed.
:::
