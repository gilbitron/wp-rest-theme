<style>
    .header {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        margin-bottom: 50px;
    }
    .header .container { display: flex; }
    .header .site-title { width: 50%; }
    .header .nav {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 50%;
        text-align: right;
    }
    .header .nav li {
        display: inline;
        margin-left: 15px;
    }
    .header .v-link-active { color: #333; }
</style>

<template>
    <header class="header">
        <div class="container">
            <div class="site-title">
                <a v-link="{ path: base_path }">{{ site_name }}</a>
            </div>
            <ul class="nav">
                <li v-for="page in pages">
                    <a v-link="{ path: base_path + page.slug }">{{ page.title.rendered }}</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        ready() {
            this.getPages();
        },

        data() {
            return {
                base_path: wp.base_path,
                site_name: wp.site_name,
                pages: []
            }
        },

        methods: {
            getPages() {
                this.$http.get(wp.root + 'wp/v2/pages').then(function(response) {
                    this.pages = response.data;
                }, function(response) {
                    console.log(response);
                });
            }
        }
    }
</script>