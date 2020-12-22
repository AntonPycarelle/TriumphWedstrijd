<template>
<div class="body" id="start">
    <h6>Geen motosalon dit jaar?</h6>
    <p class="bodyteskt">Geen vrees! Triumph brengt de saloncondities naar Wevelgem! Ontdek onze acties en voordelen van 15 tot en met 24 januari. En misschien ga je wel naar huis met 1.000 euro aan motogear!</p>


    <div class="videowrapper">
        <iframe class="iframevid" src="https://www.youtube.com/embed/URbpsiDitk4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

</div>
</template>

<style>
    .body{
        padding: 3rem 0 1rem 0;
    }

    .bodyteskt{
        width: 50%;
        margin: auto;
        text-align: center;
        font-family: "Glacial Indifference";
        letter-spacing: .1rem;
        line-height: 1.4rem;
    }

    .iframevid{
        height: 25rem;
        width: 48rem;
    }

    .videowrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;

    }

    h6{
        text-align: center;
        font-family: "Glacial Indifference";
        text-transform: uppercase;
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 600px) {
    .bodyteskt{
        width: 90%;
    }

    }
</style>