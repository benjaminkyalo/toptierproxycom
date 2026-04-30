export interface Country {
  slug: string;
  name: string;
  code: string;
  flag: string;
  region: string;
  topProviders: string[]; // provider slugs
}

export const countries: Country[] = [
  { slug: "united-states", name: "United States", code: "US", flag: "🇺🇸", region: "North America", topProviders: ["bright-data", "oxylabs", "decodo", "rayobyte", "webshare"] },
  { slug: "united-kingdom", name: "United Kingdom", code: "GB", flag: "🇬🇧", region: "Europe", topProviders: ["bright-data", "oxylabs", "soax", "decodo"] },
  { slug: "germany", name: "Germany", code: "DE", flag: "🇩🇪", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "iproyal"] },
  { slug: "france", name: "France", code: "FR", flag: "🇫🇷", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "soax"] },
  { slug: "canada", name: "Canada", code: "CA", flag: "🇨🇦", region: "North America", topProviders: ["bright-data", "oxylabs", "rayobyte", "decodo"] },
  { slug: "australia", name: "Australia", code: "AU", flag: "🇦🇺", region: "Oceania", topProviders: ["bright-data", "oxylabs", "decodo", "soax"] },
  { slug: "japan", name: "Japan", code: "JP", flag: "🇯🇵", region: "Asia", topProviders: ["bright-data", "oxylabs", "soax", "netnut"] },
  { slug: "india", name: "India", code: "IN", flag: "🇮🇳", region: "Asia", topProviders: ["bright-data", "oxylabs", "iproyal", "soax"] },
  { slug: "brazil", name: "Brazil", code: "BR", flag: "🇧🇷", region: "South America", topProviders: ["bright-data", "oxylabs", "decodo", "soax"] },
  { slug: "mexico", name: "Mexico", code: "MX", flag: "🇲🇽", region: "North America", topProviders: ["bright-data", "oxylabs", "decodo", "iproyal"] },
  { slug: "spain", name: "Spain", code: "ES", flag: "🇪🇸", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "soax"] },
  { slug: "italy", name: "Italy", code: "IT", flag: "🇮🇹", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "soax"] },
  { slug: "netherlands", name: "Netherlands", code: "NL", flag: "🇳🇱", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "iproyal"] },
  { slug: "sweden", name: "Sweden", code: "SE", flag: "🇸🇪", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "soax"] },
  { slug: "norway", name: "Norway", code: "NO", flag: "🇳🇴", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "soax"] },
  { slug: "switzerland", name: "Switzerland", code: "CH", flag: "🇨🇭", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "netnut"] },
  { slug: "south-korea", name: "South Korea", code: "KR", flag: "🇰🇷", region: "Asia", topProviders: ["bright-data", "oxylabs", "soax", "netnut"] },
  { slug: "singapore", name: "Singapore", code: "SG", flag: "🇸🇬", region: "Asia", topProviders: ["bright-data", "oxylabs", "infatica", "decodo"] },
  { slug: "uae", name: "United Arab Emirates", code: "AE", flag: "🇦🇪", region: "Middle East", topProviders: ["bright-data", "oxylabs", "soax", "netnut"] },
  { slug: "south-africa", name: "South Africa", code: "ZA", flag: "🇿🇦", region: "Africa", topProviders: ["bright-data", "oxylabs", "iproyal", "soax"] },
  { slug: "argentina", name: "Argentina", code: "AR", flag: "🇦🇷", region: "South America", topProviders: ["bright-data", "oxylabs", "decodo", "iproyal"] },
  { slug: "poland", name: "Poland", code: "PL", flag: "🇵🇱", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "iproyal"] },
  { slug: "turkey", name: "Turkey", code: "TR", flag: "🇹🇷", region: "Europe", topProviders: ["bright-data", "oxylabs", "soax", "iproyal"] },
  { slug: "indonesia", name: "Indonesia", code: "ID", flag: "🇮🇩", region: "Asia", topProviders: ["bright-data", "oxylabs", "iproyal", "soax"] },
  { slug: "philippines", name: "Philippines", code: "PH", flag: "🇵🇭", region: "Asia", topProviders: ["bright-data", "oxylabs", "iproyal", "soax"] },
  { slug: "vietnam", name: "Vietnam", code: "VN", flag: "🇻🇳", region: "Asia", topProviders: ["bright-data", "oxylabs", "iproyal", "soax"] },
  { slug: "thailand", name: "Thailand", code: "TH", flag: "🇹🇭", region: "Asia", topProviders: ["bright-data", "oxylabs", "iproyal", "soax"] },
  { slug: "ireland", name: "Ireland", code: "IE", flag: "🇮🇪", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "netnut"] },
  { slug: "belgium", name: "Belgium", code: "BE", flag: "🇧🇪", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "iproyal"] },
  { slug: "denmark", name: "Denmark", code: "DK", flag: "🇩🇰", region: "Europe", topProviders: ["bright-data", "oxylabs", "decodo", "soax"] },
];

export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);
