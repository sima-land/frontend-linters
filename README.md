# Frontend linters

Пакет с пресетами конфигураций линтеров.

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
  }
}
```

#### С помощью отдельных конфигурационных файлов

##### ESLint

Создать в корне проекта файл `eslint.config.mjs` со следующим содержимым:

```js
import simaland from '@sima-land/linters/eslint';

export default [
  // используем все правила из пакета, собранные вместе
  ...simaland,

  // ...опционально переопределяем правила
];
```

Правила разбиты по модулям:

- `./linters/eslint/base` - базовые правила JS
- `./linters/eslint/typescript` - базовые правила TS
- `./linters/eslint/react` - правила React/JSX
- `./linters/eslint/lodash` - правила работы с Lodash
- `./linters/eslint/jest` - правила работы с Jest
- `./linters/eslint/testing-library` - правила работы с Testing Library
- `./linters/eslint/jsdoc` - правила оформления JSDoc
- `./linters/eslint/jsdoc-ts` - правила оформления JSDoc в TS
- `./linters/eslint/jsdoc-jest` - правила оформления JSDoc в тестах Jest
- `./linters/eslint` - все правила вместе

##### Stylelint

Создать в корне проекта файл `stylelint.config.сjs` со следующим содержимым:

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

2. Создать в корне проекта файл `lint-staged.config.сjs` со следующим содержимым:

```js
module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix --ext .js,.jsx,.ts,.tsx'],
  '*.{css,scss}': ['prettier --write', 'stylelint'],
};
```

3. Добавить **pre-commit** хук согласно документации husky: `npx lint-staged`

https://typicode.github.io/husky/#/?id=create-a-hook

### Проблемы с ESLint (до ESLint версии 9)

ESLint может бросать ошибку, говоря что не может найти плагины, требуемые в конфигурации.

В этом случае поможет пакет `@rushstack/eslint-patch`:

- https://www.npmjs.com/package/@rushstack/eslint-patch
- https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch

### Конфигурация текстовых редакторов и IDE

Актуальная информация в официальных документациях:

- https://eslint.org/docs/user-guide/integrations
- https://stylelint.io/awesome-stylelint/#editor-integrations
- https://prettier.io/docs/en/editors.html
