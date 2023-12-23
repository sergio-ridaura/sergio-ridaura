# ---
# Git installation.
# @see https://git-scm.com/
# ---

# are you sudo?
FOLDER="$(dirname "$(dirname "$(dirname "$0")")")"
. "$FOLDER/bash/root/sudo.sh"

# install
$IS_ROOT apt install -y git
