---
id: faq
title: FAQ
sidebar_label: FAQ
---

# Các câu hỏi thường gặp

## Không hoạt động trên trình phát video trên iOS

**Câu hỏi**: Không hoạt động với trình phát toàn màn hình iOS.

**Trả lời**: [Hướng dẫn của GitHub về cách thêm khóa SSH mới](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh). (Lưu ý: Link này có vẻ bị nhầm trong bản gốc, nó nên liên quan đến video player).

## Cách kiểm tra trên trình giả lập

**Câu hỏi**: Làm thế nào để kiểm tra trên trình giả lập?

**Trả lời**: Vui lòng truy cập [Tại đây](../testing/testing.md) để biết thêm thông tin.

## 3. Vấn đề: Các bài kiểm tra bị lỗi

**Câu hỏi**: Các bài kiểm tra của tôi bị lỗi mặc dù tôi không có thay đổi nào.

**Trả lời**: Có thể có một số nguyên nhân:
1. Đảm bảo bạn đã lấy các thay đổi mới nhất từ nhánh chính.
2. Kiểm tra xem có các phụ thuộc mới hoặc bản cập nhật nào được yêu cầu bằng cách chạy `npm install` hoặc `yarn install`.
3. Đảm bảo môi trường cục bộ của bạn khớp với các thiết lập được mô tả trong tài liệu của kho lưu trữ.

## 4. Vấn đề: Build thất bại

**Câu hỏi**: Quá trình build thất bại với một lỗi.

**Trả lời**: Các nguyên nhân phổ biến cho việc build thất bại bao gồm:
1. Thiếu biến môi trường: Đảm bảo tất cả các biến môi trường bắt buộc đã được thiết lập chính xác.
2. Vấn đề phụ thuộc: Chạy `npm install` hoặc `yarn install` để đảm bảo tất cả các phụ thuộc được cập nhật.
3. Vấn đề cấu hình: Kiểm tra kỹ các tệp cấu hình build như `webpack.config.js` hoặc bất kỳ cài đặt liên quan đến build nào khác.

## 5. Vấn đề: Lỗi Linting

**Câu hỏi**: Làm thế nào để sửa lỗi linting trong mã của tôi?

**Trả lời**: Để sửa lỗi linting, hãy chạy công cụ linter được cung cấp trong kho lưu trữ. Ví dụ: nếu kho lưu trữ sử dụng ESLint, bạn có thể chạy:

```sh
npm run lint --fix
```

hoặc

```sh
yarn lint --fix
```

Việc này sẽ tự động sửa nhiều lỗi linting phổ biến. Nếu vẫn còn lỗi, hãy tham khảo các thông báo lỗi để biết hướng dẫn cụ thể về cách giải quyết chúng.

## 6. Vấn đề: Hướng dẫn đóng góp

**Câu hỏi**: Làm thế nào tôi có thể đóng góp cho kho lưu trữ này?

**Trả lời**: Chúng tôi hoan nghênh các đóng góp! Vui lòng tham khảo tệp CONTRIBUTING.md trong thư mục gốc của kho lưu trữ để biết các hướng dẫn chi tiết về cách đóng góp. Nó bao gồm thông tin về thiết lập môi trường phát triển, tiêu chuẩn mã nguồn và quy trình gửi pull request.

## 7. Vấn đề: Liên hệ với người duy trì

**Câu hỏi**: Làm thế nào tôi có thể liên hệ với những người duy trì kho lưu trữ này?

**Trả lời**: Nếu bạn cần liên hệ với những người duy trì, bạn có thể mở một issue trên GitHub và gắn thẻ (tag) họ. Ngoài ra, hãy kiểm tra xem kho lưu trữ có kênh liên lạc riêng như Slack, Discord hoặc danh sách gửi thư hay không.

## 8. Vấn đề: Thông tin giấy phép

**Câu hỏi**: Giấy phép của kho lưu trữ này là gì?

**Trả lời**: Kho lưu trữ này được cấp phép theo Giấy phép MIT. Bạn có thể tìm thêm thông tin chi tiết trong tệp LICENSE ở thư mục gốc của kho lưu trữ.
