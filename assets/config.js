/* ============================================================
   CONFIGURAÇÃO DO SITE — edite apenas este arquivo
   ============================================================ */
window.MIMOS = {
  // WhatsApp que recebe os orçamentos: só números, com 55 + DDD.
  // Ex.: '5581999998888'. Enquanto estiver vazio, o botão avisa que o número não foi configurado.
  whatsapp: '',

  // Depoimentos reais (substitua os textos entre colchetes).
  depoimentos: [
    { texto: '[Depoimento real de cliente]', quem: '[Nome] · [Tipo de evento]' },
    { texto: '[Segundo depoimento real de cliente]', quem: '[Nome] · [Tipo de evento]' },
    { texto: '[Terceiro depoimento real de cliente]', quem: '[Nome] · [Tipo de evento]' }
  ],

  // Vitrine da doceria (nome, detalhe, preço e foto em /img).
  doceria: [
    { nome: '[Bolo de chocolate]', detalhe: '[tamanho / serve X pessoas]', preco: '[R$ 0]', img: 'img/bolos.jpg' },
    { nome: '[Caixa de docinhos finos]', detalhe: '[X unidades]', preco: '[R$ 0]', img: 'img/servico.jpg' },
    { nome: '[Cento de brigadeiro]', detalhe: '100 unidades', preco: '[R$ 0]', img: 'img/atendimento.jpg' },
    { nome: '[Cesta café da manhã]', detalhe: '[descrição curta]', preco: '[R$ 0]', img: 'img/mesa.jpg' },
    { nome: '[Kit presente]', detalhe: '[descrição curta]', preco: '[R$ 0]', img: 'img/cafe.jpg' }
  ],

  // Pacotes do buffet: preço por adulto (a) e por criança de 4 a 10 anos (k).
  pacotes: [
    { id: 'inf1', cat: 'infantil', nome: 'Infantil I', a: 55, k: 30 },
    { id: 'inf2', cat: 'infantil', nome: 'Infantil II', a: 60, k: 36 },
    { id: 'soc1', cat: 'social', nome: 'Social I', a: 52, k: 30 },
    { id: 'soc2', cat: 'social', nome: 'Social II', a: 58, k: 35 },
    { id: 'soc3', cat: 'social', nome: 'Social III', a: 70, k: 40 },
    { id: 'chu', cat: 'tematico', nome: 'Churrasco', a: 69, k: 49 },
    { id: 'fei', cat: 'tematico', nome: 'Feijoada', a: 65, k: 42 },
    { id: 'piz', cat: 'tematico', nome: 'Pizza ou Crepe', a: 48, k: 35 },
    { id: 'cof', cat: 'corporativo', nome: 'Coffee Break', a: 48, k: null }
  ]
};
