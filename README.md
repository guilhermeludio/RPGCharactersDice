


npm run build

npx cap copy 

npx cap open android // if first time

cd android

gradlew assembleDebug

cd ../ 

adb devices

adb install android/app/build/outputs/apk/debug/app-debug.apk





1. Configuração Inicial do Projeto (Ionic + React + Node.js)
Criação do projeto Ionic: Usou o comando ionic start para criar um projeto Ionic com React.
Configuração do backend: Criou um backend simples em Node.js para servir a API.

2. Adicionando Android (Capacitor)
  Instalação e Configuração do Capacitor
                  1. Adicionando Capacitor ao Projeto
                  Após a criação do seu projeto Ionic com React, você seguiu os seguintes passos para adicionar o Capacitor, que é a ferramenta para integrar o código web (React) com funcionalidades nativas de dispositivos móveis:
                  
                  Instalar Capacitor: Você usou o comando abaixo para instalar o Capacitor ao projeto:
                  
                  bash
                  Copiar
                  Editar
                  npm install @capacitor/core @capacitor/cli
                  Esse comando instala o Core e a CLI do Capacitor, que são responsáveis por fornecer as funcionalidades nativas e a interface de linha de comando para interagir com as plataformas.
                  
                  2. Inicializando o Capacitor
                  Depois de instalar o Capacitor, o próximo passo foi inicializar o Capacitor no seu projeto:
                  
                  Inicializando o Capacitor:
                  
                  Para isso, você rodou o comando:
                  
                  bash
                  Copiar
                  Editar
                  npx cap init
                  Esse comando cria o arquivo capacitor.config.ts e inicializa as configurações básicas do Capacitor, como o nome do aplicativo e o ID da aplicação (exemplo: com.exemplo.app). Ele também cria as pastas para as plataformas, como Android e iOS.
                  
                  3. Adicionando a Plataforma Android
                  Depois de inicializar o Capacitor, você adicionou a plataforma Android ao seu projeto com o seguinte comando:
                  
                  bash
                  Copiar
                  Editar
                  npx cap add android
                  Esse comando:
                  
                  Cria o diretório android/ dentro do seu projeto, onde todos os arquivos necessários para o Android serão armazenados.
                  Configura o projeto para ser compilado para Android, permitindo que você compile, instale e execute o aplicativo em um dispositivo Android.
                  4. Configurando o Diretório de Saída do Build
                  Como você mencionou que o seu build estava na pasta dist/ e não na pasta padrão build/, você ajustou a configuração do Capacitor para apontar para essa pasta.
                  
                  No arquivo capacitor.config.ts, você configurou o parâmetro webDir para o diretório correto:
                  
                  ts
                  Copiar
                  Editar
                  export default {
                    appId: 'com.exemplo.app',
                    appName: 'AppDados',
                    webDir: 'dist',  // Aqui você ajustou para apontar para a pasta 'dist' ao invés de 'build'
                    bundledWebRuntime: false
                  };
                  Essa configuração permite que o Capacitor saiba onde encontrar os arquivos web (HTML, CSS, JS) compilados do seu projeto React.
                  
                  5. Sincronização com a Plataforma Android
                  Com o Capacitor instalado e a plataforma Android adicionada, o próximo passo foi sincronizar os arquivos da sua aplicação com o projeto Android:
                  
                  bash
                  Copiar
                  Editar
                  npx cap sync
                  Esse comando:
                  
                  Copia os arquivos da pasta dist/ para o diretório adequado dentro do projeto Android.
                  Atualiza a configuração do Capacitor, garantindo que a plataforma Android esteja com os arquivos mais recentes da sua aplicação.
                  6. Abrindo o Projeto Android
                  Para interagir com o código Android, você usou o comando:
                  
                  bash
                  Copiar
                  Editar
                  npx cap open android
                  Esse comando:
                  
                  Abre o projeto Android no Android Studio, permitindo que você faça alterações nativas ou configure o projeto diretamente pela IDE.
                  
                  Se não quiser usar o Android Studio, você pode simplesmente rodar os comandos Gradle diretamente na pasta android/ para compilar o APK.
                  
                  7. Compilando o APK
                  Por fim, para compilar o APK e instalá-lo no seu celular, você utilizou o comando Gradle para gerar o APK de depuração:
                  
                  bash
                  Copiar
                  Editar
                  cd android
                  gradlew assembleDebug
                  Esse comando compila o projeto Android, criando um arquivo APK em android/app/build/outputs/apk/debug/.

Configuração do Build Directory: Após a instalação, você configurou a saída do build para a pasta dist/, em vez da pasta padrão build/, para garantir que os arquivos compilados do frontend ficassem disponíveis para o Capacitor.

Sincronização e Build:

Sincronização com o Android: Você rodou o comando npx cap sync, que sincroniza os arquivos do seu projeto Ionic com o diretório da plataforma Android. Isso inclui a cópia dos arquivos da pasta dist/ (build do frontend) para o projeto Android.
Gerar o APK: Para criar o APK para instalação no celular, você usou o comando gradlew assembleDebug na pasta android/. Esse comando usa o Gradle para compilar o código e gerar o arquivo APK no modo de depuração.
Verificação do APK: Verificou que o APK foi gerado na pasta android/app/build/outputs/apk/debug/ e estava pronto para ser instalado no seu dispositivo Android.

3. Adicionando Android (Capacitor)
Instalar Capacitor: Usou o comando npx cap add android para adicionar a plataforma Android ao projeto Ionic.
Sincronização: Usou npx cap sync para sincronizar os arquivos da aplicação com o Android.
Build do Frontend: Fez o build da aplicação com npm run build (o diretório de saída é dist/).

5. Rodando a Aplicação no Celular
Conectando o celular: Ativou a depuração USB no celular e conectou via ADB.
Compilação do APK: Executou gradlew assembleDebug para gerar o APK. ->  tive que baixar o java 
Instalação no dispositivo: Usou o comando adb install para instalar o APK no celular.

7. Deploy do Backend no Render
Preparação para o deploy: Preparou o projeto de backend e criou o arquivo package.json para definir dependências e scripts.
Instalação do Node.js: Instalou as dependências com npm install.
Correção de erro do express: Instalou o pacote express para resolver o erro de módulo não encontrado.
Subida do código no Render: Configurou o projeto no Render para rodar o backend com o comando npm start.

9. Problema no Deploy do Render
Erro de Elixir/Phoenix: Detectou erro devido ao Render tentar rodar um comando do Elixir em vez de Node.js.
Solução: Corrigiu a configuração para que o Render tratasse corretamente o projeto como Node.js.
