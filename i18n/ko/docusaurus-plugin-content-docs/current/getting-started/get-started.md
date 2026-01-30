---
sidebar_position: 1
---

# 시작하기

<p align="left">
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"/><span/></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"/><span/></a>
  <a href="https://aleen42.github.io/badges/src/eslint.svg"><img src="https://aleen42.github.io/badges/src/eslint.svg"/><span/></a>
</p>

React Native 앱의 스크린샷 및 화면 녹화를 방지하고 강력한 이벤트 감지 기능을 제공하는 **React Native 라이브러리**입니다.

<iframe width="375" height="667" src="https://github.com/gbumps/react-native-screenguard/assets/16846439/26d8ac37-9bc3-4d5b-8ad5-93525fb90a72" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## ✨ 주요 기능

### 🛡️ 스크린샷 및 화면 녹화 방지

3가지 유형의 오버레이를 통해 앱의 민감한 콘텐츠가 캡처되거나 녹화되는 것을 방지합니다:

- **단일 색상 오버레이** — 단색(예: 검정색, 흰색 또는 사용자 지정 16진수 색상)을 표시합니다.
- **블러 효과** — 콘텐츠를 가리는 블러 오버레이를 적용합니다.
- **사용자 지정 이미지** — 캡처 시 고유한 이미지, 로고 또는 워터마크를 표시합니다.


### 📸 스크린샷 감지

사용자가 앱의 스크린샷을 찍는 시점을 정확히 파악하세요. 라이브러리는 스크린샷이 캡처될 때 즉시 트리거되는 실시간 이벤트 감지 기능을 제공합니다:

- **즉각적인 반응** — 경고 표시, 이벤트 로그 기록 등 스크린샷이 찍힐 때 사용자 지정 로직을 실행합니다.
- **스크린샷 메타데이터 액세스** — 장치에 캡처된 스크린샷 파일 경로를 가져와 자체적인 용도로 활용할 수 있습니다.
- **이벤트 빈도 제어** — 스크린샷 이벤트 발생 횟수를 제한합니다.
- **상태 추적** — 스크린샷 이벤트 발생 시 Screenguard가 활성화 상태인지 알 수 있습니다.

### 🎥 화면 녹화 감지

화면 녹화 활동을 실시간으로 모니터링합니다.

- **녹화 상태 감지** — 장치에서 화면 녹화가 시작되고 종료되는 시점을 파악합니다.
- **녹화 시도에 대응** — 녹화가 감지될 때 사용자 지정 작업을 실행합니다.
- **크로스 플랫폼 지원** — **iOS 13+** 및 **Android 15+ (API 35+)**에서 작동합니다.

### 📝 활동 로깅 (Activity Logging)

편집 또는 디버깅을 위한 포괄적인 로깅 기능을 제공합니다. 라이브러리는 다음과 같은 목적으로 모든 ScreenGuard 관련 이벤트를 자동으로 추적합니다:

- **문제 디버깅** — 개발 중에 화면 방지가 활성화 또는 비활성화된 시점과 방법을 빠르게 식별합니다.
- **캡처 시도 감사** — 보안 감사 또는 분석을 위해 모든 스크린샷 및 화면 녹화 이벤트 기록을 유지합니다.
- **이벤트 이력 조회** — 사용자 지정 보고 또는 모니터링을 위해 프로그래밍 방식으로 ScreenGuard 활동의 전체 로그에 액세스합니다.

---

## 작동 원리

React Native ScreenGuard는 JavaScript와 네이티브 코드(iOS Objective-C, Android Java)를 연결하며, Android에서는 `FLAG_SECURE`를 사용하고 iOS에서는 사용자 정의 가능한 `UITextField`를 사용합니다.

:::tip 빠른 시작
1. [라이브러리 설치](./install.md)
2. `initSettings()`를 사용하여 [초기 설정](../usages-and-apis/init-settings.md)
3. `register()`, `registerWithBlurView()` 또는 `registerWithImage()`로 ScreenGuard 활성화
4. (선택 사항) `useSGScreenShot` 또는 `useSGScreenRecord` 훅으로 이벤트 리스닝
:::

### 사전 요구 사항

JavaScript, React 및 React Native에 익숙하다면 React Native Screenguard를 빠르게 시작할 수 있습니다! 익숙하지 않다면 먼저 기본 지식을 습득한 후 다시 방문하는 것을 적극 권장합니다.

도움이 될 만한 리소스는 다음과 같습니다:

1. [React Native Express (섹션 1~4)](https://www.reactnative.express/)
2. [React의 핵심 개념](https://react.dev/learn)
3. [React Hooks](https://react.dev/reference/react)
4. [네이티브 모듈 소개](https://reactnative.dev/docs/native-modules-intro)


### 최소 요구 사항

- [Node.js](https://nodejs.org/en/download/) 버전 15.0 이상:
  - Node.js 설치 시 종속성 관련 모든 체크박스를 선택하는 것이 좋습니다.
- `react-native` >= 0.68
- `Android SDK` >= 29
- `Cocoapods` >= 1.1.4
- `iOS 최소 배포 타겟` >= 13
- `typescript` >= 4.0.0
