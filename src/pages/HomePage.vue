<script>
export default {
    name: 'HomePage',

    props: {
        goToProjects: Function
    },
}
</script>

<template>
<div class="home">
    <div class="titles">
        <h1>Pietro Antonio Nini</h1> 
        
        <h2>Full-Stack Web Developer</h2> 

        <h3>Website Portfolio</h3>

        <button class="btn btn-outline-primary mt-5" @click="goToProjects">Vai ai progetti</button>
    </div>
    
    <div class="img-container">
        <img class="lang-infinite" src="/public/lang-infinite.png" alt="">
    </div>

    <div class="social mb-5">
        <a href="https://www.linkedin.com/in/pietro-antonio-nini-2061241a9/">
            <img src="/public/Logo LinkedIn 3D Fluency.png" alt="">
        </a>
        <a href="https://github.com/PietroAntonioNini">
            <img src="/public/Github logo 3D.png" alt="">
        </a>
    </div>

</div>
</template>

<style lang="scss" scoped>
.home {
    background-image: url(../img/starry-night-sky-background-illustration-2023-11-27-05-06-34-utc.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    
    height: 100vh;

    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .titles {
        text-align: center;
        margin-top: 80px;

        h1, h2, h3 {
            text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.543);
        }

        h1 {
            font-size: 100px;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        h2 {        
            font-size: 60px;
            font-weight: 600;
        }

        h3 {
            font-size: 50px;
            font-weight: 400;
        }

        button {
            font-size: 30px;
        }
    
    }

    .img-container {
        max-width: 1500px;
        margin:0 50px 50px;
        
        .lang-infinite {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
    
    .lang-infinite {
        max-width: 1100px;
    }

    .social {
        display: flex;
        gap: 20px;
        
        a img {
            width: 70px;
            transition: 0.2s linear;

            &:hover {
                transform: scale(1.2);
                cursor: pointer;
            }
        }
    }

    //screen desktop 
    @media screen and (max-width: 1400px) {
        
        .titles {
            margin-top: 80px;

            h1 {
                font-size: 80px;
            }
            h2 {
                font-size: 50px;
            }
            h3 {
                font-size: 30px;
            }

        }

        .img-container {
            max-width: 800px;
            margin:0 50px 50px;

            .lang-infinite {
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }

        .social a img {
            width: 60px;
        }
    }

    //screen portatile 
    @media screen and (max-width: 1200px) {
        
        .titles {
            margin-top: 80px;

            h1 {
                font-size: 60px;
            }
            h2 {
                font-size: 40px;
            }
            h3 {
                font-size: 20px;
            }

            button {
                font-size: 28px;
            }

        }
    }

    //screen tablet 
    @media screen and (max-width: 992px) {
        .titles {
            margin-top: 60px;

            h1 {
                font-size: 50px;
            }
            h2 {
                font-size: 30px;
            }
            h3 {
                font-size: 20px;
            }

            button {
                font-size: 25px;
            }

        }
    }

    //screen mobile 
    @media screen and (max-width: 576px) {
        .titles {
            margin-top: 40px;

            h1 {
                font-size: 40px;
            }
            h2 {
                font-size: 20px;
            }
            h3 {
                font-size: 15px;
            }

            button {
                font-size: 20px;
            }

        }
    }
}

</style>
