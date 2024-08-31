# Game Completion Tracker

## 🚀 Quickstart

Step 1: Clone the project, cd into it and install dependencies

Using **HTTPS**:

```bash
git clone https://github.com/MidHunterX/Game-Completion-Tracker.git
cd Game-Completion-Tracker
npm install
```

Using **SSH** (Personal):

```bash
git clone git@github.com:MidHunterX/Game-Completion-Tracker.git
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

- Angular 18: Web Application Framework
- HTML5: Frontend Markup Language
- SASS: Better styling DX

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

```js
// component.ts
import { CommonModule } from "@angular/common";
```

```html
<!-- component.html -->
<tag *ngFor="let item of items">
  <text>{{ item.name }}</text>
</tag>
```

| Angular Stuff      | Description                  |
| ------------------ | ---------------------------- |
| app.component.html | Similar to Django {{ base }} |
| Interface          | TS Type Declaration          |
