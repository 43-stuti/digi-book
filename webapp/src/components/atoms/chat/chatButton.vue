<template>
    <div>
        <div @click="onClick" id="background">
            <b-container class="py-3 text-white text-center">
                {{message.text}}
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    name:'chatButton',
    props:['message'],
    methods:{
        onClick: function() {
            this.$emit("registerUserResponse",this.message)
        }
    }
}
</script>
<style scoped>
    #background {
        background-color: rgb(5, 5, 5);
        border-radius: 70px;
        width: 100%
    }
</style>