import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/IHC_2025.2_Grupo02/__docusaurus/debug',
    component: ComponentCreator('/IHC_2025.2_Grupo02/__docusaurus/debug', '00c'),
    exact: true
  },
  {
    path: '/IHC_2025.2_Grupo02/__docusaurus/debug/config',
    component: ComponentCreator('/IHC_2025.2_Grupo02/__docusaurus/debug/config', '75e'),
    exact: true
  },
  {
    path: '/IHC_2025.2_Grupo02/__docusaurus/debug/content',
    component: ComponentCreator('/IHC_2025.2_Grupo02/__docusaurus/debug/content', '7ba'),
    exact: true
  },
  {
    path: '/IHC_2025.2_Grupo02/__docusaurus/debug/globalData',
    component: ComponentCreator('/IHC_2025.2_Grupo02/__docusaurus/debug/globalData', '9d9'),
    exact: true
  },
  {
    path: '/IHC_2025.2_Grupo02/__docusaurus/debug/metadata',
    component: ComponentCreator('/IHC_2025.2_Grupo02/__docusaurus/debug/metadata', '59c'),
    exact: true
  },
  {
    path: '/IHC_2025.2_Grupo02/__docusaurus/debug/registry',
    component: ComponentCreator('/IHC_2025.2_Grupo02/__docusaurus/debug/registry', 'c11'),
    exact: true
  },
  {
    path: '/IHC_2025.2_Grupo02/__docusaurus/debug/routes',
    component: ComponentCreator('/IHC_2025.2_Grupo02/__docusaurus/debug/routes', 'ceb'),
    exact: true
  },
  {
    path: '/IHC_2025.2_Grupo02/markdown-page',
    component: ComponentCreator('/IHC_2025.2_Grupo02/markdown-page', 'cba'),
    exact: true
  },
  {
    path: '/IHC_2025.2_Grupo02/docs',
    component: ComponentCreator('/IHC_2025.2_Grupo02/docs', '30a'),
    routes: [
      {
        path: '/IHC_2025.2_Grupo02/docs',
        component: ComponentCreator('/IHC_2025.2_Grupo02/docs', 'fe6'),
        routes: [
          {
            path: '/IHC_2025.2_Grupo02/docs',
            component: ComponentCreator('/IHC_2025.2_Grupo02/docs', '9dc'),
            routes: [
              {
                path: '/IHC_2025.2_Grupo02/docs/category/entregas-do-guia',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/category/entregas-do-guia', 'a8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/Entregas/checklistUK',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/Entregas/checklistUK', 'b49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/Entregas/sumarioUK',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/Entregas/sumarioUK', '44d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/intro',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/intro', '58f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/IHC_2025.2_Grupo02/',
    component: ComponentCreator('/IHC_2025.2_Grupo02/', 'd09'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
