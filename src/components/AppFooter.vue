<script>

import axios from 'axios';

export default {
    name: 'AppFooter',

    data() {
        return {
            baseApiUrl: process.env.VUE_APP_API_URL,
            isLoading: true,
        }
    },

    mounted() {
        this.apiCall();
    },

    methods: {
        apiCall() {
            this.isLoading = true

            axios.get(this.baseApiUrl + '/projects', {
                params: {
                    page: this.apiPageNumber
                }
            }).then(res => {
                if (res.data.success) {
                    this.isLoading = false
                }
            })
        },
    },
}
</script>

<template>

    <footer class="text-center px-3 pb-3" v-if="!isLoading">
        <hr>

        <div class="container px-lg-5 px-sm-0 py-3 d-flex">
            <div class="col-6 d-flex justify-content-start">
                <span class="py-2">©2024 Pietro Antonio Nini</span>
            </div>
            <div class="col-6 d-flex justify-content-end gap-3 social">
                <a href="https://www.linkedin.com/in/pietro-antonio-nini-2061241a9/">
                    <img src="/public/Logo LinkedIn 3D Fluency.png" alt="">
                </a>
                <a href="https://github.com/PietroAntonioNini">
                    <img src="/public/Github logo 3D.png" alt="">
                </a>
                <a href="https://gravatar.com/pietroantonionini">
                    <img src="/public/gravatar.png" alt="">
                </a>
            </div>
        </div>

    </footer>

    <div class="d-flex justify-content-center my-loader" v-else>
        <div class="loader"></div>
    </div>

</template>

<style lang="scss" scoped>
.social {
    a img {
        width: 45px;
        transition: 0.2s linear;

        &:hover {
            transform: scale(1.2);
            cursor: pointer;
        }
    }
}

//screen mobile 
@media screen and (max-width: 576px) {
    .container {

        div {
            span {
                font-size: 14px;
            }
        }

        div {
            img {
                width: 30px;
            }
        }
    }
}
</style>
