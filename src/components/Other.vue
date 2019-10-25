<template>
    <div>
        <p> this is result: {{ tenResult }} </p>
        <p> this is nameResult: {{ nameResult }} </p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Other",
        computed:
            mapGetters(["tenResult","nameResult"])
    }
</script>

<style scoped>

</style>