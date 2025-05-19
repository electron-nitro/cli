#!/bin/bash

# 刷新 desktop 数据库
echo "Updating desktop database..."
update-desktop-database /usr/share/applications

# 取消注册自定义协议
echo "Unregistering URL scheme handler for electron-nitro-playground..."
xdg-mime default "" "x-scheme-handler/electron-nitro-playground"

echo "Unregistration complete. electron-nitro-playground:// protocol has been removed."

exit 0
