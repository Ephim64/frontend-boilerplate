# Название репозитория
## Содержание
[Инструментарий](#tooling)  
[Структура проекта](#structure)  
[Комманды](#commands)  

## [](#tooling)Инструментарий
## [](#structure)Структура проекта
## [](#commands)Комманды
### Создание css-спрайтов
Для создания css-спрайтов необходимо выполнить команду ```npm run spritesmith```.  
Данная команда, используя пакет [spritesmith][1], создаст css-спрайт на основе настроек, указанных в конфигурационном файле.
Конфигурационный файл ```.spritesmith.js``` расположен в корневом каталоге проекта.  
С полным списком параметров можно ознакомиться в репозитории [grunt плагина][2], в разделе [документации][3].
### Линтеры
Каждый из линтеров, используемых в данном проекте, может быть запущен самостоятельно или можно выполнить команду ```npm run lint```, которая произведет запуск всех используемых линтеров.
#### HTML
```npm run lint:html```
#### CSS
```npm run lint:css```
#### SCSS
```npm run lint:scss```
#### Javascript
```npm run lint:js```

[1]: https://github.com/Ensighten/spritesmith <!-- Spritesmith -->
[2]: https://github.com/Ensighten/grunt-spritesmith <!-- Grunt repository -->
[3]: https://github.com/Ensighten/grunt-spritesmith#documentation <!-- Description of the config parameters -->
[4]: https://webpack.js.org/ <!-- Webpack -->
