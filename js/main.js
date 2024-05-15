const { createApp } = Vue

  createApp({
    data() {
      return {
        coseDaFare: [
          {
            titolo:"fare la spesa ",
            done: false
          },
          {
            titolo:"portare fuori il cane",
            done: true
          },
          {
            titolo:"dare da mangiare ai pesci",
            done:false
          },
          {
            titolo:"falciare il prato",
            done:true
          },
          {
            titolo:"prendere una birra con ciccio",
            done:false
          }   
        ],
        // userCoseDaFare: [
        //   {
        //     titolo:"",
        //     done:false
        //   }
        // ]
        userImput: ""
      }
    },
    methods: {
      stampa() {
        // return this.coseDaFare.push(this.userCoseDaFare);
        this.coseDaFare.push({titolo:this.userImput, done:false})

      },
      svuota(elemento) {
        console.log("svuota");
        this.coseDaFare.splice(elemento , 1)
      },
      stato(elemento) {
        if (this.coseDaFare[elemento].done) {
          return "green"
        }
        else{
          return "red"
        }
      },
      cambiaStato(elemento) { 
        console.log("cambia");
        return ( this.coseDaFare[elemento].done == true) ? this.coseDaFare[elemento].done = false : this.coseDaFare[elemento].done = true;
      }
    }
  }).mount('#app')