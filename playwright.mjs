// Configure an HTTP endpoint and the credentials from the dashboard in your environment.
// SOCKSNODE_PROXY='http://HOST:PORT' SOCKSNODE_USERNAME='â€¦' SOCKSNODE_PASSWORD='â€¦' node examples/playwright.mjs
import { chromium } from "playwright";

const endpoint = new URL(process.env.SOCKSNODE_PROXY);
if (!["http:", "https:"].includes(endpoint.protocol)) {
  throw new Error("Use an HTTP proxy endpoint for this example");
}
const server = `${endpoint.protocol}//${endpoint.hostname}:${endpoint.port}`;
const browser = await chromium.launch({
  proxy: {
    server,
    username: process.env.SOCKSNODE_USERNAME,
    password: process.env.SOCKSNODE_PASSWORD,
  },
});
try {
  const page = await browser.newPage();
  await page.goto("https://example.com", { waitUntil: "domcontentloaded" });
  console.log(await page.title());
} finally {
  await browser.close();
}
