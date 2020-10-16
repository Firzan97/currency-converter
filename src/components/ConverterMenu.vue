<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="8">
          <div class="converter-menu shadow-lg rounded-lg text-left pl-3">
            <h1 class="pt-3">How our currency converter works</h1>
            <p>TukarDuit convert the currency by fetching the data from API</p>
            <b-container class="bv-example-row">
              <b-row>
                <b-col cols="7">
                  <b-container>
                    <b-row class="py-5">
                      <div class="">
                        <b-form v-on:submit="onSubmit" v-on:reset="onReset">
                          <b-form-group
                            id="input-group-1"
                            label-for="input-1"
                            description="Base currency"
                          >
                            <b-form-input
                              id="input-1"
                              v-model="form.email"
                              type="text"
                              required
                              >sasa</b-form-input
                            >
                          </b-form-group>
                        </b-form>
                      </div>
                      <b-col cols="4">
                        <b-form-select
                          v-model="selectedCurrencyBase"
                          :options="kod"
                        ></b-form-select> </b-col
                    ></b-row>
                    <b-row>
                      <div class="">
                        <b-form v-on:submit="onSubmit" v-on:reset="onReset">
                          <b-form-group
                            id="input-group-1"
                            label-for="input-1"
                            description="Convert currency"
                          >
                            <b-form-input
                              id="input-1"
                              v-model="form.email2"
                              type="text"
                              >sasa</b-form-input
                            >
                          </b-form-group>
                          <b-button
                            class="shadow-lg"
                            type="submit"
                            variant="primary"
                            v-on:click="convert()"
                            >Convert</b-button
                          >
                        </b-form>
                      </div>
                      <b-col cols="4">
                        <b-form-select
                          v-model="selectedCurrencyConvert"
                          :options="kod"
                          value-field="code"
                          text-field="code"
                        ></b-form-select> </b-col></b-row></b-container
                ></b-col>
                <b-col cols="5">
                  <img
                    class="img-fluid pl-2"
                    alt="Responsive image"
                    src="../assets/images/duit.png"
                  /> </b-col
              ></b-row>
            </b-container>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "ConverterMenu",
  data() {
    return {
      kod: [],
      currency: [],
      currencyInfo: [],
      countries: [],
      selectedCurrencyBase: "USD",
      selectedCurrencyConvert: "",
      form: {
        email: "",
        email2: "",
      },
    };
  },

  created() {
    this.loadCurrency("USD");
    this.loadAllCountries();
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    loadCurrency(baseCurrency) {
      axios
        .get("https://api.exchangeratesapi.io/latest?base=" + baseCurrency)
        .then((response) => {
          // handle success
          //   //   this.currency. = response.data.rates;
          //   this.kod = Object.keys(response.data.rates["1"]);
          //   console.log(this.kod);
          this.currencyInfo = response.data.rates;
          for (var key in response.data.rates) {
            this.kod.push(key);
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    loadAllCountries() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((respond) => {
          var length = respond.data.length;
          var i = 0;
          for (i; i < length; i++) {
            this.countries.push(respond.data[i].currencies[0].code);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    convert() {
      axios
        .get(
          "https://api.exchangeratesapi.io/latest?base=" +
            this.selectedCurrencyBase
        )
        .then((response) => {
          this.currencyInfo = response.data.rates;

          this.kod.length = 0;
          var rates = this.currencyInfo[this.selectedCurrencyConvert];
          this.form.email2 = parseFloat(this.form.email) * rates;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap");
.converter-menu {
  background-color: rgba(255, 255, 255, 0.6);
  height: 500px;
  width: 100%;
  margin-top: 90px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
}
.converter-menu > h1 {
  font-family: "Arvo", serif;

  font-size: 25px;
}
.duit {
}
</style>
