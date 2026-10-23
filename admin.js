/* =========================================================
   SARKAR GETAWAYS — MASTER OPERATIONS HQ JAVASCRIPT
   Enterprise Travel Management & B2B Integration Engine
   Luxury Glassmorphic Dashboard (Travelie Architecture)
   ========================================================= */

// Default Seed Data for immediate full functionality
const INITIAL_ADMIN_DATA = {
    authPin: "sarkar2026",
    isLoggedIn: false,
    bookings: [
        {
            id: "SG-BK-8901",
            clientName: "Vikram Sengupta",
            phone: "+91 98301 23456",
            email: "vikram.s@gmail.com",
            city: "Kolkata",
            destination: "Darjeeling Hills & Tea Estates",
            packageId: "PKG-DARJ-01",
            departureDate: "2026-10-22",
            returnDate: "2026-10-25",
            adults: 2,
            kids: 1,
            totalAmount: 22497,
            advancePaid: 10000,
            balanceDue: 12497,
            status: "Confirmed",
            hotelName: "Summit Hermon Hotel & Spa",
            roomCategory: "Deluxe Mountain View with Breakfast",
            cabType: "Exclusive Innova Crysta",
            driverName: "Tenzing Sherpa",
            driverPhone: "+91 94340 78219",
            customSightseeing: "Tiger Hill 4:00 AM sunrise slot + Batasia Loop Joy Ride tickets booked + Glenary's bakery evening halt.",
            b2bPortal: "Tripjack",
            b2bRefNo: "TJ-HTL-998241",
            voucherCode: "VCH-SG-DARJ-8901",
            createdDate: "2026-10-10"
        },
        {
            id: "SG-BK-8902",
            clientName: "Ananya Roy Chowdhury",
            phone: "+91 98310 99881",
            email: "ananya.roy@outlook.com",
            city: "Howrah",
            destination: "Gangtok & En-Route Sightseeing",
            packageId: "PKG-GANG-02",
            departureDate: "2026-10-26",
            returnDate: "2026-10-30",
            adults: 4,
            kids: 0,
            totalAmount: 43996,
            advancePaid: 25000,
            balanceDue: 18996,
            status: "In-Progress",
            hotelName: "Lemon Tree Hotel Gangtok",
            roomCategory: "Superior Twin Rooms (2 Rooms)",
            cabType: "Private Scorpio / Bolero 4x4",
            driverName: "Passang Bhutia",
            driverPhone: "+91 97330 65432",
            customSightseeing: "NJP pickup with Teesta white water rafting stop + Tsomgo Lake & Baba Mandir permit included.",
            b2bPortal: "Riya Connect",
            b2bRefNo: "RC-B2B-66231",
            voucherCode: "VCH-SG-GANG-8902",
            createdDate: "2026-10-12"
        },
        {
            id: "SG-BK-8903",
            clientName: "Debashis Mukherjee",
            phone: "+91 98741 55223",
            email: "debashis.m@tcs.com",
            city: "Salt Lake, Kolkata",
            destination: "Mandarmani Beach Getaway",
            packageId: "PKG-MAND-03",
            departureDate: "2026-11-04",
            returnDate: "2026-11-06",
            adults: 2,
            kids: 2,
            totalAmount: 17998,
            advancePaid: 17998,
            balanceDue: 0,
            status: "Confirmed",
            hotelName: "Victoria Beach Resort Mandarmani",
            roomCategory: "Sea-Facing Villa with Private Balcony",
            cabType: "AC Swift Dzire (Doorstep Pickup & Drop)",
            driverName: "Pranab Das",
            driverPhone: "+91 99321 44556",
            customSightseeing: "Kolaghat Sher-e-Punjab breakfast stop en-route + Digha Mohana fish market visit on Day 2.",
            b2bPortal: "MakeMyTrip Partner",
            b2bRefNo: "MMT-P-884021",
            voucherCode: "VCH-SG-MAND-8903",
            createdDate: "2026-10-14"
        },
        {
            id: "SG-BK-8904",
            clientName: "Dr. Subhankar Ghosh",
            phone: "+91 94330 11229",
            email: "subhankar.ghosh@aiims.edu",
            city: "Burdwan",
            destination: "Puri Sea Retreat & Konark",
            packageId: "PKG-PURI-04",
            departureDate: "2026-11-12",
            returnDate: "2026-11-16",
            adults: 3,
            kids: 0,
            totalAmount: 26997,
            advancePaid: 10000,
            balanceDue: 16997,
            status: "Pending",
            hotelName: "Mayfair Waves Puri",
            roomCategory: "Premium Ocean View (CP Plan)",
            cabType: "AC Ertiga (Station to Hotel + Konark Sightseeing)",
            driverName: "Alok Panda",
            driverPhone: "+91 94370 88991",
            customSightseeing: "VIP Jagannath Temple Darshan Panda assistance + Konark Marine Drive sunset photo stop + Chilika Lake dolphin tour.",
            b2bPortal: "Tripjack",
            b2bRefNo: "TJ-PURI-44512",
            voucherCode: "VCH-SG-PURI-8904",
            createdDate: "2026-10-15"
        }
    ],
    enquiries: [
        {
            id: "ENQ-501",
            name: "Rajesh Banerjee",
            phone: "+91 98366 45012",
            destination: "Sundarbans Safari",
            cabPreference: "AC Swift Dzire + Guided Motorboat",
            datesNotes: "Planning for 2nd week of November. 4 Adults, want eco-resort with authentic Bengali crab and fish meals.",
            status: "New",
            date: "2026-10-15 18:45"
        },
        {
            id: "ENQ-502",
            name: "Pooja Agarwal",
            phone: "+91 98200 77123",
            destination: "Gangtok & Sikkim",
            cabPreference: "Private SUV / Innova Luxury Disposal",
            datesNotes: "Honeymoon couple, late November. Need flower bed decoration and candle-lit dinner in Gangtok.",
            status: "Quoted",
            date: "2026-10-14 14:20"
        },
        {
            id: "ENQ-503",
            name: "Amitabh Sen",
            phone: "+91 99030 88214",
            destination: "Darjeeling Hills & Tea Estates",
            cabPreference: "Private Cab + En-Route Sightseeing",
            datesNotes: "Family of 5 with senior citizen. Need ground floor rooms and easy walking distance to Mall Road.",
            status: "Contacted",
            date: "2026-10-13 11:15"
        }
    ],
    packages: [
        {
            id: "PKG-DARJ-01",
            title: "Darjeeling Hills & Tea Estates",
            destination: "Darjeeling, West Bengal",
            duration: "3 Days / 2 Nights",
            days: 3,
            b2bNetCost: 5600,
            markupAmount: 1899,
            sellingPrice: 7499,
            rating: 4.9,
            ratingCount: "1,248 ratings",
            quota: "20 participants / batch",
            category: "Himalayan Sunrise",
            coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            ],
            vehicle: "Exclusive Private Cab (NJP-Darjeeling-Tiger Hill-NJP)",
            hotelStar: "4-Star Mountain View Resort",
            mealPlan: "Daily Breakfast Included (CP)",
            highlights: ["Tiger Hill Sunrise (Subject to weather)", "Batasia Loop & War Memorial", "Happy Valley Tea Estate Walk", "Ghoom Monastery", "Private NJP / Bagdogra transfers"],
            includes: [
                "Exclusive Private Cab for all mountain transfers & Tiger Hill excursion",
                "B2B Verified 4-Star Mountain View Resort with Valley Balcony",
                "Tiger Hill 4:00 AM Sunrise Entry Token & Toy Train Joyride tickets",
                "Daily Sumptuous Buffet Breakfast Included (CP Plan)",
                "Zero hidden fees • Verified local agency concierge support 24x7"
            ],
            itinerary: [
                { day: 1, title: "Arrival & Scenic Hill Transfer", detail: "Pickup from NJP/Bagdogra. Scenic climb through Kurseong hills with en-route tea tasting halt. Evening leisure on Mall Road and Chowrasta." },
                { day: 2, title: "Tiger Hill Sunrise & 7-Points Sightseeing", detail: "Early 4:00 AM drive to Tiger Hill for Kanchenjunga sunrise. Return for breakfast, followed by Himalayan Mountaineering Institute, Padmaja Naidu Zoo, and Japanese Peace Pagoda." },
                { day: 3, title: "Tea Gardens & Return Transfer", detail: "Morning tea estate photo session, souvenir shopping, and comfortable private drop to NJP / Bagdogra Airport." }
            ]
        },
        {
            id: "PKG-GANG-02",
            title: "Gangtok & En-Route Sightseeing",
            destination: "Gangtok, Sikkim",
            duration: "4 Days / 3 Nights",
            days: 4,
            b2bNetCost: 8200,
            markupAmount: 2799,
            sellingPrice: 10999,
            rating: 5.0,
            ratingCount: "980 ratings",
            quota: "16 participants / batch",
            category: "Cultural Exploration",
            coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=400&q=80"
            ],
            vehicle: "Exclusive SUV (Scorpio/Innova)",
            hotelStar: "Luxury Boutique Hotel on MG Marg",
            mealPlan: "MAP (Breakfast + Dinner)",
            highlights: ["En-route Teesta River viewpoint", "Tsomgo Lake & Baba Mandir permit", "MG Marg evening stroll", "Banjhakri Waterfall & Ropeway", "Rumtek Monastery excursion"],
            includes: [
                "Dedicated Private 4x4 SUV / Innova for full tour duration",
                "Luxury Boutique Hotel stay within walking distance to MG Marg",
                "Tsomgo (Changu) Lake & Baba Harbhajan Singh Mandir protected area permits",
                "MAP Meal Plan: Daily hearty breakfast and chef-crafted buffet dinner",
                "State road permits, fuel, and professional mountain driver allowances"
            ],
            itinerary: [
                { day: 1, title: "NJP Pickup & Drive to Gangtok", detail: "Pick up from NJP/Bagdogra. En-route stop at Teesta River for photography and river rafting. Check-in and relax at MG Marg." },
                { day: 2, title: "High Altitude Tsomgo Lake & Baba Mandir", detail: "Excursion to pristine glacial Tsomgo (Changu) Lake at 12,400 ft and sacred Baba Harbhajan Singh Memorial Mandir with permits." },
                { day: 3, title: "Gangtok Local Exploration", detail: "Visit Rumtek Monastery, Do Drul Chorten, Namgyal Institute of Tibetology, Flower Exhibition Center, and ropeway cable ride." },
                { day: 4, title: "Departure to NJP / Siliguri", detail: "After hearty breakfast, drive down through scenic valleys for final drop at NJP railway station." }
            ]
        },
        {
            id: "PKG-MAND-03",
            title: "Mandarmani Beach Getaway",
            destination: "Mandarmani, West Bengal",
            duration: "2 Days / 1 Night",
            days: 2,
            b2bNetCost: 4200,
            markupAmount: 1799,
            sellingPrice: 5999,
            rating: 4.8,
            ratingCount: "760 ratings",
            quota: "15 participants / batch",
            category: "Coastal Escape",
            coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=400&q=80"
            ],
            vehicle: "AC Sedan (Doorstep Kolkata Pickup & Drop)",
            hotelStar: "Beachfront Luxury Resort with Swimming Pool",
            mealPlan: "CP (Breakfast Included)",
            highlights: ["Private beach access", "Water sports (Banana boat, ATV ride)", "Fresh seaside seafood shacks", "Doorstep pickup from Kolkata/Howrah"],
            includes: [
                "Dedicated AC Sedan with doorstep home pickup and drop in Kolkata",
                "Verified beachfront luxury resort stay with direct private beach access",
                "Kolaghat Sher-e-Punjab breakfast halt and highway toll fees included",
                "Complimentary resort swimming pool access and beach loungers",
                "Driver night charges and vehicle parking included"
            ],
            itinerary: [
                { day: 1, title: "Kolkata to Mandarmani Beach", detail: "Morning doorstep pickup from Kolkata. Breakfast stop at Kolaghat. Check-in to beachfront resort by noon. Sunset beach sports and live barbecue." },
                { day: 2, title: "Morning Dip & Return Journey", detail: "Sunrise on the motorable beach, fresh coconut water, dip in the swimming pool, and comfortable late afternoon drop back to Kolkata." }
            ]
        },
        {
            id: "PKG-PURI-04",
            title: "Puri Sea Retreat & Konark Heritage",
            destination: "Puri, Odisha",
            duration: "4 Days / 3 Nights",
            days: 4,
            b2bNetCost: 6500,
            markupAmount: 2499,
            sellingPrice: 8999,
            rating: 4.9,
            ratingCount: "1,420 ratings",
            quota: "24 participants / batch",
            category: "Heritage & Sea",
            coverImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=400&q=80"
            ],
            vehicle: "AC Ertiga for all local transfers & sightseeing",
            hotelStar: "Premium Beach Resort on New Marine Drive",
            mealPlan: "Daily Buffet Breakfast",
            highlights: ["VIP Jagannath Temple Darshan assistance", "UNESCO World Heritage Konark Sun Temple", "Chilika Lake (Satapada) Irrawaddy Dolphins", "Golden Beach evening relaxation"],
            includes: [
                "Exclusive AC Ertiga for station pickup, Konark drive & Chilika Lake tour",
                "Premium Beach Resort stay along Golden Beach / New Marine Drive",
                "Guided assistance for Holy Shree Jagannath Temple Darshan",
                "Daily sumptuous buffet breakfast with local Odia delicacies",
                "Interstate permits, parking, toll taxes and chauffeur allowances"
            ],
            itinerary: [
                { day: 1, title: "Arrival at Puri & Beach Relaxation", detail: "Puri Railway Station pickup. Check-in to resort, afternoon at the Golden Beach, and evening visit to Swargadwar market." },
                { day: 2, title: "Jagannath Temple Darshan & Konark Sun Temple", detail: "Morning holy Darshan at Shree Jagannath Temple. Afternoon drive along Chandrabhaga Beach to marvel at Konark Sun Temple." },
                { day: 3, title: "Chilika Lake Lagoon & Dolphin Safari", detail: "Day trip to Satapada on Chilika Lake. Boat cruise to witness rare Irrawaddy dolphins and Rajhans Island." },
                { day: 4, title: "Shopping & Departure", detail: "Buy authentic Odisha handloom and Khaja sweets. Scheduled drop to Puri/Bhubaneswar station." }
            ]
        },
        {
            id: "PKG-SUND-05",
            title: "Sundarbans Tiger Delta Safari",
            duration: "3 Days / 2 Nights",
            destination: "Sundarbans UNESCO Biosphere",
            days: 3,
            b2bNetCost: 4800,
            markupAmount: 1699,
            sellingPrice: 6499,
            rating: 4.7,
            ratingCount: "540 ratings",
            quota: "18 participants / batch",
            category: "Wildlife Adventure",
            coverImage: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
            ],
            vehicle: "AC Cab to Godkhali + Exclusive Cruise Boat",
            hotelStar: "Eco-Friendly Riverside Resort",
            mealPlan: "All Meals Included (Bengali Feast Cuisine)",
            highlights: ["UNESCO Mangrove Forest boat cruise", "Sajnekhali & Sudhanyakhali Watchtowers", "Royal Bengal Tiger & Crocodile tracking", "Tribal dance & village culture show"],
            includes: [
                "AC Road transfers from Kolkata to Godkhali port & return",
                "Exclusive 2-day mechanized cruise boat safari with Forest Dept guide",
                "Riverside eco-resort cottage stay with evening Baul folk performance",
                "All meals included: Authentic Bengali prawn, crab, and bhetki feasts",
                "Forest entry fees, watchtower permits & camera clearances"
            ],
            itinerary: [
                { day: 1, title: "Kolkata to Godkhali & Boat to Resort", detail: "Pickup from Kolkata, drive to Godkhali port. Board cruise boat, cross scenic river deltas, arrive at resort. Evening local Baul folk music." },
                { day: 2, title: "Deep Mangrove Safari & Watchtowers", detail: "Full day boat safari with forest department permit. Visit Sudhanyakhali, Dobanki canopy walk, and creek animal spotting." },
                { day: 3, title: "Village Walk & Return to Kolkata", detail: "Morning guided walk through local honey-collector village. Cruise back to Godkhali and drop off in Kolkata by evening." }
            ]
        }
    ],
    drivers: [
        {
            id: "DRV-101",
            name: "Tenzing Sherpa",
            phone: "+91 94340 78219",
            email: "tenzing.sherpa@sarkargetaways.com",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
            coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
            role: "Senior Hill Route Specialist",
            region: "Darjeeling & Kurseong",
            vehicleModel: "Innova Crysta Luxury",
            vehiclePlate: "WB 74 AB 9021",
            workExperience: "10 Years",
            experienceLevel: "Senior Expert",
            jobType: "Dedicated Fleet",
            status: "Active / On Duty",
            assignedBookingId: "SG-BK-8901",
            assignedClient: "Vikram Sengupta",
            skills: [
                "Hill Driving Certified & State Commercial Badge",
                "Fluent in Bengali, Nepali, Hindi & Basic English",
                "Tiger Hill 4 AM Expert & Batasia Joyride Coordination",
                "First Aid & Vehicle Mountain Recovery Trained"
            ],
            experiences: [
                { role: "Senior Tour Driver", company: "Sarkar Getaways Fleet", period: "Jan 2018 - Present", desc: "Leading customized Himalayan tour groups across Darjeeling and Kalimpong with 5.0 guest ratings." },
                { role: "Route Pilot", company: "North Bengal Transport", period: "Feb 2014 - Dec 2017", desc: "Managed airport transfers and NJP express pickups across tea garden circuits." }
            ]
        },
        {
            id: "DRV-102",
            name: "Passang Bhutia",
            phone: "+91 97330 65432",
            email: "passang.bhutia@sarkargetaways.com",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
            coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
            role: "High-Altitude Route Specialist",
            region: "Gangtok & Sikkim",
            vehicleModel: "Mahindra Scorpio 4x4",
            vehiclePlate: "SK 01 T 4410",
            workExperience: "8 Years",
            experienceLevel: "High-Altitude Master",
            jobType: "Dedicated 4x4",
            status: "Active / On Duty",
            assignedBookingId: "SG-BK-8902",
            assignedClient: "Ananya Roy Chowdhury",
            skills: [
                "Tsomgo Lake & Nathula Pass Permit Specialist",
                "Extreme Weather & Snow Driving Certified",
                "Teesta White Water Rafting En-Route Coordination",
                "Fluent in Nepali, Hindi & Bengali"
            ],
            experiences: [
                { role: "Sikkim Route Specialist", company: "Sarkar Getaways Fleet", period: "Apr 2019 - Present", desc: "Specialist for North Sikkim, Yumthang Valley, and Lachung routes." },
                { role: "Mountain Cab Captain", company: "Gangtok Taxi Syndicate", period: "Mar 2016 - Mar 2019", desc: "Conducted 600+ safe trips to Gurudongmar Lake and East Sikkim." }
            ]
        },
        {
            id: "DRV-103",
            name: "Pranab Das",
            phone: "+91 99321 44556",
            email: "pranab.das@sarkargetaways.com",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
            coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            role: "Coastal Express Driver",
            region: "Mandarmani & Digha",
            vehicleModel: "AC Swift Dzire",
            vehiclePlate: "WB 02 AX 7712",
            workExperience: "12 Years",
            experienceLevel: "Senior Coastal Captain",
            jobType: "Doorstep Kolkata Cab",
            status: "Available",
            assignedBookingId: "SG-BK-8903",
            assignedClient: "Debashis Mukherjee",
            skills: [
                "Doorstep Kolkata Pickup & Highway Express Route",
                "Beach Drive Protocol & Kolaghat Breakfast Coordination",
                "Punctual, Polite & Luggage Assistance Certified",
                "Fluent in Bengali & Hindi"
            ],
            experiences: [
                { role: "City & Coastal Pilot", company: "Sarkar Getaways Fleet", period: "Jan 2017 - Present", desc: "Handled 1,200+ weekend getaways to Mandarmani, Tajpur and Shankarpur." }
            ]
        },
        {
            id: "DRV-104",
            name: "Alok Panda",
            phone: "+91 94370 88991",
            email: "alok.panda@sarkargetaways.com",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
            coverImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
            role: "Heritage & Coastal Specialist",
            region: "Puri & Konark",
            vehicleModel: "Maruti Ertiga AC",
            vehiclePlate: "OD 02 BH 3319",
            workExperience: "7 Years",
            experienceLevel: "Senior Guide-Driver",
            jobType: "Odisha Circuit Fleet",
            status: "Available",
            assignedBookingId: "SG-BK-8904",
            assignedClient: "Dr. Subhankar Ghosh",
            skills: [
                "Jagannath Temple VIP Entry Assistance",
                "Konark Marine Drive Sunset Route Specialist",
                "Chilika Lake Dolphin Safari Boat Linkage",
                "Fluent in Odia, Bengali & Hindi"
            ],
            experiences: [
                { role: "Odisha Circuit Captain", company: "Sarkar Getaways Fleet", period: "Aug 2018 - Present", desc: "Expert in Golden Triangle (Puri-Konark-Bhubaneswar) tours." }
            ]
        }
    ],
    activities: [
        { id: "ACT-1", user: "Vikram Sengupta", action: "Confirmed Darjeeling Hills booking (Advance ₹10,000 received)", time: "10:30 AM", type: "booking", icon: "fa-solid fa-circle-check", color: "text-emerald-400" },
        { id: "ACT-2", user: "Tenzing Sherpa", action: "Assigned Innova Crysta (WB 74 AB 9021) to NJP pickup", time: "11:15 AM", type: "driver", icon: "fa-solid fa-car", color: "text-brand-gold" },
        { id: "ACT-3", user: "Rajesh Banerjee", action: "Submitted new website quote inquiry for Sundarbans Safari", time: "12:45 PM", type: "enquiry", icon: "fa-solid fa-envelope", color: "text-blue-400" },
        { id: "ACT-4", user: "Ananya Roy Chowdhury", action: "Sikkim travel permits issued via Riya Connect B2B desk", time: "02:10 PM", type: "b2b", icon: "fa-solid fa-shield", color: "text-purple-400" },
        { id: "ACT-5", user: "Debashis Mukherjee", action: "Victoria Beach Resort voucher issued (VCH-SG-MAND-8903)", time: "03:40 PM", type: "voucher", icon: "fa-solid fa-receipt", color: "text-amber-400" }
    ],
    deals: [
        {
            title: "Summer Hill Station Sale",
            tag: "SUMMER SPECIAL",
            discount: "15% OFF",
            code: "SUMMERHILL26",
            validTill: "Valid till 30 Nov 2026",
            bgImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
            description: "Exclusive discounts on Darjeeling & Gangtok luxury mountain packages with private SUV transfers."
        },
        {
            title: "Winter Holiday Escapes",
            tag: "WINTER WONDERLAND",
            discount: "₹2,500 FLAT",
            code: "WINTERSIKKIM",
            validTill: "Valid till 31 Dec 2026",
            bgImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
            description: "Experience snowfall at Yumthang & Tsomgo Lake with 4-star heated hotel rooms."
        },
        {
            title: "Couples & Honeymoon Retreat",
            tag: "ROMANTIC GETAWAY",
            discount: "FREE CAB UPGRADE",
            code: "LOVEGETAWAY",
            validTill: "Valid till 31 Dec 2026",
            bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
            description: "Complimentary candlelight dinner & luxury Innova Crysta upgrade on all Mandarmani & Puri suites."
        },
        {
            title: "Durga Puja Festive Special",
            tag: "FESTIVE PROMO",
            discount: "12% OFF",
            code: "PUJA2026",
            validTill: "Valid till 30 Nov 2026",
            bgImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80",
            description: "Early-bird puja vacation slots across Bengal, Sikkim and Odisha with zero cancellation fee."
        }
    ],
    b2bPortals: [
        {
            name: "Riya Connect",
            category: "Flights, Hotels, Visa & Packages",
            url: "https://b2b.riya.travel/",
            loginUrl: "https://b2b.riya.travel/",
            themeColor: "#e11d48",
            description: "India's premier travel agent portal for instant B2B air tickets, global hotels, travel insurance & customized holiday itineraries.",
            agentId: "SG-RIYA-7729",
            contactPhone: "1800 121 7492",
            portalNotes: "Special offline net fares on Kolkata-Bagdogra & Kolkata-Bhubaneswar flights. Instant ticketing credit available."
        },
        {
            name: "Tripjack",
            category: "Flights, Hotels & Activities",
            url: "https://tripjack.com",
            loginUrl: "https://tripjack.com/login",
            themeColor: "#f59e0b",
            description: "Top-rated agent portal with heavy agent markups, zero cancellation options, and verified hotel rates across Sikkim & Northeast India.",
            agentId: "TJ-SARKAR-4402",
            contactPhone: "+91 22 6902 4444",
            portalNotes: "Use for Darjeeling & Gangtok luxury hotel inventory. Instant room vouchers directly sent to client WhatsApp."
        },
        {
            name: "MakeMyTrip Partner (MyBiz / Holiday Partner)",
            category: "Hotels, Homestays & Holidays",
            url: "https://partner.makemytrip.com",
            loginUrl: "https://mybiz.makemytrip.com/login",
            themeColor: "#0284c7",
            description: "MMT's official B2B holiday portal. Access 100,000+ domestic hotels, exclusive partner coupons, and instant GST invoices.",
            agentId: "MMT-PARTNER-9081",
            contactPhone: "0124 462 8747",
            portalNotes: "Best for Puri sea-facing resorts, Mandarmani beachfront villas, and luxury chain discounts."
        },
        {
            name: "TBO Holidays (Travel Boutique Online)",
            category: "Global & Domestic B2B Portal",
            url: "https://www.tboholidays.com",
            loginUrl: "https://www.tboholidays.com",
            themeColor: "#10b981",
            description: "Global travel distribution platform for agents. Competitive pricing on multi-city holiday packages and luxury transport.",
            agentId: "TBO-KOL-3319",
            contactPhone: "+91 124 499 8999",
            portalNotes: "Use for customized Kerala backwaters, Kashmir, and Andaman package quotes."
        },
        {
            name: "EaseMyTrip B2B",
            category: "Zero Convenience Fee Flight Portal",
            url: "https://b2b.easemytrip.com",
            loginUrl: "https://b2b.easemytrip.com/agent-login",
            themeColor: "#6366f1",
            description: "Dedicated B2B agent portal with 0% portal fees, high commissions on non-LCC airlines, and group ticket desks.",
            agentId: "EMT-B2B-1940",
            contactPhone: "011 4313 1313",
            portalNotes: "Best for corporate client flights and emergency last-minute group PNR holds."
        }
    ],
    promoCodes: [
        { code: "PUJA2026", discount: "12% OFF", validTill: "2026-11-30", type: "Festive", status: "Active", uses: 28 },
        { code: "HILLSTOUR", discount: "₹1,500 FLAT", validTill: "2026-12-31", type: "Darjeeling/Sikkim", status: "Active", uses: 45 },
        { code: "EARLYBIRD10", discount: "10% OFF", validTill: "2026-11-15", type: "Advance Booking", status: "Active", uses: 19 },
        { code: "HONEYMOONVIP", discount: "Free Cab Upgrade", validTill: "2026-12-31", type: "Couples", status: "Active", uses: 12 }
    ],
    marketingTemplates: [
        {
            title: "🌸 Darjeeling & Gangtok Puja Special",
            text: "Hello [Client Name]! ✨ Plan your magical Himalayan getaway with Sarkar Getaways. 3N/4D Gangtok + Darjeeling luxury packages starting at ₹7,499/person with verified B2B hotels & private cab with en-route Teesta stops! Reply 'INFO' or call +91 98301 23456 to get your instant quote."
        },
        {
            title: "🌊 Mandarmani & Puri Weekend Retreat",
            text: "Craving the sound of waves, [Client Name]? 🏖️ Escape the city this weekend! Stay at beach-facing luxury resorts in Mandarmani / Puri with private doorstep cab pickup. Special agent rate ₹5,999/person. Limited weekend slots available. Let's customize your trip today!"
        },
        {
            title: "🐅 Sundarbans Mangrove Adventure",
            text: "Experience the wilderness of UNESCO Sundarbans with Sarkar Getaways! 🌿 2N/3D guided boat safari, riverside eco-resort stays, and authentic Bengali feasts. Special festive family discount active. Call us to book your private boat today!"
        }
    ]
};

// ==================================================
// ADMIN STATE & LOCAL STORAGE SYNC
// ==================================================

class AdminStore {
    constructor() {
        this.storageKey = "sarkar_admin_data_v1";
        this.data = this.loadData();
    }

    loadData() {
        let loaded = null;
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (raw) {
                const parsed = JSON.parse(raw);
                loaded = { ...INITIAL_ADMIN_DATA, ...parsed };
            }
        } catch (e) {
            console.warn("Could not load stored admin data, using defaults.", e);
        }
        if (!loaded) {
            loaded = JSON.parse(JSON.stringify(INITIAL_ADMIN_DATA));
        }

        // Automatic Data Migration & Enhancement
        if (!loaded.drivers || loaded.drivers.length === 0) {
            loaded.drivers = JSON.parse(JSON.stringify(INITIAL_ADMIN_DATA.drivers));
        }
        if (!loaded.activities || loaded.activities.length === 0) {
            loaded.activities = JSON.parse(JSON.stringify(INITIAL_ADMIN_DATA.activities));
        }
        if (!loaded.deals || loaded.deals.length === 0) {
            loaded.deals = JSON.parse(JSON.stringify(INITIAL_ADMIN_DATA.deals));
        }

        // Ensure packages have images, ratings & includes checklist
        if (loaded.packages) {
            loaded.packages.forEach((pkg, idx) => {
                const def = INITIAL_ADMIN_DATA.packages[idx] || INITIAL_ADMIN_DATA.packages[0];
                if (!pkg.coverImage) pkg.coverImage = def.coverImage;
                if (!pkg.gallery) pkg.gallery = def.gallery;
                if (!pkg.rating) pkg.rating = def.rating || 4.9;
                if (!pkg.ratingCount) pkg.ratingCount = def.ratingCount || "850+ ratings";
                if (!pkg.category) pkg.category = def.category || "Himalayan Getaway";
                if (!pkg.quota) pkg.quota = def.quota || "20 pax / batch";
                if (!pkg.includes || pkg.includes.length === 0) pkg.includes = def.includes || [];
            });
        }

        // Guarantee official Riya Connect B2B portal URL
        if (loaded.b2bPortals) {
            const riya = loaded.b2bPortals.find(p => p.name === "Riya Connect");
            if (riya) {
                riya.url = "https://b2b.riya.travel/";
                riya.loginUrl = "https://b2b.riya.travel/";
            }
        }
        return loaded;
    }

    save() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        } catch (e) {
            console.error("Failed to save admin data to localStorage:", e);
        }
    }

    // Auth
    checkAuth() {
        return sessionStorage.getItem("sarkar_admin_session") === "authorized";
    }

    login(pin) {
        if (pin === this.data.authPin || pin === "sarkar2026" || pin === "1234") {
            sessionStorage.setItem("sarkar_admin_session", "authorized");
            return true;
        }
        return false;
    }

    logout() {
        sessionStorage.removeItem("sarkar_admin_session");
    }

    // Enquiries
    addEnquiry(enquiry) {
        enquiry.id = "ENQ-" + Math.floor(100 + Math.random() * 900);
        enquiry.date = new Date().toISOString().slice(0, 16).replace("T", " ");
        enquiry.status = enquiry.status || "New";
        this.data.enquiries.unshift(enquiry);
        this.addActivity({
            user: enquiry.name,
            action: `New enquiry for ${enquiry.destination} (${enquiry.phone})`,
            type: "enquiry",
            icon: "fa-solid fa-envelope",
            color: "text-blue-400"
        });
        this.save();
        renderAdminDashboard();
        return enquiry;
    }

    updateEnquiryStatus(id, newStatus) {
        const item = this.data.enquiries.find(e => e.id === id);
        if (item) {
            item.status = newStatus;
            this.save();
            renderEnquiriesTab();
            renderAdminDashboard();
        }
    }

    deleteEnquiry(id) {
        this.data.enquiries = this.data.enquiries.filter(e => e.id !== id);
        this.save();
        renderEnquiriesTab();
        renderAdminDashboard();
    }

    // Bookings
    addBooking(booking) {
        if (!booking.id) {
            booking.id = "SG-BK-" + Math.floor(8000 + Math.random() * 1999);
        }
        booking.voucherCode = booking.voucherCode || ("VCH-" + booking.id);
        booking.createdDate = booking.createdDate || new Date().toISOString().slice(0, 10);
        this.data.bookings.unshift(booking);
        this.addActivity({
            user: booking.clientName,
            action: `Confirmed ${booking.destination} booking (Advance ₹${Number(booking.advancePaid).toLocaleString('en-IN')})`,
            type: "booking",
            icon: "fa-solid fa-circle-check",
            color: "text-emerald-400"
        });
        this.save();
        renderAdminDashboard();
        return booking;
    }

    updateBooking(updatedBooking) {
        const idx = this.data.bookings.findIndex(b => b.id === updatedBooking.id);
        if (idx !== -1) {
            this.data.bookings[idx] = { ...this.data.bookings[idx], ...updatedBooking };
            this.save();
            renderTravellersTab();
            renderCalendarTab();
            renderAdminDashboard();
        }
    }

    deleteBooking(id) {
        this.data.bookings = this.data.bookings.filter(b => b.id !== id);
        this.save();
        renderTravellersTab();
        renderCalendarTab();
        renderAdminDashboard();
    }

    // Packages
    addPackage(pkg) {
        pkg.id = "PKG-" + Math.random().toString(36).substring(2, 7).toUpperCase();
        if (!pkg.coverImage) {
            pkg.coverImage = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80";
        }
        if (!pkg.gallery) {
            pkg.gallery = [
                pkg.coverImage,
                "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
            ];
        }
        pkg.rating = 4.9;
        pkg.ratingCount = "New Curated Route";
        this.data.packages.unshift(pkg);
        this.save();
        renderPackagesTab();
        renderAdminDashboard();
        return pkg;
    }

    deletePackage(id) {
        this.data.packages = this.data.packages.filter(p => p.id !== id);
        this.save();
        renderPackagesTab();
        renderAdminDashboard();
    }

    // Drivers & Fleet CRM
    addDriver(drv) {
        drv.id = "DRV-" + Math.floor(100 + Math.random() * 900);
        this.data.drivers.unshift(drv);
        this.save();
        renderGuidesTab();
        return drv;
    }

    deleteDriver(id) {
        this.data.drivers = this.data.drivers.filter(d => d.id !== id);
        this.save();
        renderGuidesTab();
    }

    // Activities Ledger
    addActivity(act) {
        act.id = "ACT-" + Date.now();
        act.time = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
        this.data.activities.unshift(act);
        if (this.data.activities.length > 15) {
            this.data.activities.pop();
        }
    }

    // Promo Codes
    addPromo(promo) {
        this.data.promoCodes.unshift(promo);
        this.save();
        renderMarketingTab();
    }

    deletePromo(code) {
        this.data.promoCodes = this.data.promoCodes.filter(p => p.code !== code);
        this.save();
        renderMarketingTab();
    }

    // Portal Credentials
    savePortalCreds(name, agentId, phone, notes) {
        const portal = this.data.b2bPortals.find(p => p.name === name);
        if (portal) {
            portal.agentId = agentId;
            portal.contactPhone = phone;
            portal.portalNotes = notes;
            this.save();
            renderB2BTab();
        }
    }

    exportJSON() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, 2));
        const a = document.createElement("a");
        a.href = dataStr;
        a.download = `sarkar_getaways_admin_backup_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    resetDefaults() {
        if (confirm("Reset all admin data to default template? Current custom changes will be reset.")) {
            this.data = JSON.parse(JSON.stringify(INITIAL_ADMIN_DATA));
            this.save();
            location.reload();
        }
    }
}

const adminStore = new AdminStore();

// View state flags
window.currentPackageViewMode = 'showcase'; // 'showcase' (Screen 3) or 'itinerary' (Screen 4)
window.selectedPackageId = INITIAL_ADMIN_DATA.packages[0].id;
window.selectedDriverId = INITIAL_ADMIN_DATA.drivers[0].id;
window.selectedEnquiryId = INITIAL_ADMIN_DATA.enquiries[0].id;
window.revenuePeriod = 'weekly'; // 'weekly' or 'monthly'

// Dynamic Authentic Destination Photography Helper
function getDestinationImage(dest) {
    if (!dest) return "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80";
    const d = dest.toLowerCase();
    if (d.includes("darjeeling") || d.includes("tea")) {
        return "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80";
    }
    if (d.includes("gangtok") || d.includes("sikkim") || d.includes("tsomgo")) {
        return "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80";
    }
    if (d.includes("mandarmani") || d.includes("digha") || d.includes("beach")) {
        return "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80";
    }
    if (d.includes("puri") || d.includes("konark") || d.includes("odisha")) {
        return "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80";
    }
    if (d.includes("sundarban") || d.includes("safari")) {
        return "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80";
    }
    if (d.includes("dooars") || d.includes("jungle") || d.includes("wildlife")) {
        return "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80";
    }
    return "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80";
}
window.getDestinationImage = getDestinationImage;

// ==================================================
// CALENDAR ENGINE
// ==================================================

let calCurrentDate = new Date();

function changeCalendarMonth(offset) {
    calCurrentDate.setMonth(calCurrentDate.getMonth() + offset);
    renderCalendarTab();
    renderMiniCalendarWidget();
}

function resetCalendarToToday() {
    calCurrentDate = new Date();
    renderCalendarTab();
    renderMiniCalendarWidget();
}

// ==================================================
// ADMIN UI CONTROLLERS & OPEN/CLOSE
// ==================================================

function openAdminLogin() {
    if (adminStore.checkAuth()) {
        openAdminPanel();
        return;
    }
    const modal = document.getElementById("admin-login-modal");
    if (modal) {
        modal.classList.add("active");
        const pinInput = document.getElementById("admin-pin-input");
        if (pinInput) {
            pinInput.value = "";
            pinInput.focus();
        }
    }
}

function closeAdminLogin() {
    const modal = document.getElementById("admin-login-modal");
    if (modal) modal.classList.remove("active");
}

function submitAdminLogin(event) {
    if (event) event.preventDefault();
    const pinInput = document.getElementById("admin-pin-input");
    const pin = pinInput ? pinInput.value.trim() : "";
    const errorEl = document.getElementById("admin-login-error");

    if (adminStore.login(pin)) {
        if (errorEl) errorEl.classList.add("hidden");
        closeAdminLogin();
        openAdminPanel();
        showAdminToast("Welcome, Sarkar Getaways Master Admin!");
    } else {
        if (errorEl) {
            errorEl.innerText = "Incorrect PIN. (Default: sarkar2026 or 1234)";
            errorEl.classList.remove("hidden");
        }
        if (pinInput) {
            pinInput.select();
        }
    }
}

function openAdminPanel() {
    const overlay = document.getElementById("admin-panel-overlay");
    if (overlay) {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
        renderAllAdminTabs();
        startAdminClock();
    }
}

function closeAdminPanel() {
    const overlay = document.getElementById("admin-panel-overlay");
    if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

function logoutAdmin() {
    adminStore.logout();
    closeAdminPanel();
    if (typeof showToast === "function") {
        showToast("Logged out of Admin HQ successfully.");
    }
}

function switchAdminTab(tabName) {
    document.querySelectorAll(".admin-tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".admin-nav-item").forEach(el => el.classList.remove("active"));

    const targetTab = document.getElementById(`tab-content-${tabName}`);
    const targetNav = document.getElementById(`nav-btn-${tabName}`);

    if (targetTab) targetTab.classList.add("active");
    if (targetNav) targetNav.classList.add("active");

    // Dynamic renders on tab switch
    if (tabName === "dashboard") renderAdminDashboard();
    if (tabName === "calendar") renderCalendarTab();
    if (tabName === "travellers") renderTravellersTab();
    if (tabName === "guides") renderGuidesTab();
    if (tabName === "enquiries") renderEnquiriesTab();
    if (tabName === "planners") renderPackagesTab();
    if (tabName === "marketing") renderMarketingTab();
    if (tabName === "b2b") renderB2BTab();
}

function startAdminClock() {
    const clockEl = document.getElementById("admin-live-clock");
    const dateEl = document.getElementById("admin-live-date");
    function update() {
        const now = new Date();
        if (clockEl) {
            clockEl.innerText = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        }
        if (dateEl) {
            dateEl.innerText = now.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
        }
    }
    update();
    setInterval(update, 1000);
}

function showAdminToast(msg) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-msg");
    if (toast && toastMsg) {
        toastMsg.innerText = msg;
        toast.classList.remove("translate-y-32", "opacity-0");
        toast.classList.add("translate-y-0", "opacity-100");
        setTimeout(() => {
            toast.classList.remove("translate-y-0", "opacity-100");
            toast.classList.add("translate-y-32", "opacity-0");
        }, 3500);
    }
}

// ==================================================
// RENDERERS FOR ADMIN TABS
// ==================================================

function renderAllAdminTabs() {
    renderAdminDashboard();
    renderCalendarTab();
    renderTravellersTab();
    renderGuidesTab();
    renderEnquiriesTab();
    renderPackagesTab();
    renderMarketingTab();
    renderB2BTab();
}

// --------------------------------------------------
// 1. DASHBOARD OVERVIEW (TRAVELIE LUXURY REDESIGN)
// --------------------------------------------------
function renderAdminDashboard() {
    const bookings = adminStore.data.bookings;
    const enquiries = adminStore.data.enquiries;
    const packages = adminStore.data.packages;

    // Totals calculation
    const totalGrossRevenue = bookings.reduce((sum, b) => sum + (Number(b.totalAmount) || 0), 0);
    const totalAdvance = bookings.reduce((sum, b) => sum + (Number(b.advancePaid) || 0), 0);
    const totalPax = bookings.reduce((sum, b) => sum + (Number(b.adults) || 1) + (Number(b.kids) || 0), 0);
    const pendingEnquiries = enquiries.filter(e => e.status === "New").length;
    const activeTrips = bookings.filter(b => b.status === "In-Progress" || b.status === "Confirmed").length;
    const completedTrips = bookings.filter(b => b.status === "Completed").length || 38;

    // Update Topbar Badge
    const enqBadge = document.getElementById("nav-badge-enquiries");
    const topBellBadge = document.getElementById("topbar-bell-badge");
    if (enqBadge) {
        enqBadge.innerText = pendingEnquiries;
        enqBadge.style.display = pendingEnquiries > 0 ? "inline-block" : "none";
    }
    if (topBellBadge) {
        topBellBadge.innerText = pendingEnquiries;
        topBellBadge.style.display = pendingEnquiries > 0 ? "flex" : "none";
    }

    // Top 3 KPI Cards
    const kpiBookingEl = document.getElementById("dash-kpi-booking");
    const kpiCustomersEl = document.getElementById("dash-kpi-customers");
    const kpiEarningsEl = document.getElementById("dash-kpi-earnings");
    if (kpiBookingEl) kpiBookingEl.innerText = (bookings.length + 1196).toLocaleString("en-IN");
    if (kpiCustomersEl) kpiCustomersEl.innerText = (totalPax + 2834).toLocaleString("en-IN");
    if (kpiEarningsEl) kpiEarningsEl.innerText = `₹${(totalGrossRevenue + 314000).toLocaleString("en-IN")}`;

    // Render Revenue Wave Spline Chart
    renderRevenueSplineChart();

    // Render Top Destinations Donut
    renderDestinationsDonut();

    // Render Trips Progress Bar
    renderTripsProgressBar(completedTrips, activeTrips, bookings.length);

    // Render Handcrafted Packages Cards
    renderDashboardPackagesCards();

    // Render Mini Calendar
    renderMiniCalendarWidget();

    // Render Upcoming Trips Widget
    renderUpcomingTripsWidget();

    // Render Recent Activity Feed
    renderRecentActivityWidget();

    // Render Recent Messages Desk
    renderRecentMessagesDesk();

    // Render Recent Bookings Table
    renderDashboardBookingsTable();
}

function setRevenuePeriod(period) {
    window.revenuePeriod = period;
    const btnW = document.getElementById("btn-rev-weekly");
    const btnM = document.getElementById("btn-rev-monthly");
    if (btnW && btnM) {
        if (period === 'weekly') {
            btnW.classList.add("bg-brand-gold", "text-slate-950", "font-bold");
            btnW.classList.remove("text-slate-300");
            btnM.classList.remove("bg-brand-gold", "text-slate-950", "font-bold");
            btnM.classList.add("text-slate-300");
        } else {
            btnM.classList.add("bg-brand-gold", "text-slate-950", "font-bold");
            btnM.classList.remove("text-slate-300");
            btnW.classList.remove("bg-brand-gold", "text-slate-950", "font-bold");
            btnW.classList.add("text-slate-300");
        }
    }
    renderRevenueSplineChart();
}

function renderRevenueSplineChart() {
    const container = document.getElementById("revenue-chart-svg-container");
    if (!container) return;

    const isWeekly = (window.revenuePeriod !== 'monthly');

    const labels = isWeekly 
        ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        : ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
    
    // Spline curve coordinates
    const pathD = isWeekly
        ? "M 40,150 Q 80,140 130,165 T 220,130 T 310,65 T 400,105 T 490,95 T 570,110"
        : "M 40,160 Q 90,130 150,140 T 260,95 T 370,60 T 480,85 T 570,70";

    const activePoint = isWeekly
        ? { x: 310, y: 65, label: "₹46,500 • Wed" }
        : { x: 370, y: 60, label: "₹1,84,000 • Sep" };

    container.innerHTML = `
        <svg viewBox="0 0 600 210" class="w-full h-44 overflow-visible" preserveAspectRatio="none">
            <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.38"/>
                    <stop offset="70%" stop-color="#f59e0b" stop-opacity="0.05"/>
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
                </linearGradient>
                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.45"/>
                </filter>
            </defs>

            <!-- Horizontal Grid lines -->
            <line x1="30" y1="40" x2="580" y2="40" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
            <text x="15" y="44" fill="#64748b" font-size="9" font-family="monospace">₹80k</text>

            <line x1="30" y1="90" x2="580" y2="90" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
            <text x="15" y="94" fill="#64748b" font-size="9" font-family="monospace">₹60k</text>

            <line x1="30" y1="140" x2="580" y2="140" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
            <text x="15" y="144" fill="#64748b" font-size="9" font-family="monospace">₹40k</text>

            <line x1="30" y1="180" x2="580" y2="180" stroke="rgba(255,255,255,0.08)"/>
            <text x="15" y="184" fill="#64748b" font-size="9" font-family="monospace">₹0</text>

            <!-- Gradient Area Fill -->
            <path d="${pathD} L 570,180 L 40,180 Z" fill="url(#revenueGrad)"/>

            <!-- Main Spline Curve -->
            <path d="${pathD}" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" filter="url(#goldGlow)"/>

            <!-- Active Data Point & Tooltip -->
            <line x1="${activePoint.x}" y1="${activePoint.y}" x2="${activePoint.x}" y2="180" stroke="#f59e0b" stroke-dasharray="2 3" stroke-width="1.5"/>
            <circle cx="${activePoint.x}" cy="${activePoint.y}" r="6" fill="#020617" stroke="#f59e0b" stroke-width="3"/>
            <circle cx="${activePoint.x}" cy="${activePoint.y}" r="2.5" fill="#ffffff"/>

            <!-- Floating Tooltip Box -->
            <g transform="translate(${activePoint.x - 45}, ${activePoint.y - 32})">
                <rect width="90" height="24" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.5))"/>
                <text x="45" y="15" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">${activePoint.label}</text>
            </g>

            <!-- Bottom X-Axis Day Labels -->
            ${labels.map((lbl, i) => {
                const xPos = 40 + i * ((570 - 40) / (labels.length - 1));
                return `<text x="${xPos}" y="200" fill="#94a3b8" font-size="10" font-weight="600" text-anchor="middle">${lbl}</text>`;
            }).join("")}
        </svg>
    `;
}

function renderDestinationsDonut() {
    const donutEl = document.getElementById("destinations-donut-container");
    if (!donutEl) return;

    // Proportions: Darjeeling (35%), Gangtok (28%), Mandarmani (22%), Puri (15%)
    // Circumference = 2 * PI * 40 = 251.32
    // Slices stroke-dasharray:
    // S1: 35% -> 88
    // S2: 28% -> 70.3
    // S3: 22% -> 55.3
    // S4: 15% -> 37.7
    donutEl.innerHTML = `
        <div class="flex items-center gap-5">
            <div class="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" class="w-full h-full -rotate-90">
                    <!-- Base Track -->
                    <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="14"/>

                    <!-- Darjeeling 35% (Gold) -->
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#f59e0b" stroke-width="14"
                        stroke-dasharray="83.5 155.4" stroke-dashoffset="0"/>

                    <!-- Gangtok 28% (Sapphire Blue) -->
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#0284c7" stroke-width="14"
                        stroke-dasharray="66.8 172.1" stroke-dashoffset="-84.5"/>

                    <!-- Mandarmani 22% (Emerald) -->
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#10b981" stroke-width="14"
                        stroke-dasharray="52.5 186.4" stroke-dashoffset="-152"/>

                    <!-- Puri 15% (Purple/Rose) -->
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#e11d48" stroke-width="14"
                        stroke-dasharray="35.8 203.1" stroke-dashoffset="-205"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span class="text-xs font-black text-white">1,250</span>
                    <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Pax</span>
                </div>
            </div>

            <!-- Legend List matching Screen 2 -->
            <div class="space-y-1.5 text-xs flex-1">
                <div class="flex items-center justify-between">
                    <span class="flex items-center gap-1.5 text-slate-300">
                        <span class="w-2 h-2 rounded-full bg-amber-400"></span> Darjeeling (35%)
                    </span>
                    <strong class="text-white text-[11px]">438 Pax</strong>
                </div>
                <div class="flex items-center justify-between">
                    <span class="flex items-center gap-1.5 text-slate-300">
                        <span class="w-2 h-2 rounded-full bg-blue-500"></span> Gangtok (28%)
                    </span>
                    <strong class="text-white text-[11px]">350 Pax</strong>
                </div>
                <div class="flex items-center justify-between">
                    <span class="flex items-center gap-1.5 text-slate-300">
                        <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Mandarmani (22%)
                    </span>
                    <strong class="text-white text-[11px]">275 Pax</strong>
                </div>
                <div class="flex items-center justify-between">
                    <span class="flex items-center gap-1.5 text-slate-300">
                        <span class="w-2 h-2 rounded-full bg-rose-500"></span> Puri Beach (15%)
                    </span>
                    <strong class="text-white text-[11px]">187 Pax</strong>
                </div>
            </div>
        </div>
    `;
}

function renderTripsProgressBar(done = 620, booked = 465, canceled = 115) {
    const barEl = document.getElementById("trips-distribution-bar");
    if (!barEl) return;

    const total = done + booked + canceled;
    const pctDone = Math.round((done / total) * 100);
    const pctBooked = Math.round((booked / total) * 100);
    const pctCanceled = 100 - pctDone - pctBooked;

    barEl.innerHTML = `
        <div class="space-y-2">
            <div class="flex items-center justify-between text-xs font-semibold">
                <span class="text-white flex items-center gap-1.5">
                    <i class="fa-solid fa-plane-departure text-brand-gold"></i>
                    <span>Total Trips: <strong class="text-brand-gold">${total.toLocaleString("en-IN")}</strong></span>
                </span>
                <span class="text-emerald-400 text-[11px]">91% Success Rate</span>
            </div>

            <!-- Segmented Progress Bar -->
            <div class="w-full h-3 rounded-full overflow-hidden flex bg-white/10 p-0.5">
                <div style="width: ${pctDone}%;" class="h-full bg-emerald-400 rounded-l-full" title="Done: ${done}"></div>
                <div style="width: ${pctBooked}%;" class="h-full bg-blue-500" title="Active Booked: ${booked}"></div>
                <div style="width: ${pctCanceled}%;" class="h-full bg-amber-400 rounded-r-full" title="Pending: ${canceled}"></div>
            </div>

            <!-- Sub Legend -->
            <div class="flex items-center justify-between text-[11px] text-slate-300 pt-1">
                <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Completed: <strong class="text-white">${done}</strong></span>
                <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-blue-500"></span> Active Booked: <strong class="text-white">${booked}</strong></span>
                <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-400"></span> Balance Pending: <strong class="text-white">${canceled}</strong></span>
            </div>
        </div>
    `;
}

function renderDashboardPackagesCards() {
    const container = document.getElementById("dash-packages-cards-grid");
    if (!container) return;

    const list = (adminStore.data.packages || []).slice(0, 3);
    container.innerHTML = list.map(pkg => `
        <div class="admin-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brand-gold/60 transition-all duration-300">
            <div>
                <div class="relative h-36 overflow-hidden">
                    <img src="${pkg.coverImage || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80'}" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80'">
                    <span class="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-brand-gold text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-brand-gold/30">
                        ${pkg.category || 'Curated Getaway'}
                    </span>
                    <span class="absolute bottom-2 right-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
                        ${pkg.duration}
                    </span>
                </div>
                <div class="p-4 space-y-1.5">
                    <h4 class="font-bold text-white text-sm truncate">${pkg.title}</h4>
                    <p class="text-xs text-slate-400 truncate"><i class="fa-solid fa-location-dot text-brand-gold mr-1"></i>${pkg.destination}</p>
                </div>
            </div>
            <div class="p-4 pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                    <span class="text-[9px] text-slate-400 uppercase block font-semibold">Selling Rate</span>
                    <span class="text-base font-black text-brand-gold">₹${pkg.sellingPrice.toLocaleString("en-IN")}<span class="text-[10px] text-slate-400 font-normal"> /pax</span></span>
                </div>
                <button onclick="inspectPackage('${pkg.id}')" class="admin-btn admin-btn-outline text-xs py-1.5 px-3">
                    <span>See Detail</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>
    `).join("");
}

function renderDashboardBookingsTable() {
    const tbody = document.getElementById("dash-recent-bookings");
    if (!tbody) return;

    const list = adminStore.data.bookings.slice(0, 5);
    tbody.innerHTML = list.map(b => `
        <tr class="hover:bg-white/5 transition-colors text-xs">
            <td class="font-bold text-white flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-brand-gold font-mono text-[11px]">
                    ${b.clientName.charAt(0)}
                </span>
                <div>
                    <span class="block font-bold text-slate-200">${b.clientName}</span>
                    <span class="text-[10px] text-slate-400">${b.phone}</span>
                </div>
            </td>
            <td class="text-slate-300 font-medium">${b.destination}</td>
            <td class="text-slate-400 font-mono">${b.departureDate}</td>
            <td class="font-bold text-emerald-400 font-mono text-sm">₹${Number(b.totalAmount).toLocaleString("en-IN")}</td>
            <td>
                <span class="admin-status-badge ${b.status.toLowerCase()}">${b.status}</span>
            </td>
            <td class="text-right">
                <div class="flex items-center justify-end gap-1.5">
                    <button onclick="openVoucherModal('${b.id}')" class="admin-btn admin-btn-outline text-xs py-1 px-2.5" title="Print/View Official A4 Voucher & Bill">
                        <i class="fa-solid fa-receipt mr-1 text-brand-gold"></i> Voucher
                    </button>
                    <button onclick="editTravellerDetails('${b.id}')" class="admin-btn admin-btn-gold text-xs py-1 px-2.5" title="Customize Booking">
                        <i class="fa-solid fa-sliders"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join("");
}

// --------------------------------------------------
// SIDEBAR WIDGETS (MINI CALENDAR, UPCOMING TRIPS, RECENT ACTIVITY)
// --------------------------------------------------

function renderMiniCalendarWidget() {
    const monthEl = document.getElementById("dash-mini-cal-month");
    const gridEl = document.getElementById("dash-mini-cal-grid");
    if (!gridEl) return;

    const year = calCurrentDate.getFullYear();
    const month = calCurrentDate.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (monthEl) monthEl.innerText = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const today = new Date();

    const departureDates = (adminStore.data.bookings || []).map(b => b.departureDate);

    let cellsHtml = "";
    // Previous month filler days (faded actual day numbers)
    for (let i = firstDay - 1; i >= 0; i--) {
        const dNum = prevMonthDays - i;
        cellsHtml += `<div class="text-slate-600/50 text-center py-1 text-[11px] select-none font-medium">${dNum}</div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const isToday = (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day);
        const dayBookings = (adminStore.data.bookings || []).filter(b => b.departureDate === dateStr);
        const hasDeparture = dayBookings.length > 0;

        let cls = "text-center py-1 text-xs rounded-lg transition-all cursor-pointer relative font-medium ";
        if (isToday) {
            cls += "bg-brand-gold text-slate-950 font-black shadow-md shadow-brand-gold/20 ";
        } else if (hasDeparture) {
            cls += "bg-blue-500/20 text-blue-300 font-bold border border-blue-500/40 hover:bg-blue-500/30 ";
        } else {
            cls += "text-slate-300 hover:bg-white/10 hover:text-white ";
        }

        cellsHtml += `
            <div class="${cls}" onclick="calCurrentDate = new Date(${year}, ${month}, ${day}); switchAdminTab('calendar');" title="${hasDeparture ? `${dayBookings.length} departure(s) on ${dateStr}` : dateStr}">
                ${day}
                ${hasDeparture && !isToday ? '<span class="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>' : ''}
            </div>
        `;
    }

    // Trailing next month filler days to complete rectangular grid
    const totalFilled = firstDay + daysInMonth;
    const totalSlots = Math.ceil(totalFilled / 7) * 7;
    const trailingDays = totalSlots - totalFilled;
    for (let nextDay = 1; nextDay <= trailingDays; nextDay++) {
        cellsHtml += `<div class="text-slate-600/50 text-center py-1 text-[11px] select-none font-medium">${nextDay}</div>`;
    }

    gridEl.innerHTML = cellsHtml;
}

function renderUpcomingTripsWidget() {
    const container = document.getElementById("dash-upcoming-trips-list");
    if (!container) return;

    const bookings = (adminStore.data.bookings || []).slice(0, 4);
    container.innerHTML = bookings.map(b => `
        <div class="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.07] transition-all flex items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-11 h-11 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 border border-white/10 shadow-sm">
                    <img src="${getDestinationImage(b.destination)}" alt="${b.destination}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=150&q=80'">
                </div>
                <div class="min-w-0">
                    <h5 class="font-bold text-white text-xs truncate">${b.destination}</h5>
                    <span class="text-[10px] text-slate-400 block truncate mt-0.5"><i class="fa-solid fa-calendar-day mr-1 text-brand-gold/80"></i>${b.departureDate} • ${b.clientName}</span>
                </div>
            </div>
            <div class="text-right flex-shrink-0">
                <span class="admin-status-badge ${b.status.toLowerCase().replace(/\s+/g, '-')} text-[9px] py-0.5 px-2 font-bold">${b.status}</span>
                <span class="text-[10px] text-slate-400 block mt-1 font-mono">${b.adults} Adults${b.kids > 0 ? ' + ' + b.kids + ' Kids' : ''}</span>
            </div>
        </div>
    `).join("");
}

function renderRecentActivityWidget() {
    const container = document.getElementById("dash-recent-activity-feed");
    if (!container) return;

    const list = (adminStore.data.activities || []).slice(0, 5);
    container.innerHTML = list.map(act => `
        <div class="flex items-start gap-2.5 text-xs">
            <div class="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 ${act.color || 'text-brand-gold'}">
                <i class="${act.icon || 'fa-solid fa-bolt'} text-[11px]"></i>
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-slate-200 text-xs leading-snug font-medium">${act.action}</p>
                <span class="text-[10px] text-slate-500 font-mono">${act.time}</span>
            </div>
        </div>
    `).join("");
}

function renderRecentMessagesDesk() {
    const container = document.getElementById("dash-messages-desk-list");
    if (!container) return;

    const list = (adminStore.data.enquiries || []).slice(0, 3);
    container.innerHTML = list.map(e => `
        <div class="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all flex items-center justify-between gap-2.5 text-xs cursor-pointer" onclick="openEnquiryChat('${e.id}')">
            <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold font-bold flex items-center justify-center border border-brand-gold/30 flex-shrink-0 text-xs">
                    ${e.name.charAt(0)}
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-1.5">
                        <strong class="text-white text-xs truncate">${e.name}</strong>
                        <span class="text-[9px] text-slate-500 font-mono">${e.date ? e.date.slice(11, 16) : 'Now'}</span>
                    </div>
                    <p class="text-[11px] text-slate-400 truncate">${e.datesNotes || e.destination}</p>
                </div>
            </div>
            <a href="https://wa.me/${e.phone.replace(/[^0-9]/g, '')}" target="_blank" onclick="event.stopPropagation()" class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 flex items-center justify-center text-xs flex-shrink-0" title="Reply on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
        </div>
    `).join("");
}

// --------------------------------------------------
// 2. TOUR & TRAVEL PLANNERS (DUAL SHOWCASE & ITINERARY INSPECTOR)
// --------------------------------------------------
function setPackageViewMode(mode) {
    window.currentPackageViewMode = mode;
    renderPackagesTab();
}

function selectPackage(pkgId) {
    window.selectedPackageId = pkgId;
    renderPackagesTab();
}

function inspectPackage(pkgId) {
    window.selectedPackageId = pkgId;
    window.currentPackageViewMode = 'itinerary';
    switchAdminTab('planners');
}

function renderPackagesTab() {
    const container = document.getElementById("planners-view-container");
    if (!container) return;

    const packages = adminStore.data.packages || [];
    const activePkg = packages.find(p => p.id === window.selectedPackageId) || packages[0];
    const isShowcase = (window.currentPackageViewMode === 'showcase');

    // Update view switcher tabs UI
    const btnShowcase = document.getElementById("btn-pkg-view-showcase");
    const btnItin = document.getElementById("btn-pkg-view-itin");
    if (btnShowcase && btnItin) {
        if (isShowcase) {
            btnShowcase.classList.add("bg-brand-gold", "text-slate-950", "font-bold");
            btnShowcase.classList.remove("text-slate-300");
            btnItin.classList.remove("bg-brand-gold", "text-slate-950", "font-bold");
            btnItin.classList.add("text-slate-300");
        } else {
            btnItin.classList.add("bg-brand-gold", "text-slate-950", "font-bold");
            btnItin.classList.remove("text-slate-300");
            btnShowcase.classList.remove("bg-brand-gold", "text-slate-950", "font-bold");
            btnShowcase.classList.add("text-slate-300");
        }
    }

    if (isShowcase) {
        // SCREEN 3: CATALOG & HERO SHOWCASE
        container.innerHTML = `
            <div class="space-y-6">
                <!-- TOP HERO SHOWCASE (Matching Screen 3) -->
                <div class="admin-card rounded-2xl p-6 relative overflow-hidden">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <!-- Left Big Image + 3 Thumbnails Strip -->
                        <div class="lg:col-span-4 space-y-3">
                            <div class="relative h-56 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                <img src="${activePkg.coverImage}" alt="${activePkg.title}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'">
                                <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-brand-gold text-xs font-bold px-3 py-1 rounded-full border border-brand-gold/30">
                                    Featured Route
                                </span>
                            </div>
                            <div class="grid grid-cols-3 gap-2">
                                ${(activePkg.gallery || []).map((img, idx) => `
                                    <div class="h-16 rounded-xl overflow-hidden border border-white/10 hover:border-brand-gold/60 cursor-pointer transition-all" onclick="selectPackageCover('${activePkg.id}', '${img}')">
                                        <img src="${img}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80'">
                                    </div>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Center Info & Description -->
                        <div class="lg:col-span-5 space-y-3">
                            <div>
                                <span class="text-xs font-bold text-brand-gold uppercase tracking-wider block">${activePkg.category || 'Handcrafted Getaway'}</span>
                                <h3 class="text-2xl font-black text-white mt-1">${activePkg.title}</h3>
                                <p class="text-xs text-slate-400 mt-0.5"><i class="fa-solid fa-location-dot text-brand-gold mr-1"></i>${activePkg.destination}</p>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Escape to pristine scenic mountain vistas, lush tea gardens, verified luxury hotels, and exclusive private transport arranged directly through our B2B agent network.
                            </p>
                            <div class="flex items-center gap-6 pt-2">
                                <div>
                                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Package Rate</span>
                                    <span class="text-xl font-black text-brand-gold">₹${activePkg.sellingPrice.toLocaleString("en-IN")}<span class="text-xs text-slate-400 font-normal"> /pax</span></span>
                                </div>
                                <div>
                                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Duration</span>
                                    <span class="text-sm font-bold text-white">${activePkg.duration}</span>
                                </div>
                                <div>
                                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Guest Rating</span>
                                    <span class="text-sm font-bold text-emerald-400"><i class="fa-solid fa-star text-amber-400 mr-1"></i>${activePkg.rating}</span>
                                </div>
                            </div>
                            <div class="pt-2 flex items-center gap-3">
                                <button onclick="setPackageViewMode('itinerary')" class="admin-btn admin-btn-gold text-xs py-2 px-4">
                                    <i class="fa-solid fa-calendar-days mr-1"></i> View Day-by-Day Schedule
                                </button>
                                <button onclick="copyItineraryForWhatsApp('${activePkg.id}')" class="admin-btn admin-btn-outline text-xs py-2 px-3">
                                    <i class="fa-brands fa-whatsapp text-emerald-400 mr-1"></i> Copy Plan
                                </button>
                            </div>
                        </div>

                        <!-- Right Feature Checklist (Screen 3) -->
                        <div class="lg:col-span-3 bg-black/40 rounded-xl p-4 border border-white/10 space-y-2.5 text-xs text-slate-200">
                            <span class="text-[10px] uppercase font-bold text-brand-gold tracking-widest block">Package Inclusions</span>
                            <div class="flex items-start gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-400 text-sm mt-0.5"></i>
                                <span><strong>Exclusive Cab:</strong> ${activePkg.vehicle.slice(0, 32)}...</span>
                            </div>
                            <div class="flex items-start gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-400 text-sm mt-0.5"></i>
                                <span><strong>Verified Stay:</strong> ${activePkg.hotelStar} (${activePkg.mealPlan})</span>
                            </div>
                            <div class="flex items-start gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-400 text-sm mt-0.5"></i>
                                <span><strong>Permits & Tolls:</strong> All state taxes & driver fooding included</span>
                            </div>
                            <div class="flex items-start gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-400 text-sm mt-0.5"></i>
                                <span><strong>Agency Margin:</strong> ₹${activePkg.markupAmount} net retained</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- POPULAR & RECOMMENDED PACKAGES GRID (Screen 3) -->
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-bold text-white flex items-center gap-2">
                            <i class="fa-solid fa-compass text-brand-gold"></i> Handcrafted Route Catalog
                        </h3>
                        <span class="text-xs text-slate-400">Showing ${packages.length} active routes</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        ${packages.map(pkg => `
                            <div class="admin-card rounded-2xl p-5 flex flex-col justify-between group hover:border-brand-gold/60 transition-all">
                                <div>
                                    <div class="relative h-44 rounded-xl overflow-hidden mb-3">
                                        <img src="${pkg.coverImage}" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80'">
                                        <span class="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-gold/30">
                                            ${pkg.duration}
                                        </span>
                                        <span class="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                            <i class="fa-solid fa-star text-amber-400 mr-1"></i>${pkg.rating}
                                        </span>
                                    </div>
                                    <h4 class="text-base font-bold text-white group-hover:text-brand-gold transition-colors">${pkg.title}</h4>
                                    <p class="text-xs text-slate-400 mb-2"><i class="fa-solid fa-location-dot text-brand-gold mr-1"></i>${pkg.destination}</p>
                                    
                                    <div class="p-2.5 rounded-xl bg-black/30 border border-white/5 space-y-1 text-xs text-slate-300 my-2">
                                        <div class="flex items-center gap-1.5"><i class="fa-solid fa-car text-brand-gold text-[10px]"></i> ${pkg.vehicle}</div>
                                        <div class="flex items-center gap-1.5"><i class="fa-solid fa-hotel text-brand-gold text-[10px]"></i> ${pkg.hotelStar}</div>
                                    </div>
                                </div>

                                <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                                    <div>
                                        <span class="text-[9px] text-slate-400 uppercase block font-semibold">Selling Price</span>
                                        <strong class="text-base font-black text-emerald-400">₹${pkg.sellingPrice.toLocaleString("en-IN")}</strong>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                        <button onclick="inspectPackage('${pkg.id}')" class="admin-btn admin-btn-gold text-xs py-1.5 px-3">
                                            <span>Details</span>
                                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                        </button>
                                        <button onclick="copyItineraryForWhatsApp('${pkg.id}')" class="admin-btn admin-btn-outline text-xs py-1.5 px-2.5" title="Copy for WhatsApp">
                                            <i class="fa-brands fa-whatsapp text-emerald-400"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `;
    } else {
        // SCREEN 4: SPLIT DAY-BY-DAY ITINERARY BUILDER & INSPECTOR
        container.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <!-- Left Column: Package List (Screen 4 Left) -->
                <div class="lg:col-span-4 space-y-3">
                    <div class="flex items-center justify-between pb-1">
                        <span class="text-xs font-bold text-white uppercase tracking-wider">Packages List</span>
                        <button onclick="promptNewPackage()" class="admin-btn admin-btn-gold text-xs py-1 px-2.5">
                            <i class="fa-solid fa-plus mr-1"></i> Add Package
                        </button>
                    </div>

                    <div class="space-y-2 max-h-[750px] overflow-y-auto pr-1">
                        ${packages.map(pkg => `
                            <div class="p-3 rounded-xl border transition-all cursor-pointer ${pkg.id === activePkg.id ? 'bg-slate-900 border-brand-gold/60 shadow-lg' : 'bg-slate-900/50 border-white/10 hover:border-white/20'}" onclick="selectPackage('${pkg.id}')">
                                <div class="flex items-center gap-3">
                                    <div class="w-14 h-14 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 border border-white/10">
                                        <img src="${pkg.coverImage}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80'">
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <h5 class="font-bold text-white text-xs truncate">${pkg.title}</h5>
                                        <span class="text-[11px] text-brand-gold block truncate">${pkg.destination}</span>
                                        <div class="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                                            <span>${pkg.duration}</span>
                                            <strong class="text-emerald-400">₹${pkg.sellingPrice.toLocaleString("en-IN")}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Center & Right: Selected Itinerary Details + Day-by-Day (Screen 4 Center & Right) -->
                <div class="lg:col-span-8 space-y-5">
                    <!-- Package Banner & Specs -->
                    <div class="admin-card rounded-2xl p-5 space-y-4">
                        <div class="relative h-60 rounded-xl overflow-hidden border border-white/10">
                            <img src="${activePkg.coverImage}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                                <span class="text-xs text-brand-gold font-bold uppercase tracking-wider">${activePkg.category || 'Handcrafted Route'}</span>
                                <h3 class="text-2xl font-black text-white mt-0.5">${activePkg.title}</h3>
                                <div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-2">
                                    <span><i class="fa-solid fa-location-dot text-brand-gold mr-1"></i>${activePkg.destination}</span>
                                    <span><i class="fa-solid fa-clock text-brand-gold mr-1"></i>${activePkg.duration}</span>
                                    <span><i class="fa-solid fa-users text-brand-gold mr-1"></i>${activePkg.quota || '20 Pax'}</span>
                                    <span class="text-emerald-400 font-bold"><i class="fa-solid fa-star text-amber-400 mr-1"></i>${activePkg.rating}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Highlights & Specs Grid -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-black/40 p-3.5 rounded-xl border border-white/5">
                            <div><span class="text-slate-400 block text-[10px] uppercase font-semibold">Client Selling Price</span><strong class="text-base text-brand-gold">₹${activePkg.sellingPrice}</strong></div>
                            <div><span class="text-slate-400 block text-[10px] uppercase font-semibold">B2B Base Net</span><strong class="text-base text-emerald-400">₹${activePkg.b2bNetCost}</strong></div>
                            <div><span class="text-slate-400 block text-[10px] uppercase font-semibold">Agency Margin</span><strong class="text-base text-amber-400">₹${activePkg.markupAmount}</strong></div>
                            <div><span class="text-slate-400 block text-[10px] uppercase font-semibold">Dedicated Cab</span><strong class="text-white truncate block">${activePkg.vehicle}</strong></div>
                        </div>

                        <!-- Inclusions Checklist -->
                        <div class="space-y-1.5 text-xs text-slate-300 border-t border-white/10 pt-3">
                            <span class="text-[10px] text-brand-gold uppercase font-bold tracking-wider block">Package Inclusions:</span>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                ${(activePkg.includes || []).map(inc => `
                                    <div class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-emerald-400 text-xs mt-0.5"></i>
                                        <span>${inc}</span>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- DAY-BY-DAY ITINERARY TIMELINE (Screen 4 Right) -->
                    <div class="admin-card rounded-2xl p-5 space-y-4">
                        <div class="flex items-center justify-between border-b border-white/10 pb-3">
                            <div>
                                <h4 class="font-bold text-white text-base">Day-by-Day Trip Schedule</h4>
                                <p class="text-xs text-slate-400">Curated daily sightseeing, scenic viewpoints, meal arrangements and halts.</p>
                            </div>
                            <button onclick="copyItineraryForWhatsApp('${activePkg.id}')" class="admin-btn admin-btn-emerald text-xs py-2 px-3">
                                <i class="fa-brands fa-whatsapp mr-1 text-sm"></i> Copy WhatsApp Plan
                            </button>
                        </div>

                        <div class="space-y-3.5">
                            ${(activePkg.itinerary || []).map(d => `
                                <div class="p-4 rounded-xl bg-slate-900/90 border-l-4 border-brand-gold border-r border-t border-b border-white/10 hover:border-brand-gold/40 transition-all">
                                    <div class="flex items-center justify-between mb-1">
                                        <span class="text-[10px] font-black uppercase tracking-wider text-brand-gold bg-brand-gold/15 px-2.5 py-0.5 rounded-full border border-brand-gold/30">
                                            Day ${d.day}
                                        </span>
                                        <span class="text-[10px] text-slate-400 font-mono"><i class="fa-solid fa-clock mr-1"></i>Curated Sightseeing</span>
                                    </div>
                                    <h5 class="text-sm font-bold text-white mt-1">${d.title}</h5>
                                    <p class="text-xs text-slate-300 mt-1 leading-relaxed">${d.detail}</p>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function selectPackageCover(pkgId, imgUrl) {
    const pkg = adminStore.data.packages.find(p => p.id === pkgId);
    if (pkg) {
        pkg.coverImage = imgUrl;
        adminStore.save();
        renderPackagesTab();
    }
}

function deletePackageConfirm(id) {
    if (confirm("Delete this tour package plan?")) {
        adminStore.deletePackage(id);
        showAdminToast("Tour package removed.");
    }
}

function copyItineraryForWhatsApp(pkgId) {
    const pkg = adminStore.data.packages.find(p => p.id === pkgId);
    if (!pkg) return;

    let text = `🌟 *SARKAR GETAWAYS — HANDCRAFTED ITINERARY* 🌟\n\n`;
    text += `📍 *Package:* ${pkg.title} (${pkg.duration})\n`;
    text += `💰 *Package Price:* ₹${pkg.sellingPrice.toLocaleString('en-IN')} per person\n`;
    text += `🚗 *Vehicle Included:* ${pkg.vehicle}\n`;
    text += `🏨 *Stay:* ${pkg.hotelStar} (${pkg.mealPlan})\n\n`;
    text += `*Day-by-Day Sightseeing Plan:*\n`;

    (pkg.itinerary || []).forEach(d => {
        text += `🔹 *Day ${d.day}: ${d.title}*\n${d.detail}\n\n`;
    });

    text += `✅ *Key Inclusions:*\n${(pkg.includes || pkg.highlights || []).map(h => `• ${h}`).join('\n')}\n\n`;
    text += `📞 *Book Directly with Sarkar Getaways:* +91 98301 23456\n_Verified B2B Travel Partner • TripJack & Riya Connect Network_`;

    navigator.clipboard.writeText(text).then(() => {
        showAdminToast("Itinerary copied to clipboard! Ready to paste into WhatsApp.");
    }).catch(() => {
        alert("Copied itinerary:\n\n" + text);
    });
}

function openPackageDetailModal(pkgId) {
    inspectPackage(pkgId);
}

function closePackageDetailModal() {
    const modal = document.getElementById("admin-itinerary-modal");
    if (modal) modal.classList.remove("active");
}

function promptNewPackage() {
    const title = prompt("Enter Package Title (e.g. North Sikkim & Yumthang Valley):");
    if (!title) return;
    const dest = prompt("Enter Destination (e.g. Sikkim):", "Sikkim");
    if (!dest) return;
    const duration = prompt("Enter Duration (e.g. 5 Days / 4 Nights):", "5 Days / 4 Nights");
    const netCost = Number(prompt("Enter B2B Net Cost (₹):", "12000")) || 12000;
    const markup = Number(prompt("Enter Agency Markup (₹):", "3500")) || 3500;
    const vehicle = prompt("Enter Vehicle Included:", "Exclusive Scorpio 4x4");
    const hotel = prompt("Enter Hotel Category:", "Deluxe Valley Resort with MAP meals");

    const newPkg = {
        title: title.trim(),
        destination: dest.trim(),
        duration: (duration || "3 Days / 2 Nights").trim(),
        days: 4,
        b2bNetCost: netCost,
        markupAmount: markup,
        sellingPrice: netCost + markup,
        vehicle: (vehicle || "Private Exclusive Cab").trim(),
        hotelStar: (hotel || "3-Star Deluxe Hotel").trim(),
        mealPlan: "MAP (Breakfast + Dinner)",
        category: "Curated Route",
        rating: 4.9,
        ratingCount: "New Route",
        coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
        ],
        includes: [
            "Dedicated Private Vehicle for full tour duration",
            "Verified Deluxe Hotel accommodation with mountain view",
            "Daily Breakfast & Dinner included (MAP Plan)",
            "All state permits, tolls and chauffeur allowances included"
        ],
        itinerary: [
            { day: 1, title: "Arrival & Scenic Transfer", detail: "Pickup and scenic transfer with en-route viewpoints." },
            { day: 2, title: "High Altitude Sightseeing", detail: "Full day sightseeing with dedicated private driver." },
            { day: 3, title: "Valley Exploration & Monasteries", detail: "Explore attractions and local markets." },
            { day: 4, title: "Return Transfer", detail: "Comfortable drive back with souvenir shopping stops." }
        ]
    };

    adminStore.addPackage(newPkg);
    showAdminToast(`Package "${title}" created successfully!`);
}

// --------------------------------------------------
// 3. GUIDES & FLEET MANAGEMENT (SCREEN 5 LUXURY REDESIGN)
// --------------------------------------------------
function selectDriver(driverId) {
    window.selectedDriverId = driverId;
    renderGuidesTab();
}

function renderGuidesTab() {
    const container = document.getElementById("guides-view-container");
    if (!container) return;

    const drivers = adminStore.data.drivers || [];
    const activeDriver = drivers.find(d => d.id === window.selectedDriverId) || drivers[0];

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <!-- Left Drivers List (Screen 5 Left) -->
            <div class="lg:col-span-5 space-y-3">
                <div class="flex items-center justify-between pb-1">
                    <div>
                        <h3 class="text-base font-bold text-white">Chauffeurs & Fleet</h3>
                        <p class="text-xs text-slate-400">Assigned drivers and dedicated private vehicles.</p>
                    </div>
                    <button onclick="promptNewDriver()" class="admin-btn admin-btn-gold text-xs py-1.5 px-3">
                        <i class="fa-solid fa-plus mr-1"></i> Add Driver
                    </button>
                </div>

                <!-- Driver Search & Filter -->
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <input type="text" oninput="filterDrivers(this.value)" placeholder="Search name, vehicle plate, phone..." class="admin-input pl-8 text-xs py-2 w-full">
                </div>

                <div id="guides-list-items" class="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
                    ${drivers.map(drv => `
                        <div class="p-3.5 rounded-xl border transition-all cursor-pointer ${drv.id === activeDriver.id ? 'bg-slate-900 border-brand-gold/60 shadow-lg' : 'bg-slate-900/60 border-white/10 hover:border-white/20'}" onclick="selectDriver('${drv.id}')">
                            <div class="flex items-center justify-between gap-3">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="w-12 h-12 rounded-full overflow-hidden bg-slate-800 flex-shrink-0 border border-brand-gold/30">
                                        <img src="${drv.avatar}" alt="${drv.name}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'">
                                    </div>
                                    <div class="min-w-0">
                                        <h5 class="font-bold text-white text-sm truncate">${drv.name}</h5>
                                        <span class="text-xs text-brand-gold block truncate">${drv.vehicleModel}</span>
                                        <span class="text-[10px] text-slate-400 block font-mono">${drv.phone}</span>
                                    </div>
                                </div>
                                <div class="text-right flex-shrink-0">
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full ${drv.status.includes('Active') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'}">
                                        ${drv.status}
                                    </span>
                                    <span class="text-[10px] text-slate-400 font-mono block mt-1">${drv.vehiclePlate}</span>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Right Dedicated Driver Inspector (Screen 5 Right) -->
            <div class="lg:col-span-7">
                <div class="admin-card rounded-2xl overflow-hidden space-y-5">
                    <!-- Top Cover & Avatar Banner -->
                    <div class="relative h-40 bg-gradient-to-r from-slate-900 to-slate-950 overflow-hidden border-b border-white/10">
                        <img src="${activeDriver.coverImage}" class="w-full h-full object-cover opacity-60" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    </div>

                    <div class="px-6 -mt-16 relative z-10 space-y-4">
                        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div class="flex items-end gap-3.5">
                                <div class="w-24 h-24 rounded-2xl overflow-hidden bg-slate-900 border-4 border-slate-950 shadow-2xl flex-shrink-0">
                                    <img src="${activeDriver.avatar}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'">
                                </div>
                                <div class="pb-1">
                                    <h3 class="text-2xl font-black text-white">${activeDriver.name}</h3>
                                    <span class="text-xs text-brand-gold font-semibold flex items-center gap-1">
                                        <i class="fa-solid fa-car"></i> ${activeDriver.vehicleModel} • ${activeDriver.vehiclePlate}
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 pb-1">
                                <a href="tel:${activeDriver.phone}" class="admin-btn admin-btn-outline text-xs py-2 px-3">
                                    <i class="fa-solid fa-phone mr-1"></i> Call
                                </a>
                                <a href="https://wa.me/${activeDriver.phone.replace(/[^0-9]/g, '')}" target="_blank" class="admin-btn admin-btn-emerald text-xs py-2 px-3">
                                    <i class="fa-brands fa-whatsapp mr-1 text-sm"></i> WhatsApp
                                </a>
                            </div>
                        </div>

                        <!-- Stat Boxes Grid (Screen 5) -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                            <div class="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                                <span class="text-[10px] text-slate-400 uppercase font-semibold block">Experience</span>
                                <strong class="text-white text-sm block mt-0.5">${activeDriver.workExperience}</strong>
                            </div>
                            <div class="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                                <span class="text-[10px] text-slate-400 uppercase font-semibold block">Seniority Level</span>
                                <strong class="text-brand-gold text-sm block mt-0.5">${activeDriver.experienceLevel}</strong>
                            </div>
                            <div class="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                                <span class="text-[10px] text-slate-400 uppercase font-semibold block">Vehicle Category</span>
                                <strong class="text-emerald-400 text-sm block mt-0.5">${activeDriver.jobType}</strong>
                            </div>
                            <div class="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                                <span class="text-[10px] text-slate-400 uppercase font-semibold block">Fleet Status</span>
                                <strong class="text-blue-400 text-sm block mt-0.5">${activeDriver.status}</strong>
                            </div>
                        </div>

                        <!-- Verified Skills & Accreditations (Screen 5) -->
                        <div class="space-y-2 pt-2">
                            <span class="text-xs font-bold text-white uppercase tracking-wider block">Verified Accreditations & Skills</span>
                            <div class="space-y-1.5 text-xs text-slate-300">
                                ${(activeDriver.skills || []).map(sk => `
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-circle-check text-emerald-400"></i>
                                        <span>${sk}</span>
                                    </div>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Current Trip Assignment -->
                        <div class="p-3.5 rounded-xl bg-slate-900/90 border border-brand-gold/30 space-y-1 text-xs">
                            <span class="text-[10px] uppercase font-bold text-brand-gold tracking-widest block">Assigned Live Booking</span>
                            <div class="flex items-center justify-between text-white font-medium">
                                <span>Guest: <strong>${activeDriver.assignedClient || 'Unassigned'}</strong> (${activeDriver.assignedBookingId || 'No active trip'})</span>
                                <button onclick="switchAdminTab('travellers')" class="text-xs text-brand-gold hover:underline">View Guest Ledger &rarr;</button>
                            </div>
                        </div>

                        <div class="pb-6 pt-2 flex justify-end gap-2 border-t border-white/10">
                            <button onclick="promptEditDriver('${activeDriver.id}')" class="admin-btn admin-btn-outline text-xs py-2 px-4">
                                <i class="fa-solid fa-pen-to-square mr-1"></i> Edit Driver Details
                            </button>
                            <button onclick="deleteDriverConfirm('${activeDriver.id}')" class="admin-btn admin-btn-danger text-xs py-2 px-3">
                                <i class="fa-solid fa-trash-can mr-1"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function filterDrivers(term) {
    const listEl = document.getElementById("guides-list-items");
    if (!listEl) return;
    const q = (term || "").toLowerCase();
    const filtered = (adminStore.data.drivers || []).filter(d => 
        d.name.toLowerCase().includes(q) || d.vehiclePlate.toLowerCase().includes(q) || d.phone.includes(q)
    );
    listEl.innerHTML = filtered.map(drv => `
        <div class="p-3.5 rounded-xl border transition-all cursor-pointer ${drv.id === window.selectedDriverId ? 'bg-slate-900 border-brand-gold/60 shadow-lg' : 'bg-slate-900/60 border-white/10 hover:border-white/20'}" onclick="selectDriver('${drv.id}')">
            <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="w-12 h-12 rounded-full overflow-hidden bg-slate-800 flex-shrink-0 border border-brand-gold/30">
                        <img src="${drv.avatar}" alt="${drv.name}" class="w-full h-full object-cover">
                    </div>
                    <div class="min-w-0">
                        <h5 class="font-bold text-white text-sm truncate">${drv.name}</h5>
                        <span class="text-xs text-brand-gold block truncate">${drv.vehicleModel}</span>
                        <span class="text-[10px] text-slate-400 block font-mono">${drv.phone}</span>
                    </div>
                </div>
                <div class="text-right flex-shrink-0">
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full ${drv.status.includes('Active') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'}">
                        ${drv.status}
                    </span>
                    <span class="text-[10px] text-slate-400 font-mono block mt-1">${drv.vehiclePlate}</span>
                </div>
            </div>
        </div>
    `).join("");
}

function promptNewDriver() {
    const name = prompt("Enter Driver Name (e.g. Ramesh Thapa):");
    if (!name) return;
    const phone = prompt("Driver Phone / WhatsApp:", "+91 ");
    if (!phone) return;
    const cab = prompt("Dedicated Cab Model (e.g. Innova Crysta / Swift Dzire):", "Innova Crysta AC");
    const plate = prompt("Vehicle Registration Plate:", "WB 74 AB 1234");

    const newD = {
        name: name.trim(),
        phone: phone.trim(),
        email: `${name.toLowerCase().replace(/[^a-z]/g, '')}@sarkargetaways.com`,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        role: "Dedicated Route Chauffeur",
        region: "Bengal & Sikkim",
        vehicleModel: (cab || "Private Cab").trim(),
        vehiclePlate: (plate || "WB 74 XX 0000").trim(),
        workExperience: "5+ Years",
        experienceLevel: "Senior Chauffeur",
        jobType: "Dedicated Fleet",
        status: "Available",
        skills: [
            "Hill Driving Certified & State Commercial Badge",
            "Fluent in Bengali & Hindi",
            "Safe Driving & Punctuality Certified"
        ]
    };
    adminStore.addDriver(newD);
    showAdminToast(`Driver ${name} added to fleet!`);
}

function promptEditDriver(id) {
    const drv = adminStore.data.drivers.find(d => d.id === id);
    if (!drv) return;
    const newPhone = prompt("Update Phone number:", drv.phone);
    if (newPhone !== null) drv.phone = newPhone.trim();
    const newCab = prompt("Update Cab Model:", drv.vehicleModel);
    if (newCab !== null) drv.vehicleModel = newCab.trim();
    const newPlate = prompt("Update Vehicle Plate:", drv.vehiclePlate);
    if (newPlate !== null) drv.vehiclePlate = newPlate.trim();
    adminStore.save();
    renderGuidesTab();
    showAdminToast("Driver profile updated.");
}

function deleteDriverConfirm(id) {
    if (confirm("Remove this driver from fleet?")) {
        adminStore.deleteDriver(id);
        showAdminToast("Driver removed.");
    }
}

// --------------------------------------------------
// 4. MESSAGES & LEADS INBOX (SPLIT CONVERSATION DESK)
// --------------------------------------------------
function openEnquiryChat(enquiryId) {
    window.selectedEnquiryId = enquiryId;
    switchAdminTab('enquiries');
}

function renderEnquiriesTab() {
    const container = document.getElementById("enquiries-view-container");
    if (!container) return;

    const enquiries = adminStore.data.enquiries || [];
    const activeEnq = enquiries.find(e => e.id === window.selectedEnquiryId) || enquiries[0];

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <!-- Left Leads List (Screen 6 Left) -->
            <div class="lg:col-span-5 space-y-3">
                <div class="flex items-center justify-between pb-1">
                    <div>
                        <h3 class="text-base font-bold text-white">Live Website Enquiries</h3>
                        <p class="text-xs text-slate-400">Synced in real-time from front-end tour quote forms.</p>
                    </div>
                    <button onclick="promptManualEnquiry()" class="admin-btn admin-btn-outline text-xs py-1.5 px-3">
                        <i class="fa-solid fa-plus mr-1"></i> Add Lead
                    </button>
                </div>

                <div class="space-y-2 max-h-[700px] overflow-y-auto pr-1">
                    ${enquiries.map(e => `
                        <div class="p-3.5 rounded-xl border transition-all cursor-pointer ${e.id === activeEnq.id ? 'bg-slate-900 border-brand-gold/60 shadow-lg' : 'bg-slate-900/60 border-white/10 hover:border-white/20'}" onclick="openEnquiryChat('${e.id}')">
                            <div class="flex items-center justify-between gap-2.5">
                                <div class="flex items-center gap-2.5 min-w-0">
                                    <div class="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold font-bold flex items-center justify-center border border-brand-gold/30 flex-shrink-0 text-xs">
                                        ${e.name.charAt(0)}
                                    </div>
                                    <div class="min-w-0">
                                        <h5 class="font-bold text-white text-xs truncate">${e.name}</h5>
                                        <span class="text-[11px] text-brand-gold block truncate">${e.destination}</span>
                                        <p class="text-[10px] text-slate-400 truncate mt-0.5">${e.datesNotes || 'Quote requested'}</p>
                                    </div>
                                </div>
                                <div class="text-right flex-shrink-0">
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full ${e.status === 'New' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : (e.status === 'Converted' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30')}">
                                        ${e.status}
                                    </span>
                                    <span class="text-[9px] text-slate-500 font-mono block mt-1">${e.date ? e.date.slice(11, 16) : 'Today'}</span>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Right Active Conversation & Conversion Inspector (Screen 6 Right) -->
            <div class="lg:col-span-7">
                ${activeEnq ? `
                    <div class="admin-card rounded-2xl p-6 space-y-5">
                        <!-- Client Header Bar -->
                        <div class="flex items-center justify-between border-b border-white/10 pb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold font-bold flex items-center justify-center border border-brand-gold/30 text-base">
                                    ${activeEnq.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 class="font-bold text-white text-base">${activeEnq.name}</h4>
                                    <div class="flex items-center gap-2 text-xs text-slate-400">
                                        <span><i class="fa-solid fa-phone text-brand-gold mr-1"></i>${activeEnq.phone}</span>
                                        <span>•</span>
                                        <span class="text-brand-gold"><i class="fa-solid fa-location-dot mr-1"></i>${activeEnq.destination}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <a href="https://wa.me/${activeEnq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${activeEnq.name}! This is Sarkar Getaways regarding your inquiry for ${activeEnq.destination}. We'd love to share our customized itinerary and rates with you!`)}" target="_blank" class="admin-btn admin-btn-emerald text-xs py-2 px-3">
                                    <i class="fa-brands fa-whatsapp mr-1 text-sm"></i> WhatsApp
                                </a>
                                <button onclick="convertEnquiryToBooking('${activeEnq.id}')" class="admin-btn admin-btn-gold text-xs py-2 px-3 font-bold">
                                    <i class="fa-solid fa-check-double mr-1"></i> Convert to Booking
                                </button>
                            </div>
                        </div>

                        <!-- Chat Style Lead Details -->
                        <div class="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                            <!-- Inbound Inquiry Bubble -->
                            <div class="flex items-start gap-2.5">
                                <div class="w-8 h-8 rounded-full bg-slate-800 text-slate-300 text-xs flex items-center justify-center font-bold flex-shrink-0">
                                    ${activeEnq.name.charAt(0)}
                                </div>
                                <div class="bg-slate-900 border border-white/10 rounded-2xl rounded-tl-none p-4 max-w-lg space-y-2 text-xs text-slate-200">
                                    <div class="flex items-center justify-between gap-4 border-b border-white/5 pb-1 text-[10px] text-slate-400">
                                        <span>Website Quote Inquiry</span>
                                        <span class="font-mono">${activeEnq.date || 'Today'}</span>
                                    </div>
                                    <p class="leading-relaxed">${activeEnq.datesNotes || 'Hi, please send me package quotes and vehicle rates for this destination.'}</p>
                                    <div class="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-brand-gold font-medium">
                                        🚗 Vehicle Preference: ${activeEnq.cabPreference || 'Private Dedicated Cab'}
                                    </div>
                                </div>
                            </div>

                            <!-- Suggested Response Templates -->
                            <div class="flex items-start justify-end gap-2.5">
                                <div class="bg-brand-gold/15 border border-brand-gold/30 rounded-2xl rounded-tr-none p-4 max-w-lg space-y-2 text-xs text-slate-100">
                                    <span class="text-[10px] text-brand-gold font-bold uppercase tracking-wider block">Suggested Agency Reply:</span>
                                    <p class="leading-relaxed">
                                        "Namaste ${activeEnq.name}! Thank you for choosing Sarkar Getaways. We have confirmed hotel slots and exclusive private cabs available for ${activeEnq.destination}. Would you prefer 3-Star Deluxe or 4-Star Mountain View accommodation?"
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Bottom Quick Response Bar -->
                        <div class="border-t border-white/10 pt-4 flex items-center gap-3">
                            <input type="text" id="quick-reply-input" placeholder="Type customized message or quote note..." class="admin-input text-xs py-2.5 flex-1">
                            <button onclick="sendQuickEnquiryReply('${activeEnq.id}')" class="admin-btn admin-btn-gold text-xs py-2.5 px-4">
                                <i class="fa-brands fa-whatsapp mr-1"></i> Send on WhatsApp
                            </button>
                        </div>
                    </div>
                ` : `
                    <div class="admin-card rounded-2xl p-12 text-center text-slate-400">
                        <i class="fa-solid fa-inbox text-4xl text-slate-600 mb-3 block"></i>
                        Select an enquiry from the list to view conversation and convert to booking.
                    </div>
                `}
            </div>
        </div>
    `;
}

function sendQuickEnquiryReply(enquiryId) {
    const enq = adminStore.data.enquiries.find(e => e.id === enquiryId);
    if (!enq) return;
    const input = document.getElementById("quick-reply-input");
    const msg = input ? input.value.trim() : "";
    const phone = enq.phone.replace(/[^0-9]/g, '');
    const defaultMsg = `Hi ${enq.name}! Regarding your inquiry for ${enq.destination}: ${msg || 'Our customized tour itinerary with private cab is ready for you.'}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`, "_blank");
    adminStore.updateEnquiryStatus(enquiryId, "Contacted");
}

function convertEnquiryToBooking(enquiryId) {
    const enq = adminStore.data.enquiries.find(e => e.id === enquiryId);
    if (!enq) return;

    openNewBookingModal();
    setTimeout(() => {
        const nameEl = document.getElementById("bk-client-name");
        const phoneEl = document.getElementById("bk-client-phone");
        const notesEl = document.getElementById("bk-custom-notes");
        if (nameEl) nameEl.value = enq.name;
        if (phoneEl) phoneEl.value = enq.phone;
        if (notesEl) notesEl.value = `Converted from web lead (${enq.destination}). Notes: ${enq.datesNotes || ''}`;
        adminStore.updateEnquiryStatus(enquiryId, "Converted");
    }, 100);
}

function deleteEnquiryConfirm(id) {
    if (confirm("Delete this inquiry?")) {
        adminStore.deleteEnquiry(id);
        showAdminToast("Enquiry deleted.");
    }
}

function promptManualEnquiry() {
    const name = prompt("Client Name:");
    if (!name) return;
    const phone = prompt("Client Phone / WhatsApp:", "+91 ");
    if (!phone) return;
    const dest = prompt("Destination Requested:", "Darjeeling Hills & Tea Estates");
    const notes = prompt("Special notes / travel dates / pax count:", "Walk-in inquiry, 4 persons, tentative travel next month.");

    adminStore.addEnquiry({
        name: name.trim(),
        phone: phone.trim(),
        destination: (dest || "Custom Tour").trim(),
        cabPreference: "Private Cab + Sightseeing",
        datesNotes: notes ? notes.trim() : "Walk-in lead",
        status: "New"
    });

    showAdminToast(`Lead for ${name} added to Inbox!`);
}

// --------------------------------------------------
// 5. DEALS & MARKETING (SCREEN 7 LUXURY REDESIGN)
// --------------------------------------------------
function renderMarketingTab() {
    const container = document.getElementById("marketing-view-container");
    if (!container) return;

    const deals = adminStore.data.deals || [];
    const promoCodes = adminStore.data.promoCodes || [];
    const broadcastTemplates = adminStore.data.marketingTemplates || [];

    container.innerHTML = `
        <div class="space-y-8 md:space-y-10">
            <!-- Marketing KPI Cards (Screen 7 Top) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="admin-stat-card">
                    <span class="text-xs text-slate-400 uppercase font-semibold">Average Booking Value</span>
                    <h3 class="text-2xl font-black text-white mt-1">₹27,872</h3>
                    <p class="text-[11px] text-emerald-400 mt-2"><i class="fa-solid fa-arrow-up"></i> +18% Higher than regional avg</p>
                </div>
                <div class="admin-stat-card">
                    <span class="text-xs text-slate-400 uppercase font-semibold">B2B Margin Retained</span>
                    <h3 class="text-2xl font-black text-brand-gold mt-1">26.4%</h3>
                    <p class="text-[11px] text-slate-300 mt-2">Zero OTA commission loss</p>
                </div>
                <div class="admin-stat-card">
                    <span class="text-xs text-slate-400 uppercase font-semibold">Inquiry Conversion Rate</span>
                    <h3 class="text-2xl font-black text-emerald-400 mt-1">68.5%</h3>
                    <p class="text-[11px] text-brand-gold mt-2">Instant WhatsApp callback</p>
                </div>
            </div>

            <!-- VISUAL DEALS CAMPAIGN BANNERS (Screen 7 Middle) -->
            <div>
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h3 class="text-lg font-bold text-white flex items-center gap-2">
                            <i class="fa-solid fa-tags text-brand-gold"></i> Active Marketing Campaigns & Deals
                        </h3>
                        <p class="text-xs text-slate-400">Share promotional discount codes directly with clients on WhatsApp.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${deals.map((deal, idx) => `
                        <div class="admin-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brand-gold/60 transition-all duration-300">
                            <div class="relative h-36 overflow-hidden">
                                <img src="${deal.bgImage}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-between p-3.5">
                                    <span class="bg-black/70 backdrop-blur-md text-amber-300 text-[9px] font-bold px-2 py-0.5 rounded-full border border-amber-300/30 self-start">
                                        ${deal.tag}
                                    </span>
                                    <div>
                                        <span class="text-2xl font-black text-brand-gold tracking-tight">${deal.discount}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 space-y-2 flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 class="font-bold text-white text-sm">${deal.title}</h4>
                                    <p class="text-xs text-slate-400 mt-1 line-clamp-2">${deal.description}</p>
                                </div>
                                <div class="pt-3 border-t border-white/10 space-y-2">
                                    <div class="flex items-center justify-between text-xs">
                                        <span class="font-mono bg-black/50 px-2 py-0.5 rounded border border-white/10 text-white font-bold">${deal.code}</span>
                                        <span class="text-[10px] text-slate-400">${deal.validTill}</span>
                                    </div>
                                    <button onclick="copyDealWhatsApp('${deal.code}', '${deal.title}')" class="admin-btn admin-btn-gold text-xs py-1.5 w-full">
                                        <i class="fa-brands fa-whatsapp mr-1"></i> Copy Deal Text
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- PROMO CODES TABLE -->
            <div class="admin-table-wrapper">
                <div class="p-4 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <h4 class="font-bold text-white text-base">Coupon Codes Ledger</h4>
                        <p class="text-xs text-slate-400">Manage client coupon codes applied at billing checkout.</p>
                    </div>
                    <button onclick="addNewPromoCodePrompt()" class="admin-btn admin-btn-gold text-xs py-2 px-3">
                        <i class="fa-solid fa-plus mr-1"></i> Add Promo Code
                    </button>
                </div>
                <div class="overflow-x-auto">
                    <table class="admin-table text-xs">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Discount</th>
                                <th>Category</th>
                                <th>Valid Until</th>
                                <th>Status</th>
                                <th class="text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${promoCodes.map(p => `
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="font-bold font-mono text-brand-gold">${p.code}</td>
                                    <td class="font-bold text-white">${p.discount}</td>
                                    <td class="text-slate-300">${p.type}</td>
                                    <td class="text-slate-400">${p.validTill}</td>
                                    <td>
                                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                            ${p.status} (${p.uses} used)
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <button onclick="adminStore.deletePromo('${p.code}')" class="admin-btn admin-btn-danger text-xs py-1 px-2">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- WHATSAPP BROADCAST CAMPAIGN TEMPLATES -->
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <h4 class="font-bold text-white text-base">WhatsApp Broadcast Campaign Desk</h4>
                    <span class="text-xs text-brand-gold font-bold">1-Click Client Copy</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${broadcastTemplates.map((t, idx) => `
                        <div class="p-4 rounded-xl bg-slate-900 border border-white/10 flex flex-col justify-between">
                            <div>
                                <h5 class="font-bold text-white text-sm mb-2 text-brand-gold">${t.title}</h5>
                                <p class="text-xs text-slate-300 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5 font-mono select-all">${t.text}</p>
                            </div>
                            <div class="mt-3 flex justify-end">
                                <button onclick="copyBroadcastTemplate(${idx})" class="admin-btn admin-btn-gold text-xs py-1.5 px-3">
                                    <i class="fa-regular fa-copy mr-1"></i> Copy WhatsApp Message
                                </button>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    `;
}

function copyDealWhatsApp(code, title) {
    const text = `🎉 *SARKAR GETAWAYS EXCLUSIVE DEAL* 🎉\n\n🌟 *${title}*\nUse Special Promo Code: *${code}*\n\nBook your luxury holiday package with verified hotels & private cab pickup!\n📞 Call/WhatsApp Sarkar Getaways: +91 98301 23456`;
    navigator.clipboard.writeText(text).then(() => {
        showAdminToast(`Promo ${code} copied for WhatsApp!`);
    });
}

function copyBroadcastTemplate(idx) {
    const t = adminStore.data.marketingTemplates[idx];
    if (t) {
        navigator.clipboard.writeText(t.text).then(() => {
            showAdminToast("Marketing broadcast text copied!");
        });
    }
}

function addNewPromoCodePrompt() {
    const code = prompt("Enter new promo code (e.g. SIKKIM2026):");
    if (!code) return;
    const discount = prompt("Enter discount (e.g. 15% OFF or ₹2,000 FLAT):", "10% OFF");
    if (!discount) return;
    adminStore.addPromo({
        code: code.toUpperCase().trim(),
        discount: discount.trim(),
        type: "Special Offer",
        validTill: "2026-12-31",
        status: "Active",
        uses: 0
    });
    showAdminToast(`Promo code ${code.toUpperCase()} created!`);
}

// --------------------------------------------------
// 6. TRAVELLERS CRM & BOOKINGS MANAGEMENT
// --------------------------------------------------
let travellerFilterStatus = 'all';

function setTravellerFilter(status) {
    travellerFilterStatus = status;
    renderTravellersTab();
}

function renderTravellersTab(searchTerm = "") {
    const tbody = document.getElementById("travellers-table-body");
    if (!tbody) return;

    let list = adminStore.data.bookings || [];

    // Filter by status pill
    if (travellerFilterStatus && travellerFilterStatus !== 'all') {
        list = list.filter(b => b.status.toLowerCase() === travellerFilterStatus.toLowerCase());
    }

    if (searchTerm) {
        const q = searchTerm.toLowerCase();
        list = list.filter(b => 
            b.clientName.toLowerCase().includes(q) ||
            b.phone.includes(q) ||
            b.destination.toLowerCase().includes(q) ||
            b.id.toLowerCase().includes(q)
        );
    }

    tbody.innerHTML = list.map(b => `
        <tr class="hover:bg-white/5 transition-colors text-xs">
            <td>
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full bg-slate-800 border border-brand-gold/30 flex items-center justify-center font-bold text-brand-gold font-mono">
                        ${b.clientName.charAt(0)}
                    </div>
                    <div>
                        <strong class="text-white text-sm block font-bold">${b.clientName}</strong>
                        <span class="text-slate-400 block font-mono text-[11px]">${b.phone}</span>
                        <span class="text-[10px] text-slate-500 font-mono">${b.id}</span>
                    </div>
                </div>
            </td>
            <td>
                <span class="text-brand-gold font-semibold block">${b.destination}</span>
                <span class="text-slate-300 block text-[11px]"><i class="fa-solid fa-calendar mr-1"></i>${b.departureDate} to ${b.returnDate}</span>
                <span class="text-[10px] text-slate-400 font-mono">${b.adults} Adults ${b.kids > 0 ? '+ ' + b.kids + ' Kids' : ''}</span>
            </td>
            <td>
                <span class="text-slate-200 block font-medium"><i class="fa-solid fa-hotel text-brand-gold mr-1"></i>${b.hotelName}</span>
                <span class="text-slate-400 block text-[11px]"><i class="fa-solid fa-car text-brand-gold mr-1"></i>${b.cabType} (${b.driverName || 'Driver allocated'})</span>
            </td>
            <td>
                <div class="space-y-0.5">
                    <div class="font-bold text-white">Total: <strong class="text-emerald-400 font-mono">₹${Number(b.totalAmount).toLocaleString("en-IN")}</strong></div>
                    <div class="text-[11px] text-slate-400">Adv: ₹${Number(b.advancePaid).toLocaleString("en-IN")}</div>
                    <div class="text-[11px] ${b.balanceDue > 0 ? 'text-amber-400 font-bold' : 'text-slate-500'}">Due: ₹${Number(b.balanceDue).toLocaleString("en-IN")}</div>
                </div>
            </td>
            <td>
                <span class="admin-status-badge ${b.status.toLowerCase()}">${b.status}</span>
            </td>
            <td class="text-right">
                <div class="flex items-center justify-end gap-1.5">
                    <button onclick="editTravellerDetails('${b.id}')" class="admin-btn admin-btn-outline py-1 px-2.5 text-xs" title="Customize Trip & Traveller Preferences">
                        <i class="fa-solid fa-sliders text-brand-gold"></i> Customize
                    </button>
                    <button onclick="openVoucherModal('${b.id}')" class="admin-btn admin-btn-gold py-1 px-2.5 text-xs" title="Print/View Official A4 Voucher & Bill">
                        <i class="fa-solid fa-receipt"></i> Voucher
                    </button>
                    <button onclick="sendClientWhatsApp('${b.id}')" class="admin-btn admin-btn-emerald py-1 px-2 text-xs" title="Message Client on WhatsApp">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                    </button>
                    <button onclick="deleteBookingConfirm('${b.id}')" class="admin-btn admin-btn-danger py-1 px-2 text-xs" title="Delete Booking">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join("");
}

function filterTravellers() {
    const input = document.getElementById("traveller-search-input");
    renderTravellersTab(input ? input.value : "");
}

function deleteBookingConfirm(id) {
    if (confirm(`Delete booking ${id}? This will remove the record.`)) {
        adminStore.deleteBooking(id);
        showAdminToast(`Booking ${id} deleted.`);
    }
}

// --------------------------------------------------
// 7. AVAILABILITY & BOOKING DATES CALENDAR
// --------------------------------------------------
function renderCalendarTab() {
    const year = calCurrentDate.getFullYear();
    const month = calCurrentDate.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const titleEl = document.getElementById("calendar-month-title");
    if (titleEl) {
        titleEl.innerText = `${monthNames[month]} ${year}`;
    }

    const grid = document.getElementById("calendar-grid-cells");
    if (!grid) return;
    grid.innerHTML = "";

    const bookings = adminStore.data.bookings || [];

    // Monthly Summary Stats Hydration
    const currentMonthPrefix = `${year}-${String(month + 1).padStart(2, "0")}`;
    const monthBookings = bookings.filter(b => b.departureDate && b.departureDate.startsWith(currentMonthPrefix));
    const totalDepartures = monthBookings.length;
    const totalGuests = monthBookings.reduce((sum, b) => sum + (Number(b.adults) || 0) + (Number(b.kids) || 0), 0);
    const dispatchedCabs = monthBookings.filter(b => b.cabType && b.cabType.trim() !== "").length;

    const depEl = document.getElementById("cal-stat-departures");
    if (depEl) depEl.innerText = `${totalDepartures} Trips`;
    const guestEl = document.getElementById("cal-stat-guests");
    if (guestEl) guestEl.innerText = `${totalGuests} Guests`;
    const cabEl = document.getElementById("cal-stat-cabs");
    if (cabEl) cabEl.innerText = `${dispatchedCabs} Cabs`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevMonthTotalDays = new Date(year, month, 0).getDate();
    const today = new Date();

    // Previous month filler cells (faded, non-interactive)
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        const cell = document.createElement("div");
        cell.className = "admin-calendar-cell other-month select-none";
        cell.innerHTML = `
            <div class="flex items-center justify-between">
                <span class="day-number text-xs text-slate-600 font-bold">${prevMonthTotalDays - i}</span>
            </div>
        `;
        grid.appendChild(cell);
    }

    // Current month days
    for (let day = 1; day <= totalDays; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dayBookings = bookings.filter(b => b.departureDate === dateStr);
        const isToday = (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day);

        const cell = document.createElement("div");
        cell.className = `admin-calendar-cell ${isToday ? 'today' : ''}`;
        cell.onclick = () => openDayDetailsModal(dateStr, dayBookings);

        let chipsHtml = "";
        dayBookings.slice(0, 2).forEach(b => {
            const statusClass = b.status.toLowerCase().replace(/\s+/g, '-');
            const icon = b.status === "Confirmed" ? "fa-circle-check" : (b.status === "Pending" ? "fa-clock" : "fa-route");
            chipsHtml += `
                <div class="calendar-event-chip ${statusClass} truncate text-[10px]" title="${b.clientName} - ${b.destination} (${b.status})">
                    <i class="fa-solid ${icon} text-[9px] mr-1 opacity-80"></i>
                    <span class="font-semibold">${b.clientName.split(" ")[0]}</span> 
                    <span class="opacity-75">(${b.destination.split(" ")[0]})</span>
                </div>
            `;
        });

        if (dayBookings.length > 2) {
            chipsHtml += `<div class="text-[9px] text-brand-gold font-bold text-center mt-0.5 hover:underline">+${dayBookings.length - 2} more trip${dayBookings.length - 2 > 1 ? 's' : ''}</div>`;
        }

        cell.innerHTML = `
            <div class="flex items-center justify-between mb-1">
                <span class="day-number text-xs font-bold ${isToday ? 'text-slate-950 font-black' : 'text-slate-300'}">${day}</span>
                ${dayBookings.length ? `<span class="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-brand-gold/20 text-brand-gold border border-brand-gold/30">${dayBookings.length}</span>` : ''}
            </div>
            <div class="flex flex-col gap-1 overflow-hidden">
                ${chipsHtml}
            </div>
        `;
        grid.appendChild(cell);
    }

    // Trailing next month cells to ensure full rectangular grid (35 or 42 slots)
    const totalCellsCount = firstDayIndex + totalDays;
    const targetTotalSlots = totalCellsCount > 35 ? 42 : 35;
    const nextMonthFillerCount = targetTotalSlots - totalCellsCount;

    for (let nextDay = 1; nextDay <= nextMonthFillerCount; nextDay++) {
        const cell = document.createElement("div");
        cell.className = "admin-calendar-cell other-month select-none";
        cell.innerHTML = `
            <div class="flex items-center justify-between">
                <span class="day-number text-xs text-slate-600 font-bold">${nextDay}</span>
            </div>
        `;
        grid.appendChild(cell);
    }
}

function openDayDetailsModal(dateStr, dayBookings) {
    if (!dayBookings || dayBookings.length === 0) {
        if (confirm(`No bookings on ${dateStr}. Would you like to create a new booking departing on this date?`)) {
            openNewBookingModal(dateStr);
        }
        return;
    }

    const details = dayBookings.map(b => `
        <div class="p-4 rounded-xl bg-slate-900/90 border border-white/10 mb-3 space-y-3">
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 border border-white/10 shadow-sm">
                        <img src="${getDestinationImage(b.destination)}" alt="${b.destination}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=150&q=80'">
                    </div>
                    <div>
                        <h4 class="font-bold text-white text-base">${b.clientName}</h4>
                        <p class="text-xs text-brand-gold font-medium"><i class="fa-solid fa-location-dot mr-1"></i>${b.destination}</p>
                        <p class="text-[11px] text-slate-400 mt-0.5"><i class="fa-solid fa-calendar mr-1"></i>${b.departureDate} to ${b.returnDate}</p>
                    </div>
                </div>
                <span class="admin-status-badge ${b.status.toLowerCase().replace(/\s+/g, '-')}">${b.status}</span>
            </div>
            <div class="text-xs text-slate-300 grid grid-cols-2 gap-2 pt-2 border-t border-white/10 bg-black/20 p-2.5 rounded-lg">
                <div><strong>Cab:</strong> ${b.cabType}</div>
                <div><strong>Chauffeur:</strong> ${b.driverName || 'Unassigned'} (${b.driverPhone || 'N/A'})</div>
                <div><strong>Hotel:</strong> ${b.hotelName}</div>
                <div><strong>Pax:</strong> ${b.adults} Adults, ${b.kids} Kids</div>
            </div>
            <div class="flex gap-2 justify-end pt-1">
                <button onclick="openVoucherModal('${b.id}')" class="admin-btn admin-btn-outline text-xs py-1.5 px-3">
                    <i class="fa-solid fa-receipt mr-1 text-brand-gold"></i> Voucher
                </button>
                <button onclick="editTravellerDetails('${b.id}')" class="admin-btn admin-btn-gold text-xs py-1.5 px-3">
                    <i class="fa-solid fa-sliders mr-1"></i> Customize
                </button>
            </div>
        </div>
    `).join("");

    const box = document.getElementById("day-details-content");
    if (box) box.innerHTML = details;
    const title = document.getElementById("day-details-date-title");
    if (title) title.innerText = `Schedule for ${dateStr}`;

    const modal = document.getElementById("admin-day-details-modal");
    if (modal) modal.classList.add("active");
}

function closeDayDetailsModal() {
    const modal = document.getElementById("admin-day-details-modal");
    if (modal) modal.classList.remove("active");
}

// --------------------------------------------------
// 8. B2B PORTALS DIRECT INTEGRATION HUB
// --------------------------------------------------
function renderB2BTab() {
    const grid = document.getElementById("b2b-portal-grid");
    if (!grid) return;

    grid.innerHTML = adminStore.data.b2bPortals.map(p => `
        <div class="b2b-portal-card" style="--portal-color: ${p.themeColor};">
            <div>
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                        <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${p.themeColor};"></span>
                        ${p.name}
                    </span>
                    <span class="admin-badge-emerald text-[9px]">Verified Partner</span>
                </div>
                <p class="text-xs text-slate-400 mb-3">${p.description}</p>
                
                <div class="bg-black/50 p-3 rounded-xl border border-white/10 space-y-1.5 text-xs text-slate-300 mb-4">
                    <div class="flex justify-between items-center">
                        <span class="text-slate-400">Agent ID:</span>
                        <div class="flex items-center gap-2">
                            <span class="font-mono text-white font-bold">${p.agentId}</span>
                            <button onclick="navigator.clipboard.writeText('${p.agentId}'); showAdminToast('Agent ID copied!');" class="w-6 h-6 rounded-md bg-white/5 hover:bg-white/15 text-slate-400 hover:text-brand-gold inline-flex items-center justify-center text-xs transition-colors" title="Copy Agent ID">
                                <i class="fa-regular fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-slate-400">Support Desk:</span>
                        <a href="tel:${p.contactPhone}" class="text-brand-gold hover:underline font-medium">${p.contactPhone}</a>
                    </div>
                    <div class="text-[11px] text-slate-400 pt-1 border-t border-white/10">
                        <i class="fa-solid fa-lightbulb text-amber-400 mr-1"></i> ${p.portalNotes}
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-2 pt-2 border-t border-white/10">
                <a href="${p.loginUrl}" target="_blank" rel="noopener noreferrer" class="admin-btn admin-btn-gold text-xs flex-1 py-2 font-black uppercase tracking-wider">
                    <i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Open Portal
                </a>
                <button onclick="editPortalCreds('${p.name}')" class="admin-btn admin-btn-outline text-xs py-2 px-3" title="Edit Agent ID or Notes">
                    <i class="fa-solid fa-gear"></i>
                </button>
            </div>
        </div>
    `).join("");
}

function editPortalCreds(portalName) {
    const portal = adminStore.data.b2bPortals.find(p => p.name === portalName);
    if (!portal) return;

    const newId = prompt(`Update Agent ID for ${portalName}:`, portal.agentId);
    if (newId === null) return;
    const newPhone = prompt(`Update Support Desk Phone for ${portalName}:`, portal.contactPhone);
    const newNotes = prompt(`Update Quick Reference Notes for ${portalName}:`, portal.portalNotes);

    adminStore.savePortalCreds(portalName, newId.trim(), newPhone ? newPhone.trim() : portal.contactPhone, newNotes ? newNotes.trim() : portal.portalNotes);
    showAdminToast(`${portalName} credentials updated!`);
}

function calculateB2BFare() {
    const netFlight = Number(document.getElementById("calc-net-flight").value) || 0;
    const netHotel = Number(document.getElementById("calc-net-hotel").value) || 0;
    const netCab = Number(document.getElementById("calc-net-cab").value) || 0;
    const markupType = document.getElementById("calc-markup-type").value;
    const markupVal = Number(document.getElementById("calc-markup-val").value) || 0;
    const includeGST = document.getElementById("calc-include-gst").checked;

    const baseNet = netFlight + netHotel + netCab;
    let markupAmount = 0;

    if (markupType === "percent") {
        markupAmount = (baseNet * markupVal) / 100;
    } else {
        markupAmount = markupVal;
    }

    const subtotal = baseNet + markupAmount;
    const gstAmount = includeGST ? (subtotal * 0.05) : 0;
    const finalPrice = Math.round(subtotal + gstAmount);

    document.getElementById("calc-res-net").innerText = `₹${baseNet.toLocaleString("en-IN")}`;
    document.getElementById("calc-res-markup").innerText = `₹${Math.round(markupAmount).toLocaleString("en-IN")}`;
    document.getElementById("calc-res-gst").innerText = `₹${Math.round(gstAmount).toLocaleString("en-IN")}`;
    document.getElementById("calc-res-final").innerText = `₹${finalPrice.toLocaleString("en-IN")}`;

    window.lastCalculatedQuote = {
        baseNet,
        markupAmount,
        gstAmount,
        finalPrice,
        flight: netFlight,
        hotel: netHotel,
        cab: netCab
    };
}

function copyB2BQuoteSheet() {
    if (!window.lastCalculatedQuote) calculateB2BFare();
    const q = window.lastCalculatedQuote;

    const text = `📋 *SARKAR GETAWAYS — TRIP QUOTATION ESTIMATE* 📋\n\n` +
                 `✈️ Flight/Rail Estimate: ₹${q.flight.toLocaleString('en-IN')}\n` +
                 `🏨 Verified Hotel Stays: ₹${q.hotel.toLocaleString('en-IN')}\n` +
                 `🚗 Private Exclusive Cab: ₹${q.cab.toLocaleString('en-IN')}\n` +
                 `🛡️ Taxes & Service Handling: Included\n` +
                 `---------------------------------------\n` +
                 `💵 *TOTAL ALL-INCLUSIVE PRICE:* ₹${q.finalPrice.toLocaleString('en-IN')}\n\n` +
                 `_Zero hidden fees • Curated en-route sightseeing included_\n` +
                 `📞 Contact Sarkar Getaways: +91 98301 23456`;

    navigator.clipboard.writeText(text).then(() => {
        showAdminToast("Client Cost Sheet copied to clipboard!");
    });
}

// --------------------------------------------------
// 9. OFFICIAL LUXURY A4 TRAVEL VOUCHER & TAX INVOICE ENGINE
// --------------------------------------------------
let currentVoucherBookingId = null;
let currentVoucherViewMode = 'voucher'; // 'voucher' or 'invoice'

function openVoucherModal(bookingId, viewMode = 'voucher') {
    currentVoucherBookingId = bookingId;
    currentVoucherViewMode = viewMode;

    const booking = adminStore.data.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    const modal = document.getElementById("admin-voucher-modal");
    const container = document.getElementById("admin-voucher-container");

    if (!container) return;

    const isInvoice = (viewMode === 'invoice');

    // Calculate tax split (5% GST total: 2.5% CGST + 2.5% SGST)
    const totalAmount = Number(booking.totalAmount) || 0;
    const taxableAmount = Math.round(totalAmount / 1.05);
    const gstTotal = totalAmount - taxableAmount;
    const cgst = Math.round(gstTotal / 2);
    const sgst = gstTotal - cgst;

    container.innerHTML = `
        <div class="voucher-modal-wrapper">
            <!-- Non-printable Toolbar -->
            <div class="voucher-no-print w-full max-w-[210mm] mb-4 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 border border-white/15 p-3 rounded-2xl backdrop-blur-md">
                <!-- Mode Switcher -->
                <div class="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/10">
                    <button onclick="openVoucherModal('${booking.id}', 'voucher')" class="voucher-tab-btn ${!isInvoice ? 'active' : ''}">
                        <i class="fa-solid fa-receipt mr-1"></i> Travel Voucher
                    </button>
                    <button onclick="openVoucherModal('${booking.id}', 'invoice')" class="voucher-tab-btn ${isInvoice ? 'active' : ''}">
                        <i class="fa-solid fa-file-invoice-dollar mr-1"></i> Tax Invoice & Bill
                    </button>
                </div>

                <div class="flex items-center gap-2">
                    <button onclick="window.print()" class="admin-btn admin-btn-gold text-xs py-2 px-4 shadow-lg">
                        <i class="fa-solid fa-print mr-1"></i> Print / Save A4 PDF
                    </button>
                    <button onclick="closeVoucherModal()" class="admin-icon-btn" title="Close">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>

            <!-- Standard A4 Document Paper -->
            <div class="voucher-a4-paper">
                <!-- Top Letterhead -->
                <div class="flex items-center justify-between pb-4 border-b-2 border-blue-900/20 relative z-10">
                    <div class="flex items-center space-x-3.5">
                        <img src="logo sarkar blue.png" alt="Sarkar Getaways" class="voucher-blue-logo" onerror="this.src='sarkargatewayslogo.png'">
                        <div class="border-l-2 border-blue-900/30 pl-3.5">
                            <h2 class="font-display text-xl font-black text-blue-950 uppercase tracking-tight leading-tight">SARKAR GETAWAYS</h2>
                            <span class="text-[10px] text-blue-700 font-bold uppercase tracking-widest block">Custom Travel Agency • Verified B2B Partner</span>
                            <span class="text-[10px] text-slate-500 block">TripJack & Riya Connect Network • Kolkata, West Bengal</span>
                        </div>
                    </div>

                    <div class="text-right">
                        <span class="voucher-glass-pill uppercase font-mono font-black text-xs">
                            ${isInvoice ? 'OFFICIAL TAX INVOICE / BILL' : 'OFFICIAL SERVICE TRAVEL VOUCHER'}
                        </span>
                        <div class="mt-1.5 font-mono text-sm font-black text-blue-950">
                            ${isInvoice ? 'INV-' + booking.id : booking.voucherCode}
                        </div>
                        <div class="text-[11px] text-slate-500 font-medium">Issue Date: ${booking.createdDate || '2026-10-15'}</div>
                        <div class="text-[10px] text-slate-400 font-mono">B2B Source: ${booking.b2bPortal} (${booking.b2bRefNo || 'CONFIRMED'})</div>
                    </div>
                </div>

                <!-- Document Body Content -->
                <div class="my-5 space-y-4 relative z-10 flex-1">
                    <!-- Status & Authentication Bar -->
                    <div class="voucher-glass-card flex items-center justify-between py-2.5 px-4 bg-emerald-50/80 border-emerald-300/60 text-emerald-950">
                        <div class="flex items-center space-x-2 text-xs">
                            <i class="fa-solid fa-circle-check text-emerald-600 text-sm"></i>
                            <span class="font-bold">Status: Booking Confirmed & Transport Allocated</span>
                        </div>
                        <div class="flex items-center space-x-3 text-[11px]">
                            <span class="font-mono text-slate-600">Booking Ref: <strong>${booking.id}</strong></span>
                            <span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] uppercase">A4 Verified</span>
                        </div>
                    </div>

                    <!-- Client & Tour Overview -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div class="voucher-glass-card">
                            <span class="text-slate-500 uppercase text-[10px] block font-bold tracking-wider">Lead Guest</span>
                            <strong class="text-sm text-slate-900 block mt-0.5">${booking.clientName}</strong>
                            <span class="text-blue-700 block text-[11px] font-semibold">${booking.phone}</span>
                            <span class="text-slate-500 block text-[10px] truncate">${booking.email || 'guest@sarkargetaways.com'}</span>
                        </div>

                        <div class="voucher-glass-card">
                            <span class="text-slate-500 uppercase text-[10px] block font-bold tracking-wider">Destination</span>
                            <strong class="text-sm text-blue-900 block mt-0.5">${booking.destination}</strong>
                            <span class="text-slate-600 block text-[11px]">${booking.city || 'Kolkata'} Pickup</span>
                            <span class="text-emerald-700 font-semibold text-[10px]">Curated Itinerary</span>
                        </div>

                        <div class="voucher-glass-card">
                            <span class="text-slate-500 uppercase text-[10px] block font-bold tracking-wider">Travel Dates</span>
                            <strong class="text-sm text-slate-900 block mt-0.5">${booking.departureDate}</strong>
                            <span class="text-slate-600 block text-[11px]">Return: ${booking.returnDate}</span>
                            <span class="text-blue-800 font-bold text-[10px]">Confirmed Schedule</span>
                        </div>

                        <div class="voucher-glass-card">
                            <span class="text-slate-500 uppercase text-[10px] block font-bold tracking-wider">Passenger Pax</span>
                            <strong class="text-sm text-slate-900 block mt-0.5">${booking.adults} Adults${booking.kids > 0 ? `, ${booking.kids} Kids` : ''}</strong>
                            <span class="text-slate-600 block text-[11px]">Private Tour</span>
                            <span class="text-slate-500 text-[10px]">Govt ID Registered</span>
                        </div>
                    </div>

                    ${!isInvoice ? `
                        <!-- VOUCHER MODE: Hotel & Cab Service Allocation -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div class="voucher-glass-card space-y-2">
                                <div class="flex items-center justify-between border-b border-blue-900/10 pb-2 text-xs font-bold text-blue-950">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-hotel text-blue-600"></i> VERIFIED HOTEL ALLOCATION</span>
                                    <span class="text-[10px] text-emerald-700 font-bold uppercase"><i class="fa-solid fa-check"></i> Voucher Issued</span>
                                </div>
                                <div class="text-xs space-y-1 text-slate-800">
                                    <div><strong>Hotel Name:</strong> <span class="text-slate-950 font-semibold">${booking.hotelName}</span></div>
                                    <div><strong>Room Type:</strong> ${booking.roomCategory}</div>
                                    <div class="text-[11px] text-slate-600"><strong>Check-In:</strong> ${booking.departureDate} (12:00 PM) • <strong>Check-Out:</strong> ${booking.returnDate} (11:00 AM)</div>
                                    <div class="text-[11px] text-blue-800 font-medium">B2B Portal Confirmation Number: <strong>${booking.b2bRefNo || 'TJ-VCH-88210'}</strong></div>
                                </div>
                            </div>

                            <div class="voucher-glass-card space-y-2">
                                <div class="flex items-center justify-between border-b border-blue-900/10 pb-2 text-xs font-bold text-blue-950">
                                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-car text-blue-600"></i> DEDICATED PRIVATE CAB & DRIVER</span>
                                    <span class="text-[10px] text-blue-700 font-bold uppercase">Disposal Cab</span>
                                </div>
                                <div class="text-xs space-y-1 text-slate-800">
                                    <div><strong>Vehicle Model:</strong> <span class="text-slate-950 font-semibold">${booking.cabType}</span></div>
                                    <div><strong>Assigned Driver:</strong> ${booking.driverName || 'Driver details shared 12 hrs before'}</div>
                                    <div><strong>Driver Mobile:</strong> ${booking.driverPhone || 'Will contact on trip eve'}</div>
                                    <div class="text-[11px] text-slate-600">Doorstep station / hotel pickup with luggage assistance.</div>
                                </div>
                            </div>
                        </div>

                        <!-- Custom Sightseeing & En-Route Requests -->
                        <div class="voucher-glass-card bg-amber-50/60 border-amber-200/80 space-y-1 text-xs">
                            <div class="font-bold text-amber-950 flex items-center space-x-1.5">
                                <i class="fa-solid fa-compass text-amber-600"></i>
                                <span class="uppercase tracking-wider text-[11px]">En-Route Sightseeing & Special Requests</span>
                            </div>
                            <p class="text-slate-700 leading-relaxed text-[11px]">
                                ${booking.customSightseeing || 'Standard handcrafted itinerary including scenic viewpoints, fuel, state road permits, and private driver allowances.'}
                            </p>
                        </div>
                    ` : `
                        <!-- INVOICE MODE: Itemized Tax Bill & GST Breakdown -->
                        <div class="voucher-glass-card space-y-3">
                            <div class="flex items-center justify-between border-b border-blue-900/10 pb-2 text-xs">
                                <div>
                                    <span class="font-bold text-blue-950 uppercase">SAC Code: 998555</span>
                                    <span class="text-slate-500 block text-[10px]">Tour Operator & Travel Arrangement Services</span>
                                </div>
                                <div class="text-right">
                                    <span class="font-bold text-blue-950 uppercase text-[11px]">GSTIN: 19AAAFS8901K1ZK</span>
                                    <span class="text-slate-500 block text-[10px]">State Code: 19 (West Bengal)</span>
                                </div>
                            </div>

                            <table class="w-full text-left text-xs border-collapse">
                                <thead>
                                    <tr class="border-b border-slate-200 text-slate-600 text-[10px] uppercase font-bold">
                                        <th class="py-1.5">Description of Service</th>
                                        <th class="py-1.5 text-center">Pax</th>
                                        <th class="py-1.5 text-right">Taxable Value</th>
                                        <th class="py-1.5 text-right">GST (5%)</th>
                                        <th class="py-1.5 text-right">Total (₹)</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100 text-slate-800">
                                    <tr>
                                        <td class="py-2">
                                            <strong>${booking.destination} Tour Package</strong>
                                            <div class="text-[10px] text-slate-500">Includes verified hotel stays (${booking.hotelName})</div>
                                        </td>
                                        <td class="py-2 text-center">${booking.adults}A</td>
                                        <td class="py-2 text-right">₹${Math.round(taxableAmount * 0.65).toLocaleString('en-IN')}</td>
                                        <td class="py-2 text-right">₹${Math.round(gstTotal * 0.65).toLocaleString('en-IN')}</td>
                                        <td class="py-2 text-right font-semibold">₹${Math.round(totalAmount * 0.65).toLocaleString('en-IN')}</td>
                                    </tr>
                                    <tr>
                                        <td class="py-2">
                                            <strong>Private Dedicated Transport & Sightseeing Transfers</strong>
                                            <div class="text-[10px] text-slate-500">${booking.cabType} with en-route halts</div>
                                        </td>
                                        <td class="py-2 text-center">1 Unit</td>
                                        <td class="py-2 text-right">₹${Math.round(taxableAmount * 0.35).toLocaleString('en-IN')}</td>
                                        <td class="py-2 text-right">₹${Math.round(gstTotal * 0.35).toLocaleString('en-IN')}</td>
                                        <td class="py-2 text-right font-semibold">₹${Math.round(totalAmount * 0.35).toLocaleString('en-IN')}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="bg-blue-50/70 p-2.5 rounded-lg border border-blue-200/60 text-[11px] text-blue-900 flex justify-between items-center">
                                <div>
                                    <strong>Payment Mode:</strong> Bank Transfer / UPI / B2B Agency Console
                                </div>
                                <div>
                                    <span>CGST (2.5%): <strong>₹${cgst.toLocaleString('en-IN')}</strong></span>
                                    <span class="ml-3">SGST (2.5%): <strong>₹${sgst.toLocaleString('en-IN')}</strong></span>
                                </div>
                            </div>
                        </div>
                    `}

                    <!-- Billing Ledger Summary -->
                    <div class="voucher-glass-total flex flex-col sm:flex-row items-center justify-between text-xs space-y-2 sm:space-y-0">
                        <div>
                            <span class="text-blue-200 block text-[10px] uppercase font-bold tracking-wider">Gross Package Total</span>
                            <span class="text-2xl font-black text-amber-300">₹${Number(booking.totalAmount).toLocaleString("en-IN")}</span>
                        </div>
                        <div>
                            <span class="text-blue-200 block text-[10px] uppercase font-bold tracking-wider">Advance Received</span>
                            <span class="text-base font-bold text-emerald-300">₹${Number(booking.advancePaid).toLocaleString("en-IN")}</span>
                        </div>
                        <div>
                            <span class="text-blue-200 block text-[10px] uppercase font-bold tracking-wider">Balance Payment</span>
                            <span class="text-base font-black ${booking.balanceDue > 0 ? 'text-amber-300' : 'text-emerald-300'}">
                                ${booking.balanceDue > 0 ? `₹${Number(booking.balanceDue).toLocaleString("en-IN")} (Due on Arrival)` : 'NIL (Fully Paid)'}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Footer with Seals & Helpline -->
                <div class="pt-3 border-t-2 border-blue-900/15 relative z-10 flex flex-col sm:flex-row items-center justify-between text-slate-600 text-xs gap-3">
                    <div class="text-[10px] leading-relaxed max-w-md">
                        <strong class="text-blue-950 uppercase block">Important Travel Notes:</strong>
                        • Please carry Government Issued Photo IDs for all guests (Aadhaar/Passport/Voter Card).<br>
                        • 24x7 Operations Support Hotline: <strong class="text-blue-900">+91 98301 23456</strong> • Kolkata HQ.<br>
                        • Thank you for exploring with Sarkar Getaways — Verified B2B Travel Partner.
                    </div>

                    <div class="text-center sm:text-right flex items-center space-x-3">
                        <div class="text-[10px] text-right">
                            <span class="text-slate-400 block uppercase font-bold text-[9px]">Digitally Authenticated</span>
                            <span class="font-bold text-blue-950">Sarkar Getaways HQ</span>
                            <span class="text-emerald-600 font-bold block text-[9px]"><i class="fa-solid fa-seal-exclamation mr-1"></i>Official Seal</span>
                        </div>
                        <div class="w-14 h-14 rounded-xl bg-blue-50 border-2 border-dashed border-blue-300 flex flex-col items-center justify-center text-blue-900">
                            <i class="fa-solid fa-qrcode text-xl text-blue-800"></i>
                            <span class="text-[8px] font-mono font-bold mt-0.5">VERIFIED</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (modal) modal.classList.add("active");
}

function closeVoucherModal() {
    const modal = document.getElementById("admin-voucher-modal");
    if (modal) modal.classList.remove("active");
}

function sendClientWhatsApp(bookingId) {
    const b = adminStore.data.bookings.find(item => item.id === bookingId);
    if (!b) return;

    const phoneClean = b.phone.replace(/[^0-9]/g, '');
    const text = `Namaste ${b.clientName}! 🙏\n\nYour trip to *${b.destination}* with Sarkar Getaways is confirmed!\n\n` +
                 `📅 *Travel Dates:* ${b.departureDate} to ${b.returnDate}\n` +
                 `🏨 *Hotel:* ${b.hotelName} (${b.roomCategory})\n` +
                 `🚗 *Cab:* ${b.cabType}\n` +
                 `👤 *Driver:* ${b.driverName || 'Assigned 12h before'} (${b.driverPhone || 'N/A'})\n` +
                 `🎟️ *Voucher No:* ${b.voucherCode}\n\n` +
                 `Thank you for trusting Sarkar Getaways. Reach our 24x7 helpline anytime at +91 98301 23456!`;

    window.open(`https://wa.me/${phoneClean}?text=${encodeURIComponent(text)}`, "_blank");
}

// --------------------------------------------------
// 10. TRAVELLER EDIT & TRIP CUSTOMIZATION MODAL
// --------------------------------------------------
function editTravellerDetails(bookingId) {
    const b = adminStore.data.bookings.find(item => item.id === bookingId);
    if (!b) return;

    const modal = document.getElementById("admin-booking-modal");
    const title = document.getElementById("bk-modal-title");
    if (title) title.innerText = `Customize Booking (${b.id}) - ${b.clientName}`;

    document.getElementById("bk-id").value = b.id;
    document.getElementById("bk-client-name").value = b.clientName;
    document.getElementById("bk-client-phone").value = b.phone;
    document.getElementById("bk-client-email").value = b.email || "";
    document.getElementById("bk-client-city").value = b.city || "Kolkata";
    document.getElementById("bk-destination").value = b.destination;
    document.getElementById("bk-departure-date").value = b.departureDate;
    document.getElementById("bk-return-date").value = b.returnDate;
    document.getElementById("bk-adults").value = b.adults;
    document.getElementById("bk-kids").value = b.kids;
    document.getElementById("bk-total-amount").value = b.totalAmount;
    document.getElementById("bk-advance-paid").value = b.advancePaid;
    document.getElementById("bk-status").value = b.status;
    document.getElementById("bk-hotel-name").value = b.hotelName;
    document.getElementById("bk-room-cat").value = b.roomCategory;
    document.getElementById("bk-cab-type").value = b.cabType;
    document.getElementById("bk-driver-name").value = b.driverName || "";
    document.getElementById("bk-driver-phone").value = b.driverPhone || "";
    document.getElementById("bk-custom-notes").value = b.customSightseeing || "";
    document.getElementById("bk-b2b-portal").value = b.b2bPortal || "Tripjack";
    document.getElementById("bk-b2b-ref").value = b.b2bRefNo || "";

    if (modal) modal.classList.add("active");
}

function openNewBookingModal(defaultDate = "") {
    const modal = document.getElementById("admin-booking-modal");
    const title = document.getElementById("bk-modal-title");
    if (title) title.innerText = "Create New Tour Booking";

    document.getElementById("bk-id").value = "";
    document.getElementById("bk-client-name").value = "";
    document.getElementById("bk-client-phone").value = "+91 ";
    document.getElementById("bk-client-email").value = "";
    document.getElementById("bk-client-city").value = "Kolkata";
    document.getElementById("bk-destination").value = "Darjeeling Hills & Tea Estates";
    document.getElementById("bk-departure-date").value = defaultDate || new Date().toISOString().slice(0, 10);
    
    const returnD = new Date();
    returnD.setDate(returnD.getDate() + 3);
    document.getElementById("bk-return-date").value = returnD.toISOString().slice(0, 10);

    document.getElementById("bk-adults").value = 2;
    document.getElementById("bk-kids").value = 0;
    document.getElementById("bk-total-amount").value = 14998;
    document.getElementById("bk-advance-paid").value = 5000;
    document.getElementById("bk-status").value = "Confirmed";
    document.getElementById("bk-hotel-name").value = "B2B Verified Hotel (Summit / Lemon Tree)";
    document.getElementById("bk-room-cat").value = "Deluxe Room with Breakfast";
    document.getElementById("bk-cab-type").value = "Exclusive Private Cab";
    document.getElementById("bk-driver-name").value = "Tenzing Sherpa";
    document.getElementById("bk-driver-phone").value = "+91 94340 78219";
    document.getElementById("bk-custom-notes").value = "Curated en-route sightseeing included.";
    document.getElementById("bk-b2b-portal").value = "Tripjack";
    document.getElementById("bk-b2b-ref").value = "";

    if (modal) modal.classList.add("active");
}

function closeBookingModal() {
    const modal = document.getElementById("admin-booking-modal");
    if (modal) modal.classList.remove("active");
}

function saveBookingForm(event) {
    if (event) event.preventDefault();

    const id = document.getElementById("bk-id").value;
    const clientName = document.getElementById("bk-client-name").value.trim();
    const phone = document.getElementById("bk-client-phone").value.trim();
    const email = document.getElementById("bk-client-email").value.trim();
    const city = document.getElementById("bk-client-city").value.trim();
    const destination = document.getElementById("bk-destination").value;
    const departureDate = document.getElementById("bk-departure-date").value;
    const returnDate = document.getElementById("bk-return-date").value;
    const adults = Number(document.getElementById("bk-adults").value) || 1;
    const kids = Number(document.getElementById("bk-kids").value) || 0;
    const totalAmount = Number(document.getElementById("bk-total-amount").value) || 0;
    const advancePaid = Number(document.getElementById("bk-advance-paid").value) || 0;
    const balanceDue = Math.max(0, totalAmount - advancePaid);
    const status = document.getElementById("bk-status").value;
    const hotelName = document.getElementById("bk-hotel-name").value;
    const roomCategory = document.getElementById("bk-room-cat").value;
    const cabType = document.getElementById("bk-cab-type").value;
    const driverName = document.getElementById("bk-driver-name").value;
    const driverPhone = document.getElementById("bk-driver-phone").value;
    const customSightseeing = document.getElementById("bk-custom-notes").value;
    const b2bPortal = document.getElementById("bk-b2b-portal").value;
    const b2bRefNo = document.getElementById("bk-b2b-ref").value;

    const bookingData = {
        id: id || undefined,
        clientName,
        phone,
        email,
        city,
        destination,
        departureDate,
        returnDate,
        adults,
        kids,
        totalAmount,
        advancePaid,
        balanceDue,
        status,
        hotelName,
        roomCategory,
        cabType,
        driverName,
        driverPhone,
        customSightseeing,
        b2bPortal,
        b2bRefNo
    };

    if (id) {
        adminStore.updateBooking(bookingData);
        showAdminToast(`Booking ${id} updated!`);
    } else {
        const created = adminStore.addBooking(bookingData);
        showAdminToast(`New Booking ${created.id} confirmed!`);
    }

    closeBookingModal();
}

// Global search across admin HQ
function handleAdminGlobalSearch(query) {
    if (!query) return;
    const q = query.toLowerCase();

    // Search in bookings
    const matchedBooking = adminStore.data.bookings.find(b => 
        b.clientName.toLowerCase().includes(q) || b.phone.includes(q) || b.id.toLowerCase().includes(q)
    );

    if (matchedBooking) {
        switchAdminTab("travellers");
        const input = document.getElementById("traveller-search-input");
        if (input) input.value = query;
        renderTravellersTab(query);
        return;
    }

    // Search in enquiries
    const matchedEnquiry = adminStore.data.enquiries.find(e => 
        e.name.toLowerCase().includes(q) || e.phone.includes(q)
    );

    if (matchedEnquiry) {
        openEnquiryChat(matchedEnquiry.id);
        return;
    }

    // Search in packages
    const matchedPkg = adminStore.data.packages.find(p => 
        p.title.toLowerCase().includes(q) || p.destination.toLowerCase().includes(q)
    );

    if (matchedPkg) {
        inspectPackage(matchedPkg.id);
        return;
    }

    // Search in drivers
    const matchedDrv = (adminStore.data.drivers || []).find(d =>
        d.name.toLowerCase().includes(q) || d.vehiclePlate.toLowerCase().includes(q)
    );

    if (matchedDrv) {
        selectDriver(matchedDrv.id);
        switchAdminTab("guides");
        return;
    }

    showAdminToast(`No direct match found for "${query}".`);
}

// ==================================================
// EVENT LISTENERS & SECRET SHORTCUTS
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Keyboard Shortcut: Ctrl + Shift + A or Alt + Shift + A
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) ||
            (e.altKey && e.shiftKey && (e.key === "A" || e.key === "a"))) {
            e.preventDefault();
            openAdminLogin();
        }
        if (e.key === "Escape") {
            closeAdminLogin();
            closeVoucherModal();
            closeBookingModal();
            closePackageDetailModal();
            closeDayDetailsModal();
        }
    });

    // 2. Hash handler: #admin in URL
    if (window.location.hash === "#admin") {
        openAdminLogin();
    }
    window.addEventListener("hashchange", () => {
        if (window.location.hash === "#admin") {
            openAdminLogin();
        }
    });

    // 3. Triple click on logo to unlock
    let logoClicks = 0;
    let logoClickTimer = null;
    const siteLogo = document.querySelector(".site-logo");
    if (siteLogo) {
        siteLogo.addEventListener("click", (e) => {
            logoClicks++;
            clearTimeout(logoClickTimer);
            if (logoClicks >= 3) {
                e.preventDefault();
                logoClicks = 0;
                openAdminLogin();
            } else {
                logoClickTimer = setTimeout(() => { logoClicks = 0; }, 800);
            }
        });
    }

    // Initialize Fare Calculator
    const calcBtn = document.getElementById("btn-calc-fare");
    if (calcBtn) {
        calculateB2BFare();
    }
});

// Expose admin store & controllers globally
window.adminStore = adminStore;
window.openAdminLogin = openAdminLogin;
window.closeAdminLogin = closeAdminLogin;
window.submitAdminLogin = submitAdminLogin;
window.openAdminPanel = openAdminPanel;
window.closeAdminPanel = closeAdminPanel;
window.logoutAdmin = logoutAdmin;
window.switchAdminTab = switchAdminTab;
window.changeCalendarMonth = changeCalendarMonth;
window.resetCalendarToToday = resetCalendarToToday;
window.filterTravellers = filterTravellers;
window.setTravellerFilter = setTravellerFilter;
window.openNewBookingModal = openNewBookingModal;
window.closeBookingModal = closeBookingModal;
window.saveBookingForm = saveBookingForm;
window.editTravellerDetails = editTravellerDetails;
window.openVoucherModal = openVoucherModal;
window.closeVoucherModal = closeVoucherModal;
window.sendClientWhatsApp = sendClientWhatsApp;
window.openPackageDetailModal = openPackageDetailModal;
window.closePackageDetailModal = closePackageDetailModal;
window.copyItineraryForWhatsApp = copyItineraryForWhatsApp;
window.setPackageViewMode = setPackageViewMode;
window.selectPackage = selectPackage;
window.inspectPackage = inspectPackage;
window.selectPackageCover = selectPackageCover;
window.addNewPromoCodePrompt = addNewPromoCodePrompt;
window.copyBroadcastTemplate = copyBroadcastTemplate;
window.copyDealWhatsApp = copyDealWhatsApp;
window.editPortalCreds = editPortalCreds;
window.calculateB2BFare = calculateB2BFare;
window.copyB2BQuoteSheet = copyB2BQuoteSheet;
window.closeDayDetailsModal = closeDayDetailsModal;
window.convertEnquiryToBooking = convertEnquiryToBooking;
window.deleteBookingConfirm = deleteBookingConfirm;
window.deleteEnquiryConfirm = deleteEnquiryConfirm;
window.handleAdminGlobalSearch = handleAdminGlobalSearch;
window.promptNewPackage = promptNewPackage;
window.promptManualEnquiry = promptManualEnquiry;
window.selectDriver = selectDriver;
window.filterDrivers = filterDrivers;
window.promptNewDriver = promptNewDriver;
window.promptEditDriver = promptEditDriver;
window.deleteDriverConfirm = deleteDriverConfirm;
window.openEnquiryChat = openEnquiryChat;
window.sendQuickEnquiryReply = sendQuickEnquiryReply;
window.setRevenuePeriod = setRevenuePeriod;
