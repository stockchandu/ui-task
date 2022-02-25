<script setup>
import { ref } from "vue";
let showDialog = ref(false);

const handleSearchPopUp = () => {
  showDialog.value === false
    ? (showDialog.value = true)
    : (showDialog.value = false);
};
</script>

<template>
  <div
    class="
      d-flex
      justify-space-around
      align-center
      flex-column flex-sm-row
      fill-height
    "
  >
    <div class="emp__search-dialog">
      <div>
        <v-btn
          flat
          color="#00abe7"
          @click="handleSearchPopUp"
          v-if="!showDialog"
          class="align__center"
        >
          <p :style="{ color: 'white', fontSize: '10px' }">
            <v-icon icon="mdi-magnify" />Search...
          </p>
        </v-btn>
      </div>

      <div :class="[showDialog ? 'emp__dialog-visible' : 'dialog__invisible']">
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <select name="" id="">
            <option value="">DIVISION</option>
            <option value="">DI</option>
            <option value="">FI</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="">Select Status</option>
            <option value="">DI</option>
            <option value="">FI</option>
          </select>
        </div>
        <div @click="handleSearchPopUp">X</div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import "../sass/variables.scss";

.emp__search-dialog {
  width: $root-hundred-percent-width;
  margin: 0 0 20px 0;
}

.align__center {
  width: 10%;
  margin: 0 0 0 45%;
}

.emp__dialog-visible {
  display: $root-display-block;
  position: $root-position-relative;
  top: 10px;
  width: $root-hundred-percent-width;
  height: 10vh;
}

.dialog__invisible {
  display: $root-none;
  border: 1px solid red;
}

.emp__dialog-visible {
  background-color: rgb(197, 194, 194);
  width: $root-hundred-viewport-width;
  height: 10vh;
  display: $root-dislay-flex;
  align-items: $root-align-center;
  padding: $root-one-percent-unit;
}

.emp__dialog-visible > div {
  width: 22%;
  margin: $root-one-percent-unit;
}

.emp__dialog-visible > div > select {
  width: $root-hundred-percent-width;
  border: 1px solid rgb(182, 181, 181);
  margin: $root-one-percent-unit;
  background-color: $root-white-color;
  outline: $root-none;
  padding: $root-one-percent-unit;
}

.emp__dialog-visible > div:nth-child(1) > input {
  border: 1px solid rgb(190, 187, 187);
  background-color: $root-white-color;
  width: $root-hundred-percent-width;
  outline: $root-none;
  padding: $root-one-percent-unit;
}

.emp__dialog-visible > div:nth-child(2),
.emp__dialog-visible > div:nth-child(3) {
  width: 15%;
}

.emp__dialog-visible > div:nth-child(4) {
  text-align: $root-align-end;
  width: $root-one-percent-unit;
  margin: 0 0 0 38%;
  cursor: $root-cursor-pointer;
}

select {
  border: 1px solid rgb(190, 187, 187);
  background-color: $root-white-color;
  width: 15vw;
}

.emp__dialog-visible > button {
  border: $root-border;
}
</style>