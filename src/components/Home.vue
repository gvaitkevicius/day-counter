<template>
  <div class="home">
      <h1>Contador</h1>
      <label for="">Informe uma data!</label>
      <input type="date" v-model="dataInput">
      <b-button @click="initContador" class="btn"  variant="success">Iniciar Contagem</b-button> 
      
  </div>
 
 
</template>

<script>
export default {
    data: function (){
           return {
               dataInput: ''               
           }
    },
      methods: {
        initContador() {
            this.$router.push({ path: '/contador'})
            this.$store.commit('setData', this.dataInput)

        }
    }
  

}
</script>

<style>
 body {
		background: linear-gradient(to right, rgb(0, 0, 0), rgb(14, 14, 29));
	}
    .home {
        margin-top: 15%;
        display: flex;
        align-items: center;
        flex-direction: column;            
    }

  .btn {
        margin-top: 10px;

    }

    h1 {
        color: rgb(17, 195, 17);
    }

    label {
        color: #FFF;
    }
    input {
        width: 250px;
          background-color: #fff;
    }
</style>