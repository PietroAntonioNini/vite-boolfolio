import { reactive } from "vue";

export const store = reactive({
  projects: [],

  logos: [
    { src: '/public/html.png', link: 'https://www.w3schools.com/html/' },
    { src: '/public/css.png', link: 'https://www.w3schools.com/css/' },
    { src: '/public/js.png', link: 'https://www.w3schools.com/js/' },
    { src: '/public/bootstrap.png', link: 'https://getbootstrap.com/' },
    { src: '/public/sass.png', link: 'https://sass-lang.com/' },
    { src: '/public/vite.svg', link: 'https://vitejs.dev/' },
    { src: '/public/vue.png', link: 'https://vuejs.org/' },
    { src: '/public/php.png', link: 'https://www.php.net/' },
    { src: '/public/mysql.png', link: 'https://www.mysql.com/it/' },
    { src: '/public/laravel.png', link: 'https://laravel.com/' },
    { src: '/public/axios.png', link: 'https://axios-http.com/docs/intro' },
    { src: '/public/Github logo 64.png', link: 'https://github.com' },
  ],
});
