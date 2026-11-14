/* SarkarGateways Client Preview Edition — illustrative photos and clearly labelled sample stories.
   Images are served from Unsplash and remain subject to the Unsplash License. */
(() => {
  'use strict';
  const photos = [
    ['Darjeeling, West Bengal','Himalayan Sunrise','Tea gardens and mountain views','photo-1544735716-392fe2489ffa'],
    ['Gangtok, Sikkim','Sikkim Mountain Journey','Scenic Himalayan landscapes','photo-1626621341517-bbf3d9990a23'],
    ['Puri, Odisha','Coastal Retreat','A relaxed escape by the Bay of Bengal','photo-1596178065887-1198b6148b2b'],
    ['Kerala, India','Kerala Backwaters','Palm-lined waterways and slow travel','photo-1590050752117-238cb0fb12b1'],
    ['Varanasi, Uttar Pradesh','Heritage by the Ganges','Culture, riverfront and timeless streets','photo-1561359313-0639aad49ca6'],
    ['Indian Coastline','Beachside Getaway','Sun, sea and time to unwind','photo-1507525428034-b723cf961d3e'],
    ['India Nature Trails','Green Escapes','Nature-focused journeys and open landscapes','photo-1506744038136-46273834b3fb'],
    ['Himalayan Region','Mountain Road Journey','Beautiful routes through the hills','photo-1500530855697-b586d89ba3ee'],
    ['Rajasthan, India','Royal India Inspiration','Architecture and colourful heritage','photo-1599661046827-dacff0c0f09a'],
    ['Agra, Uttar Pradesh','Taj Mahal Inspiration','An iconic heritage destination','photo-1564507592333-c60657eea523'],
    ['Goa, India','Coastal Holiday','A laid-back beach break','photo-1512343879784-a960bf40e7f2'],
    ['Himalayan Region','Quiet Mountain Retreat','Fresh air and scenic viewpoints','photo-1464822759023-fed622ff2c3b'],
    ['Meghalaya, India','Living Root Bridge Trails','Forest paths and natural wonders','photo-1511497584788-876760111969'],
    ['Kashmir, India','Valley of Flowers','Mountain valleys and peaceful scenery','photo-1470770841072-f978cf4d019e'],
    ['Ladakh, India','High Altitude Adventure','Dramatic mountain roads and wide skies','photo-1464822759023-fed622ff2c3b'],
    ['Andaman Islands, India','Island Blue','Clear water and tropical shores','photo-1519046904884-53103b34b206'],
    ['Jaipur, Rajasthan','Pink City Heritage','Historic architecture and vibrant streets','photo-1603262110263-fb0112e7cc33'],
    ['Sundarbans, West Bengal','River & Mangrove Trails','Explore the waterways and mangroves','photo-1473116763249-2faaef81ccda'],
    ['Ooty, Tamil Nadu','Tea Country Escape','Green hills and winding roads','photo-1500534623283-312aade485b7'],
    ['Rishikesh, Uttarakhand','River Valley Retreat','Mountain air and riverside views','photo-1501785888041-af3ef285b470'],
    ['Munnar, Kerala','Misty Tea Gardens','Rolling green hills and cool mornings','photo-1441974231531-c6227db76b6e'],
    ['Jaisalmer, Rajasthan','Desert Colours','Golden landscapes and heritage charm','photo-1477587458883-47145ed94245'],
    ['Himachal Pradesh','Pine Forest Escape','Quiet mountain scenery','photo-1448375240586-882707db888b'],
    ['Konkan Coast, India','Seaside Road Trip','Coastal roads and scenic stops','photo-1473116763249-2faaef81ccda']
  ].map(([destination,title,caption,id])=>({destination,title,caption,image:`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=82`}));
  const stories = [
    {name:'Sample Traveller',trip:'Illustrative Darjeeling itinerary',rating:5,text:'A relaxed hill-station concept with scenic stops, tea-country views and time to explore at an easy pace.',image:photos[0].image},
    {name:'Sample Traveller',trip:'Illustrative Sikkim itinerary',rating:5,text:'A sample travel plan centred on mountain scenery, local sightseeing and comfortable transfers.',image:photos[1].image},
    {name:'Sample Traveller',trip:'Illustrative Kerala itinerary',rating:5,text:'A slower holiday idea with backwater scenery, green landscapes and flexible time to explore.',image:photos[3].image},
    {name:'Sample Traveller',trip:'Illustrative Puri itinerary',rating:5,text:'A coastal break concept for travellers looking for beach time, local food and a refreshing change.',image:photos[2].image},
    {name:'Sample Traveller',trip:'Illustrative Rajasthan itinerary',rating:5,text:'A heritage-focused journey with colourful architecture, local culture and memorable photo stops.',image:photos[8].image},
    {name:'Sample Traveller',trip:'Illustrative Meghalaya itinerary',rating:5,text:'A nature-led escape concept featuring forest trails, waterfalls and unhurried sightseeing.',image:photos[12].image},
    {name:'Sample Traveller',trip:'Illustrative Goa itinerary',rating:5,text:'A flexible coastal holiday idea with time for beaches, sunset views and local experiences.',image:photos[10].image},
    {name:'Sample Traveller',trip:'Illustrative Kashmir itinerary',rating:5,text:'A scenic mountain holiday concept with beautiful valleys and a comfortable travel pace.',image:photos[13].image}
  ];
  const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const photoCard = x => `<figure class="sg-photo-tile"><img src="${x.image}" alt="${esc(x.title)} — ${esc(x.destination)}" loading="lazy"><figcaption><b>${esc(x.title)}</b><span>${esc(x.destination)}</span></figcaption></figure>`;
  const reviewCard = x => `<article class="sg-review-tile has-review-photo"><img class="sg-review-photo" src="${x.image}" alt="Illustrative destination: ${esc(x.trip)}" loading="lazy"><div class="sg-review-copy"><div class="sg-review-stars" aria-label="Illustrative sample rating">★★★★★</div><p>“${esc(x.text)}”</p><div class="sg-review-person"><span class="sg-review-avatar">S</span><div><b>${esc(x.name)}</b><small>${esc(x.trip)}</small></div></div><small class="sg-demo-label">SAMPLE PREVIEW STORY — NOT A REAL CUSTOMER REVIEW</small></div></article>`;
  const fillLoop = (id,items,renderer) => { const el=document.getElementById(id); if(!el)return; const row=items.map(renderer).join(''); el.innerHTML=row+row; el.style.setProperty('--sg-loop-duration',`${Math.max(32,items.length*5.5)}s`); };
  function renderHome(){
    fillLoop('sg-public-gallery-row1',photos.filter((_,i)=>i%2===0),photoCard);
    fillLoop('sg-public-gallery-row2',photos.filter((_,i)=>i%2===1),photoCard);
    fillLoop('sg-public-feedback-row1',stories.filter((_,i)=>i%2===0),reviewCard);
    fillLoop('sg-public-feedback-row2',stories.filter((_,i)=>i%2===1),reviewCard);
  }
  function renderGallery(){
    const target=document.getElementById('sg-full-gallery'); if(!target)return;
    const groups={}; photos.forEach(p=>(groups[p.destination] ||= []).push(p));
    target.innerHTML=Object.entries(groups).map(([name,items])=>`<section class="sg-destination-section"><h2>${esc(name)} <small>${items.length} photo(s)</small></h2><div class="sg-destination-photo-grid">${items.map(p=>`<figure class="sg-destination-photo"><img src="${p.image}" alt="${esc(p.title)}" loading="lazy"><figcaption><b>${esc(p.title)}</b><span>${esc(p.caption)}</span></figcaption></figure>`).join('')}</div></section>`).join('');
  }
  function renderFeedback(){
    const target=document.getElementById('sg-full-feedback'); if(!target)return;
    target.innerHTML=stories.map(x=>`<article class="sg-feedback-page-card"><img src="${x.image}" alt="Illustrative destination: ${esc(x.trip)}" loading="lazy"><div class="sg-feedback-page-copy"><div class="stars">★★★★★</div><p>“${esc(x.text)}”</p><b>${esc(x.name)}</b><small>${esc(x.trip)}</small><small class="sg-demo-label">SAMPLE PREVIEW STORY — NOT A REAL CUSTOMER REVIEW</small></div></article>`).join('');
  }
  document.addEventListener('DOMContentLoaded',()=>{renderHome();renderGallery();renderFeedback();});
})();
