<template>
  <div>
    <slot></slot>
  </div>
</template>
<style scoped>
    div {
        border: 2px rgb(31, 28, 252) solid;
        border-radius: 3px;
        width: 500px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 10px;
        margin: 5px;
    }
</style>