# Agence Digitale Premium - Site Vitrine

Site vitrine professionnel pour une agence digitale spécialisée dans la création de sites web, contenus visuels et solutions IA.

## 🚀 Technologies

### Frontend
- **React 18** avec **TypeScript**
- **Vite** pour le build ultra-rapide
- **Tailwind CSS** pour le design
- **Framer Motion** pour les animations
- **React Icons** pour les icônes
- **Axios** pour les requêtes HTTP

### Backend
- **Node.js** avec **Express**
- **TypeScript** pour la sécurité de type
- **Nodemailer** pour l'envoi d'emails
- **Helmet** pour la sécurité
- **Rate limiting** pour la protection

### Infrastructure
- **Docker** & **Docker Compose**
- Architecture **microservices**
- Hot reload en développement

## 📦 Installation

### Prérequis
- Docker et Docker Compose installés
- Node.js 20+ (si vous voulez développer hors Docker)

### Démarrage rapide avec Docker

1. **Cloner le projet**
```bash
cd /Users/macbookproddvh2d2xffvgp/Desktop/business
```

2. **Configurer les variables d'environnement**
```bash
cp .env.example .env
```

Éditez le fichier `.env` et configurez vos paramètres SMTP :
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application
CONTACT_EMAIL=contact@votre-agence.fr
```

3. **Lancer l'application**
```bash
docker-compose up --build
```

L'application sera accessible à :
- **Frontend** : http://localhost:3000
- **Backend** : http://localhost:5000

### Développement local (sans Docker)

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
npm install
npm run dev
```

## 🎨 Fonctionnalités

### ✨ Design Premium
- Interface moderne et élégante
- Animations fluides avec Framer Motion
- Design responsive (mobile-first)
- Gradients et effets visuels avancés

### 📱 Sections
1. **Hero** - Section d'accueil impactante avec CTA
2. **Services** - Présentation des 6 services principaux
3. **Expertise** - Stack technique et compétences
4. **À propos** - Présentation de l'équipe et des valeurs
5. **Contact** - Formulaire de contact fonctionnel

### 🔒 Sécurité
- Validation des données côté serveur
- Protection CORS
- Rate limiting
- Headers de sécurité (Helmet)
- Validation des emails

### 📧 Formulaire de Contact
- Validation en temps réel
- Envoi d'emails via SMTP
- Messages de succès/erreur
- Design professionnel

## 🛠️ Scripts disponibles

### Frontend
- `npm run dev` - Démarrage en mode développement
- `npm run build` - Build de production
- `npm run preview` - Preview du build

### Backend
- `npm run dev` - Démarrage en mode développement avec hot reload
- `npm run build` - Compilation TypeScript
- `npm start` - Démarrage en production

## 📂 Structure du projet

```
business/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Services.tsx
│   │   │   │   ├── Expertise.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   └── Contact.tsx
│   │   │   └── ui/
│   │   │       ├── Button.tsx
│   │   │       └── Card.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   └── contact.ts
│   │   ├── services/
│   │   │   └── emailService.ts
│   │   └── server.ts
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
└── .env.example
```

## 🎯 Personnalisation

### Modifier les couleurs
Éditez `frontend/tailwind.config.js` pour changer les couleurs principales :

```js
colors: {
  primary: { /* Vos couleurs */ },
  secondary: { /* Vos couleurs */ },
}
```

### Modifier le contenu
- **Nom de l'agence** : Cherchez "Digital Studio" dans les fichiers
- **Coordonnées** : Éditez `Footer.tsx` et `Contact.tsx`
- **Services** : Modifiez le tableau dans `Services.tsx`
- **Équipe** : Éditez le tableau dans `About.tsx`

### Ajouter un logo
Placez votre logo dans `frontend/public/` et modifiez `Navbar.tsx` :

```tsx
<img src="/logo.png" alt="Logo" className="h-10" />
```

## 🚀 Déploiement

### Build de production
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Variables d'environnement en production
Assurez-vous de configurer :
- Les credentials SMTP
- L'URL du backend dans le frontend
- Les CORS autorisés

## 📧 Configuration SMTP

Pour Gmail, vous devez :
1. Activer l'authentification à 2 facteurs
2. Générer un mot de passe d'application
3. Utiliser ce mot de passe dans `SMTP_PASS`

## 🆘 Support

Pour toute question ou problème :
1. Vérifiez que Docker est bien lancé
2. Vérifiez les logs : `docker-compose logs`
3. Vérifiez les variables d'environnement

## 📝 License

Ce projet est privé et propriétaire.

---

**Développé avec ❤️ par Digital Studio**
