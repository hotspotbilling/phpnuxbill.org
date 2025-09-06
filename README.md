# PHPNuxBill Documentation and Landing Page

![License](https://img.shields.io/github/license/hotspotbilling/phpnuxbill?style=flat-square)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/hotspotbilling/phpnuxbill?style=flat-square)


## Setup
Clone the repository make sure you install the dependencies:

```bash
# clone the repo
npx nuxi@latest init -t github:hotspotbilling/phpnuxbill.org   

# yarn
yarn install

# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Edit the files in the `content/` directory to update the documentation and front page.
Two languages are available: **English** and **Indonesian**. You can add more languages by creating new folders in the `content/` directory.


`id/` is the folder for Indonesian language.


```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

or

```bash
node .output/server/index.mjs
```