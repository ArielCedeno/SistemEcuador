<template>
    <section class="seccion01">
      <div class="nosotros">
        <div v-for="tarjeta in tarjetas" :key="tarjeta.titulo" class="nosotros-card">
          <h2 :class="animaNosotros">{{ tarjeta.titulo }}</h2>
          <p :class="animaNosotros">{{ tarjeta.contenido }}</p>
        </div>
      </div>
     
    </section>
    
</template>

<script lang="ts" setup>

import { ref } from 'vue';

const animaNosotros = ref('');

animaNosotros.value = 'animate__animated animate__backInUp';


interface Tarjeta {
  titulo: string;
  contenido: string;
}

const tarjetas: Tarjeta[] = [
      {
        titulo: 'SistemEcuador',
        contenido: 'Somos una empresa en constante innovación de procesos y servicios que ayuda al crecimiento de sus clientes sin afectar el Core del negocio, a través de un ecosistema de interacciones multicanales significativas aplicadas en una sólida infraestructura tecnológica.',
      },
      {
        titulo: 'Compromiso',
        contenido: 'Comprometidos en obtener resultados que ayuden considerablemente a mejorar los indicadores de su empresa.',
      },
      {
        titulo: 'Objetivo',
        contenido: 'Basados en la experiencia y en el sentir de sus clientes se preocupan por la utilidad o beneficio que su negocio puede obtener con relación a la inversión realizada y en el presupuesto asignado.',
      },
    ];

</script>

<style scoped>
  .seccion01{
    background-color: var(--color-01);
    overflow: hidden;
  }
  .nosotros{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px inset;
    display: flex;
    background-color: var(--blanco);
  }
  .nosotros-card{
    flex: 1;
    padding: 3rem;
    text-align: center;
  }
  .nosotros-card h1{
    color: var(--color-01);
    font-weight: bold;
  }
  .nosotros-card p{
    color: var(--color-02);
  }
  .nosotros-card:nth-child(2){
    box-shadow: rgba(0, 0, 0, 0.35) 0px -5px .3rem;
  }

  @media (min-width: 280px) and (max-width: 480px){
    .seccion01{
      width: 100%;
    }

    .nosotros{
      flex-flow: column;
    }

    .nosotros-card{
      padding: 1.8rem;
      font-size: 1.4rem;
    }

    .nosotros-card:nth-child(2){
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px .3rem;
  }
  }

  /* DISPOSITIVOS MEDIANOS - TABLEST */
  @media (min-width: 481px) and (max-width: 1024px){
    .seccion01{
      width: 100%;
    }
    .nosotros{
      flex-flow: column;
    }
    .nosotros-card{
      padding: 2rem;
      font-size: 1.8rem;
    }
  }
</style>