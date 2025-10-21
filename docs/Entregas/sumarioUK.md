---
sidebar_position: 1
---


# Sumário

Este guia foi produzido no âmbito do Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital (Digital Access Programme – DAP). Ele oferece subsídios teóricos, práticos, documentais e ferramentas para a implementação de estratégias de transformação digital acessível.

O conteúdo do Guia está organizado da seguinte forma:

* Introdução ao projeto (p. 4)
* Orientações de acessibilidade (p. 6)
* Introdução ao WCAG (p. 10)
* Boas práticas de acessibilidade (p. 12)
* Gestão de projetos (p. 13)
* Desenvolvimento (p. 21)
* Design (p. 37)
* Conteúdo (p. 46)
* Conclusão (p. 52)
* Anexos (p. 56)

### **Pontos Chave do Guia**

#### **A. Princípios Gerais e Contexto**

* **Cultura e Prioridade:** Tornar a acessibilidade uma cultura na organização e não apenas o cumprimento de recomendações.
* **Participação:** Contar com a participação direta de pessoas com deficiência nas equipes de projeto.
* **Legislação:** Cumprir a Lei Brasileira da Inclusão (LBI), cujo Artigo 63 obriga a acessibilidade nos sítios da Internet.
* **Benefícios:** Lembrar que a acessibilidade beneficia não apenas as PcD, mas todas as pessoas (ex: carregamento mais rápido, bom SEO, facilidade de interação).

#### **B. Gestão de Projetos (p. 13)**

* **Iniciação:** Pensar na acessibilidade no início do projeto, na fase de concepção, para evitar prejuízos futuros.
* **Desenho Universal:** Considerar o conceito de Desenho Universal, que visa a concepção de produtos e serviços para serem usados por todas as pessoas, sem necessidade de adaptação.
* **Planejamento:** Aprofundar o conhecimento sobre os tipos de deficiência e as formas como as pessoas navegam na Internet.
* **Execução:** Garantir que todas as áreas (Desenvolvimento, Design, Marketing, etc.) estejam em sintonia e comprometidas com o plano de acessibilidade.
* **Ferramentas:** Não confiar em ferramentas milagrosas ou plugins que prometem soluções de acessibilidade com um simples clique.

#### **C. Desenvolvimento (p. 21)**

* **Semântica:** Usar a semântica HTML adequada, utilizando elementos nativos para reforçar seu significado (o maior segredo).
* **Teclado:** Garantir que todas as funcionalidades de uma página estejam disponíveis por navegação por teclado.
* **Foco:** Assegurar que o foco visível (borda ou moldura) esteja presente ao navegar por teclado.
* **Imagens:** Toda imagem que transmite informação relevante deve ter um texto alternativo no atributo `alt`. Evitar textos renderizados como imagem.
* **Links/Botões:** Usar rótulos objetivos e explicativos, evitando textos genéricos como "Clique Aqui" ou "Saiba Mais".
* **Cabeçalhos:** Utilizar a hierarquia de cabeçalhos (H1, H2, H3, etc.) para estruturar o conteúdo de forma lógica, e não como formatação de tamanho de fontes.
* **Conteúdo em Movimento:** Para carrosséis e banners, permitir que o usuário possa pausar, parar ou ocultar o conteúdo.
* **Áreas de Clique:** Definir o tamanho mínimo da área de toque/clicável de 44px (pixels) de altura e 44px de largura (Google recomenda 48px x 48px).
* **Testes:** Realizar testes manuais (além dos automáticos), usando leitores de tela como o NVDA, para verificar barreiras não detectáveis por ferramentas.

#### **D. Design (p. 37)**

* **Responsividade:** Adotar o design responsivo para que a interface se ajuste às necessidades do usuário (tamanho da tela, orientação, aumento de fontes).
* **Cores e Contraste:** Nunca usar cores como o único meio para transmitir informação. Deve-se usar símbolos ou textos simultaneamente.
* **Contraste:** Garantir um contraste de cores adequado entre fundo e textos, aplicando-o também a informações em imagens e gráficos.
* **Textos Longos:** Evitar o alinhamento justificado em blocos de texto; o recomendado é o alinhamento à esquerda.
* **Fontes:** Usar fontes fluidas e de fácil entendimento (evitar rebuscadas ou manuscritas). O tamanho mínimo recomendado é de 18pt ou 14pt em negrito.
* **Ampliação:** Assegurar que o conteúdo não sofra perda ou sobreposição de informações ao ser ampliado com o zoom do navegador em até 200%.

#### **E. Conteúdo (p. 46)**

* **Terminologia:** Utilizar o termo "pessoa com deficiência" (PcD).
* **Clareza:** Construir textos descomplicados e objetivos, evitando ambiguidades, redundância e figuras de linguagem.
* **Estrutura de Frases:** Preferir a ordem direta nas orações e evitar frases muito longas (ideal: 15 a 20 palavras por frase).
* **Textos Alternativos:** Descrever as imagens relevantes, identificando o formato, elemento principal, ação e local, se pertinente (Ex: "Duas pessoas em uma sala de aula sorrindo").
* **Vídeos e Mídia:** Incluir legendas (preferencialmente Closed Caption), audiodescrição e prever uma janela de Libras (à direita do vídeo).
* **Áudios/Podcasts:** Incluir sempre uma transcrição em texto do conteúdo, que pode ser transformada em outros formatos, como Libras, por meio de um avatar.
* **Hashtags:** Utilizar a primeira letra de cada palavra em maiúsculas (CamelCase) em hashtags (Ex: #MentoriaDeAcessibilidade) para que leitores de tela leiam corretamente.