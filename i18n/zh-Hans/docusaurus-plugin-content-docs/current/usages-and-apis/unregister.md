---
sidebar_position: 5
---

# `unregister`

注销所有截屏保护功能。

:::warning v2.0.0+ 要求
在使用此函数之前，必须先调用 [`initSettings()`](./init-settings.md)。
:::

## 示例代码

```js
import ScreenGuardModule from 'react-native-screenguard';

await ScreenGuardModule.unregister();
```

### v2.0.0 变更

在 v2.0.0+ 中，您不再需要手动移除事件监听器：
- `useSGScreenShot` Hook 会在组件卸载时自动清理
- `useSGScreenRecord` Hook 会在组件卸载时自动清理

旧的 `removeScreenshotEventListener()` 和 `removeRecordingEventListener()` 函数已被移除。
