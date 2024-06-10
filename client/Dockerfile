# Usar a imagem base oficial do Node.js
FROM node:18-alpine as build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# Construir a aplicação React
RUN npm run build

# Usar a imagem base do Nginx para servir a aplicação
FROM nginx:stable-alpine

# Copiar os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiar o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80 para o tráfego HTTP
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
