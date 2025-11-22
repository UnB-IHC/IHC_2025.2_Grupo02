/**
 * Função de auditoria injetada.
 * Combina a lógica técnica profunda com a estrutura de categorias visuais.
 */
function runAccessibilityAudit() {
  // Estrutura de Categorias para o Acordeão
  const categories = {
    semantics: { title: "Semântica e Estrutura", issues: [], passed: true },
    images: { title: "Imagens e Mídia", issues: [], passed: true },
    links: { title: "Links e Navegação", issues: [], passed: true },
    interaction: { title: "Interação e Teclado", issues: [], passed: true },
    forms: { title: "Formulários e Botões", issues: [], passed: true }
  };

  let passedCriteriaCount = 0;
  let totalCriteriaCount = 0;

  // Função auxiliar para processar resultado de um critério
  function registerCriterion(categoryKey, isPass, failMessages) {
    totalCriteriaCount++;
    if (isPass) {
      passedCriteriaCount++;
    } else {
      categories[categoryKey].passed = false;
      if (Array.isArray(failMessages)) {
        categories[categoryKey].issues.push(...failMessages);
      } else {
        categories[categoryKey].issues.push(failMessages);
      }
    }
  }

  // ==================== LÓGICA DE AUDITORIA ====================

  // 1. [Critério 3.1.1] Idioma da Página
  const htmlLang = document.documentElement.lang;
  registerCriterion('semantics', htmlLang && htmlLang.trim() !== '', 
    "A tag <html> não possui atributo 'lang' válido.");


  // 2. [Critério 1.1.1] Conteúdo Não Textual (Imagens)
  const images = document.querySelectorAll('img');
  let imgErrors = [];
  images.forEach(img => {
    if (!img.hasAttribute('alt')) {
      const src = img.src.length > 40 ? img.src.substring(0, 40) + '...' : img.src;
      imgErrors.push(`Imagem sem alt: ${src}`);
    }
  });
  registerCriterion('images', imgErrors.length === 0, imgErrors);


  // 3. [Critério 2.1.1] Teclado (Onclick em não interativos)
  const nonInteractive = document.querySelectorAll('div[onclick], span[onclick], p[onclick], img[onclick]');
  let keyboardErrors = [];
  nonInteractive.forEach(el => {
    const tabIndex = el.getAttribute('tabindex');
    const isFocusable = tabIndex !== null && parseInt(tabIndex, 10) >= 0;
    
    if (!isFocusable) {
       // Tenta identificar o elemento pelo texto ou ID
       let idRef = el.id ? `(#${el.id})` : '';
       let textRef = el.innerText ? `"${el.innerText.substring(0, 20)}..."` : 'sem texto';
       // Removemos os <> para não renderizar HTML acidentalmente
       keyboardErrors.push(`Elemento ${el.tagName} ${idRef} ${textRef} com 'onclick' não é focável.`);
       
       // Destaque visual na página
       el.style.outline = "2px dashed orange";
    }
  });
  registerCriterion('interaction', keyboardErrors.length === 0, keyboardErrors);


  // 4. [Critério 1.3.1] Estrutura Semântica Básica
  let structErrors = [];
  if (!document.querySelector('header')) structErrors.push("Falta tag <header>.");
  if (!document.querySelector('nav')) structErrors.push("Falta tag <nav>.");
  if (!document.querySelector('main')) structErrors.push("Falta tag <main>.");
  if (!document.querySelector('footer')) structErrors.push("Falta tag <footer>.");
  registerCriterion('semantics', structErrors.length === 0, structErrors);


  // 5. [Critério 1.3.1] Hierarquia de Títulos
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let headingErrors = [];
  if (headings.length > 0) {
    if (headings[0].tagName !== 'H1') headingErrors.push("O primeiro título não é H1.");
    
    let lastLevel = parseInt(headings[0].tagName.substring(1));
    for (let i = 1; i < headings.length; i++) {
      const curr = parseInt(headings[i].tagName.substring(1));
      if (curr > lastLevel + 1) {
        headingErrors.push(`Pulo incorreto de H${lastLevel} para H${curr}: "${headings[i].innerText.substring(0,20)}..."`);
      }
      lastLevel = curr;
    }
  }
  registerCriterion('semantics', headingErrors.length === 0, headingErrors);


  // 6. [Critério 2.4.4] Links sem Href
  const allLinks = document.querySelectorAll('a');
  let linkErrors = [];
  allLinks.forEach(link => {
    const txt = link.innerText.substring(0, 20) || 'Imagem/Ícone';
    
    if (!link.hasAttribute('href')) {
      linkErrors.push(`Link sem atributo href: "${txt}"`);
    } else {
      const href = link.getAttribute('href').trim();
      if (href === '' || href === '#' || href.startsWith('javascript:')) {
        linkErrors.push(`Link não navegável (href="${href}"): "${txt}"`);
      }
    }
  });
  registerCriterion('links', linkErrors.length === 0, linkErrors);


  // 7. [Critério 2.4.7] Foco Visível (CORRIGIDO E PADRONIZADO)
  const interactiveEls = document.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
  let focusErrors = [];
  
  interactiveEls.forEach(el => {
    const style = window.getComputedStyle(el);
    const noOutline = (style.outlineStyle === 'none' || style.outlineWidth === '0px');
    const noShadow = (style.boxShadow === 'none' || !style.boxShadow);
    
    if (noOutline && noShadow) {
       // 1. Cria uma referência identificável
       let ref = '';
       if (el.id) ref = `ID: #${el.id}`;
       else if (el.className && typeof el.className === 'string') ref = `Class: .${el.className.split(' ')[0]}`;
       else if (el.innerText) ref = `Texto: "${el.innerText.substring(0, 15)}..."`;
       else if (el.placeholder) ref = `Placeholder: "${el.placeholder}"`;
       else ref = 'Sem identificador';

       // CORREÇÃO AQUI: Removemos os sinais < > ao redor do tagName
       // Isso evita que o navegador desenhe um botão real dentro da lista
       const tagName = el.tagName.toLowerCase();
       focusErrors.push(`Elemento ${tagName}: sem foco visível (${ref})`);

       // 2. Destaque Visual na Página
       el.style.outline = "2px solid orange";
       el.style.outlineOffset = "2px";
    }
  });
  registerCriterion('interaction', focusErrors.length === 0, focusErrors);


  // 8. [Issue #25] Interação Somente Hover (Placeholder)
  registerCriterion('interaction', true, []); 


  // 9. [Critério 1.4.1] Links Sem Underline
  let underlineErrors = [];
  const linksUnderline = document.querySelectorAll('a');
  linksUnderline.forEach(link => {
    const style = window.getComputedStyle(link);
    const isBtn = link.classList.contains('btn') || link.getAttribute('role') === 'button';
    const hasText = link.innerText.trim().length > 0;
    
    if (style.textDecorationLine.indexOf('underline') === -1 && !isBtn && hasText) {
        link.style.borderBottom = "3px dotted red"; // Visual
        underlineErrors.push(`Link sem sublinhado: "${link.innerText.substring(0,20)}..."`);
    }
  });
  registerCriterion('links', underlineErrors.length === 0, underlineErrors);


  // 10. [Critério 4.1.2] Botões sem Nome
  let btnErrors = [];
  const buttons = document.querySelectorAll('button, [role="button"]');
  buttons.forEach(btn => {
    if (btn.offsetWidth === 0 && btn.offsetHeight === 0) return; 
    
    const name = btn.innerText || btn.getAttribute('aria-label') || btn.getAttribute('title');
    if (!name || name.trim() === '') {
       btn.style.outline = "5px solid #FF00FF"; // Visual Roxo
       
       let idRef = btn.id ? `(#${btn.id})` : '';
       let classRef = (btn.className && typeof btn.className === 'string') ? `(.${btn.className.split(' ')[0]})` : '';
       
       btnErrors.push(`Botão sem nome acessível ${idRef} ${classRef}`);
    }
  });
  registerCriterion('forms', btnErrors.length === 0, btnErrors);


  // Cálculo do Score
  const score = totalCriteriaCount === 0 ? 0 : Math.round((passedCriteriaCount / totalCriteriaCount) * 100);

  return {
    categories,
    score,
    passedCriteriaCount,
    totalCriteriaCount
  };
}

// ================= LÓGICA DO POPUP =================

document.addEventListener('DOMContentLoaded', () => {
  const auditButton = document.getElementById('auditButton');
  const resultsContainer = document.getElementById('resultsContainer');
  const scoreText = document.getElementById('scoreText');
  const scoreDetails = document.getElementById('scoreDetails');
  const scoreCircle = document.getElementById('scoreCircle');

  scoreCircle.style.strokeDashoffset = 100;

  auditButton.addEventListener('click', async () => {
    auditButton.disabled = true;
    auditButton.innerHTML = 'Analisando...';
    resultsContainer.innerHTML = '';
    
    scoreCircle.style.strokeDashoffset = 100;
    scoreCircle.classList.remove('score-good', 'score-bad', 'score-neutral');

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    try {
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runAccessibilityAudit,
      });

      const data = results[0].result;
      const score = data.score;

      // 1. Atualiza Gráfico
      setTimeout(() => {
        scoreCircle.style.strokeDashoffset = 100 - score;
        if (score === 100) scoreCircle.classList.add('score-good');
        else if (score >= 70) scoreCircle.classList.add('score-neutral');
        else scoreCircle.classList.add('score-bad');
      }, 50);

      scoreText.textContent = `${score}`;
      scoreDetails.innerHTML = `
        <span style="color:${score === 100 ? 'var(--success-color)' : 'var(--text-main)'}">
          ${data.passedCriteriaCount} de ${data.totalCriteriaCount} critérios aprovados
        </span>
      `;

      // 2. Renderiza Categorias (Acordeão)
      Object.keys(data.categories).forEach(key => {
        const cat = data.categories[key];
        const details = document.createElement('details');
        details.className = `category-card ${cat.passed ? 'cat-success' : 'cat-fail'}`;

        const statusIcon = cat.passed ? '✅' : '⚠️';
        const badgeText = cat.passed ? 'Aprovado' : `${cat.issues.length} Erros`;
        
        details.innerHTML = `
          <summary class="category-header">
            <span style="display:flex; align-items:center; gap:8px; font-weight:700;">
              ${statusIcon} ${cat.title}
            </span>
            <span class="badge">${badgeText}</span>
          </summary>
          <ul class="error-list"></ul>
        `;

        const ul = details.querySelector('ul');
        
        if (cat.passed) {
          ul.innerHTML = `<li class="error-item"><span class="bullet-success">✔</span> Nenhum problema detectado.</li>`;
        } else {
          cat.issues.forEach(issue => {
            const li = document.createElement('li');
            li.className = 'error-item';
            li.innerHTML = `<span class="bullet-error">•</span> ${issue}`;
            ul.appendChild(li);
          });
        }
        resultsContainer.appendChild(details);
      });

    } catch (e) {
      console.error(e);
      resultsContainer.innerHTML = `<div style="color:red; text-align:center; padding:20px;">Erro ao analisar página.</div>`;
    } finally {
      auditButton.disabled = false;
      auditButton.innerHTML = `
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="margin-right:6px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Analisar Novamente
      `;
    }
  });
});