---
sidebar_position: 3
---

# 链接 (Linking)

## React Native 0.60+

从 React Native v0.60 及以上版本开始，通过 [Autolinking](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md) 实现**自动**链接。无需手动链接。

### iOS

安装完成后，进入 `ios` 目录并安装 CocoaPods 依赖：

```bash
cd ios && pod install
```

### Android

无需额外步骤。库将在构建过程中自动链接。

---

## 已弃用 (Deprecated)

:::warning 不再支持
以下章节仅适用于旧版本。如果您使用的是 **React Native 0.60+** 和 **react-native-screenguard v1.0.8+**，可以跳过整个章节。
:::

<details>
<summary><strong>React Native 0.59 及以下 (手动链接)</strong></summary>

#### iOS 手动链接

1. 在 Xcode 中，右键点击项目导航器中的 `Libraries`
2. 选择 **Add Files to [您的项目名称]**
3. 导航到 `node_modules/react-native-screenguard` 并添加 `ScreenGuard.xcodeproj`
4. 在导航器中选择您的项目，转到 **Build Phases** → **Link Binary With Libraries**
5. 添加 `libScreenguard.a`

#### Android 手动链接

1. 打开 `android/app/src/main/java/[...]/MainActivity.java`：

```java
import com.screenguard.ScreenGuardPackage; // 添加此导入

// 添加到 getPackages() 方法中：
new ScreenGuardPackage()
```

2. 添加到 `android/settings.gradle`：

```groovy
include ':react-native-screenguard'
project(':react-native-screenguard').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-screenguard/android')
```

3. 在 `android/app/build.gradle` 的 dependencies 中添加：

```groovy
implementation project(':react-native-screenguard')
```

</details>

<details>
<summary><strong>Android 安装后配置 (v1.0.6 及以下)</strong></summary>

:::info v1.0.8+ 无需配置
从 **v1.0.8** 开始，Activity 已在库的 `AndroidManifest.xml` 中自动声明，并在构建时合并。此步骤仅对 **v1.0.6 及以下**版本是必需的。
:::

对于 **v1.0.6 及以下**版本，您必须在 `AndroidManifest.xml` 中手动声明 `ScreenGuardColorActivity`，以启用背景颜色和模糊效果。

#### 第 1 步：更新 AndroidManifest.xml

打开 `android/app/src/main/AndroidManifest.xml` 并添加 Activity：

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application ...>
        <activity android:name=".MainActivity" ...>
            ...
        </activity>

        <!-- 添加此 Activity -->
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

#### 第 2 步：添加透明主题

打开 `android/app/src/main/res/values/styles.xml` 并添加主题：

```xml
<resources>
    <style name="AppTheme">
        <!-- 您现有的主题 -->
    </style>

    <!-- 添加此主题 -->
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
