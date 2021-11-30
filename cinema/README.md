# Учебный проект Бабаевой Л.Б.
[Ссылка](https://www.figma.com/file/IAuzewD0Wz9Pn3SN0ePixE/Лендинг-stc-кинотеатр?node-id=2%3A3) на макет


## установка зависимости

Запустите в терминале команду для установки зависимости проекта

```shell
npm install  @babel/core @babel/cli
@babel/preset-env --save @babel/polyfill
```

## запуск Babael



```shell
npx babel js -d target 
```

## Запуск babel  с автоматической пересборкой

для работы над проектом необходимо запустить транспиляцию javascript

```shell

npx babel js -d target --watch --source-maps
```



npm install --save @babel/polyfill