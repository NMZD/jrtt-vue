<template>
    <div>
        <Head :searchText="searchText"></Head>
    </div>
</template>

<script>
    import Head from './common/header.vue'
    export default {
        data(){
            return {
                searchText: '首页搜索内容'
            }
        },
        components: {
            Head
        }
    }
</script>
