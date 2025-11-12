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
    component: ComponentCreator('/IHC_2025.2_Grupo02/docs', 'e5a'),
    routes: [
      {
        path: '/IHC_2025.2_Grupo02/docs',
        component: ComponentCreator('/IHC_2025.2_Grupo02/docs', 'e00'),
        routes: [
          {
            path: '/IHC_2025.2_Grupo02/docs',
            component: ComponentCreator('/IHC_2025.2_Grupo02/docs', '9c7'),
            routes: [
              {
                path: '/IHC_2025.2_Grupo02/docs/desenvolvimentoWeb',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/desenvolvimentoWeb', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/Design',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/Design', '79b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/FerramentasAcessibilidade',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/FerramentasAcessibilidade', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/geracaoDeConteudo',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/geracaoDeConteudo', 'c9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/gestaoDeProjetos',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/gestaoDeProjetos', 'f3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/heuristicasNeilsen',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/heuristicasNeilsen', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IHC_2025.2_Grupo02/docs/overview',
                component: ComponentCreator('/IHC_2025.2_Grupo02/docs/overview', '006'),
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
