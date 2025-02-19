import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "React Native Screenguard",
  tagline:
    "A Native library for blocking screenshot for React Native developer, with background screenshot customizable.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://gbumps.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/react-native-screenguard/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gbumps", // Usually your GitHub org/user name.
  projectName: "react-native-screenguard", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    {
      src: "https://www.statcounter.com/counter/counter.js",
      async: true,
    },
  ],
  customFields: {
    statCounterScript: `
      var sc_project=13006374; 
      var sc_invisible=1; 
      var sc_security="ed46be24"; 
    `,
  },
  headTags: [
    {
      tagName: "noscript",
      attributes: {},
      innerHTML: `
        <div class="statcounter">
          <a title="Web Analytics" href="https://statcounter.com/" target="_blank">
            <img class="statcounter" src="https://c.statcounter.com/13006374/0/ed46be24/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade">
          </a>
        </div>
      `,
    },
    {
      tagName: "meta",
      attributes: {
        name: "react, native, capture, protection, screen capture, screen recording, prevent, screenshot, capture protection, screenguard, ios, android,",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "A Native library for blocking screenshot for react-native developer, with background screenshot customizable.",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          sidebarCollapsible: false, // Disable the collapsible feature
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "React Native Screenguard",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/gbumps/react-native-screenguard/issues",
          label: "Issues",
          position: "left",
        },
        {
          href: "https://github.com/gbumps/react-native-screenguard",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Gbumps. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
