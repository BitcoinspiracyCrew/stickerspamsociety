/* Sticker Spam Society - negozio (carrello, IT/EN, filtri, animazioni) */
(function () {
  'use strict';
  var C = window.CATALOG, CFG = window.SITE_CONFIG || {};
  var LANG_KEY = 'ssc_lang', CART_KEY = 'ssc_cart_v1', SHIP_KEY = 'ssc_ship';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // ---------- testi ----------
  var T = {
    it: {
      announce: 'Spedizione gratis da 50€ · Ordine minimo 5€',
      nav_shop: 'Shop', nav_ship: 'Spedizioni', nav_custom: 'Su misura', nav_about: 'Chi siamo', nav_contact: 'Contatti',
      cart: 'Carrello', hero_sub: 'Non solo stickers.', cta_box: 'Prendi il box da 400', cta_shop: 'Vai agli stickers',
      ship_title: 'Spedizioni',
      ship_1: 'Italia ed Europa: pacchi con InPost al locker (5€) o BRT Express (7,50€).',
      ship_2: 'Lettera (3€): in tutto il mondo, senza tracking, senza rispedizione e senza rimborso.',
      ship_3: 'Spedizione gratis sui pacchi da 50€.', ship_4: 'Ordine minimo 5€.',
      ship_5: 'Prepariamo l’ordine in 1-2 giorni e lo consegniamo al corriere entro 1 giorno.',
      ship_6: 'Corrieri: Poste per le lettere, BRT e SDA per i pacchi.',
      ship_7: 'La lettera va bene solo per stickers, tubini, schede, santini e portaclipper (fino a 50 stickers o 2 oggetti).',
      ship_8: 'Ritiro a mano: alle feste tekno.',
      custom_title: 'Ordini personalizzati', custom_h: 'Hai un logo?',
      custom_p: 'Facciamo ordini personalizzati con i loghi dei clienti. Scrivici e ne parliamo.', custom_cta: 'Scrivici',
      whole_h: 'Bancarelle e rivenditori', whole_p: 'Hai una bancarella o vuoi rivendere i nostri prodotti? Contattaci.', whole_cta: 'Contattaci',
      about_title: 'Chi siamo', about_1: 'Sticker Spam Society dal 2016 in giro per le vostre strade.',
      about_2: 'Una parte degli incassi la teniamo da parte per donare cibo e medicinali ai volontari ENPA.',
      contact_title: 'Contatti', contact_online: 'Solo online. Ci trovi alle feste tekno.', terms: 'Termini',
      search: 'Cerca uno sticker…', all: 'Tutti', add: 'Aggiungi', added: 'Aggiunto al carrello', of: 'su',
      empty: 'Il carrello è vuoto.', nothing: 'Nessun risultato.', remove: 'rimuovi',
      subtotal: 'Subtotale', shipping: 'Spedizione', total: 'Totale', free: 'Gratis',
      ship_h: 'Come vuoi riceverlo?',
      m_inpost: 'InPost locker', m_brt: 'BRT Express', m_letter: 'Lettera',
      m_letter_s: 'No tracking, no reship, no refund.',
      m_letter_off: 'Non disponibile per questo carrello (solo stickers, tubini, schede, santini, portaclipper: max 50 stickers o 2 oggetti).',
      left: 'Ti mancano {x} per la spedizione gratis sui pacchi.', gotfree: 'Spedizione gratis sui pacchi!',
      min: 'Ordine minimo {x}.',
      agree: 'Ho letto i <a href="termini.html" target="_blank">termini</a> e accetto le condizioni di spedizione (la lettera non è tracciata e non si rimborsa).',
      pay: 'Vai al pagamento', wait: 'Un attimo…',
      e_terms: 'Devi accettare i termini.', e_unset: 'Il pagamento non è ancora collegato. Torna presto!', e_fail: 'Qualcosa è andato storto. Riprova o scrivici.',
      tag_uv: 'UV', tag_nuovo: 'Nuovo', tag_acab: 'ACAB'
    },
    en: {
      announce: 'Free shipping from €50 · Minimum order €5',
      nav_shop: 'Shop', nav_ship: 'Shipping', nav_custom: 'Custom', nav_about: 'About', nav_contact: 'Contact',
      cart: 'Cart', hero_sub: 'Not just stickers.', cta_box: 'Get the 400 box', cta_shop: 'Go to stickers',
      ship_title: 'Shipping',
      ship_1: 'Italy and Europe: parcels with InPost locker (€5) or BRT Express (€7.50).',
      ship_2: 'Letter (€3): worldwide, no tracking, no reship and no refund.',
      ship_3: 'Free shipping on parcels from €50.', ship_4: 'Minimum order €5.',
      ship_5: 'We prepare your order in 1-2 days and hand it to the courier within 1 day.',
      ship_6: 'Couriers: Poste for letters, BRT and SDA for parcels.',
      ship_7: 'Letters are only for stickers, tubes, cards, holy cards and lighter holders (up to 50 stickers or 2 items).',
      ship_8: 'Hand pickup: at tekno parties.',
      custom_title: 'Custom orders', custom_h: 'Got a logo?',
      custom_p: 'We make custom orders with your logo. Write to us and let’s talk.', custom_cta: 'Write to us',
      whole_h: 'Stalls and resellers', whole_p: 'Run a stall or want to resell our stuff? Get in touch.', whole_cta: 'Get in touch',
      about_title: 'About', about_1: 'Sticker Spam Society, on your streets since 2016.',
      about_2: 'We always set aside part of our earnings to donate food and medicine to ENPA volunteers.',
      contact_title: 'Contact', contact_online: 'Online only. Find us at tekno parties.', terms: 'Terms',
      search: 'Search a sticker…', all: 'All', add: 'Add', added: 'Added to cart', of: 'of',
      empty: 'Your cart is empty.', nothing: 'No results.', remove: 'remove',
      subtotal: 'Subtotal', shipping: 'Shipping', total: 'Total', free: 'Free',
      ship_h: 'How do you want it?',
      m_inpost: 'InPost locker', m_brt: 'BRT Express', m_letter: 'Letter',
      m_letter_s: 'No tracking, no reship, no refund.',
      m_letter_off: 'Not available for this cart (only stickers, tubes, cards, holy cards, lighter holders: max 50 stickers or 2 items).',
      left: 'Add {x} more for free parcel shipping.', gotfree: 'Free parcel shipping!',
      min: 'Minimum order {x}.',
      agree: 'I read the <a href="termini.html" target="_blank">terms</a> and accept the shipping conditions (letters are untracked and non-refundable).',
      pay: 'Go to checkout', wait: 'One sec…',
      e_terms: 'You must accept the terms.', e_unset: 'Payment is not connected yet. Come back soon!', e_fail: 'Something went wrong. Try again or write to us.',
      tag_uv: 'UV', tag_nuovo: 'New', tag_acab: 'ACAB'
    }
  };

  // ---------- stato ----------
  var lang = 'it', cart = [], shipMethod = 'inpost', agreed = false;
  function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  try { var l0 = localStorage.getItem(LANG_KEY); if (l0 === 'en' || l0 === 'it') lang = l0; else if ((navigator.language || '').slice(0, 2) !== 'it') lang = 'en'; } catch (e) {}
  cart = load(CART_KEY, []); shipMethod = load(SHIP_KEY, 'inpost');

  var byId = {}; C.products.forEach(function (p) { byId[p.id] = p; });
  cart = cart.filter(function (l) { var p = byId[l.id]; return p && p.options[l.o] && (l.v < 0 || (p.variants && p.variants[l.v])); });

  function t(k, vars) { var s = (T[lang] && T[lang][k]) || T.it[k] || k; if (vars) for (var x in vars) s = s.replace('{' + x + '}', vars[x]); return s; }
  function money(n) { try { return new Intl.NumberFormat(lang === 'en' ? 'en-IE' : 'it-IT', { style: 'currency', currency: C.config.currency }).format(n); } catch (e) { return n.toFixed(2) + ' €'; } }
  function slug(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pname(p) { return p.name; }
  function vlabel(p, i) { return i >= 0 && p.variants ? p.variants[i][lang] || p.variants[i].it : ''; }
  function olabel(p, i) { return p.options[i].l[lang === 'en' ? 1 : 0]; }
  function pdesc(p) { return p.desc ? p.desc[lang === 'en' ? 1 : 0] : ''; }
  function cname(c) { return c[lang][0]; }

  // ---------- immagini con fallback ----------
  function sources(p, vi) {
    var s = [], base = 'img/prodotti/';
    if (vi >= 0 && p.variants) { var vs = slug(p.variants[vi].it); s.push(base + p.id + '-' + vs + '.png', base + p.id + '-' + vs + '.jpg'); }
    s.push(base + p.id + '.png', base + p.id + '.jpg');
    return s;
  }
  function setImg(img, ph, list) {
    var i = 0;
    ph.classList.remove('nofoto');
    img.onerror = function () { i++; if (i < list.length) img.src = list[i]; else ph.classList.add('nofoto'); };
    img.src = list[0];
  }

  // ---------- i18n statico ----------
  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
    var title = $('#heroTitle');
    var txt = lang === 'en' ? 'The sticker shop you were looking for' : 'Il negozio di stickers che cercavi';
    title.setAttribute('data-text', txt);
    title.innerHTML = lang === 'en' ? 'The <em>sticker</em> shop you were looking for' : 'Il negozio di <em>stickers</em> che cercavi';
    var names = C.categories.map(cname).join(' · ') + ' · ';
    $('#marquee').textContent = names + names + names + names;
    var m = $('#mailCustom'); if (m) m.setAttribute('href', 'mailto:stickerspamsociety@gmail.com?subject=' + encodeURIComponent(lang === 'en' ? 'Custom order' : 'Ordine personalizzato'));
  }

  // ---------- shop ----------
  var shop = $('#shop'), catbar = $('#catbar');
  var filters = {};  // per categoria: {q, tag, sub}

  function badgeFor(p) {
    if (p.tags.indexOf('uv') > -1) return '<span class="badge uv">UV</span>';
    if (p.tags.indexOf('nuovo') > -1) return '<span class="badge">' + esc(t('tag_nuovo')) + '</span>';
    return '';
  }

  function makeCard(p) {
    var card = document.createElement('article');
    card.className = 'card rv'; card.setAttribute('data-id', p.id);
    var vi = p.variants ? 0 : -1, oi = 0;
    var opts = '';
    if (p.options.length > 1) {
      opts = '<select class="sel-o" aria-label="Opzione">' + p.options.map(function (o, i) { return '<option value="' + i + '">' + esc(olabel(p, i)) + ' – ' + money(o.price) + '</option>'; }).join('') + '</select>';
    }
    var vars = '';
    if (p.variants) vars = '<select class="sel-v" aria-label="Variante">' + p.variants.map(function (v, i) { return '<option value="' + i + '">' + esc(v[lang] || v.it) + '</option>'; }).join('') + '</select>';
    card.innerHTML =
      '<div class="ph">' + badgeFor(p) + '<img alt="" loading="lazy"><div class="fallback">' + esc(pname(p)) + '</div></div>' +
      '<div class="body"><h3>' + esc(pname(p)) + '</h3>' + (pdesc(p) ? '<p class="d">' + esc(pdesc(p)) + '</p>' : '') + vars + opts +
      '<div class="buy"><span class="price"></span><button type="button" class="add">' + esc(t('add')) + '</button></div></div>';
    var img = $('img', card), ph = $('.ph', card), price = $('.price', card);
    function upd() { price.textContent = money(p.options[oi].price); }
    upd(); setImg(img, ph, sources(p, vi));
    var sv = $('.sel-v', card), so = $('.sel-o', card);
    if (sv) sv.addEventListener('change', function () { vi = +sv.value; setImg(img, ph, sources(p, vi)); });
    if (so) so.addEventListener('change', function () { oi = +so.value; upd(); });
    var btn = $('.add', card);
    btn.addEventListener('click', function () {
      addToCart(p.id, vi, oi, 1);
      btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
    });
    return card;
  }

  function matches(p, f) {
    if (f.sub && p.sub !== f.sub) return false;
    if (f.tag && p.tags.indexOf(f.tag) < 0) return false;
    if (f.q && norm(p.name + ' ' + (p.variants ? p.variants.map(function (v) { return v.it; }).join(' ') : '')).indexOf(norm(f.q)) < 0) return false;
    return true;
  }

  function renderCategory(c) {
    var f = filters[c.id] = filters[c.id] || {};
    var sec = $('#' + c.id, shop);
    if (!sec) {
      sec = document.createElement('section'); sec.className = 'cat'; sec.id = c.id; shop.appendChild(sec);
    }
    var all = C.products.filter(function (p) { return p.cat === c.id; });
    var tagsHere = []; all.forEach(function (p) { p.tags.forEach(function (x) { if (tagsHere.indexOf(x) < 0) tagsHere.push(x); }); });
    var chips = '';
    if (c.subs) chips = '<button type="button" class="chip" data-sub="" aria-pressed="' + (!f.sub) + '">' + esc(t('all')) + '</button>' + c.subs.map(function (s) { return '<button type="button" class="chip" data-sub="' + s.id + '" aria-pressed="' + (f.sub === s.id) + '">' + esc(s[lang]) + '</button>'; }).join('');
    if (c.id === 'stickers') chips = '<button type="button" class="chip" data-tag="" aria-pressed="' + (!f.tag) + '">' + esc(t('all')) + '</button>' + tagsHere.map(function (x) { return '<button type="button" class="chip" data-tag="' + x + '" aria-pressed="' + (f.tag === x) + '">' + esc(t('tag_' + x)) + '</button>'; }).join('');
    var tools = '';
    if (c.id === 'stickers') tools = '<input class="search" type="search" placeholder="' + esc(t('search')) + '" value="' + esc(f.q || '') + '" aria-label="' + esc(t('search')) + '">';
    var list = all.filter(function (p) { return matches(p, f); });
    sec.innerHTML = '<div class="cat-head rv rv-out" style="--bg-img:url(img/sfondi/' + c.id + '.jpg)"><h2>' + esc(cname(c)) + '</h2><p>' + esc(c[lang][1]) + '</p></div>' +
      ((chips || tools) ? '<div class="tools-row">' + tools + chips + (c.id === 'stickers' ? '<span class="count">' + list.length + ' ' + esc(t('of')) + ' ' + all.length + '</span>' : '') + '</div>' : '') +
      '<div class="body-' + c.id + '"></div>';
    var host = $('.body-' + c.id, sec);
    if (c.id === 'offerte') {
      list.forEach(function (p) {
        var vi = -1, oi = 0;
        var d = document.createElement('div'); d.className = 'feat rv';
        d.innerHTML = '<div class="ph"><img alt="" loading="lazy"><div class="fallback">' + esc(pname(p)) + '</div></div><div><h3>' + esc(pname(p)) + '</h3><p class="d" style="font-weight:400;color:var(--mute)">' + esc(pdesc(p)) + '</p><span class="price">' + money(p.options[0].price) + '</span><button type="button" class="btn add">' + esc(t('add')) + '</button></div>';
        setImg($('img', d), $('.ph', d), sources(p, vi));
        $('.add', d).addEventListener('click', function () { addToCart(p.id, vi, oi, 1); });
        host.appendChild(d);
      });
    } else {
      var g = document.createElement('div'); g.className = 'grid'; host.appendChild(g);
      if (!list.length) host.innerHTML = '<p class="empty">' + esc(t('nothing')) + '</p>';
      list.forEach(function (p) { g.appendChild(makeCard(p)); });
    }
    // eventi filtri
    $$('.chip', sec).forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.hasAttribute('data-sub')) f.sub = b.getAttribute('data-sub');
        if (b.hasAttribute('data-tag')) f.tag = b.getAttribute('data-tag');
        renderCategory(c); observe(sec);
      });
    });
    var s = $('.search', sec);
    if (s) s.addEventListener('input', function () {
      f.q = s.value; var pos = s.selectionStart;
      renderCategory(c); var ns = $('.search', sec); ns.focus(); try { ns.setSelectionRange(pos, pos); } catch (e) {} observe(sec);
    });
  }

  function renderShop() {
    C.categories.forEach(renderCategory);
    catbar.innerHTML = C.categories.map(function (c) { return '<a class="chip" href="#' + c.id + '">' + esc(cname(c)) + '</a>'; }).join('');
    observe(document);
  }

  // ---------- carrello ----------
  function lineKey(l) { return l.id + '|' + l.v + '|' + l.o; }
  function addToCart(id, v, o, q) {
    var found = cart.filter(function (l) { return l.id === id && l.v === v && l.o === o; })[0];
    if (found) found.q = Math.min(99, found.q + q); else cart.push({ id: id, v: v, o: o, q: q });
    save(CART_KEY, cart); renderCart(); toast(t('added'));
    var tab = $('#cartTab'); tab.classList.remove('bump'); void tab.offsetWidth; tab.classList.add('bump');
  }
  function subtotal() { return cart.reduce(function (s, l) { return s + byId[l.id].options[l.o].price * l.q; }, 0); }
  function count() { return cart.reduce(function (s, l) { return s + l.q; }, 0); }
  function letterOk() {
    if (!cart.length) return false;
    var L = C.config.shipping.letter, stk = 0, obj = 0;
    for (var i = 0; i < cart.length; i++) {
      var p = byId[cart[i].id], o = p.options[cart[i].o];
      if (!p.letter) return false;
      if (o.stk) stk += o.stk * cart[i].q; else obj += cart[i].q;
    }
    return stk <= L.maxStickers && obj <= L.maxObjects;
  }
  function shipCost(sub) {
    var S = C.config.shipping;
    if (shipMethod === 'letter') return S.letter.price;
    if (sub >= C.config.freeShippingFrom) return 0;
    return S[shipMethod].price;
  }

  function renderCart() {
    var n = count(), sub = subtotal();
    $('#cartCount').textContent = n; $('#tabCount').textContent = n; $('#tabTotal').textContent = money(sub);
    if (shipMethod === 'letter' && !letterOk()) { shipMethod = 'inpost'; save(SHIP_KEY, shipMethod); }
    var lines = $('#cartLines'), foot = $('#cartFoot');
    if (!cart.length) { lines.innerHTML = '<p class="empty">' + esc(t('empty')) + '</p>'; foot.innerHTML = ''; return; }
    lines.innerHTML = cart.map(function (l, i) {
      var p = byId[l.id], o = p.options[l.o];
      var sub2 = [vlabel(p, l.v), p.options.length > 1 ? olabel(p, l.o) : ''].filter(Boolean).join(' · ');
      return '<div class="line" data-i="' + i + '"><div class="th"><img alt="" src="' + sources(p, l.v)[sources(p, l.v).length - 2] + '" onerror="this.style.display=\'none\'"></div>' +
        '<div><div class="nm">' + esc(pname(p)) + '</div>' + (sub2 ? '<div class="vr">' + esc(sub2) + '</div>' : '') +
        '<div class="qty"><button type="button" data-d="-1" aria-label="-">−</button><span>' + l.q + '</span><button type="button" data-d="1" aria-label="+">+</button></div></div>' +
        '<div class="pr">' + money(o.price * l.q) + '<button type="button" class="rm" data-rm="1">' + esc(t('remove')) + '</button></div></div>';
    }).join('');
    $$('.line', lines).forEach(function (row) {
      var i = +row.getAttribute('data-i');
      $$('[data-d]', row).forEach(function (b) { b.addEventListener('click', function () { cart[i].q += +b.getAttribute('data-d'); if (cart[i].q <= 0) cart.splice(i, 1); if (cart[i] && cart[i].q > 99) cart[i].q = 99; save(CART_KEY, cart); renderCart(); }); });
      $('[data-rm]', row).addEventListener('click', function () { cart.splice(i, 1); save(CART_KEY, cart); renderCart(); });
    });
    var S = C.config.shipping, lok = letterOk(), free = C.config.freeShippingFrom, min = C.config.minOrder;
    var cost = shipCost(sub), tot = sub + cost;
    function m(id, name, price, small, off) {
      return '<label class="' + (off ? 'off' : '') + '"><input type="radio" name="ship" value="' + id + '"' + (shipMethod === id ? ' checked' : '') + (off ? ' disabled' : '') + '><span>' + esc(name) + ' – ' + money(price) + (small ? '<small>' + esc(small) + '</small>' : '') + '</span></label>';
    }
    var inpostP = sub >= free ? 0 : S.inpost.price, brtP = sub >= free ? 0 : S.brt.price;
    var bar = shipMethod !== 'letter' ? '<div class="bar"><i style="width:' + Math.min(100, sub / free * 100) + '%"></i></div><div class="hint">' + (sub >= free ? esc(t('gotfree')) : esc(t('left', { x: money(free - sub) }))) + '</div>' : '';
    foot.innerHTML =
      '<div class="hint" style="color:var(--ink)">' + esc(t('ship_h')) + '</div><div class="ship">' + m('inpost', t('m_inpost'), inpostP) + m('brt', t('m_brt'), brtP) + m('letter', t('m_letter'), S.letter.price, lok ? t('m_letter_s') : t('m_letter_off'), !lok) + '</div>' + bar +
      '<div class="sum"><span>' + esc(t('subtotal')) + '</span><span>' + money(sub) + '</span></div>' +
      '<div class="sum"><span>' + esc(t('shipping')) + '</span><span>' + (cost === 0 ? esc(t('free')) : money(cost)) + '</span></div>' +
      '<div class="sum tot"><span>' + esc(t('total')) + '</span><span>' + money(tot) + '</span></div>' +
      (sub < min ? '<div class="hint">' + esc(t('min', { x: money(min) })) + '</div>' : '') +
      '<label class="terms"><input type="checkbox" id="agree"' + (agreed ? ' checked' : '') + '><span>' + t('agree') + '</span></label>' +
      '<button type="button" class="btn" id="payBtn"' + (sub < min ? ' disabled' : '') + '>' + esc(t('pay')) + '</button><div class="err" id="err" role="alert"></div>';
    $$('input[name=ship]', foot).forEach(function (r) { r.addEventListener('change', function () { shipMethod = r.value; save(SHIP_KEY, shipMethod); renderCart(); }); });
    $('#agree').addEventListener('change', function (e) { agreed = e.target.checked; });
    $('#payBtn').addEventListener('click', checkout);
  }

  function checkout() {
    var err = $('#err'), btn = $('#payBtn'); err.textContent = '';
    if (!$('#agree').checked) { err.textContent = t('e_terms'); return; }
    if (!CFG.checkoutEndpoint) { err.textContent = t('e_unset'); return; }
    btn.disabled = true; btn.textContent = t('wait');
    fetch(CFG.checkoutEndpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart.map(function (l) { return { id: l.id, v: l.v, o: l.o, q: l.q }; }), shipping: shipMethod, lang: lang })
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok || !j.url) throw new Error(j.error || 'err'); return j; }); })
      .then(function (j) { window.location.href = j.url; })
      .catch(function (e) { err.textContent = t('e_fail') + (e && e.message && e.message !== 'err' ? ' (' + e.message + ')' : ''); btn.disabled = false; btn.textContent = t('pay'); });
  }

  // ---------- drawer / toast ----------
  function openCart() { $('#drawer').classList.add('open'); $('#veil').classList.add('open'); $('#drawer').setAttribute('aria-hidden', 'false'); }
  function closeCart() { $('#drawer').classList.remove('open'); $('#veil').classList.remove('open'); $('#drawer').setAttribute('aria-hidden', 'true'); }
  var toastT; function toast(msg) { var el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function () { el.classList.remove('show'); }, 1400); }
  $('#cartTab').addEventListener('click', openCart); $('#cartBtn').addEventListener('click', openCart);
  $('#closeCart').addEventListener('click', closeCart); $('#veil').addEventListener('click', closeCart);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCart(); });
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { lang = b.getAttribute('data-lang'); try { localStorage.setItem(LANG_KEY, lang); } catch (e) {} applyLang(); renderShop(); renderCart(); }); });

  // ---------- comparsa / scomparsa allo scroll ----------
  var io = null;
  function observe(root) {
    var els = $$('.rv', root === document ? document : root);
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    if (!io) io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var el = en.target;
        if (en.isIntersecting) { el.classList.add('in'); el.classList.remove('in-out'); }
        else if (el.classList.contains('rv-out')) el.classList.remove('in');   // titoli: svaniscono quando escono
      });
    }, { threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  }

  // ---------- scia del cursore ----------
  function trail() {
    var cv = $('#trail');
    if (!window.matchMedia || !matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) { cv.style.display = 'none'; return; }
    var ctx = cv.getContext('2d'), pts = [], W, H;
    function size() { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }
    size(); window.addEventListener('resize', size);
    var last = 0;
    window.addEventListener('pointermove', function (e) { var n = performance.now(); if (n - last < 16) return; last = n; pts.push({ x: e.clientX, y: e.clientY, a: 1 }); if (pts.length > 40) pts.shift(); });
    (function loop() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i]; p.a -= 0.035;
        if (p.a > 0) { var s = 4 + p.a * 8; ctx.fillStyle = 'rgba(182,255,0,' + (p.a * 0.55).toFixed(3) + ')'; ctx.fillRect(Math.round(p.x - s / 2), Math.round(p.y - s / 2), s, s); }
      }
      pts = pts.filter(function (p) { return p.a > 0; });
      requestAnimationFrame(loop);
    })();
  }

  // ---------- logo / foto opzionali ----------
  function optionalImages() {
    var im = new Image();
    im.onload = function () { $('#logoText').innerHTML = ''; var i = document.createElement('img'); i.src = 'img/logo.png'; i.alt = 'Sticker Spam Society'; $('#logoText').appendChild(i); };
    im.src = 'img/logo.png';
    var ab = $('#aboutImg'), a2 = new Image();
    a2.onload = function () { ab.hidden = false; }; a2.src = 'img/chi-siamo.jpg';
  }

  // ---------- avvio ----------
  applyLang(); renderShop(); renderCart(); trail(); optionalImages(); observe(document);
})();
