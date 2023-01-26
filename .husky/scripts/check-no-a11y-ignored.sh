#!/bin/sh

# Set the color variable
RED='\033[0;31m'
# Clear the color after that
CLEAR='\033[0m'
if cat "$(dirname "$0")/../.eslintrc.pre-commit.js" |grep 'a11y'; then
  echo "${RED}Disabling av a11y regler er ikke tillatt i precommit linting${CLEAR}"
   exit 1
fi