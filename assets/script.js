  function abrirPDFs() {
        window.open('public/acessibilidade-em-museus.pdf', '_blank');
        setTimeout(() => {
          document.getElementById('modal').style.display = 'block';
        }, 1000);
  }

  function abrirSegundoPDF() {
    window.open('public/curso-para-fazer-uma-exposicão.pdf', '_blank');
    document.getElementById('modal').style.display = 'none';
  }

  let show = true;
  const menuContent = document.querySelector('.content');
  const menuToggle = menuContent.querySelector('.menu-toggle');
  
  menuToggle.addEventListener("click", () => {
  
      menuContent.classList.toggle('on', show);
      show = !show;
  
  });