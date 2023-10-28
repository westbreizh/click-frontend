# ecosysteme

installer node avec une version récente, si besoin utiliser nvm
avoir yarn et ou npm

## Scripts Disponibles


Dans le répertoire du projet,vous pouvez exécuter :

### `yarn install`

installe les différentes dépendances du projet
yarn upgrade
yarn upgrade-interactive
yarn audit
yarn outdated
yarn cache clean
Dépendance utilisant et installant des dépendances non actualisé :
dans yarn.lock
remplacer vielle version par nth-check "^2.0.1" 
idem pour resolve-url-loader "^5.0.0"
 dernier probleme   punycode "^2.3.0" mais pas trop grâve apperement ...

### `yarn start`

Lance l'application en mode de développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la visualiser dans votre navigateur.

La page se rechargera automatiquement lorsque vous apportez des modifications.\
Vous pourrez également voir les erreurs de lint dans la console.

Pour compiler le SASS en CSS côté front-end, utilisez :
### `yarn sass`


### `yarn build`

Construit l'application pour la production dans le dossier `build`.\
Il regroupe correctement React en mode de production et optimise la construction pour de meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.\
Votre application est prête à être déployée !

Consultez la section sur [le déploiement](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.


### `yarn test`

Lance le runner de tests en mode interactif.\
Consultez la section sur [l'exécution des tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.