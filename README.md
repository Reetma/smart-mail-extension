<p align="center"><img src="logo.png" width="96" alt="Smart Mail"></p>

# Smart Mail — extension Chrome

Extension Chrome (Manifest V3) qui pilote **Outlook web** dans votre navigateur :

1. **Relever les adresses** : depuis n'importe quelle page d'Outlook, « Démarrer » ouvre un nouveau message et relève les adresses que propose le champ « À » (annuaire de votre organisation), sans jamais rien valider ni envoyer. Les personnes trouvées rejoignent un **annuaire commun**, en direct.
2. **Envoyer** : le même message à chaque destinataire, un par un (ou par paquets en Cci), depuis votre propre adresse, à un rythme réglable, en arrière-plan. Liste « Déjà envoyés » pour ne jamais écrire deux fois à la même personne.

Tout se passe dans votre navigateur : aucun serveur, aucune API, aucun mot de passe stocké.

## Installation

1. Téléchargez ce dépôt (Code → Download ZIP) et décompressez-le.
2. Dans Chrome : `chrome://extensions` → activez le **mode développeur** → **Charger l'extension non empaquetée** → choisissez le dossier `extension/`.
3. Ouvrez Outlook web (outlook.office.com, outlook.cloud.microsoft, outlook.live.com) : le panneau Smart Mail apparaît. Le bouton de l'extension l'affiche ou le masque.

Interface d'Outlook reconnue en français, anglais, allemand, espagnol, italien, néerlandais et portugais.

## Sécurité du pilotage

Les tests vérifient, sur de fausses pages Outlook (nouvel Outlook, Outlook classique, 9 langues, fenêtres des établissements, onglet caché, plusieurs onglets…), que l'extension :

- n'agit **que dans la rédaction qu'elle a ouverte elle-même** (jamais dans un brouillon de l'utilisateur, une réponse, Teams) ;
- revérifie **destinataires, Cc, Cci, objet et message juste avant « Envoyer »**, et ne compte un mail « envoyé » qu'avec une preuve ;
- n'envoie **jamais deux fois** au même destinataire (verrous entre onglets, reprise après rechargement) ;
- ne tape et n'efface **que dans un champ destinataire vide**, en vérifiant le curseur avant chaque lettre, et n'efface que ce qu'elle a tapé ;
- lit les adresses **toujours entières** (jamais un morceau d'adresse qui désignerait une autre personne) et écarte groupes, listes et salles ;
- s'arrête **sans rien envoyer** sur tout état inattendu (fenêtre d'Outlook, hors connexion, bouton désactivé, l'utilisateur qui écrit dans Outlook…).

Essayez toujours d'abord avec un ou deux destinataires de test. Respectez les règles de votre messagerie et de votre établissement, ainsi que le RGPD (prospection de particuliers : accord préalable).

## Tests

```sh
npm install
npx playwright install chromium
npx playwright test
```

- `tests/publipostage.spec.ts` : envoi (28 tests) ;
- `tests/mega.spec.ts` : panneau, annuaire commun, verrous (7 tests) ;
- `tests/correctifs/` : sécurité du champ visé et des brouillons (77 tests), langues et versions d'Outlook (294 tests).
