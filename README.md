# inhabit-react

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/typescript-library-starter.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/rand0me/inhabit-react.svg)](https://travis-ci.org/rand0me/inhabit-react)
[![Coveralls](https://img.shields.io/coveralls/rand0me/inhabit-react.svg)](https://coveralls.io/github/rand0me/inhabit-react)

InHabit React Components to use in your project! :rocket:

## Installation
### NPM
```
npm i inhabit-react
```
### Yarn
```
yarn add inhabit-react
```

## Usage
```javascript
import React from "react";

// Import InHabit Component
import { InHabit } from "inhabit-react";

export class MyComponent {
    render() {
        return (
            <div>
                <!-- ...some content... -->
                <InHabit client="your-client-id" />
                <!-- ...some content... -->
            </div>
        )
    }
}
```

## FAQ

> Should I add `<script>` tag despite I'm using this component?

No, it will do it for you.

> Where should I add this component?

Typically you want this to be somewhere inside you Article component
(in case you have a Single-Page Application) to give it a chance to re-render
when article will be changed (new text appears on a page).