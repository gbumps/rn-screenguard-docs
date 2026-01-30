---
sidebar_position: 1
---

# 贡献指南

无论贡献大小，我们都非常欢迎！

我们希望这个社区对每个人都是友好且相互尊重的。请在与项目的所有互动中遵循这一点。在贡献之前，请先阅读[行为准则](https://github.com/gbumps/react-native-screenguard/blob/master/CODE_OF_CONDUCT.md)。

## 开发流程

### 1. 设置

要开始该项目，请在根目录运行 `yarn` 以安装库和示例应用所需的依赖项：

```sh
yarn
```

### 2. 运行示例应用

在开发过程中，您可以运行[示例应用](https://github.com/gbumps/react-native-screenguard/tree/master/example)来测试您的更改。

**启动 Metro Bundler：**
```sh
yarn example start
```

**在 Android 上运行：**
```sh
yarn example android
```

**在 iOS 上运行：**
```sh
yarn example ios
```

:::note 注意
对 `src/` 中 JavaScript 文件的任何更改都会自动反映在示例应用中。对原生代码（Java, Kotlin, ObjC, Swift）的更改需要重新构建示例应用。
:::

### 3. 测试与 Lint 检查

在提交 PR 之前，请确保您的代码通过了所有测试和 lint 检查。

**运行单元测试：**
```sh
yarn test
```

**运行类型检查：**
```sh
yarn typecheck
```

**运行 Linter：**
```sh
yarn lint
```

**修复 Linter 错误：**
```sh
yarn lint --fix
```

---

## 发布与部署

我们使用 [react-native-builder-bob](https://github.com/callstack/react-native-builder-bob) 来构建包。

### 1. 构建包

要检查包是否构建正确：

```sh
yarn build
```

或者 

```sh
yarn prepare
```

### 2. 验证文件

检查 `lib/` 文件夹，确保 CommonJS、Module 和 TypeScript 定义正确生成。

### 3. 发布（仅限维护者）

发布新版本到 npm：

1. 更新 `package.json` 中的版本。
2. 运行 `npm publish`（`prepublishOnly` 钩子将自动运行 `bob build`）。

```sh
npm publish
```

---

## 本网页文档贡献

如果您发现拼写错误、翻译错误或希望改进文档，请在文档仓库进行贡献：
[rn-screenguard-docs](https://github.com/gbumps/rn-screenguard-docs)

---

## Commit 消息规范

我们的 commit 消息遵循 [常规 commit 规范 (conventional commits specification)](https://www.conventionalcommits.org/en)：

| 类型 | 描述 |
|------|-------------|
| `fix` | 错误修复，例如：修复由于弃用方法导致的崩溃 |
| `feat` | 新功能，例如：向模块添加新方法 |
| `refactor` | 代码重构，例如：从类组件迁移到 Hook |
| `docs` | 文档更改，例如：添加模块的使用示例 |
| `test` | 添加或更新测试，例如：添加集成测试 |
| `chore` | 工具链更改，例如：更改 CI 配置 |
