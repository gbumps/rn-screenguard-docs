---
sidebar_position: 3
---

# `registerWithImage`

Kích hoạt screenguard với một chế độ xem hình ảnh tùy chỉnh và màu nền.

Sử dụng ImageView với [SDWebImage](https://github.com/SDWebImage/SDWebImage) trên **iOS** và [Glide](https://github.com/bumptech/glide) trên **Android** để tải nhanh hơn và lưu bộ nhớ đệm.

:::warning Yêu cầu v2.0.0+
Bạn phải gọi [`initSettings()`](./init-settings.md) trước khi sử dụng hàm này.
:::

### Tham số

Nhận một đối tượng JS với các tham số sau:

| Tên | Bắt buộc | Kiểu | Mặc định | Mô tả |
|------|----------|------|---------|-------------|
| **source** | **BẮT BUỘC** | Object | | Nguồn của hình ảnh. Có thể là URI mạng hoặc asset cục bộ. Hỗ trợ: jpg, jpeg, png, gif, bmp, webp, svg. Cách dùng: `source: { uri: 'https://...' }` hoặc `source: require('./image.png')` |
| **width** | **BẮT BUỘC** | number | | Chiều rộng của hình ảnh |
| **height** | **BẮT BUỘC** | number | | Chiều cao của hình ảnh |
| defaultSource | Không | Object | | Hình ảnh dự phòng nếu `source` không tải được. Cách dùng: `defaultSource: require('./fallback.png')` |
| backgroundColor | Không | string | '#000000' | Màu nền phía sau hình ảnh |
| alignment | Không | number | 4 (center) | Vị trí của hình ảnh (0-8). Xem [giá trị căn lề](#alignment) |
| top | Không | number | | Vị trí top tùy chỉnh |
| left | Không | number | | Vị trí left tùy chỉnh |
| bottom | Không | number | | Vị trí bottom tùy chỉnh |
| right | Không | number | | Vị trí right tùy chỉnh |
| ~~timeAfterResume~~ | ~~Không~~ | ~~number~~ | ~~1000~~ | ⚠️ **Đã gỡ bỏ trong v2.0.0** - Sử dụng [`initSettings()`](./init-settings.md) thay thế |

> **Cập nhật v2.0.0:** Trong v1.x, `timeAfterResume` được truyền trực tiếp vào `registerWithImage()`. Bắt đầu từ v2.0.0, hãy thiết lập nó trong [`initSettings()`](./init-settings.md).

### `alignment`

| Giá trị | Vị trí |
|-------|----------|
| 0 | topLeft |
| 1 | topCenter |
| 2 | topRight |
| 3 | centerLeft |
| 4 | center (mặc định) |
| 5 | centerRight |
| 6 | bottomLeft |
| 7 | bottomCenter |
| 8 | bottomRight |

:::note Lưu ý
- Ném ngoại lệ khi alignment không nằm trong khoảng 0-8 hoặc là NaN.
- Không thể kết hợp alignment với các tham số vị trí (top, left, bottom, right) - alignment sẽ được kiểm tra trước.
- Đặt alignment thành null nếu bạn muốn sử dụng các tham số vị trí tùy chỉnh.
:::

### Code mẫu

Sử dụng hình ảnh mạng:

```js
import ScreenGuardModule from 'react-native-screenguard';

// Khởi tạo trước (bắt buộc trong v2.0.0+)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// Với hình ảnh mạng và hình ảnh dự phòng
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: {
    uri: 'https://example.com/image.gif',
  },
  defaultSource: require('./images/fallback.png'),
  backgroundColor: '#1a1a2e',
  alignment: 4, // center
});
```

Sử dụng hình ảnh cục bộ:

```js
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: require('./images/logo.png'),
  backgroundColor: '#1a1a2e',
});
```

Sử dụng vị trí tùy chỉnh:

```js
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: require('./images/logo.png'),
  backgroundColor: '#1a1a2e',
  alignment: null, // Phải để null để dùng vị trí tùy chỉnh
  top: 50,
  left: 50,
});
```

:::info Lưu ý Android
Trên Android, nếu `displayScreenguardOverlayAndroid` được đặt thành `false` trong `initSettings()`, việc gọi `registerWithImage()` sẽ tự động chuyển sang `registerWithoutEffect()`.
:::

## Demo

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <iframe width="360" height="640" src="https://player.vimeo.com/video/953622185" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="iOS demo" />
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/264429607-dd2d8191-555f-4f84-abf5-6cbcf67dc84b.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  </div>
</div>
