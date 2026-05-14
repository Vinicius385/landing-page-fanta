// Criação de uma timeline do GSAP com animações sincronicazadas com o scroll

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: false, // DEPURAÇÃO
  },
});

tl.to(
  "#fanta",
  {
    top: "115%", // MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
    left: "1%",
  },
  "orange",
); // Nomeando este trecho de animação como 'orange' para sincronização

tl.to(
  "#laranja-cortada",
  {
    top: "160%", // Move o elemento com id 'laranja-cortada' para 160% do topo
    left: "23%", // Move o elemento para 23% da esquerda
  },
  "orange",
); // Sincronizando com a animação nomeada 'orange'

tl.to(
  "#laranja",
  {
    width: "15%", // Reduz a largura do elemento com id 'orange' para 15%
    top: "170%", // Move o elemento para 160% do topo
    right: "5%", // Move o elemento para 10% da direita
  },
  "orange",
); // Sincronizando com a animação nomeada 'orange'

tl.to(
  "#folha",
  {
    top: "110%", // Move o elemento com id 'folha' para 110% do topo
    rotate: "530deg", // Rotaciona o elemento em 530 graus
    left: "85%", // Move o elemento para 70% da esquerda
  },
  "orange",
); // Sincronizando com a animação nomeada 'orange'

tl.to(
  "#folha2",
  {
    top: "110%", // Move o elemento com id 'folha2' para 110% do topo
    rotate: "530deg", // Rotaciona o elemento em 530 graus
    left: "0%", // Move o elemento para 0% da esquerda
  },
  "orange",
); // Sincronizando com a animação nomeada 'orange'

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%", // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
    scrub: true,
    markers: false, // DEPURAÇÃO
  },
});

// Definindo a animação dos elementos com a timeline 'tl2'
tl2.from(
  ".lemon1",
  {
    rotate: "-90deg", // Inicia o elemento com classe 'lemon1' rotacionando em -90 graus
    left: "-100%", // Inicia o elemento fora da tela, à esquerda (-100%)
    top: "110%", // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
  },
  "ca",
); // Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
  "#cocacola",
  {
    rotate: "-2deg", // Inicia o elemento com classe 'cocacola' rotacionando em -90 graus
    left: "-100%", // Inicia o elemento fora da tela, à esquerda (-100%)
    top: "110%", // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
  },
  "ca",
); // Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
  ".lemon2",
  {
    rotate: "90deg", // Inicia o elemento com classe 'lemon2' rotacionando em -90 graus
    left: "100%", // Inicia o elemento fora da tela, à esquerda (-100%)
    top: "110%", // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
  },
  "ca",
); // Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
  "#pepsi",
  {
    rotate: "2deg", // Inicia o elemento com classe 'pepsi' rotacionando em -90 graus
    left: "100%", // Inicia o elemento fora da tela, à esquerda (-100%)
    top: "110%", // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
  },
  "ca",
); // Nomeando este trecho de animação como 'ca' para sincronização

tl2.to(
  "#laranja-cortada",
  {
    width: "18%", // Aumenta a largura do elemento com id 'laranja-cortada' para 18%
    left: "41%", // Move o elemento para 42% da esquerda
    top: "210%", // Move o elemento para 204% do topo
  },
  "ca",
); // Sincronizando com a animação nomeada 'ca'

tl2.to(
  "#fanta",
  {
    width: "27%", // Aumenta a largura do elemento com id 'fanta' para 35%
    left: "37%", // Move o elemento para 33% da esquerda
    top: "216%", // Move o elemento para 210% do topo
  },
  "ca",
); // Sincronizando com a animação nomeada 'ca'
