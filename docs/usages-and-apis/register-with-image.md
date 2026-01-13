---
sidebar_position: 3
---

# `registerWithImage`

Activate screenguard with a custom image view and background color. 

ImageView using [SDWebImage](https://github.com/SDWebImage/SDWebImage) on **iOS** and [Glide](https://github.com/bumptech/glide) on **Android** for faster loading and caching.

:::warning v2.0.0+ Requirement
You must call [`initSettings()`](./init-settings.md) before using this function.
:::

### Parameters

Accepted a JS object with following parameters:

| Name | Required | Type | Default | Description |
|------|----------|------|---------|-------------|
| **source** | **YES** | Object | | Source of the image. Can be a network URI or local asset. Accepts: jpg, jpeg, png, gif, bmp, webp, svg. Usage: `source: { uri: 'https://...' }` or `source: require('./image.png')` |
| **width** | **YES** | number | | Width of the image |
| **height** | **YES** | number | | Height of the image |
| defaultSource | No | Object | | Fallback image if `source` fails to load. Usage: `defaultSource: require('./fallback.png')` |
| backgroundColor | No | string | '#000000' | Background color behind the image |
| alignment | No | number | 4 (center) | Position of image (0-8). See [alignment values](#alignment) |
| top | No | number | | Custom top position |
| left | No | number | | Custom left position |
| bottom | No | number | | Custom bottom position |
| right | No | number | | Custom right position |
| ~~timeAfterResume~~ | ~~No~~ | ~~number~~ | ~~1000~~ | ⚠️ **Removed in v2.0.0** - Use [`initSettings()`](./init-settings.md) instead |

> **v2.0.0 Migration:** In v1.x, `timeAfterResume` was passed directly to `registerWithImage()`. Starting from v2.0.0, set it in [`initSettings()`](./init-settings.md) instead.

### `alignment`

| Value | Position |
|-------|----------|
| 0 | topLeft |
| 1 | topCenter |
| 2 | topRight |
| 3 | centerLeft |
| 4 | center (default) |
| 5 | centerRight |
| 6 | bottomLeft |
| 7 | bottomCenter |
| 8 | bottomRight |

:::note
- Throws exception when alignment is not in range 0-8 or NaN
- Cannot combine alignment with position params (top, left, bottom, right) - alignment is checked first
- Set alignment to null if you want to use custom position params
:::

### Example code

Using network image:

```js
import ScreenGuardModule from 'react-native-screenguard';

// Initialize first (required in v2.0.0+)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// With network image and fallback
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: {
    uri: 'https://example.com/image.gif',
  },
  defaultSource: require('./images/fallback.png'),
  backgroundColor: '#1a1a2e',
  alignment: 4, // center
});
```

Using local image:

```js
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: require('./images/logo.png'),
  backgroundColor: '#1a1a2e',
});
```

Using custom position:

```js
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: require('./images/logo.png'),
  backgroundColor: '#1a1a2e',
  alignment: null, // Must be null to use custom position
  top: 50,
  left: 50,
});
```

:::info Android Note
On Android, if `displayScreenguardOverlayAndroid` is set to `false` in `initSettings()`, calling `registerWithImage()` will automatically switch to `registerWithoutEffect()` and show a warning.
:::

## Demo

**iOS**

{/* TODO: Add iOS demo video here */}

**Android**

{/* TODO: Add Android demo video here */}
