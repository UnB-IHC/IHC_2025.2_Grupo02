/**
 * Função de auditoria que será injetada e executada
 * no contexto da pagina web ativa.
 *
 * Esta função Nao tem acesso ao escopo do popup.js.
 */
function runAccessibilityAudit() {
  const results = {
    errors: [],
    totalCriteria: 6,
    passedCriteria: 6,
  };


  // =========================================== CRITERIOS PADRÕES DO TEMPLATE ====================================
  // ---
  // Criterio Padrao :  3.1.1: Idioma da pagina
  // https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html
  // ---
  const htmlLang = document.documentElement.lang;
  if (!htmlLang || htmlLang.trim() === '') {
    results.errors.push(
      "Criterio Padrao :  3.1.1 (Idioma da pagina): A tag <html> Nao possui um atributo 'lang' válido."
    );
    results.passedCriteria--;
  }

  // ---
  // Criterio Padrao :  1.1.1: Conteudo Nao Textual (Verificação básica de <img>)
  // https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
  // ---
  const images = document.querySelectorAll('img');
  let imgErrorFound = false;
  images.forEach((img, index) => {
    // Verifica se o atributo 'alt' está ausente.
    // Nota: alt="" (vazio) e válado para imagens decorativas.
    if (!img.hasAttribute('alt')) {
      const src =
        img.src.length > 50 ? img.src.substring(0, 50) + '...' : img.src;
      results.errors.push(
        `Criterio Padrao :  1.1.1 (Conteudo Nao Textual): A imagem (src: ${
          src || 'N/A'
        }) Nao possui o atributo 'alt'.`
      );
      imgErrorFound = true;
    }
  });
  if (imgErrorFound) {
    results.passedCriteria--;
  }


  // Criterio Padrao :  2.1.1: Teclado (Verificação básica de 'onclick' em Nao interativos)
  // https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html
  // Procura por elementos que têm eventos de clique mas Nao são
  // nativamente focáveis (como botões ou links) e nem foram
  // tornados focáveis (com tabindex >= 0).
  const nonInteractiveClickables = document.querySelectorAll(
    'div[onclick], span[onclick], p[onclick], img[onclick]'
  );

  let keyboardErrorFound = false;
  nonInteractiveClickables.forEach((el) => {
    const tabIndex = el.getAttribute('tabindex');
    const isFocusable = tabIndex !== null && parseInt(tabIndex, 10) >= 0;

    // Tambem verifica se tem role="button" ou similar, o que exigiria tabindex
    const role = el.getAttribute('role');
    const isButtonRole =
      role === 'button' || role === 'link' || role === 'menuitem';

    if (!isFocusable && isButtonRole) {
      results.errors.push(
        `Criterio Padrao : 2.1.1 (Teclado): O elemento <${el.tagName}> com role="${role}" e 'onclick' Nao e focavel (ausente tabindex="0").`
      );
      keyboardErrorFound = true;
    } else if (!isFocusable && !isButtonRole) {
      results.errors.push(
        `Criterio Padrao :  2.1.1 (Teclado): O elemento <${el.tagName}> possui 'onclick' mas Nao e nativamente interativo nem possui tabindex="0".`
      );
      keyboardErrorFound = true;
    }
  });

  if (keyboardErrorFound) {
    results.passedCriteria--;
  }

  // =========================================== CRITERIOS NOVOS CÓDIFICADOS GG2 ====================================

  // ISSUE #19 : Verificar Presença de Estrutura Semantica Básica (Expandido)
  // Criterio 1.3.1
  let semanticErrorFound = false;
  if (document.querySelector('header') === null) {
    results.errors.push(
      "Criterio 1.3.1 (Semantica): A pagina Nao possui uma tag <header>."
    );
    semanticErrorFound = true;
  }
  if (document.querySelector('nav') === null) {
    results.errors.push(
      "Criterio 1.3.1 (Semantica): A pagina Nao possui uma tag <nav> para navegação principal."
    );
    semanticErrorFound = true;
  }
  if (document.querySelector('main') === null) {
    results.errors.push(
      "Criterio 1.3.1 (Semantica): A pagina Nao possui uma tag <main> para definir o Conteudo principal."
    );
    semanticErrorFound = true;
  }
  if (document.querySelector('footer') === null) {
    results.errors.push(
      "Criterio 1.3.1 (Semantica): A pagina Nao possui uma tag <footer>."
    );
    semanticErrorFound = true;
  }
  if (semanticErrorFound) {
    results.passedCriteria--;
  }


  // ISSUE #20 : Verificar Hierarquia de Titulos
  // Criterio 1.3.1
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Todos os Titulos
  let headingErrorFound = false;

  if (headings.length > 0) {
    if (headings[0].tagName !== 'H1') { // Se Nao começar com H1 --> Errado
      results.errors.push(
        `Criterio 1.3.1 (Titulos): O primeiro titulo da pagina e <${headings[0].tagName}>, mas deveria ser <h1>.`
      );
      headingErrorFound = true;
    }

    // Erro se pular níveis (ex: H1 -> H3)
    let lastLevel = parseInt(headings[0].tagName.substring(1), 10); // Começa em H1

    for (let i = 1; i < headings.length; i++) {

      const currentLevel = parseInt(headings[i].tagName.substring(1), 10); // Começa em H2 --> headings[1]

      if (currentLevel > lastLevel + 1) {
        results.errors.push(
          `Criterio 1.3.1 (Titulos): Ha um pulo na hierarquia de <H${lastLevel}> para <${
            headings[i].tagName
          }> (texto: "${headings[i].innerText.substring(0, 20)}...").`
        );
        headingErrorFound = true;
      }
      lastLevel = currentLevel;
    }
  }
  if (headingErrorFound) {
    results.passedCriteria--;
  }

  // ISSUE #21 : Detectar Links Sem Atributo href
  // Criterio 2.4.4
  const allLinks = document.querySelectorAll('a');
  let linkHrefErrorFound = false;

  allLinks.forEach((link) => {
    const text = link.innerText.substring(0, 30);
    const linkText = `(texto: "${text || '[vazio]'}...")`;

    if (!link.hasAttribute('href')) {
      // Erro 1: 'href' ausente
      results.errors.push(
        `Criterio 2.4.4 (Links): O link ${linkText} e umaatag <a> mas Nao possui um atributo 'href'.`
      );
      linkHrefErrorFound = true;
    } else {
      // Erro 2: 'href' existe, porem Naa e navagável
      const href = link.getAttribute('href').trim();
      if (href === '' || href === '#' || href.startsWith('javascript:')) {
        results.errors.push(
          `Criterio 2.4.4 (Links): O link ${linkText} possui um atributo 'href' Nao-navegável (valor: "${href}").`
        );
        linkHrefErrorFound = true;
      }
    }
  });
  if (linkHrefErrorFound) {
    results.passedCriteria--;
  }

  // ISSUE #24 : Elementos Interativos Sem Foco Visível
  // Critério 2.4.7 (Foco Visível)
  const interactiveSelectors = `
    a[href],
    button,
    input,
    textarea,
    select,
    [role="button"],
    [role="link"],
    [tabindex]:not([tabindex="-1"])
  `;

  const interactiveElements = document.querySelectorAll(interactiveSelectors);
  let focusVisibleErrorFound = false;

  function hasFocusStyle(el) {
    const elementTag = el.tagName.toLowerCase();
    const classes = [...el.classList];
    const ids = el.id ? [`#${el.id}`] : [];

    // Gera seletores possíveis do elemento
    const possibleSelectors = [
      elementTag,
      ...classes.map(c => `.${c}`),
      ...ids,
    ];

    // Verifica se existe alguma regra CSS com :focus que afete esse elemento
    for (const sheet of document.styleSheets) {
      let rules;
      try {
        rules = sheet.cssRules;
      } catch {
        continue; // Ignora CORS
      }
      if (!rules) continue;

      for (const rule of rules) {
        if (rule.selectorText && rule.selectorText.includes(':focus')) {
          for (const baseSel of possibleSelectors) {
            const fullSelector = `${baseSel}:focus`;
            if (rule.selectorText.includes(fullSelector)) {
              return true; // tem estilo de foco definido
            }
          }
        }
      }
    }
    return false;
  }

  interactiveElements.forEach((el) => {
    const style = window.getComputedStyle(el);

    const outlineNone =
      style.outlineStyle === 'none' ||
      style.outlineWidth === '0px';

    const noBoxShadow = style.boxShadow === 'none' || !style.boxShadow;

    const hasCustomFocus = hasFocusStyle(el);

    if (outlineNone && noBoxShadow && !hasCustomFocus) {
      results.errors.push(
        `Criterio 2.4.7 (Foco Visível): O elemento <${el.tagName.toLowerCase()}> não apresenta um estilo de foco perceptível.`
      );
      focusVisibleErrorFound = true;
    }
  });

  if (focusVisibleErrorFound) {
    results.passedCriteria--;
  }

    // ISSUE #25 : Interações Somente com Hover
  // Critério 2.4.7 / 2.1.1
  const hoverOnlyErrorFound = new Set();

  const hoverSelectors = [];   // [{ base: ".button", full: ".button:hover" }]
  const focusSelectors = new Set();  // ".button:focus", ".button:focus-visible"

  // 1. Mapear regras CSS com :hover e :focus/:focus-visible
  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue; // ignora CORS
    }
    if (!rules) continue;

    for (const rule of rules) {
      if (!rule.selectorText) continue;

      const selectors = rule.selectorText.split(',');

      selectors.forEach(sel => {
        const s = sel.trim();

        if (s.includes(':hover')) {
          const base = s.replace(':hover', '').trim();
          hoverSelectors.push({ base, full: s });
        }

        if (s.includes(':focus') || s.includes(':focus-visible')) {
          const base = s
            .replace(':focus-visible', '')
            .replace(':focus', '')
            .trim();
          focusSelectors.add(base);
        }
      });
    }
  }

  // 2. Verificar elementos que possuem :hover mas NÃO possuem :focus equivalente
  hoverSelectors.forEach(({ base, full }) => {
    if (!focusSelectors.has(base)) {

      let affectedElements = [];
      try {
        affectedElements = document.querySelectorAll(base);
      } catch {
        // seletores muito complexos podem falhar
        return;
      }

      affectedElements.forEach(el => {
        const preview = el.outerHTML.substring(0, 80).replace(/\n/g, '');

        results.errors.push(
          `Criterio 2.4.7 / 2.1.1 (Interações Somente com Hover): 
            O seletor "${full}" aplica estilo visual apenas no estado :hover, 
            mas NÃO há equivalente em :focus ou :focus-visible.  
            Elemento afetado: ${preview}...`
        );

        hoverOnlyErrorFound.add(el);
      });
    }
  });

  if (hoverOnlyErrorFound.size > 0) {
    results.passedCriteria--;
  }

  // Calcular Score
  results.score = (results.passedCriteria / results.totalCriteria) * 100;

  return results;
}

// =========================================== LÓGICA DO PLUGIN ====================================

document.addEventListener('DOMContentLoaded', () => {
  const auditButton = document.getElementById('auditButton');
  const scoreEl = document.getElementById('score');
  const errorListEl = document.getElementById('errorList');

  auditButton.addEventListener('click', async () => {
    scoreEl.textContent = 'Analisando...';
    errorListEl.innerHTML = '';

    // Pega a aba ativa
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    // Executa a função de auditoria na pagina
    try {
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runAccessibilityAudit,
      });

      const auditData = results[0].result;

      // Exibe o Score
      scoreEl.textContent = `Score: ${auditData.score.toFixed(0)}% (${
        auditData.passedCriteria
      }/${auditData.totalCriteria} criterios)`;
      if (auditData.score < 100) {
        scoreEl.style.color = '#d9534f';
      } else {
        scoreEl.style.color = '#5cb85c'; // Verde
      }

      // Exibe os Erros
      if (auditData.errors.length === 0) {
        errorListEl.innerHTML =
          '<li>Nenhum erro encontrado nos criterios verificados.</li>';
        errorListEl.style.color = '#5cb85c';
      } else {
        auditData.errors.forEach((error) => {
          const li = document.createElement('li');
          li.textContent = error;
          errorListEl.appendChild(li);
        });
      }
    } catch (e) {
      console.error(e);
      scoreEl.textContent = 'Erro ao auditar a pagina.';
      errorListEl.innerHTML = `<li>Verifique se a pagina nao e restrita (ex: chrome://) ou recarregue-a.</li>`;
    }
  });
});