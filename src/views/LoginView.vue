<template>
    <div class="bg-gray-800">
        Hola
    </div>
</template>
<script lang="ts">

//Inject es un objeto que nos permite utilizar los plugins que hemos creado
import {defineComponent, inject} from 'vue'
import IStorage from '@/interfaces/Storage.vue'

export default defineComponent({
    setup(){
        //const Storage = inject<IStorage>('Storage')
        //De esta manera vue con typescrip nos marcara error porque es desconocido asi que es necesario crear una interface en typescrip
        //console.log(Storage.set('token', "holamundo"), 'with vue 3')
        //Asi se hace con una interface, donde el archivo esta en la carpeta interface
        //console.log(Storage.set('token', "holamundo12"), 'with vue 3')
    }
})

</script>
