/* Sarkar Getaways — public package catalogue and detail modal */
(() => {
  'use strict';
  const track = document.getElementById('pkg-track');
  if (!track) return;
  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const money = v => '₹' + (Number(v) || 0).toLocaleString('en-IN');
  const asArray = v => Array.isArray(v) ? v : [];
  const packageFallback = [
    {title:'Darjeeling Hills & Tea Estates', destination:'Darjeeling, West Bengal', duration:'3 Days / 2 Nights', sellingPrice:7499, coverImage:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80', description:'Tea gardens, Himalayan viewpoints and a relaxed hill-station escape.', itinerary:[{day:1,title:'Arrival & Scenic Hill Transfer',detail:'Pickup from NJP/Bagdogra, scenic hill transfer and evening leisure on Mall Road.'},{day:2,title:'Tiger Hill Sunrise & Sightseeing',detail:'Weather-permitting sunrise, breakfast and local sightseeing.'},{day:3,title:'Tea Gardens & Return Transfer',detail:'Tea garden visit, shopping and return transfer.'}]},
    {title:'Gangtok & En-Route Sightseeing', destination:'Gangtok, Sikkim', duration:'4 Days / 3 Nights', sellingPrice:10999, coverImage:'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80', description:'Mountain views, monasteries and planned excursions subject to permits.', itinerary:[{day:1,title:'NJP Pickup & Drive to Gangtok',detail:'Transfer via Teesta viewpoints and hotel check-in.'},{day:2,title:'Tsomgo Lake & Baba Mandir',detail:'Excursion subject to weather and permit availability.'},{day:3,title:'Gangtok Sightseeing',detail:'Explore local viewpoints and cultural attractions.'},{day:4,title:'Departure',detail:'Breakfast and return transfer.'}]},
    {title:'Mandarmani Beach Escape', destination:'Mandarmani, West Bengal', duration:'2 Days / 1 Night', sellingPrice:4999, coverImage:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80', description:'A relaxed coastal break with stay and transfer options.', itinerary:[{day:1,title:'Arrival & Beach Time',detail:'Transfer, check-in and enjoy the coast.'},{day:2,title:'Leisure & Return',detail:'Breakfast, free time and return journey.'}]},
    {title:'Puri Sea Retreat', destination:'Puri, Odisha', duration:'3 Days / 2 Nights', sellingPrice:6999, coverImage:'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80', description:'Coastal relaxation with optional temple and heritage visits.', itinerary:[{day:1,title:'Arrival in Puri',detail:'Check-in and beach visit.'},{day:2,title:'Puri & Konark Excursion',detail:'Sightseeing subject to local timings and availability.'},{day:3,title:'Departure',detail:'Breakfast and return transfer.'}]},
    {title:'Sundarbans Wildlife Escape', destination:'Sundarbans, West Bengal', duration:'2 Days / 1 Night', sellingPrice:5999, coverImage:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80', description:'Mangrove landscapes and guided boat excursions subject to permits.', itinerary:[{day:1,title:'Arrival & Boat Excursion',detail:'Transfer, check-in and scheduled boat experience.'},{day:2,title:'Morning Safari & Return',detail:'Morning activity and return transfer.'}]},
    {title:'Kerala Backwater Journey', destination:'Kerala, India', duration:'4 Days / 3 Nights', sellingPrice:14999, coverImage:'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80', description:'Backwaters, tropical scenery and regional food experiences.', itinerary:[{day:1,title:'Arrival & Transfer',detail:'Arrival and transfer to the selected stay.'},{day:2,title:'Backwater Experience',detail:'Explore the backwaters subject to availability.'},{day:3,title:'Local Exploration',detail:'Leisure and local sightseeing.'},{day:4,title:'Departure',detail:'Return transfer.'}]}
  ];
  let packages = packageFallback;
  const modalId = 'sg-public-package-modal';
  track.addEventListener('click', e => {
    const detailButton = e.target.closest('[data-detail]');
    const bookButton = e.target.closest('[data-book]');
    if (detailButton && track.contains(detailButton)) {
      e.preventDefault();
      window.openPublicPackageDetails(detailButton.dataset.detail);
    } else if (bookButton && track.contains(bookButton)) {
      e.preventDefault();
      if (typeof window.selectPackage === 'function') window.selectPackage(bookButton.dataset.book);
    }
  });
  const ensureModal = () => {
    let modal = document.getElementById(modalId);
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'sg-package-modal';
    modal.innerHTML = '<div class="sg-package-backdrop" data-close="1"></div><section class="sg-package-dialog" role="dialog" aria-modal="true" aria-labelledby="sg-package-title"><button class="sg-package-close" type="button" aria-label="Close package details" data-close="1"><i class="fa-solid fa-xmark"></i></button><div id="sg-package-modal-content"></div></section>';
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target.dataset.close) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    return modal;
  };
  function openModal(pkg) {
    const modal = ensureModal();
    const itinerary = asArray(pkg.itinerary);
    const highlights = asArray(pkg.highlights);
    const includes = asArray(pkg.includes);
    document.getElementById('sg-package-modal-content').innerHTML = `
      <div class="sg-package-hero"><img src="${esc(pkg.coverImage || pkg.image || '')}" alt="${esc(pkg.title)}"><div class="sg-package-hero-shade"></div><div class="sg-package-hero-copy"><span>${esc(pkg.destination || 'Curated getaway')}</span><h2 id="sg-package-title">${esc(pkg.title || 'Holiday package')}</h2><p>${esc(pkg.duration || ((pkg.days || '') + ' days'))}</p></div></div>
      <div class="sg-package-modal-body">
        <div class="sg-package-facts"><div><small>Destination</small><strong>${esc(pkg.destination || 'To be confirmed')}</strong></div><div><small>Duration</small><strong>${esc(pkg.duration || 'Custom duration')}</strong></div><div><small>Stay</small><strong>${esc(pkg.hotelStar || 'Options confirmed on request')}</strong></div><div><small>Transport</small><strong>${esc(pkg.vehicle || 'As per final itinerary')}</strong></div></div>
        <div class="sg-package-section"><h3><i class="fa-solid fa-calendar-days"></i> Day-by-day itinerary</h3>
          ${itinerary.length ? itinerary.map((day,i)=>`<article class="sg-itinerary-day"><span class="sg-day-chip">DAY ${esc(day.day || i+1)}</span><div><h4>${esc(day.title || 'Tour activity')}</h4><p>${esc(day.detail || day.description || '')}</p></div></article>`).join('') : '<p class="sg-muted">A customised day-by-day itinerary will be shared with your quote.</p>'}
        </div>
        ${highlights.length ? `<div class="sg-package-section"><h3><i class="fa-solid fa-star"></i> Highlights</h3><ul class="sg-package-list">${highlights.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
        ${includes.length ? `<div class="sg-package-section"><h3><i class="fa-solid fa-circle-check"></i> Package inclusions</h3><ul class="sg-package-list">${includes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
        <div class="sg-price-note"><i class="fa-solid fa-circle-info"></i><div><strong>Indicative price · T&amp;C apply</strong><p>The displayed price is a planning guide, not a final offer. Final pricing depends on travel dates, availability, group size, selected hotel, transport and personal preferences. We will confirm the written quote before booking.</p></div></div>
        <div class="sg-package-actions"><div><small>Indicative starting price</small><strong>${money(pkg.sellingPrice)} <em>/ person*</em></strong></div><button type="button" class="sg-package-book" data-book="${esc(pkg.title)}">Request a quote <i class="fa-solid fa-arrow-right"></i></button></div>
      </div>`;
    modal.classList.add('is-open');
    document.body.classList.add('sg-modal-open');
    modal.querySelector('[data-book]').addEventListener('click', e => {
      closeModal();
      if (typeof window.selectPackage === 'function') window.selectPackage(e.currentTarget.dataset.book);
    });
  }
  function closeModal() {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('is-open');
    document.body.classList.remove('sg-modal-open');
  }
  window.openPublicPackageDetails = name => {
    const pkg = packages.find(p => p.id === name || p.title === name) || packageFallback.find(p => p.title === name);
    if (pkg) openModal(pkg);
  };
  function renderCards(list) {
    if (!list.length) return;
    packages = list;
    track.querySelectorAll('[aria-hidden="true"]').forEach(el => el.remove());
    track.dataset.loopReady = 'false';
    track.innerHTML = list.map((pkg, i) => `
      <article class="pkg-card sg-public-package-card glass-tile rounded-3xl overflow-hidden group" onmouseenter="setPkgBg(${i % 6})">
        <button type="button" class="sg-package-card-open" data-detail="${esc(pkg.id || pkg.title)}" aria-label="View details for ${esc(pkg.title)}">
          <div class="sg-package-card-image"><img src="${esc(pkg.coverImage || '')}" alt="${esc(pkg.title)}" loading="lazy"><span class="sg-duration">${esc(pkg.duration || 'Custom trip')}</span><span class="sg-view-pill"><i class="fa-solid fa-circle-info"></i> View itinerary</span></div>
          <div class="sg-package-card-copy"><div class="sg-package-eyebrow"><span><i class="fa-solid fa-location-dot"></i> ${esc(pkg.destination || 'India')}</span><span><i class="fa-solid fa-sparkles"></i> Curated trip</span></div><h3>${esc(pkg.title || 'Holiday package')}</h3><p>${esc(pkg.description || asArray(pkg.highlights).slice(0,2).join(' · ') || 'A flexible holiday plan tailored to your travel preferences.')}</p></div>
        </button>
        <div class="sg-package-card-footer"><div><small>Indicative from</small><strong>${money(pkg.sellingPrice)} <em>/ person*</em></strong><span class="sg-terms-label">T&amp;C apply · Final quote may vary</span></div><button type="button" class="sg-book-button" data-book="${esc(pkg.title)}">Request quote</button></div>
      </article>`).join('');
    // Rebuild carousel clones after replacing the static starter tiles.
    if (typeof window.refreshPkgCarousel === 'function') window.refreshPkgCarousel();
  }
  // Client preview is fully static: no company database or private API is contacted.
  const originalCards = Array.from(track.querySelectorAll('.pkg-card'));
  originalCards.forEach((card, i) => {
    if (card.querySelector('.sg-package-card-open')) return;
    const title = card.querySelector('h3')?.textContent?.trim();
    const pkg = packageFallback.find(p => p.title === title) || packageFallback[i % packageFallback.length];
    const footer = card.querySelector('.border-t');
    if (!footer) return;
    const detail = document.createElement('button');
    detail.className = 'sg-view-fallback';
    detail.type = 'button';
    detail.textContent = 'View itinerary';
    detail.addEventListener('click', () => openModal(pkg));
    footer.prepend(detail);
  });
})();
