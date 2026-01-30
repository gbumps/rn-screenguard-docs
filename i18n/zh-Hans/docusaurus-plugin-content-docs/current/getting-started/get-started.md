---
sidebar_position: 1
---

# 快速开始

<p align="left">
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"/><span/></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"/><span/></a>
  <a href="https://aleen42.github.io/badges/src/eslint.svg"><img src="https://aleen42.github.io/badges/src/eslint.svg"/><span/></a>
</p>

一个用于防止应用被截屏和录屏的 **React Native 库**，具有强大的事件检测能力。

<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/26d8ac37-9bc3-4d5b-8ad5-93525fb90a72" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## ✨ 核心特性

### 🛡️ 截屏与录屏防护

防止应用内的敏感内容被截取或录影，支持 3 种不同的遮罩类型：

- **纯色遮罩** — 显示纯色（如黑色、白色或自定义十六进制颜色）。
- **模糊效果** — 应用模糊遮罩以遮盖内容。
- **自定义图片** — 在截屏时显示您自己的图片、徽标或水印。


### 📸 截屏检测

精确了解用户何时对您的应用进行截屏。该库提供实时事件检测，在截获屏幕快照时立即触发：

- **即时响应** — 在截屏时执行自定义逻辑，如显示警告、记录事件等。
- **访问截屏元数据** — 获取设备上截获的屏幕快照文件路径，用于您自己的用途。
- **控制事件频率** — 限制截屏事件的数量。
- **追踪状态** — 了解截屏事件发生时 Screenguard 是否处于激活状态。

### 🎥 录屏检测

实时监控录屏活动。

- **检测录屏状态** — 了解设备何时开始和结束录屏。
- **响应录屏尝试** — 在检测到录屏时执行自定义操作。
- **跨平台支持** — 适用于 **iOS 13+** 和 **Android 15+ (API 35+)**。

### 📝 活动日志 (Activity Logging)

为编辑或调试提供全面的日志记录。该库会自动追踪所有与 ScreenGuard 相关的事件，通常用于：

- **调试问题** — 在开发过程中快速识别屏幕防护何时以及如何被激活或停用。
- **审核截取尝试** — 保留所有截屏和录屏事件的记录，用于安全审计或分析。
- **检索事件历史** — 以编程方式访问 ScreenGuard 活动的完整日志，用于自定义报告或监控。

---

## 工作原理

React Native ScreenGuard 桥接了原生代码（iOS Objective-C, Android Java）和 JavaScript，在 Android 上使用 `FLAG_SECURE`，在 iOS 上使用可自定义的 `UITextField`。

:::tip 快速入门
1. [安装库](./install.md)
2. 使用 `initSettings()` [初始化设置](../usages-and-apis/init-settings.md)
3. 使用 `register()`、`registerWithBlurView()` 或 `registerWithImage()` 激活 ScreenGuard
4. （可选）使用 `useSGScreenShot` 或 `useSGScreenRecord` Hook 监听事件
:::

### 前置要求

如果您已经熟悉 JavaScript、React 和 React Native，那么您可以很快上手 React Native Screenguard！如果没有，我们强烈建议您先掌握一些基础知识，然后再回来。

这里有一些资源可以帮助您：

1. [React Native Express (第 1 到 4 部分)](https://www.reactnative.express/)
2. [React 核心概念](https://react.dev/learn)
3. [React Hooks](https://react.dev/reference/react)
4. [原生模块介绍](https://reactnative.dev/docs/native-modules-intro)


### 最低要求

- [Node.js](https://nodejs.org/en/download/) 版本 15.0 或更高：
  - 安装 Node.js 时，建议勾选所有与依赖项相关的复选框。
- `react-native` >= 0.68
- `Android SDK` >= 29
- `Cocoapods` >= 1.1.4
- `iOS 最低部署目标` >= 13
- `typescript` >= 4.0.0
