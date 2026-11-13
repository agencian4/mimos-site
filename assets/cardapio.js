(function () {
  var C = window.MIMOS;
  var brl = function (n) { return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 }); };
  var price = {}; C.pacotes.forEach(function (p) { price[p.id] = p; });
  var catLabel = { infantil: 'Infantil', social: 'Social', tematico: 'Temático', corporativo: 'Corporativo' };
  var catBg = { infantil: '#FFD36E', social: '#F8D6CC', tematico: '#F07B3F', corporativo: '#FFFFFF' };
  var bev = 'Água mineral, refrigerantes (Guaraná, Coca-Cola clássica e Zero) e 2 sucos: acerola, cajá, goiaba ou graviola';
  var bevKids = 'Água mineral, refrigerantes e 2 sucos: acerola, cajá, goiaba, graviola, abacaxi, abacaxi com hortelã, caju ou manga';
  var docTrad = 'Brigadeiro, surpresa de uva, tortinha de leite condensado, bem-casado e beijinho';

  var pkgs = [
    { id: 'inf1', img: 'img/atendimento.jpg', pitch: 'O clássico das festas infantis, com Lanchonete Kids para a criançada.', s: [
      ['Entradinhas', 'Pãozinho de frango, canutilho de provolone, mini quiche três queijos, empadinha de frango, mini hot dog'],
      ['Finger foods', 'Beijuzinho de carne seca com queijo coalho gratinado, bruschetta italiana, espetinho e trouxinha de frango com bacon, coalhinho maçaricado'],
      ['Fritos', 'Coxinha, delícia sertaneja, croquete de frango defumado'],
      ['Mini empratado (1 opção)', 'Frango ao milho ou penne à bolonhesa'],
      ['Lanchonete Kids', 'Pipoca, mini pizza, coxinha, mini hot dog, brigadeiro, refrigerante e água'],
      ['Docinhos', docTrad], ['Bebidas', bevKids]] },
    { id: 'inf2', img: 'img/bolos.jpg', pitch: 'Festa infantil com toque gourmet: camarão, bacalhau e docinhos finos.', s: [
      ['Entradinhas', 'Briochinho de salpicão, canutilho de ricota com provolone, cestinha phyllo com geleia de damasco, mini quiche de queijo do reino, folhadinho Romeu e Julieta, empadinha de camarão, mini hot dog'],
      ['Finger foods', 'Beijuzinho de carne seca com queijo coalho gratinado, bruschetta, tacinha de bacalhau gratinada'],
      ['Fritos', 'Coxinha, delícia sertaneja, croquete 3 queijos, croquete de calabresa, camarão especial'],
      ['Mini empratado (1 opção)', 'Entradinha de bacalhau, casquinha de siri ou mini sinfonia de frutos do mar'],
      ['Lanchonete Kids', 'Pipoca, mini pizza, mini hambúrguer, batatinha frita, coxinha, mini hot dog, brigadeiro'],
      ['Docinhos', docTrad + ', bombom Romeu e Julieta, mini churros'], ['Bebidas', bevKids]] },
    { id: 'soc1', img: 'img/cafe.jpg', pitch: 'O essencial bem servido para aniversários e confraternizações.', s: [
      ['Entradinhas', 'Pãozinho de frango, canutilho de provolone, mini quiche três queijos, empadinha de frango, mini hot dog'],
      ['Finger foods', 'Beijuzinho de carne seca com queijo coalho gratinado, bruschetta italiana, espetinho de frango com bacon, coalhinho maçaricado'],
      ['Fritos', 'Coxinha, delícia sertaneja, croquete de calabresa, croquete 3 queijos'],
      ['Mini empratado (1 opção)', 'Frango ao milho ou penne à bolonhesa'],
      ['Docinhos', docTrad], ['Bebidas', bev]] },
    { id: 'soc2', img: 'img/servico.jpg', pitch: 'Frutos do mar e docinhos finos para uma recepção mais especial.', s: [
      ['Entradinhas', 'Briochinho de salpicão, canutilho de ricota com provolone, cestinha phyllo com geleia de damasco, mini quiche de queijo do reino, folhadinho Romeu e Julieta, empadinha de camarão, mini hot dog'],
      ['Finger foods', 'Beijuzinho de carne seca com queijo coalho gratinado, bruschetta, tacinha de bacalhau gratinada'],
      ['Fritos', 'Coxinha, delícia sertaneja, croquete 3 queijos, croquete de calabresa, camarão especial'],
      ['Mini empratado (1 opção)', 'Entradinha de bacalhau, casquinha de siri ou mini sinfonia de frutos do mar'],
      ['Docinhos', docTrad + ', bombom Romeu e Julieta, mini churros com doce de leite e chocolate'], ['Bebidas', bev]] },
    { id: 'soc3', img: 'img/mesa.jpg', pitch: 'Nosso cardápio mais sofisticado, para casamentos e grandes ocasiões.', s: [
      ['Entradinhas', 'Espetinho de camarão com pimenta biquinho, barquete folhada de camarão, canapé de salaminho, carpaccio na batata-doce, tartelete de alho-poró, mini quiche Lorraine, folhado de queijo, folhado Romeu e Julieta'],
      ['Finger foods', 'Beijuzinho de carne seca com queijo coalho gratinado, bruschetta italiana, batatinha com catupiry e bacon'],
      ['Fritos', 'Coxinha, camarão especial, bolinho de bacalhau'],
      ['Mini empratado (1 opção)', 'Casquinha de aratu, casquinha de caranguejo ou escondidinho de abóbora com carne seca'],
      ['Docinhos finos', 'Brigadeiro belga, bombom de nozes, bombom de pistache, trufa crocante, docinho Romeu e Julieta'], ['Bebidas', bev]] },
    { id: 'chu', img: 'img/petiscos.jpg', pitch: 'Petiscos volantes e almoço completo com picanha e contrafilé maturado.', s: [
      ['Petiscos volantes', 'Camarão Mimo’s, coxinha, croquetes, delícia sertaneja, pãozinho de alho, linguiças variadas, coalhinho maçaricado'],
      ['Almoço', 'Picanha importada, contrafilé maturado, aves e costelinha barbecue; feijão (macassar, verde ou tropeiro), arroz, farofa, vinagrete e maionese de batata'],
      ['Sobremesa', 'Doces tradicionais'], ['Bebidas', bev]] },
    { id: 'fei', img: 'img/petiscos.jpg', pitch: 'Feijoada completa com caldinho, torresmo e petiscos para abrir.', s: [
      ['Petiscos volantes', 'Caldinho de feijoada, camarão Mimo’s, coxinha, croquetes, delícia sertaneja, espetinho de frango com bacon, coalhinho, mix de castanhas, beijuzinho de carne seca'],
      ['Almoço', 'Feijoada com carnes e linguiças defumadas, arroz, couve à mineira, farofa, farinha, laranja, abacaxi, vinagrete e torresmo'],
      ['Sobremesa', 'Doces tradicionais'], ['Bebidas', bev]] },
    { id: 'piz', img: 'img/atendimento.jpg', pitch: 'Rodízio descontraído, com sabores salgados e doces.', s: [
      ['Entradinhas', 'Bruschetta italiana, torradinhas com antepastos'],
      ['Pizzas', 'Muçarela, calabresa, frango com catupiry, camarão com catupiry, portuguesa, pepperoni, marguerita, três queijos; doces: brigadeiro, banana cartola, Romeu e Julieta, doce de leite'],
      ['Mesa de crepe', 'Três queijos, carne seca, misto, camarão, frango, chocolate, Romeu e Julieta, banana cartola, sorvete'],
      ['Bebidas', bevKids]] },
    { id: 'cof', img: 'img/mesa.jpg', pitch: 'Escolha 12 opções. Mesa montada com toalha, arranjo floral e garçom de apoio.', s: [
      ['Frios', 'Pastas, geleias, salada de frutas, mini sanduíche natural'],
      ['Panificação', 'Pãozinho de queijo, briochinho de salpicão, mini pizza, mini hot dog, croissant, torrada, grissini, crosta de parmesão, pão de metro'],
      ['Bolos', 'Bolo de rolo, banana, macaxeira, mesclado, formigueiro, laranja, cenoura, chocolate'],
      ['Salgadinhos', 'Coxinha, empadinha, pastel de festa, pastelzinho de forno, mini quiche, maravilha de chester, canutilho'],
      ['Docinhos', docTrad], ['Bebidas', bev]] }
  ];

  var filters = [{ id: 'todos', label: 'Todos' }, { id: 'infantil', label: 'Infantil' }, { id: 'social', label: 'Social e casamento' }, { id: 'tematico', label: 'Churrasco, feijoada e pizza' }, { id: 'corporativo', label: 'Corporativo' }];
  var h = location.hash.replace('#', '');
  var f = filters.some(function (x) { return x.id === h; }) ? h : 'todos';

  function card(d) {
    var p = price[d.id];
    return '<article class="card rv" style="background:' + catBg[p.cat] + ';border:2px solid #10302C;border-radius:28px;overflow:hidden;display:flex;flex-direction:column">' +
      '<div style="height:220px;overflow:hidden;border-bottom:2px solid #10302C;position:relative"><img src="' + d.img + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block">' +
      '<span style="position:absolute;left:14px;top:14px;background:#FFFAF3;border:2px solid #10302C;border-radius:999px;padding:6px 12px;font-size:13px;font-weight:700">' + catLabel[p.cat] + '</span></div>' +
      '<div style="padding:26px;display:flex;flex-direction:column;gap:16px;flex-grow:1" class="m-cardpad">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px"><h2 style="margin:0;font-family:Gloock,serif;font-weight:400;font-size:36px;line-height:1">' + p.nome + '</h2>' +
      '<div style="text-align:right;flex-shrink:0"><div style="font-family:Gloock,serif;font-size:32px;line-height:1;color:#C4501C">' + brl(p.a) + '</div><div style="font-size:13px;font-weight:600;margin-top:4px">por adulto</div></div></div>' +
      '<p style="margin:0;font-size:16px;line-height:1.5;color:#2D4A45">' + d.pitch + '</p>' +
      '<dl style="margin:0;display:flex;flex-direction:column;gap:12px;flex-grow:1">' + d.s.map(function (x) {
        return '<div style="display:flex;flex-direction:column;gap:3px;padding-top:12px;border-top:1px dashed #10302C55"><dt style="font-size:15px;font-weight:700">' + x[0] + '</dt><dd style="margin:0;font-size:15px;line-height:1.5;color:#2D4A45">' + x[1] + '</dd></div>';
      }).join('') + '</dl>' +
      '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding-top:16px;border-top:2px solid #10302C">' +
      '<span style="font-size:14px;font-weight:600">' + (p.k === null ? 'Valor por adulto' : 'Crianças de 4 a 10 anos: ' + brl(p.k)) + '</span>' +
      '<a class="btn" href="index.html?pacote=' + p.id + '#orcamento" style="background:#10302C;color:#FFFAF3;text-decoration:none;font-weight:700;font-size:15px;padding:12px 18px;border:2px solid #10302C;border-radius:14px;min-height:46px;display:inline-flex;align-items:center">Quero este</a>' +
      '</div></div></article>';
  }

  function render() {
    document.getElementById('filters').innerHTML = filters.map(function (x) {
      return '<button type="button" class="chip" data-f="' + x.id + '" aria-pressed="' + (x.id === f) + '">' + x.label + '</button>';
    }).join('');
    document.getElementById('pacotes').innerHTML = pkgs.filter(function (d) { return f === 'todos' || price[d.id].cat === f; }).map(card).join('');
  }
  document.getElementById('filters').addEventListener('click', function (e) {
    var b = e.target.closest('[data-f]'); if (!b) return;
    f = b.dataset.f; history.replaceState(null, '', f === 'todos' ? location.pathname : '#' + f); render();
  });
  render();
})();
