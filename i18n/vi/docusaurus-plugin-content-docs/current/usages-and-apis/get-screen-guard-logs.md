---
sidebar_position: 10
---

# `getScreenGuardLogs` <span class="new-badge">MỚI ✨</span>

:::info Phiên bản
**Khả dụng từ v2.0.0+**
:::

Lấy nhật ký hoạt động của ScreenGuard cho mục đích gỡ lỗi và giám sát.

### Tham số

| Tên | Bắt buộc | Kiểu | Mặc định | Mô tả |
|------|----------|------|---------|-------------|
| maxCount | Không | number | `10` | Số lượng mục nhật ký tối đa cần lấy. Phạm vi: 1 - 1,000,000 |

### Kiểu trả về

Trả về `Promise<Array<ScreenGuardLogEntry> | null>`

### ScreenGuardLogEntry

```ts
interface ScreenGuardLogEntry {
  timestamp: number;
  action: string;
  isProtected: boolean;
  method: string;
}
```

| Trường | Kiểu | Mô tả |
|-------|------|-------------|
| `timestamp` | number | Dấu thời gian Unix (mili giây) khi nhật ký được ghi lại |
| `action` | string | Hành động đã thực hiện. Các giá trị có thể có: `'activate'`, `'deactivate'`, `'screenshot_detected'`, `'recording_started'`, `'recording_stopped'` |
| `isProtected` | boolean | Liệu màn hình có được bảo vệ tại thời điểm ghi nhật ký này hay không |
| `method` | string | Phương thức hiệu ứng đã sử dụng. Các giá trị có thể có: `'blur'`, `'image'`, `'color'`, `'none'`, `''` (trống nếu không được kích hoạt) |

### Code mẫu

```js
import ScreenGuardModule from 'react-native-screenguard';

// Khởi tạo với tính năng theo dõi được bật
await ScreenGuardModule.initSettings({
  trackingLog: true,
});

// ... sau một số thao tác với screenguard ...

// Lấy 20 mục nhật ký gần nhất
const logs = await ScreenGuardModule.getScreenGuardLogs(20);

if (logs) {
  logs.forEach((log) => {
    console.log(`[${new Date(log.timestamp).toISOString()}] ${log.action} - Bảo vệ: ${log.isProtected}`);
  });
}
```

:::warning Quan trọng
- Yêu cầu `trackingLog: true` trong `initSettings()` để thu thập nhật ký một cách chính xác.
- Nếu `trackingLog` là `false`, một cảnh báo sẽ hiển thị và danh sách nhật ký có thể để trống.
- Phải gọi `initSettings()` trước khi sử dụng hàm này.
:::
