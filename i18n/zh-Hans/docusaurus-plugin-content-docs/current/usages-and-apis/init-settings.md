---
sidebar_position: 0
---

# `initSettings` <span class="new-badge">新增 ✨</span>

:::info 版本
**自 v2.0.0+ 起可用**
:::

使用您所需的设置初始化 ScreenGuard。此函数**必须在使用任何其他 ScreenGuard API 之前调用**。

### 参数

接受一个包含以下参数的 JS 对象：

| 名称 | 是否必填 | 类型 | 默认值 |
|------|----------|------|---------|
| [enableCapture](#enablecapture) | 否 | boolean | `false` |
| [enableRecord](#enablerecord) | 否 | boolean | `false` |
| [enableContentMultitask](#enablecontentmultitask) | 否 | boolean | `false` |
| [displayScreenGuardOverlay](#displayscreenguardoverlay) | 否 | boolean | `false` |
| [displayScreenguardOverlayAndroid](#displayscreenguardoverlayandroid) | 否 | boolean | `true` |
| [timeAfterResume](#timeafterresume) | 否 | number | `1000` |
| [getScreenshotPath](#getscreenshotpath) | 否 | boolean | `false` |
| [limitCaptureEvtCount](#limitcaptureevtcount) | 否 | number | `null` |
| [trackingLog](#trackinglog) | 否 | boolean | `false` |

---

#### `enableCapture`

| | |
|---|---|
| **类型** | `boolean` |
| **默认值** | `false` |
| **平台** | iOS, Android |

设置为允许截屏或禁用截屏。默认为 `false`（禁用）。

---

#### `enableRecord`

| | |
|---|---|
| **类型** | `boolean` |
| **默认值** | `false` |
| **平台** | iOS 13+, Android 15+ (API 35+) |

设置为允许录屏或禁用录屏。默认为 `false`（禁用）。

:::note Android 限制
Android 上的录屏检测仅适用于 **API 35+ (Android 15+)**。在旧版本上，此设置将被忽略。
:::

---

#### `enableContentMultitask`

| | |
|---|---|
| **类型** | `boolean` |
| **默认值** | `false` |
| **平台** | 仅限 iOS |

设置为 `true` 时，您的应用内容在应用切换器（多任务视图）中将保持可见。为 `false` 时，将根据注册类型（颜色、模糊或图片）进行隐藏/模糊处理。

---

#### `displayScreenGuardOverlay`

| | | 
|---|---|
| **类型** | `boolean` |
| **默认值** | `false` |
| **平台** | 仅限 iOS |

设置为 `true` 时，在用户截屏或录屏时（显示直至用户停止录屏）显示遮罩层，并在 `timeAfterResume` 持续时间后消失。遮罩层使用与您注册的样式（颜色、模糊或图片）相同的样式。仅在 Screenguard 处于激活状态时有效。

**注意：** 请在不影响应用功能的情况下使用，风险自担！

<video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/ios_display_sg_overlay.mov"></video>
---

#### `displayScreenguardOverlayAndroid`

| | |
|---|---|
| **类型** | `boolean` |
| **默认值** | `true` |
| **平台** | 仅限 Android |

设置为 `true` 时，在用户从后台返回应用时显示遮罩层。默认为 `true`（启用）。仅在 Screenguard 处于激活状态时有效。

<video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_display_sg_overlay.mov"></video>

---

#### `timeAfterResume`

| | |
|---|---|
| **类型** | `number` (毫秒) |
| **默认值** | `1000` |
| **平台** | iOS, Android |

截屏后 (iOS) 或从后台返回后 (Android) 显示遮罩层的持续时间（以毫秒为单位）。需要 `displayScreenGuardOverlay` 或 `displayScreenguardOverlayAndroid` 设置为 `true`。

**示例：** 设置为 `2000` 以显示 2 秒的遮罩层。

---

#### `getScreenshotPath`

| | |
|---|---|
| **类型** | `boolean` |
| **默认值** | `false` |
| **平台** | iOS, Android |

设置为 `true` 时，截屏事件数据将包含截获的屏幕快照文件路径，可以从 [`useSGScreenShot`](use-sg-screenshot.md) Hook 的 `screenshotData.path` 属性中检索。

---

#### `limitCaptureEvtCount`

| | |
|---|---|
| **类型** | `number \| null` |
| **默认值** | `null` |
| **平台** | iOS, Android* |

限制触发的截屏捕获事件数量。
- `null` 或 `0`: 每次都触发（无限制）
- `> 0`: 仅针对前 N 次截屏触发

:::note Android 限制
在 Android 上，当 screenguard 激活时（`FLAG_SECURE` 会阻断标准截屏尝试），截屏检测可能无法工作。
:::

`limitCaptureEvtCount` = `3` 的测试演示：

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video controls width="360" height="640" id="player" preload="auto" class="js-player"  src="/react-native-screenguard/videos/ios_limit_cap_evt_3.mov"></video>
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_limit_cap_evt_3.mov"></video>
  </div>
</div>

---

#### `trackingLog`

| | |
|---|---|
| **类型** | `boolean` |
| **默认值** | `false` |
| **平台** | iOS, Android |

启用活动日志记录以用于调试。启用后，ScreenGuard 将记录所有事件（激活、停用、检测到截屏等），可以从 [`getScreenGuardLogs`](get-screen-guard-logs.md) 中检索。

---

### 示例代码

基本初始化：

```js
import ScreenGuardModule from 'react-native-screenguard';

// 使用默认设置初始化
await ScreenGuardModule.initSettings();
```

使用自定义设置：

```js
import ScreenGuardModule from 'react-native-screenguard';

await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
  getScreenshotPath: true,
  trackingLog: true,
});
```
