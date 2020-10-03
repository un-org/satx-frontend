<template>
    <div class="wrapper">
        <div class="s-card">
            <h1>sono il satellite # {{ id }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "SatelliteCard",
    props: {
        id: String,
    },
};
</script>

<style scoped>
h1 {
    font-size: 20px;
}

.wrapper {
    display: flex;
    align-content: center;
    align-items: center;
}
.s-card {
    width: 100px;
    height: 100px;
    background: wheat;
}
</style>
