---
sidebar_position: 1
---

# 기여하기

기여는 언제나 환영합니다. 규모에 상관없이 프로젝트에 큰 도움이 됩니다!

우리는 이 커뮤니티가 서로에게 우호적이고 존중하는 공간이 되기를 바랍니다. 프로젝트와 관련된 모든 상호작용에서 이 점을 준수해 주세요. 기여하기 전에 [행행동 강령](https://github.com/gbumps/react-native-screenguard/blob/master/CODE_OF_CONDUCT.md)을 읽어주시기 바랍니다.

## 개발 워크플로우

### 1. 설정

프로젝트를 시작하려면 루트 디렉토리에서 `yarn`을 실행하여 라이브러리와 예제 앱 모두에 필요한 종속성을 설치하세요.

```sh
yarn
```

### 2. 예제 앱 실행

개발하는 동안 [예제 앱](https://github.com/gbumps/react-native-screenguard/tree/master/example)을 실행하여 변경 사항을 테스트할 수 있습니다.

**Metro Bundler 시작:**
```sh
yarn example start
```

**Android에서 실행:**
```sh
yarn example android
```

**iOS에서 실행:**
```sh
yarn example ios
```

:::note 참고
`src/` 디렉토리의 JavaScript 파일 변경 사항은 예제 앱에 자동으로 반영됩니다. 네이티브 코드(Java, Kotlin, ObjC, Swift)의 변경 사항은 예제 앱을 다시 빌드해야 합니다.
:::

### 3. 테스트 및 린팅(Linting)

PR을 제출하기 전에 코드가 모든 테스트와 린팅 체크를 통과하는지 확인하세요.

**단위 테스트 실행:**
```sh
yarn test
```

**타입 체크 실행:**
```sh
yarn typecheck
```

**린터(Linter) 실행:**
```sh
yarn lint
```

**린터 오류 수정:**
```sh
yarn lint --fix
```

---

## 릴리스 및 배포

우리는 패키지 빌드를 위해 [react-native-builder-bob](https://github.com/callstack/react-native-builder-bob)을 사용합니다.

### 1. 패키지 빌드

패키지가 올바르게 빌드되는지 확인하려면 다음을 실행하세요.

```sh
yarn build
```

또는 

```sh
yarn prepare
```

### 2. 파일 확인

`lib/` 폴더를 확인하여 CommonJS, Module 및 TypeScript 정의가 올바르게 생성되었는지 확인하세요.

### 3. 게시 (관리자 전용)

npm에 새 버전을 게시하려면:

1. `package.json`에서 버전을 업데이트합니다.
2. `npm publish`를 실행합니다 (`prepublishOnly` 훅이 자동으로 `bob build`를 실행합니다).

```sh
npm publish
```

---

## 본 웹 문서 기여하기

오타나 번역 오류를 발견하거나 문서를 개선하고 싶으시다면, 다음 문서 저장소에 기여해 주세요:
[rn-screenguard-docs](https://github.com/gbumps/rn-screenguard-docs)

---

## 커밋 메시지 규칙

우리는 커밋 메시지에 대해 [Conventional Commits 사양](https://www.conventionalcommits.org/en)을 따릅니다.

| 타입 | 설명 |
|------|-------------|
| `fix` | 버그 수정 (예: 중단된 메서드로 인한 크래시 수정) |
| `feat` | 새로운 기능 (예: 모듈에 새로운 메서드 추가) |
| `refactor` | 코드 리팩토링 (예: 클래스 컴포넌트에서 훅으로 마이그레이션) |
| `docs` | 문서 변경 (예: 모듈 사용 예제 추가) |
| `test` | 테스트 추가 또는 업데이트 (예: 통합 테스트 추가) |
| `chore` | 도구 관련 변경 (예: CI 설정 변경) |
