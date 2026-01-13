---
sidebar_position: 1
---

# Contributing

Contributions are always welcome, no matter how large or small!

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project. Before contributing, please read the [code of conduct](https://github.com/gbumps/react-native-screenguard/blob/master/CODE_OF_CONDUCT.md).

## Development Workflow

### 1. Setup

To get started with the project, run `yarn` in the root directory to install the required dependencies for both the library and the example app:

```sh
yarn
```

### 2. Running the Example App

While developing, you can run the [example app](https://github.com/gbumps/react-native-screenguard/tree/master/example) to test your changes.

**Start the Metro Bundler:**
```sh
yarn example start
```

**Run on Android:**
```sh
yarn example android
```

**Run on iOS:**
```sh
yarn example ios
```

:::note
Any changes to JavaScript files in `src/` are automatically reflected in the example app. Changes to Native Code (Java, Kotlin, ObjC, Swift) require rebuilding the example app.
:::

### 3. Testing & Linting

Before submitting a PR, ensure your code passes all tests and linting checks.

**Run Unit Tests:**
```sh
yarn test
```

**Run Type Check:**
```sh
yarn typecheck
```

**Run Linter:**
```sh
yarn lint
```

**Fix Linter errors:**
```sh
yarn lint --fix
```

---

## Release & Deployment

We use [react-native-builder-bob](https://github.com/callstack/react-native-builder-bob) to build the package.

### 1. Build the package

To check if the package builds correctly:

```sh
yarn build
```

or 

```sh
yarn prepare
```

### 2. Verify files

Check the `lib/` folder to make sure CommonJS, Module, and TypeScript definitions are generated correctly.

### 3. Publish (Maintainers only)

To publish a new version to npm:

1. Update the version in `package.json`.
2. Run `npm publish` (the `prepublishOnly` hook will automatically run `bob build`).

```sh
npm publish
```

---

## Commit Message Convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

| Type | Description |
|------|-------------|
| `fix` | Bug fixes, e.g. fix crash due to deprecated method |
| `feat` | New features, e.g. add new method to the module |
| `refactor` | Code refactor, e.g. migrate from class components to hooks |
| `docs` | Changes into documentation, e.g. add usage example for the module |
| `test` | Adding or updating tests, e.g. add integration tests |
| `chore` | Tooling changes, e.g. change CI config |
