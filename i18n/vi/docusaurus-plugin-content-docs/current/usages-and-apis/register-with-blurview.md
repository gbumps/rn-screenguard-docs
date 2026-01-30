---
sidebar_position: 2
---

# `registerWithBlurView`

Kích hoạt screenguard với hiệu ứng làm mờ (blur) sau khi chụp/quay màn hình.

Blurview trên Android sử dụng [Blurry](https://github.com/wasabeef/Blurry).

:::warning Yêu cầu v2.0.0+
Bạn phải gọi [`initSettings()`](./init-settings.md) trước khi sử dụng hàm này.
:::

### Tham số

Nhận một đối tượng JS với các tham số sau:

| Tên            | Bắt buộc | Kiểu     | Giá trị mặc định    | Mô tả                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| radius          | Có      | number   |                  | Giá trị bán kính làm mờ trong khoảng `[15, 50]`. Sẽ hiển thị cảnh báo nếu < 15 hoặc > 50, ném ngoại lệ nếu < 1 hoặc NaN |
| ~~timeAfterResume~~ | ~~Không~~ | ~~number~~ | ~~1000~~ | ⚠️ **Đã gỡ bỏ trong v2.0.0** - Sử dụng [`initSettings()`](./init-settings.md) thay thế |

> **Cập nhật v2.0.0:** Trong v1.x, `timeAfterResume` được truyền trực tiếp vào `registerWithBlurView()`. Bắt đầu từ v2.0.0, hãy thiết lập nó trong [`initSettings()`](./init-settings.md).

:::tip Khuyến nghị về bán kính làm mờ
Đặt bán kính làm mờ nhỏ hơn 15 sẽ không giúp ích nhiều, vì nội dung vẫn trông rất rõ ràng và dễ đọc. Tương tự với giá trị lớn hơn 50, nội dung sẽ bị co lại và biến mất bên trong view, việc làm mờ trở nên vô nghĩa. Vì vậy, giá trị từ **15 đến 50** là được khuyến nghị.
:::

### Code mẫu

```js
import ScreenGuardModule from 'react-native-screenguard';

// Khởi tạo trước (bắt buộc trong v2.0.0+)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// Kích hoạt với hiệu ứng làm mờ
await ScreenGuardModule.registerWithBlurView({
  radius: 35,
});
```

:::info Lưu ý Android
Trên Android, nếu `displayScreenguardOverlayAndroid` được đặt thành `false` trong `initSettings()`, việc gọi `registerWithBlurView()` sẽ tự động chuyển sang `registerWithoutEffect()` và hiển thị cảnh báo.
:::

## Demo 

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/246678566-17429686-1bc4-4d5b-aa6c-82616ec8d1c5.mp4" />
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
   <video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_blur.mov"></video>
  
  </div>
</div>
