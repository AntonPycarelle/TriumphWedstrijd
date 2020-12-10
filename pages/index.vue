<template>



    <div>
        <!-- <v-parallax dark class="para" src="./bg.png"> -->
        <Header />
        <Body />
        <Form class="form"/>
        <Footer />
        <!-- </v-parallax> -->
    </div>
</template>

<script>
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Body from '@/components/Body';

export default {
    components:{
        Form,
        Footer,
        Header,
        Body
    },
}
</script>

<style>
.para{
    background-size: 100%;

}

.form{
    width: 70%;
    margin: auto;
}

@media only screen and (max-width: 600px) {
    .form{
        width: 90%;
        margin: auto;
    }
}
</style>