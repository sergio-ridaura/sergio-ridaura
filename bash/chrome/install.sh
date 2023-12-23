# ---
# Google Chrome installation.
# @see https://www.google.com/intl/es_es/chrome/
# ---

# are you sudo?
FOLDER="$(dirname "$(dirname "$(dirname "$0")")")"
. "$FOLDER/bash/root/sudo.sh"

# install
wget -c https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
$IS_ROOT apt update
$IS_ROOT apt install -y libappindicator1
$IS_ROOT dpkg -i google-chrome-stable_current_amd64.deb
rm google-chrome-stable_current_amd64.deb
