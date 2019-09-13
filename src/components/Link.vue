<template>
    <a
            href="href"
            target="_blank"
            rel="noopener"
    >
        {{label}}
    </a>
</template>

<script>
    export default {
        name: "Link",
        props: {
            label: String,
            href: String,
        }
    }
</script>

<style scoped>

</style>
