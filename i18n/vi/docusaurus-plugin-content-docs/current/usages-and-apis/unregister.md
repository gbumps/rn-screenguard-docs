---
sidebar_position: 5
---

# `unregister`

Hủy kích hoạt tất cả các lớp bảo vệ chống chụp/quay màn hình.

:::warning Yêu cầu v2.0.0+
Bạn phải gọi [`initSettings()`](./init-settings.md) trước khi sử dụng hàm này.
:::

## Code mẫu

```js
import ScreenGuardModule from 'react-native-screenguard';

await ScreenGuardModule.unregister();
```

### Thay đổi trong v2.0.0

Trong v2.0.0+, bạn không còn cần phải xóa các trình lắng nghe sự kiện một cách thủ công nữa:
- Hook `useSGScreenShot` tự động dọn dẹp khi component unmount.
- Hook `useSGScreenRecord` tự động dọn dẹp khi component unmount.

Các hàm cũ `removeScreenshotEventListener()` và `removeRecordingEventListener()` đã bị gỡ bỏ.
