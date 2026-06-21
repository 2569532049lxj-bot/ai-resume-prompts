const copyButtons = document.querySelectorAll('[data-copy-target]');

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    const text = target.innerText.trim();
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = '已复制';
      button.classList.add('is-copied');
      setTimeout(() => {
        button.textContent = '复制提示词';
        button.classList.remove('is-copied');
      }, 1600);
    } catch {
      button.textContent = '请手动选择复制';
      setTimeout(() => {
        button.textContent = '复制提示词';
      }, 1800);
    }
  });
});
