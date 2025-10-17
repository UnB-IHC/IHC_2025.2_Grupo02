# Design

"Existe uma lenda de que a acessibilidade torna um sítio web muito simples ou feio. Não é verdade: um sítio web bem estruturado pode ser bonito e criativo. É possível, inclusive, criar apresentações visuais diferentes para a mesma estrutura HTML de um sítio web com o uso de CSS e atender a diferentes necessidades". Dessa forma, nessa seção encontra-se checklist que garantam a acessibilidade no design.

## Aparência
- [ ] <b> Adicionar instrução</b> que não <b>dependa exclusivamente da cor</b>. <a id="TEC1" href="#RP1">[1]</a>
- [ ] <b> Adicionar informação</b> (como gráficos e diagramas) que não <b>dependa exclusivamente da cor</b>. <a id="TEC1" href="#RP1">[1]</a>
- [ ] <b> Tamanho do texto ajustável</b> para permitir ampliação. <a id="TEC2" href="#RP2">[2]</a>
- [ ] <b> Descrever os controles</b> pelo nome, não apenas pela aparência ou localização. <a id="TEC3"href="#RP3">[3]</a>
- [ ] <b> Garantir que dicas visuais</b> significativas atinjam 3:1 em relação ao fundo. <a id="TEC4" href="#RP4">[4]</a>
- [ ] <b> Fazer com que as linhas</b> de texto se ajustem ao viewport. <a id="TEC5"href="#RP5">[5]</a>
- [ ] Oferece uma <b> opção de alto contraste </b> (dark-mode) de suas páginas web e aumento de fontes.
- [ ] Parágrafos com no <b> máximo 80 caracteres por linha </b>.
- [ ] <b> Evita </b> o uso de <b> textos longos em caixa alta ou condensados </b>.
- [ ] Evita o alinhamento justificado.
- [ ] <b> Fontes são fluidas </b> e de fácil entendimento.
- [ ] Toma o devido cuidado com <b>``` display:none ``` e ``` visibility:hidden ``` para os recursos de tecnologia assistiva</b>
- [ ] Preferir <b> botões com texto e ícone </b>. E botões apenas com ícones tem o nome acessível.

## Animação
- [ ] <b> Evitar conteúdo que pisque</b>, ou mantenha-o abaixo dos limites. <a id="TEC6" href="#RP6">[6]</a>
- [ ] <b> Permitir que os usuários controlem as alterações de conteúdo</b> que ocorrem em paralelo com outro conteúdo. <a id="TEC7" href="#RP7">[7]</a>
- [ ] <b> Toda a animação</b> deve obedecer à ```prefers-reduced-motion``` consulta de mídia. <a id="TEC8" href="#RP8">[8]</a>

## Contraste de Cores
- [ ] <b> Verificar o contraste</b> de  todo texto tamanho normal. <a id="TEC9" href="#RP9">[9]</a>
- [ ] <b> Verificar o contraste</b> de todo texto tamanho grande. <a id="TEC9" href="#RP9">[9]</a>
- [ ] <b> Verificar o contraste</b> de todos os ícones. <a id="TEC4" href="#RP4">[4]</a>
- [ ] <b> Verificar o contraste</b> das bordas dos elementos de entrada (entrada de texto, botões de opção, caixas de seleção, etc.). <a id="#RP4" href="#RP4">[4]</a>
- [ ] <b> Verificar o texto</b> que se sobrepõe a imagens ou vídeos. <a id="TEC9" href="#RP9">[9]</a>
- [ ] <b> Verificar ```::selection``` cores</b> personalizadas. <a id="TEC9" href="#RP9">[9]</a>

## Referências Bibliograficas

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Mai. 2024.

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). Acesso em: 9 Mai. 2024.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html). Acesso em: 9 Mai. 2024.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Acesso em: 9 Mai. 2024.

> <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Acesso em: 9 Mai. 2024.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Acesso em: 9 Mai. 2024.

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Acesso em: 9 Mai. 2024.

## Bibliografia

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.