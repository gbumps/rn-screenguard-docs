---
sidebar_position: 1
---

# Hạn chế

## v2.0.0+

- Thư viện này chỉ hỗ trợ chặn chụp màn hình cho **iOS 13+** và **Android 8+**.

- Phát hiện quay màn hình chỉ được hỗ trợ trên **iOS 13+** và **Android 15+ (API 35+)**.

- Hãy nhớ chỉ gọi một hàm `register*` **duy nhất** và không kết hợp với các hàm đăng ký khác để hạn chế lỗi và các vấn đề không mong muốn trong quá trình thử nghiệm.

- Trong v2.0.0+, các sự kiện chụp màn hình và quay màn hình được xử lý thông qua React hooks (`useSGScreenShot`, `useSGScreenRecord`) thay vì các trình lắng nghe sự kiện thủ công.

- Bạn phải gọi [`initSettings()`](/docs/usages-and-apis/init-settings) trước khi sử dụng bất kỳ API ScreenGuard nào khác.

---

## v1.x (Cũ)

- Từ `v0.3.6` trở lên, các callback sẽ không được kích hoạt trên tất cả các hàm. Bạn có thể phải tự kích hoạt nó bằng cách sử dụng `registerScreenshotEventListener` hoặc `registerScreenRecordingEventListener` thay thế.

- ~~Vui lòng lưu ý rằng việc nhập văn bản sẽ tạm thời bị vô hiệu hóa cho đến khi gọi `unregister` trên Android ngoại trừ `registerWithoutEffect`.~~ ✅ **Vấn đề này đã được khắc phục hoàn toàn trong v2.0.0.**
