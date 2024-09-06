<script>

import { store } from '../store';

export default {
    name: 'TechnologiesItem',

    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <section class="mb-0">
        <div class="container pt-3 d-flex flex-column  align-items-start justify-content-between">
            <div class="col-12 text-center">
                <h1 class="fs-2">Tecnologie Utilizzate</h1>
            </div>
            <div class="col-12 pt-3">
                <ul class="d-flex flex-wrap justify-content-center align-items-center list-unstyled gap-5 mb-0 text-uppercase pt-4 rounded-2">
                    <li v-for="logo in store.logos" :key="logo.src">
                        <a :href="logo.link">
                            <img :src="logo.src" :alt="logo.src" class="logo">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    text-transform: uppercase;
    text-shadow: 2px 3px 4px rgba(255, 255, 255, 0.613);
    cursor: default;
}

li {
    padding: 10px;

    .logo {
        width: auto;
        height: 50px;
    }
}
</style>
