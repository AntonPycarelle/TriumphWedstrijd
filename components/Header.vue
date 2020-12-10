<template>
<div>
            <nav class="navv">
                <a href="/" target="_blank" class="nav-item nav">Wedstrijd</a>
                <img src="/logo.ico" class="logo" alt="logo">
                <a href="https://www.triumphwevelgem.com/" target="_blank" class="nav-item nav1">Triumph Wevelgem</a>
            </nav>

            <v-img
              src="./bg.png"
              contain
            >

            
            </v-img>
</div>
</template>

<style >
.para{
      filter: blur(2px);
  -webkit-filter: blur(2px);
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
    background-color: black;
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