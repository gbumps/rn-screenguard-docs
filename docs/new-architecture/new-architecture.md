---
sidebar_position: 1
---

# New Architecture 

The library has been updated with New Architecture, supported at beta testing release version `1.0.8-beta7` and final version `1.0.8`.

# Install 

```
npm i react-native-screenguard@1.0.8
```

or 

```
yarn add react-native-screenguard@1.0.8

```

- package.json

```
"react-native-screenguard": "1.0.8",
	
```

# Builds

### 1.0.8 (2025-05-22)

  - Final release.

### 1.0.8-beta7 (2025-05-21)

  - Android: Remove checking activity declaration inside AndroidManifest.xml as not necessary
  - Added missing iOS remove screenshot + screen record for old arch

### 1.0.8-beta6 (2025-05-11)
      
   - Android: Added checking activity declaration inside AndroidManifest.xml, throw error if not defined.
   - fix #92

### 1.0.8-beta5 (2025-04-22)

   - Refactor API to Promise.
   - Fix build failed due to duplicate import
   - `registerScreenRecordingStatus`: added `screenRecordStatus` boolean. for checking if screen is start recording or stop recording.
   - Fix `deactivateShield` crashed app

### 1.0.8-beta4 (2025-04-11)

   - `registerScreenshotEventListener`:  Fix iOS + android duplicate calls #87.
      
### 1.0.8-beta3 (2025-04-06)

   - Code refactor 
 
### 1.0.8-beta2 (2025-04-05)

   - Code refactor
     
### 1.0.8-beta1 (2025-04-03)

   - Init build

For updates and bug fixing, please visit [here](https://github.com/gbumps/react-native-screenguard/pull/85) for more infos.

[Reference](https://reactnative.dev/docs/the-new-architecture/landing-page)
