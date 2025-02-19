---
sidebar_position: 2
---

# `registerWithBlurView`

Activate screenguard with a blurred effect view after captured.

Blurview on Android using [Blurry](https://github.com/wasabeef/Blurry).

### Parameters

Accepted a JS object with following parameters:

| Name            | Required | Type     | Default value    | Description                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| radius          | Yes      | number   |                  | blur radius value number in between `[15, 50]`, throws warning if smaller than 15 or bigger than 50, exception if smaller than 1 or not a number.|
| timeAfterResume | No       | number   | 1000 (in millis) | (Android only) A small amount of time (in milliseconds) for the view to disappear before jumping back to the main application view.|

<blockquote class="custom-blockquote">
Set blur radius smaller than 15 won't help much, as content still look very clear and easy to read. Same with bigger than 50 but content will be shrinked and vanished inside the view, blurring is meaningless. So, between 15 and 50 is enough.
</blockquote>

### Example code

```js
import ScreenGuardModule from 'react-native-screenguard';

const data = {
 radius: 35,
 timeAfterResume: 2000,
};

ScreenGuardModule.registerWithBlurView(data);
```


### Demo 

iOS

<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/17429686-1bc4-4d5b-aa6c-82616ec8d1c5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Android

<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/17429686-1bc4-4d5b-aa6c-82616ec8d1c5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

