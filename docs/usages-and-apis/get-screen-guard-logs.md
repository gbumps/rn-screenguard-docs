---
sidebar_position: 10
---

# `getScreenGuardLogs` <span class="new-badge">NEW ✨</span>

:::info Version
**Available from v2.0.0+**
:::

Retrieve ScreenGuard activity logs for debugging and monitoring purposes.

### Parameters

| Name | Required | Type | Default | Description |
|------|----------|------|---------|-------------|
| maxCount | No | number | `10` | Maximum number of log entries to retrieve. Range: 1 - 1,000,000 |

### Return Type

Returns `Promise<Array<ScreenGuardLogEntry> | null>`

### ScreenGuardLogEntry

```ts
interface ScreenGuardLogEntry {
  timestamp: number;
  action: string;
  isProtected: boolean;
  method: string;
}
```

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp (milliseconds) when the log was recorded |
| `action` | string | The action that was performed. Possible values: `'activate'`, `'deactivate'`, `'screenshot_detected'`, `'recording_started'`, `'recording_stopped'` |
| `isProtected` | boolean | Whether the screen was protected at the time of this log entry |
| `method` | string | The effect method used. Possible values: `'blur'`, `'image'`, `'color'`, `'none'`, `''` (empty if not activated) |

### Example code

```js
import ScreenGuardModule from 'react-native-screenguard';

// Initialize with tracking enabled
await ScreenGuardModule.initSettings({
  trackingLog: true,
});

// ... after some screenguard operations ...

// Get last 20 log entries
const logs = await ScreenGuardModule.getScreenGuardLogs(20);

if (logs) {
  logs.forEach((log) => {
    console.log(`[${new Date(log.timestamp).toISOString()}] ${log.action} - Protected: ${log.isProtected}`);
  });
}
```

:::warning Important
- Requires `trackingLog: true` in `initSettings()` to properly collect logs.
- If `trackingLog` is `false`, a warning will be shown and logs may be empty.
- Must call `initSettings()` before using this function.
:::
