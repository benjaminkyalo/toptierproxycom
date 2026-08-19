import { countries, cityToSlug } from "../../src/data/countries";
import { isCityTierA } from "../../src/data/canonical-policy";
import { getCityContent } from "../../src/data/city-content";
import { getCityDeep } from "../../src/data/city-deep";
const out:any[]=[];
for (const c of countries) for (const city of c.topCities) {
  const s = cityToSlug(city);
  if (!isCityTierA(c.slug, s)) continue;
  if (getCityContent(s) || getCityDeep(s, c.slug)) continue;
  out.push({country:c.name, cs:c.slug, city, s, carriers:c.carriers.slice(0,4), speed:c.averageSpeed, best:c.bestProvider});
}
console.log(out.length);
console.log(JSON.stringify(out,null,0));
