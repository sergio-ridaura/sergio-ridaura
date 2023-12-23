# Astro.js Blog v1.5.0

_Copyright (c) 2024 Sergio Ridaura._  
_<https://sergio-ridaura.vercel.app> - <sergio.ridaura@outlook.com>_

## Description

My theme for developing a blog with Astro.js, TypeScript, TailwindCSS, React.js and Node.js.

<div style="display:flex; flex-wrap:wrap; flex-direction: row;">
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Astro&color=BC52EE&logo=Astro&logoColor=FFFFFF&label=" alt="Astro" style="margin:0px; margin-bottom:15px; margin-right:10px;">
  <img src="https://img.shields.io/badge/TypeScript-0078D4?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" style="margin:0px; margin-bottom:15px; margin-right:10px;">
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" style="margin:0px; margin-bottom:15px; margin-right:10px;">
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React&color=333333&logo=React&logoColor=white&label=" alt="React" style="margin:0px; margin-bottom:15px; margin-right:10px;">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" style="margin:0px; margin-bottom:15px; margin-right:10px;">
</div>

<p></p>

Including features:

- **Astro.js:** Version 4.0.7 of the Astro.js framework.
- **React.js:** Version 18.2.0 of React.js within the Astro.js environment.
- **Node.js:** Configure Astro.js to utilize Server-Side Rendering (SSR) with Node.js.
- **TailwindCSS:** Version 3.4.0 of TailwindCSS within the Astro.js environment. Color management, fonts and dark theme.
- **TypeScript:** Integrated into the Astro.js workflow.
- **Todo:** List of tasks `todo`, `doing` and `done` in the project.
- **GitHub:** Predefined `issues` templates for the repository on GitHub.
- **Visual Studio Code:** Recommended extensions and configurations for Astro.js development.
- **Docker Compose:** Containers for the website are built using Astro.js.
- **Bash scripts:** Relevant Bash scripts used in the development of the project with Astro.js and Ubuntu.
- **Vercel:** Support in the implementation of projects in Vercel and the use of its tools. Analytics and Speed Insights.
- **Environment and global variables:** Managed within Astro.js.
- **Layout:** Example layout for your projects.
- **Components:** In Astro.js: metadata, date, font, class, id, footer, navbar, etc.
- **View Transitions:** Application of page transitions in Astro.js.
- **Markdown:** Content created using Markdown and MDX files in Astro.js.
- **Blog:** Section dedicated to blogs within Astro.js.
- **Sitemap:** Implemented within Astro.js.
- **RSS:** Really Simple Syndication functionality in Astro.js.
- **Web Manifest:** Add Web Manifest functionalities in Astro.js.
- **PWA:** Progressive Web Application in Astro.js. Service Worker to utilize caching on the Astro.js website.
- **Vitest:** Testing for the creation of unit tests in Astro.js. Unit tests for project elements. Vitest test result reports in JSON and HTML formats.
- **Google Lighthouse:** Performance, Accessibility, Best Practices and SEO 100%.

## Installation

Start the containers with Docker Compose.

```console
docker-compose up -d
```

Access the Node.js container with Astro.js.

```console
docker exec -it node_astro-blog bash
```

Add project dependencies.

```console
npm install
```

Run the test.

```console
npm run test
```

Start the development server and visit the page [http://localhost:4321](http://localhost:4321) to see the result.

```console
npm run dev
```

## Configurations

Steps to adapt the project to your needs:

- Update the development information in the `package.json` file.
- Customize and expand the global variables of the product in the `src/globals.ts` file.
- Use the `.env.default` file as a template to create your own `.env` file. This file is useful for storing private environment variables that cannot be managed through server environment variables.

## Bugs

- The Vercel module is not compatible with higher versions of Node.js v18.19.0.

## Author

**Sergio Ridaura**

Full stack developer in **TypeScript** with **Astro.js**, **React.js**, **Node.js** and **MongoDB**.  
Quick development of high-performance applications and websites.

<div style="display:flex; flex-wrap:wrap; flex-direction: row;">
  <a href="https://sergio-ridaura.vercel.app/">
    <img src="https://sergio-ridaura.vercel.app/images/blog.svg" alt="Blog" style="margin:0px; margin-bottom:15px; margin-right:10px;">
  </a>
  <a href="mailto:sergio.ridaura@outlook.com">
    <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="Email" style="margin:0px; margin-bottom:15px; margin-right:10px;">
  </a>
  <a href="https://github.com/sergio-ridaura">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=" alt="GitHub" style="margin:0px; margin-bottom:15px; margin-right:10px;">
  </a>
  <a href="https://www.linkedin.com/in/sergio-ridaura/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" style="margin:0px; margin-bottom:15px; margin-right:10px;">
  </a>
</div>

## MIT License

_Copyright (c) 2024 Sergio Ridaura._  
_<https://sergio-ridaura.vercel.app> - <sergio.ridaura@outlook.com>_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
