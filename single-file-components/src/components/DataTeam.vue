<template>
    <div style="display:flex; flex-direction:row;">
        <img class="logo" :src="team.logo" :style="{order: inverse == 'true' ? 2 : 1}">
        <span :style="{order: inverse == 'true' ? 1 : 2}">{{ team.name }}</span>
    </div>
</template>

<script>
export default {
    props : ['team','inverse']
}
</script>

<style scoped>
    .logo {
        width: 30px;
        height: 30px;
    }
</style>