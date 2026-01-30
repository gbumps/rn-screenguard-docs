---
sidebar_position: 2
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## React Native CLI (Bare Workflow)

对于使用 React Native CLI 创建的标准 React Native 项目：

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

安装完成后，请继续阅读 [链接 (Linking)](./linking.md) 以进行 iOS pod 安装。

---

## Expo 项目

:::warning 需要开发构建 (Development Build)
React Native ScreenGuard 使用原生代码，**无法在 Expo Go 中运行**。您必须使用 [开发构建 (development build)](https://docs.expo.dev/develop/development-builds/introduction/)。
:::

### 第 1 步：安装包

```bash
npx expo install react-native-screenguard
```

### 第 2 步：生成原生目录

运行 Prebuild 以生成原生 `android` 和 `ios` 目录：

```bash
npx expo prebuild --clean
```

此命令将根据您的 `app.json` / `app.config.js` 配置创建原生项目文件。

### 第 3 步：构建并运行

对于本地开发：

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

或者使用 [EAS Build](https://docs.expo.dev/build/introduction/) 进行构建：

```bash
eas build --platform all
```

:::tip 清理原生目录
如果在更新库后遇到问题，请尝试运行：
```bash
npx expo prebuild --clean
```
这将重新生成原生目录并确保所有原生代码都已正确链接。
:::

:::info 为什么我不能使用 Expo Go？
Expo Go 是一个预构建的应用，包含一组有限的原生模块。由于 React Native ScreenGuard 需要自定义原生代码来实现截屏阻断，因此无法包含在 Expo Go 中。

[开发构建 (development build)](https://docs.expo.dev/develop/development-builds/introduction/) 本质上是您自己的自定义版本 Expo Go，其中包含项目所需的所有原生模块。
:::

### 延伸阅读

- [Expo 开发构建](https://docs.expo.dev/develop/development-builds/introduction/)
- [持续原生生成 (Prebuild)](https://docs.expo.dev/workflow/prebuild/)
- [本地应用开发](https://docs.expo.dev/guides/local-app-development/)
