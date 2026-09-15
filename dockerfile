# ==========================================
# Etapa 1: Instalar dependencias y compilar
# ==========================================
FROM node:20-alpine AS build

WORKDIR /usr/src/app

# Copiar manifiestos de dependencias
COPY package*.json ./

# Instalar dependencias incluyendo las de desarrollo (necesarias para compilar)
RUN npm ci

# Copiar el código fuente del proyecto
COPY . .

# Compilar el proyecto de TypeScript a JavaScript de producción (Genera la carpeta /dist)
RUN npm run build

# Eliminar dependencias de desarrollo y quedarse solo con las de producción
RUN npm prune --production

# ==========================================
# Etapa 2: Imagen final ligera para ejecución
# ==========================================
FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Copiar únicamente lo necesario desde la etapa de compilación
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package*.json ./

# Exponer el puerto en el que corre tu app de NestJS (ajústalo si usas otro)
EXPOSE 3000

# Comando para arrancar la aplicación en modo producción
CMD ["node", "dist/main"]
