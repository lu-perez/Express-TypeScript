# Express + TypeScript

1. Initialize
```console
mkdir express-typescript
cd express-typscript
npm init -y

```

2. Install TypeScript & dependencies in the project
```console
npm i typescript -D
npm i --save @types/express -D
npm i express
npm i ts-node-dev -D

```

3. Config __package.json__
```json
"scripts": {
  ...
  "dev": "ts-node-dev src/index.ts",
  "start": "node build/index.js",
  "tsc": "tsc"
},

```

4. Initialize TypeScript
```console
npm run tsc -- --init
```

5. Set __tsconfig.json__:
```json
{
  ...
  "outDir": "./build",
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true,
  "noFallthroughCasesInSwitch": true
}
```
6. Compile TypeScript
```console
npm run tsc
```

7. Run build
```console
node build/index.js
```
or
```console
npm start
```

8. Run dev mode
```console
npm run dev
```
