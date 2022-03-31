<template>
    <div>
        <h3>Times Rebaixados</h3>
        <ul>
            <li v-for="team in relegatedTeams" v-bind:key="team">
                <data-team :team="team"></data-team>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['teams'],
    computed: {
        relegatedTeams() {
            return this.teams.slice(16,20);
        }
    }
}
</script>