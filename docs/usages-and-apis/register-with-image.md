---
sidebar_position: 3
---

# `registerWithImage`

Activate screenguard with a custom image view and background color. 

ImageView using [SDWebImage](https://github.com/SDWebImage/SDWebImage) on **iOS** and [Glide](https://github.com/bumptech/glide) on **Android** for faster loading and caching.

Updated on `v1.0.8`: throw Exception on Android if activity is not declared inside `AndroidManifest.xml`. Refers [here](../getting-started/linking#post-installation-for-android-most-important) on how to resolve.


### Parameters

Accepted a JS object with following parameters:

| Name            | Required | Type     | Default value    | Description                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| **width** | **YES** | **number** | |  **Width of the image** |
| **height** | **YES** | **number** | | **Heigh of the image** |
| **source** | **YES** | **Object** | | **Source of the image, can be a uri from network image or from your local project assets, accept (jpg,jpeg,png,gif,bmp,webp,svg), `source: {uri: 'path_to_your_network_img_directory.png'}` or `source: required(path_to_your_image.png)`**|
| defaultSource | NO | Object | | default source if `source` uri failed to load, accept (jpg,jpeg,png,gif,bmp,webp,svg), Usage: `defaultSource: required(path_to_your_image.png)`|
| backgroundColor | NO | string |  | background color behind the image, default BLACK (#000) |
| alignment | NO | number |  | Position of image predefined in library, value from 0 -> 8, default value = 4 [(Explain below)](#alignment) |
| top | NO | number |  | Top position of the image |
| left | NO | number |  | Left position of the image |
| bottom | NO | number |  | Bottom of the image |
| right | NO | number |  | Right of the image |
| timeAfterResume | NO  | number   | 1000 (in millis) | (Android only) A small amount of time (in milliseconds) for the view to disappear before jumping back to the main application view.| 

### `alignment`

  * **Definition:**
  ```
    topLeft:      0,
    topCenter:    1,
    topRight:     2,
    centerLeft:   3,
    center:       4,
    centerRight:  5,
    bottomLeft:   6,
    bottomCenter: 7,
    bottomRight:  8,
  ```
  * throw exception when not in between 0..8 and NaN
  
  * defaultValue = 4 when all positions(top, left, bottom, right) is null and alignment = null, 

  * Cannot combine with position(top, left, bottom, right) params cause this will always be checked 1st, and all positions will be skipped if not null.

  * Set this param to null if you want to custom your own position with one of position param `top`, `left`, `bottom`, `right` above.

### Example code

set image uri and default source

```js
import ScreenGuardModule from 'react-native-screenguard';

const data = {
  height: 150,
  width: 200,
  source: {
    uri: 'https://www.icegif.com/wp-content/uploads/2022/09/icegif-386.gif',
  },
  defaultSource: require('./images/test.png'),
  backgroundColor: color,
  alignment: 5 // Alignment.centerRight
},
//register with an image
ScreenGuardModule.registerWithImage(data);
```

using image source from local

```js
import ScreenGuardModule from 'react-native-screenguard';

const dataRequire = {
  height: 150,
  width: 200,
  source: require('./images/test.png'),
  backgroundColor: color,
},
ScreenGuardModule.registerWithImage(dataRequire);
```

set image position

```js
import ScreenGuardModule from 'react-native-screenguard';

const dataRequire = {
  height: 150,
  width: 200,
  top: 50,
  lef: 50,
  source: require('./images/test.png'),
  backgroundColor: color,
},
ScreenGuardModule.registerWithImage(dataRequire);
```

<blockquote class="custom-blockquote">
`Note`: This feature is still in experimental on Android, so please use with caution as some unexpected behaviour might occurs.
</blockquote>

#### New architecture (v1.0.8+)
Starting from `v1.0.8+`, except `registerScreenshotEventListener` and `registerScreenRecordingEventListener`, all APIs have been upgraded to Promise. So you must use it asynchronously in your project.


```js
ScreenGuardModule.registerWithImage(data).then((_) => {console.log()})
```

or

```js
await ScreenGuardModule.registerWithImage(data);
```

### Demo

iOS

<iframe width="375" height="667" src="https://player.vimeo.com/video/953622185" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="264423413-087dd9d5-b64f-4daf-a804-acc9a3cb4cc2"></iframe>


Android

<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/dd2d8191-555f-4f84-abf5-6cbcf67dc84b" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
