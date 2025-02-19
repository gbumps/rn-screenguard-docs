---
id: faq
title: FAQ
sidebar_label: FAQ
---

# Frequently Asked Questions

## Doesn't work on video player on iOS

**Question**: Doesn't work with iOS full screen player.

**Answer**:  [GitHub guide on adding a new SSH key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

## How to test on simulator

**Question**: How to test on simulator ?

**Answer**: Please access [Here](/docs/testing/testing.md) for more info

## 3. Issue: Tests are Failing

**Question**: My tests are failing even though I haven't made any changes.

**Answer**: There could be several reasons for this:
1. Ensure you have pulled the latest changes from the main branch.
2. Check if there are any new dependencies or updates required by running `npm install` or `yarn install`.
3. Make sure your local environment matches the setup described in the repository's documentation.

## 4. Issue: Build Fails

**Question**: The build process fails with an error.

**Answer**: Common causes for build failures include:
1. Missing environment variables: Ensure all required environment variables are set correctly.
2. Dependency issues: Run `npm install` or `yarn install` to ensure all dependencies are up-to-date.
3. Configuration issues: Double-check the build configuration files like `webpack.config.js` or any other build-related settings.

## 5. Issue: Linting Errors

**Question**: How do I fix linting errors in my code?

**Answer**: To fix linting errors, run the linter tool provided in the repository. For example, if the repository uses ESLint, you can run:

```sh
npm run lint --fix
```

or

```sh
yarn lint --fix
```

This will automatically fix many common linting errors. If any errors remain, refer to the error messages for specific guidance on how to resolve them.

## 6. Issue: Contribution Guidelines
Question: How can I contribute to this repository?

Answer: We welcome contributions! Please refer to the CONTRIBUTING.md file in the root of the repository for detailed guidelines on how to contribute. It includes information on setting up your development environment, coding standards, and the process for submitting pull requests.

## 7. Issue: Contacting Maintainers
Question: How can I contact the maintainers of this repository?

Answer: If you need to reach out to the maintainers, you can open an issue on GitHub and tag the maintainers. Alternatively, check if the repository has a dedicated communication channel like Slack, Discord, or a mailing list.

## 8. Issue: License Information
Question: What is the license for this repository?

Answer: This repository is licensed under the MIT License. You can find more details in the LICENSE file in the root of the repository.




