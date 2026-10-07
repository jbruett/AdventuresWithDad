@echo off
rem Adventures with Dad server launcher. Installs NeoForge on first run, syncs the server-side mods and
rem configs for this pack version, then starts the server.
rem Set MEMORY to change the heap size, e.g. "set MEMORY=8G" before running.
cd /d "%~dp0"
set NEOFORGE_VERSION=@NEOFORGE_VERSION@
set PACK_URL=@PACK_URL@
if not defined MEMORY set MEMORY=6G

if not exist "libraries\net\neoforged\neoforge\%NEOFORGE_VERSION%" (
  echo Installing NeoForge %NEOFORGE_VERSION%...
  curl -fLo neoforge-installer.jar https://maven.neoforged.net/releases/net/neoforged/neoforge/%NEOFORGE_VERSION%/neoforge-%NEOFORGE_VERSION%-installer.jar || goto :error
  java -jar neoforge-installer.jar --installServer || goto :error
  del neoforge-installer.jar neoforge-installer.jar.log 2>nul
)

echo Syncing mods and configs...
java -jar packwiz-installer-bootstrap.jar -g -s server %PACK_URL% || goto :error

java -Xmx%MEMORY% @user_jvm_args.txt @libraries/net/neoforged/neoforge/%NEOFORGE_VERSION%/win_args.txt nogui %*
pause
exit /b

:error
echo Setup failed. Check that Java 21 is installed and on PATH, and that this machine can reach GitHub and CurseForge.
pause
exit /b 1
