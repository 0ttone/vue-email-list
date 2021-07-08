/*
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/



Vue.config.devtools = true;



     const app = new Vue(
      {
          el: "#app",

          data: {

            emailsList: [],
            emailsQty: 10





          },

          created () {

                  this.getRandomEmails()


          },

          methods: {

            getRandomEmails: function () {
                  for( let i = 0; i < this.emailsQty; i++)
                  axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                  .then((response) => {  
                      this.emailsList.push(response.data.response);
                  });
              
                  //con questa svuota l array button e ricarica ad ogni click
                    this.emailsList= []    
                  }




          }

      })