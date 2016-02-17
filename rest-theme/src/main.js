import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(require('vue-resource'));
Vue.use(VueRouter);

Vue.config.debug = true

import Posts from './posts.vue'
import Post from './post.vue'
Vue.component('Post', Post)
import Page from './page.vue'
Vue.component('Page', Page)
import Header from './theme-header.vue'
Vue.component('theme-header', Header)
import Footer from './theme-footer.vue'
Vue.component('theme-footer', Footer)

var App = Vue.extend({
    template: '<theme-header></theme-header>' +
              '<div class="container"><router-view></router-view></div>' +
              '<theme-footer></theme-footer>',

    ready() {
        this.updateTitle('');
    },

    methods: {
        updateTitle(pageTitle) {
            document.title = (pageTitle ? pageTitle + ' - ' : '') + wp.site_name;
        }
    },

    events: {
        'page-title': function(pageTitle) {
            this.updateTitle(pageTitle);
        }
    }
});
var router = new VueRouter({
    hashbang: false,
    history: true
});

router.on(wp.base_path, {
    component: Posts
});

for (var key in wp.routes) {
    var route = wp.routes[key];
    router.on(wp.base_path + route.slug, {
        component: Vue.component(capitalize(route.type)),
        postId: route.id
    });
}

router.start(App, '#app');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}