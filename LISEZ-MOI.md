# Carte scolaire IEF Oussouye – logiciel Windows

## Obtenir le .exe sans rien installer (recommandé) – GitHub
1. Créez un compte gratuit sur github.com, puis un nouveau dépôt.
2. Envoyez-y tout le contenu de ce dossier (« Add file » > « Upload files »), y compris le dossier `.github`.
3. Onglet **Actions** > « Construire le logiciel Windows (.exe) » : attendez 3 à 6 minutes.
4. Ouvrez l'exécution terminée et téléchargez **Carte-scolaire-IEF-Oussouye-exe** (.zip) :
   - `…-Installateur-1.0.0.exe` : installe le logiciel avec raccourci sur le bureau ;
   - `…-Portable-1.0.0.exe` : s'utilise directement, sans installation (clé USB).

## Ou sur un PC Windows avec Node.js 18+
`npm install` puis `npm run build` : les .exe sont dans le dossier `dist`.
Pour simplement tester : `npm start`.

## Sans compilation
Double-cliquez sur `Lancer-sans-installation.bat` (ouvre l'application dans Microsoft Edge, fenêtre dédiée).

## Données
Elles sont enregistrées sur l'ordinateur, dans le profil de l'utilisateur Windows. Faites des sauvegardes JSON régulières (onglet « Données »).
Si Windows affiche « SmartScreen », cliquez sur « Informations complémentaires » puis « Exécuter quand même » (le logiciel n'est pas signé).

## Version avec cycle secondaire

Le référentiel comprend désormais les cycles préscolaire, élémentaire, moyen et secondaire. Le cycle secondaire propose les classes Seconde, Première L1/L2/S1/S2 et Terminale L1/L2/S1/S2. Les effectifs par classe, statistiques, filtres, carte, fiches et exports utilisent automatiquement ce nouveau cycle. Les anciens établissements dont le nom commence par « Lycée » sont reclassés automatiquement au chargement.
