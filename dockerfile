# Utilise une image Node.js officielle comme image de base
FROM node:22

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

RUN npm run build

RUN npm install -g serve
# Expose le port utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["serve", "-s", "dist", "-l", "3000"]