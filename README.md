npm run build

npx cap copy 

npx cap open android // if first time

cd android

gradlew assembleDebug

cd ../ 

adb devices

adb install android/app/build/outputs/apk/debug/app-debug.apk
