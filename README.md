# Gamer Vault

A safe place to store details of the collection of games that that I have played in my lifetime.

## 🍳 Made with

<span>
  <img width=64 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" /> &nbsp;
  <img width=64 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /> &nbsp;
  <img width=64 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" /> &nbsp;
  <img width=64 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /> &nbsp;
  <img width=64 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /> &nbsp;
  <img width=64 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
</span>

## ⚡ Features

- [ ] Playnite integration for gameplay analytics
- [x] Vimium / Tridactyl / Keyboard friendly navigation (ft. tabindex="0")
- [x] Smartphone / Tablet friendly navigation.
- [x] Generate raster gaussian blur for background instead of CSS blur filter (resource intensive)
- [x] Ability to set custom user scroll position on Game Details throughout sidebar navigation.
- [x] URLs without id attrib to avoid history spamming (not really needed as data is handed over to next page)
- [x] Optimization: Data is handed over to routes to avoid data reloading
- [x] Add/remove IGDB entries from all games at once
- [x] IGDB API integration for game data
- [x] Loads data one time and passes to other pages
- [x] Optimization: Lazy loading images (on Cards and Workspace Icons only)

Extras

- [ ] Character movement on hero with Spine Animation
- [ ] Emulation of hero image depth using GSAP

## 🚀 Quickstart

Step 1: Clone the project, cd into it and install dependencies

Using **HTTPS**:

```bash
git clone https://github.com/MidHunterX/Gamer-Vault.git
cd Game-Completion-Tracker
npm install
```

Using **SSH** (Personal):

```bash

git clone git@github.com:MidHunterX/Gamer-Vault.git
cd Game-Completion-Tracker
npm install
```

Step 2: Start Server (Make sure to have ng tool installed)

```bash
ng serve
```

Step 3: Navigate to development url

```
http://localhost:4200/
```

Step 4: Profit?

## 💽 Technologies Used

| Technology           | Description                  |
| -------------------- | ---------------------------- |
| Angular 18           | Web Application Framework    |
| HTML5                | Frontend Markup Language     |
| SASS                 | Better styling DX            |
| TailwindCSS          | CSS Framework                |
| DaisyUI              | Tailwind Component Library   |
| angular-fontawesome  | Font Awesome for Angular     |
| free-solid-svg-icons | Solid Icons for Font Awesome |
| angular-cli-ghpages  | Angular CI/CD Deploy Script  |

## Personal Note

BG Blur = 19:6 + h-180 + Gaussian Blur 15px

# Angular 18 Notes

Having favicon and a Public Directory:

```json
/* angular.json */
{
  "projects": {
    "Project-Name": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              "src/favicon.ico",
              {
                "glob": "**/*",
                "input": "public",
                "output": "public" /* add this */
              }
            ]
          }
        }
      }
    }
  }
}
```

Having normal scroll position behaviour (InMemoryScrolling):

```ts
// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from "@angular/router";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      }),
    ),
  ],
};
```

Handling same url route navigation (OnSameUrlNavigation):

```ts
// app.config.ts
import { withRouterConfig } from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withRouterConfig({ onSameUrlNavigation: "reload" }))],
};
```

Fetching JSON:

```json
/* tsconfig.json */
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

Using for loop:

```ts
// component.ts
import { CommonModule } from "@angular/common";
```

```html
<!-- component.html -->
<tag *ngFor="let item of items">
  <text>{{ item.name }}</text>
</tag>
```

Deploying:

```
ng deploy --repo=git@github.com:MidHunterX/Gamer-Vault.git
```
