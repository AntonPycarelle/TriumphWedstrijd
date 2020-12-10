<template>



    <div>
        <!-- <v-parallax dark class="para" src="./bg.png"> -->
        <Form class="form"/>
        <Footer />
        <!-- </v-parallax> -->
    </div>
</template>

<script>
import Form from '@/components/Form';
import Footer from '@/components/Footer';

export default {
    components:{
        Form,
        Footer
    },
}
</script>

<style>
.para{
    background-size: 100%;

}

.form{
    width: 80%;
    margin: auto;
}
</style>