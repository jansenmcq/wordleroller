<script setup>
    import { computed } from 'vue';
    import { LetterState } from '../../state/LetterState';

    const { letter } = defineProps(['letter']);

    const isDisabled = computed(() => LetterState[letter].disabled);

    const classes = computed(() => {
        if (isDisabled.value) {
            return 'disabled';
        }
        if (LetterState[letter].partiallyDisabled) {
            return 'partially-disabled';
        }
    })

    function toggleKey() {
        LetterState[letter].disabled = !isDisabled.value;
    }

</script>

<template>
    <div @click="toggleKey" class="key" :class="classes">
        {{ letter }}
    </div>
</template>

<style scoped>
    .key {
        border: solid black 1px;
        border-radius: 5%;
        width: 10%;
        margin: 2px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-transform: uppercase;
        cursor: pointer;
        background-color: lightgray;
    }

    .key.disabled {
        background-color: #333;
        color: white;
    }

    .key.partially-disabled {
        background-color: goldenrod;
        color: white;
    }
</style>