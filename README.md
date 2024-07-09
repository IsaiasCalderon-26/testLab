<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description Nest JS

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Proyecto Backend Hola Mundo

git@github.com:kbn-spotlight/api-kibertTestFabric.git

## Installation

## Requisitos Previos

Para ejecutar este proyecto, necesitarás tener instalado:

- Node.js
- NVM (Node Version Manager)
- Git
- Docker (opcional, si deseas ejecutar el proyecto en contenedores)

### Verificar Node.js y NVM

1. Verifica si Node.js está instalado:

node --version

Si no tienes Node.js, puedes instalarlo usando NVM.

2. Para instalar o actualizar NVM, sigue las instrucciones en [NVM GitHub](https://github.com/nvm-sh/nvm).

3. Con NVM instalado, puedes instalar cualquier versión de Node.js:

nvm install node # Instala la última versión de Node.js nvm use node # Usa la versión de Node.js recién instalada


## Configuración del Repositorio

### Crear una Llave SSH

Para clonar el proyecto, primero necesitas configurar una llave SSH en GitHub:

1. Genera una nueva llave SSH (si aún no tienes una):

ssh-keygen -t rsa -b 4096 -C "tu_email@example.com"

Sigue las instrucciones en la terminal para generar tu llave.

2. Agrega la llave SSH a tu agente SSH:
eval "$(ssh-agent -s)" ssh-add ~/.ssh/id_rsa

3. Añade tu llave SSH a tu cuenta de GitHub siguiendo las instrucciones en [GitHub Docs](https://docs.github.com/es/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

### Clonar el Repositorio

Una vez configurada tu llave SSH, clona el repositorio usando:

git clone git@github.com:kbn-spotlight/api-kibertTestFabric.git

Navega al directorio del proyecto:

cd api-kibertTestFabric


## Instalación

Sigue estos pasos para instalar el proyecto:

1. Instala las dependencias:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Ejecucion Docker


## Docker (Opcional)

Para construir y ejecutar el proyecto dentro de un contenedor Docker, sigue estos pasos:

1. Construye la imagen Docker:

docker build -t nombre-de-tu-imagen .

2. Ejecuta el contenedor:

docker run -p 4000:4000 nombre-de-tu-imagen

# Construir la imagen Docker Ejemplo
docker build -t isa2612/holamundo:v1.0 .

# Subir la imagen a Docker Hub
docker push isa2612/holamundo:v1.0
Asegúrate de haber iniciado sesión en Docker Hub con docker login antes de intentar subir la imagen.