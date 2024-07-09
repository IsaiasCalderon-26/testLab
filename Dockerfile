# Usar una imagen base de Node
FROM node:22.3.0

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Instalar dependencias
# El asterisco es para copiar tanto package.json como package-lock.json
COPY package*.json ./

RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/main"]