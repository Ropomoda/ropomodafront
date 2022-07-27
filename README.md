This is [Ropomoda](https://www.ropomoda.com/) frontend project 

![build](https://github.com/RopoModa/ropomodafront/actions/workflows/node.js.yml/badge.svg)

## Ropomoda Front-end project

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Deploy on Arvan

```bash
docker build -t registry.ropomoda.com/ropomoda-front:[version] .
docker push registry.ropomoda.com/ropomoda-front:[version]

arvan paas apply -f deployment.yaml
```

