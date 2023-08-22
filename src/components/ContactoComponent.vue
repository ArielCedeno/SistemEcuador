import { computed } from 'vue';
<template>
    <div>
        <div class="contacto">
            <div class="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15947.820294485315!2d-79.886405!3d-2.1707831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6df4f7cf3819%3A0x58a77d86cd738a3b!2sSISTEMECUADOR%20S.A.!5e0!3m2!1ses-419!2sec!4v1691268773206!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="formulario">
                <form action="https://formsubmit.co/info@sistemecuador.com" method="POST" class="contact-form">
                    <legend>Contacta con nosotros</legend>
                    <input type="text" name="name" placeholder="Nombre" title="Nombre solo acepta letras y espacios en blanco" required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$">
                    <input type="email" name="email" placeholder="Correo" title="Email incorrecto" required pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$">
                    <input type="text" name="subject" placeholder="Asunto" title="El asunto es requerido" required>
                    <textarea v-model="message" @input="limitCharacters" name="comentarios" cols="50" rows="5" placeholder="Comentarios" required title="Tu comentario no debe exceder los 255 caracteres"></textarea>
                    <input class="enviar" type="submit" value="Enviar">
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const message = ref('');
    const maxCharacters = 255; // Define el número máximo de caracteres permitidos

    // Método para limitar los caracteres en el textarea
    const limitCharacters = () => {
    if (message.value.length > maxCharacters) {
        message.value = message.value.substring(0, maxCharacters); // Limita el texto a la longitud máxima
    }
    };
</script>

<style scoped>

    .contacto{
        display: flex;
        margin-top: 5rem;
    }
    .mapa{
        width: 50%;
    }
    .mapa iframe{
        width: 100%;
        height: 100%;
    }

    .formulario{
        width: 50%;
    }
    .contact-form{
        display: flex;
        flex-flow: column;
        width: 90%;
    }
    .contact-form legend{
        font-size: 3rem;
        font-weight: bold;
        color: var(--color-02);
    }
    .contact-form>*{
        display: block;
        padding: 0.5rem;
        margin: 1.8rem;
        width: 100%;
        border: none;
    }
    .contact-form input,
    .contact-form textarea{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px .3rem;
        color: var(--color-02);
    }
    .contact-form input:focus,
    .contact-form textarea:focus{
        /* outline: none; */
        outline-color: var(--color-02); 
    }
    .contact-form textarea{
        resize: none;
    }
    .enviar{
        background-color: var(--color-02);
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        width: 103%;
        color: var(--color-03) !important;
    }

   

    @media (min-width: 280px) and (max-width: 1024px){
        .contacto{
            width: 100%;
            flex-flow: column;
            /* margin-top: 10rem; */
        }

        .mapa{
            width: 100%;
            height: 340px;
        }

        .formulario{
            width: 100%;
        }
    }

    @media (min-width: 280px) and (max-width: 480px){
        .formulario{
            width: 90%;
        }
    }

</style>