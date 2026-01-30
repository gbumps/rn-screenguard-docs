---
sidebar_position: 1
---

# 제한 사항

## v2.0.0+

- 이 라이브러리는 **iOS 13+** 및 **Android 8+**에서만 스크린샷 차단을 지원합니다.

- 화면 녹화 감지는 **iOS 13+** 및 **Android 15+ (API 35+)**에서만 지원됩니다.

- 테스트 중 오류 및 예기치 않은 문제를 방지하려면 `register*` 함수는 **한 번만** 호출하고 다른 등록 함수와 결합하지 마십시오.

- v2.0.0+에서는 스크린샷 및 화면 녹화 이벤트가 수동 이벤트 리스너 대신 React 훅(`useSGScreenShot`, `useSGScreenRecord`)을 통해 처리됩니다.

- 다른 ScreenGuard API를 사용하기 전에 반드시 [`initSettings()`](/docs/usages-and-apis/init-settings)를 호출해야 합니다.

---

## v1.x (레거시)

- `v0.3.6` 이상부터는 모든 함수에서 콜백이 자동으로 활성화되지 않습니다. 대신 `registerScreenshotEventListener` 또는 `registerScreenRecordingEventListener`를 사용하여 직접 활성화해야 할 수도 있습니다.

- ~~Android에서 `registerWithoutEffect`를 제외하고 `unregister`를 호출할 때까지 텍스트 입력이 일시적으로 비활성화된다는 점에 유의하십시오.~~ ✅ **이 문제는 v2.0.0에서 완전히 해결되었습니다.**
