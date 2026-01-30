---
sidebar_position: 11
---

# `useSGScreenShot` <span class="new-badge">新增 ✨</span>

:::info 版本
**自 v2.0.0+ 起可用**
:::

用于检测截屏事件的 React Hook。取代了 v1.x 中的 `registerScreenshotEventListener`。

### Core Function

```ts
function useSGScreenShot(
  listener?: (event: ScreenGuardScreenShotPathDataObject) => void
): {
  screenshotData: ScreenGuardScreenShotPathDataObject | null;
  activationStatus: ScreenGuardHookData | null;
}
```

### 参数

| 名称 | 是否必填 | 类型 | 描述 |
|------|----------|------|-------------|
| listener | 否 | function | 可选的回调函数，在每次截屏事件时触发 |

### 返回值

| 名称 | 类型 | 描述 |
|------|------|-------------|
| screenshotData | object \| null | 关于最后一次截获的截屏数据 |
| activationStatus | object \| null | ScreenGuard 的当前激活状态 |

---

#### `screenshotData` 对象

```ts
interface ScreenGuardScreenShotPathDataObject {
  path?: string;
  name?: string;
  type?: string;
}
```

| 字段 | 类型 | 描述 |
|-------|------|-------------|
| `path` | string \| undefined | 截获的截屏文件的完整文件路径（例如 `/var/mobile/.../screenshot.png`）。仅当在 `initSettings()` 中设置 `getScreenshotPath: true` 时可用 |
| `name` | string \| undefined | 截屏的文件名（例如 `screenshot_2024.png`） |
| `type` | string \| undefined | 文件扩展名/类型（例如 `'png'`, `'jpg'`） |

---

#### `activationStatus` 对象

```ts
interface ScreenGuardHookData {
  method: string;
  isActivated: boolean;
}
```

| 字段 | 类型 | 描述 |
|-------|------|-------------|
| `method` | string | 当前正在使用的激活方法。可能的值：`'blur'`, `'image'`, `'color'`, `''`（未激活时为空） |
| `isActivated` | boolean | 如果当前已激活 screenguard，则为 `true`，否则为 `false` |

### 示例代码

结合状态的基本用法：

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData, activationStatus } = useSGScreenShot();

  React.useEffect(() => {
    // 初始化 ScreenGuard
    ScreenGuardModule.initSettings({
      getScreenshotPath: true,
    });
  }, []);

  return (
    <View>
      <Text>是否激活: {activationStatus?.isActivated ? '是' : '否'}</Text>
      {screenshotData && (
        <Text>最后一次截屏: {screenshotData.name}</Text>
      )}
    </View>
  );
}
```

带有回调监听器：

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData } = useSGScreenShot((event) => {
    // 此回调在每次截屏时触发
    Alert.alert('检测到截屏！', `文件: ${event.name}`);
  });

  // ... 组件的其余部分
}
```

### 注意事项

- 当组件卸载时，此 Hook 会自动处理逻辑。
- 回调监听器将根据 [`initSettings()`](./init-settings.md) 中的 [`limitCaptureEvtCount`](./init-settings#limitcaptureevtcount) 触发。
  - `null`, `0`: 每次都触发（无限制）
  - `> 0`: 仅针对前 N 次截屏触发

:::note Android 限制
由于 `FLAG_SECURE` 会阻断标准截屏尝试，因此在激活 screenguard 时可能无法收到截屏事件。但是，仍可能从第三方截屏应用（如 XRecorder, Screen Recorder 等）收到事件。
:::
