---
sidebar_position: 1
---

# 示例

一个完整的示例，展示了如何使用 React Native ScreenGuard v2.0.0。

## 基本设置

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

  // 截屏检测 Hook
  const { screenshotData, activationStatus } = useSGScreenShot((event) => {
    Alert.alert('检测到截屏！', `文件: ${event.name || '未知'}`);
  });

  // 录屏检测 Hook (iOS 13+, Android 15+)
  const { recordingData } = useSGScreenRecord((event) => {
    if (event.isRecording) {
      Alert.alert('警告', '录屏已开始！');
    }
  });

  // 组件挂载时初始化 ScreenGuard
  useEffect(() => {
    const init = async () => {
      try {
        await ScreenGuardModule.initSettings({
          displayScreenGuardOverlay: true,
          timeAfterResume: 2000,
          getScreenshotPath: true,
        });
        console.log('ScreenGuard 初始化成功');
      } catch (error) {
        console.error('ScreenGuard 初始化失败:', error);
      }
    };

    init();

    // 卸载时清理
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
      console.error('激活失败:', error);
    }
  };

  const activateWithBlur = async () => {
    try {
      await ScreenGuardModule.registerWithBlurView({
        radius: 30,
      });
      setIsProtected(true);
    } catch (error) {
      console.error('激活模糊失败:', error);
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
      console.error('激活图像失败:', error);
    }
  };

  const deactivate = async () => {
    try {
      await ScreenGuardModule.unregister();
      setIsProtected(false);
    } catch (error) {
      console.error('停用失败:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ScreenGuard 演示</Text>

      {/* 状态显示 */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          保护状态: {activationStatus?.isActivated ? '🛡️ 已激活' : '⚪ 未激活'}
        </Text>
        <Text style={styles.statusText}>
          方式: {activationStatus?.method || '无'}
        </Text>
        <Text style={styles.statusText}>
          正在录屏: {recordingData?.isRecording ? '🔴 是' : '⚪ 否'}
        </Text>
        {screenshotData?.name && (
          <Text style={styles.statusText}>
            最后一次截屏: {screenshotData.name}
          </Text>
        )}
      </View>

      {/* 操作按钮 */}
      <View style={styles.buttonContainer}>
        <Button
          title="使用颜色激活"
          onPress={activateWithColor}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="使用模糊激活"
          onPress={activateWithBlur}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="使用图像激活"
          onPress={activateWithImage}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="停用"
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

## 关键点

1. **始终先调用 `initSettings()`** - 这将根据您的配置初始化原生模块。

2. **使用 Hook 进行事件检测** - `useSGScreenShot` 和 `useSGScreenRecord` 会自动处理订阅和清理工作。

3. **一次只使用一种注册方法** - 不要同时调用多个 `register*` 函数。如果您想切换方式，请先调用 `unregister()`。

4. **在清理时调用 `unregister()`** - 当您的组件卸载或您想要禁用保护时。

## 演示

{/* TODO: 在此添加演示视频 */}
