# Usar una imagen base de Node.js
FROM node:22

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto que usa la aplicación
EXPOSE 80

# Comando para ejecutar la aplicación
CMD ["npm", "start"]