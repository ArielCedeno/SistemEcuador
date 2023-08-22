<template>
  <div class="banner">
    <div class="img"></div>
    <div class="titulo">
      <h1 :class="animatitulo">
        SistemEcuador <br />
        <span>Contact Center & BPO </span>
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const animatitulo = ref('')
const animaBoton = ref('')

animatitulo.value = 'animate__animated animate__backInDown'
animaBoton.value = 'animate__animated animate__bounce'
</script>

<style scoped>
.banner {
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 70vh;
  background-color: rgb(238, 242, 243);
  margin-top: 5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px;
}

.banner .img {
  width: 100%;
  background-image: url('../assets/images/portada.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 20px;
}

.banner .img::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  margin-top: 5rem;
  background-color: rgba(0, 0, 0, 0.8);
}

.banner .titulo {
  position: absolute;
  top: 40%;
  line-height: 4rem;
  text-align: center;
  color: var(--color-03);
  font-size: 3.5rem;
  font-weight: bold;
  margin-left: -30px;
  width: 100%;
}

.banner .titulo h1 {
  margin-left: 4rem;
}

.banner .titulo span {
  font-size: 4rem;
  color: var(--color-05);
  width: 100%;
}

/* DISPOSITIVOS MOVILES */
@media (min-width: 280px) and (max-width: 480px) {
  .banner {
    width: 100%;
    height: 400px;
  }

  .banner .img {
    width: 100%;
  }

  .banner .img::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    margin-top: 5rem;
  }

  .banner .titulo {
    width: 100%;
    padding: 0;
    margin-left: 2.3px;
    /* margin-top: 5rem; */
  }

  .banner .titulo h1 {
    margin-left: 0;
    text-align: center;
    font-size: 3rem;
  }

  .banner .titulo span {
    font-size: 2rem;
  }
}

@media (min-width: 481px) and (max-width: 1024px){
    .banner{
        width: 100%;
        height: 700px;
    }

  .banner .img::before {
    width: 100%;
    height: 700px;
  }

  .banner .titulo {
    margin-left: -30px;
    width: 100%;
    padding: 0;
    /* margin-top: 10rem; */
  }

  .banner .titulo h1 {
    font-size: 6rem;
  }

  .banner .titulo span {
    font-size: 3rem;
  }
}
</style>
