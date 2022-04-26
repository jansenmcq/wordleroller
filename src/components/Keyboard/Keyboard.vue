<script setup>
import Key from './Key.vue'
import { KeyboardRows } from '../../utils/letters'

</script>

<template>
    <div class="row">
        <Key v-for="key in KeyboardRows[0]" :key="key" :letter="key" />
    </div>
    <div class="row">
        <Key v-for="key in KeyboardRows[1]" :key="key" :letter="key" />
    </div>
    <div class="row">
        <Key v-for="key in KeyboardRows[2]" :key="key" :letter="key" />
    </div>
</template>


<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30%;
}
</style>