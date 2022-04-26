<script setup>
import LetterWrapper from './components/LetterWrapper.vue'
import Keyboard from './components/Keyboard/Keyboard.vue'
</script>

<template>
  <div class="content">
    <div class="letters-container">
      <LetterWrapper />
      <LetterWrapper />
      <LetterWrapper />
      <LetterWrapper />
      <LetterWrapper />
    </div>
    <div class="keyboard-container">
      <Keyboard />
    </div>
  </div>
</template>

<style>
@import './assets/base.css';

.content {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.letters-container {
  display: flex; 
  flex-direction: row;
  margin: auto;
}

.keyboard-container {
  height: 20vh;
  width: 100vh;
  margin-bottom: 10vh;
}

</style>
