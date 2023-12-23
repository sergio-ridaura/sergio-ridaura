# ---
# If you are root, use sudo.
# @see http://gnu.org/
# ---

# are you sudo?
if [ "$(whoami)" != "root" ]; then
  IS_ROOT="sudo"
fi
