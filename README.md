# Example app

This example app is a simple `React` / `TypeScript` frontend. The only code is a simple component that renders EQTY's: `eqty-agent-policy-plane`.

See this app's code: [App.tsx](./src/App.tsx)

## Before Running

You need to clone (in a separate folder) + link the `eqty-agent-policy-plane` package repo.

GitHub: [eqty-agent-policy-plane](https://github.com/eqtylab/eqty-policy-plane)

#### Clone, install, and link the `eqty-agent-policy-plane` package

```bash
git clone https://github.com/eqty-io/eqty-agent-policy-plane.git
cd eqty-agent-policy-plane
npm install
npm run build
npm link
```

Now you will be able to use the component in other local apps.

## Running this app

(cd into this app's folder)

#### Link the `eqty-agent-policy-plane` package

```bash
npm link eqty-agent-policy-plane
```

#### Install and run as normal

```bash
npm install
npm run dev
```
