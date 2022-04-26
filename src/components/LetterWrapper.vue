<script setup>
import LetterTile from './LetterTile.vue'
import { LetterList } from '../utils/letters'
import { LetterState } from '../state/LetterState';

import { computed, ref } from 'vue'

const allOptions = ['', ...LetterList];
const filteredLetters = computed(() => allOptions.filter((option) => {
    if (option === "") {
        return true;
    }
    return !LetterState[option].disabled;
}));
const currentIdx = ref(0);

const currentLetter = computed(() => {
    if (currentIdx.value >= filteredLetters.value.length) {
        currentIdx.value = 0;
    }
    return filteredLetters.value[currentIdx.value];
});

function onInput(input) {
    const match = input.match(/\w/);

    if (match?.length) {
        input = match[0].toUpperCase();
    } else {
        input = '';
    }

    if (LetterState[input]?.disabled) {
        input = '';
    }

    if (input === '') {
        currentIdx.value = 0;
    } else {
        currentIdx.value = filteredLetters.value.indexOf(input);
    }
}

function arrowDown() {
    currentIdx.value++;
    if (currentIdx.value >= filteredLetters.value.length) {
        currentIdx.value = 0;
    }
}

function arrowUp() {
    currentIdx.value--;
    if (currentIdx.value === -1) {
        currentIdx.value = filteredLetters.value.length - 1;
    }
}
</script>

<template>
    <div class="wrapper">
        <button class="chevron-button up" @click="arrowUp" >
            <fa-icon icon="chevron-up" />
        </button>
        <LetterTile :content="currentLetter" @onInput="onInput" />
        <button class="chevron-button down" @click="arrowDown" >
            <fa-icon icon="chevron-down" />
        </button>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.chevron-button {
    cursor: pointer;
    border: none;
    height: 60px;
    background: white;
}

.chevron-button:hover {
    background-color: lightgray;
    transition: background-color .5s;
}

.chevron-button.up { 
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
}
.chevron-button.down { 
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
}
</style>