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
            }
        ];

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
                    <img src="${item.thumbImg}" alt="${item.subtitle}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
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
                    if (indicator) indicator.classList.add('opacity-0');
                    card.style.transform = `translate3d(-90px, -18px, 0) scale(1.12) rotate(-3deg)`;
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
                        if (indicator) indicator.classList.remove('opacity-0');
                        card.style.transform = `translate3d(${xPos}px, -12px, 0) scale(1.05) rotate(0deg)`;
                    } else {
                        card.classList.remove('first-in-queue');
                        if (indicator) indicator.classList.add('opacity-0');
                        card.style.transform = `translate3d(${xPos}px, 0px, 0) scale(0.96) rotate(0deg)`;
                    }
                }
            });
        }

        window.addEventListener('resize', () => positionThumbQueue(currentIdx));

        function updateHeroSlide(index) {
            currentIdx = index;

            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });

            positionThumbQueue(index);

            textBox.classList.remove('animate-text');
            void textBox.offsetWidth;
            textBox.classList.add('animate-text');

            subtitleEl.innerText = slidesData[index].subtitle;
            titleEl.innerHTML = slidesData[index].title;
            descEl.innerText = slidesData[index].desc;

            counterEl.innerText = `0${index + 1}`;
            const pct = ((index + 1) / slidesData.length) * 100;
            progressEl.style.width = `${pct}%`;
            topTimerBar.style.width = `${pct}%`;
        }

        function resetHeroTimer() {
            if (heroAutoTimer) clearInterval(heroAutoTimer);
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
            const prev = (currentIdx - 1 + slidesData.length) % slidesData.length;
            updateHeroSlide(prev);
            resetHeroTimer();
        }

        initThumbCards();
        resetHeroTimer();

        let currentPkgBg = 0;
        const pkgBgSlides = document.querySelectorAll('.pkg-bg-slide');
        const pkgTrack = document.getElementById('pkg-track');

        function setPkgBg(index) {
            currentPkgBg = index;
            pkgBgSlides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function scrollPkgCarousel(direction) {
            const cardWidth = pkgTrack.querySelector('div').offsetWidth + 32;
            pkgTrack.scrollBy({ left: direction * cardWidth * 2, behavior: 'smooth' });
        }

        setInterval(() => {
            currentPkgBg = (currentPkgBg + 1) % pkgBgSlides.length;
            setPkgBg(currentPkgBg);
        }, 5000);

        let currentStepsBg = 0;
        const stepsBgSlides = document.querySelectorAll('.steps-bg-slide');
        const stepsDots = document.querySelectorAll('.steps-dot');

        function setStepsBg(index) {
            currentStepsBg = index;
            stepsBgSlides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            stepsDots.forEach((dot, i) => {
                if (i === index) {
                    dot.className = "steps-dot w-8 h-1.5 rounded-full bg-brand-gold transition-all";
                } else {
                    dot.className = "steps-dot w-3 h-1.5 rounded-full bg-white/30 hover:bg-white/60 transition-all";
                }
            });
        }

        setInterval(() => {
            setStepsBg((currentStepsBg + 1) % stepsBgSlides.length);
        }, 5500);

        let currentContactBg = 0;
        const contactBgSlides = document.querySelectorAll('.contact-bg-slide');
        const contactTabs = document.querySelectorAll('.contact-tab');

        function setContactBg(index) {
            currentContactBg = index;
            contactBgSlides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            contactTabs.forEach((tab, i) => {
                if (i === index) {
                    tab.className = "contact-tab px-3 py-1.5 rounded-xl text-xs font-bold glass-btn-gold transition-all";
                } else {
                    tab.className = "contact-tab px-3 py-1.5 rounded-xl text-xs font-bold glass-btn transition-all";
                }
            });
        }

        setInterval(() => {
            setContactBg((currentContactBg + 1) % contactBgSlides.length);
        }, 5000);

        function selectPackage(pkgName) {
            const selectEl = document.getElementById('client-destination');
            selectEl.value = pkgName;
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            showToast(`Selected "${pkgName}". Fill in your dates below!`);
        }

        function scrollToBooking() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-msg');
            toastMsg.innerText = message;
            toast.classList.remove('translate-y-32', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-32', 'opacity-0');
            }, 4000);
        }

        function handleInquiry(event) {
            event.preventDefault();
            const name = document.getElementById('client-name').value;
            const dest = document.getElementById('client-destination').value;
            showToast(`Thank you ${name}! Your quote request for ${dest} has been sent.`);
            document.getElementById('inquiry-form').reset();
        }

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
            if (menu) menu.classList.add('hidden');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
