---
sidebar_position: 0
---

# `initSettings` <span class="new-badge">MỚI ✨</span>

:::info Phiên bản
**Khả dụng từ v2.0.0+**
:::

Khởi tạo ScreenGuard với các cài đặt mong muốn của bạn. Hàm này **phải được gọi trước** khi sử dụng bất kỳ API ScreenGuard nào khác.

### Tham số

Nhận một đối tượng JS với các tham số sau:

| Tên | Bắt buộc | Kiểu | Mặc định |
|------|----------|------|---------|
| [enableCapture](#enablecapture) | Không | boolean | `false` |
| [enableRecord](#enablerecord) | Không | boolean | `false` |
| [enableContentMultitask](#enablecontentmultitask) | Không | boolean | `false` |
| [displayScreenGuardOverlay](#displayscreenguardoverlay) | Không | boolean | `false` |
| [displayScreenguardOverlayAndroid](#displayscreenguardoverlayandroid) | Không | boolean | `true` |
| [timeAfterResume](#timeafterresume) | Không | number | `1000` |
| [getScreenshotPath](#getscreenshotpath) | Không | boolean | `false` |
| [limitCaptureEvtCount](#limitcaptureevtcount) | Không | number | `null` |
| [trackingLog](#trackinglog) | Không | boolean | `false` |

---

#### `enableCapture`

| | |
|---|---|
| **Kiểu** | `boolean` |
| **Mặc định** | `false` |
| **Nền tảng** | iOS, Android |

Bật để cho phép chụp màn hình hoặc tắt để chặn. Mặc định là `false` (đã chặn).

---

#### `enableRecord`

| | |
|---|---|
| **Kiểu** | `boolean` |
| **Mặc định** | `false` |
| **Nền tảng** | iOS 13+, Android 15+ (API 35+) |

Bật để cho phép quay video màn hình hoặc tắt để chặn. Mặc định là `false` (đã chặn).

:::note Hạn chế trên Android
Phát hiện quay màn hình trên Android chỉ khả dụng trên **API 35+ (Android 15+)**. Trên các phiên bản cũ hơn, cài đặt này sẽ bị bỏ qua.
:::

---

#### `enableContentMultitask`

| | |
|---|---|
| **Kiểu** | `boolean` |
| **Mặc định** | `false` |
| **Nền tảng** | Chỉ iOS |

Khi đặt thành `true`, nội dung ứng dụng của bạn sẽ vẫn hiển thị trong Trình chuyển đổi ứng dụng (chế độ đa nhiệm). Khi đặt thành `false`, nội dung sẽ bị ẩn hoặc làm mờ dựa trên kiểu đăng ký (màu, làm mờ, hoặc hình ảnh).

---

#### `displayScreenGuardOverlay`

| | | 
|---|---|
| **Kiểu** | `boolean` |
| **Mặc định** | `false` |
| **Nền tảng** | Chỉ iOS |

Khi đặt thành `true`, một lớp phủ sẽ hiển thị khi người dùng chụp ảnh hoặc quay màn hình (hiển thị cho đến khi người dùng dừng quay) và biến mất sau một khoảng thời gian `timeAfterResume`. Lớp phủ sử dụng cùng kiểu với kiểu bạn đã đăng ký (màu, làm mờ, hoặc hình ảnh). Chỉ hoạt động khi Screenguard đang hoạt động.

**Lưu ý:** Chỉ sử dụng nếu nó không ảnh hưởng đến chức năng ứng dụng của bạn, và tự chịu rủi ro khi sử dụng!

<video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/ios_display_sg_overlay.mov"></video>
---

#### `displayScreenguardOverlayAndroid`

| | |
|---|---|
| **Kiểu** | `boolean` |
| **Mặc định** | `true` |
| **Nền tảng** | Chỉ Android |

Khi đặt thành `true`, một lớp phủ sẽ hiển thị khi người dùng quay lại ứng dụng từ màn hình nền (background). Mặc định là `true` (bật). Chỉ hoạt động khi Screenguard đang hoạt động.

<video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_display_sg_overlay.mov"></video>

---

#### `timeAfterResume`

| | |
|---|---|
| **Kiểu** | `number` (miligiây) |
| **Mặc định** | `1000` |
| **Nền tảng** | iOS, Android |

Khoảng thời gian tính bằng miligiây để hiển thị lớp phủ sau khi chụp (iOS) hoặc sau khi quay lại từ màn hình nền (Android). Yêu cầu `displayScreenGuardOverlay` hoặc `displayScreenguardOverlayAndroid` phải là `true`.

**Ví dụ:** Đặt thành `2000` để hiển thị lớp phủ trong 2 giây.

---

#### `getScreenshotPath`

| | |
|---|---|
| **Kiểu** | `boolean` |
| **Mặc định** | `false` |
| **Nền tảng** | iOS, Android |

Khi đặt thành `true`, dữ liệu sự kiện chụp màn hình sẽ bao gồm đường dẫn đến tệp ảnh chụp màn hình, có thể lấy được từ thuộc tính `screenshotData.path` của hook [`useSGScreenShot`](use-sg-screenshot.md).

---

#### `limitCaptureEvtCount`

| | |
|---|---|
| **Kiểu** | `number \| null` |
| **Mặc định** | `null` |
| **Nền tảng** | iOS, Android* |

Giới hạn số lượng sự kiện chụp màn hình được kích hoạt.
- `null` hoặc `0`: Kích hoạt mọi lúc (không giới hạn)
- `> 0`: Chỉ kích hoạt cho N lần chụp màn hình đầu tiên.

:::note Hạn chế trên Android
Trên Android, việc phát hiện chụp màn hình có thể không hoạt động khi screenguard đang hoạt động (`FLAG_SECURE` chặn các nỗ lực chụp màn hình tiêu chuẩn).
:::

Demo thử nghiệm với `limitCaptureEvtCount` = `3`:

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video controls width="360" height="640" id="player" preload="auto" class="js-player"  src="/react-native-screenguard/videos/ios_limit_cap_evt_3.mov"></video>
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_limit_cap_evt_3.mov"></video>
  </div>
</div>

---

#### `trackingLog`

| | |
|---|---|
| **Kiểu** | `boolean` |
| **Mặc định** | `false` |
| **Nền tảng** | iOS, Android |

Bật ghi log hoạt động để phục vụ mục đích gỡ lỗi. Khi được bật, ScreenGuard sẽ ghi lại tất cả các sự kiện (kích hoạt, hủy kích hoạt, phát hiện chụp màn hình, v.v.), có thể lấy được từ [`getScreenGuardLogs`](get-screen-guard-logs.md).

---

### Code mẫu

Khởi tạo cơ bản:

```js
import ScreenGuardModule from 'react-native-screenguard';

// Khởi tạo với các cài đặt mặc định
await ScreenGuardModule.initSettings();
```

Với các cài đặt tùy chỉnh:

```js
import ScreenGuardModule from 'react-native-screenguard';

await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
  getScreenshotPath: true,
  trackingLog: true,
});
```
