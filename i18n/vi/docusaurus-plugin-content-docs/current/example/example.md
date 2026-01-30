---
sidebar_position: 1
---

# Ví dụ

Một ví dụ hoàn chỉnh trình bày cách sử dụng React Native ScreenGuard v2.0.0.

## Cài đặt cơ bản

```jsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import ScreenGuardModule, {
  useSGScreenShot,
  useSGScreenRecord,
} from 'react-native-screenguard';

export default function App() {
  const [isProtected, setIsProtected] = useState(false);

  // Hook phát hiện chụp màn hình
  const { screenshotData, activationStatus } = useSGScreenShot((event) => {
    Alert.alert('Đã phát hiện chụp màn hình!', `Tệp: ${event.name || 'không rõ'}`);
  });

  // Hook phát hiện quay màn hình (iOS 13+, Android 15+)
  const { recordingData } = useSGScreenRecord((event) => {
    if (event.isRecording) {
      Alert.alert('Cảnh báo', 'Đã bắt đầu quay màn hình!');
    }
  });

  // Khởi tạo ScreenGuard khi mount
  useEffect(() => {
    const init = async () => {
      try {
        await ScreenGuardModule.initSettings({
          displayScreenGuardOverlay: true,
          timeAfterResume: 2000,
          getScreenshotPath: true,
        });
        console.log('Khởi tạo ScreenGuard thành công');
      } catch (error) {
        console.error('Khởi tạo ScreenGuard thất bại:', error);
      }
    };

    init();

    // Dọn dẹp khi unmount
    return () => {
      ScreenGuardModule.unregister();
    };
  }, []);

  const activateWithColor = async () => {
    try {
      await ScreenGuardModule.register({
        backgroundColor: '#1a1a2e',
      });
      setIsProtected(true);
    } catch (error) {
      console.error('Kích hoạt thất bại:', error);
    }
  };

  const activateWithBlur = async () => {
    try {
      await ScreenGuardModule.registerWithBlurView({
        radius: 30,
      });
      setIsProtected(true);
    } catch (error) {
      console.error('Kích hoạt làm mờ thất bại:', error);
    }
  };

  const activateWithImage = async () => {
    try {
      await ScreenGuardModule.registerWithImage({
        source: require('./assets/logo.png'),
        width: 200,
        height: 200,
        backgroundColor: '#0f0f23',
        alignment: 4, // center
      });
      setIsProtected(true);
    } catch (error) {
      console.error('Kích hoạt với hình ảnh thất bại:', error);
    }
  };

  const deactivate = async () => {
    try {
      await ScreenGuardModule.unregister();
      setIsProtected(false);
    } catch (error) {
      console.error('Hủy kích hoạt thất bại:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ScreenGuard Demo</Text>

      {/* Hiển thị trạng thái */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Bảo vệ: {activationStatus?.isActivated ? '🛡️ Đang bật' : '⚪ Đang tắt'}
        </Text>
        <Text style={styles.statusText}>
          Phương thức: {activationStatus?.method || 'Không có'}
        </Text>
        <Text style={styles.statusText}>
          Đang quay: {recordingData?.isRecording ? '🔴 Có' : '⚪ Không'}
        </Text>
        {screenshotData?.name && (
          <Text style={styles.statusText}>
            Ảnh chụp gần nhất: {screenshotData.name}
          </Text>
        )}
      </View>

      {/* Các nút hành động */}
      <View style={styles.buttonContainer}>
        <Button
          title="Kích hoạt với Màu sắc"
          onPress={activateWithColor}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="Kích hoạt với Làm mờ"
          onPress={activateWithBlur}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="Kích hoạt với Hình ảnh"
          onPress={activateWithImage}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="Hủy kích hoạt"
          onPress={deactivate}
          disabled={!isProtected}
          color="#ff4444"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  statusContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  statusText: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    gap: 10,
  },
  spacer: {
    height: 10,
  },
});
```

## Các điểm chính

1. **Luôn gọi `initSettings()` trước tiên** - Việc này giúp khởi tạo module native với cấu hình mong muốn của bạn.

2. **Sử dụng hooks để phát hiện sự kiện** - `useSGScreenShot` và `useSGScreenRecord` tự động xử lý việc đăng ký và dọn dẹp.

3. **Chỉ sử dụng một phương thức đăng ký tại một thời điểm** - Đừng gọi đồng thời nhiều hàm `register*`. Hãy gọi `unregister()` trước nếu bạn muốn chuyển đổi phương thức.

4. **Gọi `unregister()` khi dọn dẹp** - Khi component của bạn unmount hoặc bạn muốn tắt tính năng bảo vệ.

## Demo

{/* TODO: Thêm video demo tại đây */}
