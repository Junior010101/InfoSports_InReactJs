#!/bin/bash

echo "Instalando dependências do front-end..."
npm install

echo "Instalando dependências do back-end..."
cd api
npm install

echo "Tudo pronto!"
