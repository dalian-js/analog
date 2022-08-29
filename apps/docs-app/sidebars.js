/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    // { type: 'autogenerated', dirName: '.' },
    'introduction',
    'getting-started',
    {
      type: 'category',
      label: 'Packages',
      items: [
        {
          type: 'category',
          label: 'Vite Plugin for Angular',
          items: [
            {
              type: 'doc',
              id: 'packages/vite-plugin-angular/overview',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Astro Integration',
          items: [
            {
              type: 'doc',
              id: 'packages/astro-angular/overview',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Project Generation',
          items: [
            {
              type: 'doc',
              id: 'packages/create-analog/overview',
              label: 'Overview',
            },
          ],
        },
      ],
    },
    'contributors',
    'contributing',
    'sponsoring',
  ],

  // But you can create a sidebar manually
  /*
  docsSidebar: [
    {
      type: 'category',
      label: 'Docs',
      items: ['introduction'],
    },
  ],
   */
};

module.exports = sidebars;
