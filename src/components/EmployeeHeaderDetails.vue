<script setup>
  import { employeeHeaderTitle } from "../../baseData.js";
  import router from "../router/index";
  const pushToAddEmployee = () => {
      router.push({ path: "/add-employee" });
  };
</script>


<template>

  <div class="employee__header-details">
    <div class="employee__header-details-heading">
      {{ employeeHeaderTitle }}
    </div>
    <div>
      <v-btn flat color="#00abe7" @click="pushToAddEmployee">
        <p class="employee__header-details-btn">
          <v-icon icon="mdi-plus" />{{ employeeHeaderTitle }}
        </p>
      </v-btn>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../sass/variables.scss";

.employee__header-details {
  width: $root-hundred-viewport-width;
  display: $root-dislay-flex;
  align-items: $root-align-center;
  margin-bottom: $root-margin-spacing;
}

.employee__header-details-heading {
  width: $emp-width;
  color: $zf-text-color;
  font-size: $emp-font-size;
  font-weight: $emp-font-weight;
}

.employee__header-details-btn {
  font-size: $root-font-size;
  text-transform: $root-text-capital-transform;
  color: $root-white-color;
}
</style>