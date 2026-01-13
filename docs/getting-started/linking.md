---
sidebar_position: 3
---

# Linking

## React Native 0.68+

From React Native v0.68 and above, linking is **automatic** via [Autolinking](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md). No manual linking is required.

### iOS

After installation, navigate to the `ios` directory and install CocoaPods dependencies:

```bash
cd ios && pod install
```

### Android

No additional steps required. The library will be automatically linked during the build process.

---

## Deprecated

:::warning No Longer Supported
The following sections are for legacy versions only. If you are using **React Native 0.68+** and **react-native-screenguard v1.0.8+**, you can skip this entire section.
:::

<details>
<summary><strong>React Native 0.59 and below (Manual Linking)</strong></summary>

:::danger Not Supported in v2.0.0+
React Native 0.59 and below is **no longer supported** in v2.0.0. Please upgrade to React Native 0.68+ to use the latest version.
:::

#### iOS Manual Linking

1. In Xcode, right-click on `Libraries` in the project navigator
2. Select **Add Files to [your project's name]**
3. Navigate to `node_modules/react-native-screenguard` and add `ScreenGuard.xcodeproj`
4. Select your project in the navigator, go to **Build Phases** → **Link Binary With Libraries**
5. Add `libScreenguard.a`

#### Android Manual Linking

1. Open `android/app/src/main/java/[...]/MainActivity.java`:

```java
import com.screenguard.ScreenGuardPackage; // Add this import

// Add to getPackages() method:
new ScreenGuardPackage()
```

2. Add to `android/settings.gradle`:

```groovy
include ':react-native-screenguard'
project(':react-native-screenguard').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-screenguard/android')
```

3. Add to `android/app/build.gradle` dependencies:

```groovy
implementation project(':react-native-screenguard')
```

</details>

<details>
<summary><strong>Android Post-Installation (v1.0.6 and below)</strong></summary>

:::info Not Required in v1.0.8+
Starting from **v1.0.8**, the activity is automatically declared in the library's `AndroidManifest.xml` and merged during build. This step is only required for **v1.0.6 and below**.
:::

For versions **v1.0.6 and below**, you must manually declare the `ScreenGuardColorActivity` in your `AndroidManifest.xml` to enable background color and blur effects.

#### Step 1: Update AndroidManifest.xml

Open `android/app/src/main/AndroidManifest.xml` and add the activity:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application ...>
        <activity android:name=".MainActivity" ...>
            ...
        </activity>

        <!-- Add this activity -->
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

#### Step 2: Add Translucent Theme

Open `android/app/src/main/res/values/styles.xml` and add the theme:

```xml
<resources>
    <style name="AppTheme">
        <!-- Your existing theme -->
    </style>

    <!-- Add this theme -->
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
