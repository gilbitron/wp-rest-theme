# WP REST Theme

This is a simple skeleton theme powered by the WordPress REST API and Vue.js. The aim is to 
demonstrate how to create a [single page application](https://en.wikipedia.org/wiki/Single-page_application) using
[Vue.js](http://vuejs.org) to power the front end site while fetching data from the backend via the
[WordPress REST API](http://v2.wp-api.org), all without sacrificing SEO.

![](https://cloud.githubusercontent.com/assets/203882/12955214/ec10e59c-d019-11e5-9c15-403c1ba76ce9.gif)

### Requirements

* [WordPress REST API plugin (v2)](https://wordpress.org/plugins/rest-api)

### Usage

To use the theme on your WordPress site just install it like any other theme.

### Customization

All of the Vue.js specific code is in the `rest-theme/src` folder. To build the `dist/build.js` script while
developing run the following from the theme root:

```
npm run dev
```

To build the `dist/build.js` script before deploying run:

```
npm run build
```

### Credits

Some of the libraries used in the making of this theme:

* [Vue.js](http://vuejs.org)
* [vue-resource](https://github.com/vuejs/vue-resource)
* [vue-router](https://github.com/vuejs/vue-router)
* [vueify](https://github.com/vuejs/vueify)
* [Babel](https://babeljs.io)
* [Browserify](http://browserify.org)
* [normalize.css](https://necolas.github.io/normalize.css)

The WP REST Theme was created by [Gilbert Pellegrom](http://gilbert.pellegrom.me) from
[Dev7studios](http://dev7studios.com). Released under the MIT license.
