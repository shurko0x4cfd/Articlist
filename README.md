
На бэке минимальный Yii2
Нужна бд с настройками как в config.php. Затем нужно создать таблицу при помощи yii migrate.
```bash
cd 'Server side micro'
composer install
./yii migrate/up # <- Создаём таблицу
```
Бэк на localhost:4000 - пока что этот адрес и порт захардкожены на фронте.

На фронте SolidJS, как лёгкая альтернатива Реакту.
```bash
cd 'Client side'
npm i
npm run start
```
Фронт на localhost:3000. Этот адрес и порт захардкожены на бэке.
