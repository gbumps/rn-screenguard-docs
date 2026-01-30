---
sidebar_position: 12
---

# `useSGScreenRecord` <span class="new-badge">新增 ✨</span>

:::info 版本
**自 v2.0.0+ 起可用**
:::

用于检测录屏事件的 React Hook。取代了 v1.x 中的 `registerScreenRecordingEventListener`。

**平台支持：**
- iOS 13+
- Android 15+ (API 35+)

### Core Function

```ts
function useSGScreenRecord(
  listener?: (event: ScreenGuardScreenRecordDataObject) => void
): {
  recordingData: ScreenGuardScreenRecordDataObject | null;
  activationStatus: ScreenGuardHookData | null;
}
```

### 参数

| 名称 | 是否必填 | 类型 | 描述 |
|------|----------|------|-------------|
| listener | 否 | function | 当录屏状态发生变化时触发的可选回调函数 |

### 返回值

| 名称 | 类型 | 描述 |
|------|------|-------------|
| recordingData | object \| null | 关于当前录屏状态的数据 |
| activationStatus | object \| null | ScreenGuard 的当前激活状态 |

---

#### `recordingData` 对象

```ts
interface ScreenGuardScreenRecordDataObject {
  isRecording?: boolean;
}
```

| 字段 | 类型 | 描述 |
|-------|------|-------------|
| `isRecording` | boolean \| undefined | 当录屏开始时为 `true`，录屏停止时为 `false`。在发生任何录屏事件之前为 `undefined` |

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

基本用法：

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ScreenGuardModule, { useSGScreenRecord } from 'react-native-screenguard';

function App() {
  const { recordingData, activationStatus } = useSGScreenRecord();

  React.useEffect(() => {
    ScreenGuardModule.initSettings();
  }, []);

  return (
    <View>
      <Text>是否激活: {activationStatus?.isActivated ? '是' : '否'}</Text>
      <Text>
        录屏状态: {recordingData?.isRecording ? '🔴 正在录屏...' : '⚪ 未录屏'}
      </Text>
    </View>
  );
}
```

带有回调监听器：

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenRecord } from 'react-native-screenguard';

function App() {
  useSGScreenRecord((event) => {
    if (event.isRecording) {
      Alert.alert('警告', '录屏已开始！');
    } else {
      Alert.alert('提示', '录屏已停止。');
    }
  });

  // ... 组件的其余部分
}
```

### 注意事项

- 当组件卸载时，此 Hook 会自动处理清理工作。

:::note 平台支持
- **iOS**: iOS 13+ 完全支持
- **Android**: 仅支持 Android 15+ (API 35+)。在旧版 Android 上，此设置将被忽略且录屏检测不可用。
:::

## 演示

{/* TODO: 在此添加演示视频 */}
