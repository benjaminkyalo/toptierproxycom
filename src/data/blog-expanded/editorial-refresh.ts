import type { BlogExpansion } from "./types";

export const editorialRefresh: Record<string, BlogExpansion> = {
  "how-to-set-up-install-proxy-step-by-step-guide-2026": {
    "title": "How to Set Up a Proxy: Windows, Mac, Chrome and Firefox",
    "description": "Configure proxy settings on Windows 11, macOS, Chrome and Firefox. Verify your public IP, fix authentication errors, and safely remove a proxy.",
    "excerpt": "Start with the settings for your actual browser or app, then verify the connection. This guide explains proxy setup, common failures and what a proxy does not protect.",
    "category": "Education",
    "tags": [
      "how to set up a proxy",
      "proxy settings",
      "Windows 11 proxy settings",
      "Chrome proxy settings",
      "Firefox proxy settings",
      "proxy authentication",
      "remove proxy settings"
    ],
    "dateModified": "2026-10-15",
    "omitLongForm": true,
    "body": [
      {
        "heading": "Quick answer: how do you set up a proxy?",
        "paragraphs": [
          "Get the protocol, host, port and authentication method from your network administrator or proxy provider. On Windows 11, open Settings > Network & internet > Proxy. On a Mac, open System Settings > Network > your active connection > Details > Proxies. Enter the endpoint, save the settings, and verify the public IP in the same app you intend to use.",
          "Chrome normally follows the operating system proxy configuration on Windows and macOS. Firefox can use its own settings. Neither an operating system proxy setting nor a changed IP proves that every application, DNS query or WebRTC connection on your device uses that proxy. Choose the scope first; do not treat a browser proxy as a VPN."
        ]
      },
      {
        "heading": "Before you start: understand each proxy setting",
        "paragraphs": [
          "The host is the server address, such as proxy.example.com. The port is a separate number supplied by the operator. When the interface has separate host and port fields, do not paste a complete URL, credentials or a protocol prefix into the host field unless the product explicitly requests it. Example values in this guide are placeholders, not working proxy credentials.",
          "Authentication usually means a username and password or an allowlisted public IP. With IP allowlisting, register the public IP of the connection that will reach the proxy, not a private address such as 192.168.1.10. Mobile networks and changing home connections can invalidate that allowlist. Never share credentials in a screenshot, public support thread or shareable link.",
          "HTTP proxies commonly tunnel HTTPS website connections using CONNECT. An HTTPS destination does not necessarily mean the connection to the proxy itself uses TLS. Confirm the endpoint protocol with the operator. SOCKS5 is a different protocol, and support for authentication and remote DNS varies by client. A PAC file is a script that chooses a proxy for matching destinations; only use one from a trusted administrator."
        ]
      },
      {
        "heading": "Windows 11: manual proxy setup and how to turn it off",
        "paragraphs": [
          "Open Settings > Network & internet > Proxy. Under Manual proxy setup, choose Set up beside Use a proxy server. Enable it, enter the address and port, review any bypass exceptions, and save. Older Windows versions may show a direct toggle rather than a Set up dialog. For an administrator-provided PAC URL, use the setup-script option instead of inventing a manual server.",
          "An application may prompt for credentials when it reaches the proxy. The Windows manual screen is not a universal username/password store, and not every application supports the same authentication method. If the browser cannot authenticate, consult the provider or administrator about supported credentials or IP allowlisting rather than repeatedly changing unrelated network settings.",
          "To remove a manual proxy, return to the same screen, disable Use a proxy server and save. Disable a setup script only if it is not required by your organization. Managed settings may be enforced by policy. If settings return after you disable them on a personal computer, inspect installed extensions, VPN software and security software before assuming the proxy provider caused it."
        ]
      },
      {
        "heading": "macOS: configure the active Wi-Fi or Ethernet service",
        "paragraphs": [
          "Open System Settings > Network, select the active service, choose Details and then Proxies. Enable the relevant protocol, supply the server and port, and enter credentials if the selected proxy option supports them. Confirm with OK or Done as shown by your macOS version. Older macOS releases use System Preferences and may require Apply.",
          "Proxy settings belong to the selected network service. Configuring Wi-Fi does not automatically configure Ethernet. Likewise, enabling only Web Proxy (HTTP) is not the same as configuring all HTTPS destinations. Follow the operator's instructions for Web Proxy, Secure Web Proxy or SOCKS Proxy; the menu labels alone do not establish the endpoint's encryption guarantees.",
          "To turn the proxy off, return to the same service and disable the proxy options you enabled. Reopen the browser and test again. If one application continues using a proxy, inspect its own settings and any background network software. Do not remove a managed corporate configuration without approval."
        ]
      },
      {
        "heading": "Chrome and Edge: use system settings or a reviewed extension",
        "paragraphs": [
          "On Windows and macOS, Chrome and Edge normally use system network proxy settings. In Chrome, search Settings for proxy or open Settings > System > Open your computer's proxy settings. The button opens the operating system controls; it is not a separate Chrome-only proxy form. Enterprise policies and proxy extensions can override the normal behavior.",
          "For browser-only control, a proxy management extension may be appropriate, but inspect its publisher, permissions and maintenance history. An extension that controls routing can access sensitive browsing information. Prefer a reviewed extension or an administrator-managed configuration, and remove conflicting switchers. A normal browser profile alone does not create independent proxy routing.",
          "Keep HTTPS certificate verification enabled. A certificate warning is not a routine step to click through when setting up a commercial proxy. If an organization legitimately requires TLS inspection, installation of its certificate should follow its documented, approved process. Do not install a random certificate supplied by an unknown proxy operator."
        ]
      },
      {
        "heading": "Firefox: configure a browser-only HTTP or SOCKS proxy",
        "paragraphs": [
          "Open Settings > General, scroll to Network Settings and select Settings. Choose Manual proxy configuration to enter an HTTP proxy or SOCKS host and port. The dialog also offers system proxy settings and automatic configuration. Read the current labels carefully: using the same proxy for HTTPS destinations and choosing SOCKS v5 are different options.",
          "For SOCKS v5, Firefox exposes a Proxy DNS when using SOCKS v5 option. Enable it when you want destination hostnames resolved through that proxy and your endpoint supports the configuration. This is a Firefox setting, not a promise about every other program on the device. Authentication support also differs by protocol; verify the exact combination before buying a plan.",
          "Review the No proxy for exceptions. A destination that matches an exception will not take the same route as an ordinary website. To undo the change, select No proxy or Use system proxy settings according to your intended configuration and save. Then test inside Firefox rather than relying on a result from Chrome."
        ]
      },
      {
        "heading": "Verify the proxy: a repeatable before-and-after check",
        "paragraphs": [
          "First record the public IP with the proxy disabled. Enable the proxy, open our What Is My IP tool in that same browser and compare the result. A different public IP shows the route used for that specific request. With a corporate proxy or a proxy sharing your existing egress address, the IP may not change; ask the administrator what result to expect.",
          "Next, load an HTTPS page, confirm there are no certificate warnings, and check the provider dashboard for session or traffic evidence if available. A country or city label comes from a geolocation database and can be inaccurate; it does not prove the physical location of the device or guarantee access to a regional service.",
          "Use the Browser Fingerprint Checker for browser-exposed signals and available WebRTC candidate information. Treat a missing candidate as inconclusive, not as proof that no leak is possible. The IP tool does not independently test DNS routing, and a timezone mismatch is not proof of an IP leak. DNS verification requires an appropriate DNS test or network observation in the actual client."
        ]
      },
      {
        "heading": "Troubleshooting: match the symptom to the next check",
        "paragraphs": [
          "Change one variable at a time. Save the exact error message and test a destination you are authorized to access. A reachable proxy and a destination refusing a request are separate problems; buying another pool before identifying the error can waste money."
        ],
        "list": [
          "407 Proxy Authentication Required: check credentials, account status and the allowed authentication method. Confirm the allowlisted source IP if applicable.",
          "Connection refused or timeout: verify host, port and protocol; check local firewall rules and whether the endpoint is reachable from this network.",
          "ERR_PROXY_CONNECTION_FAILED or a tunnel error: remove conflicting extensions and compare endpoint details with the operator's instructions.",
          "403 from the destination: authentication to the proxy may have succeeded. Check permissions and the target's access policy; an IP change does not grant access.",
          "429 Too Many Requests: slow down, respect Retry-After where present and reduce concurrency. Rotating IPs is not a substitute for permission.",
          "Unchanged public IP: confirm the correct browser, active configuration and bypass rules. Some apps ignore system proxy settings.",
          "Certificate error: stop and investigate the certificate chain or endpoint configuration. Never disable verification as a quick fix."
        ]
      },
      {
        "heading": "Python and command-line clients need their own configuration",
        "paragraphs": [
          "Requests and command-line clients do not necessarily inherit the graphical operating system setup. For Python Requests, pass a proxies mapping with http and https destination keys. An HTTP proxy can be the value for both keys when it supports CONNECT. Use a request timeout and handle non-success status codes; a request that never finishes is not a useful verification test.",
          "Keep the proxy URL in an environment variable or secret manager rather than committed source code. If credentials are embedded in a URL, encode the username and password separately so reserved characters such as @, : and / do not change its meaning. Avoid logging that URL in exceptions.",
          "For curl, the distinction between socks5:// and socks5h:// matters: socks5h requests proxy-side hostname resolution. Do not assume that convention works identically in every library. Consult the client's documentation and test the same destination through the same protocol that your production job will use."
        ]
      },
      {
        "heading": "Choose the minimum setup you actually need",
        "paragraphs": [
          "For workplace connectivity, use the organization's approved endpoint. For testing your own website, an application-specific proxy may be enough. For authorized location testing, choose the required country and verify it rather than purchasing the largest residential pool. Static or sticky sessions can help maintain a multi-step workflow, but their duration and availability depend on the operator.",
          "Compare proxy providers only after confirming supported protocols, authentication, usage limits and refund terms. Our comparison page and cost calculator can help evaluate traffic costs; neither establishes that a provider will work on a particular target. Affiliate offers on this page are commercial links and do not replace those checks.",
          "This guide is an editorial synthesis of platform documentation, not a claim that every OS version, network and provider has been independently tested. Follow the sources below for current interface details. A proxy changes routing for participating traffic; it does not automatically encrypt all device traffic, erase browser identity or make restricted activity permissible."
        ]
      }
    ],
    "faq": [
      {
        "q": "What are proxy settings?",
        "a": "They tell a participating app which intermediary server to use, typically through a host, port, protocol and authentication method. Exceptions and PAC scripts can route different destinations differently."
      },
      {
        "q": "Does a Windows proxy route every app?",
        "a": "No. Many apps use the system settings, but some use independent network configuration or ignore them. Test the actual browser or app you plan to use."
      },
      {
        "q": "How do I change proxy settings in Chrome?",
        "a": "On Windows and macOS, open Chrome Settings > System > Open your computer's proxy settings. Chrome normally follows those settings unless an extension or enterprise policy overrides them."
      },
      {
        "q": "How do I remove a proxy?",
        "a": "Disable the manual proxy or setup script in the configuration you changed. In Firefox, select No proxy or the intended system setting. Check browser extensions and managed policies if it returns."
      },
      {
        "q": "Does SOCKS5 prevent DNS leaks?",
        "a": "Not automatically. Remote hostname resolution depends on the client. Firefox offers a proxy-DNS option for SOCKS v5; curl distinguishes socks5h from socks5. Test the exact client."
      },
      {
        "q": "Is a proxy the same as a VPN?",
        "a": "No. A proxy generally routes selected applications or protocols. A VPN commonly creates a network tunnel with broader routing, although split tunneling and exclusions can still leave traffic outside it."
      }
    ],
    "sources": [
      {
        "label": "Microsoft: use a proxy server in Windows",
        "url": "https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-a-proxy-server-in-windows"
      },
      {
        "label": "Apple: change proxy settings on Mac",
        "url": "https://support.apple.com/guide/mac-help/change-proxy-settings-on-mac-mchlp2591/mac"
      },
      {
        "label": "Mozilla: connection settings in Firefox",
        "url": "https://support.mozilla.org/en-US/kb/connection-settings-firefox"
      },
      {
        "label": "Chromium: proxy support and authentication",
        "url": "https://chromium.googlesource.com/chromium/src/+/HEAD/net/docs/proxy.md"
      },
      {
        "label": "Requests: proxies and authentication",
        "url": "https://requests.readthedocs.io/en/latest/user/advanced/#proxies"
      },
      {
        "label": "curl: proxy protocol options",
        "url": "https://curl.se/docs/manpage.html"
      }
    ],
    "relatedLinks": [
      {
        "label": "Check the public IP this browser exposes",
        "url": "/resources/what-is-my-ip"
      },
      {
        "label": "Inspect browser fingerprint and WebRTC signals",
        "url": "/resources/fingerprint-checker"
      },
      {
        "label": "Compare proxy providers and plan limitations",
        "url": "/compare"
      },
      {
        "label": "Estimate retry-adjusted proxy traffic cost",
        "url": "/resources/cost-calculator"
      }
    ],
    "readTime": "9 min"
  },
  "ai-browser-agents-2026-atlas-comet-proxies-data-collection": {
    "title": "AI Web Scraping: Tools, Workflow and Reliable JSON Extraction",
    "description": "Learn when to use AI web scraping, browser agents or traditional parsers. Build a permission-aware workflow with source evidence and validated JSON.",
    "excerpt": "AI can extract meaning from messy pages, but it cannot guarantee accurate facts or permission to collect them. Choose the simplest workflow that produces verifiable records.",
    "category": "Engineering",
    "tags": [
      "ai web scraping",
      "web scraping tools",
      "LLM extraction",
      "structured outputs",
      "browser agents",
      "scraping data validation",
      "prompt injection"
    ],
    "dateModified": "2026-10-15",
    "omitLongForm": true,
    "body": [
      {
        "heading": "Quick answer: what is AI web scraping?",
        "paragraphs": [
          "AI web scraping uses a model to interpret content collected from websites, for example turning a product description into structured fields or choosing a browser action. It is not one universal scraper. Fetching a page, rendering JavaScript, extracting fields and validating records are separate jobs, and only some of them benefit from a model.",
          "For stable HTML, start with a parser. For JavaScript content, add a browser such as Playwright. For inconsistent wording across permitted sources, add schema-constrained model extraction. Use a browser agent only when the authorized workflow genuinely needs adaptive navigation. More autonomy means more actions to audit, not automatically more accurate data.",
          "This guide focuses on trustworthy extraction rather than another ranked list of supposedly best tools. It does not claim hands-on speed tests, private usage statistics or a universal winner. The existing AI scraping stack article covers infrastructure; here the goal is deciding where a model helps and proving each extracted field."
        ]
      },
      {
        "heading": "Choose a tool by the job, not the AI label",
        "paragraphs": [
          "A traditional crawler such as Scrapy manages requests, scheduling and extraction rules. It is a good candidate for repeatable collection from pages with stable structure. BeautifulSoup is a parser rather than a complete crawling service. Playwright drives a real browser and can access content that appears after JavaScript runs, but it does not itself decide whether a value is factually correct.",
          "Services such as Firecrawl expose collection and extraction interfaces; Browse AI targets monitored, browser-based workflows. These are different operational models, not equivalent products with interchangeable limits. Before committing, inspect current documentation for rendering, supported inputs, credits, retention, export format and permitted use. No plan prices or success rates are assumed here.",
          "A consumer assistant such as ChatGPT or an AI browser can help inspect a page, but that does not make it a dependable scheduled export pipeline. Assess reproducibility, pagination, audit records and failure handling separately. A model generating a scraping script is also different from a model actually extracting records at runtime."
        ],
        "list": [
          "Stable HTML and fixed fields: deterministic parsing first.",
          "JavaScript-rendered content: browser rendering, then deterministic extraction where possible.",
          "Different layouts or narrative descriptions: model extraction with a fixed schema and evidence.",
          "Authorized multi-step navigation: bounded browser automation; add an agent only when scripted steps are insufficient.",
          "Published API or licensed feed available: evaluate that before scraping the website."
        ]
      },
      {
        "heading": "Define the record before you fetch the page",
        "paragraphs": [
          "Write down the exact fields, allowed types and missing-value behavior. A product record might contain source_url, fetched_at, title, price_amount, currency, availability and evidence. Define whether price_amount is a number or decimal string, how sale prices differ from list prices, and which currency format is allowed. Do not leave these decisions to a prompt.",
          "Require unknown or absent fields to be null rather than guessed. A page saying Contact sales does not support an invented numeric price. A page showing $49 without a country or currency context may need review. A price range, monthly installment and unit price are separate values; forcing them into one number can create a clean-looking but misleading dataset.",
          "Keep an evidence excerpt for each important field and a link to the source. An extraction result is easier to audit when a reviewer can see the exact text that supports it. Record the collection time and locale because the same page can change by country, session, inventory state or time."
        ]
      },
      {
        "heading": "A practical workflow: collect, clean, extract, validate",
        "paragraphs": [
          "First check whether collection is allowed and necessary. Prefer an official API, export or agreement when available. Define a narrow set of approved pages rather than giving an agent unrestricted browsing access. Collect only the fields needed for the business question.",
          "Fetch the page using a normal client if the content is already present in HTML. Render it only when the required information appears after JavaScript executes. Identify useful page regions, such as the product details panel, and remove unrelated navigation and repeated footer text. Preserve labels, table relationships and links that are needed to interpret the data.",
          "Send the relevant text to the extractor with a fixed schema and explicit instructions to treat page content as untrusted data. Validate the returned structure, then validate the values against the evidence. Store the approved record with provenance. Failed or ambiguous records should enter a review queue rather than silently disappearing."
        ],
        "list": [
          "Input: an approved source URL and a documented collection purpose.",
          "Collection: bounded fetch or browser rendering with timeouts and rate limits.",
          "Normalization: relevant text or DOM regions without destroying field context.",
          "Extraction: fixed fields, explicit null behavior and evidence requirements.",
          "Validation: schema, business rules, source agreement and duplicate checks.",
          "Output: versioned records plus a failure and review log."
        ]
      },
      {
        "heading": "Structured JSON is not the same as a truthful answer",
        "paragraphs": [
          "Structured Outputs can constrain supported model responses to a JSON Schema. That helps downstream code depend on consistent keys and types. It does not guarantee that the model found the right price, read the correct table row or used the correct source. A perfectly valid record can still contain the wrong facts.",
          "OpenAI documents refusals and other conditions that must be handled separately. Check the response status, refusal information and completeness before treating output as a record. Validate business rules after structural validation: price must be non-negative, currency must be supported, evidence must exist, and an availability value must map to text actually shown on the page.",
          "Separate inference from extraction. If you classify a product category from a description, label that field as inferred and review it under a different standard from an exact displayed price. A model confidence score is not a substitute for agreement with a human-labeled evaluation set."
        ]
      },
      {
        "heading": "Browser agents: useful boundaries and dangerous shortcuts",
        "paragraphs": [
          "An agent can choose steps from a changing page, but an unexpected button or malicious instruction can redirect its behavior. For routine extraction, keep a deterministic path wherever possible. Playwright recommends locators based on user-facing attributes; getByRole and labels often express intent better than brittle chains of CSS selectors.",
          "Do not let a data-collection agent send messages, purchase products, change account settings or submit forms unless that action is explicitly authorized and separately controlled. Use a restricted account or isolated context when authentication is necessary. Keep read-only collection separate from write-capable tools.",
          "A self-healing selector is a proposal, not proof of correctness. If an old price selector stops matching and a model suggests a replacement, test it against saved examples and evidence before deployment. An agent that repairs a selector to the shipping price can appear successful while corrupting every record."
        ]
      },
      {
        "heading": "Prompt injection and URL safety belong in the design",
        "paragraphs": [
          "A webpage may contain instructions such as ignore your task or send credentials to this address. Those instructions are page content, not user authorization. Do not put API keys, private cookies or unrelated private documents in the extraction context. Limit available tools and require approval for consequential actions.",
          "If the model can suggest URLs, validate them before fetching. Restrict schemes and approved hosts, reject loopback and private-network destinations where inappropriate, and re-check redirect destinations. Otherwise a collection feature can become an unintended path to internal services. Sanitizing text alone does not create a complete security boundary.",
          "Do not execute code or shell commands extracted from a page. Treat returned JSON as data rather than executable instructions. OWASP's guidance on prompt injection and server-side request forgery is a useful starting point for designing layered controls; no single instruction in a prompt guarantees protection."
        ]
      },
      {
        "heading": "Do you need proxies for AI web scraping?",
        "paragraphs": [
          "Not always. A low-volume permitted crawl, a licensed API or a job on your own website may work without one. A proxy changes the network route; it does not render JavaScript, repair selectors, validate facts or grant permission. An LLM likewise does not solve a denied network request.",
          "For authorized geographic testing, choose an exit in the required region and record that region with the result. For a multi-step session, a stable route may matter more than frequent rotation. Residential proxies are an option for particular requirements, not a mandatory purchase for every AI project.",
          "If a destination returns 429, respect rate limits and Retry-After where available. If it denies access, review permission and collection alternatives. Compare scraping APIs when you need managed collection, but evaluate their data handling and contractual limits as well as price. Affiliate links are disclosed commercial recommendations, not evidence of access rights."
        ]
      },
      {
        "heading": "Measure cost per valid record, including failures",
        "paragraphs": [
          "Count records that pass your checks, not merely successful HTTP responses or parseable JSON. Track missing required fields, wrong values, duplicates, stale records and manual-review rates. Separate a page fetch failure from an extraction failure so improvements target the right stage.",
          "A useful planning equation is total collection, rendering, model, retry, storage and review cost divided by accepted records. Our proxy cost calculator estimates the network component under its stated assumptions; it does not include model tokens or staff time. Keep those extra costs in your own estimate.",
          "Reduce wasted work by caching permitted unchanged content, extracting deterministic fields without a model, and sending only relevant text to the model. Evaluate screenshots only when they add information that useful DOM text cannot provide. No universal latency or token-cost multiplier is quoted because page size, model and workflow change the outcome."
        ]
      },
      {
        "heading": "Evaluate on saved examples before scheduling production runs",
        "paragraphs": [
          "Create a small, manually labeled evaluation set that covers ordinary pages and known edge cases: missing price, multiple currencies, price ranges, sold-out products, duplicate URLs, pagination, localized text and a changed layout. Include page snapshots so results can be compared against the same evidence, subject to your retention and licensing obligations.",
          "Run a parser-only baseline, then add model extraction only where the baseline fails. Compare exact field agreement, completeness, review effort and total cost. Keep model and prompt versions with the output so a later change is traceable. Do not describe an illustrative workflow as an independently benchmarked result.",
          "When a pipeline changes, test the change on those examples before collecting new data. Monitor sudden increases in null values or implausible price changes. Prefer a visible failure and review queue to fabricated data that looks complete. That is the standard that makes an AI-assisted dataset useful to customers and to anyone who needs to verify a claim."
        ]
      },
      {
        "heading": "Permissions, privacy and the next step",
        "paragraphs": [
          "Publicly visible does not automatically mean unrestricted reuse. Consider terms, copyright, personal-data rules, access controls and the purpose of collection. RFC 9309 explains the robots exclusion protocol and explicitly distinguishes it from access authorization. Robots instructions are important crawler guidance, not a blanket legal license.",
          "Avoid collecting personal data that the task does not need. Set retention limits, access controls and deletion procedures for both page snapshots and model inputs. A hosted extraction service may process content outside your own environment; inspect its current terms and privacy controls before sending sensitive material.",
          "Start with one approved source, one record schema and a human-reviewed evaluation set. Expand only after the records are reliable. The sources below document the underlying capabilities and limitations; this article intentionally does not invent adoption numbers, provider speed rankings or promises that AI scraping will bypass every restriction."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can ChatGPT scrape a website?",
        "a": "It can help write code or analyze supplied content; browsing and tool access depend on the product and configuration. A dependable collection pipeline still needs permitted fetching, pagination, validation and export."
      },
      {
        "q": "What is the best AI web scraping tool?",
        "a": "There is no universal winner. Match stable pages to parsers, JavaScript pages to browser rendering, varied narrative content to schema-based extraction, and managed collection to a service whose limits and data handling fit the job."
      },
      {
        "q": "Does structured output prevent hallucinations?",
        "a": "No. It can enforce the supported output structure, but values can still be incorrect. Validate facts against source excerpts, handle refusals and incomplete responses, and review ambiguous fields."
      },
      {
        "q": "Do AI scrapers need residential proxies?",
        "a": "Not inherently. Network routing, permission, geographic requirements and session needs determine whether a proxy is appropriate. Models and proxies solve different parts of a workflow."
      },
      {
        "q": "Is AI web scraping legal?",
        "a": "It depends on the source, jurisdiction, access method, collected data and reuse. Public visibility and robots.txt do not provide a blanket license. Prefer authorized APIs or agreements and obtain legal advice when needed."
      },
      {
        "q": "How can I make AI extraction more accurate?",
        "a": "Use a narrow schema, preserve context, allow null for missing fields, retain evidence, validate business rules, and compare against manually labeled examples before changing models or prompts."
      }
    ],
    "sources": [
      {
        "label": "OpenAI: Structured Outputs and response limitations",
        "url": "https://developers.openai.com/api/docs/guides/structured-outputs"
      },
      {
        "label": "Playwright: best practices",
        "url": "https://playwright.dev/docs/best-practices"
      },
      {
        "label": "Scrapy: official documentation",
        "url": "https://docs.scrapy.org/en/latest/"
      },
      {
        "label": "Firecrawl: current product documentation",
        "url": "https://docs.firecrawl.dev/"
      },
      {
        "label": "Browse AI: product and workflow details",
        "url": "https://www.browse.ai/"
      },
      {
        "label": "OWASP: LLM prompt injection prevention",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html"
      },
      {
        "label": "OWASP: server-side request forgery prevention",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html"
      },
      {
        "label": "RFC 9309: robots exclusion protocol",
        "url": "https://www.rfc-editor.org/rfc/rfc9309.html"
      }
    ],
    "relatedLinks": [
      {
        "label": "Compare managed scraper APIs",
        "url": "/scraper-api"
      },
      {
        "label": "Read our Scrapy review",
        "url": "/scrapy-review"
      },
      {
        "label": "Estimate proxy bandwidth and retry costs",
        "url": "/resources/cost-calculator"
      },
      {
        "label": "Read the separate AI scraping infrastructure guide",
        "url": "/blog/ai-scraping-stack-2026-proxies-antidetect-browsers-automation"
      },
      {
        "label": "Understand web scraping legal considerations",
        "url": "/blog/is-web-scraping-legal"
      }
    ],
    "readTime": "9 min"
  },
  "ai-scraping-stack-2026-proxies-antidetect-browsers-automation": {
    "title": "AI Web Scraping in 2026: Tools, Data Quality, and Responsible Workflows",
    "description": "A practical guide to AI-assisted web scraping: choosing APIs, parsers, browser tools and language models while protecting data quality, privacy and access permissions.",
    "excerpt": "AI can help extract structured information, but it is only one part of a reliable collection workflow. Compare APIs, parsers, browser automation and model-based extraction, with checks for permission, quality and privacy.",
    "category": "Engineering",
    "tags": ["AI web scraping", "AI data extraction", "web scraping tools", "structured data extraction", "responsible web scraping", "scraping data quality"],
    "dateModified": "2026-11-16",
    "omitLongForm": true,
    "readTime": "12 min",
    "body": [
      {
        "heading": "What people mean by AI web scraping",
        "paragraphs": [
          "AI web scraping usually combines ordinary retrieval with one or more intelligent extraction steps. A crawler or approved API obtains content; a parser or language model turns it into fields; validation checks that the result is complete and plausible. The model does not make access permissible, guarantee that a page can be fetched, or make a wrong value true. Treat it as one replaceable stage in a data pipeline, not as a magic browser that can access every site.",
          "Start by writing down the decision the dataset should support. If the task is collecting a public product price, define the product identifier, currency, timestamp and treatment of promotions. If the task is summarizing a permitted set of documents, define the source list, citation format and retention period. A narrow schema and clear purpose make it easier to choose tools and spot errors than starting with a model name or a promise of scale."
        ]
      },
      {
        "heading": "Choose the access method before the extraction tool",
        "paragraphs": [
          "Check for an official API, export, data feed or written permission first. Read the applicable terms, authentication requirements and usage limits. A public page is not automatically licensed for every form of collection or reuse, and robots.txt is crawler guidance rather than an access grant. When the source requires an account or partner relationship, use the approved route and credentials; do not attempt to defeat access controls or anti-bot protections.",
          "For pages you are authorized to collect, record the source URL and retrieval time. Respect published rate limits, use conservative concurrency and back off when a service signals overload. If the site denies access, stop and seek permission or another source instead of cycling identities or network addresses. This keeps the workflow predictable and reduces the chance that a research project creates avoidable load or violates a site's rules."
        ]
      },
      {
        "heading": "Match the tool to the shape of the source",
        "paragraphs": [
          "Use an API when it provides the fields and rights your project needs. For stable HTML and a known structure, a conventional parser is usually easier to test, cheaper to run and more repeatable than asking a model to rediscover the same fields on every page. A browser automation tool is useful when an authorized site requires client-side rendering or a documented interactive workflow; it adds runtime cost and should not be introduced simply because it is fashionable.",
          "A language model can help with varied prose, inconsistent layouts or classification where a deterministic parser is brittle. Give it only the context needed for the task and require a defined output schema. Preserve the source excerpt that supports each extracted value. If the model cannot find a value, allow an explicit null or review state rather than encouraging it to fill gaps from general knowledge."
        ]
      },
      {
        "heading": "Build a pipeline that can explain every record",
        "paragraphs": [
          "A dependable pipeline separates discovery, retrieval, extraction, validation and storage. Keep the original source reference, fetch timestamp, parser or model version, and a compact evidence excerpt alongside normalized fields. Deduplicate records by a stable identifier rather than a display name. Store the currency and units explicitly, and preserve the raw value when a conversion or normalization is applied.",
          "Make failure visible. Distinguish a missing field from a failed request, an empty page, a source that changed format and a model refusal. Use bounded retries for transient network failures, but do not retry indefinitely or turn an access-denied response into a strategy for gaining access. Route ambiguous or high-impact records to human review. A small queue of honest exceptions is more valuable than a large table of plausible-looking guesses."
        ]
      },
      {
        "heading": "Measure extraction quality instead of trusting fluent output",
        "paragraphs": [
          "Create a manually checked evaluation set that represents the actual sources, including edge cases such as missing values, multiple currencies, ranges, duplicate listings and changed page layouts. Compare model output with the labeled values using field-level accuracy, completeness and evidence support. For numeric fields, add domain checks such as nonnegative prices or recognized currency codes. For dates, confirm timezone and locale assumptions before comparing strings.",
          "Run the same examples whenever the prompt, model, parser or source template changes. A fluent explanation is not evidence that a record is correct; measure the extracted fields. Track the share of records that need review, the rate of unsupported values and the cost per accepted record. If quality drops, pause expansion and investigate rather than hiding the change with more retries or a larger model."
        ]
      },
      {
        "heading": "Protect against prompt injection and unsafe content",
        "paragraphs": [
          "Web pages are untrusted input. A page can contain text that attempts to instruct an AI system, request secrets or change the task. Treat retrieved text as data, never as authority over the extraction instructions. Keep system rules separate from page content, give the model no tools or credentials it does not need, and validate the response against a strict schema before any downstream action.",
          "Do not let a model-generated URL trigger an unrestricted server-side fetch. If your application follows links, limit destinations to approved hosts, block private and local network addresses, and apply normal request timeouts and size limits. Avoid placing API keys, cookies or private documents in prompts unless the processing arrangement explicitly permits it. These controls reduce the impact of malicious content and accidental data exposure."
        ]
      },
      {
        "heading": "Handle personal data and retention deliberately",
        "paragraphs": [
          "Collect only fields that the stated purpose requires. Public availability does not remove privacy obligations, contractual restrictions or copyright considerations. Before collecting information about people, identify a lawful basis where required, document the purpose, minimize sensitive fields and provide a retention and deletion plan. If a project involves regulated or sensitive data, get qualified privacy and legal review before it goes live.",
          "Keep access to the dataset limited to people and services that need it. Set a deletion schedule for raw pages and prompts, and review whether a hosted model provider stores or reuses submitted content. Separate public source text from customer records and secrets. A short data-flow map can reveal that a seemingly simple extractor sends information to more vendors than the project owner expected."
        ]
      },
      {
        "heading": "Estimate total cost per usable record",
        "paragraphs": [
          "Model pricing is only one line item. Include fetching, browser runtime, storage, review time, failed records and maintenance when comparing approaches. A parser may take longer to build but be inexpensive to run on a stable source. A managed API can be more economical when it replaces substantial engineering, while model extraction can help on genuinely variable content but costs more if every result needs manual correction.",
          "Pilot a representative sample before committing to volume. Compare a simple baseline with the proposed AI-assisted path on the same permitted pages. Report the number of accepted records, evidence coverage, review minutes and total cost. Do not advertise an illustrative pilot as an independent benchmark or promise universal success against protected websites. The right option is the one that meets quality, authorization and operating-cost requirements together."
        ]
      },
      {
        "heading": "A practical launch checklist",
        "paragraphs": [
          "Before launch, confirm the source is authorized, the access method follows its terms, the schema defines missing values, and a labeled test set measures the fields that matter. Decide what happens when pages change, a request is denied or model output fails validation. Assign an owner to review errors and set a limit for retries, concurrency, spending and data retention.",
          "Begin with one source and a small sample. Preserve evidence, compare results with a human-checked baseline, and expand only after the workflow remains reliable through ordinary changes. If permission is unclear or the source blocks automated access, pause and use an official API, a licensed dataset or a direct agreement. Reliable AI-assisted collection is measured by useful, supportable records—not by how many requests a system can send."
        ]
      }
    ],
    "faq": [
      { "q": "What is AI web scraping?", "a": "It is a collection workflow that may use language models to classify or extract fields from content retrieved through an authorized source. Retrieval, permissions, validation and data handling remain the responsibility of the workflow." },
      { "q": "Can AI scrape any website automatically?", "a": "No. A model does not grant access or override a site's terms, authentication or technical restrictions. Use an official API, permission or another authorized source, and stop when access is denied." },
      { "q": "Should I use an LLM or a normal parser?", "a": "Use a parser for stable, structured pages and an API when it provides the needed data. Consider a model for variable content, then validate each field against source evidence and a labeled test set." },
      { "q": "How do I prevent AI extraction errors?", "a": "Define a narrow schema, allow missing values, preserve evidence, validate domain rules and compare output with manually labeled examples. Fluent text alone is not proof of correctness." },
      { "q": "Is AI web scraping legal?", "a": "It depends on the source, jurisdiction, data, access method and intended use. Public visibility and robots.txt are not blanket permission; review the applicable terms and obtain legal advice when needed." },
      { "q": "Do AI scraping workflows need proxies?", "a": "Not inherently. Use a proxy only for an authorized network or geographic requirement. It does not provide permission or make a denied request acceptable." }
    ],
    "sources": [
      { "label": "RFC 9309: Robots Exclusion Protocol", "url": "https://www.rfc-editor.org/rfc/rfc9309.html" },
      { "label": "Scrapy documentation: downloader middleware", "url": "https://docs.scrapy.org/en/latest/topics/downloader-middleware.html" },
      { "label": "Playwright documentation", "url": "https://playwright.dev/docs/intro" },
      { "label": "Firecrawl documentation", "url": "https://docs.firecrawl.dev/" },
      { "label": "OWASP: LLM Prompt Injection Prevention Cheat Sheet", "url": "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html" },
      { "label": "OWASP: Server-Side Request Forgery Prevention Cheat Sheet", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html" }
    ],
    "relatedLinks": [
      { "label": "Compare managed scraper APIs", "url": "/scraper-api" },
      { "label": "Read our Scrapy review", "url": "/scrapy-review" },
      { "label": "Review our testing methodology", "url": "/how-we-test" },
      { "label": "Estimate proxy bandwidth and retry costs", "url": "/resources/cost-calculator" }
    ]
  },
  "linkedin-scraping-2026-bot-crackdown-what-still-works": {
    "title": "LinkedIn Data Collection in 2026: APIs, Policies, and Safer Alternatives",
    "description": "Understand LinkedIn's published rules, official API access and lower-risk alternatives for business research. A practical guide to permission, privacy and data quality.",
    "excerpt": "LinkedIn research needs more than a technical setup. Start with official APIs or an approved data source, review the platform's current terms, and minimize personal data before collecting anything.",
    "category": "Research & Compliance",
    "tags": ["LinkedIn data collection", "LinkedIn API access", "LinkedIn scraping policy", "LinkedIn research alternatives", "business data compliance", "LinkedIn data privacy"],
    "dateModified": "2026-11-16",
    "omitLongForm": true,
    "readTime": "11 min",
    "body": [
      {
        "heading": "Start with the purpose, not an automation recipe",
        "paragraphs": [
          "Teams search for LinkedIn data collection to support recruiting, account research, market analysis or sales planning. Those goals do not all require collecting profile pages. Write down the exact fields, people or companies involved, the decision the data supports, and how long it must be retained. Then identify whether the information is available through an official API, an approved partner, a licensed provider or a source that permits the intended use.",
          "This guide focuses on compliant access and safer alternatives, not ways to bypass platform controls. A proxy, browser profile or automation framework cannot grant permission, make a restricted endpoint public or remove privacy obligations. If the intended method is unclear, pause before collecting personal information and ask the platform, your legal team or a qualified adviser for direction."
        ]
      },
      {
        "heading": "Check LinkedIn's current terms and product rules",
        "paragraphs": [
          "Read LinkedIn's current User Agreement and Professional Community Policies before designing a collection process. The terms and policies describe permitted account use and prohibited activity; their precise language can change. Do not rely on old blog posts, a vendor's marketing claims or a code sample as proof that a particular workflow is allowed. Review the agreement applicable to the account and product you actually use.",
          "Separate three questions: is the data accessible, does the platform authorize the method, and may your organization use the resulting data for its purpose? A page being visible to a signed-in member does not answer all three. Also consider the rules of any data provider, the expectations of the people represented in the data and the law in the locations involved."
        ]
      },
      {
        "heading": "Use official APIs and approved access when they fit",
        "paragraphs": [
          "LinkedIn provides APIs for specific products and use cases, but access may require an application, approval, member authorization or a particular partner relationship. Start with LinkedIn's developer documentation and the access path that matches your goal. Confirm available fields, retention limits, refresh behavior and whether the API permits the downstream analysis or storage you plan to perform.",
          "An API's existence does not mean every profile field is available or that every organization can call it. Build around the documented scope returned to your application. If an approval is required, request it rather than trying to reproduce an undocumented endpoint. For a one-time or small research task, a manual review process may be more appropriate than building a collector that creates ongoing data and compliance obligations."
        ]
      },
      {
        "heading": "Consider alternatives that reduce platform and privacy risk",
        "paragraphs": [
          "For company-level market research, use company websites, annual reports, public registries, industry associations and licensed business databases where their terms permit your use. For recruiting, consider LinkedIn's own recruiting products or an approved provider with a clear data provenance statement. For people who have directly engaged with your organization, use data they supplied and the consent or notice applicable to that relationship.",
          "A licensed provider is not automatically compliant simply because it sells a dataset. Ask where the data comes from, what rights support the transfer, how often records are updated, whether deletion requests propagate, and what restrictions apply to enrichment or outreach. Prefer providers that can explain provenance and honor correction and deletion obligations over a large but opaque dataset."
        ]
      },
      {
        "heading": "Minimize personal data and document the workflow",
        "paragraphs": [
          "If a permitted workflow includes information about people, collect only fields needed for a defined purpose. Avoid sensitive categories and speculative inferences. Set an access policy, retention period, correction route and deletion process before data enters a CRM or analytics system. Document the source, retrieval date, access basis and downstream recipients so that future users can understand the limits of the records.",
          "Privacy obligations depend on jurisdiction and context. Publicly accessible information can still be personal data. Depending on the organization and purpose, notice, a lawful basis, data subject rights, cross-border transfer safeguards or other requirements may apply. Involve privacy counsel for large-scale monitoring, sensitive information, automated decisions or cross-border processing rather than assuming that a public profile is unrestricted."
        ]
      },
      {
        "heading": "Keep quality, provenance and corrections visible",
        "paragraphs": [
          "Professional profiles change, and similar names can lead to mistaken matches. Store a source reference and timestamp with each record, distinguish directly observed facts from inferred fields, and provide a review path for uncertain matches. Do not present an old title or employer as current without a recent source. If a dataset is used to make decisions about a person, evaluate the consequences of errors and provide appropriate human review.",
          "Define when a record expires and how it will be refreshed through an authorized source. Track duplicates, missing fields and conflicts instead of silently overwriting them. A provenance trail helps analysts explain where a claim came from and gives the organization a way to correct outdated or inaccurate information. Keep deletion requests connected to downstream copies rather than removing only the original row."
        ]
      },
      {
        "heading": "Where proxies do—and do not—fit",
        "paragraphs": [
          "A proxy changes the network path for a connection. It does not create API permission, provide a lawful basis, authorize automation or make platform restrictions disappear. Buying residential or mobile traffic to continue after access is denied can increase cost and risk without resolving the underlying policy question. Do not rotate addresses or accounts to evade a block or rate limit.",
          "A proxy may have a legitimate role in an organization-approved test of its own service, a permitted regional quality check or another documented network requirement. In those cases, use infrastructure approved by the system owner, identify the test window and scope, and stop if the test causes unexpected impact. For ordinary market research, prefer official and licensed data sources over routing tricks."
        ]
      },
      {
        "heading": "A decision checklist for teams",
        "paragraphs": [
          "Before collecting LinkedIn-related data, answer these questions in writing: What decision requires the data? Are the fields available from an official API or approved source? Do the applicable terms allow the specific method and reuse? Does the data identify people, and what privacy obligations apply? Who can access the results, how long are they needed, and how will corrections or deletion requests be handled?",
          "If any answer is unknown, narrow the project or seek review before scaling. Pilot with the smallest dataset needed, measure match accuracy and freshness, and keep a human accountable for high-impact decisions. A workflow that uses less data and has clear provenance is easier to defend, maintain and correct than a large collection whose source and permissions cannot be explained."
        ]
      }
    ],
    "faq": [
      { "q": "Can I scrape LinkedIn in 2026?", "a": "Whether a specific collection method is permitted depends on LinkedIn's current terms, the access method, the data and applicable law. This guide does not provide bypass instructions. Review current platform rules and use an official API, approved partner or another authorized source." },
      { "q": "Does LinkedIn offer an API for profile data?", "a": "LinkedIn documents APIs for specific products and use cases, with access scopes and approval requirements that vary. Check the current developer documentation; do not assume all profile fields or all applications are eligible." },
      { "q": "Is publicly visible LinkedIn information free to reuse?", "a": "Not automatically. Platform terms, privacy law, copyright, contractual restrictions and the intended use may still apply. Public visibility alone is not a blanket license." },
      { "q": "Can proxies make LinkedIn data collection compliant?", "a": "No. A proxy changes the network route; it does not provide authorization or satisfy privacy obligations. Do not use proxies to evade platform restrictions or rate limits." },
      { "q": "What are safer alternatives to scraping profiles?", "a": "Consider official LinkedIn products and APIs, approved partners, licensed datasets with documented provenance, company websites and public registries, or data directly supplied by people with appropriate notice." },
      { "q": "What should a company record before using business-profile data?", "a": "Document the purpose, source, access basis, fields, retention period, permitted recipients, correction process and deletion workflow. Seek privacy or legal review when the scale or impact warrants it." }
    ],
    "sources": [
      { "label": "LinkedIn User Agreement", "url": "https://www.linkedin.com/legal/user-agreement" },
      { "label": "LinkedIn Professional Community Policies", "url": "https://www.linkedin.com/legal/professional-community-policies" },
      { "label": "LinkedIn developer documentation: getting access", "url": "https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access" },
      { "label": "LinkedIn Marketing API documentation", "url": "https://learn.microsoft.com/en-us/linkedin/marketing/community-management/community-management-api/overview" },
      { "label": "LinkedIn Help: data privacy and account controls", "url": "https://www.linkedin.com/help/linkedin/" },
      { "label": "European Commission: data protection in the EU", "url": "https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en" }
    ],
    "relatedLinks": [
      { "label": "Read our web scraping legal considerations", "url": "/blog/is-web-scraping-legal" },
      { "label": "Review our testing methodology", "url": "/how-we-test" },
      { "label": "Explore ethical proxy sourcing", "url": "/blog/ethical-residential-proxy-sourcing-2026" }
    ]
  }
};
