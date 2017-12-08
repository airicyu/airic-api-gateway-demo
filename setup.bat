@echo off
echo Installing sample-petstore-app dependency modules...
cd sample-petstore-app
CALL npm install

echo Installing config-server dependency modules...
cd ..\config-server
CALL npm install

echo Installing key-server dependency modules...
cd ..\key-server
CALL npm install

echo Installing stat-server dependency modules...
cd ..\stat-server
CALL npm install

echo Installing api-gateway dependency modules...
cd ..\api-gateway
CALL npm install

echo Done!
@echo off