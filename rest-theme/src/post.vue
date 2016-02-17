<style>

</style>

<template>
    <div class="post">
        <h1 class="entry-title" v-if="isSingle">{{ post.title.rendered }}</h1>
        <h2 class="entry-title" v-else><a v-link="{ path: base_path + post.slug }">{{ post.title.rendered }}</a></h2>

        <div class="entry-content">
            {{{ post.content.rendered }}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                default() {
                    return {
                        id: 0,
                        slug: '',
                        title: { rendered: '' },
                        content: { rendered: '' }
                    }
                }
            }
        },

        ready() {
            // If post hasn't been passed by prop
            if (!this.post.id) {
                this.getPost();
                this.isSingle = true;
            }
        },

        data() {
            return {
                base_path: wp.base_path,
                isSingle: false
            }
        },

        methods: {
            getPost() {
                this.$http.get(wp.root + 'wp/v2/posts/' + this.$route.postId).then(function(response) {
                    this.post = response.data;
                    this.$dispatch('page-title', this.post.title.rendered);
                }, function(response) {
                    console.log(response);
                });
            }
        }
    }
</script>