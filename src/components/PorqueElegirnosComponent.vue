import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
<template>
    <div class="contenedor">
        <div class="banner">
          <div class="titulo">
            <h1 data-aos="fade-right">{{ titulo }}</h1>
            <p data-aos="fade-right" class="subtitulo">
              {{subtitulo}}
            </p>
          </div>
          <div class="img"></div>
        </div>
        <div class="contenido">
          <div class="caja">
            <h2 data-aos="fade-up">Nuestro Enfoque en Indicadores de Gestión y KPI</h2>
            <div class="kpi" v-for="(enfoque, index) in enfoqueKpi" :key="index">
              <h3 data-aos="fade-up"><font-awesome-icon class="arrow" :icon="['fas', 'circle-right']" />{{ enfoque.titulo }}</h3>
              <p data-aos="fade-up">{{ enfoque.contenido }}</p>
            </div>
          </div>
          <div class="caja">
            <h2 data-aos="fade-up">Beneficios de Nuestro Enfoque en Indicadores de Gestión y KPI</h2>
            <div class="kpi" v-for="(beneficio, index) in beneficioKpi" :key="index">
              <h3 data-aos="fade-up"><font-awesome-icon class="arrow" :icon="['fas', 'circle-right']" />{{ beneficio.titulo }}</h3>
              <p data-aos="fade-up">{{ beneficio.contenido }}</p>
            </div>
          </div>
          <div class="img"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const titulo: String = '¿Por qué elegirnos?';
const subtitulo: String = 'Nuestro Contact Center se enfoca en el seguimiento y análisis de Indicadores de Gestión y KPI (Key Performance Indicators) para medir y mejorar constantemente nuestro desempeño.';

interface EnfoqueKpi {
  titulo: string;
  contenido: string;
}

interface BeneficioKpi{
  titulo: string;
  contenido: string;
}

const enfoqueKpi: EnfoqueKpi[] = [
  {
    titulo: 'Medición de la Productividad: ',
    contenido: 'Utilizamos indicadores como el número de llamadas atendidas por agente, tiempos de resolución de consultas y tareas, para asegurarnos de que nuestro equipo opere de manera eficiente y cumpla con los objetivos establecidos.',
  },
  {
    titulo: 'Calidad del Servicio: ',
    contenido: 'Evaluamos la calidad de nuestras interacciones con los clientes mediante encuestas de satisfacción, retroalimentación y monitoreo de llamadas, asegurándonos de brindar una experiencia positiva y coherente.',
  },
  {
    titulo: 'Tiempos de Respuesta: ',
    contenido: 'Medimos el tiempo promedio de respuesta a las consultas de los clientes, tanto en llamadas telefónicas como en otros canales, para garantizar una atención oportuna y reducir los tiempos de espera.',
  },
  {
    titulo: 'Tasa de Resolución en el Primer Contacto: ',
    contenido: 'Buscamos resolver las consultas y problemas de los clientes en el primer contacto, lo que mejora la satisfacción del cliente y reduce la necesidad de llamadas de seguimiento.',
  },
  {
    titulo: 'Retención y Fidelización de Clientes: ',
    contenido: 'Medimos la tasa de retención de clientes y la repetición de compras, para evaluar la lealtad hacia nuestra marca y mejorar las estrategias de retención.',
  }
];

const beneficioKpi: BeneficioKpi[] = [
  {
    titulo: 'Mejora Continua: ',
    contenido: 'Los indicadores de gestión nos brindan información objetiva sobre nuestro rendimiento, lo que nos permite identificar áreas de mejora y aplicar cambios estratégicos de manera proactiva.',
  },
  {
    titulo: 'Enfoque en la Calidad: ',
    contenido: 'Nuestros KPIs se centran en la calidad del servicio, lo que nos impulsa a brindar una atención al cliente excepcional y a mantener altos estándares de calidad en cada interacción.',
  },
  {
    titulo: 'Optimización de Recursos: ',
    contenido: 'La medición de la productividad nos ayuda a optimizar la distribución de recursos y a garantizar que nuestro equipo esté trabajando de manera efectiva y eficiente.',
  },
  {
    titulo: 'Toma de Decisiones Informada: ',
    contenido: 'Basamos nuestras decisiones en datos concretos, lo que minimiza el riesgo y maximiza el éxito en la implementación de nuevas estrategias y enfoques.',
  },
  {
    titulo: 'Objetivos Claros y Alcanzables: ',
    contenido: 'Los KPIs nos permiten establecer objetivos claros y alcanzables, lo que motiva a nuestro equipo y nos ayuda a mantenernos enfocados en la excelencia operativa.',
  },
];

</script>

<style scoped>
  .banner{
    display: flex;
    width: 100%;
    height: 40vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px;
  }

  .banner .img{
    width: 50%;
    background-image: url('@/assets/images/kpi-banner.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .titulo{
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: var(--color-05);
  }
  .titulo h1{
    color: var(--color-01);
    font-size: 4rem;
    margin-bottom: 0;
  }
  .subtitulo{
    color: var(--color-02);
    font-size: 1.5rem;
    padding: 0 4rem;
  }

  .contenido{
  display: flex;
  margin: 2rem;
}
.caja{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 45%;
  height: auto;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
  margin: 2rem 2rem;
}

.caja h2{
  color: var(--color-01);
  border-bottom: .2rem solid var(--color-03);
  padding-bottom: 1rem;
  font-size: 2rem;
}

.arrow{
  color: var(--color-02);
  font-size: 1.4rem;
  margin-right: .5rem;
}
.kpi h3{
  color: var(--color-02);
}
.kpi p{
  padding-left: 2rem;
}

 
@media (min-width: 280px) and (max-width: 480px){

  .contenedor{
    width: 100%;
  }

  .banner{
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }
  .banner .titulo{
    width: 100%;
    height: 2000px;
  }

  .subtitulo{
    color: var(--color-02);
    font-size: 1.5rem;
    padding: .5rem;
  }

  .contenido{
    flex-direction: column;
    flex-wrap: wrap;
  }

  .contenido .caja{
    width: 100%;
    padding: 0;
    margin: 3rem 0;
    box-shadow: none;
  }

  .contenido .caja:first-child{
    margin-top: 10rem;
  }
}

@media (min-width: 481px) and (max-width: 1024px){
  .contenedor{
    width: 100%;
  }

  .banner{
    height: 500px;
  }

  .contenido{
    width: 95%;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .contenido .caja{
    width: 95%;
    padding: 0;
    margin: 3rem 0;
    box-shadow: none;
  }

  .arrow{
  font-size: 1.4rem;
}
.kpi h3{
  font-size: 1.8rem;
}
.kpi p{
  padding-left: 2rem;
  font-size: 1.5rem;
}

}

</style>