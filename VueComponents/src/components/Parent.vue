<template>
    <div>
        <Child message="Como te chamas?" @onChangeName="showName"/>
    </div>
</template>

<script>
import Child from '@/components/Child.vue';
export default {
    components: {
        Child,
    },
    methods: {
        showName(n) {
            console.log(n);
        }
    },
}
</script>

<style lang="scss" scoped>

</style>