# ---
# Node.js installation.
# @see https://nodejs.org/en/download
# ---

# are you sudo?
FOLDER="$(dirname "$(dirname "$(dirname "$0")")")"
. "$FOLDER/bash/root/sudo.sh"

# install
$IS_ROOT apt-get install -y nodejs
source "$(dirname "$0")/../npm/install.sh"
source "update.sh"
