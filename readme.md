# Frontend linters

Пакет с конфигурационными файлами для валидации проектов.

## Использование

### Установка

```bash
# npm
$ npm i -D @sima-land/linters eslint stylelint prettier

# или yarn
yarn add -D @sima-land/linters eslint stylelint prettier
```

### Конфигурация

#### С помощью `package.json`

```json
{
  "prettier": "@sima-land/linters/prettier",
  "eslintConfig": {
    "extends": "./node_modules/@sima-land/linters/eslint/index.js"
  },
  "stylelint": {
    "extends": "@sima-land/linters/stylelint"
  },
}
```

#### С помощью отдельных конфигурационных файлов

##### ESLint

Создать в корне проекта файл `.eslintrc.js` со следующим содержимым:

```js
module.exports = {
  extends: require.resolve('@sima-land/linters/eslint'),
};
```

##### Stylelint

Создать в корне проекта файл `stylelint.config.js` со следующим содержимым:

```js
module.exports = {
  extends: require.resolve('@sima-land/linters/stylelint'),
};
```

##### Prettier

Создать в корне проекта файл `.prettierrc.js` со следующим содержимым:

```js
module.exports = require('@sima-land/linters/prettier');
```

### Настройка git-хуков

Удобно использовать `husky` в связке с `lint-staged`, для этого необходимо:

1. Установить пакеты

```bash
npm i -D husky lint-staged
```

2. Создать в корне проекта файл `lint-staged.config.js` со следующим содержимым:

```js
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
  ],
  '*.{css,scss}': [
    'prettier --write',
    'stylelint',
  ],
};
```

3. Добавить **pre-commit** хук согласно документации husky: `npx lint-staged`

https://typicode.github.io/husky/#/?id=create-a-hook

### Конфигурация текстовых редакторов

Актуальная информация в официальных документациях:

- https://eslint.org/docs/user-guide/integrations
- https://stylelint.io/user-guide/integrations/editor/
- https://prettier.io/docs/en/editors.html
