---
sidebar_position: 12
---

# `useSGScreenRecord` <span class="new-badge">NEW ✨</span>

:::info Version
**Available from v2.0.0+**
:::

A React hook for detecting screen recording events. Replaces `registerScreenRecordingEventListener` from v1.x.

**Platform Support:**
- iOS 13+
- Android 15+ (API 35+)

### Signature

```ts
function useSGScreenRecord(
  listener?: (event: ScreenGuardScreenRecordDataObject) => void
): {
  recordingData: ScreenGuardScreenRecordDataObject | null;
  activationStatus: ScreenGuardHookData | null;
}
```

### Parameters

| Name | Required | Type | Description |
|------|----------|------|-------------|
| listener | No | function | Optional callback function triggered when recording state changes |

### Return Values

| Name | Type | Description |
|------|------|-------------|
| recordingData | object \| null | Data about current recording state |
| activationStatus | object \| null | Current activation status of ScreenGuard |

---

#### `recordingData` Object

```ts
interface ScreenGuardScreenRecordDataObject {
  isRecording?: boolean;
}
```

| Field | Type | Description |
|-------|------|-------------|
| `isRecording` | boolean \| undefined | `true` when screen recording has started, `false` when recording has stopped. `undefined` before any recording event occurs |

---

#### `activationStatus` Object

```ts
interface ScreenGuardHookData {
  method: string;
  isActivated: boolean;
}
```

| Field | Type | Description |
|-------|------|-------------|
| `method` | string | The activation method currently active. Possible values: `'blur'`, `'image'`, `'color'`, `''` (empty when not activated) |
| `isActivated` | boolean | `true` if screenguard is currently activated, `false` otherwise |

### Example code

Basic usage:

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
      <Text>Activated: {activationStatus?.isActivated ? 'Yes' : 'No'}</Text>
      <Text>
        Recording: {recordingData?.isRecording ? '🔴 Recording...' : '⚪ Not recording'}
      </Text>
    </View>
  );
}
```

With callback listener:

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenRecord } from 'react-native-screenguard';

function App() {
  useSGScreenRecord((event) => {
    if (event.isRecording) {
      Alert.alert('Warning', 'Screen recording started!');
    } else {
      Alert.alert('Info', 'Screen recording stopped.');
    }
  });

  // ... rest of component
}
```

### Notes

- The hook automatically handles subscription cleanup when the component unmounts.

:::note Platform Support
- **iOS**: Full support on iOS 13+
- **Android**: Only supported on Android 15+ (API 35+). On older Android versions, this setting is ignored and recording detection is not available.
:::

## Demo

{/* TODO: Add demo video here */}
