<template>
  <div>
    <h1>Currency Dashboard (Incoming!)</h1>
    <b-container>
      <b-row class="pl-5">
        <b-col cols="5">
          <b-form-group
            id="input-group-1"
            label-for="input-1"
            description="Base currency"
          >
            <b-form-input id="input-1" v-model="form.email" type="text" required
              >sasa</b-form-input
            >
          </b-form-group></b-col
        >
        <b-col cols="5">
          <b-form-select
            v-model="selectedCurrencyBase"
            :options="items"
            value-field="name"
            text-field="name"
          ></b-form-select>
        </b-col>
        <b-col>
          <b-button
            class="shadow-lg"
            type="submit"
            variant="primary"
            v-on:click="convert()"
            >Convert</b-button
          >
        </b-col></b-row
      ></b-container
    >
    <div class="mt-3">
      Selected: <strong>{{ selectedCurrencyBase }}</strong>
    </div>

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
const axios = require("axios");

export default {
  name: "CurrencyTable",
  data() {
    return {
      selectedCurrencyBase: "",
      items: [],
      currencyInfo: {},
      amount: 1,
      form: {
        email: "",
        email2: "",
      },
    };
  },
  created() {
    this.loadCurrency();
    this.loadCurrencyName();
  },
  methods: {
    loadCurrency() {
      axios
        .get("https://api.exchangeratesapi.io/latest")
        .then((response) => {
          for (var a in response.data.rates) {
            this.currencyInfo = {
              kod: a,
              currency: response.data.rates[a],
              amount: this.amount * response.data.rates[a],
              name: "",
            };
            this.items.push(this.currencyInfo);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadCurrencyName() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((respond) => {
          var length = respond.data.length;
          var i = 0;
          var b = 0;
          var code;
          // console.log(this.currencyInfo.length);
          var kodLength = this.items.length;
          for (b = 0; b < kodLength; b++) {
            for (i = 0; i < length; i++) {
              code = respond.data[i].currencies[0].code;
              if (respond.data[i].currencies.length > 1) {
                for (var x in respond.data[i].currencies) {
                  if (respond.data[i].currencies[x].code == this.items[b].kod) {
                    this.items[b].name = respond.data[i].currencies[x].name;
                  }
                }
              }
              if (code == this.items[b].kod) {
                this.items[b].name = respond.data[i].currencies[0].name;
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    convert() {
      // var rates;

      // for (var x in this.items) {
      //   if (this.selectedCurrencyBase == this.items[x].name) {
      //     rates = this.items[x].currency;
      //   }
      // }
      for (var a in this.items) {
        this.items[a].amount = this.form.email * this.items[a].currency;
      }
    },
  },
};
</script>

<style scoped></style>
