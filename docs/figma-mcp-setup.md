# Configuration MCP Figma pour Claude Code

## Prérequis

- **Claude Code** installé (CLI ou extension VSCode)
- Un **compte Figma** avec accès au fichier de design
- Un **Personal Access Token** Figma

## Étape 1 — Générer un token Figma

1. Aller sur [figma.com](https://www.figma.com)
2. Ouvrir **Settings** (icône profil en haut à droite)
3. Section **Personal access tokens**
4. Créer un nouveau token avec les permissions nécessaires (lecture des fichiers)
5. Copier le token généré (format : `figd_...`)

## Étape 2 — Configurer le serveur MCP

Le fichier de configuration MCP de Claude Code se trouve à :

```
~/.claude/mcp_settings.json
```

Y ajouter (ou créer) la configuration suivante :

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "transport": "http",
      "headers": {
        "Authorization": "Bearer <VOTRE_TOKEN_FIGMA>"
      }
    }
  }
}
```

> **Sécurité** : Ne jamais commiter ce fichier ni partager votre token. Le fichier `~/.claude/` est en dehors du repo git, donc il n'est pas exposé par défaut.

## Étape 3 — Redémarrer Claude Code

Après modification du fichier `mcp_settings.json`, il faut **redémarrer Claude Code** (fermer et rouvrir la session) pour que le serveur MCP Figma soit détecté et chargé.

## Vérification

Une fois redémarré, Claude Code devrait avoir accès aux outils Figma MCP permettant de :
- Lire les fichiers Figma
- Extraire les specs de design (couleurs, typographies, espacements, etc.)
- Naviguer dans les frames et composants

## Fichier Figma du projet

- **URL** : https://www.figma.com/design/mxKMr8cL6ufY2pQ4fSKXqC/Panto---Furniture-Landing-Page-Design--Community-
- **Entry node** : `1:2`

## Résumé des fichiers concernés

| Fichier | Rôle |
|---------|------|
| `~/.claude/mcp_settings.json` | Configuration du serveur MCP Figma (URL + auth) |
| `docs/figma-specs.md` | Template des specs extraites du Figma |
| `docs/figma-mcp-setup.md` | Ce fichier (guide de setup) |
