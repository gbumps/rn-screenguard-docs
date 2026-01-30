---
sidebar_position: 1
---

# `register`

사용자 지정 배경색 레이아웃으로 ScreenGuard를 활성화합니다.

:::warning v2.0.0+ 요구 사항
이 함수를 사용하기 전에 반드시 [`initSettings()`](./init-settings.md)를 호출해야 합니다.
:::

### 매개변수

다음 매개변수를 포함하는 JS 객체를 받습니다:

| 이름            | 필수 여부 | 타입     | 기본값    | 설명                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| backgroundColor | 아니요       | string   | '#000000'(BLACK) | 표시할 배경색 |
| ~~timeAfterResume~~ | ~~아니요~~ | ~~number~~ | ~~1000~~ | ⚠️ **v2.0.0에서 제거됨** - 대신 [`initSettings()`](./init-settings.md)를 사용하세요. |

> **v2.0.0 마이그레이션:** v1.x에서는 `timeAfterResume`을 `register()`에 직접 전달했습니다. v2.0.0부터는 [`initSettings()`](./init-settings.md)에서 설정하세요.


### 예제 코드

```js
import ScreenGuardModule from 'react-native-screenguard';

// 먼저 초기화 (v2.0.0+에서 필수)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// 그 다음 ScreenGuard 활성화
await ScreenGuardModule.register({
  backgroundColor: '#0F9D58',
});
```

:::info Android 참고 사항
Android에서 `initSettings()`의 `displayScreenguardOverlayAndroid`가 `false`로 설정된 경우, `register()`를 호출하면 자동으로 `registerWithoutEffect()`로 전환되며 경고가 표시됩니다.
:::

## 데모

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/243557545-fd4b3662-6e3b-4428-a927-23ee2068c22a.mp4" />
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/248707554-da99c58c-fb79-4885-b496-ecb242bd4cf8.mp4" />
  </div>
</div>
