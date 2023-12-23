# ---
# Updating and Cleaning the Operating System.
# @see https://askubuntu.com/questions/196768/how-to-install-updates-via-command-line
# ---

# are you sudo?
FOLDER="$(dirname "$(dirname "$(dirname "$0")")")"
. "$FOLDER/bash/root/sudo.sh"

# update
$IS_ROOT apt update
$IS_ROOT apt upgrade -y
$IS_ROOT apt autoremove -y
$IS_ROOT apt autoclean -y
