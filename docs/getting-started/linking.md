---
sidebar_position: 3
---

# Linking

## RN v0.60+

From React native v0.60 and above, linking is automatic. So you don't need to run `react-native link` anymore. Refer [here](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md).

#### iOS

After the the automatic scripts completed successfully, run pod install and you're good to go:

```
pod install
```

## RN v0.59 (Deprecated)

<blockquote class="custom-blockquote">
I highly recommend to update your current React Native project to at least `0.68+` or higher to keep up-to-date with community, reducing issues and bug fixing, also New Architecture supported.
</blockquote>

React-native 0.59 and lower: Please do manual installation as follow

#### iOS

    1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`

    2. Go to `node_modules` ➜ `react-native-screenguard` and add `ScreenGuard.xcodeproj`

    3. In XCode, in the project navigator, select your project. Add `libScreenguard.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`


#### Android

    1. Open up `android/app/src/main/java/[...]/MainActivity.java`

     - Add `import com.screenguard.ScreenGuardPackage;` to the imports at the top of the file

     - Add `new ScreenGuardPackage()` to the list returned by the `getPackages()` method

    2. Append the following lines to `android/settings.gradle`:

  	```
  	include ':react-native-screenguard'
  	project(':react-native-screenguard').projectDir = new File(rootProject.projectDir,'../node_modules/react-native-screenguard/android')
  	```

    3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:

  	```
      compile project(':react-native-screenguard')
  	```

## Post installation for Android

In order to get this works correctly on Android, you must declare an activity name `com.screenguard.ScreenGuardColorActivity` inside your project `AndroidManifest.xml` 
as you will not receive the background color or the blur effect like in the video example.

<blockquote class="note-blockquote">
<b>Note:</b> Updated on `v1.0.8` is no longer required as this activity has been declared inside `AndroidManifest` of the library, and merged with the project's Manifest file when start building.

Only do this step if you are using `v1.0.6` or below
</blockquote>

1. Open up `[your_project_path]/android/app/src/main/AndroidManifest.xml` and add activity `com.screenguard.ScreenGuardColorActivity` like below

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application ......>
      	<activity
      	  android:name=".MainActivity" .........>
      	  ..........
      	</activity>

+       <activity android:name="com.screenguard.ScreenGuardColorActivity"
+            android:theme="@style/Theme.AppCompat.Translucent"
+            android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
+            android:windowSoftInputMode="stateAlwaysVisible|adjustResize"
+            android:exported="false"
+        />
    </application>
</manifest>
```

2. Open up `[your_project_path]/android/app/src/main/res/values/styles.xml` and add style `Theme.AppCompat.Translucent` like below


```xml
<resource>

<style name="AppTheme">your current app style theme.............</style>

+ <style name="Theme.AppCompat.Translucent">
+        <item name="android:windowNoTitle">true</item>
+        <item name="android:windowBackground">@android:color/transparent</item>
+        <item name="android:colorBackgroundCacheHint">@null</item>
+        <item name="android:windowIsTranslucent">true</item>
+        <item name="android:windowAnimationStyle">@null</item>
+        <item name="android:windowSoftInputMode">adjustResize</item>
+ </style>
</resource>
```
