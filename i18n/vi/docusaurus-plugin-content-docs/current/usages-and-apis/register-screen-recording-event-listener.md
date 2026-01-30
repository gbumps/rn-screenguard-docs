---
sidebar_position: 5
---

# `registerScreenRecordingEventListener`

:::danger Đã xóa trong v2.0.0
API này đã bị **xóa** trong v2.0.0. Vui lòng sử dụng hook [`useSGScreenRecord`](./use-sg-screen-record.md) thay thế.
:::

---

**Tài liệu v1.x (chỉ dùng để tham khảo)**

**(Chỉ dành cho iOS)** Kích hoạt bộ phát hiện quay màn hình và nhận callback sự kiện sau khi quá trình quay màn hình kết thúc.

### Cách dùng (v1.x)

```
ScreenGuardModule.registerScreenRecordingEventListener(() => {})
```

### Code mẫu (v1.x)

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenRecordingEventListener(
	(_) => {
	.....làm bất cứ điều gì bạn muốn sau khi quay màn hình xong
});
```
