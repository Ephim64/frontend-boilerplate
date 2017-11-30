# Название репозитория
## Содержание
[Инструментарий](#tooling)  
[Структура проекта](#structure)  
[Комманды](#commands)  

## [](#tooling)Инструментарий
В данном шаблоне используется следующий набор инструментов:
1. [npm](https://www.npmjs.com/) - менеджер пакетов Node, используется для установки пакетов и создания скриптов
2. [webpack](https://webpack.js.org/) - для компиляции scss, транспиляции ES6 синтаксиса в ES2015 и запуска локального сервера разработки (с расширением webpack-dev-server)
3. [spritesmith](https://github.com/Ensighten/spritesmith) - для генерации css-спрайтов
4. [htmllint](https://github.com/htmllint/htmllint) - для анализа html-файлов
5. [stylelint](https://stylelint.io/) - для анализа css-файлов
6. [sass-lint](https://www.npmjs.com/package/sass-lint) - для анализа scss-файлов
7. [eslint](https://eslint.org/) - для анализа javascript-файлов
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
```.babelrc``` - конфигурационные файл для [Babel](https://babeljs.io/). Более подробно в [разделе на официальном сайте](https://babeljs.io/docs/usage/babelrc/).  
```.editorconfig``` - конфигурационный файл для [EditorConfig](http://editorconfig.org/), плагина Visual Studio Code.  
```.eslintrc.json``` - конфигурационный файл для [еslint](https://eslint.org/). Более подробно о конфигурационном файле в [разделе на официальном сайте](https://eslint.org/docs/user-guide/configuring#using-configuration-files).  
```.gitignore``` - содержит шаблоны для игнорирования определенных файлов.  
```.htmllintrc``` - конфигурационный файл для [htmllint](https://github.com/htmllint/htmllint).  
```.sasslintrc``` - конфигурационный файл для [sass-lint](https://www.npmjs.com/package/sass-lint).  
```.spritesmith.js``` - содержит конфигурационный объект для [spritesmith](https://github.com/Ensighten/spritesmith).  
```.stylelintrc``` - конфигурационный файл для [stylelint](https://stylelint.io/).  
```package.json``` - файл-описание приложения.  
```README.md``` - текущий файл, содержит информацию о других файла.  
## [](#commands)Комманды
### Создание css-спрайтов
Для создания css-спрайтов необходимо выполнить команду ```npm run spritesmith```.  
Данная команда, используя пакет [spritesmith](https://github.com/Ensighten/spritesmith), создаст css-спрайт на основе настроек, указанных в конфигурационном файле.
Конфигурационный файл ```.spritesmith.js``` расположен в корневом каталоге проекта.  
С полным списком параметров можно ознакомиться в репозитории [grunt плагина](https://github.com/Ensighten/grunt-spritesmith), в разделе [документации](https://github.com/Ensighten/grunt-spritesmith#documentation).
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

<!-- [1]: https://github.com/Ensighten/spritesmith  Spritesmith -->
<!-- [2]: https://github.com/Ensighten/grunt-spritesmith Grunt repository -->
<!-- [3]: https://github.com/Ensighten/grunt-spritesmith#documentation Description of the config parameters -->
<!-- [4]: https://webpack.js.org/ Webpack -->
<!-- [5]: https://www.npmjs.com/ npm -->
<!-- [6]: https://eslint.org/ eslint -->
<!-- [7]: https://stylelint.io/ stylelint -->
<!-- [8]: https://www.npmjs.com/package/sass-lint sass-lint -->
<!-- [9]: https://github.com/htmllint/htmllint htmllint -->
<!-- [10]: https://babeljs.io/ Babel -->
<!-- [11]: http://editorconfig.org/ editorconfig -->
<!-- [12]: https://eslint.org/docs/user-guide/configuring#using-configuration-files eslint configuration file -->
