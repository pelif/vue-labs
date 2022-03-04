<template>
    <div>
            <h3>Classificados para Libertadores</h3>
            <ul>
                <li v-for="team in liberatorsTeams" v-bind:key="team">
                    <data-team :team="team" index="index"></data-team>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    props: ['teams'],
    computed: {
        liberatorsTeams() {
            return this.teams.slice(0,6); 
        }
    }
}
</script>