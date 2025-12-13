// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        // 1. Signal
        { name: 'Signal', url: 'https://signal.me/#eu/cGyHSl-fwhtln4lCHOaNAs7NrGkLXlORDXUH-0QwX31IRo0WPUBCSozpiQ0UiHwO', icon: '#icon-signal', id: 'signal', className: 'signal', text: "Signal" },
        
        // 2. LUFFA (J'ai mis l'icone link par défaut, change si tu as un svg luffa)
        { name: 'LUFFA', url: 'https://callup.luffa.im/c/PLdPzCbPcGE', icon: '#icon-link', id: 'luffa', className: 'luffa', text: "LUFFA" },
        
        // 3. Potato Principale
        { name: 'Potato Main', url: 'https://dympt.org/smockyclubofficial', icon: '#icon-potato', id: 'potato-main', className: 'potato', text: "Potato Principale" },
        
        // 4. Potato Secours
        { name: 'Potato Back', url: 'https://dympt.org/smockyclubofficial6768', icon: '#icon-potato', id: 'potato-backup', className: 'potato', text: "Potato Secours" },
        
        // 5. Instagram
        { name: 'Instagram', url: 'https://www.instagram.com/smockyclub_off6768?igsh=MWs1NnF6dXh6MWg3YQ%3D%3D&utm_source=qr', icon: '#icon-instagram', id: 'instagram', className: 'instagram', text: "Instagram" }
    ];

    // --- DONNÉES DE L'APPLICATION (NOUVELLE STRUCTURE) ---
    const appData = [
        // --- Catégorie 1: Mousseux Cake ---
        {
            id: 'HASHMAROCAIN',
            name: '🇲🇦 Hash marocain 🇲🇦',
            farm: '',
            type: 'Hash marocain',
            quality: ' 🇲🇦 Hash marocain 🇲🇦',
            image: 'CategHashM.png', // Image de la catégorie

            // La catégorie contient maintenant des "farms"
            farms: [
                {
                    /*     id: 'HASH',
                        name: 'HASH',
                        image: 'Frosty2.png', // Mets une image de farm si tu veux
                        badgeText: '5 produits', */
                    products: [
                        {
                            id: 'GRAPPE',
                            flag: '🇲🇦',
                            name: 'GRAPPE 🍇 CAKE 🥧',
                            farm: ' TOP MOUSSE 🧽',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductGrappe.png',
                            video: 'VideoGrappe.mov',
                            description: 'On vous a ramener un mousseux bien jaune 🧽bien clair ☀️odeur de weed 🍀',
                            tarifs: [
                                { weight: '10g', price: 40.00 },
                                { weight: '25g', price: 100.00 },
                                { weight: '50g', price: 0, private: true },
                                { weight: '100g', price: 0, private: true },
                            ]
                        },
                        {
                            id: 'CREAMY',
                            flag: '🇲🇦',
                            name: 'CREAMY RUNTZ 🇺🇸⭐️',
                            farm: ' TRICHOME VALLEY ⛰️⛰️🇲🇦🇲🇦',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductCreamy.png',
                            video: 'VideoCreamy.mov',
                            description: 'On vous a ramener une pépite en dry affinement du curage ⭐️🍯texture petant ⭐️odeur de weed 🍀🍀',
                            tarifs: [
                                { weight: '2,5g', price: 30.00 },
                                { weight: '5g', price: 50.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 250.00 },
                            ]
                        },
                        {
                            id: 'KUSH',
                            flag: '🇲🇦',
                            name: 'KUSH COOKIES 🍪',
                            farm: ' JBLA FROZEN SIFT 🇲🇦☀️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKush.png',
                            video: 'VideoKush.mov',
                            description: 'On vous a ramener une pépite en dry affinement du curage ⭐️🍯texture petant ⭐️odeur de weed 🍀🍀',
                            tarifs: [
                                { weight: '5g', price: 40.00 },
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 200.00 },
                                { weight: '50g', price: 0, private: true },
                                { weight: '100g', price: 0, private: true },
                            ]
                        },

                        {
                            id: 'Zweet',
                            flag: '🇲🇦',
                            name: 'ZWEET OG X RUNTZ ⭐️⚡️🇺🇸',
                            farm: 'TERPÈNES LABZ FROZEN 🧊💦🇪🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductZweet.png',
                            video: 'VideoZweet.mov',
                            description: 'On vous a ramener une pépite sortir du curing ⚡️🍯  Texture pétant 🏆 goût odeur 🤪',
                            tarifs: [
                                { weight: '5g', price: 50.00 },
                                { weight: '10g', price: 90.00 },
                                { weight: '25g', price: 230.00 },
                                { weight: '50g', price: 0, private: true },
                                { weight: '100g', price: 0, private: true },
                            ]
                        },

                        {
                            id: '98',
                            flag: '🇲🇦',
                            name: '98% 🥵🥵🥵THC',
                            farm: 'LIVE ROSIN SUGAR ⭐️⭐️🇺🇸🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'Product98.png',
                            video: 'Video98.mov',
                            description: 'on vous a ramener des pépite en extraction 🍯qui va te chauffer les poumon extraction pur ⭐️⚡️🥵',
                            tarifs: [
                                { weight: '1g', price: 30.00 },
                                { weight: '5g', price: 150.00 },
                                { weight: '10g', price: 300.00 },
                                { weight: '28g', price: 750.00 },
                            ]
                        },

                        {
                            id: 'SWEETZ',
                            flag: '🇲🇦',
                            name: 'SWEETZ PIXIE STICKS 🇺🇸🇺🇸⭐️⭐️⚡️⚡️',
                            farm: 'WPFF X CALI USA 🇺🇸',
                            promoEligible: true,
                            type: 'Hash Marocain',
                            image: 'ProductWpff2.png', // Pense à changer l'image si tu en as une nouvelle
                            video: 'VideoWpff.mov',      // Idem pour la vidéo
                            description: 'On vous a ramener un délice je vous laisse admirer👅 et goûter se trésor 🏆🤪',
                            tarifs: [
                                { weight: '5 prerools', price: 130.00 },
                                { weight: '10 prerools', price: 250.00 },
                                { weight: '15 preools', price: 380.00 },
                                { weight: '20 prerools', price: 500.00 },
                                { weight: 'Pour plus 🕵️', price: 0, private: true },

                            ],
                            // 👇 TITRE PERSONNALISÉ
                            variantTitle: 'Sélectionner vos gouts 🍧 :', 
                            jars: [
                                { name: 'WATER MELON', emoji: '🍉', colorClass: 'sweetz-watermelon' },
                                { name: 'RAINBOW KOOL AÏD', emoji: '🏆⭐️', colorClass: 'sweetz-rainbow' },
                                { name: 'GREEN APPLE AIRHEADS', emoji: '🍏🍎', colorClass: 'sweetz-apple' },
                                { name: 'BALISTIC CHERRY', emoji: '💦🍒', colorClass: 'sweetz-cherry' },
                                { name: 'PINA COLADA FANTA', emoji: '🍍🥥', colorClass: 'sweetz-pina' }, // J'ai mis ananas coco pour pina
                                { name: 'CALIFORNIA RUNTZ', emoji: '🇺🇸🇺🇸', colorClass: 'sweetz-runtz' },
                            ]
                        },


                        {
                            id: 'Frozen',
                            flag: '🇲🇦',
                            name: 'FROZEN 🧊🧊',
                            farm: '⭐️ STREET FARM FROZEN ⭐️',
                            promoEligible: true,
                            type: 'Hash Marocain',
                            image: 'ProductFrozen.png', // Pense à changer l'image si tu en as une nouvelle
                            video: 'VideoFrozen.mp4',      // Idem pour la vidéo
                            description: 'Curing fait maison 🏠 odeur fruités tu retrouve une salade de fruit🥗 le bordel 🍑🍌🍓🍉🍋 imposante surtout pour le prix 🥇',
                            tarifs: [
                                { weight: '5g', price: 50.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 240.00 },
                                { weight: '50g', price: 0, private: true },
                                { weight: '100g', price: 0, private: true },

                            ],
                            // 👇 TITRE PERSONNALISÉ
                            variantTitle: 'Sélectionner la variété 🍧 :', 
                            jars: [
                                { name: 'TRAPE GRAPE', emoji: '⛽️🍇', colorClass: 'frozen-trape' },
                                { name: 'ORANGE COOKIES', emoji: '🍊🍪', colorClass: 'frozen-cookie' },
                                { name: 'LEMON BEAM X TROP CHERRY', emoji: '🍋🏝️🍒', colorClass: 'frozen-chery' },
                                { name: 'SUNDAE DRIVER', emoji: '🍨🏎️', colorClass: 'frozen-driver' },
                                { name: 'TROPICAL OREOZ', emoji: '🏝️🍩', colorClass: 'frozen-tropical' },
                            ]
                        },
                        {
                            id: 'Premium',
                            flag: '🇲🇦',
                            name: '⭐️⭐️ Premium ⭐️⭐️',
                            farm: '⭐️ STREET FARM FROZEN ⭐️',
                            promoEligible: true,
                            type: 'Hash Marocain',
                            image: 'ProductPremium.png', // Pense à changer l'image si tu en as une nouvelle
                            video: 'VideoPremium.mov',      // Idem pour la vidéo
                            description: 'Curing fait maison 🏠 Frozen PREMIUM \n blanc de blanc ⭐️odeur de Cali 🇺🇸\n odeur imposante 😈',
                            tarifs: [
                                { weight: '1g', price: 10.00 },
                                { weight: '2,5g', price: 30.00 },
                                { weight: '5g', price: 50.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 0, private: true },
                                { weight: '100g', price: 0, private: true },
                            ],
                            // 👇 TITRE PERSONNALISÉ
                            variantTitle: 'Sélectionner la variété 🍧 :', 
                            jars: [
                                { name: 'MOROCCO PEACHES PREMIUM', emoji: '🇲🇦🍑', colorClass: 'frozen-peach' },
                                { name: 'TROPCHERRY X YELLOW', emoji: '🏝️🍒🍈', colorClass: 'frozen-yellow' },
                                { name: 'MEATORANGE', emoji: '☄️🍊', colorClass: 'frozen-meat' },
                                { name: 'TRAP Z', emoji: '🍇🍭', colorClass: 'frozen-trap' },
                                { name: 'GASMINT X FF', emoji: '💨🍋🍏🍎', colorClass: 'frozen-ff' },

                            ]
                        },
                        {
                            id: 'Top',
                            flag: '🇲🇦',
                            name: 'Top 🇲🇦',
                            farm: '🧑‍🌾 TERPS FARMS 👨‍🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductTop.png',
                            videos: [
                                'Top.mov',      // Vidéo 1
                                'Top2.mp4'      // Vidéo 2 (ajoute tes fichiers)
                            ],
                            description: 'Curing fait maison qualité petant odeur fruités 🍑🍌prix imbattable ✅',
                            tarifs: [
                                { weight: '10g', price: 60.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 300.00 },
                                // priver
                                { weight: '100g', price: 0, private: true },
                            ],
                            // 👇 AJOUT DES VARIANTES ICI
                            variantTitle: 'Sélectionner la filtration :', // Titre personnalisé
                            jars: [
                                { name: '90u', emoji: '🥇', colorClass: 'variant-90u' },
                                { name: '120u', emoji: '🥈', colorClass: 'variant-120u' },
                                { name: '160u', emoji: '🥉', colorClass: 'variant-160u' }
                            ]
                        },
                        {
                            id: 'GMO',
                            flag: '🇲🇦',
                            name: 'GMO 🧅',
                            farm: ' ⭐️ NO FARM ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductGmo.png',
                            video: 'VideoGmo.mp4',
                            description: 'On vous a ramener une pépite en dry affinement du curage ⭐️🍯texture petant ⭐️odeur de weed 🍀🍀',
                            tarifs: [
                                { weight: '5g', price: 30.00 },
                                { weight: '10g', price: 50.00 },
                                { weight: '25g', price: 120.00 },
                                { weight: '50g', price: 220.00 },
                                { weight: '100g', price: 440.00 },
                            ]
                        },
                      /*   {
                            id: 'IceCream',
                            flag: '🇲🇦',
                            name: 'ICE CREAM CAKE 🍦🥧',
                            farm: ' ⭐️ ANONYMUZ FARMZ ⭐️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductIceCream.png',
                            video: 'VideoIceCream.mp4',
                            description: 'On vous a ramener une pépite terpène fruités 🍌🍓goût GAZZY 👅👅',
                            tarifs: [
                                { weight: '2,5g', price: 60.00 },
                                { weight: '5g', price: 120.00 },
                                { weight: '10g', price: 230.00 },
                            ]
                        }, */
                        /* {
                            id: 'TropCookies',
                            flag: '🇲🇦',
                            name: 'Trop Cookies 🍪',
                            farm: ' ⭐️ STREET FARM FROZEN ⭐️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductTropCookies.png',
                            video: 'TropCookies.mp4',
                            description: 'Après un curing fait maison 🏠, une texture blanc de blanc 🍾, odeur fruités 🍑🍉 \n Un délice 🥵',
                            tarifs: [
                                { weight: '2,5g', price: 30.00 },
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 120.00 },
                                { weight: '25g', price: 300.00 },

                            ]
                        },
                        {
                            id: 'MorrocoPeach',
                            flag: '🇲🇦',
                            name: 'Morroco Peach 🍑🇲🇦',
                            farm: ' ⭐️ STREET FARM FROZEN ⭐️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductMorroco.png',
                            video: 'MorrocoPeach.mp4',
                            description: ' Un cold curing ⚡️🍯 blanc de blanc 🍯odeur gazzy 🥵goût de 🤯',
                            tarifs: [
                                { weight: '2,5g', price: 40.00 },
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 140.00 },
                                { weight: '25g', price: 350.00 },
                                // a metre description pck a voir en prive
                                { weight: '50g', price: 0, private: true },
                                { weight: '100g', price: 0, private: true },
                            ]
                        },
                        {
                            id: 'FFJ',
                            flag: '🇲🇦',
                            name: 'FFJ X FF 🍑🍌🍓',
                            farm: ' ⭐️ STREET FARM FROZEN ⭐️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductFFJ.png',
                            video: 'FFJ.mp4',
                            description: ' Un cold curing ⚡️🍯 blanc de blanc 🍯odeur gazzy 🥵goût de 🤯',
                            tarifs: [
                                { weight: '2,5g', price: 40.00 },
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 140.00 },
                                { weight: '25g', price: 350.00 },
                                // a metre description pck a voir en prive
                                { weight: '50g', price: 0, private: true },
                                { weight: '100g', price: 0, private: true },

                            ]
                        }, */
                   /*      {
                            id: 'LemonSlice',
                            flag: '🇲🇦',
                            name: 'Lemon Slice 🍋🍋‍🟩',
                            farm: '🧽 TOP MOUSSE PRENIUM 🧽',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductLemon.png',
                            video: 'BlueZ.mov',
                            description: ' Un cold curing ⚡️🍯 blanc de blanc 🍯odeur gazzy 🥵goût de 🤯',
                            tarifs: [
                                { weight: '10g', price: 30.00 },
                                { weight: '25g', price: 80.00 },
                                { weight: '50g', price: 160.00 },
                                { weight: '100g', price: 280.00 },

                            ]
                        }, */
                  /*       {
                            id: 'BlueZushi',
                            flag: '🇲🇦',
                            name: 'BLUE ZUSHI 🍣',
                            farm: '🧽 TOP MOUSSE PRENIUM 🧽',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBlueZushi.png',
                            video: 'BlueZ.mov',
                            description: ' Un cold curing ⚡️🍯 blanc de blanc 🍯odeur gazzy 🥵goût de 🤯',
                            tarifs: [
                                { weight: '10g', price: 30.00 },
                                { weight: '25g', price: 80.00 },
                                { weight: '50g', price: 160.00 },
                                { weight: '100g', price: 280.00 },


                            ]
                        }, */
                       /*  {
                            id: 'COOKIES',
                            flag: '🇲🇦',
                            name: 'COOKIES 🍪',
                            farm: '🧽 TOP MOUSSE PRENIUM 🧽',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductCookies.png',
                            video: 'BlueZ.mov',
                            description: ' Un cold curing ⚡️🍯 blanc de blanc 🍯odeur gazzy 🥵goût de 🤯',
                            tarifs: [
                                { weight: '10g', price: 30.00 },
                                { weight: '25g', price: 80.00 },
                                { weight: '50g', price: 160.00 },
                                { weight: '100g', price: 280.00 },

                            ]
                        },
                        {
                            id: 'Limonade',
                            flag: '🇲🇦',
                            name: 'LIMONADE🍋🍋‍🟩',
                            farm: '🇲🇦 TOP DRY SIFT ®️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductLimonade.png',
                            video: 'Candy.mp4',
                            description: 'Curage fait maison 🏠 odeur de weed 🍀texture petant clair ☀️☀️',
                            tarifs: [
                                { weight: '10g', price: 50.00 },
                                { weight: '25g', price: 120.00 },
                                { weight: '50g', price: 240.00 },
                                // a remplacer par priver
                                { weight: '100g', price: 0, private: true },
                            ]
                        } */
                    ]
                }

            ]
        },

        // --- Catégorie 2: V.V.S TANGER ---
        {
            id: 'HASHAMERICAIN',
            name: '🇺🇸 Hash américain 🇺🇸',
            farm: '',
            type: 'Hash américain',
            quality: ' 🇺🇸 Hash américain 🇺🇸',
            image: 'CategHashA.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'MINTS',
                            flag: '🇺🇸',
                            name: 'MINTS MILANO 🇮🇹⭐️',
                            farm: 'CALITE FARMS ⚡️🦍',
                            promoEligible: true,
                            type: 'Hash Americain',
                            image: 'ProductMints.png',
                            videos: [ 
                                'VideoMints.mp4',
                                'VideoMints2.mov'
                            ],
                            description: 'On vous a ramener une pépite avec un goût 👅 de Cali 🇺🇸 imposante un délice crémeux ⚡️🥇',
                            tarifs: [
                                { weight: '2,5g', price: 90.00 },
                                { weight: '5g', price: 170.00 },
                                { weight: '10g', price: 340.00 },
                            ]
                        },
                        {
                            id: 'ZOAP',
                            flag: '🇺🇸',
                            name: 'ZOAP 🇺🇸🇺🇸😰',
                            farm: 'CALI PLATES 🧊FROZEN SINGLE SOURCE ⭐️🇺🇸',
                            promoEligible: true,
                            type: 'Hash Americain',
                            image: 'ProductZoap.png',
                            video : 'VideoZoap.mov',
                            description: 'On vous a ramener le meilleure des Cali plates single source ⭐️⚡️par contre rien avoir avec le Frozen tiers ❌là on et sur du Hash de grande envergure ⭐️🇺🇸  couleur miel 🍯',
                            tarifs: [
                                { weight: '2,5g', price: 90.00 },
                                { weight: '5g', price: 180.00 },
                                { weight: '10g', price: 350.00 },
                            ]
                        },
                        {
                            id: 'PAPAYA',
                            flag: '🇺🇸',
                            name: 'PAPAYA 🥭x ZANGRIA🇺🇸',
                            farm: 'WIZARD THREES 🇺🇸 X GOLDEN HEADWARRIOR🍯🇺🇸',
                            promoEligible: true,
                            type: 'Hash Americain',
                            image: 'ProductPapaya.png',
                            video : 'VideoPapaya.mov',
                            description: 'On vous a ramener exclu du moment l’association d’un spécialiste de la Cali 🇺🇸et l’autre spécialiste du Hash 🍯 t’en fumera qu’une seul fois ⚡️goût incroyable 👅',
                            tarifs: [
                                { weight: '2,5g', price: 130.00 },
                                { weight: '5g', price: 250.00 },
                                { weight: '10g', price: 500.00 },
                                { weight: '25g', price: 1200.00 },

                            ]
                        },
                      /*   {
                            id: 'HONEY',
                            flag: '🇺🇸',
                            name: 'HONEY POP ®️🇺🇸',
                            farm: '🧤STATIC ROOM 🧤',
                            promoEligible: true,
                            type: 'Hash Americain',
                            image: 'Rupture.png',
                            clickable: false, 
                            video: 'StaticRooms.mp4',
                            description: 'Static room curage fait maison 🏠 ✅a fait fort cette année avec le dry qui a rien avoir avec du dry mieux que vos Frozen et vos Static du moment 🥵🍯',
                            tarifs: [
                                { weight: '5g', price: 150.00 },
                                { weight: '10g', price: 300.00 },
                                { weight: '28g', price: 750.00 },
                                //priver
                                { weight: '56g', price: 0, private: true },
                            ]
                        }, */
                        {
                            id: 'FrozenSift',
                            flag: '🇺🇸',
                            name: 'FROZEN SIFT 🧊🍧',
                            farm: 'CALI PLATES FROZEN 🇺🇸',
                            promoEligible: true,
                            type: 'Hash Americain',
                            image: 'ProductCaliSift.png', // Pense à changer l'image si tu en as une nouvelle
                            video: 'VideoCaliSift.mp4',      // Idem pour la vidéo
                            description: 'On vous a ramené une pépite que vous connaissez tous ! 🌟\nVous l’avez vu au menu sous toutes ses formes...\nMaintenant le Frozen Tier 👀🧊\n\nVraiment goût 👅 de Cali USA 🇺🇸 imposant.\nProduit Gazzy ⛽, curage fait maison 🏠.\n\nÀ ne pas louper pour les amateurs de USA 🇺🇸',
                            tarifs: [
                                { weight: '10g', price: 300.00 },
                                { weight: '25g', price: 650.00 },
                                { weight: '50g', price: 1300.00 },
                                { weight: '100g', price: 2300.00 },
                            ],
                            // 👇 TITRE PERSONNALISÉ
                            variantTitle: 'Sélectionner la variété 🍧 :', 
                            jars: [
                                { name: 'TRIANGLE KUSH', emoji: '⚡️🫀', colorClass: 'frozen-triangle' },
                                { name: 'MOON BOOTS', emoji: '🍯👑', colorClass: 'frozen-moon' },
                                { name: 'HI OCTANE', emoji: '🥵🔱', colorClass: 'frozen-octane' },
                                { name: 'WHITE RUNTZ', emoji: '🇺🇸', colorClass: 'frozen-runtz' },
                            ]
                        }
                    ]
                }
            ]
        },
        // --- Catégorie 2: V.V.S TANGER ---
        {
            id: 'WeedUsa',
            name: '🇺🇸 Weed Usa 🇺🇸',
            farm: '',
            type: 'Weed Usa',
            quality: '🇺🇸 Weed Usa 🇺🇸',
            image: 'CategWeedU.png', // Image de la catégorie

            farms: [
                {
                    /*id: 'WIZARDTREES',
                    name: 'Wizard trees 🔮',
                    image: 'CategHash.png', 
                    badgeText: '0 produits',
                    clickable: false,  */
                    products: [
                        {
                            id: 'CaliBags',
                              flag: '🇺🇸',
                            name: 'CALI BAGS USA 🇺🇸',
                            farm: 'CALI X USA 🇺🇸',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductCaliBags.png',
                            video: 'VideoCaliBags.mov',
                            description: 'On vous a ramener une pépite direct des usa 🇺🇸 Bags scellé 🔐',
                            tarifs: [
                                { weight: '1 bags', price: 100.00 },
                                { weight: '2 bags', price: 180.00 },
                                { weight: '4 bags', price: 360.00 },
                                { weight: 'Plus', price: 0, private: true },
                            ],
                        },
                        {
                            id: 'CALIWEEDING',
                            flag: '🇺🇸',
                            name: 'WEEDING CAKE 🍰🥧',
                            farm: 'CALI TOP SHELF 🇺🇸',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductWeeding.png',
                            video: 'VideoWeeding.mov',
                            description: 'On vous présente la 3 variétés surprise 😧 meilleure variétés pour les connaisseur de Cali 🇺🇸 réputés pour sont odeur👃 sont goût 👅 et son effet puissant 🥵',
                            tarifs: [
                                { weight: '5g', price: 50.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 220.00 },
                                { weight: '50g', price: 410.00 },
                                { weight: '100g', price: 820.00 },

                            ]
                        },
                        {
                            id: 'CALISUNSET',
                            flag: '🇺🇸',
                            name: 'SUNSET SHERBET 🍋🍋‍🟩',
                            farm: '🧙 WIZARD THREES 🧙',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductSunsetBiscotti.png',
                            // clickable: false, 
                            video:  'VideoSunsetBiscotti.mp4',      // Vidéo 1
                            description: 'On vous a ramené 2 Cali usa 🇺🇸 top shelf goût GAZZY 🇺🇸odeur GAZZY 🇺🇸',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 120.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 450.00 },
                                { weight: '100g', price: 850.00 },

                            ]
                        },
                        {
                            id: 'CALIBISCOTTI',
                            flag: '🇺🇸',
                            name: 'BISCOTTI RUNTZ 🫀🇺🇸',
                            farm: '🧙 TOP SHELF  🧙',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductBiscotti.png',
                            // clickable: false, 
                            video : 'VideoSunsetBiscotti.mov',     // Vidéo 2 (ajoute tes fichiers)
                            description: 'On vous a ramené 2 Cali usa 🇺🇸 top shelf goût GAZZY 🇺🇸odeur GAZZY 🇺🇸',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 120.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 450.00 },
                                { weight: '100g', price: 850.00 },
                            ]
                        }

                    ]
                }]
        },
        {
            id: 'WeedHollandaise',
            name: '🇳🇱 Weed Hollandaise 🇳🇱',
            farm: '',
            type: 'Weed Hollandaise',
            quality: '🇳🇱 Weed Hollandaise 🇳🇱',
            image: 'CategWeedH.png', // Image de la catégorie

            // La catégorie contient maintenant des "farms"
            farms: [
                {
                    /*     id: 'HASH',
                        name: 'HASH',
                        image: 'Frosty2.png', // Mets une image de farm si tu veux
                        badgeText: '5 produits', */
                    products: [
                      /*   {
                            id: 'AMNESIAHAZE',
                            flag: '🇳🇱',
                            name: 'AMNESIA HAZE 🍃',
                            farm: 'NOFARM',
                            promoEligible: true,
                            type: 'Weed Hollandaise',
                            image: 'ProductAmnesia.png',
                            video: 'Amnesia.mov',
                            description: 'Tête bien craquante 🤯odeur de weed imposante des ouverture 😉🧟',
                            tarifs: [
                                { weight: '5g', price: 50.00 },
                                { weight: '10g', price: 90.00 },
                                { weight: '25g', price: 230.00 },
                                { weight: '50g', price: 460.00 },
                                //modif prive
                                { weight: '100g', price: 0, private: true },
                            ]
                        } */
                    ]
                }

            ]
        },
        {
            id: 'Extraction',
            name: '☢️ Extraction ☢️',
            farm: '',
            type: 'Extraction',
            quality: ' ☢️ Extraction ☢️',
            image: 'CategExtraction.png', // Image de la catégorie

            // La catégorie contient maintenant des "farms"
            farms: [
                {
                    /*     id: 'HASH',
                        name: 'HASH',
                        image: 'Frosty2.png', // Mets une image de farm si tu veux
                        badgeText: '5 produits', */
                    products: [
                        
                    ]
                }

            ]
        },
        {
            id: 'HashGrande',
            name: '🍾 Hash De Grande Envergure 🍾',
            farm: '',
            type: 'Hash de luxe',
            quality: '🍾 Hash de grande envergure 🍾',
            image: 'CategHashGrande.png', // Image de la catégorie

            // La catégorie contient maintenant des "farms"
            farms: [
                {
                    /*     id: 'HASH',
                        name: 'HASH',
                        image: 'Frosty2.png', // Mets une image de farm si tu veux
                        badgeText: '5 produits', */
                    products: [
                       /*  {
                            id: 'wpff',
                            //  flag: '🇺🇸',
                            name: 'GMO X  RUNTZ 🍯®️',
                            farm: '🧑‍🌾 TERPS FARMS 👨‍🌾',
                            promoEligible: true,
                            type: 'Wpff',
                            image: 'Rupture.png',
                            clickable: false, 
                            videos: [
                                'WpffExctract.mov',      // Vidéo 1
                                'WpffExctract2.mov'      // Vidéo 2 (ajoute tes fichiers)
                            ],
                            description: 'WPFF EXTRACT ⚡️⭐️⭐️ \n\n Un curing fait maison 🏠 une couleur mielleuse 🍯🍯un goût 👅 full terpène usa 🇺🇸 \n Blanc de blanc 🥵🍾',
                            tarifs: [
                                { weight: '2,5g', price: 80.00 },
                                { weight: '5g', price: 160.00 },
                                { weight: '10g', price: 320.00 },
                                { weight: '25g', price: 780.00 },
                            ]
                        }, */
                        {
                            id: 'Jaar',
                          flag: '🇪🇸',
                            name: 'JAAR SCELLÉ ®️🇪🇸🍯 ',
                            farm: '🧑‍🌾 TERPS FARMS 👨‍🌾',
                            promoEligible: true,
                            type: 'Wpff',
                            image: 'ProductJaar.png',
                            video: 'Jaar.mov',
                            description: 'On vous a ramener une pépite des social club espagnol ✅👀🥵odeur de Cali 🇺🇸 \n en bouche 👄 jaar scellé piatella 🍯🍯\n static ⚡️⚡️',
                            tarifs: [
                                { weight: '1 jaar', price: 120.00 },
                                { weight: '2 jaar', price: 240.00 },
                                { weight: '4 jaar', price: 480.00 },
                            ],
                            jars: [
                                { name: 'NANA JUNK', emoji: '🕺🪩', colorClass: 'jar-nana-junk' },
                                { name: 'PINK LEMONADE', emoji: '🍋🍋‍🟩', colorClass: 'jar-pink-lemonade' },
                                { name: 'SOUR DIESEL', emoji: '⛽️', colorClass: 'jar-sour-diesel' },
                                { name: 'PEACH RINGS', emoji: '🍑', colorClass: 'jar-peach-rings' },
                                { name: 'BANANA JUNK', emoji: '🍌', colorClass: 'jar-banana-junk' }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            id: 'Écaille',
            name: '🐠 Écaille de poisson 🐠',
            farm: '',
            type: 'Écaille',
            quality: '🐠 Écaille de poisson 🐠',
            image: 'CategEcaille.png', // Image de la catégorie

            // La catégorie contient maintenant des "farms"
            farms: [
                {
                    /*     id: 'HASH',
                        name: 'HASH',
                        image: 'Frosty2.png', // Mets une image de farm si tu veux
                        badgeText: '5 produits', */
                    products: [
                        {
                            id: 'Bolivienne',
                              flag: '🇧🇴',
                            name: 'BOLIVIENNE 🇧🇴🇧🇴',
                            farm: '🦁🦁🦁🦁',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBoliv.png',
                            video: 'Boliv.mov',
                            description: 'Odeur qui fouette 🧟qui débouche le nez 👃 tu risque de passé un bon voyage 🛫',
                            tarifs: [
                                { weight: '1g', price: 60.00 },
                                { weight: '5g', price: 220.00 },
                                { weight: '10g', price: 420.00 },
                            ]
                        }
                    ]
                }

            ]
        },


    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories'; // 'categories', 'farms', ou 'products'
    let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
    let currentFarmId = null; // Garde en mémoire la farm sélectionnée
    let appliedPromo = null; // Pour suivre le code promo
    let paymentMethod = 'Espèce'; // Méthode de paiement par défaut
    let selectedJar = null; // 💡 AJOUT : Pour suivre le jar sélectionné sur la page produit

    // --- DÉFINIS TES CODES PROMO ICI ---
    const validPromoCodes = {
        "ACTUPLUG33": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible' // 'eligible' (articles marqués) ou 'all' (tout le panier)
        },
        /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
        // Ajoute d'autres codes ici

        // ADD CUMULABLE FONCTION POUR PLUTARD
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');

    const filterContainer = document.querySelector('.filters');

    // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;
    // --- FIN NOUVEAUX SÉLECTEURS ---

    // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
    function getProductById(productId) {
        for (const category of appData) {
            // Boucle dans les farms de chaque catégorie
            for (const farm of category.farms) {
                const product = farm.products.find(p => p.id === productId);
                if (product) {
                    return product;
                }
            }
        }
        return undefined; // Non trouvé
    }

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        // S'assure que la page existe avant de l'activer
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info'); // On ajoute l'info
        const contactNav = document.getElementById('nav-contact');

        // On reset tout
        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');

        // On active le bon
        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else {
            // Pour page-home, page-produit, panier, etc.
            homeNav.classList.add('active');
        }
    }

    // --- LOGIQUE D'AFFICHAGE ---

    // --- MODIFIÉ ( sans sous categorie ): renderHomePage ---

    function renderHomePage() {
        // Toujours afficher le conteneur principal des filtres
        filterContainer.style.display = 'flex';

        // On enlève les anciens boutons "retour"
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();


        if (currentView === 'categories') {
            renderCategoryList();

            // --- GESTION DES FILTRES (Vue Catégorie) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex'; // On montre QUE la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            // --- MIS EN COMMENTAIRE COMME DEMANDÉ ---
            /*
            renderFarmList(currentCategoryId);
    
            // --- GESTION DES FILTRES (Vue Farms) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none'; 
            qualityFilterWrapper.style.display = 'none';
    
            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; 
    
            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn'; 
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `background: var(--tertiary-bg-color); border: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;font-family: Copperplate;`;
            filterContainer.prepend(backButton);
            */
            // --- FIN DU BLOC COMMENTÉ ---

        } else if (currentView === 'products') {
            // --- MODIFICATION : On ne passe plus currentFarmId ---
            renderProductList(currentCategoryId);

            // --- GESTION DES FILTRES (Vue Produit) ---
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 colonnes

            // --- MODIFICATION : Le bouton "Retour" ramène aux CATÉGORIES ---
            const category = appData.find(c => c.id === currentCategoryId);
            // const farm = category.farms.find(f => f.id === currentFarmId); // <- On n'a plus besoin de ça
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn'; // <-- MODIFIÉ (pour réutiliser le clic)
            backButton.innerHTML = `<svg width="24"
         height="24"
          viewBox="0 0 24 24"
          ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${category.name}`; // <-- MODIFIÉ (on affiche le nom de la catégorie)
            backButton.style.cssText = ` background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #f5a260d6;
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
            filterContainer.prepend(backButton);
        }
    }

    // --- MODIFIÉ : renderCategoryList ---
    // Prend en compte le filtre qualité
    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // --- AJOUT ---
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
            // --- FIN AJOUT ---
        });

        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }

        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
            productListContainer.appendChild(card);
        });
    }

    // --- NOUVELLE FONCTION ---
    // Affiche la liste des FARMS pour une catégorie
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        const farms = category.farms; // Pas de filtres ici pour l'instant

        productListContainer.innerHTML = '';
        if (farms.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune farm trouvée pour cette catégorie.</p>';
            return;
        }

        farms.forEach(farm => {
            const card = document.createElement('div');
            card.className = 'farm-card'; // NOUVELLE CLASSE
            card.dataset.farmId = farm.id; // DATASET IMPORTANT

            if (farm.clickable === false) {
                card.classList.add('unclickable');
            }

            const productCount = farm.products.length;

            let badgeHTML = '';
            if (farm.badgeText) {
                badgeHTML = `<div class="card-badge">${farm.badgeText}</div>`;
            }

            card.innerHTML = `
            <div class="card-badge">${productCount > 0 ? productCount + ' produit' + (productCount > 1 ? 's' : '') : farm.badgeText || ''}</div>
            
            <img src="${farm.image}" alt="${farm.name}">
           
        `;
            productListContainer.appendChild(card);
        });
    }


    // --- NOUVELLE FONCTION : METTRE À JOUR LE FILTRE FARM ---
    function updateFarmFilterForCategory(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        const farmSelect = document.getElementById('farm-filter');
        
        if (!category || !farmSelect) return;

        // 1. On récupère tous les produits de cette catégorie
        const allProductsInCategory = category.farms.flatMap(farm => farm.products);

        // 2. On extrait les noms des farms uniques présents dans ces produits
        const uniqueFarms = [...new Set(allProductsInCategory.map(p => p.farm))];
        
        // 3. On vide le select actuel et on remet l'option par défaut
        farmSelect.innerHTML = '<option value="all">🌾 NOS FARMS 🌾</option>';

        // 4. On ajoute les nouvelles options
        uniqueFarms.forEach(farmName => {
            // On vérifie que le nom n'est pas vide
            if(farmName && farmName.trim() !== '') {
                const option = document.createElement('option');
                option.value = farmName;
                option.textContent = farmName;
                farmSelect.appendChild(option);
            }
        });
        
        // 5. On remet le filtre sur "all" par sécurité
        farmSelect.value = 'all';
        currentFilters.farm = 'all';
    }

    // Affiche la liste des PRODUITS pour une CATÉGORIE ENTIÈRE
    function renderProductList(categoryId) { // <-- MODIFIÉ (on n'a plus besoin de farmId)
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        // --- MODIFICATION MAJEURE ---
        // On récupère TOUS les produits de TOUTES les farms de cette catégorie
        const allProducts = category.farms.flatMap(farm => farm.products);
        // --- FIN MODIFICATION ---

        if (!allProducts || allProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit dans cette catégorie.</p>';
            return;
        }

        const filteredProducts = allProducts.filter(product => { // <-- On filtre la nouvelle liste
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
            return searchMatch && farmMatch;
        });

        productListContainer.innerHTML = '';
        if (filteredProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            // ... (le reste de la fonction est identique)
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            if (product.clickable === false) {
                card.classList.add('unclickable');
            }

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';

            card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div>
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
            productListContainer.appendChild(card);
        });
    }

    // Affiche la page de détail d'un produit
    // Affiche la page de détail d'un produit
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        // Reset la jar/variante sélectionnée
        selectedJar = product.jars ? product.jars[0] : null;

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        // --- LOGIQUE VIDÉO (CAROUSEL OU UNIQUE) ---
        // On récupère la div container de la vidéo qui existe déjà dans le HTML
        const videoContainer = document.querySelector('#page-product .page-content');
        // On nettoie l'ancienne vidéo s'il y en avait une pour reconstruire proprement
        const existingVideoWrapper = document.querySelector('.video-container');
        if (existingVideoWrapper) existingVideoWrapper.remove();
        // (Note: on laisse le titre et le bouton retour gérés par le header)

        let videoHTML = '';
        // On prépare la liste des vidéos (soit le tableau, soit la string unique mise dans un tableau)
        const videoList = product.videos ? product.videos : (product.video ? [product.video] : []);

        if (videoList.length > 0) {
            // Si plus d'une vidéo, on ajoute les flèches
            const controlsHTML = videoList.length > 1 ? `
            <button class="carousel-btn prev">‹</button>
            <button class="carousel-btn next">›</button>
            <div class="carousel-dots">
                ${videoList.map((_, i) => `<div class="dot ${i === 0 ? 'active' : ''}"></div>`).join('')}
            </div>
        ` : '';

            videoHTML = `
            <div class="video-container">
                <video class="product-video" src="${videoList[0]}" poster="${product.image}" playsinline controls></video>
                ${controlsHTML}
            </div>
        `;
        }

        // --- LOGIQUE TARIFS (Privé vs Public) ---
        let tarifsHTML = product.tarifs.map(tarif => {
            let priceDisplay, buttonDisplay;

            if (tarif.private) {
                priceDisplay = `<div class="tarif-price" style="font-size: 1rem; color: #ffa030;">Privé 🔒</div>`;
                buttonDisplay = `
                <button class="add-to-cart-btn contact-private-btn" style="border-color: #ffa030;color: #ffa030;">
                    <svg width="20" height="20"><use href="#icon-telegram"/></svg>
                </button>`;
            } else {
                priceDisplay = `<div class="tarif-price">${tarif.price.toFixed(2)}€</div>`;
                buttonDisplay = `
                <button class="add-to-cart-btn" 
                    data-product-id="${product.id}" 
                    data-weight="${tarif.weight}" 
                    data-price="${tarif.price}"
                    ${selectedJar ? 'data-jar-name="' + selectedJar.name + '" data-jar-class="' + selectedJar.colorClass + '"' : ''}>
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>`;
            }

            return `
        <div class="tarif-item ${selectedJar ? selectedJar.colorClass : ''}">
            <div class="box-tarif">
                <div class="tarif-wieght">${tarif.weight}</div>
                ${priceDisplay}
            </div>
            ${buttonDisplay}
        </div>
        `;
        }).join('');

        let descriptionHTML = '';
        if (product.description) {
            const formattedDescription = product.description.replace(/\n/g, '<br>');
            descriptionHTML = `<p class="product-description">${formattedDescription}</p>`;
        }

        // --- LOGIQUE VARIANTE / JAR ---
        let jarSelectorHTML = '';
        if (product.jars) {
            const jarButtons = product.jars.map((jar, index) => `
            <button class="jar-select-btn ${jar.colorClass} ${index === 0 ? 'active' : ''}" 
                data-jar-name="${jar.name}" 
                data-jar-emoji="${jar.emoji}" 
                data-jar-class="${jar.colorClass}">
                ${jar.name} ${jar.emoji}
            </button>
        `).join('');

            jarSelectorHTML = `
            <h4 class="jar-title">${product.variantTitle ? product.variantTitle : 'Sélectionner votre Jaar :'}</h4>
            <div class="jar-selector-container">
                ${jarButtons}
            </div>
            <hr class="jar-divider">
        `;
        }

        // --- INJECTION DU HTML ---
        // 1. On injecte la vidéo tout en haut du content (avant les details)
        // Astuce : on insert la vidéo juste après le header, ou on prepend dans page-content
        // Comme ton HTML a <video class="product-video"> en dur, on va remplacer ça dynamiquement

        // On vide le conteneur details et on reconstruit
        detailsContainer.innerHTML = `
    <div class="name">${product.name}</div>
    <div class="farm">${product.farm}</div>
    ${descriptionHTML} 
    ${jarSelectorHTML}
    <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
    <div class="tarifs-grid-container">
        ${tarifsHTML}
    </div>
    `;

        // On insère le bloc vidéo juste AVANT le bloc détails
        // (On supprime l'ancienne balise video qui traine dans le HTML static s'il le faut)
        const oldStaticVideo = document.querySelector('#page-product > .page-content > video.product-video');
        if (oldStaticVideo) oldStaticVideo.remove();

        detailsContainer.insertAdjacentHTML('beforebegin', videoHTML);


        // --- JAVASCRIPT DU CAROUSEL ---
        if (videoList.length > 1) {
            let currentVideoIndex = 0;
            const videoElement = document.querySelector('.video-container .product-video');
            const dots = document.querySelectorAll('.dot');
            const btnPrev = document.querySelector('.carousel-btn.prev');
            const btnNext = document.querySelector('.carousel-btn.next');

            function updateCarousel() {
                // Change la source
                videoElement.src = videoList[currentVideoIndex];
                videoElement.play(); // Lance la lecture auto quand on change

                // Met à jour les points
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentVideoIndex);
                });
            }

            // Clic Suivant
            if (btnNext) {
                btnNext.onclick = function () {
                    currentVideoIndex++;
                    if (currentVideoIndex >= videoList.length) currentVideoIndex = 0; // Boucle
                    updateCarousel();
                };
            }

            // Clic Précédent
            if (btnPrev) {
                btnPrev.onclick = function () {
                    currentVideoIndex--;
                    if (currentVideoIndex < 0) currentVideoIndex = videoList.length - 1; // Boucle
                    updateCarousel();
                };
            }
        }

        // Applique la couleur par défaut
        if (selectedJar) {
            const tarifItems = document.querySelectorAll('#product-details-content .tarif-item');
            tarifItems.forEach(item => {
                item.classList.remove(
                    'jar-nana-junk', 
                    'jar-pink-lemonade', 
                    'jar-sour-diesel', 
                    'jar-peach-rings', 
                    'jar-banana-junk',
                    'variant-90u',   
                    'variant-120u',  
                    'variant-160u',
                    'frozen-triangle',
                    'frozen-moon',
                    'frozen-octane',
                    'frozen-runtz' ,
                    // NOUVEAUX FROZEN
            'frozen-trape',
            'frozen-cookie',
            'frozen-chery',
            'frozen-driver',
            'frozen-tropical',

            // NOUVEAUX PREMIUM
            'frozen-peach',
            'frozen-yellow',
            'frozen-meat',
            'frozen-trap',
            'frozen-ff',
            'sweetz-watermelon',
            'sweetz-rainbow',
            'sweetz-apple',
            'sweetz-cherry',
            'sweetz-pina',
            'sweetz-runtz'
            
                );
                item.classList.add(selectedJar.colorClass);
            });
        }

        showPage('page-product');
    }



    // Met à jour l'affichage du panier (inchangé)
    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    // Affiche la page de confirmation et gere les codes promo
    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        // --- Logique de calcul des prix ---
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];

            if (promo.appliesTo === 'eligible') {
                // Calcul sur les articles éligibles
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                // Calcul sur tout le panier
                discountableAmount = subTotal;
            }

            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else { // 'fixed'
                discount = promo.value;
            }
        }

        // Assure que la réduc ne dépasse pas le montant
        if (discount > subTotal) {
            discount = subTotal;
        }

        const totalPrice = subTotal - discount;
        // --- Fin de la logique de calcul ---

        // Mise à jour du résumé (panier en haut)
        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        // Remplissage de la liste des articles (inchangé)
        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `).join('');

        // Mise à jour de l'UI Promo
        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = ''; // Reset l'input
        }

        // Mise à jour de l'UI Paiement
        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        // Mise à jour du résumé final
        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `
            <div class="summary-line">
                <span>Sous-total:</span>
                <span>${subTotal.toFixed(2)}€</span>
            </div>
        `;
        if (discount > 0) {
            summaryHTML += `
            <div class="summary-line discount">
                <span>Réduction:</span>
                <span>-${discount.toFixed(2)}€</span>
            </div>
            `;
        }
        summaryHTML += `
            <div class="summary-line total">
                <span>💰 Total final:</span>
                <span>${totalPrice.toFixed(2)}€</span>
            </div>
        `;
        summaryContainer.innerHTML = summaryHTML;

        /* const copyBtn = document.getElementById('copy-order-btn');
        const contactBtn = document.getElementById('confirm-order-button');

        // État initial: Copier = Rouge (main), Contacter = Gris (secondary/disabled)
        copyBtn.classList.add('main-action-btn');
        copyBtn.classList.remove('secondary-action-btn');

        contactBtn.classList.add('secondary-action-btn');
        contactBtn.classList.remove('main-action-btn');
        contactBtn.disabled = true; // On le re-verrouille */

        showPage('page-confirmation');
    }
    // Affiche la page de contact (inchangé)
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    // Met à jour le compteur du panier (inchangé)
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    // --- MODIFIÉ : populateFilters ---
    // Prend les données des catégories ET des produits
    function populateFilters() {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');

        const allNestedProducts = appData.flatMap(category => category.farms.flatMap(farm => farm.products));

        // --- MODIFICATION ---
        /*    const categoryQualities = appData.map(c => c.quality);
                const productQualities = allNestedProducts.map(p => p.quality);
                const qualities = ['all', ...new Set([...categoryQualities, ...productQualities])];
        
                const categoryFarms = appData.map(c => c.farm);
                const productFarms = allNestedProducts.map(p => p.farm);
                const farms = ['all', ...new Set([...categoryFarms, ...productFarms])]; */
        // --- FIN MODIFICATION ---

        // On ne prend les "qualities" QUE des catégories
        const categoryQualities = appData.map(c => c.quality);
        const qualities = ['all', ...new Set(categoryQualities)];

        // On ne prend les "farms" QUE des produits (c'est ce que tu filtres)
        const productFarms = allNestedProducts.map(p => p.farm);
        const farms = ['all', ...new Set(productFarms)];

        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? '🗂️ CATEGORIE 🗂️' : q}</option>`).join('');
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? 'LES FARM' : farm}</option>`).join('');

        searchFilter.addEventListener('input', (e) => {
            currentFilters.searchTerm = e.target.value;
            renderHomePage();
        });

        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });

        farmFilter.addEventListener('change', (e) => {
            currentFilters.farm = e.target.value;
            renderHomePage();
        });
    }

    // --- NOTIFICATION (inchangé) ---
    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;

        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;

        notification.innerText = message;
        notification.classList.add('show');

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // --- LOGIQUE DU PANIER ---

    function addToCart(productId, weight, price, jarName = null, jarClass = null) {
        // La jar fait partie de l'ID pour avoir une ligne de panier par saveur/poids
        const cartItemId = `${productId}-${weight}${jarName ? '-' + jarName.replace(/[^a-zA-Z0-9]/g, '') : ''}`;
        const existingItem = cart.find(item => item.id === cartItemId);

        const product = getProductById(productId);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name + (jarName ? ` (${jarName})` : ''), // Ajoute le nom du jar au nom du produit
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price,
                jarClass: jarClass // Stocke la classe pour une éventuelle utilisation dans le panier (optionnel)
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification(`✅ ${product.name} ${jarName ? '(' + jarName + ')' : ''} ajouté au panier !`);
    }

    // updateQuantity (inchangé)
    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
        renderCart();
    }

    // --- FORMATAGE DU MESSAGE DE COMMANDE (pour gere les promo) ---
    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        // Recalcul des prix pour le message
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = 0;
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else {
                discount = promo.value;
            }
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;
        // Fin recalcul

        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        let message = "NOUVELLE COMMANDE\n\n";
        message += "====================\n";
        message += "RESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `- Méthode de paiement: ${paymentMethod}\n`; // AJOUT
        message += "====================\n";
        message += `DETAIL DES ARTICLES:\n`;

        cart.forEach((item) => {
            message += `\n- ${item.id}`;
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });

        message += `\n\n====================\n`;
        message += `\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
        if (discount > 0) {
            message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`; // AJOUT
        }
        message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`; // AJOUT
        message += " \n-LIVRAISON: A convenir\n";
        message += " \n-CONTACT: Merci de confirmer cette commande\n";
        message += ` \n-Commande passee le: ${formattedDate}\n`;
        return message;
    }

    // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
    /*    function copyToClipboard(text) {
           if (navigator.clipboard) { // API moderne et sécurisée
               navigator.clipboard.writeText(text).then(() => {
                   showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                   tg.HapticFeedback.notificationOccurred('success');
               }, (err) => {
                   showNotification('❌ Erreur en copiant le message');
               });
           } else { // Ancien fallback (pour certains navigateurs)
               const textArea = document.createElement('textarea');
               textArea.value = text;
               textArea.style.position = 'fixed'; // Hors de l'écran
               document.body.appendChild(textArea);
               textArea.focus();
               textArea.select();
               try {
                   document.execCommand('copy');
                   showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                   tg.HapticFeedback.notificationOccurred('success');
               } catch (err) {
                   showNotification('❌ Erreur en copiant le message');
               }
               document.body.removeChild(textArea);
           }
       }
    */
    // --- GESTION DES ÉVÉNEMENTS ---

    // Clics sur la barre de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            // Les lignes gérant la classe 'active' ont été supprimées
            // showPage(pageId) s'en occupe maintenant.

            if (pageId === 'page-contact') {
                renderContactPage();
            }

            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                // On reset TOUS les filtres
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';

                renderHomePage();
            }

            showPage(pageId);
        });
    });

    // Clics sur le reste de la page
    document.body.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');


            // --- AJOUT : Inverser les styles des boutons ---
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');

            // Copier devient Gris (secondary)
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');

            // Contacter devient Rouge (main) et est activé
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
            return; // On s'arrête là
        }

        // 1. Clic sur une carte CATÉGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            currentView = 'products';
            currentCategoryId = categoryCard.dataset.categoryId;
            
            // 👇 AJOUTE CETTE LIGNE ICI 👇
            updateFarmFilterForCategory(currentCategoryId); 
            // 👆 C'est elle qui change la liste déroulante dynamiquement
            
            // On reset les filtres de recherche
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            
            renderHomePage();
            return;
        }


        // Gère l'accordéon sur la page contact
        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;

            // On ferme les autres items
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            // On ouvre/ferme l'item cliqué
            accordionItem.classList.toggle('active');
            return; // On arrête là pour ne pas déclencher d'autres clics
        }


        // 2. NOUVEAU : Clic sur une carte FARM (MIS EN COMMENTAIRE)
        /*    const farmCard = target.closest('.farm-card');
           if (farmCard) {
   
               if (farmCard.classList.contains('unclickable')) {
                   return;
               }
   
               currentView = 'products'; // On va à la vue "products"
               currentFarmId = farmCard.dataset.farmId;
               // On reset les filtres
               currentFilters.searchTerm = '';
               document.getElementById('search-filter').value = '';
               renderHomePage();
               return;
           } */

        // 3. Clic sur une carte PRODUIT
        const productCard = target.closest('.product-item-card');
        if (productCard) {

            if (productCard.classList.contains('unclickable')) {
                return;
            }
            renderProductPage(productCard.dataset.productId);
            return;
        }

        // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // Clic sur "Appliquer" le code promo
        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase(); // Mets en majuscule

            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null; // Reset au cas où
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation(); // Met à jour la page de confirmation
        }

        // Clic sur "Supprimer" le code promo
        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation(); // Met à jour la page
        }

        // Clic sur un bouton de paiement
        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            // Pas besoin de rafraîchir toute la page, juste les boutons
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        // Clic sur un bouton de sélection de Jar
        if (target.closest('.jar-select-btn')) {
            const btn = target.closest('.jar-select-btn');
            const newJarName = btn.dataset.jarName;
            const newJarEmoji = btn.dataset.jarEmoji;
            const newJarClass = btn.dataset.jarClass;

            // 1. Mettre à jour la variable d'état
            selectedJar = {
                name: newJarName,
                emoji: newJarEmoji,
                colorClass: newJarClass
            };

            // 2. Mettre à jour le bouton actif
            document.querySelectorAll('.jar-select-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 3. Mettre à jour la couleur et les data-attributs du bloc des tarifs
            const tarifItems = document.querySelectorAll('#product-details-content .tarif-item');
            tarifItems.forEach(item => {
                // Supprimer toutes les classes de jar existantes
                item.classList.remove('jar-nana-junk', 'jar-pink-lemonade', 'jar-sour-diesel', 'jar-peach-rings', 'jar-banana-junk','variant-90u',   // <-- Ajout indispensable
                'variant-120u',  // <-- Ajout indispensable
                'variant-160u',
                'frozen-triangle',
                    'frozen-moon',
                    'frozen-octane',
                    'frozen-runtz',
                    // NOUVEAUX FROZEN
            'frozen-trape',
            'frozen-cookie',
            'frozen-chery',
            'frozen-driver',
            'frozen-tropical',

            // NOUVEAUX PREMIUM
            'frozen-peach',
            'frozen-yellow',
            'frozen-meat',
            'frozen-trap',
            'frozen-ff',
            'sweetz-watermelon',
            'sweetz-rainbow',
            'sweetz-apple',
            'sweetz-cherry',
            'sweetz-pina',
            'sweetz-runtz'
            );
                // Ajouter la nouvelle
                item.classList.add(newJarClass);

                // Mettre à jour les data-attributs du bouton "ajouter au panier"
                const addToCartBtn = item.querySelector('.add-to-cart-btn');
                if (addToCartBtn) {
                    addToCartBtn.dataset.jarName = newJarName + newJarEmoji;
                    addToCartBtn.dataset.jarClass = newJarClass;
                }
            });

            tg.HapticFeedback.impactOccurred('light');
            showNotification(`Jar sélectionné : ${newJarName} ${newJarEmoji}`);
            return;
        }

        // Clic sur "Ajouter au panier" (MODIFIÉ)
        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');

            // Si c'est un bouton "Contact Privé"
            if (btn.classList.contains('contact-private-btn')) {
                // 1. On ouvre la page contact (ou le lien Telegram direct)
                renderContactPage();
                showPage('page-contact');

                // 2. On arrête le script pour ne pas qu'il essaie d'ajouter au panier
                return;
            }
            const productId = btn.dataset.productId;
            const weight = btn.dataset.weight;
            const price = parseFloat(btn.dataset.price);
            const jarName = btn.dataset.jarName; // Récupère le nom du jar
            const jarClass = btn.dataset.jarClass; // Récupère la classe du jar

            // Appel à la fonction mise à jour
            addToCart(productId, weight, price, jarName, jarClass);

            return;
        }

        // Clic sur le bouton "Contact Privé" (PV)
        if (target.closest('.contact-private-btn')) {
            // Option 1 : Rediriger vers la page LINKS de l'app
            // renderContactPage();
            //showPage('page-contact');
            tg.openTelegramLink('https://t.me/welcometosmocky67')
            // Option 2 (Alternative) : Ouvrir direct ton Telegram personnel
            // tg.openTelegramLink('https://t.me/TON_PSEUDO');

            return;
        }
        // Clic sur les boutons de quantité
        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        // Clic sur le bouton "fermer"
        if (target.closest('.close-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur "Continuer les achats"
        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur les boutons "retour" (des pages produits, panier...)
        if (target.closest('.back-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur le bouton du panier
        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        // Clic sur "Commander"
        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        // Clic sur "Modifier"
        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        // Clic sur "Confirmer la commande" (VERSION POTATO)
        /*    if (target.closest('#confirm-order-button')) {
               // 1. Remplace 'TON_PSEUDO_POTATO' par ton VRAI pseudo Potato.
               const targetPotatoUser = 'BPDiSPENSARY';
   
               let message = formatOrderMessage();
               message = message.replace(//g, '');
               const encodedMessage = encodeURIComponent(message);
   
              // 2. On construit le lien Potato.  https://dympt.org/ - `https://potato.im/p/u/${targetPotatoUser}?text=${encodedMessage}`;
   
               // (Utilise 'p/u/' pour un compte utilisateur, ou 'p/s/' pour un bot)
               //const potatoUrl = `https://dympt.org/${targetPotatoUser}?text=${encodedMessage}`;
               const potatoUrl = `https://dympt.org/${targetPotatoUser}`;
   
               // 3. On utilise la même fonction pour ouvrir le lien
               tg.openLink(potatoUrl);
           } */

        // Clic sur "Confirmer la commande" (VERSION COPIER/COLLER - LA SEULE FIABLE)
        if (target.closest('#confirm-order-button')) {

            // 1. TON PSEUDO TELEGRAM
            const targetUsername = 'welcometosmocky67';

            // 2. On prépare le message
            let message = formatOrderMessage();
            message = message.replace(/\*/g, ''); // On nettoie

            // 3. (Optionnel mais cool) On copie quand même dans le presse-papier en backup
            // copyToClipboard(message);

            // 4. On encode et on ouvre le lien
            const encodedMessage = encodeURIComponent(message);
            const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;

            tg.openLink(telegramUrl);
        }

    });

    // --- GESTION DU MOT DE PASSE (SHA-256) ---

    // 👇 METS LE HASH QUE TU AS GÉNÉRÉ À L'ÉTAPE 1 ICI 👇
    const SECRET_HASH = "9055d6d01ed318d08a51db5253a26f6ac0d33cb93383bdcfaefa2bfd7d2e9302";

    // Fonction technique pour hasher du texte (ne pas toucher)
    async function sha256(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    // Fonction de vérification
    async function checkPassword() {
        const input = document.getElementById('password-input').value;
        const errorMsg = document.getElementById('login-error');
        const loader = document.getElementById('page-loader');
        const loginPage = document.getElementById('page-login');

        const bottomNav = document.querySelector('.bottom-nav'); // On sélectionne la navbar
        // On hash ce que le gars a écrit
        const inputHash = await sha256(input);

        if (inputHash === SECRET_HASH) {
            // ✅ SUCCÈS
            tg.HapticFeedback.notificationOccurred('success');

            // On cache le login et le loader
            loginPage.classList.remove('active');
            loader.classList.remove('active');

            // 👇 C'EST ICI LA MODIF : On affiche la navbar maintenant
            if (bottomNav) bottomNav.style.display = 'flex';

            // On lance l'appli normalement
            populateFilters();
            renderHomePage();
            updateCartCount();
            showPage('page-home');
        } else {
            // ❌ ERREUR
            tg.HapticFeedback.notificationOccurred('error');
            errorMsg.style.display = 'block';
            document.getElementById('password-input').value = ''; // On vide le champ
        }
    }

    // --- INITIALISATION DE L'APP ---
    function init() {

        const bottomNav = document.querySelector('.bottom-nav');
        if (bottomNav) bottomNav.style.display = 'none';
        // Animation de la barre de chargement
        const progressBar = document.querySelector('.loader-progress-bar');
        if (progressBar) {
            setTimeout(() => { progressBar.style.width = '100%'; }, 50);
        }

        // On configure le bouton de connexion
        document.getElementById('login-btn').addEventListener('click', checkPassword);

        // On écoute aussi la touche "Entrée" pour valider plus vite
        document.getElementById('password-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });

        // Fin du chargement
        setTimeout(() => {
            const loader = document.getElementById('page-loader');
            const loginPage = document.getElementById('page-login');

            // On cache le loader (la barre de chargement)
            loader.classList.remove('active');

            // On s'assure que la page LOGIN est bien affichée
            // (Comme on n'a plus de vérification de session, c'est toujours Login direct)
            loginPage.classList.add('active');

        }, 1600);
    }

    init();
    // --- GESTION DU CLAVIER MOBILE (Cacher la navbar) ---
    const allInputs = document.querySelectorAll('input'); // Sélectionne tous les champs de texte
    const navBarMobile = document.querySelector('.bottom-nav');

    allInputs.forEach(input => {
        // Quand on clique pour écrire (Le clavier s'ouvre)
        input.addEventListener('focus', () => {
            if (navBarMobile) {
                navBarMobile.style.display = 'none'; // On cache la barre
            }
        });

        // Quand on a fini d'écrire (Le clavier se ferme)
        input.addEventListener('blur', () => {
            // On vérifie qu'on n'est pas sur la page de Login (car sur login, la barre doit rester cachée)
            const isLoginPageOpen = document.getElementById('page-login').classList.contains('active');
            
            if (navBarMobile && !isLoginPageOpen) {
                // Petit délai pour éviter les sauts d'image brutaux
                setTimeout(() => {
                    navBarMobile.style.display = 'flex'; // On réaffiche la barre
                }, 100);
            }
        });
    });
});