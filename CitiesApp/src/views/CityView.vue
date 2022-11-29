<template>
    <div>
        <h1>{{ city.name }}</h1>
        <h3>{{ city.desc }}</h3>
        <img :src="city.photo" alt="" srcset="">
        <RouterLink :to="{ name: 'cities' }">BACK</RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    data() {
        return {
            cityid: this.$route.params.id,
            city: {}
        }
    },

    created() {
        this.city = JSON.parse(localStorage.getItem('cities')).find(city => city.id == this.cityid)
    }
}
</script>

<style lang="scss" scoped>

</style>