---
sidebar_position: 2
---

# 설치

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## React Native CLI (Bare Workflow)

React Native CLI로 생성된 표준 React Native 프로젝트의 경우:

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

설치 후 iOS pod 설치를 위해 [Linking](./linking.md)으로 이동하세요.

---

## Expo 프로젝트

:::warning 개발 빌드(Development Build) 필요
React Native ScreenGuard는 네이티브 코드를 사용하므로 **Expo Go에서 실행할 수 없습니다**. 반드시 [개발 빌드](https://docs.expo.dev/develop/development-builds/introduction/)를 사용해야 합니다.
:::

### 1단계: 패키지 설치

```bash
npx expo install react-native-screenguard
```

### 2단계: 네이티브 디렉토리 생성

Prebuild를 실행하여 네이티브 `android` 및 `ios` 디렉토리를 생성합니다:

```bash
npx expo prebuild --clean
```

이 명령은 `app.json` / `app.config.js` 구성을 기반으로 네이티브 프로젝트 파일을 생성합니다.

### 3단계: 빌드 및 실행

로컬 개발의 경우:

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

또는 [EAS Build](https://docs.expo.dev/build/introduction/)를 사용하여 빌드하세요:

```bash
eas build --platform all
```

:::tip 네이티브 디렉토리 정리
라이브러리 업데이트 후 문제가 발생하면 다음을 실행해 보세요:
```bash
npx expo prebuild --clean
```
이렇게 하면 네이티브 디렉토리가 다시 생성되고 모든 네이티브 코드가 제대로 연결됩니다.
:::

:::info 왜 Expo Go를 사용할 수 없나요?
Expo Go는 제한된 네이티브 모듈 세트가 포함된 미리 빌드된 앱입니다. React Native ScreenGuard는 스크린샷 차단을 위해 사용자 정의 네이티브 코드가 필요하므로 Expo Go에 포함될 수 없습니다.

[개발 빌드](https://docs.expo.dev/develop/development-builds/introduction/)는 기본적으로 프로젝트에 필요한 모든 네이티브 모듈이 포함된 사용자 정의 버전의 Expo Go입니다.
:::

### 더 읽어보기

- [Expo 개발 빌드](https://docs.expo.dev/develop/development-builds/introduction/)
- [Continuous Native Generation (Prebuild)](https://docs.expo.dev/workflow/prebuild/)
- [로컬 앱 개발](https://docs.expo.dev/guides/local-app-development/)
