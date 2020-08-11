# Proffy2.0

### Configuração de ambiente

#### Node.js e NPM

```
curl --version
```
```
sudo apt install curl
```
```
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```
```
node -v
npm -v
```

#### YARN

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
```
sudo apt update && sudo apt install --no-install-recommends yarn
```
```
export PATH="$PATH:`yarn global bin`"
```
```
yarn --version
```

#### Expo

Para projeto mobile.

- By YARN
```
yarn global add expo-cli
```

- By NPM
```
npm install expo-cli --global
```
```
expo --version
```


### Projeto WEB

Criando o App

```
npx create-react-app web --template typescript
```

Dependêcnias do projeto WEB

- react-router-dom
```
yarn add @types/react-router-dom -D
```

Observação: pacotes @types podem ser instaladas somente como dependência de desenvolvimento "-D".

### Projeto SERVER


Criando do zero (observação: não  necessário executar os comandos abaixo caso o projeto já exista)
Crie a pasta do servidor.
```
mkdir server
```
```
yarn init -Y
```
```
yarn tsc --init
```

No arquivo tsconfig.json mude o valor da propriedade "target" para "target": "es2017".

Dependêcnias do projeto SERVER

- ts-node-dev: executa o servidor e observa alterações.

```
yarn add ts-node-dev -D
```
- express
```
yarn add @types/express -D
```
- knex: QueryBuilder para conexção de bancos
```
yarn add knex sqlite3
```



### Projeto MOBILE

Criando o projeto mobile.

```
expo init mobile
```
Escolha o template: Black (TypeScript).

Intalação das fontes do google: https://github.com/expo/google-fonts

Crie a pasta @types e o arquivo index.d.ts com o conteúdo:
```
declare module '*.png';
```
Isso irá permitir o uso de arquivos PNG.

