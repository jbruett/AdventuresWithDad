#!/usr/bin/env sh
# Adventures with Dad server launcher. Installs NeoForge on first run, syncs the server-side mods and
# configs for this pack version, then starts the server.
# Set MEMORY to change the heap size, e.g. MEMORY=8G ./start.sh
set -e
cd "$(dirname "$0")"
NEOFORGE_VERSION=@NEOFORGE_VERSION@
PACK_URL=@PACK_URL@
MEMORY=${MEMORY:-6G}

if [ ! -d "libraries/net/neoforged/neoforge/$NEOFORGE_VERSION" ]; then
  echo "Installing NeoForge $NEOFORGE_VERSION..."
  curl -fLo neoforge-installer.jar \
    "https://maven.neoforged.net/releases/net/neoforged/neoforge/$NEOFORGE_VERSION/neoforge-$NEOFORGE_VERSION-installer.jar"
  java -jar neoforge-installer.jar --installServer
  rm -f neoforge-installer.jar neoforge-installer.jar.log
fi

echo "Syncing mods and configs..."
java -jar packwiz-installer-bootstrap.jar -g -s server "$PACK_URL"

exec java -Xmx"$MEMORY" @user_jvm_args.txt "@libraries/net/neoforged/neoforge/$NEOFORGE_VERSION/unix_args.txt" nogui "$@"
