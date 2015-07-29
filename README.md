<h1 align="center">eslint-config-loansolutions</h1>

<p align="center">
  <a href="https://nodei.co/npm/eslint-config-loansolutions/">
    <img src="https://nodei.co/npm/eslint-config-loansolutions.png?compact=true">
  </a>
</p>

<h4 align="center">
  A composable set of ESLint configurations.
</h4>

***

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-loansolutions
```

## Usage

**This package is made for for ESLint 0.24.1+**

To consume and extend this config in ESLint just add the extends attribute to your `.eslintrc`. For
more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

```yaml
---
"extends":
  - "loansolutions"
```

### Piecemeal Configurations

ESLint configuration is broken apart in `./rules` containing ESLint's rules and rules for specific ESLint plugins. The full set of ESLint rules are broken into categories that mirror ESLint's documentation. Under each rule type there are sets of configuration for every rule in the category.

## And A Special Thanks To

* [Nicholas C. Zakas](https://github.com/nzakas) for all the amazing work on [ESLint](https://github.com/eslint/eslint)
* [AirBnB](https://github.com/airbnb/javascript) for sharing all of their config in [JavaScript Style Guide](https://github.com/airbnb/javascript)

***

## License

[MIT License](http://opensource.org/licenses/MIT)
