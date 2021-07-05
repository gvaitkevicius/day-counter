<template>
 <div>
    <div class="title">
        <h1>CONTADOR</h1>
        <b-button @click="reiniciar" variant="success">Reiniciar</b-button> 
    </div>
   <div class="timeClock">
     <p>Faltam</p>
     <flip-countdown :deadline="pegarData"></flip-countdown>
    </div>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'

export default {
  components: { FlipCountdown },
    methods: {
        reiniciar() {
            this.$router.push({ path: '/'})
        }
    },
    computed: {
      pegarData(){
        return this.$store.getters.pegarData + " 00:00:00"
      }
    }
}
</script>

<style>
 .title{
        display: flex;
        justify-content: space-between;
        margin-left: 2%;
        margin-right: 3%;
        margin-top: 1%;
 
 }

 .timeClock{
   margin-top: 4%;
    display: flex;
    align-items: center;
    flex-direction: column;
 }

 p{
   font-size: 5.0rem;
   font-weight: bold;
 }
</style>