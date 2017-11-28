# Название репозитория
## Содержание
[Инструментарий](#tooling)  
[Структура проекта](#structure)  
[Комманды](#commands)  

## [](#tooling)Инструментарий
В данном шаблоне используется следующий набор инструментов:
1. [npm][5] - менеджер пакетов Node, используется для установки пакетов и создания скриптов
2. [webpack][4] - для компиляции scss, транспиляции ES6 синтаксиса в ES2015 и запуска локального сервера разработки (с расширением webpack-dev-server)
3. [spritesmith][1] - для генерации css-спрайтов
4. [htmllint][9] - для анализа html-файлов
5. [stylelint][7] - для анализа css-файлов
6. [sass-lint][8] - для анализа scss-файлов
7. [eslint][6] - для анализа javascript-файлов
## [](#structure)Структура проекта
```
boilerplate-webpack
├── config/
│   ├── loaders/
│   ├── paths.js
│   ├── webpack.config.base.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── node_modules/
├── scripts/
│   └── htmllint.js
├── src/
├── .babelrc
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .htmllintrc
├── .sasslintrc
├── .spritesmith.js
├── .stylelintrc
├── package.json
└── README.md
```
### Папки
```config/``` - содержит все, что относится к конфигурации окружения: кофигурационные файлы webpack-а, функции, необходимые для построения путей относительно тех или иных частей проекта.
```node_modules/``` - содержит все установленные модули, объявленные в package.json.
```scripts/``` - содержит в себе файлы, которые могут запускаться в качестве скриптов.
```src/``` - содержит исходный код приложения.
### Файлы
```.babelrc``` - конфигурационные файл для [Babel][10].
```.editorconfig``` - конфигурационный файл для [EditorConfig][11], плагина Visual Studio Code.
```.eslintrc.json``` - конфигурационный файл для [Eslint][6]. Более подробно о конфигурационном файле в [разделе на оффициальном сайте][12].
```.gitignore``` - содержит шаблоны для игнорирования определенных файлов.
```.htmllintrc``` - конфигурационный файл для [htmllint][9].
```.sasslintrc``` - конфигурационный файл для [sass-lint][8].
```.spritesmith.js``` - содержит конфигурационный объект для [spritesmith][1].
```.stylelintrc``` - конфигурационный файл для [stylelint][7].
```package.json``` - файл-описание приложения.
```README.md``` - текущий файл, содержит информацию о других файла.
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
[5]: https://www.npmjs.com/ <!-- npm -->
[6]: https://eslint.org/ <!-- eslint -->
[7]: https://stylelint.io/ <!-- stylelint -->
[8]: https://www.npmjs.com/package/sass-lint <!-- sass-lint -->
[9]: https://github.com/htmllint/htmllint <!-- htmllint -->
[10]: https://babeljs.io/ <!-- Babel -->
[11]: http://editorconfig.org/ <!-- editorconfig -->
[12]: https://eslint.org/docs/user-guide/configuring#using-configuration-files <!-- eslint configuration file -->
