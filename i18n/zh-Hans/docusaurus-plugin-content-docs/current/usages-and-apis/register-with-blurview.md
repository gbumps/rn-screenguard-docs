---
sidebar_position: 2
---

# `registerWithBlurView`

使用模糊效果视图激活 screenguard。

Android 上的模糊视图使用 [Blurry](https://github.com/wasabeef/Blurry)。

:::warning v2.0.0+ 要求
在使用此函数之前，必须先调用 [`initSettings()`](./init-settings.md)。
:::

### 参数

接受一个包含以下参数的 JS 对象：

| 名称            | 是否必填 | 类型     | 默认值    | 描述                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| radius          | 是      | number   |                  | 模糊半径值，范围为 `[15, 50]`。如果 < 15 或 > 50 会抛出警告，如果 < 1 或为 NaN 则抛出异常 |
| ~~timeAfterResume~~ | ~~否~~ | ~~number~~ | ~~1000~~ | ⚠️ **在 v2.0.0 中已移除** - 请改用 [`initSettings()`](./init-settings.md) |

> **v2.0.0 迁移：** 在 v1.x 中，`timeAfterResume` 是直接传递给 `registerWithBlurView()` 的。从 v2.0.0 开始，请在 [`initSettings()`](./init-settings.md) 中设置。

:::tip 模糊半径建议
将模糊半径设置为小于 15 帮助不大，因为内容看起来仍然非常清晰易读。同样，如果大于 50，内容会收缩并消失在视图中，模糊效果也就失去了意义。因此，建议设置为 **15 到 50** 之间。
:::

### 示例代码

```js
import ScreenGuardModule from 'react-native-screenguard';

// 首先初始化（v2.0.0+ 中必需）
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// 使用模糊效果激活
await ScreenGuardModule.registerWithBlurView({
  radius: 35,
});
```

:::info Android 注意事项
在 Android 上，如果 `initSettings()` 中的 `displayScreenguardOverlayAndroid` 设置为 `false`，调用 `registerWithBlurView()` 将自动切换到 `registerWithoutEffect()` 并显示警告。
:::

## 演示 

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/246678566-17429686-1bc4-4d5b-aa6c-82616ec8d1c5.mp4" />
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
   <video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_blur.mov"></video>
  
  </div>
</div>
