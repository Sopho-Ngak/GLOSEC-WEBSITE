# Guide de Réindexation Google

Ce guide explique comment demander à Google de réindexer votre site web après avoir effectué des modifications importantes (logo, ads.txt, contenu, etc.).

## Méthode 1: Google Search Console (Recommandé)

### Étape 1: Accéder à Google Search Console
1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Connectez-vous avec votre compte Google
3. Sélectionnez votre propriété: `www.ceei-glosec.com`

### Étape 2: Demander l'inspection d'URL
1. Cliquez sur l'outil **"Inspection d'URL"** dans le menu de gauche
2. Entrez l'URL complète de votre page d'accueil: `https://www.ceei-glosec.com/`
3. Appuyez sur Entrée

### Étape 3: Demander l'indexation
1. Attendez que l'inspection se termine
2. Cliquez sur le bouton **"Demander une indexation"**
3. Google va analyser la page (peut prendre 1-2 minutes)
4. Vous recevrez une confirmation

### Étape 4: Répéter pour les pages importantes
Répétez les étapes 2-3 pour:
- `https://www.ceei-glosec.com/services.html`
- `https://www.ceei-glosec.com/about.html`
- `https://www.ceei-glosec.com/portfolio-3-col.html`
- `https://www.ceei-glosec.com/ads.txt`

**Note:** Vous pouvez soumettre environ 10-12 URLs par jour.

---

## Méthode 2: Soumettre un Sitemap

### Étape 1: Vérifier votre sitemap
1. Assurez-vous que votre sitemap existe: `https://www.ceei-glosec.com/sitemap.xml`
2. Vérifiez qu'il contient toutes vos pages importantes

### Étape 2: Soumettre le sitemap dans Search Console
1. Dans Google Search Console, allez dans **"Sitemaps"**
2. Entrez: `sitemap.xml`
3. Cliquez sur **"Envoyer"**
4. Google va découvrir et explorer toutes les URLs du sitemap

**Avantage:** Cette méthode soumet toutes vos pages en une seule fois.

---

## Méthode 3: Test des Résultats Enrichis

### Pour vérifier votre logo et données structurées
1. Allez sur [Rich Results Test](https://search.google.com/test/rich-results)
2. Entrez votre URL: `https://www.ceei-glosec.com/`
3. Cliquez sur **"Tester l'URL"**
4. Vérifiez que:
   - Le logo apparaît (logo-ceei.png)
   - Les données Organization sont correctes
   - Aucune erreur n'est présente

---

## Méthode 4: Vérifier ads.txt

### Étape 1: Tester l'accessibilité
1. Ouvrez votre navigateur
2. Allez sur: `https://www.ceei-glosec.com/ads.txt`
3. Vérifiez que le fichier s'affiche avec le contenu:
   ```
   google.com, pub-7682503465515997, DIRECT, f08c47fec0942fa0
   ```

### Étape 2: Vérifier dans AdSense
1. Connectez-vous à [Google AdSense](https://www.google.com/adsense)
2. Allez dans **"Sites"**
3. Le message d'avertissement devrait disparaître dans 24-48 heures

---

## Délais d'Indexation

| Type de modification | Délai moyen |
|---------------------|-------------|
| Page individuelle | 1-7 jours |
| Logo dans recherche | 1-2 semaines |
| ads.txt vérifié | 24-48 heures |
| Sitemap complet | 1-4 semaines |

---

## Vérification de l'Indexation

### Méthode 1: Recherche Google directe
Dans Google, tapez:
```
site:ceei-glosec.com
```
Cette commande affiche toutes les pages indexées de votre site.

### Méthode 2: Recherche par titre
Recherchez le titre exact de votre page:
```
"CEEI (GLOSEC) - Cabinet d'Évaluation Environnementale"
```

### Méthode 3: Coverage Report
1. Dans Search Console, allez dans **"Couverture"**
2. Vérifiez le rapport des pages indexées
3. Résolvez les erreurs éventuelles

---

## Problèmes Courants

### Le logo n'apparaît pas
- **Solution:** Attendez 1-2 semaines après la soumission
- **Vérification:** Utilisez Rich Results Test
- **Critère:** Le logo doit être carré (333x333px minimum 112x112px)

### ads.txt non reconnu
- **Solution:** Vérifiez que le fichier est à la racine du site
- **Vérification:** Testez l'URL directement
- **Délai:** 24-48 heures après mise en ligne

### Pages non indexées
- **Solution:** Vérifiez robots.txt et méta robots
- **Vérification:** Utilisez l'outil Inspection d'URL
- **Action:** Demandez l'indexation manuellement

---

## Checklist Finale

- [ ] Soumettre la page d'accueil via Inspection d'URL
- [ ] Soumettre les pages clés (services, about, portfolio)
- [ ] Vérifier sitemap.xml est accessible
- [ ] Soumettre sitemap dans Search Console
- [ ] Tester logo avec Rich Results Test
- [ ] Vérifier ads.txt est accessible
- [ ] Attendre 24-48h pour ads.txt
- [ ] Attendre 1-2 semaines pour le logo
- [ ] Vérifier l'indexation avec site:ceei-glosec.com

---

## Ressources Utiles

- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Google AdSense](https://www.google.com/adsense)
- [Schema.org Organization](https://schema.org/Organization)

---

**Dernière mise à jour:** 15 janvier 2026
