---
sidebar_position: 1
---

# `register`

Activate the screenguard with your custom background color layout. 

Updated on `v1.0.8`: throw Exception on Android if activity is not declared inside `AndroidManifest.xml`. Refers [here](../getting-started/linking#post-installation-for-android-most-important) on how to resolve.

### Parameters

Accepted a JS object with following parameters:

| Name            | Required | Type     | Default value    | Description                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| backgroundColor | No       | string   | '#000000'(BLACK) | The background color you want to display |
| timeAfterResume | No       | number   | 1000 (in millis) | (Android only) A small amount of time (in milliseconds) for the view to disappear before jumping back to the main application view.| 


### Example code

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.register(
  {
    backgroundColor: '#0F9D58',
    timeAfterResume: 2000,
  },
);
```

#### New architecture (v1.0.8+)
Starting from `v1.0.8+`, except `registerScreenshotEventListener` and `registerScreenRecordingEventListener`, all APIs have been upgraded to Promise. So you must use it asynchronously in your project.


```js
ScreenGuardModule.register(data).then((_) => {console.log()})
```

or

```js
await ScreenGuardModule.register(data);
```

### Demo

**iOS**
<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/fd4b3662-6e3b-4428-a927-23ee2068c22a" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


**Android**
<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/da99c58c-fb79-4885-b496-ecb242bd4cf8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


