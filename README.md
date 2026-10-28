# SocksNode Proxy Integration Examples

Practical, copyable examples for using SocksNode HTTP(S) and SOCKS5 endpoints with cURL, Python Requests, and Playwright.

**Read the guide:** [SocksNode Proxy Setup Examples](https://socksnode.github.io/socksnode-proxy-examples/)
**Product docs:** [Mobile proxy by the day](https://socksnode.com/en/mobile-proxies) Â· [Residential proxies](https://socksnode.com/en/residential-proxies) Â· [API docs](https://socksnode.com/en/docs)

## Examples

- [`examples/curl.sh`](examples/curl.sh) â€” send a request through an HTTP or SOCKS5 endpoint.
- [`examples/python_requests.py`](examples/python_requests.py) â€” use Requests with an environment-provided proxy.
- [`examples/playwright.mjs`](examples/playwright.mjs) â€” configure an authenticated HTTP proxy in Playwright.

## Mobile proxy facts

Mobile ports are rented by time, from a two-hour trial to longer terms. The base data allowance is 15 GB per port per day. Higher daily allowances are paid options; unlimited daily data is only available on eligible tiers. Locations depend on tier. See the [live product page](https://socksnode.com/en/mobile-proxies) for current availability, pricing, and limits.

## Credentials and responsible use

Set `SOCKSNODE_PROXY` to the endpoint copied from your dashboard. Store credentials in environment variables or a secret manager; never commit real credentials. Use proxies only for permitted, lawful workflows and respect destination-site terms, access controls, and privacy requirements.

Availability and third-party website behavior can change. These examples do not guarantee that a destination will accept a request.
