---
sidebar_position: 1
---

# Bắt đầu

<p align="left">
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"/><span/></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"/><span/></a>
  <a href="https://aleen42.github.io/badges/src/eslint.svg"><img src="https://aleen42.github.io/badges/src/eslint.svg"/><span/></a>
</p>

Thư viện **React Native** giúp ngăn chặn ứng dụng của bạn bị chụp ảnh màn hình và quay video màn hình, với khả năng phát hiện sự kiện mạnh mẽ.

<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/26d8ac37-9bc3-4d5b-8ad5-93525fb90a72" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## ✨ Các tính năng chính

### 🛡️ Ngăn chặn Chụp ảnh và Quay video màn hình

Ngăn chặn nội dung nhạy cảm của ứng dụng bị chụp hoặc quay lại, với 3 loại lớp phủ riêng biệt:

- **Lớp phủ màu đơn sắc** — Hiển thị một màu cố định (ví dụ: đen, trắng hoặc mã màu hex tùy chỉnh).
- **Hiệu ứng làm mờ (Blur)** — Áp dụng lớp phủ làm mờ nội dung.
- **Hình ảnh tùy chỉnh** — Hiển thị hình ảnh, logo hoặc watermark của riêng bạn khi có hành động chụp màn hình.


### 📸 Phát hiện Chụp ảnh màn hình

Khả năng phát hiện sự kiện chụp màn hình theo thời gian thực, kích hoạt ngay lập tức khi ảnh màn hình được chụp:

- **Phản hồi tức thì** — Thực hiện logic tùy chỉnh khi ảnh màn hình được chụp.
- **Truy cập metadata của ảnh chụp** — Lấy đường dẫn tệp của ảnh màn hình đã chụp trên thiết bị cho các mục đích riêng của bạn.
- **Kiểm soát sự kiện chụp màn hình** — Giới hạn số lượng sự kiện chụp màn hình.
- **Theo dõi trạng thái** — kiểm tra ScreenGuard có đang hoạt động hay không khi sự kiện chụp màn hình xảy ra.

### 🎥 Phát hiện Quay video màn hình

Theo dõi hoạt động quay màn hình theo thời gian thực.

- **Phát hiện trạng thái quay** — Biết khi nào quá trình quay màn hình bắt đầu và kết thúc trên thiết bị.
- **Phản hồi các nỗ lực quay** — Thực hiện các hành động tùy chỉnh khi phát hiện thấy hành động quay màn hình.
- **Hỗ trợ đa nền tảng** — Hoạt động trên **iOS 13+** và **Android 15+ (API 35+)**.

### 📝 Ghi log hoạt động

Ghi log toàn diện phục vụ cho việc chỉnh sửa hoặc gỡ lỗi.

---

## Cách thức hoạt động

React Native ScreenGuard kết nối mã nguồn native (iOS Objective-C, Android Java) và JavaScript, sử dụng `FLAG_SECURE` trên Android và `UITextField` tùy chỉnh trên iOS.

:::tip Bắt đầu nhanh
1. [Cài đặt thư viện](./install.md)
2. [Khởi tạo cài đặt](../usages-and-apis/init-settings.md) với `initSettings()`
3. Kích hoạt ScreenGuard với `register()`, `registerWithBlurView()`, hoặc `registerWithImage()`
4. (Tùy chọn) Lắng nghe sự kiện với hooks `useSGScreenShot` hoặc `useSGScreenRecord`
:::

### Điều kiện tiên quyết

Nếu bạn đã quen thuộc với JavaScript, React và React Native, bạn sẽ có thể làm quen với React Native Screenguard rất nhanh chóng! Nếu chưa, chúng tôi khuyên bạn nên tìm hiểu một số kiến thức cơ bản trước, sau đó quay lại đây.

Dưới đây là một số tài nguyên giúp bạn:

1. [React Native Express (Phần 1 đến 4)](https://www.reactnative.express/)
2. [Các khái niệm chính của React](https://react.dev/learn)
3. [React Hooks](https://react.dev/reference/react)
4. [Giới thiệu về Native module](https://reactnative.dev/docs/native-modules-intro)


### Yêu cầu tối thiểu

- Phiên bản [Node.js](https://nodejs.org/en/download/) 15.0 trở lên:
  - Khi cài đặt Node.js, bạn nên tích chọn tất cả các ô liên quan đến dependencies.
- `react-native` >= 0.59
- `react` >= 16.8.0
- `Expo` >= 36
- `Android SDK` >= 29
- `Cocoapods` >= 1.1.4
- `iOS minimum deployment target` >= 13
- `typescript` >= 4.0.0
