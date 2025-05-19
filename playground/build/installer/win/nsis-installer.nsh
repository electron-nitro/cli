# windows 注册表写入app的唤起协议

!macro customInstall
  DetailPrint "Register electron-nitro-playground URI Handler"
  DeleteRegKey HKCR "electron-nitro-playground"
  WriteRegStr HKCR "electron-nitro-playground" "" "URL:electron-nitro-playground"
  WriteRegStr HKCR "electron-nitro-playground" "URL Protocol" ""
  WriteRegStr HKCR "electron-nitro-playground\shell" "" ""
  WriteRegStr HKCR "electron-nitro-playground\shell\Open" "" ""
  WriteRegStr HKCR "electron-nitro-playground\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
!macroend

!macro customUnInstall
  DeleteRegKey HKCR "electron-nitro-playground"
!macroend
