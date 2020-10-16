<template>
  <div>
    <h1>Currency Dashboard (Incoming!)</h1>
    <b-container fluid="xl">
      <b-row class="py-5">
        <b-col cols="12">
          <b-table
            class="dashboard-currency"
            striped
            hover
            :items="items"
          ></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CurrencyTable",
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
