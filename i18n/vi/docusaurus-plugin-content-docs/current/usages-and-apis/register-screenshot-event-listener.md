---
sidebar_position: 6
---

# `registerScreenShotEventListener`

:::danger Đã xóa trong v2.0.0
API này đã bị **xóa** trong v2.0.0. Vui lòng sử dụng hook [`useSGScreenShot`](./use-sg-screenshot.md) thay thế.
:::

---

**Tài liệu v1.x (chỉ dùng để tham khảo)**

Kích hoạt bộ phát hiện chụp màn hình và nhận callback sự kiện với thông tin ảnh chụp màn hình (nếu được cho phép) sau khi chụp màn hình thành công.

### Cách dùng (v1.x)

```
ScreenGuardModule.registerScreenshotEventListener(true, (data) => {})
```

  Nếu `true`, callback sẽ trả về một đối tượng dữ liệu chứa thông tin của ảnh chụp màn hình trước đó.

  Nếu `false`, callback sẽ trả về null.

### Code mẫu (v1.x)

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenshotEventListener(
  true,
	(data) => {
    if (data != null) {
      console.log('đường dẫn: ', data.path);
      console.log('tên: ', data.name);
      console.log('loại: ', data.type);
    }
    ....mã khác
});
```

:::note Lưu ý Android
Trên **Android**, hàm này sẽ không hoạt động khi tính năng chặn chụp màn hình đang được kích hoạt. Điều này là do nền tảng Android vốn đã chặn tất cả các lần thử chụp màn hình tiêu chuẩn, bao gồm cả các lần thử từ ứng dụng hệ thống và tổ hợp nút bấm (tùy theo nhà sản xuất thiết bị, thường là nút Nguồn + Giảm âm lượng).

Tuy nhiên, sự kiện vẫn có thể được nhận nếu người dùng chụp màn hình bằng ứng dụng chụp hoặc quay màn hình bên thứ ba (chẳng hạn như AZ Screen Recorder, XRecorder, v.v.).
:::
