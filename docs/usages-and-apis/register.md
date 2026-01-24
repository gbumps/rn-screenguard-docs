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

// Then activate ScrenGuard
await ScreenGuardModule.register({
  backgroundColor: '#0F9D58',
});
```

:::info Android Note
On Android, if `displayScreenguardOverlayAndroid` is set to `false` in `initSettings()`, calling `register()` will automatically switch to `registerWithoutEffect()` and show a warning.
:::

## Demo

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/243557545-fd4b3662-6e3b-4428-a927-23ee2068c22a.mp4" />
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/248707554-da99c58c-fb79-4885-b496-ecb242bd4cf8.mp4" />
  </div>
</div>

