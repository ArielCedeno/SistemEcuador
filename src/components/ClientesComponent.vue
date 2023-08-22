<template>
  <main>
    <div class="titulo">
      <h2 data-aos="fade-up">{{ titulo }}</h2>
      <p data-aos="fade-up">{{ subTitulo }}</p>
    </div>
    <div class="clientes">
        <div class="logo">
            <img data-aos="fade-up" v-for="(imagen, index) in clientes" :key="index" :src="imagen" alt="imagen">
        </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const titulo: string = 'Nuestra experiencia'
const subTitulo: string = 'Compartimos con ustedes nuestra experiencia en estos 7 años de servicio.'


const clientes:Array<string> = [
    'src/assets/images/avon.png',
    'src/assets/images/banco-amazonas.png',
    'src/assets/images/ccca.png',
    'src/assets/images/cnt.png',
    'src/assets/images/comandato.png',
    'src/assets/images/datatools.png',
    'src/assets/images/delbank.png',
    'src/assets/images/kapital-one.png',
    'src/assets/images/orange.png',
    'src/assets/images/procash.png',
    ]
    
</script>

<style scoped>
.titulo {
  display: block;
  margin: 0px auto;
  text-align: center;
  padding: 0 4rem;
}

.titulo h2 {
  font-size: 8rem;
  margin-bottom: 2rem;
  color: var(--color-01);
}
.titulo p {
  font-size: 3rem;
  color: var(--color-02);
}


.clientes{
    width: 80%;
    margin: 0px auto;
    margin-bottom: 4rem;
}
.logo{
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}
.logo img{
    width: 110px;
}

@media (min-width: 280px) and (max-width: 1024px){
  .titulo{
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .titulo h2{
    font-size: 4rem;
  }

  .titulo p{
    font-size: 2rem;
    padding: 1rem;
  }

  .logo{
    width: 100%;
  }
}
</style>
