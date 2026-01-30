---
sidebar_position: 4
---

# `registerWithoutEffect`

:::caution v2.0.0 中已弃用
此函数已弃用。请改用 [`initSettings()`](./init-settings.md) 并设置 `displayScreenguardOverlayAndroid: false`，然后调用任何注册函数。
:::

**(仅限 Android)** 在 Android 上激活 screenguard，且不包含任何视觉效果（模糊、图像、颜色）。

此功能使用 `FLAG_SECURE` 来阻断截屏和录屏，且不显示任何叠加层。

:::warning v2.0.0+ 要求
在使用此函数之前，必须先调用 [`initSettings()`](./init-settings.md)。
:::

### 用法

```js
import ScreenGuardModule from 'react-native-screenguard';

// 首先初始化（v2.0.0+ 中必需）
await ScreenGuardModule.initSettings();

// 激活无视觉效果（仅限 Android）
await ScreenGuardModule.registerWithoutEffect();
```

:::info 平台注意
- 此函数仅在 Android 上有效。
- 在 iOS 上，调用此函数将显示控制台警告且不执行任何操作。
- 当您想要在不向用户显示任何视觉叠加层的情况下阻断截屏时，此功能非常有用。
:::
