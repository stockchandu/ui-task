<script setup>
import { tableHeading, threeDotEdit } from "../../baseData.js";
import { ref, onMounted } from "vue";
import router from "../router/index";
import axios from "axios";

let employeeListData = ref(undefined);
let loading = ref(false);
let error = ref(false);
let actionPopup = ref(false);

// It will fetch all the employee data
const getEmployeeList = async () => {
  loading.value = true;
  try {
    let baseUrl = "http://localhost:3000/EmployeeList";
    let response = await axios.get(baseUrl);
    employeeListData.value = response.data;
    if (response.data) {
      loading.value = false;
    }
  } catch (err) {
    error.value = err;
  }
};

//It will delete particular employee
const deleteEmployee = (index, employeeid) => {
  actionPopup.value = false;
  employeeListData.value.splice(index, 1);
  let baseUrl = `http://localhost:3000/EmployeeList/${employeeid}`;
  axios.delete(baseUrl);
};

//It will navigate to EmployeeViewDetails component
const pushToEmployeeViewDetails = (id) => {
  router.push(`/view-employee/${id}`);
};

//It will show action popup
const showActionPopUp = (id) => {
  employeeListData.value.find((ele) => {
    if (ele.id === id) {
      actionPopup.value = true;
    }
  });
};

onMounted(() => {
  getEmployeeList();
});
</script>

<template>
  <v-table height="400px" fixed-header>
    <thead>
      <tr
        id="test"
        v-for="{
          IMAGE,
          EMPLOYEEID,
          NAME,
          CONTACTDETAILS,
          CORESKILLS,
          ADDITIONALSKILLS,
          DIVISION,
          REPORTINGMANAGER,
          STATUS,
          ACTIONS,
        } in tableHeading"
        :key="EMPLOYEEID"
      >
        <th class="text-left">{{ IMAGE }}</th>
        <th class="text-left">{{ EMPLOYEEID }}</th>
        <th class="text-left">{{ NAME }}</th>
        <th class="text-left">{{ CONTACTDETAILS }}</th>
        <th class="text-left">{{ CORESKILLS }}</th>
        <th class="text-left">{{ ADDITIONALSKILLS }}</th>
        <th class="text-left">{{ DIVISION }}</th>
        <th class="text-left">{{ REPORTINGMANAGER }}</th>
        <th class="text-left">{{ STATUS }}</th>
        <th class="text-left">{{ ACTIONS }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, index) in employeeListData" :key="list.id">
        <td><img :src="list.EmployeeImage" :alt="list.Name" width="30" /></td>
        <td>{{ list.EmployeeID.slice(0, 4) + "***" }}</td>
        <td>{{ list.Name }}</td>
        <td>
          {{ `+91  ${list.EmployeePhone}` }},
          <div>{{ list.EmployeeEmail }}</div>
        </td>
        <td>{{ list.CoreSkills }}</td>
        <td>{{ list.AdditionalSkills }}</td>
        <td>{{ list.Division }}</td>
        <td>{{ list.ReportingManager }}</td>
        <td
          :class="[list.Status ? 'green__active-color' : 'red__inactive-color']"
        >
          {{ list.Status ? "Active" : "Inactive" }}
        </td>
        <td>
          <div>
            <img
              :src="threeDotEdit"
              alt="three dot edit icon"
              width="15"
              class="action_popup"
              @click="showActionPopUp(list.id)"
            />
          </div>

          <div class="action__popup" v-if="actionPopup">
            <p @click="pushToEmployeeViewDetails(list.id)">
              <v-icon icon="mdi-eye" />View
            </p>
            <p><v-icon icon="mdi-pen" />Edit</p>
            <p @click="deleteEmployee(index, list.id)">
              <v-icon icon="mdi-delete" />Delete
            </p>
            <p><v-icon icon="mdi-download" />Download Excel</p>
          </div>
        </td>
      </tr>
      <p v-if="loading">Loading...</p>
    </tbody>
  </v-table>
</template>



<style lang="scss" scoped>
@import "../sass/variables.scss";

.action__popup {
  position: $root-position-relative;
  left: $emp-table-left-spacing;
  top: $emp-table-top-spacing;
  background-color: $root-white-color;
  width: $emp-table-action-popup-width;
  box-shadow: $emp-table-box-shadow;
}

.action__popup > p {
  margin-bottom: $emp-table-margin-bottom;
  cursor: $root-cursor-pointer;
  width: $root-hundred-percent-width;
  padding: $emp-table-padding;
}

.action__popup > p:hover {
  background-color: $zf-text-color !important;
  color: $root-white-color !important ;
}

th {
  font-size: $emp-table-table-heading-font-size !important;
  background-color: $zf-text-color !important;
  color: $root-white-color !important ;
}

.green__active-color {
  color: $root-green-color;
}

.red__inactive-color {
  color: $root-red-color;
}
</style>


