---
sidebar_position: 11
---

# `useSGScreenShot`

:::info Version
**Available from v2.0.0+**
:::

A React hook for detecting screenshot events. Replaces `registerScreenshotEventListener` from v1.x.

### Signature

```ts
function useSGScreenShot(
  listener?: (event: ScreenGuardScreenShotPathDataObject) => void
): {
  screenshotData: ScreenGuardScreenShotPathDataObject | null;
  protectionStatus: ScreenGuardHookData | null;
}
```

### Parameters

| Name | Required | Type | Description |
|------|----------|------|-------------|
| listener | No | function | Optional callback function triggered on each screenshot event |

### Return Values

| Name | Type | Description |
|------|------|-------------|
| screenshotData | object \| null | Data about the last screenshot captured |
| protectionStatus | object \| null | Current protection status of ScreenGuard |

---

#### `screenshotData` Object

```ts
interface ScreenGuardScreenShotPathDataObject {
  path?: string;
  name?: string;
  type?: string;
}
```

| Field | Type | Description |
|-------|------|-------------|
| `path` | string \| undefined | Full file path to the captured screenshot (e.g., `/var/mobile/.../screenshot.png`). Only available if `getScreenshotPath: true` in `initSettings()` |
| `name` | string \| undefined | File name of the screenshot (e.g., `screenshot_2024.png`) |
| `type` | string \| undefined | File extension/type (e.g., `'png'`, `'jpg'`) |

---

#### `protectionStatus` Object

```ts
interface ScreenGuardHookData {
  method: string;
  isProtected: boolean;
}
```

| Field | Type | Description |
|-------|------|-------------|
| `method` | string | The protection method currently active. Possible values: `'blur'`, `'image'`, `'color'`, `'none'`, `''` (empty when not activated) |
| `isProtected` | boolean | `true` if screen protection is currently active, `false` otherwise |

### Example code

Basic usage with state:

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData, protectionStatus } = useSGScreenShot();

  React.useEffect(() => {
    // Initialize ScreenGuard
    ScreenGuardModule.initSettings({
      enableCapture: true,
      getScreenshotPath: true,
    });
  }, []);

  return (
    <View>
      <Text>Protected: {protectionStatus?.isProtected ? 'Yes' : 'No'}</Text>
      {screenshotData && (
        <Text>Last screenshot: {screenshotData.name}</Text>
      )}
    </View>
  );
}
```

With callback listener:

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData } = useSGScreenShot((event) => {
    // This callback fires on every screenshot
    Alert.alert('Screenshot detected!', `File: ${event.name}`);
  });

  // ... rest of component
}
```

### Notes

- The hook automatically handles subscription cleanup when the component unmounts.
- Requires `enableCapture: true` in `initSettings()` to receive screenshot events.
- Use `limitCaptureEvtCount` in `initSettings()` to limit the number of screenshot events triggered:
  - `null` or `0`: Trigger every time (default)
  - `> 0`: Only trigger for the first N screenshots

:::note Android Limitation
Screenshot events may not be received while screenguard protection is active (`FLAG_SECURE` blocks standard screenshot attempts). However, events may still be received from third-party screenshot apps.
:::

## Demo

{/* TODO: Add demo video here */}
