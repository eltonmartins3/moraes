  function abrirPDFs() {
        window.open('public/acessibilidade-em-museus.pdf', '_blank');
        setTimeout(() => {
          document.getElementById('modal').classList.add('show');
        }, 1000);
  }

  function abrirSegundoPDF() {
    window.open('public/curso-para-fazer-uma-exposicao.pdf', '_blank');
    fecharModal();
  }

  function fecharModal() {
    document.getElementById('modal').classList.remove('show');
  }

  let show = true;
  const menuContent = document.querySelector('.content');
  const menuToggle = menuContent.querySelector('.menu-toggle');
  
  menuToggle.addEventListener("click", () => {
  
      menuContent.classList.toggle('on', show);
      show = !show;
  
  });