const { createApp } = Vue

  createApp({
    data() {
      return {
        coseDaFare: [
            "fare la spesa ",
            "portare fuori il cane",
            "dare da mangiare ai pesci",
            "falciare il prato",
            "prendere una birra con ciccio",
        ],
        userCoseDaFare: ""
      }
    },
    methods: {
      stampa() {
        this.coseDaFare.push(this.userCoseDaFare)
      },
      svuota(elemento) {
        this.coseDaFare[elemento] = "";
        if (this.coseDaFare[elemento] == "") {
          document.querySelector("li").innerHTML = ""
        }
      }
    }
  }).mount('#app')