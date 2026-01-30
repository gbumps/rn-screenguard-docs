---
sidebar_position: 10
---

# `getScreenGuardLogs` <span class="new-badge">新增 ✨</span>

:::info 版本
**自 v2.0.0+ 起可用**
:::

检索 ScreenGuard 活动日志，用于调试和监控目的。

### 参数

| 名称 | 是否必填 | 类型 | 默认值 | 描述 |
|------|----------|------|---------|-------------|
| maxCount | 否 | 数字 | `10` | 要检索的最大日志条目数。范围：1 - 1,000,000 |

### 返回类型

返回 `Promise<Array<ScreenGuardLogEntry> | null>`

### ScreenGuardLogEntry

```ts
interface ScreenGuardLogEntry {
  timestamp: number;
  action: string;
  isProtected: boolean;
  method: string;
}
```

| 字段 | 类型 | 描述 |
|-------|------|-------------|
| `timestamp` | 数字 | 记录日志时的 Unix 时间戳（毫秒） |
| `action` | 字符串 | 执行的操作。可能的值：`'activate'`, `'deactivate'`, `'screenshot_detected'`, `'recording_started'`, `'recording_stopped'` |
| `isProtected` | 布尔值 | 记录此日志条目时，屏幕是否处于受保护状态 |
| `method` | 字符串 | 使用的效果方法。可能的值：`'blur'`, `'image'`, `'color'`, `'none'`, `''`（未激活时为空） |

### 示例代码

```js
import ScreenGuardModule from 'react-native-screenguard';

// 初始化并启用追踪
await ScreenGuardModule.initSettings({
  trackingLog: true,
});

// ... 在执行一些 screenguard 操作后 ...

// 获取最后 20 条日志条目
const logs = await ScreenGuardModule.getScreenGuardLogs(20);

if (logs) {
  logs.forEach((log) => {
    console.log(`[${new Date(log.timestamp).toISOString()}] ${log.action} - 已保护: ${log.isProtected}`);
  });
}
```

:::warning 重要提示
- 需要在 `initSettings()` 中设置 `trackingLog: true` 才能正确收集日志。
- 如果 `trackingLog` 为 `false`，将显示警告且日志可能为空。
- 在使用此函数之前，必须调用 `initSettings()`。
:::
