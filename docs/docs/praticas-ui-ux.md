---
id: checklist-ui-ux
title: Guia Rápido de UI/UX
sidebar_label: Boas Práticas UI/UX
sidebar_position: 7
---

# Guia de Boas Práticas de Acessibilidade

Este resumo condensa os pontos principais do **Guia de Boas Práticas para Acessibilidade Digital (2023)** para aplicarmos no projeto **Pocket GG2**.

:::info Objetivo
O foco não é decorar regras, mas consultar este guia sempre que formos criar uma nova tela ou componente.
:::

## 1. Interface e Design Visual (UI)

###  Cores e Contraste
Não confie apenas na sua visão. Use ferramentas como o plugin ou o **WebAIM Contrast Checker**.
* **Texto Normal:** Precisa de contraste mínimo de **4.5:1** com o fundo.
* **Texto Grande (18pt+):** Contraste mínimo de **3:1**.
* **Componentes (Botões/Inputs):** Bordas e ícones precisam de **3:1**.

:::warning Erro Comum
Não use cor como única forma de aviso.
* ❌ **Errado:** Borda vermelha no input.
* ✅ **Certo:** Borda vermelha + Ícone de alerta + Texto "Campo obrigatório".
:::

### Tipografia
* Prefira fontes **sem serifa** (Sans-Serif) para leitura em telas.
* Evite textos justificados (eles criam "rios" em branco que dificultam a leitura para disléxicos).
* O tamanho da fonte deve ser legível (base de 16px recomendada).

---

## 2. Conteúdo e Estrutura (UX)

### Redação (UX Writing)
* **Linguagem Simples:** Escreva como se estivesse explicando para um amigo. Evite termos técnicos.
* **Links Descritivos:** O texto do link deve dizer para onde ele vai.
    * Evite: "Clique aqui".
    * Use: "Baixar o Guia de Acessibilidade".

### Imagens
* **Informativas:** Precisam de texto alternativo (`alt="..."`) descrevendo a cena.
* **Decorativas:** Devem ser ignoradas pelo leitor de tela (alt vazio ou `aria-hidden="true"`).

---

## 3. Interação (IHC)

### Navegação por Teclado
Todo o site deve funcionar sem mouse.
1.  **Tab:** Avança o foco.
2.  **Shift + Tab:** Volta o foco.
3.  **Enter/Espaço:** Ativa botões e links.
4.  **Foco Visível:** Nunca remova a borda de foco (`outline: none`) sem colocar outra no lugar. O usuário precisa saber onde está.

### Áreas de Toque
Para evitar erros no celular (dedos grandes ou tremores):
* Tamanho mínimo do alvo de toque: **44x44 pixels**.

---
## Referência Bibliográfica

DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital**. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [Governo Digital](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 09 mai. 2024.