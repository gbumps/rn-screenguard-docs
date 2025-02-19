---
sidebar_position: 1
---

# `register`

Activate the screenguard with your custom background color layout. 

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

### Demo

**iOS**
<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/fd4b3662-6e3b-4428-a927-23ee2068c22a" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


**Android**
<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/da99c58c-fb79-4885-b496-ecb242bd4cf8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


