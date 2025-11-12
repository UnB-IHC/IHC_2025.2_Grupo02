# VerificaAAA

<div align="center">
<img src="docs/imagens/logo-verificaaa.png" alt="Logo de prancheta com checklist" style="width: 100px">
</div>


## Introdução

Este repositório tem como propósito fornecer um checklist prático de acessibilidade para projetos, principalmente de desenvolvimento de software, que incluem: desenvolvimento web, design, geração de conteúdo e gestão de projetos. 

## VerificaAAA

O VerificaAAA é nome do projeto criado a partir do curso de Interação Humano Computador, ministrado pela docente Rejane Maria da Costa Figueiredo, na Universidade de Brasília (UnB). 

## Contribuidores

## 1. Estrutura de Arquivos do Projeto

```
.
├── manifest.json     # Configuração principal da extensão (MV3)
├── popup.html        # A interface do usuário (UI) da extensão
├── popup.js          # Lógica da UI e a função de auditoria injetável
└── icon.png          # Ícone exibido na barra de ferramentas do Chrome
```

## 2. Como rodar e testar?

1. Clone ou faça o download deste repositório e descompacte-o em uma pasta local.
2. Abra o Google Chrome e navegue até a página de extensões: chrome://extensions/
3. No canto superior direito da página, ative o "Modo de desenvolvedor".
4. Clique em "Carregar sem compactação" (Load unpacked).
5. Na janela que se abre, selecione a pasta completa com os arquivos do projeto.
6. Acesse qualquer website e clique no ícone da extensão para testar.
7. Resultado esperado:

![Imagem testando o plugin de acessibilidade. Nesta imagem temos um website institucional da Universidade de Brasilia e no canto superior direito a indicação de que foram encontradas 3 inconsistências em imagens sem o ALT](/plugin/img_teste.png)

# Recursos

- Google Chrome (Manifest V3): [Visão Geral das Extensões do Chrome](https://developer.chrome.com/docs/extensions/develop/migrate)
- Mozilla (Firefox): [Anatomia de uma WebExtension (MDN)](https://developer.mozilla.org/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- Microsoft Edge: [Documentação de Extensões do Edge](https://learn.microsoft.com/pt-br/microsoft-edge/extensions/)
- WCAG 2.1 (Referência): [Diretrizes de Acessibilidade para Conteúdo Web (W3C)](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1)
