// ===== ANIMAÇÃO AO APARECER NA TELA =====
const elementosAnimar = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("mostrar");
    }
  });
}, { threshold: 0.15 });

elementosAnimar.forEach((el) => observer.observe(el));


// ===== MENU ATIVO AUTOMÁTICO =====
const secoes = document.querySelectorAll("section[id]");
const linksMenu = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  secoes.forEach((sec) => {
    const altura = sec.offsetHeight;
    const topo = sec.offsetTop - 140;
    const id = sec.getAttribute("id");

    if (scrollY > topo && scrollY <= topo + altura) {
      linksMenu.forEach((link) => link.parentElement.classList.remove("active"));

      const linkAtivo = document.querySelector(`.menu a[href="#${id}"]`);
      if (linkAtivo) {
        linkAtivo.parentElement.classList.add("active");
      }
    }
  });
});


// ===== ENVIAR ORÇAMENTO PARA WHATSAPP =====
function montarMensagem() {
  const nome = document.getElementById("nome").value;
  const moto = document.getElementById("moto").value;
  const servico = document.getElementById("servico").value;
  const descricao = document.getElementById("descricao").value;

  const texto =
`Olá! Quero pedir um orçamento.
Nome: ${nome}
Moto: ${moto}
Serviço: ${servico}
Descrição: ${descricao}`;

  const url = "https://wa.me/5547996871406?text=" + encodeURIComponent(texto);
  window.open(url, "_blank");

  return false;
}
