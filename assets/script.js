  function abrirPDFs() {
        window.open('public/acessibilidade-em-museus.pdf', '_blank');
        window.open('public/curso-para-fazer-uma-exposição.pdf', '_blank');
  }

  let show = true;
  const menuContent = document.querySelector('.content');
  const menuToggle = menuContent.querySelector('.menu-toggle');
  
  menuToggle.addEventListener("click", () => {
  
      menuContent.classList.toggle('on', show);
      show = !show;
  
  });