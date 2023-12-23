# ---
# Update Node.js.
# @see https://nodejs.org/
# @see https://www.npmjs.com/package/n
# ---

# are you sudo?
FOLDER="$(dirname "$(dirname "$(dirname "$0")")")"
. "$FOLDER/bash/root/sudo.sh"

# update
$IS_ROOT npm install -g n
$IS_ROOT n lts
