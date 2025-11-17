---
id: user-flow-journey
title: "Guia Completo: User Flow vs. User Journey"
sidebar_label: Fluxo vs. Jornada
sidebar_position: 4
---

# User Flow vs. User Journey

Embora pareçam similares, estas duas ferramentas servem para propósitos muito diferentes no desenvolvimento de software. Entender a distinção evita retrabalho e melhora a comunicação entre designers e desenvolvedores.

:::info Resumo Rápido
* **User Journey (Jornada):** Foca no **sentimento** e no contexto macro do usuário (Antes, Durante e Depois).
* **User Flow (Fluxo):** Foca nos **passos técnicos** e na navegação entre telas dentro do sistema.
:::

---

## 1. User Journey Map (Mapa da Jornada)
É uma visualização da história do usuário com o produto ao longo do tempo. Ela captura a experiência holística, incluindo o que acontece fora da tela.

### Anatomia de uma Jornada
Um bom mapa de jornada deve conter 5 faixas horizontais:
1.  **Fases:** As etapas cronológicas (Ex: Descoberta, Consideração, Uso, Retenção).
2.  **Ações:** O que o usuário faz efetivamente (Ex: "Pesquisa no Google", "Clica no anúncio").
3.  **Pensamentos:** O que ele está pensando? (Ex: "Será que esse site é confiável?").
4.  **Sentimentos (Curva Emocional):** O nível de satisfação em cada etapa (Ansioso 📉 → Aliviado 📈).
5.  **Oportunidades:** Ideias do time para melhorar aquela etapa específica.

* **Exemplo:** "Ana percebe que precisa de um sapato" (Necessidade) → "Pesquisa preços" (Consideração) → "Compra" (Ação) → "Recebe antes do prazo" (Satisfação).

---

## 2. User Flow (Fluxo do Usuário)
É um diagrama que mostra o caminho passo-a-passo que o usuário percorre dentro da interface para completar uma tarefa.

### Simbologia Padrão
Para que os desenvolvedores entendam o fluxo, usamos formas geométricas universais:

| Símbolo | Significado | Exemplo |
| :---: | :--- | :--- |
| ⬜ **Retângulo** | **Tela / Página** | Tela de Login, Home, Dashboard. |
| 🔷 **Losango** | **Decisão / Condição** | "O login é válido?" (Sim/Não), "Tem saldo?". |
| ⚪ **Círculo** | **Início / Fim** | Entrada no fluxo ou conclusão da tarefa. |
| ➡️ **Seta** | **Direção** | Mostra para onde o usuário vai a seguir. |

* **Exemplo:** `Tela Inicial` → `Clicou Login` → `[É cadastrado?]` → (Sim) `Tela Dashboard` / (Não) `Tela de Cadastro`.

---

## 3. Comparativo Lado a Lado

| Característica | User Journey Map | User Flow |
| :--- | :--- | :--- |
| **Objetivo** | Entender o "Porquê" e o "Como se sente". | Entender o "Onde clica" e o comportamento do sistema. |
| **Conteúdo** | Sentimentos, pensamentos, contexto externo. | Telas, botões, validações, erros. |
| **Nível de Detalhe** | Baixo (Abstrato/Conceitual). | Alto (Técnico/Lógico). |
| **Quem usa?** | Product Managers, UX Researchers. | UI Designers, Desenvolvedores Front/Back. |

---

## 4. Quando usar qual?

:::tip Dica de Processo
Comece sempre pela **Jornada** para entender o problema. Só depois desenhe o **Fluxo** para projetar a solução.
:::

1.  **Fase de Descoberta (Jornada):** Quando você ainda está entrevistando usuários e definindo Personas. Ajuda a descobrir *onde* o produto pode atuar.
2.  **Fase de Definição (Fluxo):** Quando você já sabe o que vai construir e precisa alinhar com o time de desenvolvimento *como* vai funcionar (ex: regras de negócio).

---

## 5. Ferramentas Recomendadas
Para criar esses artefatos no projeto, sugerimos:

* **Miro / Mural:** Melhores para *User Journey* (colaborativo, estilo post-it).
* **Figma (FigJam):** Ótimo para ambos, integra com o design das telas.
* **Lucidchart / Draw.io:** Excelentes para *User Flows* técnicos e rigorosos.

---

## Referência Bibliográfica
> NIELSEN NORMAN GROUP. **User Journeys vs. User Flows**. Disponível em: [NNGroup](https://www.nngroup.com/articles/user-journeys-vs-user-flows/).
> KAPLAN, K. **When and How to Create Customer Journey Maps**. Nielsen Norman Group, 2016.
> BABICH, N. **Sitemaps & User Flows**. Adobe XD Ideas, 2019.