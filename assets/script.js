  function abrirPDFs() {
        window.open('public/acessibilidade-em-museus.pdf', '_blank');
        setTimeout(() => {
          alert("Clique OK para abrir o segundo certificado.")
          window.open('public/curso-para-fazer-uma-exposição.pdf', '_blank');
        }, 2000)
  }

  let show = true;
  const menuContent = document.querySelector('.content');
  const menuToggle = menuContent.querySelector('.menu-toggle');
  
  menuToggle.addEventListener("click", () => {
  
      menuContent.classList.toggle('on', show);
      show = !show;
  
  });