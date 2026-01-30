---
sidebar_position: 1
---

# Kiểm thử

## Trình giả lập iOS (iOS Simulator)

Nếu bạn muốn kiểm tra trên trình giả lập iOS, hãy mở **Simulator**, ở thanh menu phía trên, chọn **Device -> Trigger Screenshot**. Cách này áp dụng cho iOS 14+.

![img](https://i.ibb.co/wZWyNPPx/sv-ios-testing.png)

## Trình giả lập Android (Android Emulator)

Nếu bạn muốn kiểm tra trên Trình giả lập Android, bạn có thể tạo một trình giả lập hỗ trợ **Google Play Service API**. Sau đó vào Play Store và tải bất kỳ ứng dụng chụp/quay màn hình bên thứ ba nào tùy theo nhu cầu của bạn **(XRecorder, AZ, v.v....)** để kiểm tra.

Trình giả lập Android 12+ đã cung cấp sẵn chức năng chụp và quay màn hình trong Bảng cài đặt nhanh (Quick Settings Panel).

![img](https://i.ibb.co/HRNq4RJ/sv-andr-testing.png)


## Phương pháp kiểm tra sai

Tất cả các chức năng chụp và quay màn hình trên trình giả lập hiển thị dưới đây đều không dựa trên chức năng thiết bị thật, việc kiểm tra bằng cách này sẽ dẫn đến kết quả sai (false positive).

![img](https://i.ibb.co/6JXK0CZf/Screenshot-2026-01-25-at-02-09-23.png)

![img](https://i.ibb.co/xqmWtxVL/Screenshot-2026-01-25-at-02-21-15.png)
