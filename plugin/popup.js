/**
 * Função de auditoria que será injetada e executada
 * no contexto da página web ativa.
 *
 * Esta função NÃO tem acesso ao escopo do popup.js.
 */
function runAccessibilityAudit() {
  const results = {
    errors: [],
    totalCriteria: 3,
    passedCriteria: 3,
  };

  // ---
  // Critério 3.1.1: Idioma da Página
  // https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html
  // ---
  const htmlLang = document.documentElement.lang;
  if (!htmlLang || htmlLang.trim() === '') {
    results.errors.push(
      "Critério 3.1.1 (Idioma da Página): A tag <html> não possui um atributo 'lang' válido."
    );
    results.passedCriteria--;
  }

  // ---
  // Critério 1.1.1: Conteúdo Não Textual (Verificação básica de <img>)
  // https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
  // ---
  const images = document.querySelectorAll('img');
  let imgErrorFound = false;
  images.forEach((img, index) => {
    // Verifica se o atributo 'alt' está ausente.
    // Nota: alt="" (vazio) é válido para imagens decorativas.
    if (!img.hasAttribute('alt')) {
      const src =
        img.src.length > 50 ? img.src.substring(0, 50) + '...' : img.src;
      results.errors.push(
        `Critério 1.1.1 (Conteúdo Não Textual): A imagem (src: ${
          src || 'N/A'
        }) não possui o atributo 'alt'.`
      );
      imgErrorFound = true;
    }
  });
  if (imgErrorFound) {
    results.passedCriteria--;
  }

  // ---
  // Critério 2.1.1: Teclado (Verificação básica de 'onclick' em não interativos)
  // https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html
  // ---
  // Procura por elementos que têm eventos de clique mas não são
  // nativamente focáveis (como botões ou links) e nem foram
  // tornados focáveis (com tabindex >= 0).
  const nonInteractiveClickables = document.querySelectorAll(
    'div[onclick], span[onclick], p[onclick], img[onclick]'
  );

  let keyboardErrorFound = false;
  nonInteractiveClickables.forEach((el) => {
    const tabIndex = el.getAttribute('tabindex');
    const isFocusable = tabIndex !== null && parseInt(tabIndex, 10) >= 0;

    // Também verifica se tem role="button" ou similar, o que exigiria tabindex
    const role = el.getAttribute('role');
    const isButtonRole =
      role === 'button' || role === 'link' || role === 'menuitem';

    if (!isFocusable && isButtonRole) {
      results.errors.push(
        `Critério 2.1.1 (Teclado): O elemento <${el.tagName}> com role="${role}" e 'onclick' não é focável (ausente tabindex="0").`
      );
      keyboardErrorFound = true;
    } else if (!isFocusable && !isButtonRole) {
      results.errors.push(
        `Critério 2.1.1 (Teclado): O elemento <${el.tagName}> possui 'onclick' mas não é nativamente interativo nem possui tabindex="0".`
      );
      keyboardErrorFound = true;
    }
  });

  if (keyboardErrorFound) {
    results.passedCriteria--;
  }

  // Calcular Score
  results.score = (results.passedCriteria / results.totalCriteria) * 100;

  return results;
}

/**
 * Lógica do Popup (Executado no contexto da extensão)
 */
document.addEventListener('DOMContentLoaded', () => {
  const auditButton = document.getElementById('auditButton');
  const scoreEl = document.getElementById('score');
  const errorListEl = document.getElementById('errorList');

  auditButton.addEventListener('click', async () => {
    // Limpa resultados anteriores
    scoreEl.textContent = 'Analisando...';
    errorListEl.innerHTML = '';

    // Pega a aba ativa
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    // Executa a função de auditoria na página
    try {
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runAccessibilityAudit,
      });

      // O resultado vem em um array, pegamos o primeiro (results[0])
      // e acessamos a propriedade 'result'
      const auditData = results[0].result;

      // Exibe o Score
      scoreEl.textContent = `Score: ${auditData.score.toFixed(0)}% (${
        auditData.passedCriteria
      }/${auditData.totalCriteria} critérios)`;
      if (auditData.score < 100) {
        scoreEl.style.color = '#d9534f';
      } else {
        scoreEl.style.color = '#5cb85c'; // Verde
      }

      // Exibe os Erros
      if (auditData.errors.length === 0) {
        errorListEl.innerHTML =
          '<li>Nenhum erro encontrado nos critérios verificados.</li>';
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
      scoreEl.textContent = 'Erro ao auditar a página.';
      errorListEl.innerHTML = `<li>Verifique se a página não é restrita (ex: chrome://) ou recarregue-a.</li>`;
    }
  });
});