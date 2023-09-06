<template>
  <nav>
    <div class="logo">
      <a href="#"><img src="../assets/logo.png" alt="SistemEcuador" /></a>
      <h3>Sistem<span>Ecuador</span></h3>
    </div>
    <div class="hamburger-button" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul :class="{ 'is-active': isMenuOpen }">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/quienes-somos">Quienes somos</router-link></li>
      <li><router-link to="/servicios">Servicios</router-link></li>
      <li><router-link to="/contacto">Contácto</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>

.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
}
.logo img{
  width: 3.5rem;
  text-align: center;
  padding-right: 1rem;
}

.logo h3{
  color:  var(--blanco);
  font-size: 1.5rem;
  margin: 0;
}

.logo span{
  color: var(--color-02);
}
nav {
  position: fixed;
  display: flex;
  background-color: var(--color-04);
  height: 5rem;
  width: 100%;
  z-index: 9999;
  justify-content: space-between;
  top: 0;
}

nav a{
  text-decoration: none;
  color: var(--color-02);
  transition: all .3s ease-in-out;
}

nav a:hover{
  color: var(--blanco);
}



/* Resto de los estilos */

/* Estilos para el botón hamburguesa */
.hamburger-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  margin: 1.5rem;
}

.hamburger-button span {
  width: 100%;
  height: 3px;
  background-color: var(--color-01);
}

/* Estilos para el menú desplegable */
nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  width: 50%;
  padding: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
}

nav ul.is-active {
  transform: translateX(-100%);
}

nav ul li {
  flex: 1;
  text-align: center;
}

/* Estilos para otros dispositivos */

@media (max-width: 1024px) {
  .hamburger-button {
    display: flex;
  }

  .logo {
    padding: 0;
    margin-left: 1rem;
  }


  nav ul {
    width: 100%;
    flex-direction: column;
    background-color: var(--color-04);
    position: absolute;
    top: 3.9rem;
    left: 0;
    width: 100%;
    z-index: 9998;
    transform: translateX(-100%);
  }


  nav ul.is-active {
    transform: translateX(0);
  }

  nav ul li {
    width: 100%;
    padding: 1rem 0;
    text-align: center;
  }

}
</style>