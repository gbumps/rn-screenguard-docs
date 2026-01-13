---
sidebar_position: 1
---

# Example

A complete example demonstrating how to use React Native ScreenGuard v2.0.0.

## Basic Setup

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

  // Screenshot detection hook
  const { screenshotData, protectionStatus } = useSGScreenShot((event) => {
    Alert.alert('Screenshot Detected!', `File: ${event.name || 'unknown'}`);
  });

  // Screen recording detection hook (iOS 13+, Android 15+)
  const { recordingData } = useSGScreenRecord((event) => {
    if (event.isRecording) {
      Alert.alert('Warning', 'Screen recording has started!');
    }
  });

  // Initialize ScreenGuard on mount
  useEffect(() => {
    const init = async () => {
      try {
        await ScreenGuardModule.initSettings({
          enableCapture: true,
          enableRecord: true,
          displayScreenGuardOverlay: true,
          timeAfterResume: 2000,
          getScreenshotPath: true,
        });
        console.log('ScreenGuard initialized successfully');
      } catch (error) {
        console.error('Failed to initialize ScreenGuard:', error);
      }
    };

    init();

    // Cleanup on unmount
    return () => {
      ScreenGuardModule.unregister();
    };
  }, []);

  // Activate protection with color
  const activateWithColor = async () => {
    try {
      await ScreenGuardModule.register({
        backgroundColor: '#1a1a2e',
      });
      setIsProtected(true);
    } catch (error) {
      console.error('Failed to activate:', error);
    }
  };

  // Activate protection with blur
  const activateWithBlur = async () => {
    try {
      await ScreenGuardModule.registerWithBlurView({
        radius: 30,
      });
      setIsProtected(true);
    } catch (error) {
      console.error('Failed to activate blur:', error);
    }
  };

  // Activate protection with image
  const activateWithImage = async () => {
    try {
      await ScreenGuardModule.registerWithImage({
        source: require('./assets/logo.png'), // Your local image
        width: 200,
        height: 200,
        backgroundColor: '#0f0f23',
        alignment: 4, // center
      });
      setIsProtected(true);
    } catch (error) {
      console.error('Failed to activate with image:', error);
    }
  };

  // Deactivate protection
  const deactivate = async () => {
    try {
      await ScreenGuardModule.unregister();
      setIsProtected(false);
    } catch (error) {
      console.error('Failed to deactivate:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ScreenGuard Demo</Text>

      {/* Status Display */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Protection: {protectionStatus?.isProtected ? '🛡️ Active' : '⚪ Inactive'}
        </Text>
        <Text style={styles.statusText}>
          Method: {protectionStatus?.method || 'None'}
        </Text>
        <Text style={styles.statusText}>
          Recording: {recordingData?.isRecording ? '🔴 Yes' : '⚪ No'}
        </Text>
        {screenshotData?.name && (
          <Text style={styles.statusText}>
            Last screenshot: {screenshotData.name}
          </Text>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          title="Activate with Color"
          onPress={activateWithColor}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="Activate with Blur"
          onPress={activateWithBlur}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="Activate with Image"
          onPress={activateWithImage}
          disabled={isProtected}
        />
        <View style={styles.spacer} />

        <Button
          title="Deactivate"
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

## Key Points

1. **Always call `initSettings()` first** - This initializes the native module with your desired configuration.

2. **Use hooks for event detection** - `useSGScreenShot` and `useSGScreenRecord` automatically handle subscription and cleanup.

3. **Only one register method at a time** - Don't call multiple `register*` functions simultaneously. Call `unregister()` first if you want to switch methods.

4. **Call `unregister()` on cleanup** - When your component unmounts or you want to disable protection.

## Demo

{/* TODO: Add demo video here */}
