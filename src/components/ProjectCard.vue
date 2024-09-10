<script>
export default {
    name: 'ProjectCard',

    data() {
        return {
            techImages: {
                html: 'html.png',
                css: 'css.png',
                javascript: 'js.png',
                bootstrap: 'bootstrap.png',
                laravel: 'laravel.png',
                mysql: 'mysql.png',
                php: 'php.png',
                sass: 'sass.png',
                vue: 'vue.png',
                axios: 'axios.png',
                vite: 'vite.svg' // formato SVG
            }
        }
    },

    props: {
        project: Object,
    },

    methods: {
        //trasformo le tecnologie in immagini
        getImage(techType) {

            let imagePath;

            // Controlla se il tipo di tecnologia ha un'immagine associata
            if (this.techImages.hasOwnProperty(techType)) {
                imagePath = (`/${this.techImages[techType]}`);
            }
            return imagePath;
        },

        getCleanImageUrl(image) {
            // Se project.image contiene qualcosa di extra, rimuovilo
            const googleDriveId = image.replace(/https:\/\/.*\/storage\//, '');
            return googleDriveId;
        },
    },
}
</script>

<template>
    <li class="card p-2 " style="width: 18rem;">
        <div class="img-container">
            <img :src="`/proxy-image/${project.image}`" class="card-img-top" alt="image">
        </div>
        <div class="card-body p-4 d-flex flex-column justify-content-between ">
            <div class="my-4">
                <h5 class="card-title">{{ project.name }}</h5>

                <ul class="d-flex flex-wrap list-unstyled gap-2 mb-2 text-uppercase">
                    <li v-for="currentTech in project.technologies" :key="currentTech.type">
                        <img :src="getImage(currentTech.type)" :alt="currentTech.type" class="mr-1 " style="max-height: 20px;">
                    </li>
                </ul>

                <span v-if="project.type" class="d-block text-primary mb-3"> {{ project.type.name }}</span>
            </div>
            <div>
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                    class="btn btn-outline-light btn-outline">Vai al progetto</router-link>
            </div>
        </div>
    </li>


</template>

<style lang="scss" scoped>
.card {
    width: 18rem;
    @media (max-width: 768px) {
        width: 22rem;
    }

    background: linear-gradient(0deg, #41485500 0%, rgb(95, 86, 103) 100%);
    backdrop-filter: blur(2px);
    box-shadow: 0 7px 20px 5px #00000048;
    position: relative;

    .img-container {
        max-width: 400px;
        img {
            width: 100%;
            object-fit: contain;
        }
    }
}
</style>