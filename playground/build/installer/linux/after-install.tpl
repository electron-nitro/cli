#!/bin/bash

# 刷新 desktop 数据库
echo "Updating desktop database..."
update-desktop-database /usr/share/applications

# 注册自定义协议
echo "Registering URL scheme handler for electron-nitro-playground..."
xdg-mime default "electron-nitro-playground-app.desktop" "x-scheme-handler/electron-nitro-playground"

echo "Registration complete. electron-nitro-playground:// protocol is now handled by electron-nitro-playground-app."

exit 0
