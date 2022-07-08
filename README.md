<div align="center">

  <img src="public/logo512.png" alt="logo" width="200" height="auto" />
  <h1>eShop Frontend App</h1>
   
<h4>
    <a href="https://esklep.sajko255.usermd.net/">View Demo</a>
</div>

<br />

<!-- About the Project -->
## 💦 About the Project


<!-- Screenshots -->
### 📷 Screenshots

<div align="center"> 
  <img src="https://i.ibb.co/GTy7vXk/front-page.png" alt="front-page">
</div>

<br />

<!-- TechStack -->
### 🔧 Tech Stack

  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://chakra-ui.com/">ChakraUI</a></li>
  </ul>


<br />

<!-- Features -->
### 📋 Features

- Sunchronization with BE available here: https://github.com/dLeczycki/eshop-backend.git
- Product List
- Checkout
- Order Placement


<br />

<!-- Config & Env Vriables -->
### 🔑 Config & Env Variables

All config and env variables can be found under /src/config/config.ts file.

<br />

<!-- Getting Started -->
## 	🔥 Getting Started

<br />

<!-- Prerequisites -->
### 🚩 Prerequisites

At first you need to clone the project to your local environment
```bash
  git clone https://github.com/dLeczycki/eshop-frontend.git
```

<br />

<!-- Installation -->
### 🌟 Installation

Install node_modules with npm

```bash
  cd eshop-frontend
  npm i
```

<br />

<!-- Run Locally -->
### ⚡ Run Locally

Clone the project

```bash
  git clone https://github.com/dLeczycki/eshop-frontend.git
```

Go to the project directory

```bash
  cd eshop-frontend
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm start
```

<br />


<!-- Deployment -->
### 🌀 Deployment

At first change src/config/config.ts file to production configuration

To create production build run

```bash
  npm run build
```

Copy files to your hosting provider (e.g. with FTP protocol)

Add support for React routing (below example of .htaccess file for Apache server)
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /subdirectory
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>
```