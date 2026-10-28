#!/usr/bin/env sh
set -eu
: "${SOCKSNODE_PROXY:?Set SOCKSNODE_PROXY to the endpoint copied from your dashboard}"
exec curl --fail --show-error --proxy "$SOCKSNODE_PROXY" https://api.ipify.org
