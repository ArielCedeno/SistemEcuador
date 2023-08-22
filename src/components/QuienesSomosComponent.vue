<template>
  <div class="contenido">
    <div :class="animaContenido" class="imagen">
    </div>
    <main :class="animaContenido">
      <h1>{{ titulo }}</h1>
      <p>
        {{ subtitulo }}
      </p>

      <section>
        <div v-for="(us, index) in nosotros" :key="index" class="nosotros">
          <h2><font-awesome-icon class="arrow" :icon="['fas', 'circle-right']" />{{ us.titulo }}</h2>
          <p>{{ us.subtitulo }}</p>
        </div>
      </section>
</main>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';


const animaContenido = ref('');

animaContenido.value = 'animate__animated animate__fadeInDown';

  interface SobreNosotros{
    titulo:string;
    subtitulo:string;
  }

  const nosotros:SobreNosotros[]= [
    {
      titulo: 'Misión',
      subtitulo: 'Somos un Contact Center especializado en servicios Outsourcing, sustentados en el desarroll gestiones eficientes; mediante altos estándares de calidad, efectividad y productividad a través de servicios innovadores y talento humano calificado.'
    },
    {
      titulo: 'Visión',
      subtitulo: 'Ser empresa líder e innovadora en Servicios Outsourcing de Contact Center, buscando la excelencia en el mercado nacional e internacional.'
    },
    {
      titulo: 'Política de calidad',
      subtitulo: '“SISTEMECUADOR se compromete a fomentar una cultura orientada al mejoramiento continuo de los procesos avalando eficiencia y calidad en todos sus servicios, a través de la identificación, evaluación y control de sus resultados sujetos a los requisitos legales y regulatorios vigentes, garantizando la satisfacción y confianza de nuestras partes interesadas”'
    }
  ]

  const titulo:string = 'Sobre nosotros';
  const subtitulo: string = 'Somos una empresa especializada en brindar soluciones de Contact Center y Operaciones de Cartera sustentada en el desarrollo de gestiones eficientes y basadas en el saber especializado; mediante altos estándares de calidad, efectividad y productividad. Operamos en Ecuador desde el año 2011 bajo el nombre de Sistema de Cobro del Ecuador S.A. SistemEcuador ofreciendo servicio al cliente, capacitación, ventas, administración y recuperación de carteras'

</script>

<style scoped>
.contenido{
    display: flex;
    flex-flow: row;
    width: 100%;
    /* border: 1px solid red; */
    margin-top: 5rem;
}
.imagen{
    background-image: url('@/assets/images/inbound.webp');
    background-size: cover;
    align-self: center;
    background-position: center;
    width: 50%;
    height: 80rem;
    display: inline-block;
}
.imagen::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 80rem;
  background-color: rgba(0, 0, 0, 0.8);
}

h1 {
  font-weight: bold;
  text-align: left;
  color: var(--color-02);
  font-size: 5rem;
}

p {
  margin: 0 0 20px;
  line-height: 1.5;
}

main {
  width: 50%;
  padding: 3rem;
}

main >p {
  font-size: 1.3rem;
}

section {
  padding: 20px 0 0;
  border-top: 1px solid #ddd;
  /* padding: 1rem; */
}

section h2{
  color: var(--color-02);
  font-size: 2rem;
}

section p{
  margin-left: 2.6rem;
  font-size: 1.2rem;
}

.arrow{
  padding-right: 1rem;
}


/* DISPOSITIVOS MOVILES */
@media (min-width: 280px) and (max-width: 767px){
  .contenido{
    width: 100%;
    flex-flow: column;
  }

  .imagen{
    width: 100%;
    height: 300px;
    background-position: top;
    position: relative;
    top: -10px;
  }

  .imagen::before {
 height: 300px;
}

  main{
    width: 90%;
    margin: 0;
    padding: 5%;
  }

  main > p{
    font-size: 1.5rem;
  }
  .nosotros h2{
    font-size: 2rem;
  }
  .nosotros p{
    font-size: 1.2rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px){

  .contenido{
    width: 100%;
    flex-flow: column wrap;
  }
  .imagen{
    width: 100%;
    height: 500px;
    background-position: top;
    position: relative;
    top: -10px;
  }

  .imagen::before {
  height: 500px;
}

  section{
    margin-top: 5rem;
  }

  main{
    width: 80%;
  }

  main>p{
    font-size: 2rem;
  }

  .nosotros h2{
    font-size: 2.8rem;
  }

  .nosotros p{
    font-size: 2rem;
  }

}



</style>
