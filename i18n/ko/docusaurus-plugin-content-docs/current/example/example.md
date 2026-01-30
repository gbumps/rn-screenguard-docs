---
sidebar_position: 1
---

# 예제

React Native ScreenGuard v2.0.0 사용 방법을 보여주는 전체 예제입니다.

## 기본 설정

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

  // 스크린샷 감지 훅
  const { screenshotData, activationStatus } = useSGScreenShot((event) => {
    Alert.alert('스크린샷 감지!', `파일: ${event.name || '알 수 없음'}`);
  });

  // 화면 녹화 감지 훅 (iOS 13+, Android 15+)
  const { recordingData } = useSGScreenRecord((event) => {
    if (event.isRecording) {
      Alert.alert('경고', '화면 녹화가 시작되었습니다!');
    }
  });

  // 컴포넌트 마운트 시 ScreenGuard 초기화
  useEffect(() => {
    const init = async () => {
      try {
        await ScreenGuardModule.initSettings({
          displayScreenGuardOverlay: true,
          timeAfterResume: 2000,
          getScreenshotPath: true,
        });
        console.log('ScreenGuard 초기화 성공');
      } catch (error) {
        console.error('ScreenGuard 초기화 실패:', error);
      }
    };

    init();

    // 컴포넌트 언마운트 시 정리
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
      console.error('활성화 실패:', error);
    }
  };

  const activateWithBlur = async () => {
    try {
      await ScreenGuardModule.registerWithBlurView({
        radius: 30,
      });
      setIsProtected(true);
    } catch (error) {
      console.error('블러 활성화 실패:', error);
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
      console.error('이미지 활성화 실패:', error);
    }
  };

  const deactivate = async () => {
    try {
      await ScreenGuardModule.unregister();
      setIsProtected(false);
    } catch (error) {
      console.error('비활성화 실패:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ScreenGuard 데모</Text>

      {/* 상태 표시 */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          보호 상태: {activationStatus?.isActivated ? '🛡️ 활성' : '⚪ 비활성'}
        </Text>
        <Text style={styles.statusText}>
          방법: {activationStatus?.method || '없음'}
        </Text>
        <Text style={styles.statusText}>
          녹화 중: {recordingData?.isRecording ? '🔴 예' : '⚪ 아니요'}
        </Text>
        {screenshotData?.name && (
          <Text style={styles.statusText}>
            마지막 스크린샷: {screenshotData.name}
          </Text>
        )}
      </View>

      {/* 작업 버튼 */}
      <View style={styles.buttonContainer}>
        <Button
          title="색상으로 활성화"
          onPress={activateWithColor}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="블러로 활성화"
          onPress={activateWithBlur}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="이미지로 활성화"
          onPress={activateWithImage}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="비활성화"
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

## 주요 사항

1. **항상 `initSettings()`를 먼저 호출하세요** - 원하는 설정으로 네이티브 모듈을 초기화합니다.

2. **이벤트 감지에 훅(hooks) 사용** - `useSGScreenShot` 및 `useSGScreenRecord`는 구독 및 정리를 자동으로 처리합니다.

3. **한 번에 하나의 등록 방법만 사용** - 여러 `register*` 함수를 동시에 호출하지 마세요. 방법을 바꾸려면 먼저 `unregister()`를 호출하세요.

4. **정리 시 `unregister()` 호출** - 컴포넌트가 언마운트되거나 보호 기능을 비활성화하고 싶을 때 호출합니다.

## 데모

{/* TODO: 여기에 데모 비디오 추가 예정 */}
