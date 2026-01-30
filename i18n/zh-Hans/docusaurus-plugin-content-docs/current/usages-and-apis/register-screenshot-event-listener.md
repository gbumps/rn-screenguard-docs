---
sidebar_position: 6
---

# `registerScreenShotEventListener`

:::danger 在 v2.0.0 中已移除
此 API 已在 v2.0.0 中**移除**。请改用 [`useSGScreenShot`](./use-sg-screenshot.md) Hook。
:::

---

**v1.x 文档 (仅供参考)**

激活截屏检测器，并在截屏成功触发后接收包含截屏信息（如果允许）的事件回调。

### 用法 (v1.x)

```
ScreenGuardModule.registerScreenshotEventListener(true, (data) => {})
```

  如果是 `true`，回调将返回包含上一个图像截屏信息的对象。

  如果是 `false`，回调将返回 null。

### 示例代码 (v1.x)

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenshotEventListener(
  true,
	(data) => {
    if (data != null) {
      console.log('路径: ', data.path);
      console.log('名称: ', data.name);
      console.log('类型: ', data.type);
    }
    ....其他代码
});
```

:::note Android 注意事项
在 **Android** 上，当激活截屏阻断时，此功能将不起作用。这是因为 Android 平台本质上阻断了所有标准截屏尝试，包括来自系统应用和按钮组合（基于设备制造商，大多为电源键 + 音量下键）的尝试。

但是，如果用户使用第三方截屏或录屏应用（如 AZ Screen Recorder, XRecorder 等）进行截屏，仍可能会收到该事件。
:::
