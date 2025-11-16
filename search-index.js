// אינדקס חיפוש אוטומטי - נוצר על ידי build-search-index.js
const SEARCH_INDEX = [
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg /?",
    "context": "פקודות עזר - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add /?",
    "context": "פקודות עזר - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "regedit",
    "context": "פקודות עזר - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyApp\" /v \"Version\" /t REG_SZ /d \"1.0\" /f",
    "context": "תחביר בסיסי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyApp\" /v \"Enabled\" /t REG_DWORD /d 1 /f",
    "context": "תחביר בסיסי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyNewApp\" /f",
    "context": "תחביר בסיסי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyApp\" /ve /d \"Default Value\" /f",
    "context": "תחביר בסיסי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyApp\" /v \"LargeNumber\" /t REG_QWORD /d 9999999999 /f",
    "context": "סוגי נתונים שונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyApp\" /v \"BinaryData\" /t REG_BINARY /d 01AF23 /f",
    "context": "סוגי נתונים שונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyApp\" /v \"List\" /t REG_MULTI_SZ /d \"Item1\\0Item2\\0Item3\" /f",
    "context": "סוגי נתונים שונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyApp\" /v \"Path\" /t REG_EXPAND_SZ /d \"%USERPROFILE%\\Documents\" /f",
    "context": "סוגי נתונים שונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"\\\\ComputerName\\HKLM\\Software\\MyApp\" /v \"Setting\" /t REG_SZ /d \"Value\" /f",
    "context": "דוגמאות מתקדמות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\My Application Name\" /v \"My Value\" /t REG_SZ /d \"My Data\" /f",
    "context": "דוגמאות מתקדמות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\MyApp\" /v \"Path\" /t REG_SZ /d \"C:\\Program Files\\App\" /f",
    "context": "דוגמאות מתקדמות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\MyApp\" /v \"Version\" /f",
    "context": "מחיקה בסיסית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\MyApp\" /f",
    "context": "מחיקה בסיסית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\MyApp\" /ve /f",
    "context": "מחיקה בסיסית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\MyApp\" /v \"Setting\"",
    "context": "מחיקה בסיסית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\MyApp\" /va /f",
    "context": "מחיקה מתקדמת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"\\\\ComputerName\\HKCU\\Software\\MyApp\" /f",
    "context": "מחיקה מתקדמת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\"",
    "context": "שאילתות בסיסיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\MyApp\" /v \"Version\"",
    "context": "שאילתות בסיסיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\MyApp\" /ve",
    "context": "שאילתות בסיסיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\Microsoft\" /s",
    "context": "שאילתות בסיסיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\" /f \"Version\" /s",
    "context": "חיפוש מתקדם - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\" /f \"1.0\" /d /s",
    "context": "חיפוש מתקדם - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\" /f \"MyApp\" /k /s",
    "context": "חיפוש מתקדם - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\" /f \"Version\" /c /s",
    "context": "חיפוש מתקדם - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\" /f \"Version\" /e /s",
    "context": "חיפוש מתקדם - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\MyApp\" /f \"text\" /t REG_SZ /s",
    "context": "סינון לפי סוג - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\MyApp\" /f 1 /t REG_DWORD /d /s",
    "context": "סינון לפי סוג - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\" /v ProductName",
    "context": "שאילתות שימושיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\" /s",
    "context": "שאילתות שימושיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\"",
    "context": "שאילתות שימושיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg export \"HKCU\\Software\\MyApp\" \"C:\\Backup\\MyApp.reg\"",
    "context": "ייצוא (Export) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg export \"HKCU\\Software\\Microsoft\" \"C:\\Backup\\Microsoft.reg\" /y",
    "context": "ייצוא (Export) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg export HKCU \"C:\\Backup\\HKCU_Full.reg\"",
    "context": "ייצוא (Export) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg export HKLM \"C:\\Backup\\HKLM_Full.reg\"",
    "context": "ייצוא (Export) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg import \"C:\\Backup\\MyApp.reg\"",
    "context": "ייבוא (Import) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "regedit /s \"C:\\Backup\\MyApp.reg\"",
    "context": "ייבוא (Import) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg import \"\\\\Server\\Share\\backup.reg\"",
    "context": "ייבוא (Import) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg save \"HKCU\\Software\\MyApp\" \"C:\\Backup\\MyApp.hiv\"",
    "context": "שמירה (Save) - פורמט בינארי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg save \"HKCU\\Software\\MyApp\" \"C:\\Backup\\MyApp.hiv\" /y",
    "context": "שמירה (Save) - פורמט בינארי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg save \"HKLM\\System\" \"C:\\Backup\\System.hiv\"",
    "context": "שמירה (Save) - פורמט בינארי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg restore \"HKCU\\Software\\MyApp\" \"C:\\Backup\\MyApp.hiv\"",
    "context": "שחזור (Restore) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg restore \"HKCU\\Software\\MyApp\" \"C:\\Backup\\MyApp.hiv\" /f",
    "context": "שחזור (Restore) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "for /f \"tokens=2-4 delims=/ \" %%a in ('date /t') do (set mydate=%%c-%%a-%%b)\nfor /f \"tokens=1-2 delims=/:\" %%a in ('time /t') do (set mytime=%%a%%b)\nreg export \"HKCU\\Software\\MyApp\" \"C:\\Backup\\MyApp_%mydate%_%mytime%.reg\"",
    "context": "גיבוי אוטומטי עם תאריך - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg compare \"HKCU\\Software\\MyApp\" \"HKLM\\Software\\MyApp\"",
    "context": "השוואה (Compare) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg compare \"HKCU\\Software\\MyApp\" \"HKCU\\Software\\MyApp_Backup\" /s",
    "context": "השוואה (Compare) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg compare \"HKCU\\Software\\MyApp\" \"HKCU\\Software\\MyApp_Backup\" /od",
    "context": "השוואה (Compare) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection\" /v \"AllowTelemetry\" /t REG_DWORD /d 0 /f",
    "context": "השבתת טלמטריה ואיסוף נתונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search\" /v \"AllowCortana\" /t REG_DWORD /d 0 /f",
    "context": "השבתת טלמטריה ואיסוף נתונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Siuf\\Rules\" /v \"NumberOfSIUFInPeriod\" /t REG_DWORD /d 0 /f",
    "context": "השבתת טלמטריה ואיסוף נתונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\AdvertisingInfo\" /v \"Enabled\" /t REG_DWORD /d 0 /f",
    "context": "השבתת טלמטריה ואיסוף נתונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\CapabilityAccessManager\\ConsentStore\\location\" /v \"Value\" /t REG_SZ /d \"Deny\" /f",
    "context": "השבתת טלמטריה ואיסוף נתונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection\" /v \"DisableRealtimeMonitoring\" /t REG_DWORD /d 1 /f",
    "context": "השבתת Windows Defender (זמנית) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\" /v \"DisableAntiSpyware\" /t REG_DWORD /d 1 /f",
    "context": "השבתת Windows Defender (זמנית) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Spynet\" /v \"SpynetReporting\" /t REG_DWORD /d 0 /f",
    "context": "השבתת Windows Defender (זמנית) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\CapabilityAccessManager\\ConsentStore\\webcam\" /v \"Value\" /t REG_SZ /d \"Deny\" /f",
    "context": "הגנת פרטיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\CapabilityAccessManager\\ConsentStore\\microphone\" /v \"Value\" /t REG_SZ /d \"Deny\" /f",
    "context": "הגנת פרטיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Diagnostics\\DiagTrack\" /v \"DiagTrackAuthorization\" /t REG_DWORD /d 0 /f",
    "context": "הגנת פרטיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\System\" /v \"EnableActivityFeed\" /t REG_DWORD /d 0 /f",
    "context": "הגנת פרטיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Edge\" /v \"PasswordManagerEnabled\" /t REG_DWORD /d 0 /f",
    "context": "אבטחת דפדפן - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Edge\" /v \"AutofillAddressEnabled\" /t REG_DWORD /d 0 /f",
    "context": "אבטחת דפדפן - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Edge\" /v \"BlockThirdPartyCookies\" /t REG_DWORD /d 1 /f",
    "context": "אבטחת דפדפן - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU\" /v \"NoAutoUpdate\" /t REG_DWORD /d 1 /f",
    "context": "השבתת עדכונים אוטומטיים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\DriverSearching\" /v \"SearchOrderConfig\" /t REG_DWORD /d 0 /f",
    "context": "השבתת עדכונים אוטומטיים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU\" /v \"NoAutoRebootWithLoggedOnUsers\" /t REG_DWORD /d 1 /f",
    "context": "השבתת עדכונים אוטומטיים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\OneDrive\" /v \"DisableFileSyncNGSC\" /t REG_DWORD /d 1 /f",
    "context": "השבתת תכונות מעצבנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Control Panel\\Accessibility\\StickyKeys\" /v \"Flags\" /t REG_SZ /d \"506\" /f",
    "context": "השבתת תכונות מעצבנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\PushNotifications\" /v \"ToastEnabled\" /t REG_DWORD /d 0 /f",
    "context": "השבתת תכונות מעצבנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Policies\\Microsoft\\Windows\\Explorer\" /v \"DisableNotificationCenter\" /t REG_DWORD /d 1 /f",
    "context": "השבתת תכונות מעצבנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Personalization\" /v \"NoLockScreen\" /t REG_DWORD /d 1 /f",
    "context": "השבתת תכונות מעצבנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent\" /v \"DisableSoftLanding\" /t REG_DWORD /d 1 /f",
    "context": "השבתת תכונות מעצבנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent\" /v \"DisableWindowsConsumerFeatures\" /t REG_DWORD /d 1 /f",
    "context": "השבתת Bloatware - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager\" /v \"SystemPaneSuggestionsEnabled\" /t REG_DWORD /d 0 /f",
    "context": "השבתת Bloatware - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager\" /v \"SilentInstalledAppsEnabled\" /t REG_DWORD /d 0 /f",
    "context": "השבתת Bloatware - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Power\" /v \"HibernateEnabled\" /t REG_DWORD /d 0 /f",
    "context": "השבתת שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Power\" /v \"HiberbootEnabled\" /t REG_DWORD /d 0 /f",
    "context": "השבתת שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Remote Assistance\" /v \"fAllowToGetHelp\" /t REG_DWORD /d 0 /f",
    "context": "השבתת שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\" /v \"Disabled\" /t REG_DWORD /d 1 /f",
    "context": "השבתת שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Control Panel\\Desktop\\WindowMetrics\" /v \"MinAnimate\" /t REG_SZ /d \"0\" /f",
    "context": "אופטימיזציה כללית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects\" /v \"VisualFXSetting\" /t REG_DWORD /d 2 /f",
    "context": "אופטימיזציה כללית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize\" /v \"EnableTransparency\" /t REG_DWORD /d 0 /f",
    "context": "אופטימיזציה כללית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"ListviewShadow\" /t REG_DWORD /d 0 /f",
    "context": "אופטימיזציה כללית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"DisableThumbnailCache\" /t REG_DWORD /d 1 /f",
    "context": "אופטימיזציה כללית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"LaunchTo\" /t REG_DWORD /d 1 /f",
    "context": "אופטימיזציה של Explorer - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\" /v \"ShowRecent\" /t REG_DWORD /d 0 /f",
    "context": "אופטימיזציה של Explorer - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\" /v \"ShowFrequent\" /t REG_DWORD /d 0 /f",
    "context": "אופטימיזציה של Explorer - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\StorageSense\\Parameters\\StoragePolicy\" /v \"01\" /t REG_DWORD /d 1 /f",
    "context": "אופטימיזציה של Explorer - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\" /v \"WaitToKillServiceTimeout\" /t REG_SZ /d \"2000\" /f",
    "context": "אופטימיזציה של Startup - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Control Panel\\Desktop\" /v \"WaitToKillAppTimeout\" /t REG_SZ /d \"2000\" /f",
    "context": "אופטימיזציה של Startup - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Control Panel\\Desktop\" /v \"MenuShowDelay\" /t REG_SZ /d \"0\" /f",
    "context": "אופטימיזציה של Startup - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\" /v \"ClearPageFileAtShutdown\" /t REG_DWORD /d 1 /f",
    "context": "אופטימיזציה של זיכרון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\" /v \"DisablePagingExecutive\" /t REG_DWORD /d 1 /f",
    "context": "אופטימיזציה של זיכרון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\" /v \"LargeSystemCache\" /t REG_DWORD /d 1 /f",
    "context": "אופטימיזציה של זיכרון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\" /v \"NetworkThrottlingIndex\" /t REG_DWORD /d 4294967295 /f",
    "context": "אופטימיזציה של רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\" /v \"DefaultTTL\" /t REG_DWORD /d 64 /f",
    "context": "אופטימיזציה של רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\" /v \"TcpWindowSize\" /t REG_DWORD /d 65535 /f",
    "context": "אופטימיזציה של רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\GameDVR\" /v \"AppCaptureEnabled\" /t REG_DWORD /d 0 /f",
    "context": "אופטימיזציה למשחקים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\System\\GameConfigStore\" /v \"GameDVR_Enabled\" /t REG_DWORD /d 0 /f",
    "context": "אופטימיזציה למשחקים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\GameBar\" /v \"AutoGameModeEnabled\" /t REG_DWORD /d 1 /f",
    "context": "אופטימיזציה למשחקים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games\" /v \"Priority\" /t REG_DWORD /d 8 /f",
    "context": "אופטימיזציה למשחקים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\StuckRects3\" /v \"Settings\" /t REG_BINARY /d 30000000feffffff7af40000030000003e0000001e000000000000000804000080070000b0040000 /f",
    "context": "Taskbar - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search\" /v \"SearchboxTaskbarMode\" /t REG_DWORD /d 0 /f",
    "context": "Taskbar - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"ShowTaskViewButton\" /t REG_DWORD /d 0 /f",
    "context": "Taskbar - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\\People\" /v \"PeopleBand\" /t REG_DWORD /d 0 /f",
    "context": "Taskbar - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Feeds\" /v \"ShellFeedsTaskbarViewMode\" /t REG_DWORD /d 2 /f",
    "context": "Taskbar - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"TaskbarSmallIcons\" /t REG_DWORD /d 1 /f",
    "context": "Taskbar - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"ShowSecondsInSystemClock\" /t REG_DWORD /d 1 /f",
    "context": "Taskbar - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search\" /v \"BingSearchEnabled\" /t REG_DWORD /d 0 /f",
    "context": "Start Menu - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Policies\\Microsoft\\Windows\\Explorer\" /v \"DisableSearchBoxSuggestions\" /t REG_DWORD /d 1 /f",
    "context": "Start Menu - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"Start_ShowAllApps\" /t REG_DWORD /d 1 /f",
    "context": "Start Menu - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"Start_HideRecentlyAddedApps\" /t REG_DWORD /d 1 /f",
    "context": "Start Menu - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"Start_FullScreen\" /t REG_DWORD /d 1 /f",
    "context": "Start Menu - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"HideIcons\" /t REG_DWORD /d 1 /f",
    "context": "Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\HideDesktopIcons\\NewStartPanel\" /v \"{20D04FE0-3AEA-1069-A2D8-08002B30309D}\" /t REG_DWORD /d 0 /f",
    "context": "Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\HideDesktopIcons\\NewStartPanel\" /v \"{59031a47-3f72-44a7-89c5-5595fe6b30ee}\" /t REG_DWORD /d 0 /f",
    "context": "Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\HideDesktopIcons\\NewStartPanel\" /v \"{645FF040-5081-101B-9F08-00AA002F954E}\" /t REG_DWORD /d 0 /f",
    "context": "Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\HideDesktopIcons\\NewStartPanel\" /v \"{F02C1A0D-BE21-4350-88B0-7367FC96EF3C}\" /t REG_DWORD /d 0 /f",
    "context": "Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize\" /v \"AppsUseLightTheme\" /t REG_DWORD /d 0 /f",
    "context": "צבעים וערכות נושא - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize\" /v \"SystemUsesLightTheme\" /t REG_DWORD /d 0 /f",
    "context": "צבעים וערכות נושא - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\DWM\" /v \"AccentColor\" /t REG_DWORD /d 4292311040 /f",
    "context": "צבעים וערכות נושא - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize\" /v \"ColorPrevalence\" /t REG_DWORD /d 1 /f",
    "context": "צבעים וערכות נושא - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32\" /ve /f",
    "context": "Context Menu - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCR\\*\\shell\\Open with Notepad\\command\" /ve /d \"notepad.exe \\\"%%1\\\"\" /f",
    "context": "Context Menu - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCR\\Directory\\Background\\shell\\cmd\" /ve /d \"Open CMD here\" /f\nreg add \"HKCR\\Directory\\Background\\shell\\cmd\\command\" /ve /d \"cmd.exe /s /k pushd \\\"%%V\\\"\" /f",
    "context": "Context Menu - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"Hidden\" /t REG_DWORD /d 1 /f",
    "context": "הצגת קבצים נסתרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"ShowSuperHidden\" /t REG_DWORD /d 1 /f",
    "context": "הצגת קבצים נסתרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"HideFileExt\" /t REG_DWORD /d 0 /f",
    "context": "הצגת קבצים נסתרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"HideEmptyDrives\" /t REG_DWORD /d 0 /f",
    "context": "הצגת קבצים נסתרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\CabinetState\" /v \"FullPath\" /t REG_DWORD /d 1 /f",
    "context": "הגדרות תצוגה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"SeparateProcess\" /t REG_DWORD /d 1 /f",
    "context": "הגדרות תצוגה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"AutoCheckSelect\" /t REG_DWORD /d 1 /f",
    "context": "הגדרות תצוגה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"ShowStatusBar\" /t REG_DWORD /d 1 /f",
    "context": "הגדרות תצוגה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Ribbon\" /v \"MinimizedStateTabletModeOff\" /t REG_DWORD /d 1 /f",
    "context": "הגדרות תצוגה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Classes\\CLSID\\{679f85cb-0220-4080-b29b-5540cc05aab6}\\ShellFolder\" /v \"Attributes\" /t REG_DWORD /d 2962227200 /f",
    "context": "Quick Access - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCR\\CLSID\\{018D5C66-4533-4307-9B53-224DE2ED1FE6}\" /v \"System.IsPinnedToNameSpaceTree\" /t REG_DWORD /d 0 /f",
    "context": "Quick Access - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MyComputer\\NameSpace\\{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}\" /f",
    "context": "Quick Access - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MyComputer\\NameSpace\\{3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}\" /f",
    "context": "Quick Access - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MyComputer\\NameSpace\\{f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}\" /f",
    "context": "Quick Access - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\" /v \"ShellState\" /t REG_BINARY /d 240000003ea800000000000000000000 /f",
    "context": "התנהגות Explorer - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"DisableThumbnailCache\" /t REG_DWORD /d 1 /f",
    "context": "התנהגות Explorer - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"DisableThumbsDBOnNetworkFolders\" /t REG_DWORD /d 1 /f",
    "context": "התנהגות Explorer - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"NavPaneShowAllFolders\" /t REG_DWORD /d 1 /f",
    "context": "התנהגות Explorer - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\Shell\\Bags\\AllFolders\\Shell\" /v \"FolderType\" /t REG_SZ /d \"NotSpecified\" /f",
    "context": "שיפור ביצועים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" /v \"FolderContentsInfoTip\" /t REG_DWORD /d 0 /f",
    "context": "שיפור ביצועים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"MyApp\" /t REG_SZ /d \"C:\\Path\\To\\App.exe\" /f",
    "context": "הוספת תוכניות להפעלה אוטומטית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"MyApp\" /t REG_SZ /d \"C:\\Path\\To\\App.exe\" /f",
    "context": "הוספת תוכניות להפעלה אוטומטית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"MyApp\" /t REG_SZ /d \"\\\"C:\\Path\\To\\App.exe\\\" -parameter\" /f",
    "context": "הוספת תוכניות להפעלה אוטומטית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce\" /v \"MyApp\" /t REG_SZ /d \"C:\\Path\\To\\App.exe\" /f",
    "context": "הוספת תוכניות להפעלה אוטומטית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"MyApp\" /f",
    "context": "הסרת תוכניות מהפעלה אוטומטית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"MyApp\" /f",
    "context": "הסרת תוכניות מהפעלה אוטומטית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\"",
    "context": "הסרת תוכניות מהפעלה אוטומטית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\"",
    "context": "הסרת תוכניות מהפעלה אוטומטית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\RunServices\" /v \"MyService\" /t REG_SZ /d \"C:\\Path\\To\\Service.exe\" /f",
    "context": "מיקומי Startup נוספים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\RunServicesOnce\" /v \"MyService\" /t REG_SZ /d \"C:\\Path\\To\\Service.exe\" /f",
    "context": "מיקומי Startup נוספים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg query \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders\" /v \"Startup\"",
    "context": "מיקומי Startup נוספים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"OneDrive\" /f",
    "context": "השבתת תוכניות Startup נפוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"com.squirrel.Teams.Teams\" /f",
    "context": "השבתת תוכניות Startup נפוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg delete \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"Skype for Desktop\" /f",
    "context": "השבתת תוכניות Startup נפוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"MyApp\" /t REG_SZ /d \"cmd /c timeout /t 10 /nobreak && start \\\"\\\" \\\"C:\\Path\\To\\App.exe\\\"\" /f",
    "context": "Startup Delay - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\" /v \"MyApp\" /t REG_SZ /d \"wscript.exe //B \\\"C:\\Path\\To\\Script.vbs\\\"\" /f",
    "context": "Startup Delay - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip6\\Parameters\" /v \"DisabledComponents\" /t REG_DWORD /d 255 /f",
    "context": "הגדרות רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip6\\Parameters\" /v \"DisabledComponents\" /t REG_DWORD /d 0 /f",
    "context": "הגדרות רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces\\{GUID}\" /v \"MTU\" /t REG_DWORD /d 1500 /f",
    "context": "הגדרות רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\" /v \"TcpNumConnections\" /t REG_DWORD /d 16777214 /f",
    "context": "הגדרות רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\" /v \"Tcp1323Opts\" /t REG_DWORD /d 1 /f",
    "context": "הגדרות רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Dnscache\\Parameters\" /v \"MaxCacheTtl\" /t REG_DWORD /d 86400 /f",
    "context": "DNS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Dnscache\\Parameters\" /v \"MaxNegativeCacheTtl\" /t REG_DWORD /d 300 /f",
    "context": "DNS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\Dnscache\\Parameters\" /v \"EnableAutoDoh\" /t REG_DWORD /d 2 /f",
    "context": "DNS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Internet Explorer\\Main\" /v \"DisableFirstRunCustomize\" /t REG_DWORD /d 1 /f",
    "context": "Internet Explorer / Edge Legacy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Internet Explorer\\Main\" /v \"Start Page\" /t REG_SZ /d \"https://www.google.com\" /f",
    "context": "Internet Explorer / Edge Legacy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Internet Explorer\\Main\" /v \"ShowedSuggestions\" /t REG_DWORD /d 0 /f",
    "context": "Internet Explorer / Edge Legacy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Internet Explorer\\Privacy\" /v \"ClearBrowsingHistoryOnExit\" /t REG_DWORD /d 1 /f",
    "context": "Internet Explorer / Edge Legacy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\NetworkList\\DefaultMediaCost\" /v \"Ethernet\" /t REG_DWORD /d 2 /f",
    "context": "Windows Update - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DeliveryOptimization\" /v \"DODownloadMode\" /t REG_DWORD /d 99 /f",
    "context": "Windows Update - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\DeliveryOptimization\\Config\" /v \"DODownloadMode\" /t REG_DWORD /d 0 /f",
    "context": "Windows Update - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Network\\NewNetworkWindowOff\" /f",
    "context": "שיתוף קבצים ומדפסות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\LanmanServer\\Parameters\" /v \"AutoShareWks\" /t REG_DWORD /d 1 /f",
    "context": "שיתוף קבצים ומדפסות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\LanmanServer\\Parameters\" /v \"AutoShareServer\" /t REG_DWORD /d 0 /f",
    "context": "שיתוף קבצים ומדפסות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Services\\LanmanServer\\Parameters\" /v \"AutoShareWks\" /t REG_DWORD /d 0 /f",
    "context": "שיתוף קבצים ומדפסות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\" /v \"fDenyTSConnections\" /t REG_DWORD /d 0 /f",
    "context": "Remote Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\" /v \"fDenyTSConnections\" /t REG_DWORD /d 1 /f",
    "context": "Remote Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp\" /v \"UserAuthentication\" /t REG_DWORD /d 1 /f",
    "context": "Remote Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp\" /v \"PortNumber\" /t REG_DWORD /d 3390 /f",
    "context": "Remote Desktop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\" /v \"ProxyEnable\" /t REG_DWORD /d 1 /f",
    "context": "Proxy Settings - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\" /v \"ProxyServer\" /t REG_SZ /d \"proxy.example.com:8080\" /f",
    "context": "Proxy Settings - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\" /v \"ProxyEnable\" /t REG_DWORD /d 0 /f",
    "context": "Proxy Settings - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "command": "reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\" /v \"ProxyOverride\" /t REG_SZ /d \"localhost;127.0.0.1;\" /f",
    "context": "Proxy Settings - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "פקודות בסיסיות",
    "type": "description",
    "anchor": "basics"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "סוגי נתונים נפוצים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת עזרה על פקודת reg:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "עזרה על פקודה ספציפית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "פתיחת Registry Editor:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספת ערכים (reg add)",
    "type": "description",
    "anchor": "add"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "תחביר בסיסי",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספת ערך מחרוזת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/v = שם הערך | /t = סוג | /d = נתונים | /f = ללא אישור",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספת ערך DWORD:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "יצירת מפתח ריק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספת ערך ברירת מחדל (Default):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/ve = ערך ברירת מחדל (Value Empty)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "סוגי נתונים שונים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "QWORD (64-bit):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Multi-String (מחרוזות מרובות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "\\0 מפריד בין מחרוזות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Expandable String (עם משתני סביבה):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "דוגמאות מתקדמות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספה למחשב מרוחק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספה עם רווחים בנתיב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספה עם תווים מיוחדים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקת ערכים (reg delete)",
    "type": "description",
    "anchor": "delete"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקה בסיסית",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקת ערך ספציפי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקת מפתח שלם (כולל תתי-מפתחות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "זהירות! מוחק את המפתח וכל התוכן שלו",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקת ערך ברירת מחדל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקה עם אישור:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ללא /f - יבקש אישור לפני מחיקה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקה מתקדמת",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקת כל הערכים במפתח (אך לא המפתח עצמו):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/va = Value All - מוחק את כל הערכים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחיקה ממחשב מרוחק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שאילתות וחיפוש (reg query)",
    "type": "description",
    "anchor": "query"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שאילתות בסיסיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת כל הערכים במפתח:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת ערך ספציפי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת ערך ברירת מחדל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגה רקורסיבית (כולל תתי-מפתחות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/s = חיפוש בכל תתי-המפתחות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חיפוש מתקדם",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חיפוש לפי שם ערך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/f = מה לחפש | /s = חיפוש רקורסיבי",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חיפוש לפי נתונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/d = חיפוש בנתונים (Data)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חיפוש לפי שם מפתח:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/k = חיפוש בשמות מפתחות (Key)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חיפוש מדויק (Case Sensitive):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/c = רגיש לאותיות גדולות/קטנות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חיפוש התאמה מדויקת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/e = התאמה מדויקת בלבד (Exact match)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "סינון לפי סוג",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חיפוש ערכי REG_SZ בלבד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חיפוש ערכי DWORD בלבד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שאילתות שימושיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "בדיקת גרסת Windows:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "בדיקת תוכנות מותקנות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "בדיקת תוכניות אוטומטיות בהפעלה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "גיבוי ושחזור (reg export / import / save / restore)",
    "type": "description",
    "anchor": "backup"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייצוא (Export)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייצוא מפתח לקובץ .reg:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "יוצר קובץ טקסט שניתן לערוך",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייצוא עם תתי-מפתחות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/y = דריסת קובץ קיים ללא אישור",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייצוא כל HKEY_CURRENT_USER:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייצוא כל HKEY_LOCAL_MACHINE:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "זהירות! קובץ גדול מאוד",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייבוא (Import)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייבוא קובץ .reg:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייבוא שקט (ללא הודעות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/s = Silent mode",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ייבוא ממחשב מרוחק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שמירה (Save) - פורמט בינארי",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שמירת מפתח בפורמט בינארי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "יוצר קובץ בינארי (לא ניתן לעריכה ידנית)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שמירה עם דריסה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שמירת HKLM\\System (דורש הרשאות מיוחדות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שחזור (Restore)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שחזור מקובץ בינארי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מחליף את המפתח הקיים במלואו",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שחזור עם כפייה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "גיבוי אוטומטי עם תאריך",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "סקריפט גיבוי עם תאריך ושעה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השוואה (Compare)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השוואת שני מפתחות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השוואה עם פלט מפורט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השוואה והצגת הבדלים בלבד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "/od = Output Differences only",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "פרטיות ואבטחה",
    "type": "description",
    "anchor": "privacy"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת טלמטריה ואיסוף נתונים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת טלמטריה של Windows:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Cortana:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Windows Feedback:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Advertising ID:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת מעקב אחר מיקום:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Windows Defender (זמנית)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Real-Time Protection:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "יידרש הפעלה מחדש",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Windows Defender לחלוטין:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Cloud Protection:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגנת פרטיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת גישה למצלמה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת גישה למיקרופון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת שיתוף אבחון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Timeline:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "אבטחת דפדפן",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Password Manager ב-Edge:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת AutoFill:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "חסימת Cookies של צד שלישי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת תכונות Windows",
    "type": "description",
    "anchor": "disable"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת עדכונים אוטומטיים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Windows Update:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת עדכוני Driver אוטומטיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת הפעלה מחדש אוטומטית אחרי עדכון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת תכונות מעצבנות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת OneDrive:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Sticky Keys:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת הודעות Notification:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Action Center:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Lock Screen:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Windows Tips:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Bloatware",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Consumer Features (אפליקציות מותקנות אוטומטית):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת הצעות ב-Start Menu:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת אפליקציות מוצעות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת שירותים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Hibernation:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Fast Startup:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Remote Assistance:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Error Reporting:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שיפור ביצועים",
    "type": "description",
    "anchor": "performance"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "אופטימיזציה כללית",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת אנימציות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת אפקטים ויזואליים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "2 = Best Performance",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Transparency:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Shadows:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Thumbnail Preview:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "אופטימיזציה של Explorer",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "פתיחה מהירה של Explorer:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "1 = This PC (במקום Quick Access)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Recent Files:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Frequent Folders:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ניקוי אוטומטי של Temp Files:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "אופטימיזציה של Startup",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפחתת זמן Timeout של Boot:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ברירת מחדל: 5000ms, מומלץ: 2000ms",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "האצת סגירת תוכניות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "האצת תפריט Start:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ברירת מחדל: 400ms, מומלץ: 0ms",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "אופטימיזציה של זיכרון",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ניקוי אוטומטי של Page File בכיבוי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "עלול להאט את הכיבוי",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Paging Executive:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מומלץ רק למחשבים עם RAM גבוה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שיפור Large System Cache:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "אופטימיזציה של רשת",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Bandwidth Throttling:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שיפור TCP/IP:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגדלת TCP Window Size:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "אופטימיזציה למשחקים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Game Bar:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Game DVR:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת Game Mode:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "עדיפות גבוהה למשחקים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "התאמת ממשק המשתמש",
    "type": "description",
    "anchor": "ui"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסתרת Taskbar אוטומטית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסתרת Search Box:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "0 = Hidden, 1 = Icon, 2 = Box",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסתרת Task View:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסתרת People:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסתרת News and Interests:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שינוי גודל אייקונים ב-Taskbar:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "1 = Small, 0 = Large",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת שניות בשעון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Bing Search ב-Start:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Web Results ב-Search:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת כל האפליקציות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסתרת Recently Added:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Start Menu במסך מלא:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסתרת אייקונים מהשולחן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת This PC על השולחן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת User Files על השולחן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת Recycle Bin על השולחן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת Network על השולחן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "צבעים וערכות נושא",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת Dark Mode:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Dark Mode למערכת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שינוי צבע Accent:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הערך הוא בפורמט ABGR",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת צבע ב-Taskbar:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Context Menu",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שחזור Context Menu הישן (Windows 11):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספת \"Open with Notepad\" לכל הקבצים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספת \"Open CMD here\":",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "File Explorer",
    "type": "description",
    "anchor": "explorer"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת קבצים נסתרים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת קבצים נסתרים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת קבצי מערכת מוגנים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת סיומות קבצים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת תיקיות ריקות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגדרות תצוגה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת Full Path בכותרת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "פתיחת כל תיקייה בחלון נפרד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת Checkboxes לבחירת קבצים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת Status Bar:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסתרת Ribbon:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Quick Access",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרת Quick Access מ-Navigation Pane:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרת OneDrive מ-Navigation Pane:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרת 3D Objects:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרת Music:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרת Videos:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "התנהגות Explorer",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "פתיחה בלחיצה אחת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Thumbnail Cache:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Thumbnail על Network:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת כל התיקיות ב-Navigation Pane:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שיפור ביצועים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Folder Type Discovery:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Automatic Folder Type Discovery:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלה אוטומטית (Startup Programs)",
    "type": "description",
    "anchor": "startup"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספת תוכניות להפעלה אוטומטית",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספה ל-Current User:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספה לכל המשתמשים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספה עם פרמטרים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלה חד-פעמית (RunOnce):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרת תוכניות מהפעלה אוטומטית",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרה מ-Current User:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרה מכל המשתמשים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת כל תוכניות ההפעלה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הצגת תוכניות הפעלה של כל המשתמשים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "מיקומי Startup נוספים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Startup עם עיכוב (RunServices):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Startup עם עיכוב (RunServicesOnce):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "בדיקת Startup Folder:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת תוכניות Startup נפוצות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת OneDrive Startup:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Teams Startup:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Skype Startup:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Startup Delay",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הוספת עיכוב להפעלת תוכנית (10 שניות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלה מוסתרת (ללא חלון CMD):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "רשת ואינטרנט",
    "type": "description",
    "anchor": "network"
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת IPv6:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "דורש הפעלה מחדש",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת IPv6:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שינוי MTU Size:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "החלף {GUID} ב-GUID של כרטיס הרשת",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגדלת TCP Connections:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת TCP Timestamps:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגדרת DNS Cache Timeout:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "86400 = 24 שעות בשניות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגדרת Negative Cache Timeout:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת DNS over HTTPS:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Internet Explorer / Edge Legacy",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת First Run Wizard:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שינוי דף הבית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Suggestions:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ניקוי History בסגירה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Windows Update",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגדרת Metered Connection:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "2 = Metered (מגביל עדכונים)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגבלת Bandwidth לעדכונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת P2P Updates:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שיתוף קבצים ומדפסות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת Network Discovery:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת File Sharing:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Administrative Shares:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הסרת $ Shares:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Remote Desktop",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת Remote Desktop:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Remote Desktop:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "אפשור NLA (Network Level Authentication):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "שינוי פורט RDP:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "ברירת מחדל: 3389",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "Proxy Settings",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הפעלת Proxy:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגדרת Proxy Server:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "השבתת Proxy:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Registry CMD",
    "file": "registry-cmd-guide.html",
    "context": "הגדרת Proxy Bypass:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git pull",
    "context": "משיכה ודחיפה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git add .",
    "context": "משיכה ודחיפה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git commit -m \"תיאור כלשהו\"",
    "context": "משיכה ודחיפה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git push origin main",
    "context": "משיכה ודחיפה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git push origin master",
    "context": "משיכה ודחיפה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git diff > DIFF1.TXT",
    "context": "יצירת קבצי DIFF - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git diff --cached > DIFF.TXT",
    "context": "יצירת קבצי DIFF - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git apply --whitespace=fix diff-commit.txt",
    "context": "יצירת קבצי DIFF - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git show 953e3a5747eXXX > diff-commit.txt",
    "context": "יצירת קבצי DIFF - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git commit --amend -m \"XXXXXXX\"",
    "context": "שינוי שם קומיט אחרון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git commit --amend --no-edit",
    "context": "הוספת קבצים לקומיט אחרון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git push --force",
    "context": "דחיפה כפויה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git reset --soft HEAD~1",
    "context": "ביטול קומיט אחרון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git merge --abort",
    "context": "ביטול מיזוג - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git stash push",
    "context": "שמירה והוצאה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git stash push --staged",
    "context": "שמירה והוצאה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git stash pop",
    "context": "שמירה והוצאה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git fetch origin pull/40??/head:branch_name",
    "context": "משיכת Pull Request - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git merge branch_name",
    "context": "משיכת Pull Request - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git branch -D giXXX",
    "context": "מחיקת ענפים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git push origin --delete giXXX",
    "context": "מחיקת ענפים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "gh run list",
    "context": "בדיקת Actions - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "gh run view --job=[מספר ID]",
    "context": "בדיקת Actions - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "gh run watch",
    "context": "בדיקת Actions - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "gh workflow run ???.yml --ref main",
    "context": "בדיקת Actions - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git reset --hard origin/main",
    "context": "איפוס מלא לגיטהאב - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "git clean -fd",
    "context": "איפוס מלא לגיטהאב - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "repomix --ignore \"assets/otzar_books.csv,assets/hebrew_books.csv,assets/metadata.json,installer/otzaria_full.iss,assets/ca/netfree_cas.pem,sivan22.pfx\"",
    "context": "Repomix - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "Ctrl+Shift+P → \"line: Open In New Tab\"",
    "context": "VS Code - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "Ctrl+Shift+P",
    "context": "הפעלה מחדש - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "command": "Dart: Restart Analysis Server",
    "context": "הפעלה מחדש - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "פעולות בסיסיות",
    "type": "description",
    "anchor": "basics"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "משיכה ודחיפה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "משיכת שינויים מהשרת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מביא את כל השינויים האחרונים מהמאגר המרוחק ומשלב אותם עם הענף המקומי שלך",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "הוספת כל הקבצים לסטייג':",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מוסיף את כל הקבצים שהשתנו (חדשים, ערוכים או נמחקו) לאזור ההכנה לפני הקומיט",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "יצירת קומיט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שומר את השינויים שבסטייג' כקומיט חדש עם הודעה תיאורית",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "דחיפה לענף main:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שולח את הקומיטים המקומיים שלך לענף main במאגר המרוחק",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "דחיפה לענף master:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שולח את הקומיטים המקומיים שלך לענף master במאגר המרוחק (שם ישן לענף ראשי)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "עבודה עם DIFF",
    "type": "description",
    "anchor": "diff"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "יצירת קבצי DIFF",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שינויים שלא בסטייג':",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "יוצר קובץ המכיל את כל ההבדלים בין הקבצים הנוכחיים לבין הקומיט האחרון (רק קבצים קיימים, לא חדשים)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שינויים שבסטייג':",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "יוצר קובץ המכיל את כל השינויים שכבר הוספו לסטייג' (עם git add) ומוכנים לקומיט",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מיישם את השינויים מקובץ DIFF על הקבצים הנוכחיים, תוך תיקון אוטומטי של בעיות רווחים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "יצירת DIFF לקומיט ספציפי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מייצא את כל השינויים שנעשו בקומיט מסוים לקובץ טקסט (החלף XXX במזהה הקומיט המלא)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "עריכת קומיטים",
    "type": "description",
    "anchor": "commits"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שינוי שם קומיט אחרון",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "משנה את הודעת הקומיט האחרון מבלי לשנות את התוכן שלו",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "הוספת קבצים לקומיט אחרון",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "הכנסת הקבצים שבסטייג' לקומיט האחרון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מוסיף קבצים נוספים לקומיט האחרון מבלי לשנות את ההודעה שלו",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "דחיפה כפויה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "אם כבר עודכן בגיטהאב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "כופה את הדחיפה גם אם יש קונפליקט עם המאגר המרוחק - משכתב את ההיסטוריה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "ביטול קומיט אחרון",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מבטל את הקומיט האחרון אך שומר את השינויים בסטייג' - מאפשר לערוך ולעשות קומיט מחדש",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "ביטול מיזוג",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מבטל תהליך מיזוג (merge) שנתקע באמצע בגלל קונפליקטים ומחזיר למצב שלפני המיזוג",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "עבודה עם Stash",
    "type": "description",
    "anchor": "stash"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שמירה והוצאה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "הכנסת קבצים לסטאש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שומר את כל השינויים הנוכחיים בצד באופן זמני, מנקה את ספריית העבודה - שימושי כשצריך לעבור לענף אחר",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "הכנסת רק הקבצים שבסטייג' לסטאש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "שומר רק את הקבצים שכבר הוספת לסטייג' (עם git add), משאיר את השאר בספריית העבודה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "הוצאה מהסטאש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מחזיר את השינויים האחרונים שנשמרו בסטאש לספריית העבודה ומוחק אותם מהסטאש",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "עבודה עם ענפים ו-PR",
    "type": "description",
    "anchor": "branches"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "משיכת Pull Request",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מוריד Pull Request ספציפי מגיטהאב ויוצר ממנו ענף מקומי (החלף 40?? במספר ה-PR ו-branch_name בשם הענף הרצוי)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "משלב את השינויים מהענף המצוין לתוך הענף הנוכחי שלך",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מחיקת ענפים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מחיקה מקומית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מוחק ענף מקומי בכוח, גם אם יש בו שינויים שלא מוזגו (החלף giXXX בשם הענף)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מחיקה בגיטהאב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מוחק ענף מהמאגר המרוחק בגיטהאב (החלף giXXX בשם הענף)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "GitHub CLI - Actions",
    "type": "description",
    "anchor": "github-cli"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "בדיקת Actions",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "רשימת ריצות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מציג רשימה של כל הריצות האחרונות של GitHub Actions במאגר הנוכחי",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "בדיקת ריצה ספציפית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מציג פרטים מלאים על ריצת Action ספציפית לפי מספר המזהה שלה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "בדיקה אוטומטית כל 3 שניות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "עוקב אחרי ריצת Action בזמן אמת, מתעדכן אוטומטית כל 3 שניות עד לסיום",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "יצירת ריצת Action ידנית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מפעיל ידנית workflow ספציפי על ענף main (החלף ???.yml בשם קובץ ה-workflow)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "סנכרון מוחלט",
    "type": "description",
    "anchor": "sync"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "איפוס מלא לגיטהאב",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "השוואת המאגר המקומי לגיטהאב באופן מוחלט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מאפס את כל הקבצים למצב המדויק של ענף main בגיטהאב - מוחק את כל השינויים המקומיים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מוחק את כל הקבצים והתיקיות שלא במעקב Git (untracked files)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "כלים נוספים",
    "type": "description",
    "anchor": "tools"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "כלי לאריזת המאגר לקובץ אחד תוך התעלמות מקבצים מסוימים - שימושי לשיתוף עם AI",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "פתיחה בטאב חדש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "פותח את הקובץ הנוכחי בטאב חדש ב-VS Code",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "Dart Analysis Server",
    "type": "description",
    "anchor": "dart"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "פתח את Command Palette:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "פותח את תפריט הפקודות של VS Code",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "מפעיל מחדש את שרת הניתוח של Dart - פותר בעיות של שגיאות שנתקעו או ניתוח לא מדויק",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "פקודות נוספות",
    "type": "description",
    "anchor": "custom"
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "הוסף פקודות משלך",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Git",
    "file": "git-guide.html",
    "context": "כאן תוכל להוסיף פקודות נוספות שאתה משתמש בהן לעיתים קרובות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Help Get-Process",
    "context": "עזרה ומידע על פקודות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Help Get-Process -Examples",
    "context": "עזרה ומידע על פקודות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Command",
    "context": "עזרה ומידע על פקודות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Command *process*",
    "context": "עזרה ומידע על פקודות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Location",
    "context": "ניווט בתיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-Location C:\\Users",
    "context": "ניווט בתיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-Location ..",
    "context": "ניווט בתיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-Location ~",
    "context": "ניווט בתיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem",
    "context": "הצגת תוכן - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Force",
    "context": "הצגת תוכן - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse",
    "context": "הצגת תוכן - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem *.txt",
    "context": "הצגת תוכן - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Clear-Host",
    "context": "ניקוי מסך והיסטוריה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-History",
    "context": "ניקוי מסך והיסטוריה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Invoke-History 5",
    "context": "ניקוי מסך והיסטוריה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "New-Item -ItemType File -Name \"file.txt\"",
    "context": "יצירת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-Content -Path \"file.txt\" -Value \"Hello World\"",
    "context": "יצירת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Add-Content -Path \"file.txt\" -Value \"New line\"",
    "context": "יצירת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file.txt",
    "context": "קריאת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file.txt -Head 10",
    "context": "קריאת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file.txt -Tail 10",
    "context": "קריאת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file.txt -Wait",
    "context": "קריאת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Copy-Item source.txt destination.txt",
    "context": "העתקה והעברה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Copy-Item file.txt C:\\Backup\\",
    "context": "העתקה והעברה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Move-Item source.txt destination.txt",
    "context": "העתקה והעברה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Rename-Item oldname.txt newname.txt",
    "context": "העתקה והעברה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-Item file.txt",
    "context": "מחיקת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-Item file.txt -Force",
    "context": "מחיקת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-Item *.tmp",
    "context": "מחיקת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Item file.txt | Format-List *",
    "context": "מידע על קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Item file.txt | Select-Object Name, Length",
    "context": "מידע על קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Test-Path file.txt",
    "context": "מידע על קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-FileHash file.txt -Algorithm SHA256",
    "context": "מידע על קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "New-Item -ItemType Directory -Name \"MyFolder\"",
    "context": "יצירת תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "New-Item -ItemType Directory -Path \"Folder1\", \"Folder2\", \"Folder3\"",
    "context": "יצירת תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "New-Item -ItemType Directory -Path \"Parent\\Child\\GrandChild\" -Force",
    "context": "יצירת תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Copy-Item -Path \"Source\" -Destination \"Dest\" -Recurse",
    "context": "העתקה והעברה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Move-Item -Path \"OldFolder\" -Destination \"NewFolder\"",
    "context": "העתקה והעברה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Rename-Item -Path \"OldName\" -NewName \"NewName\"",
    "context": "העתקה והעברה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-Item \"FolderName\"",
    "context": "מחיקת תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-Item \"FolderName\" -Recurse -Force",
    "context": "מחיקת תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-Item \"FolderName\\*\" -Recurse -Force",
    "context": "מחיקת תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem \"FolderName\" -Recurse | Measure-Object -Property Length\n                                -Sum",
    "context": "מידע על תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem \"FolderName\" -File -Recurse | Measure-Object",
    "context": "מידע על תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse -Directory | Select-Object FullName",
    "context": "מידע על תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Directory | ForEach-Object { [PSCustomObject]@{ Name =\n                                $_.Name; Size = (Get-ChildItem $_.FullName -Recurse | Measure-Object -Property Length\n                                -Sum).Sum } } | Sort-Object Size -Descending",
    "context": "מידע על תיקיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse -Filter \"*.txt\"",
    "context": "חיפוש קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse | Where-Object { $_.LastWriteTime -gt\n                                (Get-Date).AddDays(-7) }",
    "context": "חיפוש קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse -File | Where-Object { $_.Length -gt 100MB }",
    "context": "חיפוש קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse -File | Where-Object { $_.Length -eq 0 }",
    "context": "חיפוש קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse | Where-Object { $_.CreationTime -gt\n                                \"2024-01-01\" }",
    "context": "חיפוש קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Select-String -Path \"file.txt\" -Pattern \"search text\"",
    "context": "חיפוש בתוכן קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse -Filter \"*.txt\" | Select-String -Pattern \"search\n                                text\"",
    "context": "חיפוש בתוכן קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Select-String -Path \"*.log\" -Pattern \"\\d{3}-\\d{3}-\\d{4}\"",
    "context": "חיפוש בתוכן קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Select-String -Path \"file.txt\" -Pattern \"text\" -CaseSensitive:$false",
    "context": "חיפוש בתוכן קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem | Sort-Object Length -Descending",
    "context": "מיון וסינון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem | Sort-Object LastWriteTime -Descending",
    "context": "מיון וסינון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse -File | Sort-Object Length -Descending |\n                                Select-Object -First 10 Name,\n                                @{Name=\"Size(MB)\";Expression={[math]::Round($_.Length/1MB,2)}}",
    "context": "מיון וסינון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem | Where-Object { $_.Extension -in \".txt\", \".log\", \".csv\"\n                                }",
    "context": "מיון וסינון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse | Select-Object Name -Unique",
    "context": "מיון וסינון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Compare-Object (Get-Content file1.txt) (Get-Content file2.txt)",
    "context": "השוואה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Recurse -File | Group-Object -Property Length |\n                                Where-Object { $_.Count -gt 1 }",
    "context": "השוואה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Test-Connection google.com",
    "context": "בדיקת חיבור - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Test-Connection google.com -Count 4",
    "context": "בדיקת חיבור - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Test-NetConnection google.com -Port 443",
    "context": "בדיקת חיבור - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Test-NetConnection google.com -TraceRoute",
    "context": "בדיקת חיבור - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-NetIPAddress",
    "context": "מידע רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-NetAdapter",
    "context": "מידע רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-NetIPConfiguration",
    "context": "מידע רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-NetRoute",
    "context": "מידע רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-NetTCPConnection",
    "context": "מידע רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-NetTCPConnection -State Listen",
    "context": "מידע רשת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Resolve-DnsName google.com",
    "context": "DNS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Resolve-DnsName google.com -Type MX",
    "context": "DNS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Clear-DnsClientCache",
    "context": "DNS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-DnsClientCache",
    "context": "DNS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Invoke-WebRequest -Uri \"https://example.com/file.zip\" -OutFile\n                                \"file.zip\"",
    "context": "הורדת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Invoke-RestMethod -Uri \"https://api.example.com/data\" -OutFile\n                                \"data.json\"",
    "context": "הורדת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Invoke-RestMethod -Uri \"https://api.example.com/data\"",
    "context": "הורדת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Invoke-RestMethod -Uri \"https://api.example.com\" -Method Post -Body\n                                @{key=\"value\"}",
    "context": "הורדת קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "netsh wlan show profiles",
    "context": "Wi-Fi - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "netsh wlan show profile name=\"WiFiName\" key=clear",
    "context": "Wi-Fi - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "netsh wlan disconnect",
    "context": "Wi-Fi - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ComputerInfo",
    "context": "מידע כללי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ComputerInfo | Select-Object WindowsVersion, OsArchitecture",
    "context": "מידע כללי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$env:COMPUTERNAME",
    "context": "מידע כללי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$env:USERNAME",
    "context": "מידע כללי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "(Get-Date) - (Get-CimInstance Win32_OperatingSystem).LastBootUpTime",
    "context": "מידע כללי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores,\n                                NumberOfLogicalProcessors",
    "context": "חומרה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-CimInstance Win32_PhysicalMemory | Measure-Object -Property\n                                Capacity -Sum | Select-Object\n                                @{Name=\"TotalRAM(GB)\";Expression={[math]::Round($_.Sum/1GB,2)}}",
    "context": "חומרה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-CimInstance Win32_VideoController | Select-Object Name,\n                                VideoModeDescription, DriverVersion",
    "context": "חומרה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-CimInstance Win32_DiskDrive | Select-Object Model, Size, MediaType",
    "context": "חומרה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-CimInstance Win32_Battery | Select-Object Name,\n                                EstimatedChargeRemaining, BatteryStatus",
    "context": "חומרה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-PSDrive -PSProvider FileSystem",
    "context": "דיסקים וכוננים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Volume",
    "context": "דיסקים וכוננים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Volume -DriveLetter C | Select-Object DriveLetter, FileSystemLabel,\n                                Size, SizeRemaining",
    "context": "דיסקים וכוננים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-PhysicalDisk | Select-Object FriendlyName, HealthStatus,\n                                OperationalStatus",
    "context": "דיסקים וכוננים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Counter '\\Processor(_Total)\\% Processor Time'",
    "context": "ביצועים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-CimInstance Win32_OperatingSystem | Select-Object\n                                @{Name=\"FreeMemory(GB)\";Expression={[math]::Round($_.FreePhysicalMemory/1MB,2)}}",
    "context": "ביצועים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-CimInstance MSAcpi_ThermalZoneTemperature -Namespace \"root/wmi\" |\n                                Select-Object CurrentTemperature",
    "context": "ביצועים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-WindowsUpdate",
    "context": "עדכונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-HotFix | Sort-Object InstalledOn -Descending",
    "context": "עדכונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process -Name \"chrome\"",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First\n                                10 Name, @{Name=\"Memory(MB)\";Expression={[math]::Round($_.WorkingSet/1MB,2)}}",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process | Sort-Object CPU -Descending | Select-Object -First 10\n                                Name, CPU",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Stop-Process -Name \"notepad\"",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Stop-Process -Id 1234",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Stop-Process -Name \"chrome\" -Force",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Start-Process \"notepad.exe\"",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Start-Process \"powershell.exe\" -Verb RunAs",
    "context": "ניהול תהליכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Service",
    "context": "ניהול שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Service | Where-Object {$_.Status -eq \"Running\"}",
    "context": "ניהול שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Service -Name \"wuauserv\"",
    "context": "ניהול שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Start-Service -Name \"wuauserv\"",
    "context": "ניהול שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Stop-Service -Name \"wuauserv\"",
    "context": "ניהול שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Restart-Service -Name \"wuauserv\"",
    "context": "ניהול שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-Service -Name \"wuauserv\" -StartupType Automatic",
    "context": "ניהול שירותים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ScheduledTask",
    "context": "משימות מתוזמנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ScheduledTask | Where-Object {$_.State -eq \"Ready\"}",
    "context": "משימות מתוזמנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Start-ScheduledTask -TaskName \"TaskName\"",
    "context": "משימות מתוזמנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Disable-ScheduledTask -TaskName \"TaskName\"",
    "context": "משימות מתוזמנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ItemProperty\n                                HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* | Select-Object DisplayName,\n                                DisplayVersion, Publisher",
    "context": "אפליקציות מותקנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ItemProperty\n                                HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* | Where-Object\n                                {$_.DisplayName -like \"*Chrome*\"}",
    "context": "אפליקציות מותקנות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"hello world\".ToUpper()",
    "context": "עבודה עם מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"HELLO WORLD\".ToLower()",
    "context": "עבודה עם מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"Hello World\" -replace \"World\", \"PowerShell\"",
    "context": "עבודה עם מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"apple,banana,orange\" -split \",\"",
    "context": "עבודה עם מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "@(\"apple\", \"banana\", \"orange\") -join \", \"",
    "context": "עבודה עם מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\" hello world \".Trim()",
    "context": "עבודה עם מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"Hello World\" -like \"*World*\"",
    "context": "עבודה עם מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "(Get-Content file.txt).Count",
    "context": "עיבוד קבצי טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "(Get-Content file.txt | Measure-Object -Word).Words",
    "context": "עיבוד קבצי טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file.txt | Sort-Object -Unique | Set-Content output.txt",
    "context": "עיבוד קבצי טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file.txt | Sort-Object | Set-Content sorted.txt",
    "context": "עיבוד קבצי טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "(Get-Content file.txt) -replace \"old\", \"new\" | Set-Content file.txt",
    "context": "עיבוד קבצי טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file.txt | Where-Object {$_ -like \"*error*\"}",
    "context": "עיבוד קבצי טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file1.txt, file2.txt, file3.txt | Set-Content merged.txt",
    "context": "עיבוד קבצי טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Import-Csv data.csv",
    "context": "CSV ו-JSON - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process | Export-Csv processes.csv -NoTypeInformation",
    "context": "CSV ו-JSON - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process | Select-Object Name, CPU | ConvertTo-Json",
    "context": "CSV ו-JSON - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content data.json | ConvertFrom-Json",
    "context": "CSV ו-JSON - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process | Export-Clixml processes.xml",
    "context": "CSV ו-JSON - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Import-Clixml processes.xml",
    "context": "CSV ו-JSON - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"test@email.com\" -match \"\\w+@\\w+\\.\\w+\"",
    "context": "Regex - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"Price is 100 dollars\" -match \"\\d+\"",
    "context": "Regex - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"Phone: 123-456-7890\" -replace \"\\d{3}-\\d{3}-\\d{4}\", \"XXX-XXX-XXXX\"",
    "context": "Regex - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Compress-Archive -Path \"C:\\Files\\*\" -DestinationPath \"archive.zip\"",
    "context": "קבצי ZIP - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Compress-Archive -Path \"C:\\MyFolder\" -DestinationPath \"folder.zip\"",
    "context": "קבצי ZIP - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Compress-Archive -Path \"newfile.txt\" -Update -DestinationPath\n                                \"archive.zip\"",
    "context": "קבצי ZIP - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Expand-Archive -Path \"archive.zip\" -DestinationPath \"C:\\Extracted\"",
    "context": "קבצי ZIP - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Expand-Archive -Path \"archive.zip\" -DestinationPath \"C:\\Extracted\"\n                                -Force",
    "context": "קבצי ZIP - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Path \"archive.zip\" | Select-Object -ExpandProperty\n                                FullName",
    "context": "קבצי ZIP - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Compress-Archive -Path \"C:\\Files\\*\" -DestinationPath \"archive.zip\"\n                                -CompressionLevel Optimal",
    "context": "דחיסה מתקדמת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Compress-Archive -Path \"C:\\Files\\*\" -DestinationPath \"archive.zip\"\n                                -CompressionLevel Fastest",
    "context": "דחיסה מתקדמת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Compress-Archive -Path \"file1.txt\", \"file2.txt\", \"file3.txt\"\n                                -DestinationPath \"files.zip\"",
    "context": "דחיסה מתקדמת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$date = Get-Date -Format \"yyyy-MM-dd\"; Compress-Archive -Path \"C:\\Data\"\n                                -DestinationPath \"Backup_$date.zip\"",
    "context": "גיבוי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$timestamp = Get-Date -Format \"yyyyMMdd_HHmmss\"; Compress-Archive -Path\n                                \"C:\\Important\" -DestinationPath \"C:\\Backups\\Backup_$timestamp.zip\"",
    "context": "גיבוי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Acl \"file.txt\" | Format-List",
    "context": "הרשאות קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Acl \"source.txt\" | Set-Acl \"destination.txt\"",
    "context": "הרשאות קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$acl = Get-Acl \"file.txt\"; $permission = \"DOMAIN\\User\",\"Read\",\"Allow\";\n                                $accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule $permission;\n                                $acl.SetAccessRule($accessRule); Set-Acl \"file.txt\" $acl",
    "context": "הרשאות קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$acl = Get-Acl \"file.txt\"; $acl.SetAccessRuleProtection($true, $false);\n                                Set-Acl \"file.txt\" $acl",
    "context": "הרשאות קבצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ExecutionPolicy",
    "context": "Execution Policy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ExecutionPolicy -List",
    "context": "Execution Policy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-ExecutionPolicy Unrestricted",
    "context": "Execution Policy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-ExecutionPolicy RemoteSigned",
    "context": "Execution Policy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "PowerShell.exe -ExecutionPolicy Bypass -File script.ps1",
    "context": "Execution Policy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-LocalUser",
    "context": "משתמשים וקבוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "New-LocalUser -Name \"NewUser\" -Password (ConvertTo-SecureString\n                                \"P@ssw0rd\" -AsPlainText -Force)",
    "context": "משתמשים וקבוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-LocalGroup",
    "context": "משתמשים וקבוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Add-LocalGroupMember -Group \"Administrators\" -Member \"UserName\"",
    "context": "משתמשים וקבוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-LocalGroupMember -Group \"Administrators\"",
    "context": "משתמשים וקבוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-NetFirewallProfile | Select-Object Name, Enabled",
    "context": "חומת אש (Firewall) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-NetFirewallRule | Where-Object {$_.Enabled -eq $true}",
    "context": "חומת אש (Firewall) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "New-NetFirewallRule -DisplayName \"Allow Port 8080\" -Direction Inbound\n                                -LocalPort 8080 -Protocol TCP -Action Allow",
    "context": "חומת אש (Firewall) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Disable-NetFirewallRule -DisplayName \"RuleName\"",
    "context": "חומת אש (Firewall) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-NetFirewallRule -DisplayName \"RuleName\"",
    "context": "חומת אש (Firewall) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "ConvertTo-SecureString \"MyPassword\" -AsPlainText -Force",
    "context": "הצפנה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Read-Host \"Enter Password\" -AsSecureString | ConvertFrom-SecureString |\n                                Out-File \"password.txt\"",
    "context": "הצפנה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$password = Get-Content \"password.txt\" | ConvertTo-SecureString",
    "context": "הצפנה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ItemProperty -Path\n                                \"HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\"",
    "context": "קריאה מהרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ItemPropertyValue -Path\n                                \"HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\" -Name \"ProgramFilesDir\"",
    "context": "קריאה מהרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Test-Path \"HKLM:\\Software\\MyApp\"",
    "context": "קריאה מהרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Path \"HKLM:\\Software\\Microsoft\"",
    "context": "קריאה מהרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "New-Item -Path \"HKCU:\\Software\\MyApp\"",
    "context": "כתיבה לרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "New-ItemProperty -Path \"HKCU:\\Software\\MyApp\" -Name \"Version\" -Value\n                                \"1.0\" -PropertyType String",
    "context": "כתיבה לרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-ItemProperty -Path \"HKCU:\\Software\\MyApp\" -Name \"Version\" -Value\n                                \"2.0\"",
    "context": "כתיבה לרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-ItemProperty -Path \"HKCU:\\Software\\MyApp\" -Name \"Version\"",
    "context": "כתיבה לרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Remove-Item -Path \"HKCU:\\Software\\MyApp\" -Recurse",
    "context": "כתיבה לרישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "reg export \"HKCU\\Software\\MyApp\" \"backup.reg\"",
    "context": "גיבוי ושחזור - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "reg import \"backup.reg\"",
    "context": "גיבוי ושחזור - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "reg export HKLM \"HKLM_backup.reg\"",
    "context": "גיבוי ושחזור - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Path \"HKLM:\\Software\" -Recurse -ErrorAction\n                                SilentlyContinue | Where-Object {$_.Name -like \"*SearchTerm*\"}",
    "context": "חיפוש ברישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Path \"HKCU:\\Software\" -Recurse | Get-ItemProperty |\n                                Where-Object {$_.PSObject.Properties.Name -contains \"Version\"}",
    "context": "חיפוש ברישום - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-ItemProperty -Path \"HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\n                                Defender\" -Name \"DisableAntiSpyware\" -Value 1",
    "context": "הגדרות נפוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Set-ItemProperty -Path \"HKCU:\\Control Panel\\Desktop\" -Name \"Wallpaper\"\n                                -Value \"C:\\path\\to\\image.jpg\"",
    "context": "הגדרות נפוצות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem | ForEach-Object { Write-Host $_.Name }",
    "context": "לולאות ותנאים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "for ($i = 1; $i -le 10; $i++) { Write-Host \"Number: $i\" }",
    "context": "לולאות ותנאים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$i = 1; while ($i -le 5) { Write-Host $i; $i++ }",
    "context": "לולאות ותנאים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "if (Test-Path \"file.txt\") { Write-Host \"File exists\" } else {\n                                Write-Host \"File not found\" }",
    "context": "לולאות ותנאים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "switch ($value) { 1 { \"One\" } 2 { \"Two\" } default { \"Other\" } }",
    "context": "לולאות ותנאים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "function Say-Hello { param($Name) Write-Host \"Hello, $Name!\" }",
    "context": "פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "function Get-Square { param($Number) return $Number * $Number }",
    "context": "פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "function Add-Numbers { param([int]$a, [int]$b) return $a + $b }",
    "context": "פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$myVar = \"Hello World\"",
    "context": "משתנים ומערכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$array = @(\"apple\", \"banana\", \"orange\")",
    "context": "משתנים ומערכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$array += \"grape\"",
    "context": "משתנים ומערכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$hash = @{ Name = \"John\"; Age = 30; City = \"New York\" }",
    "context": "משתנים ומערכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$hash[\"Name\"]",
    "context": "משתנים ומערכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$env:PATH",
    "context": "משתנים ומערכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process | Where-Object {$_.CPU -gt 100} | Sort-Object CPU\n                                -Descending",
    "context": "Pipeline ו-Operators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem | Where-Object {$_.Length -gt 1MB}",
    "context": "Pipeline ו-Operators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Process | Select-Object Name, CPU, WorkingSet",
    "context": "Pipeline ו-Operators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem | Group-Object Extension",
    "context": "Pipeline ו-Operators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem | Measure-Object -Property Length -Sum -Average",
    "context": "Pipeline ו-Operators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "try { Get-Content \"nonexistent.txt\" } catch { Write-Host \"Error: $_\" }",
    "context": "טיפול בשגיאות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-ChildItem -Path \"C:\\NoAccess\" -ErrorAction SilentlyContinue",
    "context": "טיפול בשגיאות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$Error[0]",
    "context": "טיפול בשגיאות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$Error.Clear()",
    "context": "טיפול בשגיאות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Module -ListAvailable",
    "context": "מודולים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Import-Module ModuleName",
    "context": "מודולים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Install-Module -Name ModuleName",
    "context": "מודולים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Update-Module -Name ModuleName",
    "context": "מודולים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Uninstall-Module -Name ModuleName",
    "context": "מודולים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": ".\\script.ps1",
    "context": "סקריפטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": ".\\script.ps1 -Parameter1 \"value\" -Parameter2 123",
    "context": "סקריפטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Start-Process powershell -ArgumentList \"-File script.ps1\"",
    "context": "סקריפטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Invoke-Command -ComputerName Server01 -FilePath \"C:\\Scripts\\script.ps1\"",
    "context": "סקריפטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Date",
    "context": "תאריך ושעה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Date -Format \"yyyy-MM-dd HH:mm:ss\"",
    "context": "תאריך ושעה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "(Get-Date).AddDays(7)",
    "context": "תאריך ושעה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$date1 = Get-Date \"2024-01-01\"; $date2 = Get-Date; ($date2 -\n                                $date1).Days",
    "context": "תאריך ושעה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "2 + 3 * 4",
    "context": "מחשבון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "[Math]::Pow(2, 10)",
    "context": "מחשבון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "[Math]::Sqrt(144)",
    "context": "מחשבון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "[Math]::Round(3.14159, 2)",
    "context": "מחשבון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Random -Minimum 1 -Maximum 100",
    "context": "מחשבון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "\"Hello World\" | Set-Clipboard",
    "context": "Clipboard - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Clipboard",
    "context": "Clipboard - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Get-Content file.txt | Set-Clipboard",
    "context": "Clipboard - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "$name = Read-Host \"Enter your name\"",
    "context": "קלט ופלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Write-Host \"Hello World\" -ForegroundColor Green",
    "context": "קלט ופלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Write-Warning \"This is a warning\"",
    "context": "קלט ופלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Write-Error \"This is an error\"",
    "context": "קלט ופלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "[System.Windows.MessageBox]::Show(\"Hello World\")",
    "context": "קלט ופלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Stop-Computer",
    "context": "מערכת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Restart-Computer",
    "context": "מערכת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "shutdown /s /t 3600",
    "context": "מערכת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "shutdown /a",
    "context": "מערכת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "rundll32.exe user32.dll,LockWorkStation",
    "context": "מערכת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "rundll32.exe powrprof.dll,SetSuspendState 0,1,0",
    "context": "מערכת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "explorer .",
    "context": "שונות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Start-Process \"https://www.google.com\"",
    "context": "שונות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "[guid]::NewGuid()",
    "context": "שונות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Start-Sleep -Seconds 5",
    "context": "שונות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "[console]::beep(500, 300)",
    "context": "שונות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "command": "Clear-RecycleBin -Force",
    "context": "שונות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פעולות בסיסיות",
    "type": "description",
    "anchor": "basics"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עזרה ומידע על פקודות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קבלת עזרה על פקודה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עזרה מפורטת עם דוגמאות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "רשימת כל הפקודות הזמינות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש פקודות לפי מילת מפתח:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניווט בתיקיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת התיקייה הנוכחית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: pwd",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מעבר לתיקייה אחרת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: cd C:\\Users",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חזרה לתיקייה הקודמת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מעבר לתיקיית הבית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "רשימת קבצים ותיקיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: ls, dir",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת קבצים נסתרים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגה רקורסיבית (כולל תתי-תיקיות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "סינון לפי סוג קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניקוי מסך והיסטוריה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניקוי המסך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: cls, clear",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת היסטוריית פקודות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הרצת פקודה מההיסטוריה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניהול קבצים",
    "type": "description",
    "anchor": "files"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת קבצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת קובץ ריק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת קובץ עם תוכן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הוספת תוכן לקובץ קיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאת קבצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת תוכן קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: cat, type",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת 10 השורות הראשונות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת 10 השורות האחרונות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מעקב אחר שינויים בקובץ (כמו tail -f):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העתקה והעברה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העתקת קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: cp, copy",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העתקה לתיקייה אחרת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העברת קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: mv, move",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שינוי שם קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקת קבצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקת קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: rm, del",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקה ללא אישור:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקת כל הקבצים מסוג מסוים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע על קבצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת מידע מפורט על קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת גודל קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקה אם קובץ קיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חישוב Hash של קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניהול תיקיות",
    "type": "description",
    "anchor": "folders"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת תיקיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת תיקייה חדשה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "או בקיצור: mkdir MyFolder",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת מספר תיקיות בבת אחת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת תיקיות מקוננות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העתקה והעברה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העתקת תיקייה עם כל התוכן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העברת תיקייה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שינוי שם תיקייה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקת תיקיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקת תיקייה ריקה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקת תיקייה עם כל התוכן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "זהירות! פעולה זו מוחקת הכל ללא אפשרות שחזור",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקת כל התוכן בתיקייה אך לא התיקייה עצמה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע על תיקיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חישוב גודל תיקייה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ספירת קבצים בתיקייה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת עץ תיקיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מציאת התיקיות הגדולות ביותר:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש ומיון",
    "type": "description",
    "anchor": "search"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש קבצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש קובץ לפי שם:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש קבצים שהשתנו ב-7 הימים האחרונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש קבצים גדולים מ-100MB:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש קבצים ריקים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש קבצים לפי תאריך יצירה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש בתוכן קבצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש טקסט בקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש בכל קבצי הטקסט בתיקייה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש עם Regex:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש לא רגיש לאותיות גדולות/קטנות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מיון וסינון",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מיון קבצים לפי גודל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מיון לפי תאריך שינוי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת 10 הקבצים הגדולים ביותר:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "סינון קבצים לפי סיומת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קבצים ייחודיים לפי שם (ללא כפילויות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "השוואת שני קבצים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מציאת קבצים כפולים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "רשת ואינטרנט",
    "type": "description",
    "anchor": "network"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת חיבור",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת חיבור לשרת (Ping):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "Ping עם מספר מוגבל של נסיונות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת פורט פתוח:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מעקב אחר מסלול (Traceroute):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת כתובת IP:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת כרטיסי רשת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת הגדרות IP מפורטות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת טבלת ניתוב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת חיבורים פעילים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת פורטים פתוחים במחשב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת רשומת MX:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניקוי מטמון DNS:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת מטמון DNS:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הורדת קבצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הורדת קובץ מהאינטרנט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הורדה מהירה יותר:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאת תוכן מ-URL:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שליחת בקשת POST:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת רשתות Wi-Fi שמורות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת סיסמת Wi-Fi:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "התנתקות מרשת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע על המחשב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "גרסת Windows:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "זמן הפעלה של המערכת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע על המעבד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע על הזיכרון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע על כרטיס המסך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע על הדיסק הקשיח:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע על הסוללה (למחשבים ניידים):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דיסקים וכוננים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת כל הכוננים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מקום פנוי בדיסק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מידע מפורט על דיסק C:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת בריאות הדיסק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שימוש במעבד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "זיכרון זמין:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "טמפרטורת המעבד (אם נתמך):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת עדכוני Windows:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דורש התקנת מודול PSWindowsUpdate",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "היסטוריית עדכונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "תהליכים ושירותים",
    "type": "description",
    "anchor": "processes"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניהול תהליכים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת כל התהליכים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש תהליך לפי שם:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "התהליכים שצורכים הכי הרבה זיכרון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "התהליכים שצורכים הכי הרבה CPU:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עצירת תהליך לפי שם:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עצירת תהליך לפי ID:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עצירה כפויה של תהליך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הפעלת תוכנית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הפעלה כמנהל מערכת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניהול שירותים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת כל השירותים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שירותים פעילים בלבד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש שירות לפי שם:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הפעלת שירות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עצירת שירות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הפעלה מחדש של שירות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שינוי סטטוס אוטומטי של שירות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "משימות מתוזמנות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת משימות מתוזמנות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "משימות פעילות בלבד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הפעלת משימה מתוזמנת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "השבתת משימה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "אפליקציות מותקנות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "רשימת תוכנות מותקנות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש תוכנה מסוימת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עבודה עם מחרוזות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "המרה לאותיות גדולות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "המרה לאותיות קטנות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "החלפת טקסט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פיצול מחרוזת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיבור מחרוזות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הסרת רווחים מהתחלה וסוף:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקה אם מחרוזת מכילה טקסט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עיבוד קבצי טקסט",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ספירת שורות בקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ספירת מילים בקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הסרת שורות כפולות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מיון שורות בקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "החלפת טקסט בקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "סינון שורות המכילות טקסט מסוים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מיזוג מספר קבצים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאת קובץ CSV:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "כתיבה לקובץ CSV:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "המרה ל-JSON:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאת JSON:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "המרה ל-XML:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "התאמת דפוס:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חילוץ מספרים מטקסט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "החלפה עם Regex:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דחיסה וארכיון",
    "type": "description",
    "anchor": "compression"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת קובץ ZIP:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דחיסת תיקייה שלמה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הוספת קבצים לארכיון קיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חילוץ קובץ ZIP:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חילוץ עם דריסת קבצים קיימים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת תוכן ארכיון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דחיסה מתקדמת",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דחיסה עם רמת דחיסה מקסימלית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דחיסה מהירה (פחות יעילה):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דחיסת קבצים מרובים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת גיבוי עם תאריך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "גיבוי אוטומטי של תיקייה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "אבטחה והרשאות",
    "type": "description",
    "anchor": "security"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הרשאות קבצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת הרשאות קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העתקת הרשאות מקובץ לקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הוספת הרשאת קריאה למשתמש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הסרת כל ההרשאות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "Execution Policy",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקת מדיניות הרצה נוכחית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת כל המדיניות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שינוי מדיניות להרצה חופשית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דורש הרשאות מנהל",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מדיניות מומלצת (חתימה מרחוק):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עקיפת מדיניות לסקריפט בודד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "משתמשים וקבוצות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת משתמשים מקומיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת משתמש חדש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת קבוצות מקומיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הוספת משתמש לקבוצה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת חברי קבוצה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חומת אש (Firewall)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת סטטוס חומת האש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת כללי חומת אש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת כלל חדש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצפנת מחרוזת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שמירת סיסמה מוצפנת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאת סיסמה מוצפנת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "רישום Windows (Registry)",
    "type": "description",
    "anchor": "registry"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאה מהרישום",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאת ערך מהרישום:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאת ערך ספציפי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בדיקה אם מפתח קיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת כל תתי-המפתחות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "כתיבה לרישום",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת מפתח חדש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הוספת ערך חדש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שינוי ערך קיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מחיקת מפתח:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "גיבוי ושחזור",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ייצוא מפתח לקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ייבוא מפתח מקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "גיבוי הרישום כולו:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש ברישום",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש מפתח לפי שם:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חיפוש ערך ספציפי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הגדרות נפוצות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "השבתת Windows Defender (זמנית):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דורש הרשאות מנהל והפעלה מחדש",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שינוי טפט שולחן העבודה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פקודות מתקדמות",
    "type": "description",
    "anchor": "advanced"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "לולאות ותנאים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "לולאת ForEach:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "לולאת While:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "תנאי If-Else:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת פונקציה פשוטה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פונקציה עם ערך החזרה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פונקציה עם פרמטרים מרובים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "משתנים ומערכים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הגדרת משתנה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת מערך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הוספה למערך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת Hash Table:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "גישה לערכים ב-Hash Table:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "משתנה סביבה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "Pipeline ו-Operators",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שרשור פקודות עם Pipeline:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "סינון עם Where-Object:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "בחירת מאפיינים עם Select-Object:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קיבוץ עם Group-Object:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מדידה עם Measure-Object:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "טיפול בשגיאות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "דיכוי שגיאות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת השגיאה האחרונה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניקוי רשימת שגיאות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת מודולים מותקנים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ייבוא מודול:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "התקנת מודול מ-PowerShell Gallery:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "עדכון מודול:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הסרת מודול:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הרצת סקריפט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הרצה עם פרמטרים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הרצה בחלון חדש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הרצה מרחוק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פקודות נוספות",
    "type": "description",
    "anchor": "custom"
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "תאריך ושעה נוכחיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פורמט מותאם אישית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הוספת ימים לתאריך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חישוב הפרש בין תאריכים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פעולות חשבון בסיסיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "שורש ריבועי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מספר אקראי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העתקה ל-Clipboard:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קריאה מ-Clipboard:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "העתקת תוכן קובץ ל-Clipboard:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "קבלת קלט מהמשתמש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת הודעה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת אזהרה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הצגת שגיאה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "חלון הודעה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "כיבוי המחשב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הפעלה מחדש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "כיבוי עם טיימר (בשניות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ביטול כיבוי מתוזמן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "נעילת המחשב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "מעבר למצב שינה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פתיחת Explorer בתיקייה נוכחית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "פתיחת URL בדפדפן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "יצירת GUID:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "המתנה (בשניות):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "הפעלת צליל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך PowerShell",
    "file": "powershell-guide.html",
    "context": "ניקוי סל המחזור:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "print(\"Hello, World!\")",
    "context": "הדפסה וקלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "name = \"Python\"\nprint(f\"Hello, {name}!\")  # f-string\nprint(\"Hello, {}!\".format(name))  # format\nprint(\"Hello, \" + name + \"!\")  # concatenation",
    "context": "הדפסה וקלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "name = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))",
    "context": "הדפסה וקלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "print(\"Hello\", end=\" \")\nprint(\"World\")",
    "context": "הדפסה וקלט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = 5\ny = \"Hello\"\nz = 3.14\nis_valid = True",
    "context": "משתנים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x, y, z = 1, 2, 3\na = b = c = 0",
    "context": "משתנים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "a, b = 5, 10\na, b = b, a  # swap",
    "context": "משתנים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = 5\nprint(type(x))  # \nprint(isinstance(x, int))  # True",
    "context": "משתנים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = 10 + 5   # חיבור\nx = 10 - 5   # חיסור\nx = 10 * 5   # כפל\nx = 10 / 5   # חילוק (תמיד float)\nx = 10 // 3  # חילוק שלם (3)\nx = 10 % 3   # שארית (1)\nx = 2 ** 3   # חזקה (8)",
    "context": "אופרטורים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x == y   # שווה\nx != y   # לא שווה\nx > y    # גדול מ\nx < y    # קטן מ\nx >= y   # גדול או שווה\nx <= y   # קטן או שווה",
    "context": "אופרטורים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x and y  # וגם\nx or y   # או\nnot x    # לא",
    "context": "אופרטורים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x += 5   # x = x + 5\nx -= 5   # x = x - 5\nx *= 5   # x = x * 5\nx /= 5   # x = x / 5",
    "context": "אופרטורים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# This is a comment\nx = 5  # This is also a comment",
    "context": "הערות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "\"\"\"\nThis is a multi-line comment\nor docstring\n\"\"\"",
    "context": "הערות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = 5\ny = -10\nz = 1000000",
    "context": "מספרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = 3.14\ny = -2.5\nz = 1.5e2  # 150.0 (scientific notation)",
    "context": "מספרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = 3 + 4j\nprint(x.real)  # 3.0\nprint(x.imag)  # 4.0",
    "context": "מספרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = int(3.14)      # 3\ny = float(5)       # 5.0\nz = str(123)       # \"123\"\nw = int(\"100\")     # 100",
    "context": "מספרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "is_valid = True\nis_empty = False",
    "context": "Boolean - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "bool(1)        # True\nbool(0)        # False\nbool(\"\")       # False\nbool(\"text\")   # True\nbool([])       # False\nbool([1, 2])   # True",
    "context": "Boolean - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = None\nif x is None:\n    print(\"x is empty\")",
    "context": "None - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "abs(-5)        # 5 (ערך מוחלט)\npow(2, 3)      # 8 (חזקה)\nround(3.14159, 2)  # 3.14 (עיגול)\nmax(1, 5, 3)   # 5\nmin(1, 5, 3)   # 1\nsum([1, 2, 3]) # 6",
    "context": "פעולות מתמטיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import math\n\nmath.sqrt(16)      # 4.0 (שורש)\nmath.ceil(3.2)     # 4 (עיגול למעלה)\nmath.floor(3.8)    # 3 (עיגול למטה)\nmath.pi            # 3.141592...\nmath.e             # 2.718281...\nmath.sin(math.pi/2)  # 1.0\nmath.log(10)       # 2.302... (לוגריתם טבעי)\nmath.log10(100)    # 2.0 (לוגריתם בסיס 10)",
    "context": "פעולות מתמטיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import random\n\nrandom.random()           # מספר אקראי בין 0 ל-1\nrandom.randint(1, 10)     # מספר שלם אקראי בין 1 ל-10\nrandom.uniform(1.0, 10.0) # מספר עשרוני אקראי\nrandom.choice([1, 2, 3])  # בחירה אקראית מרשימה\nrandom.shuffle([1, 2, 3]) # ערבוב רשימה",
    "context": "מספרים אקראיים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s1 = 'Hello'\ns2 = \"World\"\ns3 = '''Multi\nline\nstring'''\ns4 = \"\"\"Another\nmulti-line\"\"\"",
    "context": "יצירת מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"Hello\\nWorld\"  # שורה חדשה\ns = \"Hello\\tWorld\"  # Tab\ns = \"He said \\\"Hi\\\"\"  # גרש כפול\ns = 'It\\'s nice'  # גרש יחיד\ns = \"C:\\\\Users\\\\Name\"  # Backslash\ns = r\"C:\\Users\\Name\"  # Raw string (ללא escape)",
    "context": "יצירת מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s1 = \"Hello\"\ns2 = \"World\"\ns3 = s1 + \" \" + s2  # \"Hello World\"\ns4 = \"Ha\" * 3  # \"HaHaHa\"",
    "context": "פעולות על מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"Python\"\nlen(s)      # 6\ns[0]        # 'P' (תו ראשון)\ns[-1]       # 'n' (תו אחרון)\ns[1:4]      # 'yth' (slicing)\ns[:3]       # 'Pyt' (מההתחלה)\ns[3:]       # 'hon' (עד הסוף)\ns[::2]      # 'Pto' (כל תו שני)",
    "context": "פעולות על מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"Hello World\"\n\"Hello\" in s        # True\n\"hello\" in s        # False\ns.startswith(\"He\")  # True\ns.endswith(\"ld\")    # True",
    "context": "פעולות על מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"Hello World\"\ns.upper()       # \"HELLO WORLD\"\ns.lower()       # \"hello world\"\ns.capitalize()  # \"Hello world\"\ns.title()       # \"Hello World\"\ns.swapcase()    # \"hELLO wORLD\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"Hello World\"\ns.find(\"World\")      # 6 (מיקום)\ns.find(\"Python\")     # -1 (לא נמצא)\ns.index(\"World\")     # 6 (זורק שגיאה אם לא נמצא)\ns.count(\"l\")         # 3\ns.replace(\"World\", \"Python\")  # \"Hello Python\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"apple,banana,orange\"\ns.split(\",\")         # ['apple', 'banana', 'orange']\ns.split(\",\", 1)      # ['apple', 'banana,orange'] (מקסימום פיצולים)\n\nwords = [\"Hello\", \"World\"]\n\" \".join(words)      # \"Hello World\"\n\"-\".join(words)      # \"Hello-World\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"  Hello World  \"\ns.strip()       # \"Hello World\"\ns.lstrip()      # \"Hello World  \"\ns.rstrip()      # \"  Hello World\"\ns.strip(\"H\")    # \"ello World\" (הסרת תווים ספציפיים)",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"Hello\"\ns.center(10)       # \"  Hello   \"\ns.ljust(10)        # \"Hello     \"\ns.rjust(10)        # \"     Hello\"\ns.zfill(10)        # \"00000Hello\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "s = \"Hello123\"\ns.isalpha()     # False (רק אותיות?)\ns.isdigit()     # False (רק ספרות?)\ns.isalnum()     # True (אותיות או ספרות?)\ns.isspace()     # False (רק רווחים?)\ns.isupper()     # False (כולו אותיות גדולות?)\ns.islower()     # False (כולו אותיות קטנות?)",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "name = \"Alice\"\nage = 25\nprint(f\"My name is {name} and I'm {age} years old\")\nprint(f\"Next year I'll be {age + 1}\")\nprint(f\"{name:>10}\")  # יישור ימינה\nprint(f\"{age:05d}\")   # 00025 (padding)",
    "context": "עיצוב מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "\"Hello, {}!\".format(\"World\")\n\"Hello, {0}! {0}\".format(\"World\")\n\"Hello, {name}!\".format(name=\"Alice\")\n\"{:.2f}\".format(3.14159)  # 3.14",
    "context": "עיצוב מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "\"Hello, %s!\" % \"World\"\n\"I'm %d years old\" % 25\n\"Pi is %.2f\" % 3.14159",
    "context": "עיצוב מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = [1, 2, 3, 4, 5]\nmixed = [1, \"hello\", 3.14, True]\nempty = []\nnested = [[1, 2], [3, 4], [5, 6]]",
    "context": "רשימות - יצירה וגישה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = [10, 20, 30, 40, 50]\nnumbers[0]      # 10 (ראשון)\nnumbers[-1]     # 50 (אחרון)\nnumbers[1:4]    # [20, 30, 40] (slicing)\nnumbers[:3]     # [10, 20, 30]\nnumbers[2:]     # [30, 40, 50]\nnumbers[::2]    # [10, 30, 50] (כל שני)",
    "context": "רשימות - יצירה וגישה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = [1, 2, 3, 4, 5]\nnumbers[0] = 10         # [10, 2, 3, 4, 5]\nnumbers[1:3] = [20, 30] # [10, 20, 30, 4, 5]",
    "context": "רשימות - יצירה וגישה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = [1, 2, 3]\nnumbers.append(4)           # [1, 2, 3, 4]\nnumbers.insert(0, 0)        # [0, 1, 2, 3, 4]\nnumbers.extend([5, 6])      # [0, 1, 2, 3, 4, 5, 6]\nnumbers += [7, 8]           # [0, 1, 2, 3, 4, 5, 6, 7, 8]",
    "context": "מתודות רשימה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = [1, 2, 3, 4, 5]\nnumbers.remove(3)       # [1, 2, 4, 5] (מסיר ערך)\nnumbers.pop()           # מסיר ומחזיר אחרון\nnumbers.pop(0)          # מסיר ומחזיר לפי אינדקס\ndel numbers[0]          # מחיקה לפי אינדקס\nnumbers.clear()         # מרוקן את הרשימה",
    "context": "מתודות רשימה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = [3, 1, 4, 1, 5, 9, 2]\nnumbers.index(4)        # 2 (מיקום)\nnumbers.count(1)        # 2 (כמה פעמים)\nnumbers.sort()          # [1, 1, 2, 3, 4, 5, 9] (ממיין במקום)\nsorted(numbers)         # מחזיר רשימה ממוינת חדשה\nnumbers.reverse()       # הופך את הסדר\nreversed(numbers)       # מחזיר iterator הפוך",
    "context": "מתודות רשימה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "original = [1, 2, 3]\ncopy1 = original.copy()     # העתקה רדודה\ncopy2 = original[:]         # העתקה רדודה\ncopy3 = list(original)      # העתקה רדודה\n\nimport copy\ndeep = copy.deepcopy(original)  # העתקה עמוקה",
    "context": "מתודות רשימה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = [1, 2, 3, 4, 5]\nlen(numbers)        # 5 (אורך)\nsum(numbers)        # 15 (סכום)\nmax(numbers)        # 5 (מקסימום)\nmin(numbers)        # 1 (מינימום)\nany([False, True])  # True (האם יש True?)\nall([True, True])   # True (האם הכל True?)",
    "context": "פעולות על רשימות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = [1, 2, 3, 4, 5]\n\n# לולאה רגילה\nfor num in numbers:\n    print(num)\n\n# עם אינדקס\nfor i, num in enumerate(numbers):\n    print(f\"Index {i}: {num}\")\n\n# התחלה מאינדקס אחר\nfor i, num in enumerate(numbers, start=1):\n    print(f\"Position {i}: {num}\")",
    "context": "פעולות על רשימות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "t1 = (1, 2, 3)\nt2 = 1, 2, 3        # ללא סוגריים\nt3 = (1,)           # tuple עם איבר אחד\nt4 = tuple([1, 2])  # המרה מרשימה",
    "context": "Tuples - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "t = (10, 20, 30, 40)\nt[0]        # 10\nt[-1]       # 40\nt[1:3]      # (20, 30)\n# t[0] = 5  # שגיאה! tuple הוא immutable",
    "context": "Tuples - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "t = (1, 2, 3)\na, b, c = t         # a=1, b=2, c=3\n\n# עם *\na, *b, c = (1, 2, 3, 4, 5)  # a=1, b=[2,3,4], c=5\n\n# החלפת ערכים\nx, y = 5, 10\nx, y = y, x         # swap",
    "context": "Tuples - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "t = (1, 2, 3, 2, 1)\nt.count(2)      # 2\nt.index(3)      # 2",
    "context": "Tuples - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "zeros = [0] * 5             # [0, 0, 0, 0, 0]\nrange_list = list(range(5))  # [0, 1, 2, 3, 4]\nrange_list = list(range(1, 6))  # [1, 2, 3, 4, 5]\nrange_list = list(range(0, 10, 2))  # [0, 2, 4, 6, 8]",
    "context": "טיפים שימושיים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "list1 = [1, 2, 3]\nlist2 = [4, 5, 6]\n\n# שילוב\ncombined = list1 + list2  # [1, 2, 3, 4, 5, 6]\n\n# zip - שילוב מקביל\npairs = list(zip(list1, list2))  # [(1,4), (2,5), (3,6)]",
    "context": "טיפים שימושיים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "person = {\"name\": \"Alice\", \"age\": 25, \"city\": \"Tel Aviv\"}\nempty = {}\ndict_from_list = dict([(\"a\", 1), (\"b\", 2)])\ndict_comp = {x: x**2 for x in range(5)}",
    "context": "מילונים - יצירה וגישה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "person = {\"name\": \"Alice\", \"age\": 25}\nperson[\"name\"]          # \"Alice\"\nperson.get(\"name\")      # \"Alice\"\nperson.get(\"email\", \"N/A\")  # \"N/A\" (ברירת מחדל)",
    "context": "מילונים - יצירה וגישה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "person = {\"name\": \"Alice\"}\nperson[\"age\"] = 25          # הוספה\nperson[\"name\"] = \"Bob\"      # שינוי\nperson.update({\"city\": \"Tel Aviv\", \"age\": 26})  # עדכון מרובה",
    "context": "מילונים - יצירה וגישה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "person = {\"name\": \"Alice\", \"age\": 25, \"city\": \"Tel Aviv\"}\ndel person[\"age\"]           # מחיקה\nperson.pop(\"city\")          # מחיקה והחזרת ערך\nperson.popitem()            # מחיקת זוג אחרון\nperson.clear()              # ריקון המילון",
    "context": "מתודות מילון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "person = {\"name\": \"Alice\", \"age\": 25}\n\"name\" in person        # True\n\"email\" in person       # False\nlen(person)             # 2",
    "context": "מתודות מילון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "person = {\"name\": \"Alice\", \"age\": 25}\nperson.keys()           # dict_keys(['name', 'age'])\nperson.values()         # dict_values(['Alice', 25])\nperson.items()          # dict_items([('name', 'Alice'), ('age', 25)])\n\nlist(person.keys())     # ['name', 'age']",
    "context": "מתודות מילון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "person = {\"name\": \"Alice\", \"age\": 25}\n\n# לולאה על מפתחות\nfor key in person:\n    print(key, person[key])\n\n# לולאה על מפתחות וערכים\nfor key, value in person.items():\n    print(f\"{key}: {value}\")",
    "context": "מתודות מילון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = {1, 2, 3, 4, 5}\nempty = set()               # set ריק\nfrom_list = set([1, 2, 2, 3])  # {1, 2, 3} (ללא כפילויות)",
    "context": "Sets (קבוצות) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "numbers = {1, 2, 3}\nnumbers.add(4)          # {1, 2, 3, 4}\nnumbers.remove(2)       # {1, 3, 4} (שגיאה אם לא קיים)\nnumbers.discard(5)      # ללא שגיאה אם לא קיים\nnumbers.pop()           # מסיר איבר אקראי\nnumbers.clear()         # ריקון",
    "context": "Sets (קבוצות) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\na | b               # {1, 2, 3, 4, 5, 6} (איחוד)\na & b               # {3, 4} (חיתוך)\na - b               # {1, 2} (הפרש)\na ^ b               # {1, 2, 5, 6} (הפרש סימטרי)\n\na.union(b)          # איחוד\na.intersection(b)   # חיתוך\na.difference(b)     # הפרש\na.issubset(b)       # תת-קבוצה?\na.issuperset(b)     # על-קבוצה?",
    "context": "Sets (קבוצות) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = 10\nif x > 5:\n    print(\"x is greater than 5\")\nelif x == 5:\n    print(\"x is 5\")\nelse:\n    print(\"x is less than 5\")",
    "context": "תנאים - if/elif/else - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x = 10\nresult = \"big\" if x > 5 else \"small\"\nprint(\"yes\") if x > 5 else print(\"no\")",
    "context": "תנאים - if/elif/else - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "x, y = 10, 20\nif x > 5 and y < 30:\n    print(\"Both conditions are true\")\n\nif x > 5 or y > 30:\n    print(\"At least one is true\")\n\nif not x < 5:\n    print(\"x is not less than 5\")",
    "context": "תנאים - if/elif/else - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "for i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\nfor i in range(1, 6):\n    print(i)  # 1, 2, 3, 4, 5\n\nfor i in range(0, 10, 2):\n    print(i)  # 0, 2, 4, 6, 8",
    "context": "לולאות - for - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "fruits = [\"apple\", \"banana\", \"orange\"]\nfor fruit in fruits:\n    print(fruit)\n\n# עם אינדקס\nfor i, fruit in enumerate(fruits):\n    print(f\"{i}: {fruit}\")",
    "context": "לולאות - for - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "person = {\"name\": \"Alice\", \"age\": 25}\nfor key in person:\n    print(key, person[key])\n\nfor key, value in person.items():\n    print(f\"{key}: {value}\")",
    "context": "לולאות - for - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "i = 0\nwhile i < 5:\n    print(i)\n    i += 1",
    "context": "לולאות - while - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "while True:\n    user_input = input(\"Enter 'quit' to exit: \")\n    if user_input == \"quit\":\n        break\n    print(f\"You entered: {user_input}\")",
    "context": "לולאות - while - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "for i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0, 1, 2, 3, 4",
    "context": "break, continue, pass - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "for i in range(5):\n    if i == 2:\n        continue\n    print(i)  # 0, 1, 3, 4",
    "context": "break, continue, pass - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "for i in range(5):\n    if i == 2:\n        pass  # לא עושה כלום\n    print(i)",
    "context": "break, continue, pass - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "for i in range(5):\n    if i == 10:\n        break\nelse:\n    print(\"Loop completed without break\")",
    "context": "break, continue, pass - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def greet():\n    print(\"Hello!\")\n\ngreet()  # קריאה לפונקציה",
    "context": "הגדרת פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def greet(name):\n    print(f\"Hello, {name}!\")\n\ngreet(\"Alice\")",
    "context": "הגדרת פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def add(a, b):\n    return a + b\n\nresult = add(5, 3)  # 8",
    "context": "הגדרת פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def greet(name=\"Guest\"):\n    print(f\"Hello, {name}!\")\n\ngreet()          # \"Hello, Guest!\"\ngreet(\"Alice\")   # \"Hello, Alice!\"",
    "context": "הגדרת פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def sum_all(*args):\n    return sum(args)\n\nsum_all(1, 2, 3)        # 6\nsum_all(1, 2, 3, 4, 5)  # 15",
    "context": "פרמטרים מתקדמים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def print_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f\"{key}: {value}\")\n\nprint_info(name=\"Alice\", age=25, city=\"Tel Aviv\")",
    "context": "פרמטרים מתקדמים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def func(a, b=2, *args, **kwargs):\n    print(f\"a={a}, b={b}\")\n    print(f\"args={args}\")\n    print(f\"kwargs={kwargs}\")\n\nfunc(1, 3, 4, 5, x=10, y=20)",
    "context": "פרמטרים מתקדמים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "square = lambda x: x ** 2\nprint(square(5))  # 25\n\nadd = lambda a, b: a + b\nprint(add(3, 4))  # 7",
    "context": "פונקציות מתקדמות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def outer(x):\n    def inner(y):\n        return x + y\n    return inner\n\nadd_5 = outer(5)\nprint(add_5(3))  # 8",
    "context": "פונקציות מתקדמות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def my_decorator(func):\n    def wrapper():\n        print(\"Before function\")\n        func()\n        print(\"After function\")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()",
    "context": "פונקציות מתקדמות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# map - החלת פונקציה על כל איבר\nnumbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))  # [1, 4, 9, 16, 25]\n\n# filter - סינון\nevens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]\n\n# reduce - צמצום לערך אחד\nfrom functools import reduce\nsum_all = reduce(lambda x, y: x + y, numbers)  # 15",
    "context": "פונקציות שימושיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# קריאת כל הקובץ\nwith open(\"file.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    print(content)\n\n# קריאה שורה אחר שורה\nwith open(\"file.txt\", \"r\") as f:\n    for line in f:\n        print(line.strip())",
    "context": "קריאה וכתיבה בסיסית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# כתיבה (דורס קובץ קיים)\nwith open(\"file.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n    f.write(\"Second line\\n\")\n\n# הוספה לסוף הקובץ\nwith open(\"file.txt\", \"a\") as f:\n    f.write(\"Appended line\\n\")",
    "context": "קריאה וכתיבה בסיסית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "with open(\"file.txt\", \"r\") as f:\n    lines = f.readlines()  # רשימה של שורות\n    # או\n    lines = f.read().splitlines()  # ללא \\n",
    "context": "קריאה וכתיבה בסיסית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "\"r\"   # קריאה (ברירת מחדל)\n\"w\"   # כתיבה (דורס)\n\"a\"   # הוספה\n\"x\"   # יצירה (שגיאה אם קיים)\n\"r+\"  # קריאה וכתיבה\n\"rb\"  # קריאה בינארית\n\"wb\"  # כתיבה בינארית",
    "context": "מצבי פתיחה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import os\n\nos.path.exists(\"file.txt\")     # בדיקה אם קיים\nos.path.isfile(\"file.txt\")     # האם זה קובץ?\nos.path.isdir(\"folder\")        # האם זו תיקייה?\nos.path.getsize(\"file.txt\")    # גודל בבתים\nos.path.join(\"folder\", \"file.txt\")  # חיבור נתיבים\nos.remove(\"file.txt\")          # מחיקת קובץ\nos.rename(\"old.txt\", \"new.txt\")  # שינוי שם",
    "context": "עבודה עם נתיבים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "from pathlib import Path\n\np = Path(\"file.txt\")\np.exists()              # בדיקה אם קיים\np.is_file()             # האם זה קובץ?\np.read_text()           # קריאת תוכן\np.write_text(\"Hello\")   # כתיבה\np.unlink()              # מחיקה\np.stat().st_size        # גודל",
    "context": "עבודה עם נתיבים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import json\n\n# כתיבה\ndata = {\"name\": \"Alice\", \"age\": 25}\nwith open(\"data.json\", \"w\") as f:\n    json.dump(data, f, indent=2)\n\n# קריאה\nwith open(\"data.json\", \"r\") as f:\n    data = json.load(f)\n\n# המרה למחרוזת\njson_string = json.dumps(data)\ndata = json.loads(json_string)",
    "context": "JSON ו-CSV - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import csv\n\n# כתיבה\nwith open(\"data.csv\", \"w\", newline=\"\") as f:\n    writer = csv.writer(f)\n    writer.writerow([\"Name\", \"Age\"])\n    writer.writerow([\"Alice\", 25])\n\n# קריאה\nwith open(\"data.csv\", \"r\") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)",
    "context": "JSON ו-CSV - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        print(f\"Hello, I'm {self.name}\")\n\n# יצירת אובייקט\nperson = Person(\"Alice\", 25)\nperson.greet()",
    "context": "מחלקות בסיסיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class Car:\n    # מאפיין מחלקה\n    wheels = 4\n    \n    def __init__(self, brand, model):\n        # מאפייני instance\n        self.brand = brand\n        self.model = model\n    \n    def info(self):\n        return f\"{self.brand} {self.model}\"\n\ncar = Car(\"Toyota\", \"Corolla\")\nprint(car.info())",
    "context": "מחלקות בסיסיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.name} says Woof!\"\n\nclass Cat(Animal):\n    def speak(self):\n        return f\"{self.name} says Meow!\"\n\ndog = Dog(\"Buddy\")\nprint(dog.speak())",
    "context": "ירושה (Inheritance) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class Employee(Person):\n    def __init__(self, name, age, salary):\n        super().__init__(name, age)\n        self.salary = salary\n    \n    def info(self):\n        return f\"{self.name}, {self.age}, ${self.salary}\"",
    "context": "ירושה (Inheritance) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f\"Point({self.x}, {self.y})\"\n    \n    def __repr__(self):\n        return f\"Point({self.x}, {self.y})\"\n    \n    def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\np1 = Point(1, 2)\np2 = Point(3, 4)\np3 = p1 + p2  # Point(4, 6)",
    "context": "מתודות מיוחדות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def radius(self):\n        return self._radius\n    \n    @radius.setter\n    def radius(self, value):\n        if value < 0:\n            raise ValueError(\"Radius cannot be negative\")\n        self._radius = value\n    \n    @property\n    def area(self):\n        return 3.14 * self._radius ** 2\n\ncircle = Circle(5)\nprint(circle.area)  # 78.5\ncircle.radius = 10",
    "context": "Properties ו-Encapsulation - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import math\nprint(math.pi)\n\nimport math as m\nprint(m.pi)\n\nfrom math import pi, sqrt\nprint(pi)\n\nfrom math import *  # לא מומלץ\nprint(pi)",
    "context": "ייבוא מודולים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# mymodule.py\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nPI = 3.14159\n\n# main.py\nimport mymodule\nprint(mymodule.greet(\"Alice\"))\nprint(mymodule.PI)",
    "context": "ייבוא מודולים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# מבנה תיקיות:\n# mypackage/\n#     __init__.py\n#     module1.py\n#     module2.py\n\n# ייבוא\nfrom mypackage import module1\nfrom mypackage.module1 import function_name",
    "context": "חבילות (Packages) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# התקנה\npip install package_name\n\n# הסרה\npip uninstall package_name\n\n# רשימת חבילות מותקנות\npip list\n\n# שמירת dependencies\npip freeze > requirements.txt\n\n# התקנה מקובץ\npip install -r requirements.txt",
    "context": "התקנת חבילות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\n\ntry:\n    num = int(\"abc\")\nexcept ValueError:\n    print(\"Invalid number!\")",
    "context": "try/except - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "try:\n    # code that might fail\n    pass\nexcept ValueError:\n    print(\"Value error!\")\nexcept TypeError:\n    print(\"Type error!\")\nexcept (KeyError, IndexError):\n    print(\"Key or Index error!\")\nexcept Exception as e:\n    print(f\"Other error: {e}\")",
    "context": "try/except - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "try:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print(\"Error!\")\nelse:\n    print(\"Success!\")  # רק אם אין שגיאה\nfinally:\n    print(\"Always runs\")  # תמיד מתבצע",
    "context": "try/except - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def divide(a, b):\n    if b == 0:\n        raise ValueError(\"Cannot divide by zero\")\n    return a / b\n\ntry:\n    divide(10, 0)\nexcept ValueError as e:\n    print(e)",
    "context": "זריקת שגיאות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class NegativeNumberError(Exception):\n    pass\n\ndef sqrt(x):\n    if x < 0:\n        raise NegativeNumberError(\"Cannot calculate sqrt of negative\")\n    return x ** 0.5\n\ntry:\n    sqrt(-5)\nexcept NegativeNumberError as e:\n    print(e)",
    "context": "זריקת שגיאות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# בסיסי\nsquares = [x**2 for x in range(10)]\n# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n# עם תנאי\nevens = [x for x in range(10) if x % 2 == 0]\n# [0, 2, 4, 6, 8]\n\n# עם if-else\nresult = [x if x % 2 == 0 else -x for x in range(5)]\n# [0, -1, 2, -3, 4]\n\n# מקונן\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]",
    "context": "List Comprehension - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# בסיסי\nsquares = {x: x**2 for x in range(5)}\n# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n\n# עם תנאי\nevens = {x: x**2 for x in range(10) if x % 2 == 0}\n\n# הפיכת מפתחות וערכים\noriginal = {\"a\": 1, \"b\": 2}\nswapped = {v: k for k, v in original.items()}\n# {1: 'a', 2: 'b'}",
    "context": "Dictionary Comprehension - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "squares = {x**2 for x in range(10)}\n# {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}\n\n# ללא כפילויות\nnumbers = [1, 2, 2, 3, 3, 3]\nunique = {x for x in numbers}\n# {1, 2, 3}",
    "context": "Set Comprehension - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# Generator expression\nsquares = (x**2 for x in range(10))\n\n# שימוש\nfor square in squares:\n    print(square)\n\n# המרה לרשימה\nlist(squares)",
    "context": "Generator Expression - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor num in countdown(5):\n    print(num)  # 5, 4, 3, 2, 1",
    "context": "Generators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def chain(*iterables):\n    for iterable in iterables:\n        yield from iterable\n\nlist(chain([1, 2], [3, 4], [5, 6]))\n# [1, 2, 3, 4, 5, 6]",
    "context": "Generators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class Counter:\n    def __init__(self, max):\n        self.max = max\n        self.current = 0\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.current < self.max:\n            self.current += 1\n            return self.current\n        raise StopIteration\n\nfor num in Counter(5):\n    print(num)  # 1, 2, 3, 4, 5",
    "context": "Iterators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "class FileManager:\n    def __init__(self, filename):\n        self.filename = filename\n    \n    def __enter__(self):\n        self.file = open(self.filename, 'r')\n        return self.file\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.file.close()\n\nwith FileManager('file.txt') as f:\n    content = f.read()",
    "context": "Context Managers - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "from contextlib import contextmanager\n\n@contextmanager\ndef timer():\n    import time\n    start = time.time()\n    yield\n    end = time.time()\n    print(f\"Time: {end - start:.2f}s\")\n\nwith timer():\n    # code to time\n    pass",
    "context": "Context Managers - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "def greet(name: str) -> str:\n    return f\"Hello, {name}!\"\n\ndef add(a: int, b: int) -> int:\n    return a + b\n\nfrom typing import List, Dict, Optional, Union\n\ndef process(items: List[int]) -> Dict[str, int]:\n    return {\"sum\": sum(items)}\n\ndef find(name: str) -> Optional[str]:\n    return name if name else None",
    "context": "Type Hints - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "from datetime import datetime, date, time, timedelta\n\n# תאריך ושעה נוכחיים\nnow = datetime.now()\ntoday = date.today()\n\n# יצירת תאריך\nd = date(2024, 12, 25)\ndt = datetime(2024, 12, 25, 14, 30)\n\n# פורמט\nnow.strftime(\"%Y-%m-%d %H:%M:%S\")\ndatetime.strptime(\"2024-12-25\", \"%Y-%m-%d\")\n\n# חישובים\ntomorrow = today + timedelta(days=1)\nweek_ago = now - timedelta(weeks=1)",
    "context": "datetime - תאריכים ושעות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "from collections import Counter, defaultdict, deque, namedtuple\n\n# Counter - ספירה\nwords = [\"apple\", \"banana\", \"apple\", \"orange\", \"banana\", \"apple\"]\ncounter = Counter(words)\n# Counter({'apple': 3, 'banana': 2, 'orange': 1})\n\n# defaultdict - ערך ברירת מחדל\nd = defaultdict(int)\nd['key'] += 1  # לא זורק שגיאה\n\n# deque - תור דו-כיווני\nq = deque([1, 2, 3])\nq.append(4)      # הוספה מימין\nq.appendleft(0)  # הוספה משמאל\n\n# namedtuple - tuple עם שמות\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(1, 2)\nprint(p.x, p.y)",
    "context": "collections - מבני נתונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "from itertools import count, cycle, repeat, chain, combinations, permutations\n\n# count - ספירה אינסופית\nfor i in count(10, 2):  # 10, 12, 14, ...\n    if i > 20: break\n\n# cycle - חזרה מחזורית\nfor item in cycle([1, 2, 3]):  # 1, 2, 3, 1, 2, 3, ...\n    break\n\n# chain - שרשור\nlist(chain([1, 2], [3, 4]))  # [1, 2, 3, 4]\n\n# combinations - צירופים\nlist(combinations([1, 2, 3], 2))  # [(1,2), (1,3), (2,3)]\n\n# permutations - תמורות\nlist(permutations([1, 2, 3], 2))  # [(1,2), (1,3), (2,1), ...]",
    "context": "itertools - כלי איטרציה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import re\n\n# חיפוש\nmatch = re.search(r'\\d+', 'Price: 100')\nif match:\n    print(match.group())  # '100'\n\n# החלפה\ntext = re.sub(r'\\d+', 'X', 'Phone: 123-456')  # 'Phone: X-X'\n\n# פיצול\nre.split(r'\\s+', 'hello  world')  # ['hello', 'world']\n\n# מציאת כל ההתאמות\nre.findall(r'\\d+', 'I have 2 cats and 3 dogs')  # ['2', '3']\n\n# Compile לשימוש חוזר\npattern = re.compile(r'\\d+')\npattern.findall('123 456')",
    "context": "re - ביטויים רגולריים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# sys - מערכת\nimport sys\nsys.argv        # ארגומנטים משורת הפקודה\nsys.exit()      # יציאה מהתוכנית\n\n# time - זמן\nimport time\ntime.sleep(1)   # המתנה שנייה\ntime.time()     # timestamp\n\n# subprocess - הרצת פקודות\nimport subprocess\nresult = subprocess.run(['ls', '-l'], capture_output=True)\n\n# shutil - פעולות קבצים\nimport shutil\nshutil.copy('src.txt', 'dst.txt')\nshutil.move('old.txt', 'new.txt')\n\n# glob - חיפוש קבצים\nimport glob\nfiles = glob.glob('*.txt')  # כל קבצי txt",
    "context": "שימושיים נוספים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import requests\n\n# GET request\nresponse = requests.get('https://api.example.com/data')\nprint(response.status_code)\nprint(response.json())\n\n# POST request\ndata = {'key': 'value'}\nresponse = requests.post('https://api.example.com', json=data)\n\n# Headers\nheaders = {'Authorization': 'Bearer token'}\nresponse = requests.get('https://api.example.com', headers=headers)",
    "context": "requests - HTTP - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import pandas as pd\n\n# יצירת DataFrame\ndf = pd.DataFrame({\n    'name': ['Alice', 'Bob', 'Charlie'],\n    'age': [25, 30, 35],\n    'city': ['Tel Aviv', 'Jerusalem', 'Haifa']\n})\n\n# קריאה מקובץ\ndf = pd.read_csv('data.csv')\ndf = pd.read_excel('data.xlsx')\n\n# פעולות בסיסיות\ndf.head()           # 5 שורות ראשונות\ndf.info()           # מידע על DataFrame\ndf.describe()       # סטטיסטיקות\ndf['age'].mean()    # ממוצע\ndf[df['age'] > 25]  # סינון\n\n# שמירה\ndf.to_csv('output.csv', index=False)",
    "context": "pandas - ניתוח נתונים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import numpy as np\n\n# יצירת מערכים\narr = np.array([1, 2, 3, 4, 5])\nzeros = np.zeros((3, 3))\nones = np.ones((2, 4))\nrandom = np.random.rand(3, 3)\n\n# פעולות\narr + 10            # חיבור סקלר\narr * 2             # כפל\narr.mean()          # ממוצע\narr.sum()           # סכום\narr.reshape(5, 1)   # שינוי צורה\n\n# מטריצות\nmatrix = np.array([[1, 2], [3, 4]])\nmatrix.T            # טרנספוזה\nnp.dot(matrix, matrix)  # כפל מטריצות",
    "context": "numpy - חישובים מספריים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "import matplotlib.pyplot as plt\n\n# Line plot\nx = [1, 2, 3, 4, 5]\ny = [1, 4, 9, 16, 25]\nplt.plot(x, y)\nplt.xlabel('X axis')\nplt.ylabel('Y axis')\nplt.title('My Plot')\nplt.show()\n\n# Bar chart\nplt.bar(['A', 'B', 'C'], [10, 20, 15])\nplt.show()\n\n# Scatter plot\nplt.scatter(x, y)\nplt.show()\n\n# Multiple plots\nplt.subplot(1, 2, 1)\nplt.plot(x, y)\nplt.subplot(1, 2, 2)\nplt.bar(x, y)\nplt.show()",
    "context": "matplotlib - גרפים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "command": "# Flask - web framework\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef hello():\n    return 'Hello, World!'\n\n# SQLAlchemy - ORM\nfrom sqlalchemy import create_engine\nengine = create_engine('sqlite:///db.sqlite')\n\n# BeautifulSoup - web scraping\nfrom bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, 'html.parser')\n\n# Pillow - עיבוד תמונות\nfrom PIL import Image\nimg = Image.open('photo.jpg')\nimg.resize((100, 100))\n\n# pytest - testing\ndef test_add():\n    assert add(2, 3) == 5",
    "context": "ספריות נוספות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יסודות Python",
    "type": "description",
    "anchor": "basics"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הדפסה בסיסית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הדפסה עם משתנים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "קבלת קלט מהמשתמש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הדפסה ללא שורה חדשה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הגדרת משתנים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "השמה מרובה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "החלפת ערכים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "בדיקת טיפוס:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "אופרטורים אריתמטיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "אופרטורי השוואה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "אופרטורים לוגיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "אופרטורי השמה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הערה בשורה אחת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הערה מרובת שורות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "טיפוסי נתונים",
    "type": "description",
    "anchor": "datatypes"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מספרים שלמים (int):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מספרים עשרוניים (float):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מספרים מרוכבים (complex):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "המרות בין טיפוסים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "המרה ל-Boolean:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פעולות מתמטיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציות מובנות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מודול math:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מספרים אקראיים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מודול random:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מחרוזות (Strings)",
    "type": "description",
    "anchor": "strings"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת מחרוזות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מחרוזות בסיסיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "תווים מיוחדים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פעולות על מחרוזות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "חיבור ושכפול:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "אורך וגישה לתווים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מתודות מחרוזת",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "שינוי רישיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "חיפוש והחלפה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פיצול וחיבור:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הסרת רווחים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "בדיקות תוכן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "עיצוב מחרוזות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "f-strings (Python 3.6+):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "% formatting (ישן):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "רשימות (Lists) ו-Tuples",
    "type": "description",
    "anchor": "lists"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "רשימות - יצירה וגישה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת רשימות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "גישה לאיברים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "שינוי איברים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מתודות רשימה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הוספת איברים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הסרת איברים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "חיפוש ומיון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פעולות על רשימות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציות מובנות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאות על רשימות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת Tuples:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "גישה ל-Tuples:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מתודות Tuple:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "טיפים שימושיים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת רשימות מיוחדות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "שילוב רשימות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מילונים (Dictionaries) ו-Sets",
    "type": "description",
    "anchor": "dictionaries"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מילונים - יצירה וגישה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת מילונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "גישה לערכים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "שינוי והוספה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מתודות מילון",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הסרת איברים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "קבלת מפתחות וערכים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאות על מילונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Sets (קבוצות)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת Sets:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הוספה והסרה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פעולות קבוצות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "בקרת זרימה (Control Flow)",
    "type": "description",
    "anchor": "control"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "תנאים - if/elif/else",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "תנאי בסיסי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "תנאי בשורה אחת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "תנאים מרובים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאות - for",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאת for בסיסית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאה על רשימה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאה על מילון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאות - while",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאת while בסיסית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "לולאה אינסופית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "break, continue, pass",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "break - יציאה מלולאה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "continue - דילוג על איטרציה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "pass - ביצוע ריק:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "else בלולאות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציות (Functions)",
    "type": "description",
    "anchor": "functions"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הגדרת פונקציות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציה בסיסית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציה עם פרמטרים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציה עם ערך החזרה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פרמטרים עם ברירת מחדל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פרמטרים מתקדמים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "*args - מספר משתנה של ארגומנטים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "**kwargs - ארגומנטים עם שם:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "שילוב של הכל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציות מתקדמות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Lambda - פונקציות אנונימיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציות מקוננות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Decorators:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציות שימושיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "map, filter, reduce:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "עבודה עם קבצים",
    "type": "description",
    "anchor": "files"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "קריאה וכתיבה בסיסית",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "קריאת קובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "כתיבה לקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "קריאת שורות לרשימה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מצבים שונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "עבודה עם נתיבים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מודול pathlib (מודרני):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "עבודה עם JSON:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "עבודה עם CSV:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "תכנות מונחה עצמים (OOP)",
    "type": "description",
    "anchor": "oop"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מחלקות בסיסיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הגדרת מחלקה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מתודות ומאפיינים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "ירושה (Inheritance)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "ירושה בסיסית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "super() - קריאה למחלקת אב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מתודות מיוחדות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Magic methods:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Properties ו-Encapsulation",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "@property decorator:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מודולים וחבילות",
    "type": "description",
    "anchor": "modules"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "ייבוא מודולים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "דרכי ייבוא:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת מודול משלך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "חבילות (Packages)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מבנה חבילה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "התקנת חבילות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "pip - מנהל חבילות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "טיפול בשגיאות (Exception Handling)",
    "type": "description",
    "anchor": "errors"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "טיפול בסיסי בשגיאות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "טיפול במספר שגיאות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "else ו-finally:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "זריקת שגיאות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "raise - זריקת שגיאה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "שגיאות מותאמות אישית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Comprehensions",
    "type": "description",
    "anchor": "comprehensions"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "List Comprehension",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת רשימות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Dictionary Comprehension",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת מילונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Set Comprehension",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת קבוצות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Generator Expression",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Generators - חסכוני בזיכרון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "נושאים מתקדמים",
    "type": "description",
    "anchor": "advanced"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציית Generator:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Generator עם yield from:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת Iterator:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Context Managers",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת Context Manager:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Context Manager עם contextlib:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "הוספת Type Hints:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "ספריית התקן (Standard Library)",
    "type": "description",
    "anchor": "stdlib"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "datetime - תאריכים ושעות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "עבודה עם תאריכים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "collections - מבני נתונים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מבני נתונים שימושיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "itertools - כלי איטרציה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "פונקציות שימושיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "re - ביטויים רגולריים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "Regex בסיסי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "שימושיים נוספים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מודולים שימושיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "ספריות פופולריות",
    "type": "description",
    "anchor": "popular"
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "requests - HTTP",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "בקשות HTTP:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "pandas - ניתוח נתונים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "עבודה עם DataFrames:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "numpy - חישובים מספריים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "מערכים ומטריצות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "matplotlib - גרפים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "יצירת גרפים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "ספריות נוספות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך Python",
    "file": "python-guide.html",
    "context": "ספריות שימושיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "console.log(\"Hello, World!\");\nconsole.log(\"JavaScript\", \"is\", \"awesome!\");",
    "context": "הדפסה ל-Console - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "console.log(\"רגיל\");      // הדפסה רגילה\nconsole.warn(\"אזהרה\");    // אזהרה (צהוב)\nconsole.error(\"שגיאה\");   // שגיאה (אדום)\nconsole.info(\"מידע\");     // מידע\nconsole.table([1, 2, 3]); // טבלה",
    "context": "הדפסה ל-Console - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// הערה בשורה אחת\n\n/* הערה\n   מרובת\n   שורות */\n\n/**\n * הערת תיעוד (JSDoc)\n * @param {string} name - שם המשתמש\n */",
    "context": "הערות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "<script>\n  console.log(\"Hello!\");\n</script>",
    "context": "הוספת JavaScript לדף HTML - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "<script src=\"script.js\"></script>",
    "context": "הוספת JavaScript לדף HTML - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let name = \"Alice\";\nlet age = 25;\nlet isStudent = true;\n\n// שינוי ערך\nage = 26;\nname = \"Bob\";",
    "context": "הגדרת משתנים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "const PI = 3.14159;\nconst MAX_USERS = 100;\nconst API_KEY = \"abc123\";\n\n// PI = 3.14; // ❌ שגיאה! לא ניתן לשינוי",
    "context": "הגדרת משתנים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let x = 5, y = 10, z = 15;\nconst a = 1, b = 2;",
    "context": "הגדרת משתנים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// ✅ טוב\nlet userName = \"Alice\";\nlet user_age = 25;\nlet $price = 100;\nlet _temp = 0;\n\n// ❌ רע\n// let 1user = \"Bob\";\n// let user-name = \"Alice\";\n// let let = 5;",
    "context": "כללי שמות משתנים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let integer = 42;\nlet float = 3.14;\nlet negative = -10;\nlet scientific = 2.5e6;  // 2,500,000\n\n// מספרים מיוחדים\nlet infinity = Infinity;\nlet notANumber = NaN;  // Not a Number",
    "context": "Number - מספרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let sum = 5 + 3;        // 8\nlet diff = 10 - 4;      // 6\nlet product = 4 * 5;    // 20\nlet quotient = 20 / 4;  // 5\nlet remainder = 10 % 3; // 1 (שארית)\nlet power = 2 ** 3;     // 8 (חזקה)",
    "context": "Number - מספרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let single = 'Hello';\nlet double = \"World\";\nlet backtick = `Hello World`;  // Template literal\n\n// חיבור מחרוזות\nlet greeting = \"Hello\" + \" \" + \"World\";\nlet name = \"Alice\";\nlet message = `Hello, ${name}!`;  // Template literal",
    "context": "String - מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let isActive = true;\nlet isLoggedIn = false;\n\n// השוואות מחזירות Boolean\nlet isEqual = 5 === 5;      // true\nlet isGreater = 10 > 5;     // true\nlet isLess = 3 < 2;         // false",
    "context": "Boolean - ערכי אמת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let x;              // undefined (לא הוגדר)\nlet y = undefined;  // undefined (במפורש)\nlet z = null;       // null (ריק במכוון)\n\nconsole.log(x);  // undefined\nconsole.log(z);  // null",
    "context": "Undefined ו-Null - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "console.log(typeof 42);          // \"number\"\nconsole.log(typeof \"Hello\");     // \"string\"\nconsole.log(typeof true);        // \"boolean\"\nconsole.log(typeof undefined);   // \"undefined\"\nconsole.log(typeof null);        // \"object\" (באג ידוע!)\nconsole.log(typeof {});          // \"object\"\nconsole.log(typeof []);          // \"object\"",
    "context": "בדיקת טיפוס - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "Number(\"123\");      // 123\nparseInt(\"123\");    // 123\nparseFloat(\"3.14\"); // 3.14\n+\"123\";             // 123 (קיצור דרך)\n\nNumber(\"abc\");      // NaN (לא מספר)",
    "context": "המרות טיפוסים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "String(123);        // \"123\"\n(123).toString();   // \"123\"\n123 + \"\";           // \"123\" (קיצור דרך)",
    "context": "המרות טיפוסים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "Boolean(1);         // true\nBoolean(0);         // false\nBoolean(\"text\");    // true\nBoolean(\"\");        // false\n!!value;            // המרה ל-Boolean (קיצור דרך)",
    "context": "המרות טיפוסים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// שווה (עם המרה)\n5 == \"5\"        // true\n\n// שווה מדויק (ללא המרה) - מומלץ!\n5 === \"5\"       // false\n5 === 5         // true\n\n// לא שווה\n5 != \"5\"        // false\n5 !== \"5\"       // true\n\n// גדול/קטן\n10 > 5          // true\n10 < 5          // false\n10 >= 10        // true\n5 <= 3          // false",
    "context": "אופרטורי השוואה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// AND (&&) - שניהם צריכים להיות true\ntrue && true    // true\ntrue && false   // false\n\n// OR (||) - לפחות אחד צריך להיות true\ntrue || false   // true\nfalse || false  // false\n\n// NOT (!) - הפוך\n!true           // false\n!false          // true\n\n// דוגמה מעשית\nlet age = 25;\nlet hasLicense = true;\nlet canDrive = age >= 18 && hasLicense;  // true",
    "context": "אופרטורים לוגיים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let x = 10;\n\nx += 5;   // x = x + 5  → 15\nx -= 3;   // x = x - 3  → 12\nx *= 2;   // x = x * 2  → 24\nx /= 4;   // x = x / 4  → 6\nx %= 4;   // x = x % 4  → 2\nx **= 3;  // x = x ** 3 → 8\n\n// הגדלה והקטנה\nx++;      // x = x + 1\nx--;      // x = x - 1\n++x;      // הגדלה לפני\n--x;      // הקטנה לפני",
    "context": "אופרטורי השמה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let age = 20;\nlet status = age >= 18 ? \"מבוגר\" : \"קטין\";\n// אם age >= 18 אז \"מבוגר\", אחרת \"קטין\"\n\n// דוגמה נוספת\nlet score = 85;\nlet grade = score >= 90 ? \"A\" : score >= 80 ? \"B\" : \"C\";",
    "context": "אופרטורים מיוחדים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let name = null;\nlet displayName = name ?? \"אורח\";  // \"אורח\"\n\nlet count = 0;\nlet value = count ?? 10;  // 0 (לא 10!)\n// ?? בודק רק null/undefined, לא 0 או false",
    "context": "אופרטורים מיוחדים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let user = { name: \"Alice\" };\nconsole.log(user?.address?.city);  // undefined (לא שגיאה!)\n\n// ללא optional chaining\n// console.log(user.address.city);  // ❌ שגיאה!",
    "context": "אופרטורים מיוחדים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let name = \"Alice\";\nlet age = 25;\n\n// Template literal עם ${} לשילוב משתנים\nlet message = `שלום, ${name}! אתה בן ${age}.`;\n\n// מחרוזת מרובת שורות\nlet multiline = `שורה ראשונה\nשורה שנייה\nשורה שלישית`;\n\n// ביטויים בתוך ${}\nlet result = `2 + 2 = ${2 + 2}`;  // \"2 + 2 = 4\"",
    "context": "יצירת מחרוזות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let str = \"JavaScript\";\n\nstr.length;          // 10 (אורך)\nstr[0];              // \"J\" (תו ראשון)\nstr[str.length - 1]; // \"t\" (תו אחרון)\nstr.charAt(4);       // \"S\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let text = \"Hello World\";\n\ntext.toUpperCase();  // \"HELLO WORLD\"\ntext.toLowerCase();  // \"hello world\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let str = \"Hello World\";\n\nstr.includes(\"World\");    // true\nstr.startsWith(\"Hello\");  // true\nstr.endsWith(\"World\");    // true\nstr.indexOf(\"o\");         // 4 (מיקום ראשון)\nstr.lastIndexOf(\"o\");     // 7 (מיקום אחרון)",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let str = \"JavaScript\";\n\nstr.slice(0, 4);         // \"Java\"\nstr.slice(4);            // \"Script\"\nstr.slice(-6);           // \"Script\" (מהסוף)\nstr.substring(0, 4);     // \"Java\"\n\nstr.replace(\"Java\", \"Type\");  // \"TypeScript\"\nstr.replaceAll(\"a\", \"A\");     // \"JAvaScript\" → \"JAvAScript\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let csv = \"apple,banana,orange\";\nlet fruits = csv.split(\",\");  // [\"apple\", \"banana\", \"orange\"]\n\nlet words = [\"Hello\", \"World\"];\nlet sentence = words.join(\" \");  // \"Hello World\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let str = \"  Hello World  \";\n\nstr.trim();       // \"Hello World\"\nstr.trimStart();  // \"Hello World  \"\nstr.trimEnd();    // \"  Hello World\"",
    "context": "מתודות מחרוזת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// מערך ריק\nlet empty = [];\n\n// מערך עם ערכים\nlet numbers = [1, 2, 3, 4, 5];\nlet fruits = [\"apple\", \"banana\", \"orange\"];\nlet mixed = [1, \"hello\", true, null];\n\n// מערך מקונן\nlet matrix = [[1, 2], [3, 4], [5, 6]];\n\n// Array constructor\nlet arr = new Array(5);  // מערך עם 5 מקומות ריקים",
    "context": "יצירת מערכים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let fruits = [\"apple\", \"banana\", \"orange\"];\n\nfruits[0];              // \"apple\" (ראשון)\nfruits[1];              // \"banana\"\nfruits[fruits.length - 1];  // \"orange\" (אחרון)\nfruits.at(-1);          // \"orange\" (דרך מודרנית)\n\n// שינוי ערך\nfruits[1] = \"mango\";    // [\"apple\", \"mango\", \"orange\"]",
    "context": "גישה ושינוי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let arr = [1, 2, 3];\n\narr.push(4);        // [1, 2, 3, 4] - הוספה בסוף\narr.push(5, 6);     // [1, 2, 3, 4, 5, 6]\n\narr.unshift(0);     // [0, 1, 2, 3, 4, 5, 6] - הוספה בהתחלה",
    "context": "הוספה והסרה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let arr = [1, 2, 3, 4, 5];\n\narr.pop();          // מסיר 5, מחזיר 5\narr.shift();        // מסיר 1, מחזיר 1\n// arr הוא עכשיו [2, 3, 4]",
    "context": "הוספה והסרה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let arr = [1, 2, 3, 4, 5];\n\n// הסרה\narr.splice(2, 1);      // מסיר 1 איבר ממיקום 2 → [1, 2, 4, 5]\n\n// הוספה\narr.splice(2, 0, 3);   // מוסיף 3 במיקום 2 → [1, 2, 3, 4, 5]\n\n// החלפה\narr.splice(1, 2, 10, 20);  // מחליף 2 איברים → [1, 10, 20, 4, 5]",
    "context": "הוספה והסרה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let arr = [1, 2, 3, 4, 5, 3];\n\narr.includes(3);        // true\narr.indexOf(3);         // 2 (מיקום ראשון)\narr.lastIndexOf(3);     // 5 (מיקום אחרון)\narr.find(x => x > 3);   // 4 (איבר ראשון שעונה לתנאי)\narr.findIndex(x => x > 3);  // 3 (אינדקס של האיבר)",
    "context": "מתודות חיפוש - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let numbers = [1, 2, 3, 4, 5];\n\n// כפל כל מספר ב-2\nlet doubled = numbers.map(x => x * 2);\n// [2, 4, 6, 8, 10]\n\n// המרה למחרוזות\nlet strings = numbers.map(x => `Number: ${x}`);",
    "context": "מתודות מערך חשובות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let numbers = [1, 2, 3, 4, 5, 6];\n\n// רק מספרים זוגיים\nlet evens = numbers.filter(x => x % 2 === 0);\n// [2, 4, 6]\n\n// רק מספרים גדולים מ-3\nlet large = numbers.filter(x => x > 3);\n// [4, 5, 6]",
    "context": "מתודות מערך חשובות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let numbers = [1, 2, 3, 4, 5];\n\n// סכום\nlet sum = numbers.reduce((acc, curr) => acc + curr, 0);\n// 15\n\n// מכפלה\nlet product = numbers.reduce((acc, curr) => acc * curr, 1);\n// 120",
    "context": "מתודות מערך חשובות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let fruits = [\"apple\", \"banana\", \"orange\"];\n\nfruits.forEach((fruit, index) => {\n    console.log(`${index}: ${fruit}`);\n});\n// 0: apple\n// 1: banana\n// 2: orange",
    "context": "מתודות מערך חשובות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let numbers = [3, 1, 4, 1, 5, 9, 2];\n\n// מיון מספרים\nnumbers.sort((a, b) => a - b);  // [1, 1, 2, 3, 4, 5, 9]\n\n// מיון הפוך\nnumbers.sort((a, b) => b - a);  // [9, 5, 4, 3, 2, 1, 1]\n\n// מיון מחרוזות\nlet fruits = [\"banana\", \"apple\", \"orange\"];\nfruits.sort();  // [\"apple\", \"banana\", \"orange\"]",
    "context": "מתודות מערך חשובות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\n\n// שילוב\nlet combined = arr1.concat(arr2);  // [1, 2, 3, 4, 5, 6]\nlet spread = [...arr1, ...arr2];   // [1, 2, 3, 4, 5, 6]\n\n// חיתוך\nlet arr = [1, 2, 3, 4, 5];\nlet sliced = arr.slice(1, 4);  // [2, 3, 4]\n\n// הפיכה\narr.reverse();  // [5, 4, 3, 2, 1]\n\n// חיבור לmחרוזת\narr.join(\", \");  // \"5, 4, 3, 2, 1\"",
    "context": "מתודות נוספות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let person = {\n    name: \"Alice\",\n    age: 25,\n    city: \"Tel Aviv\",\n    isStudent: true\n};\n\n// אובייקט ריק\nlet empty = {};\n\n// אובייקט מקונן\nlet user = {\n    name: \"Bob\",\n    address: {\n        city: \"Jerusalem\",\n        street: \"Main St\",\n        number: 10\n    }\n};",
    "context": "יצירת אובייקטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let person = { name: \"Alice\", age: 25 };\n\n// Dot notation (מומלץ)\nperson.name;        // \"Alice\"\nperson.age;         // 25\n\n// Bracket notation (שימושי למפתחות דינמיים)\nperson[\"name\"];     // \"Alice\"\nlet key = \"age\";\nperson[key];        // 25\n\n// גישה למקונן\nuser.address.city;  // \"Jerusalem\"",
    "context": "גישה למאפיינים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let person = { name: \"Alice\" };\n\n// הוספה\nperson.age = 25;\nperson[\"city\"] = \"Tel Aviv\";\n\n// שינוי\nperson.name = \"Bob\";\n\n// מחיקה\ndelete person.city;\n\nconsole.log(person);  // { name: \"Bob\", age: 25 }",
    "context": "הוספה, שינוי ומחיקה - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let person = {\n    name: \"Alice\",\n    age: 25,\n    greet: function() {\n        console.log(`Hello, I'm ${this.name}`);\n    },\n    // קיצור דרך (ES6)\n    sayAge() {\n        console.log(`I'm ${this.age} years old`);\n    }\n};\n\nperson.greet();   // \"Hello, I'm Alice\"\nperson.sayAge();  // \"I'm 25 years old\"",
    "context": "מתודות אובייקט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let person = { name: \"Alice\", age: 25, city: \"Tel Aviv\" };\n\n// מפתחות\nObject.keys(person);    // [\"name\", \"age\", \"city\"]\n\n// ערכים\nObject.values(person);  // [\"Alice\", 25, \"Tel Aviv\"]\n\n// זוגות key-value\nObject.entries(person); // [[\"name\", \"Alice\"], [\"age\", 25], ...]\n\n// העתקה\nlet copy = Object.assign({}, person);\nlet spread = { ...person };  // דרך מודרנית\n\n// מיזוג\nlet merged = Object.assign({}, person, { job: \"Developer\" });",
    "context": "Object methods - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let person = { name: \"Alice\", age: 25, city: \"Tel Aviv\" };\n\n// Destructuring\nlet { name, age } = person;\nconsole.log(name);  // \"Alice\"\nconsole.log(age);   // 25\n\n// עם שם אחר\nlet { name: userName, age: userAge } = person;\n\n// עם ברירת מחדל\nlet { name, country = \"Israel\" } = person;\n\n// מקונן\nlet user = { name: \"Bob\", address: { city: \"Jerusalem\" } };\nlet { address: { city } } = user;\nconsole.log(city);  // \"Jerusalem\"",
    "context": "Destructuring - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "function greet(name) {\n    return `Hello, ${name}!`;\n}\n\ngreet(\"Alice\");  // \"Hello, Alice!\"\n\n// ללא return\nfunction sayHi() {\n    console.log(\"Hi!\");\n}  // מחזיר undefined",
    "context": "הגדרת פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "const greet = function(name) {\n    return `Hello, ${name}!`;\n};\n\ngreet(\"Bob\");  // \"Hello, Bob!\"",
    "context": "הגדרת פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// תחביר מלא\nconst greet = (name) => {\n    return `Hello, ${name}!`;\n};\n\n// קיצור - return אוטומטי\nconst greet = name => `Hello, ${name}!`;\n\n// ללא פרמטרים\nconst sayHi = () => \"Hi!\";\n\n// פרמטר אחד - ללא סוגריים\nconst double = x => x * 2;\n\n// מספר פרמטרים\nconst add = (a, b) => a + b;",
    "context": "הגדרת פונקציות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "function greet(name = \"Guest\") {\n    return `Hello, ${name}!`;\n}\n\ngreet();         // \"Hello, Guest!\"\ngreet(\"Alice\");  // \"Hello, Alice!\"",
    "context": "פרמטרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "function sum(...numbers) {\n    return numbers.reduce((acc, curr) => acc + curr, 0);\n}\n\nsum(1, 2, 3);        // 6\nsum(1, 2, 3, 4, 5);  // 15",
    "context": "פרמטרים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "function processArray(arr, callback) {\n    return arr.map(callback);\n}\n\nlet numbers = [1, 2, 3, 4, 5];\nlet doubled = processArray(numbers, x => x * 2);\n// [2, 4, 6, 8, 10]\n\n// דוגמה נפוצה\nsetTimeout(() => {\n    console.log(\"After 2 seconds\");\n}, 2000);",
    "context": "Callback Functions - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "function multiplier(factor) {\n    return x => x * factor;\n}\n\nconst double = multiplier(2);\nconst triple = multiplier(3);\n\ndouble(5);  // 10\ntriple(5);  // 15",
    "context": "Higher-Order Functions - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let age = 20;\n\nif (age >= 18) {\n    console.log(\"מבוגר\");\n} else {\n    console.log(\"קטין\");\n}\n\n// if-else if-else\nlet score = 85;\nif (score >= 90) {\n    console.log(\"A\");\n} else if (score >= 80) {\n    console.log(\"B\");\n} else if (score >= 70) {\n    console.log(\"C\");\n} else {\n    console.log(\"F\");\n}",
    "context": "if/else - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let age = 25;\nlet hasLicense = true;\n\nif (age >= 18 && hasLicense) {\n    console.log(\"יכול לנהוג\");\n}\n\nif (age < 18 || !hasLicense) {\n    console.log(\"לא יכול לנהוג\");\n}",
    "context": "if/else - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let day = \"Monday\";\n\nswitch (day) {\n    case \"Monday\":\n        console.log(\"תחילת שבוע\");\n        break;\n    case \"Friday\":\n        console.log(\"סוף שבוע\");\n        break;\n    case \"Saturday\":\n    case \"Sunday\":\n        console.log(\"סופש\");\n        break;\n    default:\n        console.log(\"יום רגיל\");\n}",
    "context": "switch - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// Falsy values (נחשבים false)\nfalse\n0\n\"\" (מחרוזת ריקה)\nnull\nundefined\nNaN\n\n// כל השאר הם Truthy!\nif (\"hello\") {  // true\n    console.log(\"Truthy!\");\n}\n\nif (0) {  // false\n    console.log(\"לא יודפס\");\n}",
    "context": "Truthy ו-Falsy - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// הדפסת 0 עד 4\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n\n// לולאה על מערך\nlet fruits = [\"apple\", \"banana\", \"orange\"];\nfor (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n}",
    "context": "for loop - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let fruits = [\"apple\", \"banana\", \"orange\"];\n\n// פשוט וקריא!\nfor (let fruit of fruits) {\n    console.log(fruit);\n}\n\n// עם אינדקס\nfor (let [index, fruit] of fruits.entries()) {\n    console.log(`${index}: ${fruit}`);\n}",
    "context": "for...of - המודרני - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let person = { name: \"Alice\", age: 25, city: \"Tel Aviv\" };\n\nfor (let key in person) {\n    console.log(`${key}: ${person[key]}`);\n}\n// name: Alice\n// age: 25\n// city: Tel Aviv",
    "context": "for...in - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let i = 0;\nwhile (i < 5) {\n    console.log(i);\n    i++;\n}\n\n// do...while - רץ לפחות פעם אחת\nlet j = 0;\ndo {\n    console.log(j);\n    j++;\n} while (j < 5);",
    "context": "while ו-do...while - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// break - יציאה מהלולאה\nfor (let i = 0; i < 10; i++) {\n    if (i === 5) break;\n    console.log(i);  // 0, 1, 2, 3, 4\n}\n\n// continue - דילוג על איטרציה\nfor (let i = 0; i < 5; i++) {\n    if (i === 2) continue;\n    console.log(i);  // 0, 1, 3, 4\n}",
    "context": "break ו-continue - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// לפי ID\nlet element = document.getElementById(\"myId\");\n\n// לפי Class (ראשון)\nlet element = document.querySelector(\".myClass\");\n\n// לפי Class (כולם)\nlet elements = document.querySelectorAll(\".myClass\");\n\n// לפי Tag\nlet paragraphs = document.querySelectorAll(\"p\");\n\n// CSS Selector מורכב\nlet element = document.querySelector(\"div.container > p.text\");",
    "context": "בחירת אלמנטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let element = document.querySelector(\"#myDiv\");\n\n// שינוי טקסט\nelement.textContent = \"טקסט חדש\";\n\n// שינוי HTML\nelement.innerHTML = \"טקסט מודגש\";\n\n// קריאת ערך מ-input\nlet input = document.querySelector(\"#myInput\");\nlet value = input.value;",
    "context": "שינוי תוכן - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let element = document.querySelector(\"#myDiv\");\n\n// שינוי סגנון ישיר\nelement.style.color = \"red\";\nelement.style.backgroundColor = \"yellow\";\nelement.style.fontSize = \"20px\";\n\n// הוספת/הסרת class\nelement.classList.add(\"active\");\nelement.classList.remove(\"hidden\");\nelement.classList.toggle(\"visible\");\n\n// בדיקה אם יש class\nif (element.classList.contains(\"active\")) {\n    console.log(\"האלמנט פעיל\");\n}",
    "context": "שינוי סגנון - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// יצירת אלמנט\nlet newDiv = document.createElement(\"div\");\nnewDiv.textContent = \"אלמנט חדש\";\nnewDiv.classList.add(\"my-class\");\n\n// הוספה לסוף\ndocument.body.appendChild(newDiv);\n\n// הוספה לפני אלמנט\nlet parent = document.querySelector(\"#parent\");\nlet child = document.querySelector(\"#child\");\nparent.insertBefore(newDiv, child);\n\n// הסרת אלמנט\nnewDiv.remove();",
    "context": "יצירה והוספת אלמנטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let img = document.querySelector(\"img\");\n\n// קריאה\nlet src = img.getAttribute(\"src\");\nlet alt = img.alt;  // קיצור דרך\n\n// שינוי\nimg.setAttribute(\"src\", \"new-image.jpg\");\nimg.alt = \"תמונה חדשה\";\n\n// הסרה\nimg.removeAttribute(\"title\");\n\n// בדיקה\nif (img.hasAttribute(\"alt\")) {\n    console.log(\"יש alt\");\n}",
    "context": "Attributes - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let button = document.querySelector(\"#myButton\");\n\n// לחיצה על כפתור\nbutton.addEventListener(\"click\", function() {\n    console.log(\"נלחץ!\");\n});\n\n// עם Arrow Function\nbutton.addEventListener(\"click\", () => {\n    console.log(\"נלחץ!\");\n});\n\n// עם פונקציה נפרדת\nfunction handleClick() {\n    console.log(\"נלחץ!\");\n}\nbutton.addEventListener(\"click\", handleClick);",
    "context": "Event Listeners - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// עכבר\nelement.addEventListener(\"click\", handler);\nelement.addEventListener(\"dblclick\", handler);\nelement.addEventListener(\"mouseenter\", handler);\nelement.addEventListener(\"mouseleave\", handler);\n\n// מקלדת\ninput.addEventListener(\"keydown\", handler);\ninput.addEventListener(\"keyup\", handler);\ninput.addEventListener(\"keypress\", handler);\n\n// טופס\nform.addEventListener(\"submit\", handler);\ninput.addEventListener(\"input\", handler);\ninput.addEventListener(\"change\", handler);\ninput.addEventListener(\"focus\", handler);\ninput.addEventListener(\"blur\", handler);\n\n// חלון\nwindow.addEventListener(\"load\", handler);\nwindow.addEventListener(\"resize\", handler);\nwindow.addEventListener(\"scroll\", handler);",
    "context": "אירועים נפוצים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "button.addEventListener(\"click\", (event) => {\n    console.log(event.type);        // \"click\"\n    console.log(event.target);      // האלמנט שנלחץ\n    console.log(event.clientX);     // מיקום X של העכבר\n    console.log(event.clientY);     // מיקום Y של העכבר\n});\n\n// מניעת התנהגות ברירת מחדל\nform.addEventListener(\"submit\", (e) => {\n    e.preventDefault();  // מונע שליחת טופס\n    console.log(\"טופס נשלח!\");\n});\n\n// עצירת התפשטות\nelement.addEventListener(\"click\", (e) => {\n    e.stopPropagation();  // עוצר את האירוע מלהתפשט\n});",
    "context": "Event Object - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "function handleClick() {\n    console.log(\"נלחץ!\");\n}\n\n// הוספה\nbutton.addEventListener(\"click\", handleClick);\n\n// הסרה\nbutton.removeEventListener(\"click\", handleClick);",
    "context": "הסרת Event Listener - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let promise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        let success = true;\n        if (success) {\n            resolve(\"הצלחה!\");\n        } else {\n            reject(\"כישלון!\");\n        }\n    }, 1000);\n});\n\n// שימוש ב-Promise\npromise\n    .then(result => console.log(result))\n    .catch(error => console.error(error))\n    .finally(() => console.log(\"סיום\"));",
    "context": "Promises - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "async function fetchData() {\n    try {\n        let response = await fetch(\"https://api.example.com/data\");\n        let data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error(\"שגיאה:\", error);\n    }\n}\n\n// קריאה לפונקציה\nfetchData();\n\n// Arrow function\nconst getData = async () => {\n    let data = await fetch(\"url\");\n    return data.json();\n};",
    "context": "async/await - המודרני - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// GET request\nasync function getData() {\n    let response = await fetch(\"https://api.example.com/users\");\n    let data = await response.json();\n    return data;\n}\n\n// POST request\nasync function postData() {\n    let response = await fetch(\"https://api.example.com/users\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({ name: \"Alice\", age: 25 })\n    });\n    let data = await response.json();\n    return data;\n}",
    "context": "Fetch API - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "async function fetchMultiple() {\n    try {\n        let [users, posts, comments] = await Promise.all([\n            fetch(\"api/users\").then(r => r.json()),\n            fetch(\"api/posts\").then(r => r.json()),\n            fetch(\"api/comments\").then(r => r.json())\n        ]);\n        \n        console.log(users, posts, comments);\n    } catch (error) {\n        console.error(error);\n    }\n}",
    "context": "Promise.all - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// מערכים\nlet arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\nlet combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]\n\n// העתקה\nlet copy = [...arr1];\n\n// אובייקטים\nlet person = { name: \"Alice\", age: 25 };\nlet updated = { ...person, city: \"Tel Aviv\" };\n// { name: \"Alice\", age: 25, city: \"Tel Aviv\" }\n\n// העברה לפונקציה\nlet numbers = [1, 2, 3, 4, 5];\nMath.max(...numbers);  // 5",
    "context": "Spread Operator (...) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// מערכים\nlet [a, b, c] = [1, 2, 3];\nlet [first, ...rest] = [1, 2, 3, 4, 5];\n// first = 1, rest = [2, 3, 4, 5]\n\n// אובייקטים\nlet { name, age } = { name: \"Alice\", age: 25 };\n\n// בפרמטרים של פונקציה\nfunction greet({ name, age }) {\n    console.log(`${name} is ${age} years old`);\n}\ngreet({ name: \"Bob\", age: 30 });",
    "context": "Destructuring - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "function greet(name = \"Guest\", greeting = \"Hello\") {\n    return `${greeting}, ${name}!`;\n}\n\ngreet();                    // \"Hello, Guest!\"\ngreet(\"Alice\");             // \"Hello, Alice!\"\ngreet(\"Bob\", \"Hi\");         // \"Hi, Bob!\"",
    "context": "Default Parameters - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let user = {\n    name: \"Alice\",\n    address: {\n        city: \"Tel Aviv\"\n    }\n};\n\n// ללא optional chaining\n// let zip = user.address.zip.code;  // ❌ שגיאה!\n\n// עם optional chaining\nlet zip = user.address?.zip?.code;  // undefined (לא שגיאה!)\n\n// עם מתודות\nuser.greet?.();  // לא יקרה כלום אם greet לא קיים",
    "context": "Optional Chaining (?.) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "let name = null;\nlet displayName = name ?? \"Guest\";  // \"Guest\"\n\nlet count = 0;\nlet value = count ?? 10;  // 0 (לא 10!)\n\n// הבדל מ-||\nlet value1 = 0 || 10;   // 10\nlet value2 = 0 ?? 10;   // 0",
    "context": "Nullish Coalescing (??) - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// utils.js\nexport function add(a, b) {\n    return a + b;\n}\n\nexport const PI = 3.14159;\n\nexport class Calculator {\n    multiply(a, b) {\n        return a * b;\n    }\n}\n\n// ייצוא ברירת מחדל\nexport default function greet(name) {\n    return `Hello, ${name}!`;\n}",
    "context": "Export ו-Import - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// main.js\nimport greet from \"./utils.js\";  // ברירת מחדל\nimport { add, PI, Calculator } from \"./utils.js\";  // named imports\n\n// ייבוא הכל\nimport * as utils from \"./utils.js\";\nutils.add(2, 3);\n\n// שינוי שם\nimport { add as sum } from \"./utils.js\";",
    "context": "Export ו-Import - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "<script type=\"module\" src=\"main.js\"></script>",
    "context": "Export ו-Import - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// אובייקט JS\nlet person = {\n    name: \"Alice\",\n    age: 25,\n    hobbies: [\"reading\", \"coding\"]\n};\n\n// המרה למחרוזת JSON\nlet jsonString = JSON.stringify(person);\n// '{\"name\":\"Alice\",\"age\":25,\"hobbies\":[\"reading\",\"coding\"]}'\n\n// המרה חזרה לאובייקט\nlet parsed = JSON.parse(jsonString);\nconsole.log(parsed.name);  // \"Alice\"",
    "context": "JSON Methods - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// קבלת נתונים מ-API\nasync function getUsers() {\n    try {\n        let response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n        \n        if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n        }\n        \n        let users = await response.json();\n        console.log(users);\n        return users;\n    } catch (error) {\n        console.error(\"Error:\", error);\n    }\n}\n\n// שליחת נתונים ל-API\nasync function createUser(userData) {\n    try {\n        let response = await fetch(\"https://jsonplaceholder.typicode.com/users\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(userData)\n        });\n        \n        let newUser = await response.json();\n        return newUser;\n    } catch (error) {\n        console.error(\"Error:\", error);\n    }\n}\n\n// שימוש\ngetUsers();\ncreateUser({ name: \"Alice\", email: \"alice@example.com\" });",
    "context": "עבודה עם APIs - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "command": "// שמירה\nlocalStorage.setItem(\"username\", \"Alice\");\n\n// שמירת אובייקט\nlet user = { name: \"Alice\", age: 25 };\nlocalStorage.setItem(\"user\", JSON.stringify(user));\n\n// קריאה\nlet username = localStorage.getItem(\"username\");\n\n// קריאת אובייקט\nlet savedUser = JSON.parse(localStorage.getItem(\"user\"));\n\n// מחיקה\nlocalStorage.removeItem(\"username\");\n\n// מחיקת הכל\nlocalStorage.clear();",
    "context": "Local Storage - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "יסודות JavaScript",
    "type": "description",
    "anchor": "basics"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הדפסה ל-Console",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הדפסה בסיסית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "סוגי הדפסה שונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הערות בקוד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הוספת JavaScript לדף HTML",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "בתוך ה-HTML:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "קובץ חיצוני:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מומלץ לשים את ה-script בסוף ה-body או להשתמש ב-defer",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "משתנים (Variables)",
    "type": "description",
    "anchor": "variables"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הגדרת משתנים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "let - משתנה שניתן לשינוי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "const - קבוע:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הגדרה מרובה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "כללי שמות משתנים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "טיפוסי נתונים (Data Types)",
    "type": "description",
    "anchor": "datatypes"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Number - מספרים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מספרים שלמים ועשרוניים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פעולות מתמטיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "String - מחרוזות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "יצירת מחרוזות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Boolean - ערכי אמת",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "true ו-false:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Undefined ו-Null",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הבדל בין undefined ל-null:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "undefined - המשתנה קיים אבל אין לו ערך\n                        null - אנחנו מגדירים במפורש שהערך ריק",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "בדיקת טיפוס",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "typeof operator:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "המרות טיפוסים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "המרה למספר:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "המרה למחרוזת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "המרה ל-Boolean:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "אופרטורים (Operators)",
    "type": "description",
    "anchor": "operators"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "אופרטורי השוואה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "אופרטורים לוגיים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "AND, OR, NOT:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "אופרטורי השמה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "קיצורי דרך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "אופרטורים מיוחדים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Ternary operator (תנאי בשורה אחת):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Nullish coalescing (??):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Optional chaining (?.):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מחרוזות (Strings)",
    "type": "description",
    "anchor": "strings"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "יצירת מחרוזות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Template Literals - המומלץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מתודות מחרוזת",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "אורך וגישה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "שינוי רישיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "חיתוך והחלפה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פיצול וחיבור:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הסרת רווחים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מערכים (Arrays)",
    "type": "description",
    "anchor": "arrays"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "יצירת מערכים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "דרכים ליצור מערך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "גישה ושינוי",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "גישה לאיברים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הוספה והסרה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הוספה בסוף ובהתחלה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הסרה מהסוף ומההתחלה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "splice - הוספה/הסרה במיקום ספציפי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מתודות חיפוש",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "חיפוש איברים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מתודות מערך חשובות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "map - יצירת מערך חדש:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "filter - סינון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "reduce - צמצום לערך אחד:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "forEach - לולאה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "sort - מיון:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מתודות נוספות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "שילוב וחיתוך:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "אובייקטים (Objects)",
    "type": "description",
    "anchor": "objects"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "יצירת אובייקטים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Object literal - הדרך הנפוצה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "גישה למאפיינים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "שתי דרכים לגשת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הוספה, שינוי ומחיקה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "עדכון אובייקט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מתודות אובייקט",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פונקציות בתוך אובייקט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Object methods",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מתודות שימושיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Destructuring",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "חילוץ ערכים מאובייקט:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פונקציות (Functions)",
    "type": "description",
    "anchor": "functions"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הגדרת פונקציות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Function Declaration:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Function Expression:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Arrow Function - המודרני:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פרמטרים עם ברירת מחדל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Rest parameters (...):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Callback Functions",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פונקציה כפרמטר:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Higher-Order Functions",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פונקציה שמחזירה פונקציה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "בקרת זרימה (Control Flow)",
    "type": "description",
    "anchor": "control"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "תנאים בסיסיים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "תנאים מורכבים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "בחירה מרובה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Truthy ו-Falsy",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "ערכים שנחשבים false:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "לולאות (Loops)",
    "type": "description",
    "anchor": "loops"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "לולאה קלאסית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "for...of - המודרני",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "לולאה על מערכים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "לולאה על מפתחות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "while ו-do...while",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "while loop:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "break ו-continue",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "שליטה בלולאה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "DOM Manipulation",
    "type": "description",
    "anchor": "dom"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "בחירת אלמנטים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "דרכים לבחור אלמנטים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "עדכון טקסט ו-HTML:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "שינוי סגנון",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "CSS דרך JavaScript:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "יצירה והוספת אלמנטים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "יצירת אלמנטים חדשים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "עבודה עם תכונות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Events (אירועים)",
    "type": "description",
    "anchor": "events"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Event Listeners",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הוספת מאזין לאירוע:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "אירועים נפוצים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "סוגי אירועים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Event Object",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "מידע על האירוע:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הסרת Event Listener",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "הסרת מאזין:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Async/Await ו-Promises",
    "type": "description",
    "anchor": "async"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "יצירת Promise:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "async/await - המודרני",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פונקציה אסינכרונית:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "בקשות HTTP:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Promise.all",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "ריצה מקבילה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "ES6+ Features",
    "type": "description",
    "anchor": "es6"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Spread Operator (...)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "פיזור מערכים ואובייקטים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Destructuring",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "חילוץ ערכים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Default Parameters",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "ערכי ברירת מחדל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Optional Chaining (?.)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "גישה בטוחה למאפיינים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Nullish Coalescing (??)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "ערך ברירת מחדל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Modules (מודולים)",
    "type": "description",
    "anchor": "modules"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Export ו-Import",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "ייצוא מקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "ייבוא לקובץ:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "שימוש ב-HTML:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "JSON ו-APIs",
    "type": "description",
    "anchor": "json"
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "JSON Methods",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "המרה בין JSON למחרוזת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "עבודה עם APIs",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "דוגמה מלאה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "Local Storage",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך JavaScript",
    "file": "javascript-guide.html",
    "context": "שמירת נתונים בדפדפן:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!DOCTYPE html>\n                                <html lang=\"he\" dir=\"rtl\">\n                                <head>\n                                <meta charset=\"UTF-8\">\n                                <title>שם הדף</title>\n                                </head>\n                                <body>\n                                <h1>שלום עולם!</h1>\n                                </body>\n                                </html>",
    "context": "מבנה בסיסי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<head>\n                                <!-- קידוד תווים (חובה לעברית!) -->\n                                <meta charset=\"UTF-8\">\n\n                                <!-- Responsive design -->\n                                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n                                <!-- תיאור לגוגל -->\n                                <meta name=\"description\" content=\"תיאור האתר\">\n\n                                <!-- כותרת הדף -->\n                                <title>שם האתר</title>\n\n                                <!-- קישור ל-CSS -->\n                                <link rel=\"stylesheet\" href=\"style.css\">\n\n                                <!-- Favicon -->\n                                <link rel=\"icon\" href=\"favicon.ico\">\n                                </head>",
    "context": "תגיות נפוצות ב-Head - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- זו הערה - לא תוצג בדף -->\n\n                                <!--\n                                הערה\n                                מרובת\n                                שורות\n                                -->",
    "context": "הערות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- div - מכל כללי -->\n                                <div class=\"container\">\n                                תוכן כלשהו\n                                </div>\n\n                                <!-- span - מכל inline -->\n                                <p>זה <span class=\"highlight\">טקסט מודגש</span> בפסקה</p>",
    "context": "Divs ו-Containers - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<h1>כותרת ראשית</h1>\n                                <h2>כותרת משנית</h2>\n                                <h3>כותרת רמה 3</h3>\n                                <h4>כותרת רמה 4</h4>\n                                <h5>כותרת רמה 5</h5>\n                                <h6>כותרת רמה 6</h6>",
    "context": "כותרות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<p>זו פסקה רגילה של טקסט.</p>\n\n                                <p>פסקה נוספת.</p>\n\n                                <!-- שבירת שורה -->\n                                <p>שורה ראשונה<br>שורה שנייה</p>\n\n                                <!-- קו אופקי -->\n                                <hr>",
    "context": "פסקאות ושורות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- מודגש (bold) -->\n                                <strong>טקסט חשוב</strong>\n                                <b>טקסט מודגש</b>\n\n                                <!-- נטוי (italic) -->\n                                <em>טקסט מודגש</em>\n                                <i>טקסט נטוי</i>\n\n                                <!-- קו תחתון -->\n                                <u>טקסט עם קו תחתון</u>\n\n                                <!-- קו חוצה -->\n                                <s>טקסט מחוק</s>\n\n                                <!-- קטן -->\n                                <small>טקסט קטן</small>\n\n                                <!-- מסומן -->\n                                <mark>טקסט מסומן</mark>\n\n                                <!-- קוד -->\n                                <code>console.log(\"Hello\")</code>\n\n                                <!-- כתב עליון/תחתון -->\n                                H<sub>2</sub>O\n                                x<sup>2</sup>",
    "context": "עיצוב טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- קישור חיצוני -->\n                                <a href=\"https://www.google.com\">גוגל</a>\n\n                                <!-- קישור פנימי -->\n                                <a href=\"about.html\">אודות</a>\n\n                                <!-- פתיחה בטאב חדש -->\n                                <a href=\"https://example.com\" target=\"_blank\">קישור</a>\n\n                                <!-- קישור למייל -->\n                                <a href=\"mailto:email@example.com\">שלח מייל</a>\n\n                                <!-- קישור לטלפון -->\n                                <a href=\"tel:+972501234567\">התקשר</a>\n\n                                <!-- עוגן (anchor) -->\n                                <a href=\"#section1\">קפוץ לסעיף</a>\n                                <div id=\"section1\">תוכן הסעיף</div>",
    "context": "קישורים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- תמונה בסיסית -->\n                                <img src=\"image.jpg\" alt=\"תיאור התמונה\">\n\n                                <!-- עם גודל -->\n                                <img src=\"image.jpg\" alt=\"תיאור\" width=\"300\" height=\"200\">\n\n                                <!-- תמונה קליקבילית -->\n                                <a href=\"page.html\">\n                                <img src=\"image.jpg\" alt=\"תיאור\">\n                                </a>\n\n                                <!-- תמונה responsive -->\n                                <img src=\"image.jpg\" alt=\"תיאור\" style=\"max-width: 100%; height: auto;\">",
    "context": "תמונות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- וידאו -->\n                                <video width=\"640\" height=\"360\" controls>\n                                <source src=\"video.mp4\" type=\"video/mp4\">\n                                הדפדפן לא תומך בוידאו\n                                </video>\n\n                                <!-- אודיו -->\n                                <audio controls>\n                                <source src=\"audio.mp3\" type=\"audio/mpeg\">\n                                הדפדפן לא תומך באודיו\n                                </audio>\n\n                                <!-- YouTube embed -->\n                                <iframe width=\"560\" height=\"315\"\n                                src=\"https://www.youtube.com/embed/VIDEO_ID\"\n                                frameborder=\"0\" allowfullscreen>\n                                </iframe>",
    "context": "וידאו ואודיו - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<ol>\n                                <li>פריט ראשון</li>\n                                <li>פריט שני</li>\n                                <li>פריט שלישי</li>\n                                </ol>\n\n                                <!-- התחלה ממספר אחר -->\n                                <ol start=\"5\">\n                                <li>פריט חמישי</li>\n                                <li>פריט שישי</li>\n                                </ol>\n\n                                <!-- סוגי מספור -->\n                                <ol type=\"A\"> <!-- A, B, C -->\n                                <ol type=\"a\"> <!-- a, b, c -->\n                                <ol type=\"I\"> <!-- I, II, III -->\n                                <ol type=\"i\"> <!-- i, ii, iii -->",
    "context": "רשימה ממוספרת - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<ul>\n                                <li>פריט ראשון</li>\n                                <li>פריט שני</li>\n                                <li>פריט שלישי</li>\n                                </ul>\n\n                                <!-- רשימה מקוננת -->\n                                <ul>\n                                <li>פריט ראשי\n                                <ul>\n                                <li>תת-פריט 1</li>\n                                <li>תת-פריט 2</li>\n                                </ul>\n                                </li>\n                                <li>פריט שני</li>\n                                </ul>",
    "context": "רשימה עם תבליטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<dl>\n                                <dt>HTML</dt>\n                                <dd>שפת סימון לבניית דפי אינטרנט</dd>\n\n                                <dt>CSS</dt>\n                                <dd>שפת עיצוב לדפי אינטרנט</dd>\n\n                                <dt>JavaScript</dt>\n                                <dd>שפת תכנות לאינטראקטיביות</dd>\n                                </dl>",
    "context": "רשימת הגדרות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<table>\n                                <thead>\n                                <tr>\n                                <th>שם</th>\n                                <th>גיל</th>\n                                <th>עיר</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                <td>אליס</td>\n                                <td>25</td>\n                                <td>תל אביב</td>\n                                </tr>\n                                <tr>\n                                <td>בוב</td>\n                                <td>30</td>\n                                <td>ירושלים</td>\n                                </tr>\n                                </tbody>\n                                </table>",
    "context": "טבלה בסיסית - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<table>\n                                <tr>\n                                <th colspan=\"2\">שם מלא</th>\n                                <th>גיל</th>\n                                </tr>\n                                <tr>\n                                <td>אליס</td>\n                                <td>כהן</td>\n                                <td rowspan=\"2\">25</td>\n                                </tr>\n                                <tr>\n                                <td>בוב</td>\n                                <td>לוי</td>\n                                </tr>\n                                </table>",
    "context": "מיזוג תאים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<form action=\"/submit\" method=\"POST\">\n                                <!-- שדה טקסט -->\n                                <label for=\"name\">שם:</label>\n                                <input type=\"text\" id=\"name\" name=\"name\" required>\n\n                                <!-- אימייל -->\n                                <label for=\"email\">אימייל:</label>\n                                <input type=\"email\" id=\"email\" name=\"email\" required>\n\n                                <!-- סיסמה -->\n                                <label for=\"password\">סיסמה:</label>\n                                <input type=\"password\" id=\"password\" name=\"password\" required>\n\n                                <!-- כפתור שליחה -->\n                                <button type=\"submit\">שלח</button>\n                                </form>",
    "context": "טופס בסיסי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- טקסט -->\n                                <input type=\"text\" placeholder=\"הכנס טקסט\">\n\n                                <!-- מספר -->\n                                <input type=\"number\" min=\"0\" max=\"100\" step=\"5\">\n\n                                <!-- אימייל -->\n                                <input type=\"email\" placeholder=\"email@example.com\">\n\n                                <!-- טלפון -->\n                                <input type=\"tel\" placeholder=\"050-1234567\">\n\n                                <!-- URL -->\n                                <input type=\"url\" placeholder=\"https://example.com\">\n\n                                <!-- תאריך -->\n                                <input type=\"date\">\n\n                                <!-- זמן -->\n                                <input type=\"time\">\n\n                                <!-- צבע -->\n                                <input type=\"color\">\n\n                                <!-- קובץ -->\n                                <input type=\"file\" accept=\"image/*\">\n\n                                <!-- טווח (slider) -->\n                                <input type=\"range\" min=\"0\" max=\"100\" value=\"50\">",
    "context": "סוגי Input - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- Checkbox - בחירה מרובה -->\n                                <label>\n                                <input type=\"checkbox\" name=\"hobbies\" value=\"reading\">\n                                קריאה\n                                </label>\n                                <label>\n                                <input type=\"checkbox\" name=\"hobbies\" value=\"sports\">\n                                ספורט\n                                </label>\n\n                                <!-- Radio - בחירה יחידה -->\n                                <label>\n                                <input type=\"radio\" name=\"gender\" value=\"male\">\n                                זכר\n                                </label>\n                                <label>\n                                <input type=\"radio\" name=\"gender\" value=\"female\">\n                                נקבה\n                                </label>",
    "context": "Checkbox ו-Radio - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- רשימה נפתחת -->\n                                <label for=\"city\">עיר:</label>\n                                <select id=\"city\" name=\"city\">\n                                <option value=\"\">בחר עיר</option>\n                                <option value=\"tlv\">תל אביב</option>\n                                <option value=\"jlm\">ירושלים</option>\n                                <option value=\"hfa\">חיפה</option>\n                                </select>\n\n                                <!-- טקסט מרובה שורות -->\n                                <label for=\"message\">הודעה:</label>\n                                <textarea id=\"message\" name=\"message\" rows=\"5\" cols=\"30\">\n                                </textarea>",
    "context": "Select ו-Textarea - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- חובה -->\n                                <input type=\"text\" required>\n\n                                <!-- לא ניתן לעריכה -->\n                                <input type=\"text\" readonly value=\"לא ניתן לשינוי\">\n\n                                <!-- מושבת -->\n                                <input type=\"text\" disabled>\n\n                                <!-- ערך ברירת מחדל -->\n                                <input type=\"text\" value=\"ברירת מחדל\">\n\n                                <!-- Placeholder -->\n                                <input type=\"text\" placeholder=\"הכנס טקסט כאן\">\n\n                                <!-- אורך מינימלי/מקסימלי -->\n                                <input type=\"text\" minlength=\"3\" maxlength=\"20\">\n\n                                <!-- Pattern (Regex) -->\n                                <input type=\"text\" pattern=\"[0-9]{3}-[0-9]{7}\">\n\n                                <!-- Autofocus -->\n                                <input type=\"text\" autofocus>",
    "context": "תכונות שימושיות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<body>\n                                <!-- כותרת עליונה -->\n                                <header>\n                                <h1>שם האתר</h1>\n                                <nav>\n                                <ul>\n                                <li><a href=\"#\">בית</a></li>\n                                <li><a href=\"#\">אודות</a></li>\n                                <li><a href=\"#\">צור קשר</a></li>\n                                </ul>\n                                </nav>\n                                </header>\n\n                                <!-- תוכן ראשי -->\n                                <main>\n                                <article>\n                                <h2>כותרת מאמר</h2>\n                                <p>תוכן המאמר...</p>\n                                </article>\n\n                                <section>\n                                <h2>סעיף</h2>\n                                <p>תוכן הסעיף...</p>\n                                </section>\n                                </main>\n\n                                <!-- סרגל צד -->\n                                <aside>\n                                <h3>מידע נוסף</h3>\n                                <p>תוכן צדדי...</p>\n                                </aside>\n\n                                <!-- כותרת תחתונה -->\n                                <footer>\n                                <p>© 2024 כל הזכויות שמורות</p>\n                                </footer>\n                                </body>",
    "context": "מבנה דף סמנטי - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- פרטים נפתחים -->\n                                <details>\n                                <summary>לחץ לפתיחה</summary>\n                                <p>תוכן נסתר שנפתח בלחיצה</p>\n                                </details>\n\n                                <!-- סימון זמן -->\n                                <time datetime=\"2024-01-01\">1 בינואר 2024</time>\n\n                                <!-- ציטוט -->\n                                <blockquote cite=\"https://example.com\">\n                                <p>זהו ציטוט ארוך</p>\n                                </blockquote>\n\n                                <!-- קוד -->\n                                <pre><code>\n                                function hello() {\n                                console.log(\"Hello!\");\n                                }\n                                </code></pre>",
    "context": "תגיות נוספות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<p style=\"color: red; font-size: 20px;\">טקסט אדום</p>",
    "context": "דרכים להוסיף CSS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<head>\n                                <style>\n                                p {\n                                color: red;\n                                font-size: 20px;\n                                }\n                                </style>\n                                </head>",
    "context": "דרכים להוסיף CSS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- ב-HTML -->\n                                <head>\n                                <link rel=\"stylesheet\" href=\"style.css\">\n                                </head>\n\n                                /* בקובץ style.css */\n                                p {\n                                color: red;\n                                font-size: 20px;\n                                }",
    "context": "דרכים להוסיף CSS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Selector */\n                                selector {\n                                property: value;\n                                another-property: value;\n                                }\n\n                                /* דוגמה */\n                                h1 {\n                                color: blue;\n                                font-size: 32px;\n                                text-align: center;\n                                }\n\n                                /* הערה ב-CSS */\n                                /* זו הערה */",
    "context": "תחביר CSS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Element Selector - כל ה-p */\n                                p {\n                                color: blue;\n                                }\n\n                                /* Class Selector - כל מי שיש לו class=\"highlight\" */\n                                .highlight {\n                                background-color: yellow;\n                                }\n\n                                /* ID Selector - האלמנט עם id=\"header\" */\n                                #header {\n                                font-size: 24px;\n                                }\n\n                                /* Universal Selector - הכל */\n                                * {\n                                margin: 0;\n                                padding: 0;\n                                }\n\n                                /* Multiple Selectors */\n                                h1, h2, h3 {\n                                color: navy;\n                                }",
    "context": "Selectors בסיסיים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Descendant - כל p בתוך div */\n                                div p {\n                                color: red;\n                                }\n\n                                /* Child - רק p ישיר של div */\n                                div > p {\n                                color: blue;\n                                }\n\n                                /* Adjacent Sibling - p מיד אחרי h2 */\n                                h2 + p {\n                                font-weight: bold;\n                                }\n\n                                /* General Sibling - כל p אחרי h2 */\n                                h2 ~ p {\n                                color: gray;\n                                }",
    "context": "Combinators - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Hover - כשעוברים עם העכבר */\n                                a:hover {\n                                color: red;\n                                }\n\n                                /* Active - בזמן לחיצה */\n                                button:active {\n                                background-color: darkblue;\n                                }\n\n                                /* Focus - כשהאלמנט בפוקוס */\n                                input:focus {\n                                border-color: blue;\n                                }\n\n                                /* First/Last child */\n                                li:first-child {\n                                font-weight: bold;\n                                }\n\n                                li:last-child {\n                                color: red;\n                                }\n\n                                /* Nth child */\n                                li:nth-child(2) {\n                                color: blue;\n                                }\n\n                                li:nth-child(odd) {\n                                background-color: #f0f0f0;\n                                }\n\n                                li:nth-child(even) {\n                                background-color: white;\n                                }",
    "context": "Pseudo-classes - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Before - הוספת תוכן לפני */\n                                p::before {\n                                content: \"→ \";\n                                color: blue;\n                                }\n\n                                /* After - הוספת תוכן אחרי */\n                                p::after {\n                                content: \" ←\";\n                                color: red;\n                                }\n\n                                /* First letter */\n                                p::first-letter {\n                                font-size: 2em;\n                                font-weight: bold;\n                                }\n\n                                /* First line */\n                                p::first-line {\n                                color: blue;\n                                }\n\n                                /* Selection - טקסט מסומן */\n                                ::selection {\n                                background-color: yellow;\n                                color: black;\n                                }",
    "context": "Pseudo-elements - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* יש תכונה */\n                                [disabled] {\n                                opacity: 0.5;\n                                }\n\n                                /* ערך מדויק */\n                                [type=\"text\"] {\n                                border: 1px solid gray;\n                                }\n\n                                /* מתחיל ב */\n                                [href^=\"https\"] {\n                                color: green;\n                                }\n\n                                /* מסתיים ב */\n                                [href$=\".pdf\"] {\n                                color: red;\n                                }\n\n                                /* מכיל */\n                                [class*=\"btn\"] {\n                                padding: 10px;\n                                }",
    "context": "Attribute Selectors - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* שם צבע */\n                                color: red;\n                                color: blue;\n                                color: transparent;\n\n                                /* HEX */\n                                color: #FF0000; /* אדום */\n                                color: #00FF00; /* ירוק */\n                                color: #0000FF; /* כחול */\n                                color: #F00; /* קיצור ל-#FF0000 */\n\n                                /* RGB */\n                                color: rgb(255, 0, 0); /* אדום */\n                                color: rgb(0, 255, 0); /* ירוק */\n\n                                /* RGBA - עם שקיפות */\n                                color: rgba(255, 0, 0, 0.5); /* אדום 50% שקוף */\n\n                                /* HSL */\n                                color: hsl(0, 100%, 50%); /* אדום */\n\n                                /* HSLA - עם שקיפות */\n                                color: hsla(0, 100%, 50%, 0.5);",
    "context": "דרכים להגדיר צבע - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* צבע רקע */\n                                background-color: #f0f0f0;\n\n                                /* תמונת רקע */\n                                background-image: url('image.jpg');\n\n                                /* חזרה */\n                                background-repeat: no-repeat; /* ללא חזרה */\n                                background-repeat: repeat-x; /* חזרה אופקית */\n                                background-repeat: repeat-y; /* חזרה אנכית */\n\n                                /* מיקום */\n                                background-position: center;\n                                background-position: top right;\n                                background-position: 50% 50%;\n\n                                /* גודל */\n                                background-size: cover; /* מכסה את כל השטח */\n                                background-size: contain; /* מתאים לגודל */\n                                background-size: 100% auto;\n\n                                /* קיבוע */\n                                background-attachment: fixed; /* קבוע בגלילה */\n\n                                /* קיצור דרך */\n                                background: #f0f0f0 url('image.jpg') no-repeat center/cover;",
    "context": "רקעים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Linear Gradient */\n                                background: linear-gradient(to right, red, blue);\n                                background: linear-gradient(45deg, red, yellow, green);\n                                background: linear-gradient(to bottom, #ff0000, #00ff00);\n\n                                /* Radial Gradient */\n                                background: radial-gradient(circle, red, blue);\n                                background: radial-gradient(ellipse at center, red, blue);\n\n                                /* Multiple stops */\n                                background: linear-gradient(\n                                to right,\n                                red 0%,\n                                yellow 50%,\n                                green 100%\n                                );",
    "context": "Gradients - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* משפחת פונט */\n                                font-family: Arial, Helvetica, sans-serif;\n                                font-family: 'Times New Roman', serif;\n                                font-family: 'Courier New', monospace;\n\n                                /* גודל */\n                                font-size: 16px;\n                                font-size: 1.5em;\n                                font-size: 1.2rem;\n\n                                /* משקל (עובי) */\n                                font-weight: normal; /* 400 */\n                                font-weight: bold; /* 700 */\n                                font-weight: 300; /* דק */\n                                font-weight: 900; /* עבה מאוד */\n\n                                /* סגנון */\n                                font-style: normal;\n                                font-style: italic;\n                                font-style: oblique;\n\n                                /* קיצור דרך */\n                                font: italic bold 16px/1.5 Arial, sans-serif;",
    "context": "פונטים - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* יישור */\n                                text-align: left;\n                                text-align: right;\n                                text-align: center;\n                                text-align: justify;\n\n                                /* קישוט */\n                                text-decoration: none;\n                                text-decoration: underline;\n                                text-decoration: line-through;\n                                text-decoration: overline;\n\n                                /* טרנספורמציה */\n                                text-transform: uppercase; /* אותיות גדולות */\n                                text-transform: lowercase; /* אותיות קטנות */\n                                text-transform: capitalize; /* אות ראשונה גדולה */\n\n                                /* צל */\n                                text-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n\n                                /* רווח בין אותיות */\n                                letter-spacing: 2px;\n                                letter-spacing: 0.1em;\n\n                                /* רווח בין מילים */\n                                word-spacing: 5px;\n\n                                /* גובה שורה */\n                                line-height: 1.5;\n                                line-height: 24px;\n\n                                /* הזחה */\n                                text-indent: 20px;",
    "context": "עיצוב טקסט - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- ב-HTML head -->\n                                <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n                                <link\n                                href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap\"\n                                rel=\"stylesheet\">\n\n                                /* ב-CSS */\n                                body {\n                                font-family: 'Roboto', sans-serif;\n                                }",
    "context": "Google Fonts - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Margin - מרווח חיצוני */\n                                margin: 20px;\n                                margin: 10px 20px; /* אנכי אופקי */\n                                margin: 10px 20px 30px 40px; /* למעלה ימין למטה שמאל */\n                                margin-top: 10px;\n                                margin-right: 20px;\n                                margin-bottom: 30px;\n                                margin-left: 40px;\n                                margin: 0 auto; /* מרכוז */\n\n                                /* Padding - מרווח פנימי */\n                                padding: 20px;\n                                padding: 10px 20px;\n                                padding: 10px 20px 30px 40px;\n\n                                /* Border - מסגרת */\n                                border: 1px solid black;\n                                border-width: 2px;\n                                border-style: solid; /* solid, dashed, dotted */\n                                border-color: red;\n                                border-radius: 10px; /* פינות מעוגלות */\n\n                                /* Box sizing */\n                                box-sizing: border-box; /* מומלץ! */",
    "context": "Margin, Padding, Border - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": ".container {\n                                display: flex;\n\n                                /* כיוון */\n                                flex-direction: row; /* שורה (ברירת מחדל) */\n                                flex-direction: column; /* עמודה */\n\n                                /* יישור אופקי */\n                                justify-content: flex-start;\n                                justify-content: center;\n                                justify-content: space-between;\n                                justify-content: space-around;\n\n                                /* יישור אנכי */\n                                align-items: flex-start;\n                                align-items: center;\n                                align-items: stretch;\n\n                                /* מעבר שורה */\n                                flex-wrap: wrap;\n                                flex-wrap: nowrap;\n\n                                /* רווח בין פריטים */\n                                gap: 20px;\n                                }",
    "context": "Container Properties - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": ".container {\n                                display: grid;\n\n                                /* עמודות */\n                                grid-template-columns: 200px 200px 200px;\n                                grid-template-columns: 1fr 1fr 1fr; /* שווה */\n                                grid-template-columns: repeat(3, 1fr);\n                                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n\n                                /* שורות */\n                                grid-template-rows: 100px 200px;\n\n                                /* רווחים */\n                                gap: 20px;\n                                row-gap: 10px;\n                                column-gap: 20px;\n                                }",
    "context": "Grid Container - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Mobile First */\n                                .container {\n                                width: 100%;\n                                padding: 10px;\n                                }\n\n                                /* Tablet */\n                                @media (min-width: 768px) {\n                                .container {\n                                width: 750px;\n                                padding: 20px;\n                                }\n                                }\n\n                                /* Desktop */\n                                @media (min-width: 1024px) {\n                                .container {\n                                width: 1000px;\n                                }\n                                }\n\n                                /* Large Desktop */\n                                @media (min-width: 1440px) {\n                                .container {\n                                width: 1200px;\n                                }\n                                }",
    "context": "Media Queries - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": ".button {\n                                background-color: blue;\n                                transition: all 0.3s ease;\n                                }\n\n                                .button:hover {\n                                background-color: red;\n                                transform: scale(1.1);\n                                }\n\n                                /* מפורט יותר */\n                                .box {\n                                transition-property: background-color, transform;\n                                transition-duration: 0.3s, 0.5s;\n                                transition-timing-function: ease, ease-in-out;\n                                transition-delay: 0s, 0.1s;\n                                }",
    "context": "Transitions - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* הגדרת אנימציה */\n                                @keyframes fadeIn {\n                                from {\n                                opacity: 0;\n                                }\n                                to {\n                                opacity: 1;\n                                }\n                                }\n\n                                /* שימוש */\n                                .element {\n                                animation: fadeIn 1s ease-in;\n                                }\n\n                                /* אנימציה מורכבת */\n                                @keyframes bounce {\n                                0%, 100% {\n                                transform: translateY(0);\n                                }\n                                50% {\n                                transform: translateY(-20px);\n                                }\n                                }\n\n                                .bouncing {\n                                animation: bounce 1s infinite;\n                                }",
    "context": "Animations - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- CDN -->\n                                <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\"\n                                rel=\"stylesheet\">\n\n                                <!-- דוגמה -->\n                                <div class=\"container\">\n                                <div class=\"row\">\n                                <div class=\"col-md-6\">עמודה 1</div>\n                                <div class=\"col-md-6\">עמודה 2</div>\n                                </div>\n                                </div>\n\n                                <button class=\"btn btn-primary\">כפתור</button>",
    "context": "Bootstrap - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "<!-- CDN -->\n                                <script src=\"https://cdn.tailwindcss.com\"></script>\n\n                                <!-- דוגמה -->\n                                <div class=\"flex items-center justify-center h-screen bg-gray-100\">\n                                <div class=\"bg-white p-8 rounded-lg shadow-lg\">\n                                <h1 class=\"text-2xl font-bold text-blue-600\">כותרת</h1>\n                                <p class=\"text-gray-600 mt-4\">תוכן</p>\n                                </div>\n                                </div>",
    "context": "Tailwind CSS - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "command": "/* Bulma - פשוט ומודרני */\n                                https://bulma.io\n\n                                /* Foundation - גמיש ומתקדם */\n                                https://get.foundation\n\n                                /* Materialize - Material Design */\n                                https://materializecss.com\n\n                                /* Semantic UI - קריא וסמנטי */\n                                https://semantic-ui.com\n\n                                /* Pure CSS - קל משקל */\n                                https://purecss.io",
    "context": "ספריות נוספות - ",
    "type": "command",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "יסודות HTML",
    "type": "description",
    "anchor": "basics"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "דף HTML מינימלי:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "תגיות נפוצות ב-Head",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Meta tags חשובים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "הערות ב-HTML:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Divs ו-Containers",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "תגיות מכילות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "div - בלוק (תופס שורה שלמה)\n                            span - inline (בתוך שורה)",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "טקסט ופסקאות",
    "type": "description",
    "anchor": "text"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "6 רמות כותרות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "פסקאות ושורות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "תגיות עיצוב:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "strong/em - משמעות סמנטית (מומלץ)\n                            b/i - רק עיצוב ויזואלי",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "קישורים ותמונות",
    "type": "description",
    "anchor": "links"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "סוגי קישורים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "הוספת תמונות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "src - נתיב לתמונה\n                            alt - תיאור (חובה!)\n                            width/height - גודל בפיקסלים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "וידאו ואודיו",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "מדיה מתקדמת:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "רשימה ממוספרת",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Ordered List:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "רשימה עם תבליטים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Unordered List:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "רשימת הגדרות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Description List:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "טבלה בסיסית",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "th - תא כותרת (מודגש)\n                            td - תא רגיל\n                            tr - שורה",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "colspan ו-rowspan:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "טפסים (Forms)",
    "type": "description",
    "anchor": "forms"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "כל סוגי ה-input:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Checkbox ו-Radio",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "בחירה מרובה ויחידה:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Select ו-Textarea",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "רשימה נפתחת וטקסט מרובה שורות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "תכונות שימושיות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Attributes חשובים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "HTML5 Semantic Elements",
    "type": "description",
    "anchor": "semantic"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "מבנה דף סמנטי",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "דף מלא עם תגיות סמנטיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "תגיות נוספות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "תגיות שימושיות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "דרכים להוסיף CSS",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "1. Inline CSS (לא מומלץ):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "2. Internal CSS:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "3. External CSS (מומלץ!):",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "מבנה כלל CSS:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Selector - מה לעצב\n                            Property - איזה מאפיין\n                            Value - איזה ערך",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "CSS Selectors",
    "type": "description",
    "anchor": "selectors"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Selectors בסיסיים",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "סוגי Selectors:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Combinators",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "שילוב Selectors:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Pseudo-classes",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "מצבים מיוחדים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Pseudo-elements",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "חלקים מיוחדים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Attribute Selectors",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "בחירה לפי תכונות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "צבעים ורקעים",
    "type": "description",
    "anchor": "colors"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "דרכים להגדיר צבע",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "פורמטים שונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Background properties:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Font properties:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Text properties:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Google Fonts",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "שימוש בפונטים מגוגל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Margin, Padding, Border",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Container Properties",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "תכונות למכל:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Grid Container",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "יצירת Grid:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Responsive Design",
    "type": "description",
    "anchor": "responsive"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Media Queries",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "CSS לגדלים שונים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Animations & Transitions",
    "type": "description",
    "anchor": "animations"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Transitions",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "מעברים חלקים:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "אנימציות מורכבות:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "ספריות CSS פופולריות",
    "type": "description",
    "anchor": "frameworks"
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "הספרייה הפופולרית ביותר:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Tailwind CSS",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "Utility-first framework:",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "ספריות נוספות",
    "type": "description",
    "anchor": ""
  },
  {
    "page": "מדריך HTML/CSS",
    "file": "html-css-guide.html",
    "context": "אפשרויות פופולריות:",
    "type": "description",
    "anchor": ""
  }
];
