import re

with open('/var/www/toptierproxy/index.html', 'r') as f:
    content = f.read()

# Remove any existing ld+json blocks
content = re.sub(r'\s*<script type="application/ld\+json">.*?</script>', '', content, flags=re.DOTALL)

schemas = """
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"ToptierProxy.com","url":"https://www.toptierproxy.com","description":"Independent expert reviews and rankings of the best proxy providers worldwide."}</script>
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"ToptierProxy.com","url":"https://www.toptierproxy.com","potentialAction":{"@type":"SearchAction","target":"https://www.toptierproxy.com/search?q={query}","query-input":"required name=query"}}</script>
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best proxy provider in 2026?","acceptedAnswer":{"@type":"Answer","text":"Based on our testing, Bright Data leads for enterprise use, while IPRoyal and Webshare offer the best value for individuals and small teams."}},{"@type":"Question","name":"What is a residential proxy?","acceptedAnswer":{"@type":"Answer","text":"A residential proxy routes your traffic through real home IP addresses, making requests appear as genuine user traffic. They are ideal for web scraping, ad verification, and bypassing geo-restrictions."}},{"@type":"Question","name":"How much do proxies cost in 2026?","acceptedAnswer":{"@type":"Answer","text":"Proxy prices range from free tiers to $10+/GB for premium residential IPs. Datacenter proxies are cheapest at $0.50-$2/IP/month, while residential proxies typically cost $2-$10/GB."}},{"@type":"Question","name":"Are proxies legal?","acceptedAnswer":{"@type":"Answer","text":"Yes, proxies are legal in most countries when used for legitimate purposes like web scraping public data, privacy protection, and market research."}}]}</script>
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"ItemList","name":"Best Proxy Providers 2026","numberOfItems":10,"itemListElement":[{"@type":"ListItem","position":1,"name":"Bright Data","url":"https://www.toptierproxy.com/reviews/bright-data"},{"@type":"ListItem","position":2,"name":"Oxylabs","url":"https://www.toptierproxy.com/reviews/oxylabs"},{"@type":"ListItem","position":3,"name":"Smartproxy","url":"https://www.toptierproxy.com/reviews/smartproxy"},{"@type":"ListItem","position":4,"name":"IPRoyal","url":"https://www.toptierproxy.com/reviews/iproyal"},{"@type":"ListItem","position":5,"name":"Webshare","url":"https://www.toptierproxy.com/reviews/webshare"},{"@type":"ListItem","position":6,"name":"SOAX","url":"https://www.toptierproxy.com/reviews/soax"},{"@type":"ListItem","position":7,"name":"Decodo","url":"https://www.toptierproxy.com/reviews/decodo"},{"@type":"ListItem","position":8,"name":"NetNut","url":"https://www.toptierproxy.com/reviews/netnut"},{"@type":"ListItem","position":9,"name":"Rayobyte","url":"https://www.toptierproxy.com/reviews/rayobyte"},{"@type":"ListItem","position":10,"name":"Proxy-Seller","url":"https://www.toptierproxy.com/reviews/proxy-seller"}]}</script>"""

content = content.replace('</head>', schemas + '\n</head>')

with open('/var/www/toptierproxy/index.html', 'w') as f:
    f.write(content)

print("Done!")
