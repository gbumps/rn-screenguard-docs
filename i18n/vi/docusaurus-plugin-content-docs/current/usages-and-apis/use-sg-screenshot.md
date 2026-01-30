---
sidebar_position: 11
---

# `useSGScreenShot` <span class="new-badge">MỚI ✨</span>

:::info Phiên bản
**Khả dụng từ v2.0.0+**
:::

Một React hook để phát hiện các sự kiện chụp màn hình. Thay thế cho `registerScreenshotEventListener` từ phiên bản v1.x.

### Core Function

```ts
function useSGScreenShot(
  listener?: (event: ScreenGuardScreenShotPathDataObject) => void
): {
  screenshotData: ScreenGuardScreenShotPathDataObject | null;
  activationStatus: ScreenGuardHookData | null;
}
```

### Tham số

| Tên | Bắt buộc | Kiểu | Mô tả |
|------|----------|------|-------------|
| listener | Không | function | Một hàm callback tùy chọn được kích hoạt mỗi khi có sự kiện chụp màn hình |

### Giá trị trả về

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| screenshotData | đối tượng \| null | Dữ liệu về ảnh chụp màn hình gần nhất |
| activationStatus | đối tượng \| null | Trạng thái kích hoạt hiện tại của ScreenGuard |

---

#### Đối tượng `screenshotData`

```ts
interface ScreenGuardScreenShotPathDataObject {
  path?: string;
  name?: string;
  type?: string;
}
```

| Trường | Kiểu | Mô tả |
|-------|------|-------------|
| `path` | string \| undefined | Đường dẫn tệp đầy đủ của ảnh màn hình đã chụp (ví dụ: `/var/mobile/.../screenshot.png`). Chỉ khả dụng nếu `getScreenshotPath: true` trong `initSettings()` |
| `name` | string \| undefined | Tên tệp của ảnh chụp màn hình (ví dụ: `screenshot_2024.png`) |
| `type` | string \| undefined | Phần mở rộng/kiểu tệp (ví dụ: `'png'`, `'jpg'`) |

---

#### Đối tượng `activationStatus`

```ts
interface ScreenGuardHookData {
  method: string;
  isActivated: boolean;
}
```

| Trường | Kiểu | Mô tả |
|-------|------|-------------|
| `method` | string | Phương thức kích hoạt hiện đang hoạt động. Các giá trị có thể có: `'blur'`, `'image'`, `'color'`, `''` (trống khi không được kích hoạt) |
| `isActivated` | boolean | `true` nếu screenguard hiện đang được kích hoạt, `false` nếu ngược lại |

### Code mẫu

Cách sử dụng cơ bản với state:

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData, activationStatus } = useSGScreenShot();

  React.useEffect(() => {
    // Khởi tạo ScreenGuard
    ScreenGuardModule.initSettings({
      getScreenshotPath: true,
    });
  }, []);

  return (
    <View>
      <Text>Đã kích hoạt: {activationStatus?.isActivated ? 'Có' : 'Không'}</Text>
      {screenshotData && (
        <Text>Ảnh chụp gần nhất: {screenshotData.name}</Text>
      )}
    </View>
  );
}
```

Với trình lắng nghe callback:

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData } = useSGScreenShot((event) => {
    // Callback này kích hoạt mỗi khi có ảnh chụp màn hình
    Alert.alert('Phát hiện chụp màn hình!', `Tệp: ${event.name}`);
  });

  // ... phần còn lại của component
}
```

### Lưu ý

- Hook này tự động xử lý việc hủy đăng ký (cleanup) khi component bị unmount.
- Trình lắng nghe callback sẽ được kích hoạt dựa trên [`limitCaptureEvtCount`](./init-settings#limitcaptureevtcount) trong [`initSettings()`](./init-settings.md).
  - `null`, `0`: Kích hoạt mọi lúc (không giới hạn)
  - `> 0`: Chỉ kích hoạt cho N lần chụp màn hình đầu tiên.

:::note Hạn chế trên Android
Sự kiện chụp màn hình có thể không nhận được khi screenguard đang hoạt động do `FLAG_SECURE` chặn các nỗ lực chụp màn hình tiêu chuẩn. Tuy nhiên, các sự kiện vẫn có thể nhận được từ các ứng dụng chụp màn hình của bên thứ ba (như XRecorder, Screen Recorder, v.v.)
:::
