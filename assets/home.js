(function () {
  var C = window.MIMOS;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var brl = function (n) { return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 }); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var $ = function (id) { return document.getElementById(id); };

  /* Faixas em movimento */
  var mA = ['Coxinha', 'Camarão especial', 'Brigadeiro belga', 'Mini quiche', 'Casquinha de siri', 'Bombom de pistache', 'Coalhinho maçaricado', 'Bolo de rolo'];
  var mB = ['aniversário', 'casamento', 'formatura', 'chá de bebê', 'corporativo', 'batizado', 'confraternização'];
  var star = '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24"><path d="M12 2l2.6 6.9L22 12l-7.4 3.1L12 22l-2.6-6.9L2 12l7.4-3.1z" fill="#FFFAF3" stroke="#10302C" stroke-width="1.5"/></svg>';
  $('ribbonA').innerHTML = mA.concat(mA).map(function (t) { return '<span style="font-family:Gloock,serif;font-size:34px;line-height:1;color:#10302C;white-space:nowrap;padding:0 22px;display:inline-flex;align-items:center;gap:44px">' + t + star + '</span>'; }).join('');
  $('ribbonB').innerHTML = mB.concat(mB).map(function (t) { return '<span style="font-family:Gloock,serif;font-size:30px;line-height:1;color:#FFD36E;white-space:nowrap;padding:0 30px">' + t + '</span>'; }).join('');

  /* Vitrine da doceria (loop) */
  var sw = C.doceria.map(function (s) {
    return '<article class="card" style="flex:0 0 270px;margin-right:20px;background:#FFFAF3;border:2px solid #10302C;border-radius:24px;overflow:hidden;display:flex;flex-direction:column">' +
      '<div style="height:200px;overflow:hidden;border-bottom:2px solid #10302C"><img src="' + esc(s.img) + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
      '<div style="padding:18px 20px 20px;display:flex;flex-direction:column;gap:6px;flex-grow:1">' +
      '<h3 style="margin:0;font-family:Gloock,serif;font-weight:400;font-size:24px;line-height:1.1">' + esc(s.nome) + '</h3>' +
      '<span style="font-size:14px;color:#2D4A45">' + esc(s.detalhe) + '</span>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:12px">' +
      '<span style="font-family:Gloock,serif;font-size:24px;color:#C4501C">' + esc(s.preco) + '</span>' +
      '<a href="#" data-encomenda="' + esc(s.nome) + '" style="font-weight:700;font-size:14px;color:#10302C;min-height:44px;display:inline-flex;align-items:center">Encomendar</a>' +
      '</div></div></article>';
  }).join('');
  $('sweets').innerHTML = sw + sw.replace(/<article /g, '<article aria-hidden="true" ');

  /* Hero: palavra rotativa e slider */
  var words = ['aniversários', 'casamentos', 'chás de bebê', 'eventos corporativos'];
  var slides = document.querySelectorAll('.slide');
  var i = 0;
  if (!reduce) setInterval(function () {
    i = (i + 1) % 4;
    var w = $('word'); w.style.opacity = 0;
    setTimeout(function () { w.textContent = words[i]; w.style.opacity = 1; }, 300);
    slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
  }, 3600);

  /* Depoimentos */
  var q = 0;
  function renderQuote() {
    var d = C.depoimentos[q];
    $('quote').textContent = '“' + d.texto + '”';
    $('quoteWho').textContent = d.quem;
    $('quoteDots').innerHTML = C.depoimentos.map(function (_, k) {
      return '<button type="button" aria-label="Depoimento ' + (k + 1) + '" data-q="' + k + '" style="width:44px;height:44px;border:0;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"><span class="qdot' + (k === q ? ' on' : '') + '"></span></button>';
    }).join('');
  }
  renderQuote();
  $('quoteDots').addEventListener('click', function (e) { var b = e.target.closest('[data-q]'); if (b) { q = +b.dataset.q; renderQuote(); } });
  if (!reduce) setInterval(function () { q = (q + 1) % C.depoimentos.length; renderQuote(); }, 6000);

  /* Calculadora */
  var cats = [
    { id: 'infantil', label: 'Aniversário infantil' }, { id: 'social', label: 'Social e casamento' },
    { id: 'tematico', label: 'Churrasco, feijoada e pizza' }, { id: 'corporativo', label: 'Coffee break corporativo' }
  ];
  var st = { cat: 'infantil', pkg: 'inf1', adults: 50, kids: 15 };
  var sel = function () { return C.pacotes.filter(function (p) { return p.id === st.pkg; })[0]; };
  function render() {
    $('catChips').innerHTML = cats.map(function (c) {
      return '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="' + (c.id === st.cat) + '">' + c.label + '</button>';
    }).join('');
    $('pkgChips').innerHTML = C.pacotes.filter(function (p) { return p.cat === st.cat; }).map(function (p) {
      return '<button type="button" class="pkg" data-pkg="' + p.id + '" aria-pressed="' + (p.id === st.pkg) + '"><span style="display:block;font-family:Gloock,serif;font-size:24px;line-height:1.1">' + p.nome + '</span><span style="display:block;font-size:14px;font-weight:600;margin-top:6px">' + brl(p.a) + ' por adulto</span></button>';
    }).join('');
    var p = sel(), hasK = p.k !== null, kids = hasK ? st.kids : 0;
    $('adults').textContent = st.adults;
    $('kids').textContent = st.kids;
    $('kidsRow').style.display = hasK ? 'flex' : 'none';
    if (hasK) $('kidPrice').textContent = brl(p.k);
    var total = st.adults * p.a + kids * (p.k || 0);
    $('total').textContent = brl(total);
    $('summary').textContent = p.nome + ' · ' + st.adults + ' adultos × ' + brl(p.a) + (hasK && kids > 0 ? ' + ' + kids + ' crianças × ' + brl(p.k) : '');
    st.total = total;
  }
  $('catChips').addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]'); if (!b) return;
    st.cat = b.dataset.cat; st.pkg = C.pacotes.filter(function (p) { return p.cat === st.cat; })[0].id; render();
  });
  $('pkgChips').addEventListener('click', function (e) { var b = e.target.closest('[data-pkg]'); if (b) { st.pkg = b.dataset.pkg; render(); } });
  document.querySelectorAll('[data-step]').forEach(function (b) {
    b.addEventListener('click', function () {
      var parts = b.dataset.step.split(':'), key = parts[0], d = +parts[1];
      st[key] = key === 'adults' ? Math.max(35, st.adults + d) : Math.max(0, st.kids + d); render();
    });
  });
  render();

  /* Pacote vindo do cardápio (?pacote=soc2) */
  var pre = new URLSearchParams(location.search).get('pacote');
  var preP = C.pacotes.filter(function (p) { return p.id === pre; })[0];
  if (preP) { st.cat = preP.cat; st.pkg = preP.id; render(); }

  /* WhatsApp */
  function wa(msg) {
    if (!C.whatsapp) return null;
    return 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(msg);
  }
  if (C.whatsapp) { $('footWhats').href = wa('Olá, Mimo\'s! Vim pelo site.'); $('footWhats').target = '_blank'; }

  $('leadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, hint = $('formHint');
    if (!f.nome.value.trim() || !f.whats.value.trim()) { hint.textContent = 'Preencha seu nome e WhatsApp para receber o orçamento.'; (f.nome.value.trim() ? f.whats : f.nome).focus(); return; }
    var p = sel(), kids = p.k !== null ? st.kids : 0;
    var data = f.data.value ? f.data.value.split('-').reverse().join('/') : 'a definir';
    var msg = 'Olá, Mimo\'s! Quero um orçamento:\n\n' +
      '• Nome: ' + f.nome.value.trim() + '\n' +
      '• WhatsApp: ' + f.whats.value.trim() + '\n' +
      '• Cardápio: ' + p.nome + '\n' +
      '• Convidados: ' + st.adults + ' adultos' + (kids ? ' + ' + kids + ' crianças (4 a 10 anos)' : '') + '\n' +
      '• Data: ' + data + '\n' +
      '• Bairro: ' + (f.bairro.value.trim() || 'a informar') + '\n' +
      '• Estimativa do site: ' + brl(st.total);
    var url = wa(msg);
    if (!url) { hint.textContent = 'Número de WhatsApp ainda não configurado (assets/config.js).'; return; }
    hint.textContent = '';
    if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { value: st.total, currency: 'BRL' });
    if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { value: st.total, currency: 'BRL' });
    window.open(url, '_blank', 'noopener');
  });

  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-encomenda]'); if (!a) return;
    e.preventDefault();
    var url = wa('Olá, Mimo\'s! Quero encomendar: ' + a.dataset.encomenda);
    if (url) window.open(url, '_blank', 'noopener'); else location.hash = 'orcamento';
  });
})();
