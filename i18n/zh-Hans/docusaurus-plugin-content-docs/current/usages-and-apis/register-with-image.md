---
sidebar_position: 3
---

# `registerWithImage`

使用自定义图像视图和背景颜色激活 screenguard。

**iOS** 上使用 [SDWebImage](https://github.com/SDWebImage/SDWebImage)，**Android** 上使用 [Glide](https://github.com/bumptech/glide)，以实现更快的加载和缓存。

:::warning v2.0.0+ 要求
在使用此函数之前，必须先调用 [`initSettings()`](./init-settings.md)。
:::

### 参数

接受一个包含以下参数的 JS 对象：

| 名称 | 是否必填 | 类型 | 默认值 | 描述 |
|------|----------|------|---------|-------------|
| **source** | **是** | 对象 | | 图像源。可以是一个网络 URI 或本地资源。支持：jpg, jpeg, png, gif, bmp, webp, svg。用法：`source: { uri: 'https://...' }` 或 `source: require('./image.png')` |
| **width** | **是** | 数字 | | 图像宽度 |
| **height** | **是** | 数字 | | 图像高度 |
| defaultSource | 否 | 对象 | | 如果 `source` 加载失败的备用图像。用法：`defaultSource: require('./fallback.png')` |
| backgroundColor | 否 | 字符串 | '#000000' | 图像后的背景颜色 |
| alignment | 否 | 数字 | 4 (居中) | 图像位置 (0-8)。见 [对齐值](#alignment) |
| top | 否 | 数字 | | 自定义顶部位置 |
| left | 否 | 数字 | | 自定义左侧位置 |
| bottom | 否 | 数字 | | 自定义底部位置 |
| right | 否 | 数字 | | 自定义右侧位置 |
| ~~timeAfterResume~~ | ~~否~~ | ~~数字~~ | ~~1000~~ | ⚠️ **在 v2.0.0 中已移除** - 请改用 [`initSettings()`](./init-settings.md) |

> **v2.0.0 迁移：** 在 v1.x 中，`timeAfterResume` 是直接传递给 `registerWithImage()` 的。从 v2.0.0 开始，请在 [`initSettings()`](./init-settings.md) 中设置。

### `alignment`

| 值 | 位置 |
|-------|----------|
| 0 | 左上 |
| 1 | 上中 |
| 2 | 右上 |
| 3 | 左中 |
| 4 | 居中 (默认) |
| 5 | 右中 |
| 6 | 左下 |
| 7 | 下中 |
| 8 | 右下 |

:::note 注意
- 当对齐值不在 0-8 范围内或是 NaN 时抛出异常
- 不能将对齐值与位置参数 (top, left, bottom, right) 结合使用 - 将首先检查对齐值
- 如果想使用自定义位置参数，请将 alignment 设置为 null
:::

### 示例代码

使用网络图像：

```js
import ScreenGuardModule from 'react-native-screenguard';

// 首先初始化（v2.0.0+ 中必需）
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// 使用网络图像和备用图像
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: {
    uri: 'https://example.com/image.gif',
  },
  defaultSource: require('./images/fallback.png'),
  backgroundColor: '#1a1a2e',
  alignment: 4, // 居中
});
```

使用本地图像：

```js
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: require('./images/logo.png'),
  backgroundColor: '#1a1a2e',
});
```

使用自定义位置：

```js
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: require('./images/logo.png'),
  backgroundColor: '#1a1a2e',
  alignment: null, // 必须为 null 才能使用自定义位置
  top: 50,
  left: 50,
});
```

:::info Android 注意事项
在 Android 上，如果 `initSettings()` 中的 `displayScreenguardOverlayAndroid` 设置为 `false`，调用 `registerWithImage()` 将自动切换到 `registerWithoutEffect()`。
:::

## 演示

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
