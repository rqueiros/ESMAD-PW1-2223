<template>
    <div>
        <p>{{ message }}</p>
        <p><input type="text" v-model="name"></p>
        <p><button @click="$emit('onChangeName', name)">SEND NAME TO PARENT</button></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    props: {
        message: {
            type: String
        },
    },
}
</script>

<style lang="scss" scoped>

</style>