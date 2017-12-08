cd sample-petstore-app
start cmd.exe @cmd /k "node index.js & pause & exit"
cd ..\config-server
start cmd.exe @cmd /k "node index.js & pause & exit"
timeout 2 >nul
cd ..\key-server
start cmd.exe @cmd /k "node index.js & pause & exit"
cd ..\stat-server
start cmd.exe @cmd /k "node index.js & pause & exit"
cd ..\api-gateway
start cmd.exe @cmd /k "node index.js & pause & exit"