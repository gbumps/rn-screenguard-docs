---
sidebar_position: 3
---

# 연결 (Linking)

## React Native 0.60+

React Native v0.60 이상부터는 [Autolinking](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md)을 통해 연결이 **자동**으로 이루어집니다. 수동 연결은 필요하지 않습니다.

### iOS

설치 후 `ios` 디렉토리로 이동하여 CocoaPods 종속성을 설치합니다:

```bash
cd ios && pod install
```

### Android

추가 단계가 필요하지 않습니다. 빌드 프로세스 중에 라이브러리가 자동으로 연결됩니다.

---

## 더 이상 사용되지 않음 (Deprecated)

:::warning 더 이상 지원되지 않음
다음 섹션은 레거시 버전 전용입니다. **React Native 0.60+** 및 **react-native-screenguard v1.0.8+**를 사용하는 경우 이 섹션 전체를 건너뛸 수 있습니다.
:::

<details>
<summary><strong>React Native 0.59 이하 (수동 연결)</strong></summary>

#### iOS 수동 연결

1. Xcode의 프로젝트 내비게이터에서 `Libraries`를 마우스 오른쪽 버튼으로 클릭합니다.
2. **Add Files to [프로젝트 이름]**을 선택합니다.
3. `node_modules/react-native-screenguard`로 이동하여 `ScreenGuard.xcodeproj`를 추가합니다.
4. 내비게이터에서 프로젝트를 선택하고 **Build Phases** → **Link Binary With Libraries**로 이동합니다.
5. `libScreenguard.a`를 추가합니다.

#### Android 수동 연결

1. `android/app/src/main/java/[...]/MainActivity.java`를 엽니다:

```java
import com.screenguard.ScreenGuardPackage; // 이 import 추가

// getPackages() 메서드에 추가:
new ScreenGuardPackage()
```

2. `android/settings.gradle`에 추가:

```groovy
include ':react-native-screenguard'
project(':react-native-screenguard').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-screenguard/android')
```

3. `android/app/build.gradle` 종속성에 추가:

```groovy
implementation project(':react-native-screenguard')
```

</details>

<details>
<summary><strong>Android 사후 설치 (v1.0.6 이하)</strong></summary>

:::info v1.0.8+에서는 필요하지 않음
**v1.0.8**부터는 액티비티가 라이브러리의 `AndroidManifest.xml`에 자동으로 선언되며 빌드 중에 병합됩니다. 이 단계는 **v1.0.6 이하** 버전에서만 필요합니다.
:::

**v1.0.6 이하** 버전의 경우 배경색 및 블러 효과를 활성화하려면 `AndroidManifest.xml`에 `ScreenGuardColorActivity`를 수동으로 선언해야 합니다.

#### 1단계: AndroidManifest.xml 업데이트

`android/app/src/main/AndroidManifest.xml`을 열고 액티비티를 추가합니다:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application ...>
        <activity android:name=".MainActivity" ...>
            ...
        </activity>

        <!-- 이 액티비티 추가 -->
        <activity
            android:name="com.screenguard.ScreenGuardColorActivity"
            android:theme="@style/Theme.AppCompat.Translucent"
            android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
            android:windowSoftInputMode="stateAlwaysVisible|adjustResize"
            android:exported="false"
        />
    </application>
</manifest>
```

#### 2단계: 반투명 테마 추가

`android/app/src/main/res/values/styles.xml`을 열고 테마를 추가합니다:

```xml
<resources>
    <style name="AppTheme">
        <!-- 기존 테마 -->
    </style>

    <!-- 이 테마 추가 -->
    <style name="Theme.AppCompat.Translucent">
        <item name="android:windowNoTitle">true</item>
        <item name="android:windowBackground">@android:color/transparent</item>
        <item name="android:colorBackgroundCacheHint">@null</item>
        <item name="android:windowIsTranslucent">true</item>
        <item name="android:windowAnimationStyle">@null</item>
        <item name="android:windowSoftInputMode">adjustResize</item>
    </style>
</resources>
```

</details>
