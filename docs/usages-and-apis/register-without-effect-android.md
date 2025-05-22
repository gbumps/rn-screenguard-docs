---
sidebar_position: 4
---

# `registerWithoutEffect`

**(Android only)** Activate screenguard without any effect above for Android only.

### Usage

```js

import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerWithoutEffect()

```

## New architecture (v1.0.8+)

- Starting from `v1.0.8+`, except `registerScreenshotEventListener` and `registerScreenRecordingEventListener`, all APIs have been upgraded to Promise. So you must use it asynchronously in your project.


```js
ScreenGuardModule.registerWithoutEffect().then((_) => {console.log()})
```

or

```js
await ScreenGuardModule.registerWithoutEffect();
```
