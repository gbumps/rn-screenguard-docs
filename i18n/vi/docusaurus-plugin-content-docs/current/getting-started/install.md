---
sidebar_position: 2
---

# Cài đặt

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## React Native CLI (Bare Workflow)

Đối với các dự án React Native tiêu chuẩn được tạo bằng React Native CLI:

<Tabs>
  <TabItem value="npm" label="npm" default>
    ```bash
    npm install react-native-screenguard --save
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash
    yarn add react-native-screenguard
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash
    pnpm add react-native-screenguard
    ```
  </TabItem>
</Tabs>

Sau khi cài đặt, hãy tiếp tục đến phần [Liên kết (Linking)](./linking.md) để cài đặt pod cho iOS.

---

## Expo

:::warning Yêu cầu Development Build
React Native ScreenGuard sử dụng mã nguồn native và **không thể chạy trong Expo Go**. Bạn phải sử dụng [development build](https://docs.expo.dev/develop/development-builds/introduction/).
:::

### Bước 1: Cài đặt gói

```bash
npx expo install react-native-screenguard
```

### Bước 2: Tạo các thư mục native

Chạy Prebuild để tạo các thư mục `android` và `ios` native:

```bash
npx expo prebuild --clean
```

Lệnh này tạo các tệp dự án native dựa trên cấu hình `app.json` / `app.config.js` của bạn.

### Bước 3: Build và chạy

Để phát triển cục bộ:

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

Hoặc build bằng [EAS Build](https://docs.expo.dev/build/introduction/):

```bash
eas build --platform all
```

:::tip Dọn dẹp các thư mục Native
Nếu bạn gặp sự cố sau khi cập nhật thư viện, hãy thử chạy:
```bash
npx expo prebuild --clean
```
Thao tác này sẽ tạo lại các thư mục native và đảm bảo tất cả mã nguồn native được liên kết chính xác.
:::

:::info Tại sao tôi không thể sử dụng Expo Go?
Expo Go là một ứng dụng được build sẵn chứa một tập hợp hạn chế các module native. Vì React Native ScreenGuard yêu cầu mã nguồn native nên không thể được đưa vào Expo Go.

Một [development build](https://docs.expo.dev/develop/development-builds/introduction/) về cơ bản là phiên bản Expo Go tùy chỉnh của riêng bạn, bao gồm tất all các module native mà dự án của bạn cần.
:::

### Đọc thêm

- [Expo Development Builds](https://docs.expo.dev/develop/development-builds/introduction/)
- [Continuous Native Generation (Prebuild)](https://docs.expo.dev/workflow/prebuild/)
- [Local App Development](https://docs.expo.dev/guides/local-app-development/)
