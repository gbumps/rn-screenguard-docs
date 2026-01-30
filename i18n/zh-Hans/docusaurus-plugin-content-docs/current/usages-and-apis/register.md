---
sidebar_position: 1
---

# `register`

使用自定义背景颜色布局激活 Screenguard。

:::warning v2.0.0+ 要求
在使用此函数之前，必须先调用 [`initSettings()`](./init-settings.md)。
:::

### 参数

接受一个包含以下参数的 JS 对象：

| 名称            | 是否必填 | 类型     | 默认值    | 描述                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| backgroundColor | 否       | string   | '#000000'(黑色) | 您想要显示的背景颜色 |
| ~~timeAfterResume~~ | ~~否~~ | ~~number~~ | ~~1000~~ | ⚠️ **在 v2.0.0 中已移除** - 请改用 [`initSettings()`](./init-settings.md) |

> **v2.0.0 迁移：** 在 v1.x 中，`timeAfterResume` 是直接传递给 `register()` 的。从 v2.0.0 开始，请在 [`initSettings()`](./init-settings.md) 中设置。


### 示例代码

```js
import ScreenGuardModule from 'react-native-screenguard';

// 首先初始化（v2.0.0+ 中必需）
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// 然后激活 ScreenGuard
await ScreenGuardModule.register({
  backgroundColor: '#0F9D58',
});
```

:::info Android 注意事项
在 Android 上，如果 `initSettings()` 中的 `displayScreenguardOverlayAndroid` 设置为 `false`，调用 `register()` 将自动切换到 `registerWithoutEffect()` 并显示警告。
:::

## 演示

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
