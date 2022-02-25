<script setup>
import { ZFLogo, EmployeeSkillSet } from "../../baseData.js";
</script>

<template>
  <div class="employee__header">
    <div>
      <img :src="ZFLogo" alt="zf logo" width="60" />
    </div>
    <div>
      {{ EmployeeSkillSet }}
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../sass/variables.scss";

.employee__header {
  display: $root-dislay-flex;
  align-items: $root-align-center;
  font-size: $header-fontsize;
  box-shadow: $bottom-box-shadow;
  padding: $header-padding;
  border: $header-border;
}
</style>