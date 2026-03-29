---
sidebar_position: 1
---

# New Architecture 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

该库已更新以支持 New Architecture。从 `1.8.0` 版本起提供全面支持。

## 测试版本 (v2.0.0 - beta5) 

<Tabs>
  <TabItem value="npm" label="npm" default>
    ```bash
    npm install react-native-screenguard@2.0.0-beta5
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash
    yarn add react-native-screenguard@2.0.0-beta5
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash
    pnpm add react-native-screenguard@2.0.0-beta5
    ```
  </TabItem>
</Tabs>

- 由于缺少对 RN 0.67 和 0.59 及以下版本的支持而重新发布。

## 最新版本 (v2.0.1 - stable)

<Tabs>
  <TabItem value="npm" label="npm" default>
    ```bash
    npm install react-native-screenguard@2.0.1
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash
    yarn add react-native-screenguard@2.0.1
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash
    pnpm add react-native-screenguard@2.0.1
    ```
  </TabItem>
</Tabs>

此版本继续支持 `v2.0.0` 并包含一些改进。

- 修复了 Android 上 `limitCaptureEvtCount` 无法正确触发事件的问题。
- 移除了 Android 上的未使用代码。
- 修复了 Android 上 React-native 0.82+ 的 `ClassCastException` 问题 [#125](https://github.com/gbumps/react-native-screenguard/issues/125)。

## v2.0.0

### What's New in v2.0.0
- separate screenshot and screen recording through `initSettings()`
- **New `initSettings()` API** - Required initialization before using any other API
- **React Hooks** - `useSGScreenShot` and `useSGScreenRecord` replace manual event listeners
- **New `getScreenGuardLogs()` API** - Retrieve activity logs for debugging
- **Fixed Android keyboard issue** - Text input no longer disabled when screenguard is active
- **Improved settings** - New options for fine-grained control over overlay display
- **Removed deprecated APIs** - `registerScreenshotEventListener`, `registerScreenRecordingEventListener`, `removeScreenshotEventListener`, `removeRecordingEventListener`

---

## Previous Versions

### 1.1.0 (2025-07-09)

  - fix [#101](https://github.com/gbumps/react-native-screenguard/issues/101) and [#100](https://github.com/gbumps/react-native-screenguard/issues/100) due to color parsing failed + enhance reading hex string with 3 characters (for example #fff)
  - fix [#102](https://github.com/gbumps/react-native-screenguard/issues/102) due to possibly webp not supported.
  - fix [#103](https://github.com/gbumps/react-native-screenguard/issues/103) due to BasedReactPackage not yet implemented on RN 0.73.

### 1.0.9 (2025-05-24)

  - Hot fix Android old arch build failed and library not recognizable when running `npx react-native config`. 

### 1.0.8 (2025-05-22)

  - Final release for v1.x.

### 1.0.8-beta7 (2025-05-21)

  - Android: Remove checking activity declaration inside AndroidManifest.xml as not necessary
  - Added missing iOS remove screenshot + screen record for old arch

### 1.0.8-beta6 (2025-05-11)
      
   - Android: Added checking activity declaration inside AndroidManifest.xml, throw error if not defined.
   - fix #92

### 1.0.8-beta5 (2025-04-22)

   - Refactor API to Promise.
   - Fix build failed due to duplicate import
   - `registerScreenRecordingStatus`: added `screenRecordStatus` boolean. for checking if screen is start recording or stop recording.
   - Fix `deactivateShield` crashed app

### 1.0.8-beta4 (2025-04-11)

   - `registerScreenshotEventListener`:  Fix iOS + android duplicate calls #87.
      
### 1.0.8-beta3 (2025-04-06)

   - Code refactor 
 
### 1.0.8-beta2 (2025-04-05)

   - Code refactor
     
### 1.0.8-beta1 (2025-04-03)

   - Init build

For updates and bug fixing, please visit [here](https://github.com/gbumps/react-native-screenguard/releases) for more infos.

[Reference](https://reactnative.dev/docs/the-new-architecture/landing-page)
