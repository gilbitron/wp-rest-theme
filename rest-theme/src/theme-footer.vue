<style>
    .footer {
        font-size: 14px;
        color: #999;
        margin-top: 50px;
    }
</style>

<template>
    <footer class="footer">
        <div class="container">
            Copyright &copy; <a v-link="{ path: base_path }">{{ site_name }}</a>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                base_path: wp.base_path,
                site_name: wp.site_name
            }
        }
    }
</script>