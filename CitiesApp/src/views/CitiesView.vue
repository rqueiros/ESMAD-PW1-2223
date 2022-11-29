<template>
    <div>
        <table>
            <tr>
                <th>Nome</th><th>Foto</th>
            </tr>
            <tr v-for="city in cities">
                <td>{{city.name}}</td>
                <td>
                    <RouterLink :to="{name:'city', params:{id:city.id}}">LINK</RouterLink>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
    export default {
        data() {
            return {
                cities: JSON.parse(localStorage.getItem('cities'))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>