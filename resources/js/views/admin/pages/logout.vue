<template>

</template>

<script>
    export default {
        name: "logout",
        created() {
            this.$auth.logout({
                success: function () {
                }
            })
        }
    }
</script>

<style scoped>

</style>
