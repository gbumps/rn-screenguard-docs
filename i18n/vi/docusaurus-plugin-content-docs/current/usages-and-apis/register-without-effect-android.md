---
sidebar_position: 4
---

# `registerWithoutEffect`

:::caution Không khuyến khích trong v2.0.0
Hàm này không còn được khuyến khích sử dụng. Hãy sử dụng [`initSettings()`](./init-settings.md) với `displayScreenguardOverlayAndroid: false` thay thế, sau đó gọi bất kỳ hàm register nào.
:::

**(Chỉ dành cho Android)** Kích hoạt screenguard mà không có bất kỳ hiệu ứng hình ảnh nào (làm mờ, hình ảnh, màu sắc) cho Android.

Tính năng này sử dụng `FLAG_SECURE` để chặn chụp/quay màn hình mà không hiển thị bất kỳ lớp phủ nào.

:::warning Yêu cầu v2.0.0+
Bạn phải gọi [`initSettings()`](./init-settings.md) trước khi sử dụng hàm này.
:::

### Cách dùng

```js
import ScreenGuardModule from 'react-native-screenguard';

// Khởi tạo trước (bắt buộc trong v2.0.0+)
await ScreenGuardModule.initSettings();

// Kích hoạt không có hiệu ứng hình ảnh (chỉ Android)
await ScreenGuardModule.registerWithoutEffect();
```

:::info Lưu ý nền tảng
- Hàm này chỉ hoạt động trên Android.
- Trên iOS, việc gọi hàm này sẽ hiển thị cảnh báo trong console và không làm gì cả.
- Hàm này hữu ích khi bạn muốn chặn chụp màn hình mà không hiển thị bất kỳ lớp phủ hình ảnh nào cho người dùng.
:::
