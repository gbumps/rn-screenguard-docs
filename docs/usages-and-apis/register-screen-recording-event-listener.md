---
sidebar_position: 5
---

# `registerScreenRecordingEventListener`

**(iOS only)** Activate a screen recording detector and receive an event callback after a record has done.

### Usage

```
ScreenGuardModule.registerScreenRecordingEventListener(() => {})
```

### Example code

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenRecordingEventListener(
	(_) => {
	.....do anything you want after the screen record
});
```

