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
        { name: 'Instagram', url: 'https://www.instagram.com/smockyclub_off6768?igsh=MWs1NnF6dXh6MWg3YQ%3D%3D&utm_source=qr', icon: '#icon-instagram', id: 'instagram', className: 'instagram', text: "Instagram" },

                // 4. Potato Secours
        { name: 'Livraison 🚚', url: 'https://t.me/toujour_imiter_jamais_egaler', icon: '#icon-telegram', id: 'Livraison-telegram', className: 'telegram', text: "Livraison" },

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
                        badgeText
                        : '5 produits', */
                    products: [
                         {
                            id: 'PINK CERIZ 🎄🍒',
                            flag: '🇲🇦',
                            name: 'PINK CERIZ 🎄🍒',
                            farm: '🫒 POPEYE GROWER 🇲🇦',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductPC.png',
                            video: 'VideoPC.mov',
                            description: 'DOUBLE STATIC ⚡️',
                            tarifs: [
                                { weight: '5g', price: 100.00 },
                                { weight: '10g', price: 180.00 },
                                { weight: '25g', price: 430.00 },
                                { weight: '100g', price: 900.00},
                            ]
                        },
                         {
                            id: 'MOCHI MELON  🍈',
                            flag: '🇲🇦',
                            name: 'MOCHI MELON 🍈',
                            farm: '🫒 POPEYE GROWER 🇲🇦',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductMM.png',
                            video: 'VideoMM.mov',
                            description: 'DOUBLE STATIC ⚡️',
                            tarifs: [
                                { weight: '5g', price: 100.00 },
                                { weight: '10g', price: 180.00 },
                                { weight: '25g', price: 430.00 },
                                { weight: '100g', price: 900.00},
                            ]
                        },
                         {
                            id: 'PEACH FRESCA 🍑',
                            flag: '🇲🇦',
                            name: 'PEACH FRESCA 🍑',
                            farm: '🫒 POPEYE GROWER 🇲🇦',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductPF.png',
                            video: 'VideoPF.mov',
                            description: 'DOUBLE STATIC ⚡️',
                            tarifs: [
                                { weight: '5g', price: 100.00 },
                                { weight: '10g', price: 180.00 },
                                { weight: '25g', price: 430.00 },
                                { weight: '100g', price: 900.00},
                            ]
                        },
                         {
                            id: 'FORBIDEN FRUITS 🍋‍🟩🍑',
                            flag: '🇲🇦',
                            name: 'FORBIDEN FRUITS 🍋‍🟩🍑',
                            farm: '🫒 POPEYE GROWER 🇲🇦',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductFF.png',
                            video: 'VideoFF.mov',
                            description: 'DOUBLE STATIC ⚡️',
                            tarifs: [
                                { weight: '5g', price: 100.00 },
                                { weight: '10g', price: 180.00 },
                                { weight: '25g', price: 430.00 },
                                { weight: '100g', price: 900.00},
                            ]
                        },
                   /*        
                            jars: [
                                {  name: 'HASH BURGER X OREOZ', emoji: '🇲🇦', colorClass: 'frozen-peach' },
                                { name: 'RUNTZ', emoji: '🇺🇸', colorClass: 'frozen-pineapple' },
                            ],
                            
                           
                            jars: [
                                { name: 'ICC', emoji: '🇺🇸🧊', colorClass: 'frozen-zhead' },
                                { name: 'LOVE 666', emoji: '🍏🍎', colorClass: 'frozen-gasmint' }, 
                                { name: 'ORANGE GROOVE', emoji: '🍊', colorClass: 'frozen-grape' },
                            ],
                          
                            jars: [
                                 { name: 'TROP CHERRY', emoji: '🍒', colorClass: 'frozen-blood' },
                                { name: 'ZLUSHI', emoji: '🇺🇸', colorClass: 'frozen-forbidden' },
                            ],
                          
                            variantTitle: 'Sélectionner la variété 🍧 :', 
                            jars: [
                                { name: 'MANGO OG', emoji: '🥭', colorClass: 'frozen-honey' }, 
                                { name: 'GELATO', emoji: '🇺🇸', colorClass: 'frozen-zhead' }, 
                            ],
                            
                            
                              jars: [
                                  { name: 'HASH BURGER OREOZ', emoji: '🇺🇸', colorClass: 'frozen-blood' },
                                  { name: 'CALI HONEY', emoji: '🐻🇲🇦', colorClass: 'frozen-24k' },
                              ],
                           
                            jars: [
                                { name: 'GRAPE GAZ', emoji: '🍇', colorClass: 'frozen-24k' },
                                { name: 'ICC', emoji: '🇺🇸', colorClass: 'frozen-bluez' }, 
                                { name: 'ORANGE GROOVE', emoji: '🍊', colorClass: 'frozen-honey' }, 
                            ],
                            
                            jars: [
                                { name: 'SUPER ICC', emoji: '🇺🇸', colorClass: 'frozen-honey' }, 
                                { name: 'ORANGE CREAM', emoji: '🍊', colorClass: 'frozen-zhead' }, 
                            ],
                            
                            jars: [
                                { name: 'AMERICAN PIE', emoji: '🇺🇸', colorClass: 'jar-pink-lemonade' },
                                { name: 'BLUE JEALOUSY', emoji: '🇺🇸', colorClass: 'jar-banana-junk' },
                            ],
                            
                            jars: [
                                { name: 'HONEY BANANA', emoji: '🍌', colorClass: 'frozen-honey' }, 
                                { name: 'MOROCCO PEACH', emoji: '🍑', colorClass: 'frozen-zhead' }, 
                            ],
                            
                            
                            jars: [
                                { name: 'PINK GASOLINE', emoji: '🛢️', colorClass: 'frozen-24k' },
                                { name: 'SUPERBOOF', emoji: '®️', colorClass: 'frozen-bluez' }, 
                                { name: 'Ogkush x honey', emoji: '🔥', colorClass: 'frozen-honey' }, 
                            ],
                            
                            
                            jars: [
                                { name: 'CALI HONEY', emoji: '🐻 🇺🇸 🇲🇦', colorClass: 'frozen-honey' }, 
                                { name: 'PINK  GASOLINE', emoji: '⛽️', colorClass: 'frozen-zhead' }, 
                            ],
                           
                            jars: [
                                { name: 'CALIFORNIA GOLD', emoji: '🏆', colorClass: 'frozen-gasmint' },
                                { name: 'RUNTZ FRUITY BUZZARD', emoji: '🍑', colorClass: 'frozen-sour' }, 
                            ],
                            
                           
                              jars: [
                                  { name: 'HIGH OCTANE', emoji: '🍒🔞', colorClass: 'frozen-blood' },
                                  { name: 'ORANGEADE', emoji: '🏆🍊', colorClass: 'frozen-24k' },
                              ],
                            
                            jars: [
                                { name: 'GOLD PRESSE', emoji: '⚜️', colorClass: 'frozen-24k' },
                                { name: 'HONEY BANANA', emoji: '🍯', colorClass: 'frozen-honey' }, 
                                { name: 'ICE CREAM', emoji: '🥶🧊', colorClass: 'frozen-bluez' }, 
                            ],
                           
                            variantTitle: 'Sélectionner la variété 🍧 :', 
                            jars: [
                                { name: 'STRAWBERRY MILK', emoji: '🍼🥛', colorClass: 'frozen-gasboof' },
                                { name: 'BLUE GAZOLINE', emoji: '🫐⛽️', colorClass: 'frozen-zhead' },
                                { name: 'ZELATO', emoji: '🇺🇸🍋', colorClass: 'frozen-gasmint' }, 
                                { name: 'ZANGRIA ZUSHI', emoji: '🍣', colorClass: 'frozen-grape' },
                                {  name: 'GUAVA RUNTZ', emoji: '🥭🇺🇸', colorClass: 'frozen-peach' },
                                 { name: 'BLOOD CHEESE / PREMIUM', emoji: '🍒🩸🧀', colorClass: 'frozen-blood' },
                                { name: 'HONEY BANANA X GOLD CHERRY', emoji: '🍯🍌🏆🍒', colorClass: 'frozen-honey' },
                                { name: 'FORBIDDEN GAZ / PREMIUM', emoji: '🍏🍎💨', colorClass: 'frozen-forbidden' },
                                { name: 'SUPER GASBOOF / PREMIUM', emoji: '💨🍭🍈', colorClass: 'frozen-gasboof' },
                                { name: 'FROSTED PINEAPPEL / PREMIUM', emoji: '🌾🍍🍎', colorClass: 'frozen-pineapple' },
                                { name: 'GASMINT X FF / PREMIUM', emoji: '💨🍋🍏🍎', colorClass: 'frozen-gasmint' }, 
                                { name: 'ZHEAD / PREMIUM', emoji: '🫐🍋⛽️🍭', colorClass: 'frozen-zhead' },
                                { name: 'MANDARIN OG / PREMIUM', emoji: '🍊🥦', colorClass: 'frozen-mandarin' },
                                /* { name: 'SOUR ORANGE / PREMIUM', emoji: '🍊⛽️', colorClass: 'frozen-sour' },
                                { name: 'BLUE Z / PREMIUM', emoji: '🌊🥝', colorClass: 'frozen-bluez' },
                                { name: '24k x MG / PREMIUM', emoji: '🏆🍊🥦', colorClass: 'frozen-24k' },
                                { name: 'TMZ X YELLOW / PREMIUM', emoji: '🍈🍍🟡', colorClass: 'frozen-tmz' },          
                            ]
                            }, */ 

                   
                    
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
                            id: 'CIRCUS BOOW🇺🇸 🧊',
                            flag: '🇺🇸',
                            name: 'CIRCUS BOOW 🇺🇸🧊',
                            farm: 'SINGLE SOURCE 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductCB.png',
                            video: 'VideoCB.mp4',
                            description: 'STATIC 🇺🇸',
                            tarifs: [
                                { weight: '2,5g', price: 100.00 },
                                { weight: '5g', price: 200.00 },
                                { weight: '10g', price: 400.00 },
                                { weight: '25g', price: 950.00 },
                            ]
                        },
                        {
                            id: 'ANIMAL 🦒 🇺🇸 🧊',
                            flag: '🇺🇸',
                            name: 'ANIMAL 🦒🇺🇸🧊',
                            farm: 'SINGLE SOURCE 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductA.png',
                            video: 'VideoA.mp4',
                            description: 'STATIC 🇺🇸',
                            tarifs: [
                                { weight: '2,5g', price: 100.00 },
                                { weight: '5g', price: 200.00 },
                                { weight: '10g', price: 400.00 },
                                { weight: '25g', price: 950.00 },
                            ]
                        },
                        {
                            id: 'GREENLANDER 🇺🇸 🧊',
                            flag: '🇺🇸',
                            name: 'GREENLANDER 🇺🇸 🧊',
                            farm: 'SINGLE SOURCE 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductG.png',
                            video: 'VideoG.mp4',
                            description: 'STATIC 🇺🇸',
                            tarifs: [
                                { weight: '2,5g', price: 100.00 },
                                { weight: '5g', price: 200.00 },
                                { weight: '10g', price: 400.00 },
                                { weight: '25g', price: 950.00 },
                            ]
                        },
                        {
                            id: 'GARY PAYTON 🏀',
                            flag: '🇺🇸',
                            name: 'GARY PAYTON 🏀',
                            farm: 'STATIC PLATES 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductGP.png',
                            video: 'VideoGP.mp4',
                            description: 'ÉDITION LIMITED 🥇 FROZEN 💦',
                            tarifs: [
                                { weight: '2,5g', price: 80.00 },
                                { weight: '5g', price: 150.00 },
                                { weight: '10g', price: 300.00 },
                                { weight: '25g', price: 500.00 },
                                { weight: '50g', price: 950.00 },
                            ]
                        },
                        {
                            id: 'CÉRÉALES 🥣 MILK',
                            flag: '🇺🇸',
                            name: 'CÉRÉALES 🥣 MILK',
                            farm: 'STATIC PLATES 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductCM.png',
                            video: 'VideoCM.mp4',
                            description: 'ÉDITION LIMITED 🥇 FROZEN 💦',
                            tarifs: [
                                { weight: '2,5g', price: 80.00 },
                                { weight: '5g', price: 150.00 },
                                { weight: '10g', price: 300.00 },
                                { weight: '25g', price: 500.00 },
                                { weight: '50g', price: 950.00 },
                            ]
                        },
                          /* 
                            jars: [
                                { name: 'LEMON CHERRY GELATO', emoji: '🍒', colorClass: 'frozen-24k' },
                                { name: 'ICE CREAM CAKE', emoji: '🇺🇸', colorClass: 'frozen-bluez' }, 
                                { name: 'PURPLE GRADE', emoji: '🟣🟣', colorClass: 'frozen-honey' }, 
                            ],
                       
    
                            variantTitle: 'Sélectionner votre Jaar 🏺 :', 
                            jars: [
                                { name: 'UPGRADE', emoji: '⭐️🌞', price: 110.00, colorClass: 'frozen-gasboof' },
                                { name: 'LIME GAS', emoji: '🍋', price: 100.00, colorClass: 'frozen-gasmint' }, 
                                { name: 'HASH BURGER', emoji: '🍔', price: 120.00, colorClass: 'frozen-grape' },
                                { name: 'HONEY SUGAR', emoji: '🍯', price: 100.00, colorClass: 'frozen-honey' },
                                { name: 'WHITH THORN ROSE', emoji: '🌈', price: 120.00, colorClass: 'frozen-zhead' },
                            ]

                          */
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
                       /*  {
                            id: 'RAINBOW SHERBET 🇺🇸',
                            flag: '🇺🇸',
                            name: 'RAINBOW SHERBET 🇺🇸',
                            farm: 'TOP SHELF 🇺🇸',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductRS.png',
                            video:  'VideoRS.mov',      // Vidéo 1
                            description: 'Odeur gazzy ✅🤝👅 \n Goût de malade 🤒',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 110.00 },
                                { weight: '25g', price: 280.00 },
                                { weight: '50g', price: 0, private: true  },
                                { weight: '100g', price: 0, private: true  },
                            ]
                        }, */
                   
                     
                  
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
                       /*  {
                            id: 'CHERRY PIE CALI 🇺🇸',
                            flag: '🇳🇱',
                            name: 'CHERRY PIE CALI 🇺🇸',
                            farm: '',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductCPC.png',
                            video:  'VideoCPC.mov',      // Vidéo 1
                            description: '',
                            tarifs: [
                                { weight: '5g', price: 40.00 },
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 200.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 0, private: true  },
                            ]
                        }, */
                        
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
                         {
                            id: 'JAAR SCELLÉ 🔐',
                            flag: '🇺🇸',
                            name: 'JAAR SCELLÉ 🔐',
                            farm: 'POPEYE GROWER 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductJS.png',
                            video: 'VideoJS.mov',
                            description: 'ROSIN 1g🥇',
                            variantTitle: 'Sélectionner votre Jaar 🏺 :', 
                            jars: [
                                { name: 'MOROCCAN PEACH', emoji: '🍑', colorClass: 'frozen-gasboof' },
                                { name: 'CITRUS SUNRIS', emoji: '🍋', colorClass: 'frozen-gasmint' }, 
                                { name: 'Z GUAVE', emoji: '🥭',  colorClass: 'frozen-grape' },
                                { name: 'AMERILLO', emoji: '⚡️', colorClass: 'frozen-honey' },
                                { name: 'ZKITTLEZ', emoji: '🍭', colorClass: 'frozen-zhead' },
                                { name: 'PAPAYA', emoji: '🍹', colorClass: 'frozen-bluez' },
                            ],
                            tarifs: [
                                { weight: '1', price: 120.00 },
                                { weight: '2', price: 240.00 },
                                { weight: '4', price: 480.00 },
                            ]
                        },
                         {
                            id: 'SIRUP ROSIN 🍯',
                            flag: '🇺🇸',
                            name: 'SIRUP ROSIN 🍯',
                            farm: 'POPEYE GROWER 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSR.png',
                            video: 'VideoSR.mov',
                            description: '10mg thc 🦠 \n FRAISE 🍓 CITRON 🍋',
                            tarifs: [
                                { weight: '1', price: 60.00 },
                                { weight: '2', price: 120.00 },
                            ]
                        },
                         {
                            id: 'DISTILLAT 95%🦠',
                            flag: '🇺🇸',
                            name: 'DISTILLAT 95%🦠',
                            farm: 'POPEYE GROWER 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductD.png',
                            video: 'VideoD.mov',
                            description: 'LABORATOIRE 🧪 TESTER',
                            tarifs: [
                                { weight: '1', price: 150.00 },
                                { weight: '2', price: 200.00 },
                            ]
                        },
                       /*  {
                            id: 'ROSIN 🍯',
                            flag: '🇺🇸',
                            name: 'ROSIN 🍯',
                            farm: 'PIATELLA 💯',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductR.png',
                            video: 'VideoR.mov',
                            description: 'EXTRACTION 🍯\n Une qualité et une texture envoûtant ⭐️⭐️⭐️⭐️',
                            tarifs: [
                                { weight: '2g', price: 150.00 },
                                { weight: '4g', price: 300.00 },
                                { weight: '8g', price: 600.00 },
                            ]
                        }, */
                        /*  {
                            id: 'BLANC DE BLANC 🍾',
                            flag: '🇺🇸',
                            name: 'BLANC DE BLANC 🍾',
                            farm: 'CALI FLORIDA 💯 🇺🇸',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBDB.png',
                            video: 'VideoBDB.mov',
                            description: 'EXTRACTION 🍯\n Une qualité et une texture envoûtant ⭐️⭐️⭐️⭐️',
                            tarifs: [
                                { weight: '2,5g', price: 80.00 },
                                { weight: '5g', price: 150.00 },
                                { weight: '10g', price: 300.00 },
                                { weight: '25g', price: 750.00 },
                            ]
                        },
                        {
                            id: 'PUFF THC 🫨🫨⚡️⚡️',
                            flag: '💨',
                            name: 'PUFF THC 🫨🫨⚡️⚡️',
                            farm: '',
                            promoEligible: true,
                            type: 'Hash Marocain',
                            image: 'ProductPuff.png', // Pense à changer l'image si tu en as une nouvelle
                            video: 'VideoPuff.mp4',      // Idem pour la vidéo
                            description: 'PLUS DE 5 STRAIN ⭐️',
                            tarifs: [
                                { weight: '1', price: 70.00 },
                                { weight: '2', price: 130.00 },
                                { weight: '5', price: 300.00 },
                                { weight: '10', price: 550.00 },
                                { weight: '20', price: 1050.00 },

                            ],
                            // 👇 TITRE PERSONNALISÉ
                            variantTitle: 'Sélectionner vos gouts 🍧 :', 
                            jars: [
                                { name: 'PURPLE KUSH 🟣', emoji: '🍉', colorClass: 'sweetz-watermelon' },
                                { name: 'WATERMELON GAS ⚫️', emoji: '🏆⭐️', colorClass: 'sweetz-rainbow' },
                                { name: 'SOUR HEADS 🟢', emoji: '🍏🍎', colorClass: 'sweetz-apple' },
                                { name: 'GALACTIC GAS 🔴', emoji: '💦🍒', colorClass: 'sweetz-cherry' },
                                { name: 'LIME SORBET 🟤', emoji: '🍍🥥', colorClass: 'sweetz-pina' }, // J'ai mis ananas coco pour pina
                            ]
                        } */
                        /* {
                            id: 'WEEDING PIE 🇺🇸🥧',
                            flag: '🇺🇸',
                            name: 'WEEDING PIE 🇺🇸🥧',
                            farm: 'SIXSTAR ®️🇺🇸FULL MELT 💎',
                            promoEligible: true,
                            type: 'Extraction',
                            image: 'ProductWeeding.png',
                            video: 'VideoWeeding.mov',
                            description: 'On vous a ramener le champion de la 🏆cannabis cup de exclusif de chez exclu ®️🔞 \n A fumer avec modération 🔞',
                            tarifs: [
                                { weight: '1,25g', price: 60.00},
                                { weight: '2,5g', price: 110.00},
                                { weight: '5g', price: 220.00},
                                { weight: '10g', price: 440.00},
                                { weight: 'Pour +', price: 0, private: true },
                            ],
                        },  */
                        
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
    let selectedFlavor = null;  // 

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
         // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
        document.querySelectorAll('video').forEach(video => {
            video.pause();
        });
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
function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    // Reset les sélections
    selectedJar = product.jars ? product.jars[0] : null;
    selectedFlavor = product.flavors ? product.flavors[0] : null; // Sélectionne le 1er goût par défaut

    document.getElementById('product-page-title').innerText = product.name;
    const detailsContainer = document.getElementById('product-details-content');

    // --- LOGIQUE VIDÉO ---
    const videoContainer = document.querySelector('#page-product .page-content');
    const existingVideoWrapper = document.querySelector('.video-container');
    if (existingVideoWrapper) existingVideoWrapper.remove();

    let videoHTML = '';
    const videoList = product.videos ? product.videos : (product.video ? [product.video] : []);

    if (videoList.length > 0) {
        const controlsHTML = videoList.length > 1 ? `
        <button class="carousel-btn prev">‹</button>
        <button class="carousel-btn next">›</button>
        <div class="carousel-dots">
            ${videoList.map((_, i) => `<div class="dot ${i === 0 ? 'active' : ''}"></div>`).join('')}
        </div>` : '';

        videoHTML = `
        <div class="video-container">
            <video class="product-video" src="${videoList[0]}" poster="${product.image}" playsinline controls></video>
            ${controlsHTML}
        </div>`;
    }

    // --- HTML POUR LES JAR (Niveau 1) ---
    let jarSelectorHTML = '';
    if (product.jars) {
        // Dans renderProductPage, modifie la génération des boutons jar :
const jarButtons = product.jars.map((jar, index) => `
<button class="jar-select-btn ${jar.colorClass} ${index === 0 ? 'active' : ''}" 
    data-jar-name="${jar.name}" 
    data-jar-emoji="${jar.emoji}" 
    data-jar-class="${jar.colorClass}"
    data-price="${jar.price}"> ${jar.name} ${jar.emoji}
</button>
`).join('');
        jarSelectorHTML = `
        <h4 class="jar-title">${product.variantTitle ? product.variantTitle : 'Sélectionner :'}</h4>
        <div class="jar-selector-container">${jarButtons}</div>
        <hr class="jar-divider">
    `;
    }

    // --- HTML POUR LES FLAVORS (Niveau 2 - NOUVEAU) ---
    let flavorSelectorHTML = '';
    if (product.flavors) {
        const flavorButtons = product.flavors.map((flav, index) => `
        <button class="flavor-select-btn ${flav.colorClass} ${index === 0 ? 'active' : ''}" 
            data-flav-name="${flav.name}" 
            data-flav-emoji="${flav.emoji}" 
            data-flav-class="${flav.colorClass}">
            ${flav.name} ${flav.emoji}
        </button>
    `).join('');
        flavorSelectorHTML = `
        <h4 class="jar-title" style="margin-top:10px;">${product.variantTitle2 ? product.variantTitle2 : 'Sélectionner le goût :'}</h4>
        <div class="jar-selector-container">${flavorButtons}</div>
        <hr class="jar-divider">
    `;
    }

    // --- TARIFS ---
    let tarifsHTML = product.tarifs.map(tarif => {
        let priceDisplay, buttonDisplay;
        if (tarif.private) {
            priceDisplay = `<div class="tarif-price" style="color: #ffa030;">Privé 🔒</div>`;
            buttonDisplay = `<button class="add-to-cart-btn contact-private-btn" style="border-color:#ffa030;color:#ffa030;"><svg width="20" height="20"><use href="#icon-telegram"/></svg></button>`;
        } else {
            priceDisplay = `<div class="tarif-price">${tarif.price.toFixed(2)}€</div>`;
            // On prépare les data attributes initiaux
            let dataJar = selectedJar ? `data-jar-name="${selectedJar.name} ${selectedJar.emoji}" data-jar-class="${selectedJar.colorClass}"` : '';
            let dataFlav = selectedFlavor ? `data-flav-name="${selectedFlavor.name} ${selectedFlavor.emoji}"` : '';
            
            buttonDisplay = `
            <button class="add-to-cart-btn" 
                data-product-id="${product.id}" 
                data-weight="${tarif.weight}" 
                data-price="${tarif.price}"
                ${dataJar} ${dataFlav}>
                <svg width="20" height="20"><use href="#icon-cart"/></svg>
            </button>`;
        }

        // On combine les classes de couleur (Jar + Flavor)
        let combinedClasses = '';
        if (selectedJar) combinedClasses += selectedJar.colorClass + ' ';
        if (selectedFlavor) combinedClasses += selectedFlavor.colorClass;

        return `
        <div class="tarif-item ${combinedClasses}">
            <div class="box-tarif">
                <div class="tarif-wieght">${tarif.weight}</div>
                ${priceDisplay}
            </div>
            ${buttonDisplay}
        </div>`;
    }).join('');

    let descriptionHTML = product.description ? `<p class="product-description">${product.description.replace(/\n/g, '<br>')}</p>` : '';

    // Injection HTML
    detailsContainer.innerHTML = `
        <div class="name">${product.name}</div>
        <div class="farm">${product.farm}</div>
        ${descriptionHTML} 
        ${jarSelectorHTML}
        ${flavorSelectorHTML} <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
        <div class="tarifs-grid-container">${tarifsHTML}</div>
    `;

    const oldStaticVideo = document.querySelector('#page-product > .page-content > video.product-video');
    if (oldStaticVideo) oldStaticVideo.remove();
    detailsContainer.insertAdjacentHTML('beforebegin', videoHTML);

    // --- LOGIQUE CAROUSEL ---
    if (videoList.length > 1) {
        let currentVideoIndex = 0;
        const videoElement = document.querySelector('.video-container .product-video');
        const dots = document.querySelectorAll('.dot');
        const btnPrev = document.querySelector('.carousel-btn.prev');
        const btnNext = document.querySelector('.carousel-btn.next');

        function updateCarousel() {
            videoElement.src = videoList[currentVideoIndex];
            videoElement.play();
            dots.forEach((dot, index) => dot.classList.toggle('active', index === currentVideoIndex));
        }
        if(btnNext) btnNext.onclick = () => { currentVideoIndex = (currentVideoIndex + 1) % videoList.length; updateCarousel(); };
        if(btnPrev) btnPrev.onclick = () => { currentVideoIndex = (currentVideoIndex - 1 + videoList.length) % videoList.length; updateCarousel(); };
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

   // Affiche la page de confirmation avec Goodies, Zones, etc.
   function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- 1. Calcul de base (Produits) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) discountableAmount += item.totalPrice;
            });
        } else {
            discountableAmount = subTotal;
        }
        if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
        else discount = promo.value;
    }
    if (discount > subTotal) discount = subTotal;
    const productTotal = subTotal - discount;

    // --- VERIFICATION DU BONUS LIVRAISON (300€) ---
    const isBonusAvailable = productTotal >= 300;
    // ----------------------------------------------

    // Mise à jour header résumé
    document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
    
    // Liste des articles
    const itemsList = document.getElementById('confirmation-items-list');
    itemsList.innerHTML = cart.map((item, index) => `
         <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix: ${item.totalPrice.toFixed(2)}€</div>
            </div>
        </div>
    `).join('');

    // --- 2. Injection des Nouveaux Champs (HTML) ---
    let optionsContainer = document.getElementById('confirmation-options-container');
    if (!optionsContainer) {
        optionsContainer = document.createElement('div');
        optionsContainer.id = 'confirmation-options-container';
        itemsList.parentNode.insertBefore(optionsContainer, document.querySelector('.promo-container'));
    }

    optionsContainer.innerHTML = `
        <div class="options-group">
            <span class="options-title">🎁 Goodies (Au choix)</span>
            <div class="goodies-grid">
                <label class="custom-checkbox-label"><input type="checkbox" class="goodie-cb" value="Briquet"><span>Briquet 🔥</span></label>
                <label class="custom-checkbox-label"><input type="checkbox" class="goodie-cb" value="Feuille"><span>Feuille 📄</span></label>
                <label class="custom-checkbox-label"><input type="checkbox" class="goodie-cb" value="Attache briquet"><span>Attache briquet 🧷</span></label>
                <label class="custom-checkbox-label"><input type="checkbox" class="goodie-cb" value="Pot pour rouler"><span>Pot Mix 🥣</span></label>
                <label class="custom-checkbox-label"><input type="checkbox" class="goodie-cb" value="Mini gant"><span>Mini gant 🧤</span></label>
                <label class="custom-checkbox-label"><input type="checkbox" class="goodie-cb" value="Bonbon"><span>Bonbon 🍬</span></label>
            </div>
        </div>

        <div class="options-group">
            <span class="options-title">🚬 Cigarettes (+10€)</span>
            <select id="cig-select" class="form-select">
                <option value="none" data-price="0">-- Aucune --</option>
                <option value="Marlboro" data-price="10">Marlboro (10€)</option>
                <option value="Camel" data-price="10">Camel (10€)</option>
                <option value="Winston" data-price="10">Winston (10€)</option>
            </select>
        </div>

        <div class="options-group">
            <span class="options-title">📍 Livraison</span>
            
            <label style="color:grey; font-size:0.8rem;">Sélectionnez votre zone :</label>
            <select id="zone-select" class="form-select">
                <option value="Retrait">🤝 Retrait / Meet-up (Gratuit)</option>
                <option value="Zone 1">Zone 1 : 10€ à 20€ Strasbourg centre // hors Strasbourg centre 20€ à 30€</option>
                <option value="Zone 2">Zone 2 : Colmar (30€ - 50€)</option>
                <option value="Zone 3">Zone 3 : Mulhouse (50€ - 80€)</option>
                <option value="Zone 4">Zone 4 : 57, 54, 55, 88, 25 (+80€)</option>
            </select>

            <label style="color:grey; font-size:0.8rem; margin-top:10px; display:block;">Adresse complète :</label>
            <input type="text" id="address-input" class="form-input" placeholder="Rue, Ville, Code postal...">

            <label style="color:grey; font-size:0.8rem; margin-top:10px; display:block;">Infos supp (Digicode, Etage...) :</label>
            <textarea id="info-input" class="form-input" placeholder="Instructions pour le livreur..."></textarea>

             <div class="bonus-delivery" style="${!isBonusAvailable ? 'opacity: 0.6; filter: grayscale(1);' : ''}">
                <input type="checkbox" id="bonus-delivery-cb" style="width:20px; height:20px;" ${!isBonusAvailable ? 'disabled' : ''}>
                <label for="bonus-delivery-cb" style="${!isBonusAvailable ? 'color: #999; cursor: not-allowed;' : ''}">
                    🚚 Bonus Livraison à domicile (Devant votre palier en toute sécurité 🚪) 
                    ${!isBonusAvailable ? '<br><span style="font-size:0.8rem; color:#ff4d4d;">(Disponible dès 300€)</span>' : ''}
                </label>
            </div>
        </div>
    `;

    // --- 3. Gestion Promo UI ---
    const promoInput = document.getElementById('promo-input-container');
    const promoApplied = document.getElementById('promo-applied-container');
    if (appliedPromo) {
        promoInput.style.display = 'none';
        promoApplied.style.display = 'flex';
        document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
    } else {
        promoInput.style.display = 'flex';
        promoApplied.style.display = 'none';
        document.getElementById('promo-code-input').value = '';
    }

    // --- 4. Mise à jour du Total Dynamique ---
    function updateTotalDisplay() {
        const cigSelect = document.getElementById('cig-select');
        const cigPrice = cigSelect && cigSelect.value !== 'none' ? 10 : 0;
        
        const finalTotal = productTotal + cigPrice;
        
        let summaryHTML = `
            <div class="summary-line">
                <span>Sous-total Panier:</span>
                <span>${subTotal.toFixed(2)}€</span>
            </div>
        `;
        if (discount > 0) {
            summaryHTML += `
            <div class="summary-line discount">
                <span>Réduction:</span>
                <span>-${discount.toFixed(2)}€</span>
            </div>`;
        }
        if (cigPrice > 0) {
             summaryHTML += `
            <div class="summary-line" style="color:white;">
                <span>Cigarettes:</span>
                <span>+${cigPrice.toFixed(2)}€</span>
            </div>`;
        }
        
        summaryHTML += `
            <div class="summary-line total">
                <span>💰 Total (Hors Livraison):</span>
                <span>${finalTotal.toFixed(2)}€</span>
            </div>
            <div style="text-align:center; font-size:0.8rem; color:grey; margin-top:5px;">
                *Frais de livraison calculés selon la zone choisie
            </div>
        `;
        
        document.getElementById('confirmation-summary').innerHTML = summaryHTML;
        document.getElementById('confirmation-total-price').innerText = `${finalTotal.toFixed(2)}€`;
    }

    setTimeout(() => {
        const cigSelect = document.getElementById('cig-select');
        if(cigSelect) cigSelect.addEventListener('change', updateTotalDisplay);
        updateTotalDisplay();
    }, 100);

    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.method === paymentMethod);
    });

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
        // 1. Sécurisation du prix
        const cleanPrice = parseFloat(price) || 0;
    
        // 2. Récupération du produit
        const product = getProductById(productId);
        if (!product) {
            console.error("Erreur : Produit introuvable lors de l'ajout au panier.");
            return;
        }
    
        // 3. Création de l'ID unique pour le panier
        const cartItemId = `${productId}-${weight}${jarName ? '-' + jarName.replace(/[^a-zA-Z0-9]/g, '') : ''}`;
        const existingItem = cart.find(item => item.id === cartItemId);
    
        // 4. Ajout ou mise à jour de la quantité
        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name + (jarName ? ` (${jarName})` : ''),
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: cleanPrice,
                totalPrice: cleanPrice,
                jarClass: jarClass
            });
        }
    
        // 5. Mise à jour de l'interface
        renderCart();
    
        // 6. Notifications (Vibration + Message visuel)
        try {
            tg.HapticFeedback.notificationOccurred('success');
        } catch (e) {
            // Sécurité si testé sur navigateur PC
        }
        
        // 👇 La notification est bien de retour ici
        let notifMessage = `✅ ${product.name}`;
        if (jarName && jarName.trim() !== '') {
            notifMessage += ` (${jarName})`;
        }
        notifMessage += ` ajouté au panier !`;
        
        showNotification(notifMessage);
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

// --- FORMATAGE DU MESSAGE DE COMMANDE (CORRIGÉ POUR MOBILE) ---
function formatOrderMessage() {
    // --- 1. GESTION DU NUMÉRO DE COMMANDE ---
    let orderCount = localStorage.getItem('smockyOrderCount');
    if (!orderCount) {
        orderCount = 0;
    } else {
        orderCount = parseInt(orderCount);
    }
    
    const currentOrderNumber = orderCount + 1;
    localStorage.setItem('smockyOrderCount', currentOrderNumber);
    
    // 2. Calculs de base
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    
    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        let discountableAmount = 0;
        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) discountableAmount += item.totalPrice;
            });
        } else { discountableAmount = subTotal; }
        
        if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
        else discount = promo.value;
    }
    if (discount > subTotal) discount = subTotal;
    let finalPrice = subTotal - discount;

    // 3. Récupération des Nouveaux Champs
    const goodiesCheckboxes = document.querySelectorAll('.goodie-cb:checked');
    const selectedGoodies = Array.from(goodiesCheckboxes).map(cb => cb.value).join(', ');

    const cigSelect = document.getElementById('cig-select');
    const selectedCig = cigSelect ? cigSelect.value : 'none';
    let cigPrice = 0;
    if(selectedCig !== 'none') {
        cigPrice = 10;
        finalPrice += cigPrice;
    }

    const zoneSelect = document.getElementById('zone-select');
    const selectedZone = zoneSelect ? zoneSelect.value : 'Non défini';
    
    const addressInput = document.getElementById('address-input');
    const address = addressInput ? addressInput.value : '';

    const infoInput = document.getElementById('info-input');
    const infos = infoInput ? infoInput.value : '';

    const bonusCb = document.getElementById('bonus-delivery-cb');
    const isBonus = bonusCb ? bonusCb.checked : false;

    // 4. Construction du Message
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth()+1} à ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

    // --- 👇 RÉCUPÉRATION DU PSEUDO TELEGRAM ---
    const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;
    const username = tgUser?.username ? '@' + tgUser.username : (tgUser?.first_name || 'Client');

    // --- 👇 CORRECTION ICI : On utilise "N°" au lieu de "#" ---
    let message = `🦍 COMMANDE ${username} N°${currentOrderNumber} - SMOCKY 🦍\n`;
    message += "==========================\n";
    
    // --- Panier ---
    cart.forEach((item) => {
        message += `▪️ ${item.name}\n`;
        message += `   📝 Qté: ${item.quantity} x ${item.weight}\n`;
        message += `   💵 Prix: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    // --- Cigarettes ---
    if(selectedCig !== 'none') {
         message += `🚬 CIGARETTES:\n`;
         message += `   ▪️ Paquet: ${selectedCig}\n`;
         message += `   💵 Prix: 10.00€\n\n`;
    }

    // --- Goodies ---
    if(selectedGoodies) {
         message += `🎁 GOODIES: ${selectedGoodies}\n\n`;
    }

    // --- Totaux ---
    message += "==========================\n";
    message += `💰 SOUS-TOTAL: ${subTotal.toFixed(2)}€\n`;
    if (discount > 0) message += `🏷️ PROMO (${appliedPromo}): -${discount.toFixed(2)}€\n`;
    if (cigPrice > 0) message += `🚬 CIGARETTES: +${cigPrice.toFixed(2)}€\n`;
    message += `💵 TOTAL (Hors Livr.): ${finalPrice.toFixed(2)}€\n`;
    message += "==========================\n";

    // --- Infos Livraison ---
    message += `📍 LIVRAISON:\n`;
    message += `   🗺️ Zone: ${selectedZone}\n`;
    if(address) message += `   🏠 Adresse: ${address}\n`;
    if(infos) message += `   ℹ️ Info: ${infos}\n`;
    if(isBonus) message += `   🚪 OPTION: Livraison Palier Sécurisée ✅\n`;
    
    message += `\n💳 PAIEMENT: ${paymentMethod}\n`;
    message += `📅 Date: ${formattedDate}\n`;
    
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

   // --- MISE À JOUR DYNAMIQUE DU PRIX SELON LA JAAR ---
if (target.closest('.jar-select-btn')) {
    const btn = target.closest('.jar-select-btn');
    const newJarName = btn.dataset.jarName;
    const newJarEmoji = btn.dataset.jarEmoji;
    const newJarClass = btn.dataset.jarClass;
    const newPrice = parseFloat(btn.dataset.price);

    // 1. RÉCUPÉRATION SÉCURISÉE DE L'ID DU PRODUIT
    let productId;
    const card = btn.closest('.product-item-card') || btn.closest('.product-card');
    if (card) {
        productId = card.dataset.productId; // Si on est sur la liste
    } else {
        // Si on est sur la page produit, on lit l'ID depuis le bouton d'ajout au panier
        const sampleBtn = document.querySelector('.add-to-cart-btn');
        if (sampleBtn) productId = sampleBtn.dataset.productId;
    }

    const product = getProductById(productId);

    // Sécurité anti-crash si le produit n'est pas trouvé
    if (!product) return; 

    // 2. LOGIQUE SÉPARÉE (JAAR VS AUTRES)
    if (product.id === 'Jaar') {
        selectedJar = { name: newJarName, emoji: newJarEmoji, colorClass: newJarClass, price: newPrice };
        
        // Mise à jour visuelle du prix uniquement si c'est le Jaar
        const priceDisplay = document.querySelector('.tarif-price');
        if (priceDisplay && !isNaN(newPrice)) {
            priceDisplay.innerText = `${newPrice.toFixed(2)}€`;
        }
    } else {
        selectedJar = { name: newJarName, emoji: newJarEmoji, colorClass: newJarClass };
    }

    // 3. MISE À JOUR VISUELLE DES BOUTONS (UI)
    document.querySelectorAll('.jar-select-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 4. MISE À JOUR DES DONNÉES DU PANIER
    const tarifItems = document.querySelectorAll('.tarif-item');
    tarifItems.forEach(item => {
        const addToCartBtn = item.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.dataset.jarName = newJarName + " " + newJarEmoji;
            addToCartBtn.dataset.jarClass = newJarClass;
            
            // Uniquement pour Jaar, on actualise le prix du bouton
            if (product.id === 'Jaar' && !isNaN(newPrice)) {
                addToCartBtn.dataset.price = newPrice;
            }
        }
    });

    tg.HapticFeedback.impactOccurred('light');
    showNotification(`✅ Sélection : ${newJarName}`);
    return;
}

    // --- NOUVEAU : Clic sur un bouton de FLAVOR (Niveau 2) ---
    if (target.closest('.flavor-select-btn')) {
        const btn = target.closest('.flavor-select-btn');
        const newFlavName = btn.dataset.flavName;
        const newFlavEmoji = btn.dataset.flavEmoji;
        const newFlavClass = btn.dataset.flavClass;

        // 1. Update State
        selectedFlavor = { name: newFlavName, emoji: newFlavEmoji, colorClass: newFlavClass };

        // 2. Update Boutons UI
        document.querySelectorAll('.flavor-select-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 3. Update Tarifs UI (Couleurs + Data)
        const tarifItems = document.querySelectorAll('#product-details-content .tarif-item');
        tarifItems.forEach(item => {
            // On enlève les anciennes classes de GOUT (top-zombie, etc.)
            item.classList.remove('top-zombie', 'top-angry', 'top-gorilla', 'top-punch'); 
            // Ajout de la nouvelle
            if(newFlavClass) item.classList.add(newFlavClass);

            // Update bouton panier
            const addToCartBtn = item.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.dataset.flavName = newFlavName + " " + newFlavEmoji;
            }
        });

        tg.HapticFeedback.impactOccurred('light');
        showNotification(`🧬 Goût : ${newFlavName}`);
        return;
    }

      // Clic sur "Ajouter au panier" (MODIFIÉ POUR DOUBLE SÉLECTION)
      if (target.closest('.add-to-cart-btn')) {
        const btn = target.closest('.add-to-cart-btn');
        if (btn.classList.contains('contact-private-btn')) {
            tg.openTelegramLink('https://t.me/toujour_imiter_jamais_egaler');
            return;
        }

        const productId = btn.dataset.productId;
        const weight = btn.dataset.weight;
        const price = parseFloat(btn.dataset.price);
        
        // On récupère Jar (Filtration) ET Flavor (Goût)
        const jarName = btn.dataset.jarName; 
        const flavName = btn.dataset.flavName;
        const jarClass = btn.dataset.jarClass;

        // On combine les deux pour le nom final dans le panier
        // Ex: "Top 🇲🇦 (120u | ZOMBIE COOKIES 🧟)"
        let finalVariantName = '';
        if (jarName && flavName) {
            finalVariantName = `${jarName} | ${flavName}`;
        } else if (jarName) {
            finalVariantName = jarName;
        } else if (flavName) {
            finalVariantName = flavName;
        }

        addToCart(productId, weight, price, finalVariantName, jarClass);
        return;
    }

        // Clic sur le bouton "Contact Privé" (PV)
        if (target.closest('.contact-private-btn')) {
            // Option 1 : Rediriger vers la page LINKS de l'app
            // renderContactPage();
            //showPage('page-contact');
            tg.openTelegramLink('https://t.me/toujour_imiter_jamais_egaler')
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

       // Clic sur "Commander" (AVEC VÉRIF MINIMUM 50€)
       if (target.closest('#checkout-button')) {
        // Calcul du total actuel du panier
        const subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

        // Vérification
        if (subTotal < 50) {
            tg.HapticFeedback.notificationOccurred('error'); // Vibration d'erreur
            showNotification(`❌ Minimum de commande : 50€ (Panier actuel : ${subTotal.toFixed(2)}€)`);
            return; // On bloque, on ne va pas à la confirmation
        }

        // Si c'est bon, on continue
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
            const targetUsername = 'toujour_imiter_jamais_egaler';

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
    const SECRET_HASH = "745d7788b80db947eabefbe0807df507e7aca8c5a0514225cd80458f7ec4682f";

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