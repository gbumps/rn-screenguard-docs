---
sidebar_position: 5
---

# `registerScreenRecordingEventListener`

:::danger 在 v2.0.0 中已移除
此 API 已在 v2.0.0 中**移除**。请改用 [`useSGScreenRecord`](./use-sg-screen-record.md) Hook。
:::

---

**v1.x 文档 (仅供参考)**

**(仅限 iOS)** 激活录屏检测器，并在录屏结束后接收事件回调。

### 用法 (v1.x)

```
ScreenGuardModule.registerScreenRecordingEventListener(() => {})
```

### 示例代码 (v1.x)

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenRecordingEventListener(
	(_) => {
	.....录屏结束后执行任何您想要的操作
});
```
