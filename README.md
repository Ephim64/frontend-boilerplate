# Front-end boilerplate
## Содержание
[Инструментарий](#tooling)  
[Структура проекта](#structure)  
[Комманды](#commands)  
## <a name="tooling"></a>Инструментарий
В данном шаблоне используется следующий набор инструментов:
1. [npm](https://www.npmjs.com/) - менеджер пакетов Node, используется для установки пакетов и создания скриптов
2. [spritesmith](https://github.com/Ensighten/spritesmith) - для генерации css-спрайтов
3. [htmllint](https://github.com/htmllint/htmllint) - для анализа html-файлов
4. [stylelint](https://stylelint.io/) - для анализа css-файлов
5. [sass-lint](https://www.npmjs.com/package/sass-lint) - для анализа scss-файлов
6. [eslint](https://eslint.org/) - для анализа javascript-файлов
## <a name="structure"></a>Структура проекта
```
frontend-boilerplate
├── node_modules/
├── scripts/
│   └── htmllint.js
├── src/
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
```node_modules/``` - содержит все установленные модули, объявленные в package.json.  
```scripts/``` - содержит в себе файлы, которые могут запускаться в качестве скриптов.  
```src/``` - содержит исходный код приложения.
### Файлы
```.editorconfig``` - конфигурационный файл для [EditorConfig](http://editorconfig.org/), плагина Visual Studio Code.  
```.eslintrc.json``` - конфигурационный файл для [еslint](https://eslint.org/). Более подробно о конфигурационном файле в [разделе на официальном сайте](https://eslint.org/docs/user-guide/configuring#using-configuration-files).  
```.gitignore``` - содержит шаблоны для игнорирования определенных файлов.  
```.htmllintrc``` - конфигурационный файл для [htmllint](https://github.com/htmllint/htmllint).  
```.sasslintrc``` - конфигурационный файл для [sass-lint](https://www.npmjs.com/package/sass-lint).  
```.spritesmith.js``` - содержит конфигурационный объект для [spritesmith](https://github.com/Ensighten/spritesmith).  
```.stylelintrc``` - конфигурационный файл для [stylelint](https://stylelint.io/).  
```package.json``` - файл-описание приложения.  
```README.md``` - текущий файл, содержит информацию о других файла.  
## <a name="commands"></a>Комманды
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
<!-- [5]: https://www.npmjs.com/ npm -->
<!-- [6]: https://eslint.org/ eslint -->
<!-- [7]: https://stylelint.io/ stylelint -->
<!-- [8]: https://www.npmjs.com/package/sass-lint sass-lint -->
<!-- [9]: https://github.com/htmllint/htmllint htmllint -->
<!-- [10]: https://babeljs.io/ Babel -->
<!-- [11]: http://editorconfig.org/ editorconfig -->
<!-- [12]: https://eslint.org/docs/user-guide/configuring#using-configuration-files eslint configuration file -->
