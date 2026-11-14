
const slidesData = [
    {
        subtitle: "West Bengal Hills",
        title: "DARJEELING<br>ESCAPE",
        desc: "Misty tea gardens, breathtaking Himalayan sunrise views at Tiger Hill, and verified hotel + private cab packages curated by Sarkar Getaways.",
        thumbImg: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=500&q=80"
    },
    {
        subtitle: "Sikkim Himalayas",
        title: "GANGTOK<br>VALLEY",
        desc: "Pickup from NJP with en-route Teesta river viewpoints, serene monasteries, and Tsomgo Lake excursions with an exclusive vehicle.",
        thumbImg: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=500&q=80"
    },
    {
        subtitle: "Bengal Coastline",
        title: "MANDARMANI<br>BEACH",
        desc: "Relax by India's longest motorable beach, enjoy fresh seaside dining, and stay at verified luxury beachfront resorts.",
        thumbImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
    },
    {
        subtitle: "Odisha Heritage",
        title: "PURI SEA<br>RETREAT",
        desc: "Spiritual Jagannath temple visits, golden ocean waves, Konark Sun Temple sightseeing, and hassle-free family stays.",
        thumbImg: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=500&q=80"
    },
    {
        subtitle: "Mangrove Delta",
        title: "SUNDARBANS<br>SAFARI",
        desc: "Guided boat safaris through UNESCO heritage mangrove forests, watchtowers, and eco-resort stays with full meals.",
        thumbImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
    },
    {
        subtitle: "Backwaters of Kerala",
        title: "KERALA<br>WATERWAYS",
        desc: "Guided boat in backwater allieways , staying the night in the backwaters and expereince tropical delicacies.",
        thumbImg: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=500&q=80"
    },
    {
        subtitle: "Beautiful colors along the banks of Ganga river.",
        title: "VARANASI<br>INDIA",
        desc: "The scenic aura and the charm of this city have been a motivation ",
        thumbImg: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=500&q=80"
    },
    {
        subtitle: "The Jewel of Northeast India.",
        title: "MANIPUR<br>Simply Beautiful.",
        desc: "Best if your site focuses on the state's vibrant festivals (like the Sangai Festival), local handlooms, classical dance, and historic sites like Kangla Fort.",
        thumbImg: "https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=500&q=80"
    },

    
];

// ==================================================
// HERO SLIDER
// ==================================================

let currentIdx = 0;
let heroAutoTimer = null;

const slides = document.querySelectorAll('.hero-bg-slide');
const thumbContainer = document.getElementById('thumbnail-container');
const textBox = document.getElementById('hero-text-box');
const titleEl = document.getElementById('hero-title');
const subtitleEl = document.getElementById('hero-subtitle');
const descEl = document.getElementById('hero-desc');
const counterEl = document.getElementById('slide-counter');
const progressEl = document.getElementById('hero-progress');
const topTimerBar = document.getElementById('top-timer-bar');

const thumbCardEls = [];

function getSlotSpacing() {
    if (window.innerWidth >= 640) return 212;
    if (window.innerWidth >= 480) return 175;
    return 145;
}

function initThumbCards() {
    if (!thumbContainer) return;

    thumbContainer.innerHTML = '';

    slidesData.forEach((item, idx) => {
        const card = document.createElement('div');

        card.onclick = () => {
            if (idx !== currentIdx) {
                switchSlide(idx);
            }
        };

        card.className = 'thumb-card overflow-hidden group';

        card.innerHTML = `
            <img
                src="${item.thumbImg}"
                alt="${item.subtitle}"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent p-4 flex flex-col justify-end">
                <span class="queue-indicator inline-block w-6 h-0.5 bg-brand-gold mb-1.5 transition-all duration-500 opacity-0"></span>
                <span class="text-[10px] font-semibold text-slate-300 tracking-wide">${item.subtitle}</span>
                <span class="font-display text-lg font-bold text-white leading-tight uppercase mt-0.5">${item.title}</span>
            </div>
        `;

        thumbContainer.appendChild(card);
        thumbCardEls.push(card);
    });

    positionThumbQueue(currentIdx);
}

function positionThumbQueue(activeIndex) {
    const total = slidesData.length;
    const spacing = getSlotSpacing();

    thumbCardEls.forEach((card, idx) => {
        const offset = (idx - activeIndex + total) % total;
        const indicator = card.querySelector('.queue-indicator');

        if (offset === 0) {
            card.classList.remove('first-in-queue');

            if (indicator) {
                indicator.classList.add('opacity-0');
            }

            card.style.transform =
                'translate3d(-90px, -18px, 0) scale(1.12) rotate(-3deg)';

            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
            card.style.zIndex = '5';
        } else {
            const slotIndex = offset - 1;
            const xPos = slotIndex * spacing;
            const isFrontCard = slotIndex === 0;

            card.style.pointerEvents = 'auto';
            card.style.opacity = slotIndex > 2 ? '0.68' : '1';
            card.style.zIndex = String(20 - slotIndex);

            if (isFrontCard) {
                card.classList.add('first-in-queue');

                if (indicator) {
                    indicator.classList.remove('opacity-0');
                }

                card.style.transform =
                    `translate3d(${xPos}px, -12px, 0) scale(1.05) rotate(0deg)`;
            } else {
                card.classList.remove('first-in-queue');

                if (indicator) {
                    indicator.classList.add('opacity-0');
                }

                card.style.transform =
                    `translate3d(${xPos}px, 0px, 0) scale(0.96) rotate(0deg)`;
            }
        }
    });
}

window.addEventListener('resize', () => {
    positionThumbQueue(currentIdx);
});

function updateHeroSlide(index) {
    if (!slidesData.length) return;

    currentIdx =
        ((index % slidesData.length) + slidesData.length) %
        slidesData.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIdx);
    });

    positionThumbQueue(currentIdx);

    if (textBox) {
        textBox.classList.remove('animate-text');
        void textBox.offsetWidth;
        textBox.classList.add('animate-text');
    }

    if (subtitleEl) {
        subtitleEl.innerText = slidesData[currentIdx].subtitle;
    }

    if (titleEl) {
        titleEl.innerHTML = slidesData[currentIdx].title;
    }

    if (descEl) {
        descEl.innerText = slidesData[currentIdx].desc;
    }

    if (counterEl) {
        counterEl.innerText = `0${currentIdx + 1}`;
    }

    const pct = ((currentIdx + 1) / slidesData.length) * 100;

    if (progressEl) {
        progressEl.style.width = `${pct}%`;
    }

    if (topTimerBar) {
        topTimerBar.style.width = `${pct}%`;
    }
}

function resetHeroTimer() {
    if (heroAutoTimer) {
        clearInterval(heroAutoTimer);
    }

    heroAutoTimer = setInterval(() => {
        nextSlide();
    }, 5500);
}

function switchSlide(index) {
    updateHeroSlide(index);
    resetHeroTimer();
}

function nextSlide() {
    const next = (currentIdx + 1) % slidesData.length;
    updateHeroSlide(next);
}

function prevSlide() {
    const prev =
        (currentIdx - 1 + slidesData.length) % slidesData.length;

    updateHeroSlide(prev);
    resetHeroTimer();
}

initThumbCards();

if (slides.length && thumbContainer) {
    updateHeroSlide(currentIdx);
    resetHeroTimer();
}

// ==================================================
// POPULAR TOUR PACKAGES CAROUSEL
// ==================================================

let currentPkgBg = 0;

const pkgBgSlides = document.querySelectorAll('.pkg-bg-slide');
const pkgTrack = document.getElementById('pkg-track');

let pkgAutoTimer = null;
let pkgResumeTimer = null;
let pkgOriginalCount = 0;
let pkgLoopWidth = 0;
let pkgIsResetting = false;
let pkgIsFocused = false;

function setPkgBg(index) {
    if (!pkgBgSlides.length) return;

    currentPkgBg =
        ((index % pkgBgSlides.length) + pkgBgSlides.length) %
        pkgBgSlides.length;

    pkgBgSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentPkgBg);
    });
}

// Find one card's width plus the gap between cards.
function getPkgStep() {
    if (!pkgTrack) return 0;

    const firstCard = pkgTrack.querySelector('.pkg-card');
    if (!firstCard) return 0;

    const style = window.getComputedStyle(pkgTrack);
    const gap = parseFloat(style.columnGap) || parseFloat(style.gap) || 0;

    return firstCard.getBoundingClientRect().width + gap;
}

// Set up cloned cards for continuous scrolling.
function setupPkgLoop() {
    if (!pkgTrack || pkgTrack.dataset.loopReady === 'true') {
        return;
    }

    const originalCards = Array.from(
        pkgTrack.querySelectorAll('.pkg-card')
    );

    if (originalCards.length < 2) return;

    pkgOriginalCount = originalCards.length;

    originalCards.forEach((card) => {
        const clone = card.cloneNode(true);

        clone.setAttribute('aria-hidden', 'true');

        clone.querySelectorAll(
            'button, a, input, select, textarea'
        ).forEach((element) => {
            element.setAttribute('tabindex', '-1');
        });

        pkgTrack.appendChild(clone);
    });

    pkgTrack.dataset.loopReady = 'true';

    requestAnimationFrame(() => {
        updatePkgLoopWidth();
    });
}

function updatePkgLoopWidth() {
    if (!pkgTrack || !pkgOriginalCount) return;

    pkgLoopWidth = getPkgStep() * pkgOriginalCount;
}

// Rebuild the infinite carousel after the admin package manager publishes catalogue changes.
function refreshPkgCarousel() {
    if (!pkgTrack) return;
    clearInterval(pkgAutoTimer);
    clearTimeout(pkgResumeTimer);
    pkgOriginalCount = 0;
    pkgLoopWidth = 0;
    pkgIsResetting = false;
    pkgTrack.dataset.loopReady = 'false';
    pkgTrack.scrollLeft = 0;
    setupPkgLoop();
    requestAnimationFrame(() => {
        updatePkgLoopWidth();
        startPkgAutoRotation();
    });
}
window.refreshPkgCarousel = refreshPkgCarousel;

// Move the package carousel using the previous/next buttons.
function scrollPkgCarousel(direction) {
    if (!pkgTrack) return;

    const step = getPkgStep();
    if (!step) return;

    clearInterval(pkgAutoTimer);
    clearTimeout(pkgResumeTimer);

    let currentPosition = pkgTrack.scrollLeft;

    // When moving backwards at the beginning, use the cloned cards.
    if (direction < 0 && currentPosition <= 2 && pkgLoopWidth > 0) {
        pkgTrack.scrollLeft = pkgLoopWidth;
        currentPosition = pkgTrack.scrollLeft;
    }

    const targetPosition = currentPosition + direction * step;

    pkgTrack.scrollTo({
        left: Math.max(0, targetPosition),
        behavior: 'smooth'
    });

    schedulePkgResume();
}

// Reset scroll position after the original cards have passed.
function handlePkgLoop() {
    if (!pkgTrack || !pkgLoopWidth || pkgIsResetting) return;

    if (pkgTrack.scrollLeft >= pkgLoopWidth - 2) {
        pkgIsResetting = true;

        pkgTrack.scrollLeft -= pkgLoopWidth;

        requestAnimationFrame(() => {
            pkgIsResetting = false;
        });
    }
}

// Start automatic rotation. The wrap is performed between animation steps,
 // never from the scroll event, so smooth scrolling is not interrupted.
function startPkgAutoRotation() {
    clearInterval(pkgAutoTimer);
    if (!pkgTrack) return;

    pkgAutoTimer = setInterval(() => {
        if (document.hidden || pkgIsFocused) return;

        const step = getPkgStep();
        if (!step) return;

        // When the original catalogue has passed, jump back by exactly one
        // catalogue width into the identical cloned cards, then keep moving.
        if (pkgLoopWidth > 0 && pkgTrack.scrollLeft >= pkgLoopWidth - 2) {
            pkgTrack.scrollLeft = Math.max(0, pkgTrack.scrollLeft - pkgLoopWidth);
        }

        pkgTrack.scrollTo({
            left: pkgTrack.scrollLeft + step,
            behavior: 'smooth'
        });
    }, 4200);
}

// Resume automatic rotation after manual navigation.
function schedulePkgResume() {
    clearInterval(pkgAutoTimer);
    clearTimeout(pkgResumeTimer);

    pkgResumeTimer = setTimeout(() => {
        startPkgAutoRotation();
    }, 7000);
}

// Initialize the carousel.
if (pkgTrack) {
    setupPkgLoop();

    // Autoplay intentionally continues while the pointer is over the carousel.
    // This prevents the slider appearing broken when a user hovers to read a tile.

    pkgTrack.addEventListener('focusin', () => {
        pkgIsFocused = true;
        clearInterval(pkgAutoTimer);
    });

    pkgTrack.addEventListener('focusout', () => {
        requestAnimationFrame(() => {
            pkgIsFocused = pkgTrack.contains(document.activeElement);

            if (!pkgIsFocused) {
                startPkgAutoRotation();
            }
        });
    });

    window.addEventListener('resize', () => {
        requestAnimationFrame(() => {
            updatePkgLoopWidth();
        });
    });

    // Wait for card dimensions to be calculated.
    requestAnimationFrame(() => {
        updatePkgLoopWidth();
        startPkgAutoRotation();
    });
}

// Automatically rotate package background images.
setInterval(() => {
    if (pkgBgSlides.length) {
        setPkgBg((currentPkgBg + 1) % pkgBgSlides.length);
    }
}, 5000);

// ==================================================
// HOW IT WORKS — BACKGROUND SLIDER
// ==================================================

let currentStepsBg = 0;

const stepsBgSlides = document.querySelectorAll('.steps-bg-slide');
const stepsDots = document.querySelectorAll('.steps-dot');

function setStepsBg(index) {
    if (!stepsBgSlides.length) return;

    currentStepsBg =
        ((index % stepsBgSlides.length) + stepsBgSlides.length) %
        stepsBgSlides.length;

    stepsBgSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentStepsBg);
    });

    stepsDots.forEach((dot, i) => {
        if (i === currentStepsBg) {
            dot.className =
                'steps-dot w-8 h-1.5 rounded-full bg-brand-gold transition-all';
        } else {
            dot.className =
                'steps-dot w-3 h-1.5 rounded-full bg-white/30 hover:bg-white/60 transition-all';
        }
    });
}

if (stepsBgSlides.length) {
    setInterval(() => {
        setStepsBg((currentStepsBg + 1) % stepsBgSlides.length);
    }, 5500);
}

// ==================================================
// CONTACT SECTION — BACKGROUND SLIDER
// ==================================================

let currentContactBg = 0;

const contactBgSlides = document.querySelectorAll('.contact-bg-slide');
const contactTabs = document.querySelectorAll('.contact-tab');

function setContactBg(index) {
    if (!contactBgSlides.length) return;

    currentContactBg =
        ((index % contactBgSlides.length) + contactBgSlides.length) %
        contactBgSlides.length;

    contactBgSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentContactBg);
    });

    contactTabs.forEach((tab, i) => {
        if (i === currentContactBg) {
            tab.className =
                'contact-tab px-3 py-1.5 rounded-xl text-xs font-bold glass-btn-gold transition-all';
        } else {
            tab.className =
                'contact-tab px-3 py-1.5 rounded-xl text-xs font-bold glass-btn transition-all';
        }
    });
}

if (contactBgSlides.length) {
    setInterval(() => {
        setContactBg(
            (currentContactBg + 1) % contactBgSlides.length
        );
    }, 5000);
}

// ==================================================
// PACKAGE SELECTION & BOOKING
// ==================================================

function selectPackage(pkgName) {
    const selectEl = document.getElementById('client-destination');
    const contactSection = document.getElementById('contact');

    if (selectEl) {
        const optionExists = Array.from(selectEl.options).some((option) => option.value === pkgName || option.textContent === pkgName);
        if (!optionExists) {
            const option = document.createElement('option');
            option.value = pkgName;
            option.textContent = pkgName;
            selectEl.appendChild(option);
        }
        selectEl.value = pkgName;
    }

    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    }

    showToast(`Selected "${pkgName}". Fill in your dates below!`);
}

function scrollToBooking() {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// ==================================================
// TOAST NOTIFICATIONS
// ==================================================

let toastTimer = null;

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');

    if (!toast || !toastMsg) return;

    toastMsg.innerText = message;

    toast.classList.remove('translate-y-32', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-32', 'opacity-0');
    }, 4000);
}

// ==================================================
// INQUIRY FORM
// ==================================================

function handleInquiry(event) {
    event.preventDefault();
    const name = document.getElementById('client-name')?.value.trim() || '';
    const phone = document.getElementById('client-phone')?.value.trim() || '';
    const destination = document.getElementById('client-destination')?.value || '';
    const cabPreference = document.getElementById('client-cab')?.value || 'Private Cab';
    const datesNotes = document.getElementById('client-msg')?.value.trim() || '';
    if (!name || !phone || !destination) {
        showToast('Please complete your name, phone number and destination.');
        return;
    }
    const subject = encodeURIComponent(`Travel enquiry – ${destination}`);
    const body = encodeURIComponent(
        `Hello SarkarGateways,\n\nI would like to enquire about a trip.\n\nName: ${name}\nPhone: ${phone}\nDestination: ${destination}\nCab preference: ${cabPreference}\nTravel details: ${datesNotes}\n\nPlease contact me with the next steps.`
    );
    showToast('Opening your email app with the enquiry details. This preview does not store bookings.');
    window.location.href = `mailto:sarkar.getaways@gmail.com?subject=${subject}&body=${body}`;
}

// ==================================================
// MOBILE NAVIGATION MENU
// ==================================================

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');

    if (!menu) return;

    const isHidden = menu.classList.contains('hidden');

    if (isHidden) {
        menu.classList.remove('hidden');

        if (icon) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    } else {
        menu.classList.add('hidden');

        if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');

    if (menu) {
        menu.classList.add('hidden');
    }

    if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}


// =========================================================
// V5: SCROLL-AWARE ICON NAVIGATION + COMPANY DATA SYNC
// =========================================================
(function initScrollIconNavigation() {
    const nav = document.getElementById('scroll-icon-nav');
    if (!nav) return;
    const links = Array.from(nav.querySelectorAll('a[data-section]'));
    const sections = links.map(link => document.getElementById(link.dataset.section)).filter(Boolean);
    const syncVisibility = () => {
        const visible = window.scrollY > 180;
        nav.classList.toggle('is-visible', visible);
        nav.setAttribute('aria-hidden', visible ? 'false' : 'true');
        nav.querySelectorAll('a').forEach(link => { link.tabIndex = visible ? 0 : -1; });
    };
    links.forEach(link => link.addEventListener('click', () => {
        if (typeof closeMobileMenu === 'function') closeMobileMenu();
    }));
    window.addEventListener('scroll', syncVisibility, { passive: true });
    window.addEventListener('resize', syncVisibility, { passive: true });
    syncVisibility();

    if ('IntersectionObserver' in window && sections.length) {
        const observer = new IntersectionObserver(entries => {
            const candidates = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio);
            if (!candidates.length) return;
            const sectionId = candidates[0].target.id;
            links.forEach(link => link.classList.toggle('is-active', link.dataset.section === sectionId));
        }, { rootMargin: '-24% 0px -55% 0px', threshold: [0, .1, .25, .5] });
        sections.forEach(section => observer.observe(section));
    }
})();
