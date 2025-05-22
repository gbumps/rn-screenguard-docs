---
sidebar_position: 7
---

# `unregister`

Deactivate all the screenshot protection and callback handlers.

## Example code

```js
ScreenGuardModule.unregister();
```

## New architecture (v1.0.8+)

- Starting from `v1.0.8+`, except `registerScreenshotEventListener` and `registerScreenRecordingEventListener`, all APIs have been upgraded to Promise. So you must use it asynchronously in your project.

```js
ScreenGuardModule.unregister().then((_) => {console.log()})
```

or

```js
await ScreenGuardModule.unregister();
```

- `unregister` will not remove screenshot EventListener and screenRecord EventListener. You must do it your own by using [removeScreenshotEventListener](./remove-screenshot-event-listener.md) and [removeRecordingEventListener](./remove-screen-record-event-listener.md).


