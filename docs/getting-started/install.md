---
sidebar_position: 2
---

# Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## React Native CLI (Bare Workflow)

For standard React Native projects created with React Native CLI:

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

After installation, continue to [Linking](./linking.md) for iOS pod installation.

---

## Expo Projects

:::warning Development Build Required
React Native ScreenGuard uses native code and **cannot run in Expo Go**. You must use a [development build](https://docs.expo.dev/develop/development-builds/introduction/).
:::

### Step 1: Install the package

```bash
npx expo install react-native-screenguard
```

### Step 2: Generate native directories

Run Prebuild to generate the native `android` and `ios` directories:

```bash
npx expo prebuild --clean
```

This command creates native project files based on your `app.json` / `app.config.js` configuration.

### Step 3: Build and run

For local development:

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

Or build using [EAS Build](https://docs.expo.dev/build/introduction/):

```bash
eas build --platform all
```

:::tip Cleaning Native Directories
If you encounter issues after updating the library, try running:
```bash
npx expo prebuild --clean
```
This will regenerate native directories and ensure all native code is properly linked.
:::

:::info Why can't I use Expo Go?
Expo Go is a pre-built app that contains a limited set of native modules. Since React Native ScreenGuard requires custom native code for screenshot blocking, it cannot be included in Expo Go.

A [development build](https://docs.expo.dev/develop/development-builds/introduction/) is essentially your own custom version of Expo Go that includes all the native modules your project needs.
:::

### Further Reading

- [Expo Development Builds](https://docs.expo.dev/develop/development-builds/introduction/)
- [Continuous Native Generation (Prebuild)](https://docs.expo.dev/workflow/prebuild/)
- [Local App Development](https://docs.expo.dev/guides/local-app-development/)
