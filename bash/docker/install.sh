# ---
# Docker installation.
# @see https://docs.docker.com/engine/install/
# ---

# are you sudo?
FOLDER="$(dirname "$(dirname "$(dirname "$0")")")"
. "$FOLDER/bash/root/sudo.sh"

# install
$IS_ROOT apt -y install apt-transport-https ca-certificates software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | $IS_ROOT gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | $IS_ROOT tee /etc/apt/sources.list.d/docker.list >/dev/null
$IS_ROOT apt update
$IS_ROOT apt install -y docker-ce
$IS_ROOT groupadd docker
$IS_ROOT usermod -aG docker $USER
$IS_ROOT chmod o+rw /var/run/docker.sock
