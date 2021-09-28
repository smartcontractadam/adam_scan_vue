<template>
    <div class="account_data_area">
        <div style="width: 90%;padding: 2% 5%">
            <PageList ref="pageListData"></PageList>
        </div>
    </div>
</template>

<script>
    import "@/css/main.css"
    import PageList from "@/views/list/pageList"
    export default {
        name: "accountMain",
        components: {
            PageList,
        },
        mounted() {
            this.changeList()
        },
        data(){
            return {
                headerStyle: {
                    'text-align':'center',
                    'font-size':'18px',
                    'color':'black',
                    'height':'60px',
                    'border':'0px'},
                cellStyle: {
                    'text-align':'center',
                    'color':'black',
                    'border':'0px'},
            }
        },
        methods: {
            changeList(){
                this.$refs.pageListData.updateList(false);
            },
        }
    }
</script>

<style scoped>

</style>
