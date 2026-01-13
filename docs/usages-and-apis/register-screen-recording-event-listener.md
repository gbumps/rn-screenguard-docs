---
sidebar_position: 5
---

# `registerScreenRecordingEventListener`

:::danger Removed in v2.0.0
This API has been **removed** in v2.0.0. Please use the [`useSGScreenRecord`](./use-sg-screen-record.md) hook instead.
:::

---

**v1.x Documentation (for reference only)**

**(iOS only)** Activate a screen recording detector and receive an event callback after a record has done.

### Usage (v1.x)

```
ScreenGuardModule.registerScreenRecordingEventListener(() => {})
```

### Example code (v1.x)

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenRecordingEventListener(
	(_) => {
	.....do anything you want after the screen record
});
```
