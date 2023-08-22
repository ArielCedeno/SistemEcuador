import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
<template>
<div class="footer-container">

      <div class="footer-left">

        <h3>Sistem<span>Ecuador</span></h3>

        <p class="footer-links">
            <router-link to="/">Inicio</router-link>
            <router-link to="/quienes-somos">Quienes somos</router-link>
            <router-link to="/servicios">Servicios</router-link>
            <router-link to="/contacto">Contácto</router-link>
        </p>

        <p class="footer-company-name">SistemEcuador © 2023</p>
      </div>

      <div class="footer-center">

        <div>
          <font-awesome-icon class="icono" :icon="['fas', 'location-dot']" />
          <p><span>AVE. LUIS PLAZA DAÑIN Y AV, Crnl.</span></p>
        </div>

        <div>
          <font-awesome-icon class="icono" :icon="['fas', 'phone']" />
          <p>(04) 503-1575</p>
        </div>

        <div>
          <font-awesome-icon class="icono" :icon="['fas', 'envelope']" />
          <p><a href="mailto:support@company.com">info@sistemecuador.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>Acerca de nosotros</span>
            Somos una empresa especializada en brindar servicios de Comunicaión Omnicanal Digital, Contact Center y Administración de Cartera sustentada en el desarrollo de gestiones eficientes.
        </p>

        <div class="footer-icons">

          <a target="_blank" href="https://www.facebook.com/SistemEcuador/"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
          <a target="_blank" href="https://twitter.com/sistemecuador?lang=es"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a target="_blank" href="https://ec.linkedin.com/company/sistemecuador"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
          <a target="_blank" href="https://www.instagram.com/sistem_ecuador/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>

        </div>

      </div>

    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.footer-container{
  background: var(--color-04);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 1rem;
  padding: 4rem 4.5rem;
}

.footer-container .footer-left,
.footer-container .footer-center,
.footer-container .footer-right{
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-container .footer-left{
  width: 40%;
}

/* The company logo */

.footer-container h3{
  color:  var(--blanco);
  font-size: 2rem;
  margin: 0;
  font-family: cursive;
}

.footer-container h3 span{
  color:  var(--color-02);
}

/* Footer links */

.footer-container .footer-links{
  color:  #ffffff;
  margin: 1.2rem 0 1rem;
  padding: 0;
}

.footer-container .footer-links a{
  display:inline-block;
  line-height: 1.8;
  font-weight:bold;
  text-decoration: none;
  color: var(--color-03);
  margin-right: .2rem;
}

.footer-container .footer-company-name{
  color:  #222;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */

.footer-container .footer-center{
  width: 35%;
}

/* .icono{
  color: var(--color-03);
  margin-right: .5rem;
} */
.footer-container .footer-center .icono{
  background-color:  var(--color-02);
  color: var(--blanco);
  font-size: 1.2rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  text-align: center;
  line-height: 3rem;
  margin: .8rem 1rem;
  vertical-align: middle;
}

.footer-container .footer-center p{
  display: inline-block;
  color: #ffffff;
  font-weight:400;
  vertical-align: middle;
  margin:0;
}

.footer-container .footer-center p span{
  display:block;
  font-weight: normal;
  font-size:14px;
  line-height:2;
}

.footer-container .footer-center p a{
  color:  lightseagreen;
  text-decoration: none;;
}

.footer-container .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: var(--blanco);
  display: inline-block;
  padding-right: 5px;
}

.footer-container .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-container .footer-right{
  width: 20%;
}

.footer-container .footer-company-about{
  line-height: 20px;
  color:  var(--color-03);
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-container .footer-company-about span{
  display: block;
  color:  var(--blanco);
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
}

.footer-container .footer-icons{
  margin-top: 25px;
}

.footer-container .footer-icons a{
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color:  var(--color-03);
  border-radius: 2px;

  font-size: 20px;
  color: var(--color-04);
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}



/* DISPOSITIVOS MOVILES */
@media (min-width: 320px) and (max-width: 767px) {

  .footer-container{
    width: 227%;
    font: bold 14px sans-serif;
  }

  .footer-container .footer-left,
  .footer-container .footer-center,
  .footer-container .footer-right{
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-container .footer-center i{
    margin-left: 0;
  }

}

@media (min-width: 280px) and (max-width: 1024px){
  .footer-container{
    width: 100%;
  }
}

</style>