---
sidebar_position: 3
---

# Liên kết (Linking)

## React Native 0.60+

Từ React Native v0.60 trở lên, việc liên kết là **tự động** thông qua [Autolinking](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md). Không cần thực hiện liên kết thủ công.

### iOS

Sau khi cài đặt, hãy di chuyển đến thư mục `ios` và cài đặt các phụ thuộc CocoaPods:

```bash
cd ios && pod install
```

### Android

Không cần thực hiện thêm bước nào. Thư viện sẽ được tự động liên kết trong quá trình build.

---

## Không còn sử dụng (Deprecated)

:::warning Không còn được hỗ trợ
Các phần sau đây chỉ dành cho các phiên bản cũ. Nếu bạn đang sử dụng **React Native 0.60+** và **react-native-screenguard v1.0.8+**, bạn có thể bỏ qua toàn bộ phần này.
:::

<details>
<summary><strong>React Native 0.59 trở xuống (Liên kết thủ công)</strong></summary>

#### Liên kết thủ công iOS

1. Trong Xcode, nhấp chuột phải vào `Libraries` trong trình điều hướng dự án
2. Chọn **Add Files to [tên dự án của bạn]**
3. Di chuyển đến `node_modules/react-native-screenguard` và thêm `ScreenGuard.xcodeproj`
4. Chọn dự án của bạn trong trình điều hướng, đi tới **Build Phases** → **Link Binary With Libraries**
5. Thêm `libScreenguard.a`

#### Liên kết thủ công Android

1. Mở `android/app/src/main/java/[...]/MainActivity.java`:

```java
import com.screenguard.ScreenGuardPackage; // Thêm import này

// Thêm vào phương thức getPackages():
new ScreenGuardPackage()
```

2. Thêm vào `android/settings.gradle`:

```groovy
include ':react-native-screenguard'
project(':react-native-screenguard').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-screenguard/android')
```

3. Thêm vào dependencies của `android/app/build.gradle`:

```groovy
implementation project(':react-native-screenguard')
```

</details>

<details>
<summary><strong>Android Sau khi cài đặt (v1.0.6 trở xuống)</strong></summary>

:::info Không yêu cầu trong v1.0.8+
Bắt đầu từ **v1.0.8**, activity được tự động khai báo trong `AndroidManifest.xml` của thư viện và được merge trong quá trình build. Bước này chỉ bắt buộc đối với **v1.0.6 trở xuống**.
:::

Đối với phiên bản **v1.0.6 trở xuống**, bạn phải khai báo `ScreenGuardColorActivity` thủ công trong `AndroidManifest.xml` của mình để bật hiệu ứng màu nền và làm mờ.

#### Bước 1: Cập nhật AndroidManifest.xml

Mở `android/app/src/main/AndroidManifest.xml` và thêm activity:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application ...>
        <activity android:name=".MainActivity" ...>
            ...
        </activity>

        <!-- Thêm activity này -->
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

#### Bước 2: Thêm Translucent Theme

Mở `android/app/src/main/res/values/styles.xml` và thêm theme:

```xml
<resources>
    <style name="AppTheme">
        <!-- Theme hiện tại của bạn -->
    </style>

    <!-- Thêm theme này -->
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
