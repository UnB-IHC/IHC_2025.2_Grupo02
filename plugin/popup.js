/**
 * Função de auditoria injetada.
 * Retorna dados agrupados por categorias.
 */
function runAccessibilityAudit() {
  const categories = {
    images: { title: "Imagens e Mídia", passed: true, issues: [], count: 0, total: 0 },
    semantics: { title: "Semântica e Estrutura", passed: true, issues: [], count: 0, total: 0 },
    links: { title: "Links e Navegação", passed: true, issues: [], count: 0, total: 0 },
    interaction: { title: "Interação e Teclado", passed: true, issues: [], count: 0, total: 0 },
    forms: { title: "Formulários e Botões", passed: true, issues: [], count: 0, total: 0 }
  };

  let totalTests = 0;
  let passedTests = 0;

  // Helper para registrar
  function log(cat, isPass, msg) {
    totalTests++;
    categories[cat].total++;
    if (isPass) {
      passedTests++;
    } else {
      categories[cat].passed = false;
      categories[cat].count++;
      categories[cat].issues.push(msg);
    }
  }

  // --- 1. Imagens (Alt) ---
  const images = document.querySelectorAll('img');
  let imgErrors = 0;
  images.forEach(img => {
    if (!img.hasAttribute('alt')) {
      imgErrors++;
      const src = img.src.substring(0, 40) + '...';
      log('images', false, `Imagem sem alt: ${src}`);
    }
  });
  if (imgErrors === 0) log('images', true, "Todas as imagens possuem texto alternativo.");

  // --- 2. Semântica (Landmarks) ---
  const structures = ['header', 'nav', 'main', 'footer'];
  let missingStructs = [];
  structures.forEach(tag => {
    if (!document.querySelector(tag)) missingStructs.push(`<${tag}>`);
  });
  if (missingStructs.length > 0) {
    log('semantics', false, `Tags ausentes: ${missingStructs.join(', ')}`);
  } else {
    log('semantics', true, "Estrutura semântica básica completa.");
  }

  // --- 3. Idioma ---
  const lang = document.documentElement.lang;
  if (!lang) log('semantics', false, "Tag <html> sem atributo lang.");
  else log('semantics', true, `Idioma definido: ${lang}`);

  // --- 4. Títulos (H1) ---
  const h1 = document.querySelector('h1');
  if (!h1) log('semantics', false, "Página não possui título <h1>.");
  else log('semantics', true, "Página possui título principal <h1>.");

  // --- 5. Links ---
  const badLinks = document.querySelectorAll('a:not([href]), a[href=""], a[href="#"]');
  if (badLinks.length > 0) {
    badLinks.forEach(l => {
        const txt = l.innerText.substring(0,20) || 'Link Imagem/Icone';
        log('links', false, `Link vago ou vazio: "${txt}"`);
    });
  } else {
    log('links', true, "Todos os links parecem navegáveis.");
  }

  // --- 6. Botões sem Nome ---
  const buttons = document.querySelectorAll('button');
  let btnErr = 0;
  buttons.forEach(btn => {
    const name = btn.innerText || btn.getAttribute('aria-label') || btn.getAttribute('title');
    if (!name || name.trim() === '') {
        btnErr++;
        // Adiciona borda visual na página para debug
        btn.style.outline = "2px solid red";
    }
  });
  if (btnErr > 0) log('forms', false, `${btnErr} botões sem nome acessível (aria-label ou texto).`);
  else log('forms', true, "Botões possuem identificação.");

  // --- 7. Elementos Clicáveis sem Teclado ---
  const clickables = document.querySelectorAll('[onclick]:not(button):not(a):not([tabindex])');
  if (clickables.length > 0) {
    log('interaction', false, `${clickables.length} elementos com 'onclick' não acessíveis via teclado (sem tabindex).`);
  } else {
    log('interaction', true, "Eventos de clique parecem acessíveis.");
  }

  const score = totalTests === 0 ? 0 : Math.round((passedTests / totalTests) * 100);
  
  return { categories, score, totalTests, passedTests };
}

// ================= LÓGICA DO POPUP =================

document.addEventListener('DOMContentLoaded', () => {
  const auditButton = document.getElementById('auditButton');
  const resultsContainer = document.getElementById('resultsContainer');
  const scoreText = document.getElementById('scoreText');
  const scoreDetails = document.getElementById('scoreDetails');
  const scoreCircle = document.getElementById('scoreCircle');

  // Reset Inicial
  scoreCircle.style.strokeDashoffset = 100;

  auditButton.addEventListener('click', async () => {
    auditButton.disabled = true;
    auditButton.innerHTML = 'Analisando...';
    resultsContainer.innerHTML = '';
    
    // Reset Score
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
          ${data.passedTests} de ${data.totalTests} testes aprovados
        </span>
      `;

      // 2. Renderiza Categorias (Métricas)
      Object.keys(data.categories).forEach(key => {
        const cat = data.categories[key];
        
        // Só renderiza se tiver testes nessa categoria
        if (cat.total === 0) return;

        // Cria o elemento <details>
        const details = document.createElement('details');
        details.className = `category-card ${cat.passed ? 'cat-success' : 'cat-fail'}`;

        // Define o Cabeçalho (Summary)
        const statusIcon = cat.passed ? '✅' : '⚠️';
        const badgeText = cat.passed ? 'Aprovado' : `${cat.count} Erros`;
        
        details.innerHTML = `
          <summary class="category-header">
            <span>${statusIcon} ${cat.title}</span>
            <span class="badge">${badgeText}</span>
          </summary>
          <ul class="error-list"></ul>
        `;

        // Preenche a lista interna
        const ul = details.querySelector('ul');
        
        if (cat.passed) {
          // Se passou, mostra mensagem positiva
          ul.innerHTML = `<li class="error-item"><span class="bullet-success">✔</span> Tudo certo nesta categoria.</li>`;
        } else {
          // Se falhou, lista os erros
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
      resultsContainer.innerHTML = `<div style="color:red; text-align:center; padding:20px;">Erro ao analisar página.<br>Tente recarregar a aba.</div>`;
    } finally {
      auditButton.disabled = false;
      auditButton.innerHTML = `
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="margin-right: 6px;">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Analisar Novamente
      `;
    }
  });
});