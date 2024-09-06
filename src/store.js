import { reactive } from "vue";

export const store = reactive({
  projects: [],

  logos: [
    { src: '/html.png', link: 'https://www.w3schools.com/html/' },
    { src: '/css.png', link: 'https://www.w3schools.com/css/' },
    { src: '/js.png', link: 'https://www.w3schools.com/js/' },
    { src: '/bootstrap.png', link: 'https://getbootstrap.com/' },
    { src: '/sass.png', link: 'https://sass-lang.com/' },
    { src: '/vite.svg', link: 'https://vitejs.dev/' },
    { src: '/vue.png', link: 'https://vuejs.org/' },
    { src: '/php.png', link: 'https://www.php.net/' },
    { src: '/mysql.png', link: 'https://www.mysql.com/it/' },
    { src: '/laravel.png', link: 'https://laravel.com/' },
    { src: '/axios.png', link: 'https://axios-http.com/docs/intro' },
    { src: '/Github logo 64.png', link: 'https://github.com' },
  ],
});
