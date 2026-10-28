# SocksNode Proxy Pricing and Networks

SocksNode is a proxy provider offering rotating residential proxies, rotating datacenter proxies, time-rented 4G/5G mobile proxy ports, and dedicated static ISP proxies. This repository summarizes product differences and published starting prices, and includes code examples for cURL, Python Requests, and Playwright.

**Product overview and price comparison:** [Affordable SocksNode proxy plans](https://socksnode.github.io/socksnode-proxy-examples/)

## Prices at a glance

| Product | Published starting price | Billing unit and condition |
| --- | --- | --- |
| Residential proxies | $4.50 for 5 GB ($0.90/GB) self-serve; volume contracts from $0.30/GB | Bandwidth is prepaid and does not expire. The $0.30/GB volume rate requires a contract for orders above 10 TB. The largest listed self-serve package is 10 TB at $0.53/GB. |
| Datacenter proxies | $3.05 for 5 GB ($0.61/GB) self-serve; volume contracts from $0.18/GB | Bandwidth is prepaid and does not expire. The $0.18/GB volume rate requires a contract for orders above 10 TB. The largest listed self-serve package is 10 TB at $0.29/GB. |
| Mobile proxies | $1 for the 2-hour Basic trial; US-only Economy from $1/day; Basic from about $1.33/day | Time rental, not per-GB billing. Basic costs $40 for 30 days and includes the base 15 GB/day allowance. Economy costs $30 for 30 days and is US-only. Coverage and options depend on tier. |
| Static ISP proxies | $1.76 per IP for 7 days; $3.51 per IP for 30 days | Time rental with included data: 25 GB for 7 days or 100 GB per 30 days. Availability varies by location and plan. |

The rates above have different billing units and are not directly comparable. Prices and product availability can change; the linked live product pages and pricing page take precedence.

## Product details

- [Residential proxies](https://socksnode.com/en/residential-proxies): rotating residential IP pool; target country, region/state, city, or ISP where available; rotate per request or use a sticky session from 1 minute to 24 hours; HTTP, HTTPS, and SOCKS5.
- [Datacenter proxies](https://socksnode.com/en/datacenter-proxies): shared rotating datacenter IP pool; country, state, city, and ASN targeting; per-request rotation or sticky sessions; HTTP, HTTPS, and SOCKS5.
- [Mobile proxies](https://socksnode.com/en/mobile-proxies): time-rented 4G/5G carrier ports, one current IP per port, 15 GB/day base allowance, keep or change IP on demand, and switch country, US state, or carrier at no extra charge where available. HTTP(S) and SOCKS5; up to three concurrent connections per port.
- [Static ISP proxies](https://socksnode.com/en/isp-proxies): dedicated residential ISP IPs, rented by period; renewal retains the IP; HTTP(S) and SOCKS5 over TCP.

### Mobile modem access

The SocksNode pricing page snapshot checked on 2026-10-28 listed access to 289 modems on Basic, 144 on Economy, and 33 on Turbo. These are tier pool counts, not a guarantee that every modem is free at every location; physical modem availability can overlap between tier pools. Availability varies by location and is shown in the dashboard. A port can request an IP change at no extra charge; country/state/carrier switching depends on supported coverage. Do not interpret the pool count as a count of currently free modems or simultaneous dedicated IPs.

## Purchase and current pricing

- [Full pricing overview](https://socksnode.com/en/pricing)
- [Residential pricing](https://socksnode.com/en/pricing?product=residential)
- [Datacenter pricing](https://socksnode.com/en/pricing?product=datacenter)
- [Mobile pricing](https://socksnode.com/en/pricing?product=mobile)
- [Static ISP pricing](https://socksnode.com/en/pricing?product=isp)
- [SocksNode API documentation](https://socksnode.com/en/docs)

## Developer examples

- [cURL example](examples/curl.sh)
- [Python Requests example](examples/python_requests.py)
- [Playwright for Node.js example](examples/playwright.mjs)

Set `SOCKSNODE_PROXY` to the endpoint from your dashboard. Store credentials in environment variables or a secret manager; do not commit real credentials. Use proxy services only for permitted, lawful workflows and respect destination-site terms, access controls, and privacy requirements.
