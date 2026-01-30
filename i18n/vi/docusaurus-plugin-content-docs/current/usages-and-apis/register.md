---
sidebar_position: 1
---

# `register`

Kích hoạt screenguard với bố cục màu nền tùy chỉnh của bạn.

:::warning Yêu cầu v2.0.0+
Bạn phải gọi [`initSettings()`](./init-settings.md) trước khi sử dụng hàm này.
:::

### Tham số

Nhận một đối tượng JS với các tham số sau:

| Tên            | Bắt buộc | Kiểu     | Giá trị mặc định    | Mô tả                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| backgroundColor | Không       | string   | '#000000'(BLACK) | Màu nền bạn muốn hiển thị |
| ~~timeAfterResume~~ | ~~Không~~ | ~~number~~ | ~~1000~~ | ⚠️ **Đã gỡ bỏ trong v2.0.0** - Sử dụng [`initSettings()`](./init-settings.md) thay thế |

> **Cập nhật v2.0.0:** Trong v1.x, `timeAfterResume` được truyền trực tiếp vào `register()`. Bắt đầu từ v2.0.0, hãy thiết lập nó trong [`initSettings()`](./init-settings.md).


### Code mẫu

```js
import ScreenGuardModule from 'react-native-screenguard';

// Khởi tạo trước (bắt buộc trong v2.0.0+)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// Sau đó kích hoạt ScreenGuard
await ScreenGuardModule.register({
  backgroundColor: '#0F9D58',
});
```

:::info Lưu ý Android
Trên Android, nếu `displayScreenguardOverlayAndroid` được đặt thành `false` trong `initSettings()`, việc gọi `register()` sẽ tự động chuyển sang `registerWithoutEffect()` và hiển thị cảnh báo.
:::

## Demo

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/243557545-fd4b3662-6e3b-4428-a927-23ee2068c22a.mp4" />
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/248707554-da99c58c-fb79-4885-b496-ecb242bd4cf8.mp4" />
  </div>
</div>
