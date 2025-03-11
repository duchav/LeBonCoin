<script setup>
</script>

<template>
      <button><font-awesome-icon :icon="['far', 'plus-square']" /> Déposer une annonce</button>
</template>

<style scoped>

button {
    border: none;
    color: white;
    background-color: var(--orange);
    padding: 10px;
    border-radius: 10px;
    height: 36px;
    font-weight: bold;
}
button > svg {
    margin-right: 5px;
}
</style>