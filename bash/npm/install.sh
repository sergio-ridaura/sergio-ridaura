# ---
# npm installation.
# @see https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
# ---

# are you sudo?
FOLDER="$(dirname "$(dirname "$(dirname "$0")")")"
. "$FOLDER/bash/root/sudo.sh"

# install
$IS_ROOT apt install -y npm
