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



### Projeto SERVER

### Projeto MOBILE
