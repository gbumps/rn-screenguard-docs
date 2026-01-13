import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/get-started',
        'getting-started/install',
        'getting-started/linking',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Usage and APIs',
      items: [
        {
          type: 'doc',
          id: 'usages-and-apis/init-settings',
          label: 'initSettings',
          className: 'sidebar-new-badge',
        },
        'usages-and-apis/register',
        'usages-and-apis/register-with-blurview',
        'usages-and-apis/register-with-image',
        'usages-and-apis/register-without-effect-android',
        'usages-and-apis/unregister',
        {
          type: 'doc',
          id: 'usages-and-apis/get-screen-guard-logs',
          label: 'getScreenGuardLogs',
          className: 'sidebar-new-badge',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Hooks',
      className: 'sidebar-new-badge',
      items: [
        {
          type: 'doc',
          id: 'usages-and-apis/use-sg-screenshot',
          label: 'useSGScreenShot',
        },
        {
          type: 'doc',
          id: 'usages-and-apis/use-sg-screen-record',
          label: 'useSGScreenRecord',
        },
      ],
      collapsed: false,
    },
    {
      type: 'doc',
      id: 'example/example',
      label: 'Example',
    },
    {
      type: 'doc',
      id: 'testing/testing',
      label: 'Testing',
    },
    {
      type: 'doc',
      id: 'limitation/limitation',
      label: 'Limitation',
    },
    {
      type: 'doc',
      id: 'new-architecture/new-architecture',
      label: 'New Architecture',
    },
    {
      type: 'category',
      label: 'Deprecated (v1.x)',
      items: [
        'usages-and-apis/register-screenshot-event-listener',
        'usages-and-apis/register-screen-recording-event-listener',
        'usages-and-apis/remove-screenshot-event-listener',
        'usages-and-apis/remove-screen-record-event-listener',
      ],
      collapsed: true,
    },
    {
      type: 'doc',
      id: 'contributing/contributing',
      label: 'Contributing',
    },
    {
      type: 'link',
      label: 'Releases',
      href: 'https://github.com/gbumps/react-native-screenguard/releases',
    },
  ],
};

export default sidebars;
