<script setup>
const { content } = defineProps(['content']);
const emit = defineEmits(['onInput']);

function handleInput(e) {
    emit('onInput', e.target.value);
}

</script>

<template>
<input class="box" :value="content" @input="handleInput">
</template>

<style scoped>
.box {
    display: flex;
    border: solid black 1px;
    height: 80px;
    width: 80px;
    font-size: 48px;
    justify-content: space-around;
    text-align: center;
}
</style>