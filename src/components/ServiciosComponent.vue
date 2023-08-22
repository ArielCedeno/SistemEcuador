<template>
    <main>
      <div class="titulo">
        <h1 :class="animaTitulo">{{ titulo }}
        </h1>
        <p :class="animaTitulo">{{subTitulo}}</p>
      </div>
      <div class="contenido-servicios">
        <div class="servicios">
          <h2>Contact Center: Soluciones integrales para atención al cliente y telemercadeo</h2>
          <section>
            <div class="img img1"></div>
            <div class="servicio">
              <div v-for="(servicio2, index) in contactCenter" :key="index">
                <h3 data-aos="fade-up"><font-awesome-icon class="arrow" :icon="['fas', 'circle-right']" />{{ servicio2.titulo }}</h3>
                <p data-aos="fade-up">{{ servicio2.contenido }}</p>
              </div>
            </div>
          </section>
        </div>
        <div class="servicios">
          <h2>Nuestros Servicios de Gestión de Cobranzas: </h2>
          <section>
            <div class="img img2"></div>
            <div class="servicio">
              <div v-for="(servicio2, index) in cobranza" :key="index">
                <h3 data-aos="fade-up"><font-awesome-icon class="arrow" :icon="['fas', 'circle-right']" />{{ servicio2.titulo }}</h3>
                <p data-aos="fade-up">{{ servicio2.contenido }}</p>
              </div>
            </div>
          </section>
        </div>
        <div class="servicios">
          <h2>Servicio de Gestiones Masivas en el Contact Center: Potenciando Resultados a Gran Escala</h2>
          <section>
            <div class="img img3"></div>
            <div class="servicio">
              <div v-for="(servicio2, index) in gestionesMasivas" :key="index">
                <h3 data-aos="fade-up"><font-awesome-icon class="arrow" :icon="['fas', 'circle-right']" />{{ servicio2.titulo }}</h3>
                <p data-aos="fade-up">{{ servicio2.contenido }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
const animaTitulo = ref('');
animaTitulo.value = 'animate__animated animate__fadeInLeft';


  const titulo:string = 'Nuestros servicios';
  const subTitulo: string = 'Nuestras áreas de negocios principales son:'
  
  interface Servicios {
  titulo: string;
  contenido: string;
}
const contactCenter: Servicios[] = [
      {
        titulo: 'Servicios de Llamadas Entrantes: Atención y Soporte al Cliente: ',
        contenido: 'Enfocados en ofrecer una experiencia de cliente excepcional, nuestro equipo altamente capacitado está listo para atender las llamadas entrantes de tus clientes. Proporcionamos soporte técnico, asistencia en consultas y resolución de problemas, todo ello con una actitud amigable y orientada a resultados. Nuestro enfoque personalizado asegura que cada cliente se sienta valorado y escuchado.',
      },
      {
        titulo: 'Llamadas Salientes: Potenciando tus Estrategias de Telemercadeo: ',
        contenido: 'Nuestros especialistas en telemercadeo son expertos en generar oportunidades de negocio para tu empresa. Ya sea para campañas de ventas cruzadas, promoción de nuevos productos o encuestas de satisfacción, nuestra habilidad para establecer conexiones significativas con tus clientes potenciales se traduce en un aumento de tus ventas y una mayor lealtad de los clientes.',
      },
      {
        titulo: 'Gestión de Cobranzas: Recuperación de Deudas de Forma Efectiva y Empática: ',
        contenido: 'Nuestra especializada Gestión de Cobranzas en el Contact Center está diseñada para ayudar a tu empresa a recuperar deudas pendientes de forma efectiva, sin comprometer la relación con tus clientes. Reconocemos la importancia de equilibrar resultados financieros con empatía y respeto hacia los deudores.',
      },
      {
        titulo: 'Gestión Profesional de Negociación: ',
        contenido: 'Nuestros expertos en negociación trabajan con tus clientes morosos para establecer acuerdos de pago viables y alcanzables, permitiendo que se pongan al día con sus deudas de manera gradual.',
      },
      {
        titulo: 'Análisis de Datos y Seguimiento Continuo: ',
        contenido: 'Recopilamos y analizamos datos de cada interacción para evaluar la efectividad de las estrategias y realizar ajustes cuando sea necesario, optimizando la gestión de cobranzas y maximizando los resultados.',
      },
    ];

const cobranza: Servicios[] = [
      {
        titulo: 'Enfoque Centrado en el Cliente: ',
        contenido: 'Nuestros profesionales altamente capacitados se comunican con tus clientes de manera respetuosa y amable, entendiendo sus situaciones individuales y ofreciendo soluciones personalizadas para cumplir con sus obligaciones de pago.',
      },
      {
        titulo: 'Tecnología Avanzada de Localización: ',
        contenido: 'Utilizamos herramientas y bases de datos avanzadas para localizar a los deudores, facilitando el proceso de contacto y mejorando las tasas de respuesta.',
      },
      {
        titulo: 'Estrategias de Comunicación Multicanal: ',
        contenido: 'Implementamos una variedad de canales de comunicación, incluyendo llamadas telefónicas, mensajes de texto y correos electrónicos, para adaptarnos a las preferencias de tus clientes y maximizar las posibilidades de recuperación.',
      },
      {
        titulo: 'Gestión Profesional de Negociación: ',
        contenido: 'Nuestros expertos en negociación trabajan con tus clientes morosos para establecer acuerdos de pago viables y alcanzables, permitiendo que se pongan al día con sus deudas de manera gradual.',
      },
      {
        titulo: 'Análisis de Datos y Seguimiento Continuo: ',
        contenido: 'Recopilamos y analizamos datos de cada interacción para evaluar la efectividad de las estrategias y realizar ajustes cuando sea necesario, optimizando la gestión de cobranzas y maximizando los resultados.',
      },
    ];

    const gestionesMasivas: Servicios[] = [
      {
        titulo: 'Contactar a Grandes Audiencias: ',
        contenido: 'Podemos llegar a un gran número de personas en un corto período de tiempo, utilizando sistemas de marcación automatizada y mensajes masivos para notificar, recordar o comunicar información importante.',
      },
      {
        titulo: 'Encuestas y Recolección de Datos: ',
        contenido: 'Si necesitas obtener información de un gran número de clientes o encuestar a tu audiencia, nuestro servicio de gestiones masivas puede realizar encuestas telefónicas, por mensajes de texto o correos electrónicos.',
      },
      {
        titulo: 'Campañas Informativas y de Marketing: ',
        contenido: 'Podemos lanzar campañas masivas para informar sobre nuevos productos, promociones, eventos o cualquier novedad relevante para tu audiencia.',
      },
      {
        titulo: 'Recordatorios de Citas o Pagos: ',
        contenido: 'Facilitamos el envío de recordatorios automatizados para citas médicas, pagos, vencimientos de facturas y otros eventos importantes, reduciendo los olvidos y aumentando la puntualidad.',
      },
      {
        titulo: 'Gestión de Emergencias y Alertas: ',
        contenido: 'En situaciones de emergencia o eventos críticos, nuestro servicio de gestiones masivas permite enviar alertas y mensajes de notificación rápidamente a una amplia audiencia.',
      },
    ];
    
</script>


<style scoped>

main{
  margin-top: 5rem;
}
.titulo h1 {
  font-weight: bold;
  font-size: 8rem;
  padding: 2rem;
  text-align: center;
  color: var(--color-02);
  margin-bottom: 0;
  margin-top: 0;
}

.titulo p{
  text-align: center;
  color: var(--color-02);
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 4rem;
}


.contenido-servicios{
  display: flex;
  flex-flow: column;
  gap: 4rem;
  /* border: 1px solid black; */
}

.servicios{
  display: block;
  /* box-shadow: 0px 0px 5px; */
  /* padding: 2rem; */
}
.servicios section{
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-flow: row;
  /* border: 5px solid var(--color-04); */
  /* box-shadow: 0px 0px 5px; */
  /* border-radius: 2rem; */
  gap: 1rem;
}

.servicios section .servicio{
  flex: 1;
}
.servicios .img{
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  /* border: 1px solid black; */
  flex: 1;
  /* border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem; */
}

.servicios .img1{
  background-image: url('@/assets/images/banner.webp');
}
.servicios .img2{
  background-image: url('@/assets/images/cobranza.webp');
}
.servicios .img3{
  background-image: url('@/assets/images/gestionesMasivas.webp');
}

.servicios h2{
  background-color: var(--color-04);
  padding: 2rem;
  margin: 0;
  /* border-radius: 1rem; */
  color: var(--color-02);
}

.servicio{
  padding: 2rem;
}
.servicio h3{
  color: var(--color-01);
}
.servicio p{
  margin-left: 2.3rem;
}
.arrow{
  margin-right: 1rem;
}


@media (min-width: 280px) and (max-width: 1024px){
  .servicio{
    margin-top: 20rem;
  }


}

@media (min-width: 280px) and (max-width: 1026px){
  main{
    width: 100%;
  }

  .titulo{
    width: 100%;
  }

  .titulo h1{
    font-size: 3rem;
  }

  .titulo p{
    font-size: 1.7rem;
  }

  .servicios section{
    flex-flow: column wrap;
  }

  .servicios .img{
    display: block;
    width: 100%;
    height: 300px;
    position: absolute;
    background-position: top;
  }

  .servicio h3{
    font-size: 1.7rem;
  }
  .servicio p{
    font-size: 1.4rem;
  }

  .servicios .img1{
 background-position: center;
}
}
</style>