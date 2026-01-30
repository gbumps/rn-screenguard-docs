---
sidebar_position: 12
---

# `useSGScreenRecord` <span class="new-badge">MỚI ✨</span>

:::info Phiên bản
**Khả dụng từ v2.0.0+**
:::

Một React hook để phát hiện các sự kiện quay màn hình. Thay thế cho `registerScreenRecordingEventListener` từ phiên bản v1.x.

**Hỗ trợ nền tảng:**
- iOS 13+
- Android 15+ (API 35+)

### Core Function

```ts
function useSGScreenRecord(
  listener?: (event: ScreenGuardScreenRecordDataObject) => void
): {
  recordingData: ScreenGuardScreenRecordDataObject | null;
  activationStatus: ScreenGuardHookData | null;
}
```

### Tham số

| Tên | Bắt buộc | Kiểu | Mô tả |
|------|----------|------|-------------|
| listener | Không | function | Một hàm callback tùy chọn được kích hoạt khi trạng thái quay màn hình thay đổi |

### Giá trị trả về

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| recordingData | đối tượng \| null | Dữ liệu về trạng thái quay màn hình hiện tại |
| activationStatus | đối tượng \| null | Trạng thái kích hoạt hiện tại của ScreenGuard |

---

#### Đối tượng `recordingData`

```ts
interface ScreenGuardScreenRecordDataObject {
  isRecording?: boolean;
}
```

| Trường | Kiểu | Mô tả |
|-------|------|-------------|
| `isRecording` | boolean \| undefined | `true` khi quá trình quay màn hình bắt đầu, `false` khi quá trình quay màn hình dừng lại. `undefined` trước khi có bất kỳ sự kiện quay màn hình nào xảy ra |

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

Cách sử dụng cơ bản:

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ScreenGuardModule, { useSGScreenRecord } from 'react-native-screenguard';

function App() {
  const { recordingData, activationStatus } = useSGScreenRecord();

  React.useEffect(() => {
    ScreenGuardModule.initSettings();
  }, []);

  return (
    <View>
      <Text>Đã kích hoạt: {activationStatus?.isActivated ? 'Có' : 'Không'}</Text>
      <Text>
        Đang quay: {recordingData?.isRecording ? '🔴 Đang quay...' : '⚪ Không quay'}
      </Text>
    </View>
  );
}
```

Với trình lắng nghe callback:

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenRecord } from 'react-native-screenguard';

function App() {
  useSGScreenRecord((event) => {
    if (event.isRecording) {
      Alert.alert('Cảnh báo', 'Đã bắt đầu quay màn hình!');
    } else {
      Alert.alert('Thông báo', 'Đã dừng quay màn hình.');
    }
  });

  // ... phần còn lại của component
}
```

### Lưu ý

- Hook này tự động xử lý việc hủy đăng ký (cleanup) khi component bị unmount.

:::note Hỗ trợ nền tảng
- **iOS**: Hỗ trợ đầy đủ trên iOS 13+
- **Android**: Chỉ hỗ trợ trên Android 15+ (API 35+). Trên các phiên bản Android cũ hơn, cài đặt này sẽ bị bỏ qua và tính năng phát hiện quay màn hình sẽ không khả dụng.
:::

## Demo

{/* TODO: Thêm video demo tại đây */}
