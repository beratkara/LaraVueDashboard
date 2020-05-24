<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        created() {
            console.log("index");
        }
    }
</script>

<style scoped>

</style>
