document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Previne o comportamento padrão do link
      alert(`Você escolheu a opção ${link.innerHTML}!`);
    });
  });
