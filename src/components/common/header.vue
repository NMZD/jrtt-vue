<template>
    <div>
        <header class="common-header">
            <div class="search-box">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" :placeholder="searchText">
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                placeholder: '请输入搜索内容'
            }
        },
        props: {
            searchText: {
                type: String,
                default: '请输入搜索内容'
            }
        }
    }
</script>