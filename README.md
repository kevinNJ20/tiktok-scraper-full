# TikTok Scraper API

![Node.js](https://img.shields.io/badge/Node.js-16%2B-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-4.x-blue)
![dotenv](https://img.shields.io/badge/dotenv-10.0.0-yellowgreen)
![axios](https://img.shields.io/badge/axios-0.28.0-blue)

## Description

`tiktok-scraper-full` est une application Node.js construite avec Express qui fournit une API REST pour extraire des données de TikTok. L'API permet d'interagir avec les données des vidéos TikTok et d'extraire des informations pertinentes.

## Features

- **RESTful API** pour extraire des données de TikTok.
- Requêtes HTTP simplifiées avec `axios`.
- Configuration des variables d'environnement avec `dotenv`.
- Serveur léger et performant avec `express`.

## Requirements

- Node.js 16.x ou supérieur
- NPM 7.x ou supérieur

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/your-username/tiktok-scraper-full.git
    cd tiktok-scraper-full
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement nécessaires :

    ```env
    PORT=3000
    ```

    (Ajoutez d'autres variables d'environnement si nécessaire pour votre API.)

4. Démarrez le serveur :

    ```bash
    npm start
    ```

    Le serveur démarrera sur `http://localhost:3000`.

## Project Structure

Le projet est organisé comme suit :

- `server.js`: Fichier principal du serveur Express.
- `package.json`: Fichier de configuration des dépendances et des scripts du projet.
- `.env`: Fichier de configuration des variables d'environnement (à créer selon vos besoins).

## Usage

Accédez à l'API via les points de terminaison définis dans votre serveur Express pour interagir avec les données TikTok.

## Contributing

Les contributions sont les bienvenues ! Veuillez soumettre un pull request ou ouvrir une issue pour discuter des améliorations ou des bogues.

## License

Ce projet est sous la licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

