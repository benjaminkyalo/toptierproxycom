export interface CityContent {
  population: string;
  internetPenetration: string;
  dominantCarriers: string[];
  avgSpeed: string;
  topUseCases: string[];
  uniqueNote: string;
  searchIntent: string;
  localSites: string[];
  faq: { q: string; a: string }[];
}

const cityContent: Record<string, CityContent> = {
  "trondheim": {
    population: "210,000",
    internetPenetration: "99%",
    dominantCarriers: ["Telenor", "Telia NO", "Ice"],
    avgSpeed: "220 Mbps median fixed broadband",
    topUseCases: ["NTNU academic research", "Finn.no regional listings", "Komplett & Elkjøp price monitoring", "Google.no Trondheim SERPs"],
    uniqueNote: "Trondheim is Norway's technology capital - home to NTNU, the country's largest university. The city has exceptionally high broadband penetration and a dense cluster of Telenor residential IPs. Researchers, tech companies and e-commerce operators targeting mid-Norway need Trondheim-specific IPs to avoid Oslo-biased results.",
    searchIntent: "buy trondheim proxy ip norway residential",
    localSites: ["finn.no", "komplett.no", "elkjop.no", "ntnu.no"],
    faq: [
      { q: "Why do I need a Trondheim proxy specifically?", a: "Trondheim is Norway's tech hub. Localized search results, regional pricing on Finn.no and NTNU-adjacent academic content all vary by city. A Trondheim IP gives you accurate local data rather than Oslo-defaulted results." },
      { q: "Which carriers have the most IPs in Trondheim?", a: "Telenor dominates with the largest residential pool, followed by Telia NO. Ice has growing mobile coverage in the region." },
      { q: "Can I use a Trondheim proxy for Finn.no scraping?", a: "Yes - Finn.no serves regional classified listings based on IP location. A Trondheim residential proxy ensures you see exactly what local buyers and sellers see." }
    ]
  },
  "bursa": {
    population: "3,100,000",
    internetPenetration: "84%",
    dominantCarriers: ["Turk Telekom", "Vodafone TR", "Turkcell"],
    avgSpeed: "58 Mbps median fixed broadband",
    topUseCases: ["Trendyol regional pricing", "Sahibinden.com car & real estate listings", "Google.com.tr Bursa SERPs", "Textile & manufacturing B2B research"],
    uniqueNote: "Bursa is Turkey's fourth-largest city and its industrial heartland - home to the automotive (Oyak-Renault, Tofas) and textile sectors. Businesses targeting Bursa's manufacturing economy, regional e-commerce prices or local classifieds need a Bursa IP to get accurate, unbiased local data.",
    searchIntent: "bursa proxy turkey residential ip",
    localSites: ["trendyol.com", "sahibinden.com", "hepsiburada.com", "hurriyet.com.tr"],
    faq: [
      { q: "Why use a Bursa proxy instead of an Istanbul proxy?", a: "Istanbul IPs return Istanbul-biased pricing and listings. For Bursa's industrial and manufacturing market - including Tofas suppliers, textile wholesalers and regional Trendyol prices - you need a Bursa IP." },
      { q: "What is the internet speed like in Bursa?", a: "Bursa averages around 58 Mbps on fixed broadband via Turk Telekom fiber, with 4G/5G coverage from Turkcell and Vodafone TR." },
      { q: "Is scraping legal with a Bursa proxy?", a: "KVKK (Law 6698) governs data privacy in Turkey. Scraping publicly available data is generally permitted, but processing personal data requires a legal basis." }
    ]
  },
  "islamabad": {
    population: "1,100,000",
    internetPenetration: "52%",
    dominantCarriers: ["Jazz", "Zong", "PTCL", "Telenor PK"],
    avgSpeed: "22 Mbps median fixed broadband",
    topUseCases: ["Daraz PK government-sector pricing", "OLX Pakistan Islamabad listings", "PEMRA & government content monitoring", "Google.com.pk Islamabad SERPs"],
    uniqueNote: "Islamabad is Pakistan's capital and administrative center. Government tenders, regulatory publications, embassy data and federal e-procurement are all Islamabad-centric. PTCL has its densest residential coverage here, making Islamabad IPs uniquely valuable for public-sector data collection.",
    searchIntent: "islamabad proxy pakistan residential ip",
    localSites: ["daraz.pk", "olx.com.pk", "geo.tv", "dawn.com", "ppra.org.pk"],
    faq: [
      { q: "What makes Islamabad proxies different from Karachi proxies?", a: "Islamabad hosts government portals, federal procurement (PPRA), and embassy content. Karachi IPs return commercial and financial data. For public-sector scraping, Islamabad is the right target." },
      { q: "Which provider has the best Islamabad IP coverage?", a: "Bright Data and IPRoyal both have solid Pakistan coverage. PTCL residential IPs are most common in Islamabad specifically." },
      { q: "How fast is internet in Islamabad?", a: "PTCL fiber delivers up to 100 Mbps in Islamabad, but the median is around 22 Mbps. Mobile data via Jazz and Zong 4G is faster in many areas." }
    ]
  },
  "bangkok": {
    population: "10,500,000",
    internetPenetration: "91%",
    dominantCarriers: ["AIS", "TrueMove H", "DTAC", "NT"],
    avgSpeed: "245 Mbps median fixed broadband",
    topUseCases: ["Lazada & Shopee TH Bangkok pricing", "Agoda & Booking.com hotel rates", "Google.co.th Bangkok SERPs", "LINE shopping & social commerce", "Tourism & hospitality data"],
    uniqueNote: "Bangkok is Southeast Asia's e-commerce and tourism capital. With 10M+ residents and some of Asia's fastest broadband, it generates the majority of Thailand's online traffic. AIS and TrueMove H have massive residential IP pools here. Bangkok IPs are essential for accurate Lazada, Shopee and Agoda data.",
    searchIntent: "bangkok proxy thailand residential ip",
    localSites: ["lazada.co.th", "shopee.co.th", "agoda.com", "booking.com", "wongnai.com"],
    faq: [
      { q: "Why do Lazada prices differ by IP location in Thailand?", a: "Lazada and Shopee TH run location-based promotions and flash sales only visible to users in specific cities. A Bangkok IP ensures you see Bangkok-targeted deals and pricing." },
      { q: "Which carriers dominate Bangkok residential IPs?", a: "AIS is the largest residential provider, followed by TrueMove H. Both have millions of Bangkok IPs in major proxy pools." },
      { q: "Is scraping legal in Thailand?", a: "Thailand's PDPA governs data collection. Scraping publicly available commercial data is generally acceptable, but avoid collecting personal information without consent." }
    ]
  },
  "la-serena": {
    population: "230,000",
    internetPenetration: "82%",
    dominantCarriers: ["Entel", "Movistar CL", "Claro CL", "WOM"],
    avgSpeed: "115 Mbps median fixed broadband",
    topUseCases: ["MercadoLibre Chile regional listings", "Astronomical research content (ESO, CTIO)", "Google.cl La Serena SERPs", "Mining & tourism sector data"],
    uniqueNote: "La Serena is Chile's second-oldest city and a major hub for astronomy - home to the Cerro Tololo Inter-American Observatory. It is also a regional commercial center for the Coquimbo region. La Serena IPs are needed for accurate regional pricing on MercadoLibre and local real estate data.",
    searchIntent: "la serena proxy chile residential ip",
    localSites: ["mercadolibre.cl", "portal.inmobiliario.com", "elmostrador.cl", "eso.org"],
    faq: [
      { q: "Who needs a La Serena proxy?", a: "Researchers tracking Chilean regional e-commerce prices, real estate investors monitoring the Coquimbo market, and astronomy institutions accessing local content all benefit from La Serena IPs." },
      { q: "Which ISPs serve La Serena?", a: "Entel and Movistar CL are the dominant fixed broadband providers. WOM has strong mobile coverage in the region." },
      { q: "How does La Serena compare to Santiago for proxy use?", a: "Santiago IPs return national-level results. La Serena IPs give you Coquimbo region-specific pricing, listings and search results - essential for regional market research." }
    ]
  },
  "hong-kong": {
    population: "7,500,000",
    internetPenetration: "94%",
    dominantCarriers: ["PCCW HKT", "CSL/CMHK", "SmarTone", "Hutchison 3"],
    avgSpeed: "280 Mbps median fixed broadband",
    topUseCases: ["HKTVmall & HKTV scraping", "Forex & financial market data", "Cross-border CN/HK e-commerce", "Google.com.hk SERPs", "Crypto exchange compliance"],
    uniqueNote: "Hong Kong is Asia's premier financial hub with some of the world's fastest broadband. Its unique legal status means it has separate internet infrastructure from mainland China, making HK IPs essential for accessing both global and CN-adjacent content. PCCW HKT dominates residential with deep IP density across all 18 districts.",
    searchIntent: "hong kong proxy residential ip hk",
    localSites: ["hktvmall.com", "hkex.com.hk", "scmp.com", "openrice.com", "591.com.hk"],
    faq: [
      { q: "Can I access mainland China content with a Hong Kong proxy?", a: "No - HK and mainland CN have separate internet infrastructure. A HK proxy gives you access to HK-specific and global content, not content behind the Great Firewall." },
      { q: "Why is Hong Kong important for financial data scraping?", a: "HKEX lists thousands of companies, and HK is the primary offshore RMB trading hub. Financial researchers and compliance teams all need HK IPs for accurate market data." },
      { q: "Which provider has the best HK residential coverage?", a: "Bright Data and Oxylabs both have strong HK pools via PCCW HKT and CSL/CMHK IPs." }
    ]
  },
  "heraklion": {
    population: "175,000",
    internetPenetration: "79%",
    dominantCarriers: ["Cosmote (OTE)", "Vodafone GR", "Nova"],
    avgSpeed: "52 Mbps median fixed broadband",
    topUseCases: ["Booking.com Crete hotel rates", "Skroutz.gr regional pricing", "Tourism & ferry aggregation", "Google.gr Heraklion SERPs", "Real estate monitoring"],
    uniqueNote: "Heraklion is Crete's capital and Greece's fourth-largest city. As the gateway to Europe's most-visited island, it generates massive travel and hospitality data traffic. Heraklion IPs are essential for accurate Booking.com rates, local real estate prices and ferry schedules from the port.",
    searchIntent: "heraklion proxy greece crete residential ip",
    localSites: ["booking.com", "skroutz.gr", "spitogatos.gr", "anek.gr", "minoan.gr"],
    faq: [
      { q: "Why use a Heraklion proxy for travel data?", a: "Hotels and ferry operators on Crete show location-specific pricing. A Heraklion IP ensures you see the same rates that local Cretans see - not inflated tourist pricing." },
      { q: "Which ISP has the most Heraklion residential IPs?", a: "Cosmote (OTE) is the dominant provider in Heraklion and across Crete. Vodafone GR is the main alternative." },
      { q: "Is Heraklion covered by major proxy providers?", a: "Yes - Bright Data, IPRoyal and SOAX all have Greece coverage with city-level targeting including Heraklion via Cosmote IPs." }
    ]
  },
  "barcelona": {
    population: "1,620,000",
    internetPenetration: "93%",
    dominantCarriers: ["Movistar", "Vodafone ES", "Orange", "MasMóvil"],
    avgSpeed: "210 Mbps median fixed broadband",
    topUseCases: ["Idealista & Fotocasa Catalonia real estate", "Amazon.es Barcelona pricing", "Google.es Barcelona SERPs", "MWC & tech event content", "Booking.com Barcelona hotel rates"],
    uniqueNote: "Barcelona is Spain's second city and its tech and startup capital. It hosts Mobile World Congress and has a distinct Catalan digital economy. Barcelona IPs return Catalonia-specific search results, local pricing on Idealista and region-specific Amazon.es inventory. Movistar fiber penetration is among the highest in Europe.",
    searchIntent: "barcelona proxy spain residential ip catalonia",
    localSites: ["idealista.com", "fotocasa.es", "amazon.es", "vibbo.com", "wallapop.com"],
    faq: [
      { q: "Do I need a Barcelona IP or a Spain IP for Catalan content?", a: "For Catalonia-specific search results, regional real estate listings and Catalan-language content, a Barcelona IP is more accurate than a generic Spain IP." },
      { q: "How fast is internet in Barcelona?", a: "Barcelona has among the best fiber coverage in Europe - Movistar delivers symmetric 600 Mbps to most of the city. Proxy latency from Barcelona is typically under 20ms to EU targets." },
      { q: "Which proxy provider has the best Barcelona coverage?", a: "Bright Data has the largest Spain pool and city-level Barcelona targeting. Oxylabs and Decodo also offer reliable Barcelona IPs." }
    ]
  },
  "tijuana": {
    population: "2,000,000",
    internetPenetration: "78%",
    dominantCarriers: ["Telmex", "Telcel", "Izzi", "AT&T MX"],
    avgSpeed: "48 Mbps median fixed broadband",
    topUseCases: ["MercadoLibre Baja California listings", "Cross-border US/MX price arbitrage", "Google.com.mx Tijuana SERPs", "Real estate border zone monitoring", "Maquiladora & manufacturing research"],
    uniqueNote: "Tijuana is Mexico's fastest-growing city and the world's busiest land border crossing. Its unique position on the US-MX border creates massive demand for cross-border data - pricing arbitrage between US and Mexican markets, border real estate, and manufacturing sector intelligence.",
    searchIntent: "tijuana proxy mexico residential ip baja california",
    localSites: ["mercadolibre.com.mx", "lamudi.com.mx", "olx.com.mx", "vivanuncios.com.mx"],
    faq: [
      { q: "What makes Tijuana proxies unique versus Mexico City proxies?", a: "Tijuana's border location means pricing, listings and search results reflect the US-MX economic overlap. A Tijuana IP reveals cross-border pricing dynamics invisible from Mexico City." },
      { q: "Which ISPs dominate Tijuana?", a: "Telmex (Infinitum) leads fixed broadband. Telcel has the strongest 4G/5G mobile coverage in Baja California." },
      { q: "Can I use a Tijuana proxy for US content?", a: "No - a Tijuana IP is a Mexican IP. Tijuana IPs are for accessing Mexican content with border-region accuracy." }
    ]
  },
  "naples": {
    population: "910,000",
    internetPenetration: "84%",
    dominantCarriers: ["TIM", "Vodafone IT", "WindTre", "Fastweb"],
    avgSpeed: "88 Mbps median fixed broadband",
    topUseCases: ["Amazon.it Southern Italy pricing", "Subito.it Naples classifieds", "Booking.com Amalfi Coast & Naples hotels", "Google.it Naples SERPs", "Serie A & Napoli football data"],
    uniqueNote: "Naples is Southern Italy's largest city and economic capital. Pricing on Amazon.it, classifieds on Subito.it and real estate on Immobiliare.it all vary significantly between North and South Italy. Naples IPs are essential for accurate Southern Italian market research.",
    searchIntent: "naples proxy italy southern residential ip",
    localSites: ["amazon.it", "subito.it", "immobiliare.it", "booking.com", "trenitalia.com"],
    faq: [
      { q: "Why does Southern Italy need separate proxy targeting?", a: "Italy has significant North-South economic disparities. Amazon.it pricing, real estate values and Google SERP results differ substantially between Milan and Naples." },
      { q: "Which provider has the best Naples IP coverage?", a: "TIM (Telecom Italia) has the largest residential pool in Naples. Bright Data and Oxylabs both support city-level targeting for Naples via TIM IPs." },
      { q: "Can I scrape Napoli SSC football data with a Naples proxy?", a: "Yes - ticket availability and Italian sports media may show location-specific content. A Naples IP gives you the most accurate local sports data." }
    ]
  },
  "daegu": {
    population: "2,400,000",
    internetPenetration: "97%",
    dominantCarriers: ["KT", "SK Telecom", "LG U+"],
    avgSpeed: "168 Mbps median fixed broadband",
    topUseCases: ["Coupang Daegu regional pricing", "Naver local search results", "Samsung & textile industry research", "Google.co.kr Daegu SERPs", "K-fashion & textile B2B data"],
    uniqueNote: "Daegu is South Korea's fourth-largest city and the center of the country's textile and fashion industry. It is also home to major Samsung operations. Daegu IPs return Gyeongsang region-specific Naver results, local Coupang pricing and textile B2B content that differs from Seoul-centric data.",
    searchIntent: "daegu proxy south korea residential ip",
    localSites: ["coupang.com", "naver.com", "gmarket.co.kr", "11st.co.kr", "kakao.com"],
    faq: [
      { q: "Why target Daegu specifically instead of Seoul?", a: "Daegu is South Korea's textile capital and a major Samsung hub. Regional Coupang pricing, Naver local search and B2B textile market data all require a Daegu IP for accuracy." },
      { q: "How fast is internet in Daegu?", a: "Daegu has world-class broadband - KT and SK Telecom both deliver fiber to most residential addresses, with median speeds around 168 Mbps." },
      { q: "Which proxy provider has Daegu city-level targeting?", a: "Oxylabs and Bright Data both support South Korea city-level targeting including Daegu. SK Telecom and KT IPs are the most common in their pools." }
    ]
  }
};

export const getCityContent = (citySlug: string): CityContent | null => {
  const key = citySlug.toLowerCase().replace(/\s+/g, "-");
  return cityContent[key] || null;
};
