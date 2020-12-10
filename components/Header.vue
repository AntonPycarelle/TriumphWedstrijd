<template>
<div class="header">
            <nav class="navv">
                <a href="#start" class="nav-item nav">Wedstrijd</a>
                <img src="/favicon.ico" class="logo" alt="logo">
                <a href="https://www.triumphwevelgem.com/" target="_blank" class="nav-item nav1">Triumph Wevelgem</a>
            </nav>

            <!-- <v-img
              src="./bg.png"
              contain
            > -->

            <div class="height">
                <h3 class="white"><span class=""> Welke BV </span><br><span class=""> is onze </span><br> Gemaskerde Motard?</h3>
                <p class="taglinee">Doe hieronder je gok en win <b>1.000 euro!</b></p>
            </div>

            
            </v-img>
</div>
</template>

<style >

.grooter{
    font-size: 3rem;
}

.taglinee{
    color: white;
}

.header{
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%), black url(../static/bg.png) center top/cover no-repeat;
    /* background-image: url(../static/bg.png);
    background-size: cover;   -ms-background-size: cover;   -o-background-size: cover;   -moz-background-size: cover;   -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center top; */
    height: 100vh;
    width: 100%;
}

.para{
      filter: blur(2px);
  -webkit-filter: blur(2px);
}

.height{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.white{
    color:white;
    font-family: "Glacial Indifference";
    text-transform: uppercase;
    letter-spacing: .1rem;
    text-align: center;
    align-items: center;
    padding-bottom: 1rem;
    padding-top: 15rem;
    font-size: 2.3rem;
    margin: 1rem;
    }

.nav-item{
    font-family: "Glacial Indifference";
    text-transform: uppercase;
    letter-spacing: .2rem;

    color: white;
    text-decoration: none;
    text-align: center;
    width: auto;
    transition: letter-spacing .3s;
}

h1{
  font-family: "Glacial Indifference";
  text-transform: uppercase;
  letter-spacing: .4rem;
  text-align: center;
}


.navv{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". nav logo nav1 .";
    width: 100%;
      justify-items: center;
  align-items: center;
}
.nav { grid-area: nav; }
.nav1 { grid-area: nav1;
padding-left: 1rem }

.logo { grid-area: logo;
    width: 10rem;
    padding-top: 1rem;
    transition: .3s;
    z-index: 1000;
}

.logo:hover{
    transition: .3s;
  transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */

}


.nav-item:hover{
    letter-spacing: .25rem;
    transition: letter-spacing .3s;
}

@media only screen and (max-width: 600px) {
 .logo{
     width: 5rem;
 }
}

</style>