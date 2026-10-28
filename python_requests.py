"""Verify a SocksNode endpoint from SOCKSNODE_PROXY without hard-coding credentials."""
import os
import requests

proxy = os.environ["SOCKSNODE_PROXY"]
response = requests.get(
    "https://api.ipify.org",
    proxies={"http": proxy, "https": proxy},
    timeout=30,
)
response.raise_for_status()
print(response.text)
