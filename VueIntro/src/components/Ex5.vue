<template>
    <div>
        <button @click="value--" :disabled="value==minValue">-</button>
        <h1>{{value}}</h1>
        <button @click="value++" :disabled="value==maxValue">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            minValue: 0,
            maxValue: 10,
            value: 5
        }
    },
}
</script>

<style lang="scss" scoped>

</style>