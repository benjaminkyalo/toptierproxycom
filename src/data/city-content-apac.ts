import type { CityContent } from "./city-content";

// Phase 4 — unique, hand-written records for Tier A cities across the Americas
// and Asia-Pacific that previously rendered template-only text.
export const cityContentAPAC: Record<string, CityContent> = {
  "toronto": {
    population: "6,600,000 (GTA)",
    internetPenetration: "94%",
    dominantCarriers: ["Bell", "Rogers", "Telus", "Shaw"],
    avgSpeed: "188 Mbps median fixed broadband",
    topUseCases: ["Amazon.ca & Best Buy Canada price monitoring", "Realtor.ca & Zillow CA listings", "Google.ca Toronto SERPs", "Sneaker & ticket drops", "Sports betting compliance (Ontario)"],
    uniqueNote: "Toronto is Canada's largest market and the only province-level regulated online gambling jurisdiction in the country, so Ontario IPs are mandatory for iGaming compliance work. Canadian retail also prices independently of the US, and Amazon.ca inventory differs city by city on delivery promises.",
    searchIntent: "toronto proxy canada residential ip ontario",
    localSites: ["amazon.ca", "realtor.ca", "kijiji.ca", "bestbuy.ca", "canadiantire.ca"],
    faq: [
      { q: "Can I use a US proxy for Canadian data?", a: "No. Canadian pricing, tax, inventory and search results differ from the US, and many Canadian retailers redirect US IPs to the .com storefront." },
      { q: "Why does Ontario matter for iGaming?", a: "Ontario runs Canada's only regulated online-gambling market. Operators geo-fence to Ontario IPs, so compliance and affiliate verification must originate in Toronto." },
      { q: "Which carriers dominate Toronto?", a: "Bell and Rogers hold most GTA households, with Telus and Shaw appearing more in western Canada." }
    ]
  },
  "sydney": {
    population: "5,400,000 (metro)",
    internetPenetration: "96%",
    dominantCarriers: ["Telstra", "Optus", "TPG", "Aussie Broadband"],
    avgSpeed: "78 Mbps median fixed broadband (NBN)",
    topUseCases: ["Amazon.com.au & Coles/Woolworths pricing", "Domain.com.au & realestate.com.au listings", "Google.com.au Sydney SERPs", "Sports betting & wagering compliance", "Qantas & Jetstar fare tracking"],
    uniqueNote: "Sydney is Australia's largest market and the reference geography for Australian pricing. The NBN's wholesale model means residential speeds are modest by developed-market standards, and grocery pricing at Coles and Woolworths is genuinely store-level, so postcode-accurate Sydney IPs change the data you get.",
    searchIntent: "sydney proxy australia residential ip",
    localSites: ["amazon.com.au", "realestate.com.au", "coles.com.au", "woolworths.com.au", "gumtree.com.au"],
    faq: [
      { q: "Do Australian grocery prices vary by location?", a: "Yes. Coles and Woolworths set prices and stock per store, and the site picks a store from your IP, so a Sydney IP returns Sydney store data." },
      { q: "Which carrier is deepest in Sydney pools?", a: "Telstra by a wide margin, with Optus and TPG next across the NBN." },
      { q: "Is Sydney enough for Australia?", a: "For national baselines, largely. Add Melbourne for the second-largest market and Perth if you need Western Australia's separate time zone and pricing behaviour." }
    ]
  },
  "auckland": {
    population: "1,700,000 (metro)",
    internetPenetration: "95%",
    dominantCarriers: ["Spark", "One NZ", "2degrees", "Chorus (wholesale)"],
    avgSpeed: "190 Mbps median fixed broadband",
    topUseCases: ["Trade Me listings & pricing", "Countdown/Woolworths NZ price checks", "Google.co.nz Auckland SERPs", "Property market monitoring", "Air New Zealand fare tracking"],
    uniqueNote: "Auckland holds about a third of New Zealand's population and dominates its commerce. Trade Me — not Amazon or eBay — is the country's central marketplace, and it filters listings by region, so Auckland IPs are the standard vantage point for NZ market data.",
    searchIntent: "auckland proxy new zealand residential ip",
    localSites: ["trademe.co.nz", "countdown.co.nz", "realestate.co.nz", "nzherald.co.nz", "pbtech.co.nz"],
    faq: [
      { q: "Can an Australian proxy work for New Zealand?", a: "No. NZ prices in NZD, ships separately, and Trade Me and Countdown geo-filter — an AU IP returns the wrong market entirely." },
      { q: "Which carrier appears most in Auckland pools?", a: "Spark, followed by One NZ, both riding the Chorus fiber network." },
      { q: "Is NZ pool depth a concern?", a: "It is a small market, so pools are shallower than AU. Confirm Auckland-level accuracy with your provider before scaling a NZ workload." }
    ]
  },
  "mumbai": {
    population: "21,700,000 (metro)",
    internetPenetration: "52%",
    dominantCarriers: ["Jio", "Airtel", "Vi (Vodafone Idea)", "BSNL"],
    avgSpeed: "63 Mbps median fixed broadband",
    topUseCases: ["Amazon.in & Flipkart price monitoring", "99acres & MagicBricks listings", "Google.co.in Mumbai SERPs", "Fintech & BFSI market research", "Quick-commerce (Blinkit, Zepto) pricing"],
    uniqueNote: "Mumbai is India's financial capital and its highest-value e-commerce pincode cluster. Indian quick-commerce apps price and stock by pincode, not city, so Mumbai IPs are the minimum granularity for credible Indian retail data. Jio dominates the mobile pool that most real Indian traffic comes from.",
    searchIntent: "mumbai proxy india residential ip",
    localSites: ["amazon.in", "flipkart.com", "99acres.com", "blinkit.com", "moneycontrol.com"],
    faq: [
      { q: "Do I need pincode-level targeting in India?", a: "For quick-commerce and grocery, effectively yes — stock and price change by pincode. A Mumbai residential IP plus a Mumbai pincode in the session gets you closest." },
      { q: "Which carrier should I request?", a: "Jio has by far the largest Indian pool and the most natural fingerprint; Airtel is the strongest secondary." },
      { q: "Mumbai or Delhi for Indian data?", a: "Mumbai for finance and premium retail; Delhi NCR for the largest overall order volume. Serious Indian datasets sample both." }
    ]
  },
  "karachi": {
    population: "17,200,000 (metro)",
    internetPenetration: "52%",
    dominantCarriers: ["Jazz", "Zong", "PTCL", "Telenor PK"],
    avgSpeed: "15 Mbps median fixed broadband",
    topUseCases: ["Daraz PK price monitoring", "OLX Pakistan & Zameen listings", "Google.com.pk Karachi SERPs", "Textile & trade B2B research", "Remittance & fintech market data"],
    uniqueNote: "Karachi is Pakistan's largest city, its port and its commercial capital — the counterpart to Islamabad's government focus. Fixed broadband is slow and scarce, so Pakistani traffic is overwhelmingly mobile on Jazz and Zong; mobile IPs are the realistic choice for Karachi workloads.",
    searchIntent: "karachi proxy pakistan residential ip",
    localSites: ["daraz.pk", "olx.com.pk", "zameen.com", "dawn.com", "pakwheels.com"],
    faq: [
      { q: "Karachi or Islamabad proxy?", a: "Karachi for commerce, trade and consumer pricing; Islamabad for government portals, federal procurement and regulatory content." },
      { q: "Mobile or fixed IPs in Pakistan?", a: "Mobile. Jazz and Zong 4G carry most Pakistani traffic and are far more common than PTCL fixed lines in real user data." },
      { q: "How should I tune my crawler for Pakistan?", a: "Median speeds are low, so use long timeouts, low concurrency and aggressive retry logic rather than parallel bursts." }
    ]
  },
  "dhaka": {
    population: "23,200,000 (metro)",
    internetPenetration: "45%",
    dominantCarriers: ["Grameenphone", "Robi", "Banglalink", "Teletalk"],
    avgSpeed: "37 Mbps median fixed broadband",
    topUseCases: ["Daraz BD price monitoring", "Bikroy.com listings", "Google.com.bd Dhaka SERPs", "RMG & textile sourcing research", "Mobile financial services (bKash) research"],
    uniqueNote: "Dhaka is one of the world's densest megacities and the command centre of Bangladesh's ready-made-garment industry, which makes it a genuine target for sourcing and supply-chain intelligence. Grameenphone carries the largest share of connections, and nearly all consumer traffic is mobile.",
    searchIntent: "dhaka proxy bangladesh residential ip",
    localSites: ["daraz.com.bd", "bikroy.com", "prothomalo.com", "bdjobs.com", "bkash.com"],
    faq: [
      { q: "Why scrape Bangladeshi sources?", a: "Bangladesh is the world's second-largest garment exporter; supplier directories, job boards and B2B listings in Dhaka are primary sourcing intelligence." },
      { q: "Which carrier dominates Dhaka?", a: "Grameenphone, followed by Robi and Banglalink. Fixed-line ISP pools are comparatively thin." },
      { q: "Are Bangladeshi proxies stable?", a: "Session stability is lower than in developed markets. Design for retries and avoid workloads that require long sticky sessions." }
    ]
  },
  "jakarta": {
    population: "11,300,000 (city), 32M Jabodetabek",
    internetPenetration: "78%",
    dominantCarriers: ["Telkomsel", "IndiHome", "Indosat Ooredoo", "XL Axiata"],
    avgSpeed: "32 Mbps median fixed broadband",
    topUseCases: ["Tokopedia, Shopee ID & Bukalapak pricing", "Rumah123 property listings", "Google.co.id Jakarta SERPs", "Ride-hailing & food-delivery pricing", "Fintech & e-wallet research"],
    uniqueNote: "Greater Jakarta is Southeast Asia's largest urban economy and Indonesia's e-commerce centre. Shopee ID and Tokopedia run city-level flash campaigns and shipping subsidies visible only to local IPs, and Indonesian users are almost entirely mobile-first on Telkomsel.",
    searchIntent: "jakarta proxy indonesia residential ip",
    localSites: ["tokopedia.com", "shopee.co.id", "bukalapak.com", "rumah123.com", "detik.com"],
    faq: [
      { q: "Why does Indonesian pricing need local IPs?", a: "Shipping subsidies and flash promotions are geo-targeted per city. From outside Indonesia you see a generic catalogue with different effective prices." },
      { q: "Which carrier is deepest in Jakarta?", a: "Telkomsel for mobile and IndiHome (Telkom) for fixed lines; both are widely represented in residential pools." },
      { q: "Is Jakarta representative of Indonesia?", a: "It is the commercial baseline, but Surabaya and Bandung differ on shipping cost and stock. Sample them for national coverage." }
    ]
  },
  "manila": {
    population: "14,900,000 (Metro Manila)",
    internetPenetration: "73%",
    dominantCarriers: ["PLDT/Smart", "Globe Telecom", "Converge", "DITO"],
    avgSpeed: "92 Mbps median fixed broadband",
    topUseCases: ["Lazada PH & Shopee PH pricing", "Lamudi & Carousell listings", "Google.com.ph Manila SERPs", "BPO & outsourcing market research", "Remittance and fintech monitoring"],
    uniqueNote: "Metro Manila is the Philippines' commercial core and the world's BPO capital, which means an unusually large share of Filipino traffic comes from business networks. Filipino consumers are heavy social-commerce users, so Lazada and Shopee PH campaign pricing is geo- and app-gated.",
    searchIntent: "manila proxy philippines residential ip",
    localSites: ["lazada.com.ph", "shopee.ph", "carousell.ph", "lamudi.com.ph", "inquirer.net"],
    faq: [
      { q: "Why do Philippine prices differ by IP?", a: "Lazada and Shopee run island-group-specific shipping fees and vouchers. A Manila IP shows Luzon pricing, which is what most PH benchmarks assume." },
      { q: "Which carrier is most common in pools?", a: "PLDT/Smart and Globe Telecom together cover most Metro Manila households and mobile users." },
      { q: "Is Manila good for English-language SERP testing?", a: "Yes — the Philippines is a large English-speaking market with distinct local SERPs, useful for testing English content in an APAC context." }
    ]
  },
  "ho-chi-minh-city": {
    population: "9,300,000 (metro)",
    internetPenetration: "79%",
    dominantCarriers: ["Viettel", "VNPT (Vinaphone)", "FPT Telecom", "MobiFone"],
    avgSpeed: "108 Mbps median fixed broadband",
    topUseCases: ["Shopee VN & Lazada VN pricing", "Batdongsan property listings", "Google.com.vn HCMC SERPs", "Manufacturing & sourcing research", "Fintech and e-wallet monitoring"],
    uniqueNote: "Ho Chi Minh City is Vietnam's commercial capital and the anchor of the country's manufacturing export corridor. FPT Telecom and Viettel provide fast, cheap fiber, and Vietnamese marketplaces run city-scoped shipping and vouchers that only local IPs can see.",
    searchIntent: "ho chi minh city proxy vietnam residential ip",
    localSites: ["shopee.vn", "lazada.vn", "batdongsan.com.vn", "tiki.vn", "vnexpress.net"],
    faq: [
      { q: "HCMC or Hanoi for Vietnamese data?", a: "HCMC for commerce, manufacturing and consumer pricing; Hanoi for government, policy and northern regional listings." },
      { q: "Which ISP is deepest in HCMC?", a: "Viettel and FPT Telecom lead, with VNPT strong on both fixed and mobile." },
      { q: "Is Vietnam good for sourcing intelligence?", a: "Increasingly central — supplier directories and B2B listings around HCMC are a primary signal for China+1 sourcing strategies." }
    ]
  },
  "kuala-lumpur": {
    population: "8,400,000 (Klang Valley)",
    internetPenetration: "97%",
    dominantCarriers: ["Unifi (TM)", "Maxis", "CelcomDigi", "Time dotCom"],
    avgSpeed: "118 Mbps median fixed broadband",
    topUseCases: ["Shopee MY & Lazada MY pricing", "PropertyGuru & iProperty listings", "Google.com.my KL SERPs", "Halal & FMCG market research", "AirAsia fare tracking"],
    uniqueNote: "Kuala Lumpur and the Klang Valley generate most of Malaysia's online spending, and Malaysia's trilingual internet (English, Malay, Mandarin) means content varies by language header as much as by IP. Unifi fiber gives KL residential IPs strong, stable throughput.",
    searchIntent: "kuala lumpur proxy malaysia residential ip",
    localSites: ["shopee.com.my", "lazada.com.my", "propertyguru.com.my", "mudah.my", "thestar.com.my"],
    faq: [
      { q: "Does language matter on Malaysian sites?", a: "Yes. Many sites branch between English, Bahasa Melayu and Chinese. Set Accept-Language explicitly alongside your KL IP." },
      { q: "Which ISP dominates KL?", a: "Unifi (Telekom Malaysia) on fiber, with Maxis and CelcomDigi covering mobile and fixed-wireless." },
      { q: "Is KL a good SEA hub?", a: "For latency and stability, yes. But Singapore, Thailand, Indonesia and Vietnam each price separately — use local IPs per market." }
    ]
  },
  "singapore": {
    population: "5,900,000",
    internetPenetration: "96%",
    dominantCarriers: ["Singtel", "StarHub", "M1", "SIMBA (TPG)"],
    avgSpeed: "295 Mbps median fixed broadband (top 3 globally)",
    topUseCases: ["Shopee SG & Lazada SG pricing", "PropertyGuru & 99.co listings", "Google.com.sg SERPs", "Finance, forex & crypto compliance", "Regional ad verification for SEA"],
    uniqueNote: "Singapore is Asia's financial and data-centre hub with near-universal gigabit fiber, so Singaporean residential IPs are among the fastest in the world. It is also where most SEA regional campaigns are trafficked from, making SG IPs standard for ad-verification across Southeast Asia.",
    searchIntent: "singapore proxy residential ip sg",
    localSites: ["shopee.sg", "lazada.sg", "propertyguru.com.sg", "carousell.sg", "straitstimes.com"],
    faq: [
      { q: "Are Singapore datacenter IPs acceptable?", a: "Singapore hosts enormous datacenter capacity, so its DC ranges are heavily blocklisted. For Shopee SG or PropertyGuru you need Singtel or StarHub residential IPs." },
      { q: "Is Singapore a good proxy for the rest of SEA?", a: "For latency yes, for data no — every SEA market prices and ranks separately. Use SG for SG data and regional campaign QA." },
      { q: "Which carrier is deepest?", a: "Singtel, with StarHub second; both provide clean, fast residential exits." }
    ]
  },
  "seoul": {
    population: "25,600,000 (capital area)",
    internetPenetration: "98%",
    dominantCarriers: ["KT", "SK Broadband", "LG U+", "SK Telecom"],
    avgSpeed: "172 Mbps median fixed broadband",
    topUseCases: ["Coupang & Gmarket price monitoring", "Naver search & shopping data", "Google.co.kr Seoul SERPs", "K-beauty & K-fashion market research", "Gaming and app-store QA"],
    uniqueNote: "Seoul's capital area holds half of South Korea's population and nearly all of its online commerce. Naver — not Google — is the dominant Korean discovery surface, and it geo-personalises hard, so Naver rank tracking and shopping data require genuine Seoul residential IPs.",
    searchIntent: "seoul proxy south korea residential ip",
    localSites: ["coupang.com", "naver.com", "gmarket.co.kr", "11st.co.kr", "musinsa.com"],
    faq: [
      { q: "Why does Naver matter more than Google in Korea?", a: "Naver holds the largest share of Korean search and shopping discovery, with its own ranking system and heavy localisation — Korean SEO without Naver data is incomplete." },
      { q: "Seoul or Daegu proxy?", a: "Seoul for national commerce, Naver rank tracking and the deepest pool; Daegu for Gyeongsang regional results and textile-industry B2B data." },
      { q: "Which carrier is best for sticky sessions?", a: "KT and SK Broadband fiber lines hold long sessions well and dominate Korean residential pools." }
    ]
  },
  "taipei": {
    population: "7,000,000 (metro)",
    internetPenetration: "94%",
    dominantCarriers: ["Chunghwa Telecom", "FarEasTone", "Taiwan Mobile", "Taiwan Star"],
    avgSpeed: "210 Mbps median fixed broadband",
    topUseCases: ["PChome & Momo price monitoring", "591 property listings", "Google.com.tw Taipei SERPs", "Semiconductor & hardware supply research", "Traditional Chinese SERP QA"],
    uniqueNote: "Taipei anchors Taiwan's economy and the global semiconductor supply chain, which makes Taiwanese B2B and hardware pricing data commercially valuable. Taiwan uses Traditional Chinese, so content differs from mainland sites even where products overlap — a Taipei IP is the only reliable way to see it.",
    searchIntent: "taipei proxy taiwan residential ip",
    localSites: ["pchome.com.tw", "momoshop.com.tw", "591.com.tw", "shopee.tw", "udn.com"],
    faq: [
      { q: "Is a Hong Kong or mainland IP a substitute for Taiwan?", a: "No. Taiwan uses Traditional Chinese, prices in TWD and runs entirely separate platforms like PChome and Momo." },
      { q: "Which carrier dominates Taipei?", a: "Chunghwa Telecom holds most fixed lines, with FarEasTone and Taiwan Mobile covering mobile." },
      { q: "Why track Taiwanese hardware pricing?", a: "Taipei retail pricing on components often leads global price movements because of proximity to manufacturing." }
    ]
  },
  "shanghai": {
    population: "29,200,000 (metro)",
    internetPenetration: "82%",
    dominantCarriers: ["China Telecom", "China Mobile", "China Unicom"],
    avgSpeed: "238 Mbps median fixed broadband",
    topUseCases: ["Tmall, JD.com & Pinduoduo pricing", "Baidu Shanghai SERPs", "Brand-protection & counterfeit monitoring", "Supply-chain & sourcing research", "Mainland app-store QA"],
    uniqueNote: "Shanghai is China's commercial capital and the standard vantage point for mainland market data. The Great Firewall means mainland IPs see a fundamentally different internet, and Baidu, Tmall and JD all geo-personalise. Mainland residential coverage is thin and legally sensitive — verify your provider's coverage and your own compliance position first.",
    searchIntent: "shanghai proxy china mainland residential ip",
    localSites: ["tmall.com", "jd.com", "baidu.com", "pinduoduo.com", "anjuke.com"],
    faq: [
      { q: "Can a Hong Kong proxy replace a mainland one?", a: "No. Hong Kong sits outside the Great Firewall and sees the global internet. For Baidu, Tmall or JD as mainland users see them, you need a mainland IP." },
      { q: "Is mainland China proxy coverage reliable?", a: "It is the thinnest of any major economy and subject to local regulation. Confirm live availability with your provider and review your own legal position before running mainland workloads." },
      { q: "Why monitor Shanghai specifically?", a: "It concentrates China's highest-value consumer market and most brand-protection cases; Shanghai pricing is the mainland benchmark." }
    ]
  },
  "sao-paulo": {
    population: "22,600,000 (metro)",
    internetPenetration: "84%",
    dominantCarriers: ["Vivo (Telefônica)", "Claro", "TIM", "Oi"],
    avgSpeed: "152 Mbps median fixed broadband",
    topUseCases: ["Mercado Livre & Amazon.com.br pricing", "OLX Brasil & ZAP Imóveis listings", "Google.com.br São Paulo SERPs", "Pix & fintech ecosystem research", "Ad verification for LATAM campaigns"],
    uniqueNote: "São Paulo is the largest metro in the Southern Hemisphere and Brazil's economic engine. Mercado Livre — Latin America's dominant marketplace — computes freight and delivery estimates from buyer CEP, so São Paulo IPs are the standard reference for Brazilian pricing including shipping.",
    searchIntent: "sao paulo proxy brazil residential ip",
    localSites: ["mercadolivre.com.br", "amazon.com.br", "olx.com.br", "zapimoveis.com.br", "americanas.com.br"],
    faq: [
      { q: "Does Brazilian shipping cost change the real price?", a: "Substantially. Mercado Livre and Amazon.com.br quote freight from the buyer's location, so a São Paulo IP is needed for a landed-cost view of the largest Brazilian market." },
      { q: "Which carrier is deepest in São Paulo?", a: "Vivo (Telefônica) leads fixed broadband, with Claro and TIM strong across mobile." },
      { q: "Is São Paulo enough for Brazil?", a: "It is the commercial baseline; add Rio de Janeiro and a Northeast city like Recife if freight and regional pricing variance matter to your model." }
    ]
  },
  "mexico-city": {
    population: "22,000,000 (metro)",
    internetPenetration: "79%",
    dominantCarriers: ["Telmex", "Izzi", "Totalplay", "Telcel"],
    avgSpeed: "75 Mbps median fixed broadband",
    topUseCases: ["Mercado Libre MX & Amazon.com.mx pricing", "Inmuebles24 & Vivanuncios listings", "Google.com.mx CDMX SERPs", "Retail & FMCG price monitoring", "LATAM ad verification"],
    uniqueNote: "Mexico City is Latin America's second-largest metro and Mexico's commercial baseline. Mercado Libre MX and Amazon.com.mx both compute delivery from buyer location, and CDMX-specific promotions are common — while Tijuana covers the very different US-border arbitrage picture.",
    searchIntent: "mexico city proxy mexico residential ip cdmx",
    localSites: ["mercadolibre.com.mx", "amazon.com.mx", "inmuebles24.com", "liverpool.com.mx", "eluniversal.com.mx"],
    faq: [
      { q: "Mexico City or Tijuana proxy?", a: "CDMX for national commerce baselines and government content; Tijuana when you specifically need US-Mexico border arbitrage and Baja California data." },
      { q: "Which carrier dominates CDMX?", a: "Telmex (Infinitum) leads fixed lines, with Totalplay and Izzi growing on fiber and Telcel dominating mobile." },
      { q: "Do Mexican retailers geo-personalise?", a: "Yes — delivery windows, store pickup and some promotions are set from IP location, so CDMX IPs return the capital's actual offer set." }
    ]
  },
  "buenos-aires": {
    population: "15,600,000 (metro)",
    internetPenetration: "88%",
    dominantCarriers: ["Telecom (Fibertel/Personal)", "Movistar AR", "Claro AR"],
    avgSpeed: "67 Mbps median fixed broadband",
    topUseCases: ["Mercado Libre AR price monitoring", "Zonaprop & Argenprop listings", "Google.com.ar Buenos Aires SERPs", "Inflation & currency price tracking", "Media and news monitoring"],
    uniqueNote: "Buenos Aires concentrates roughly a third of Argentina's population and nearly all of its online commerce. Argentina's inflation means retail prices can move weekly, and dual exchange rates make peso pricing meaningless without a local vantage point — high-frequency scraping from AR IPs is the only accurate approach.",
    searchIntent: "buenos aires proxy argentina residential ip",
    localSites: ["mercadolibre.com.ar", "zonaprop.com.ar", "clarin.com", "despegar.com.ar", "garbarino.com"],
    faq: [
      { q: "Why scrape Argentine prices frequently?", a: "Inflation and shifting exchange rates reprice goods weekly or faster. Monthly snapshots are useless; daily collection from an AR IP is the standard." },
      { q: "Which ISP is most common in Buenos Aires?", a: "Telecom Argentina (Fibertel) leads fixed broadband, with Movistar AR and Claro AR covering mobile." },
      { q: "Do Argentine sites block foreign IPs?", a: "Many restrict local pricing, payment methods and promotions to Argentine IPs, and streaming catalogues differ sharply." }
    ]
  },
  "santiago": {
    population: "7,100,000 (metro)",
    internetPenetration: "92%",
    dominantCarriers: ["Movistar CL", "Entel", "VTR", "Claro CL"],
    avgSpeed: "260 Mbps median fixed broadband (top 10 globally)",
    topUseCases: ["Mercado Libre CL & Falabella pricing", "Portal Inmobiliario listings", "Google.cl Santiago SERPs", "Mining & commodities research", "Retail price monitoring"],
    uniqueNote: "Santiago holds around 40% of Chile's population and has some of the fastest broadband in the Americas thanks to a near-complete fiber build. Chilean retail is concentrated in Falabella, Ripley and Paris, all of which geo-personalise stock and delivery by comuna.",
    searchIntent: "santiago proxy chile residential ip",
    localSites: ["mercadolibre.cl", "falabella.com", "portalinmobiliario.com", "emol.com", "ripley.cl"],
    faq: [
      { q: "Santiago or La Serena for Chilean data?", a: "Santiago for national commerce baselines and the deepest pool; La Serena for Coquimbo regional pricing and listings." },
      { q: "Why are Chilean proxies fast?", a: "Chile has among the highest fiber penetration in the Americas, so Santiago residential exits sustain high throughput with low latency." },
      { q: "Which carrier is deepest?", a: "Movistar CL and VTR hold most Santiago households, with Entel strong on mobile." }
    ]
  },
  "bogota": {
    population: "11,300,000 (metro)",
    internetPenetration: "76%",
    dominantCarriers: ["Claro CO", "Movistar CO", "Tigo (UNE)", "ETB"],
    avgSpeed: "115 Mbps median fixed broadband",
    topUseCases: ["Mercado Libre CO & Falabella pricing", "Finca Raíz & Metrocuadrado listings", "Google.com.co Bogotá SERPs", "Fintech & neobank research", "LATAM ad verification"],
    uniqueNote: "Bogotá is Colombia's capital and its largest consumer market, and Colombian e-commerce is growing faster than most of LATAM. Rappi and other delivery platforms price by neighbourhood, so Bogotá-accurate IPs materially change quick-commerce datasets.",
    searchIntent: "bogota proxy colombia residential ip",
    localSites: ["mercadolibre.com.co", "fincaraiz.com.co", "rappi.com.co", "eltiempo.com", "exito.com"],
    faq: [
      { q: "Does Colombian delivery pricing vary by area?", a: "Yes. Rappi and Éxito compute fees and stock per neighbourhood, so a Bogotá IP is the minimum granularity for accurate quick-commerce data." },
      { q: "Which carrier dominates Bogotá?", a: "Claro CO leads overall, with ETB and Tigo (UNE) strong on fixed lines in the capital." },
      { q: "Is Bogotá enough for Colombia?", a: "It is the baseline; add Medellín and Cali if regional retail and property variance matter." }
    ]
  },
  "lima": {
    population: "11,200,000 (metro)",
    internetPenetration: "78%",
    dominantCarriers: ["Movistar PE", "Claro PE", "Entel PE", "Bitel"],
    avgSpeed: "125 Mbps median fixed broadband",
    topUseCases: ["Mercado Libre PE & Falabella pricing", "Urbania & Adondevivir listings", "Google.com.pe Lima SERPs", "Mining and commodities research", "Retail & FMCG monitoring"],
    uniqueNote: "Lima holds roughly a third of Peru's population and nearly all of its formal retail. Peruvian e-commerce is concentrated in a handful of players — Falabella, Ripley, Plaza Vea and Mercado Libre PE — each of which sets delivery zones from IP location within the metro.",
    searchIntent: "lima proxy peru residential ip",
    localSites: ["mercadolibre.com.pe", "falabella.com.pe", "urbania.pe", "elcomercio.pe", "plazavea.com.pe"],
    faq: [
      { q: "Is Lima representative of Peru?", a: "For formal retail and media, yes — Lima dominates. Regional cities like Arequipa differ mainly on delivery availability." },
      { q: "Which carrier is most common?", a: "Movistar PE and Claro PE hold most fixed lines; Entel PE and Bitel are strong on mobile." },
      { q: "Do Peruvian sites geo-fence?", a: "Delivery zones, payment options and some promotions are IP-derived, so a Lima IP is needed for realistic checkout data." }
    ]
  },
  "caracas": {
    population: "2,900,000 (metro)",
    internetPenetration: "62%",
    dominantCarriers: ["CANTV", "Movistar VE", "Digitel", "Inter"],
    avgSpeed: "9 Mbps median fixed broadband",
    topUseCases: ["MercadoLibre VE & local marketplace pricing", "Currency & parallel-rate monitoring", "Google.co.ve Caracas SERPs", "News & information-access research", "Remittance market data"],
    uniqueNote: "Caracas is Venezuela's capital and effectively its only large-scale connected market. Infrastructure is the slowest in the region and CANTV dominates, so Venezuelan proxy pools are shallow and unstable — plan for low throughput, heavy retries and periodic gaps in coverage.",
    searchIntent: "caracas proxy venezuela residential ip",
    localSites: ["mercadolibre.com.ve", "eluniversal.com", "banesco.com", "tucarro.com.ve", "dolartoday.com"],
    faq: [
      { q: "Are Venezuelan proxies reliable?", a: "Not by developed-market standards. Median speeds near 9 Mbps and frequent outages mean you should expect low throughput and design for retries." },
      { q: "Why use a Venezuelan IP at all?", a: "For genuine local pricing, parallel-rate monitoring and checking what Venezuelan users can actually reach — none of which is visible from outside." },
      { q: "Which carrier will my IP be on?", a: "Most likely CANTV, the state incumbent, with Digitel and Movistar VE supplying mobile." }
    ]
  },
  "guayaquil": {
    population: "3,100,000 (metro)",
    internetPenetration: "76%",
    dominantCarriers: ["Claro EC", "CNT EP", "Movistar EC", "Netlife"],
    avgSpeed: "75 Mbps median fixed broadband",
    topUseCases: ["Mercado Libre EC & local retail pricing", "Plusvalia property listings", "Google.com.ec Guayaquil SERPs", "Export & agri-commodity research", "Regional retail monitoring"],
    uniqueNote: "Guayaquil is Ecuador's largest city, its main port and its commercial capital — distinct from Quito's administrative role. Ecuador uses the US dollar, which makes its pricing directly comparable to US benchmarks and unusually useful for LATAM cost modelling.",
    searchIntent: "guayaquil proxy ecuador residential ip",
    localSites: ["mercadolibre.com.ec", "plusvalia.com", "eluniverso.com", "olx.com.ec", "corporacionfavorita.com"],
    faq: [
      { q: "Guayaquil or Quito for Ecuadorian data?", a: "Guayaquil for commerce, ports and export research; Quito for government, policy and administrative content." },
      { q: "Why is Ecuador useful for price comparison?", a: "It is dollarised, so prices are directly comparable to US figures without exchange-rate noise — handy for LATAM margin analysis." },
      { q: "Which ISP is most common?", a: "Claro EC and CNT EP cover most connections, with Netlife strong on urban fiber." }
    ]
  },
};
