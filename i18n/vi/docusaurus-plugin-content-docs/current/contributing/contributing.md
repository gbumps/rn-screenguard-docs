---
sidebar_position: 1
---

# Đóng góp

Sự đóng góp của bạn luôn được chào đón, bất kể lớn hay nhỏ!

Chúng tôi muốn cộng đồng này trở nên thân thiện và tôn trọng lẫn nhau. Vui lòng tuân thủ điều đó trong tất cả các tương tác của bạn với dự án. Trước khi đóng góp, vui lòng đọc [quy tắc ứng xử](https://github.com/gbumps/react-native-screenguard/blob/master/CODE_OF_CONDUCT.md).

## Quy trình phát triển

### 1. Thiết lập

Để bắt đầu với dự án, hãy chạy `yarn` trong thư mục gốc để cài đặt các phụ thuộc cần thiết cho cả thư viện và ứng dụng ví dụ:

```sh
yarn
```

### 2. Chạy ứng dụng ví dụ

Trong khi phát triển, bạn có thể chạy [ứng dụng ví dụ](https://github.com/gbumps/react-native-screenguard/tree/master/example) để kiểm tra các thay đổi của mình.

**Bắt đầu Metro Bundler:**
```sh
yarn example start
```

**Chạy trên Android:**
```sh
yarn example android
```

**Chạy trên iOS:**
```sh
yarn example ios
```

:::note Ghi chú
Bất kỳ thay đổi nào đối với các tệp JavaScript trong `src/` đều được tự động phản ánh trong ứng dụng ví dụ. Các thay đổi đối với Mã nguồn Native (Java, Kotlin, ObjC, Swift) yêu cầu phải build lại ứng dụng ví dụ.
:::

### 3. Kiểm thử & Linting

Trước khi gửi PR, hãy đảm bảo mã của bạn vượt qua tất cả các bài kiểm tra và kiểm tra linting.

**Chạy Unit Tests:**
```sh
yarn test
```

**Chạy Type Check:**
```sh
yarn typecheck
```

**Chạy Linter:**
```sh
yarn lint
```

**Sửa lỗi Linter:**
```sh
yarn lint --fix
```

---

## Phát hành & Triển khai

Chúng tôi sử dụng [react-native-builder-bob](https://github.com/callstack/react-native-builder-bob) để build package.

### 1. Build package

Để kiểm tra xem package có build chính xác hay không:

```sh
yarn build
```

hoặc 

```sh
yarn prepare
```

### 2. Xác minh các tệp

Kiểm tra thư mục `lib/` để đảm bảo các định nghĩa CommonJS, Module và TypeScript được tạo chính xác.

### 3. Xuất bản (Chỉ dành cho Người duy trì)

Để xuất bản phiên bản mới lên npm:

1. Cập nhật phiên bản trong `package.json`.
2. Chạy `npm publish` (hook `prepublishOnly` sẽ tự động chạy `bob build`).

```sh
npm publish
```

---

## Đóng góp cho Tài liệu Web này

Nếu bạn phát hiện lỗi chính tả, lỗi dịch thuật hoặc muốn cải thiện tài liệu, vui lòng đóng góp tại kho lưu trữ tài liệu:
[rn-screenguard-docs](https://github.com/gbumps/rn-screenguard-docs)

---

## Quy ước thông điệp Commit

Chúng tôi tuân theo [quy ước conventional commits](https://www.conventionalcommits.org/en) cho các thông điệp commit của mình:

| Loại | Mô tả |
|------|-------------|
| `fix` | Sửa lỗi, ví dụ: sửa lỗi crash do phương thức cũ |
| `feat` | Tính năng mới, ví dụ: thêm phương thức mới vào module |
| `refactor` | Tái cấu trúc mã, ví dụ: chuyển từ class components sang hooks |
| `docs` | Thay đổi trong tài liệu, ví dụ: thêm ví dụ sử dụng cho module |
| `test` | Thêm hoặc cập nhật bài kiểm tra, ví dụ: thêm integration tests |
| `chore` | Thay đổi công cụ, ví dụ: thay đổi cấu hình CI |
