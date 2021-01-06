<template>
    <b-row class="w-75 px-3 py-3">
        <b-col v-if="message.type == 'System'" cols="2" align-self="center">
            <avatar :agent="sender"/>
        </b-col>
        <b-col>
            <b-container v-bind:style="bubbleStyle" class="mt-3">
                <b-container class="my-2 py-3">
                    {{message.text}}
                </b-container>
            </b-container>
        </b-col>
        <b-col v-if="message.type == 'User'" cols="2" align-self="center">
            <avatar :agent="sender"/>
        </b-col>
    </b-row>
</template>
<script>
import avatar from '../../svg/avatar'
export default {
    name:'chatbubble',
    props:['message','sender'],
    computed: {
        bubbleStyle() {
            if(this.message.type == 'System')   {
                return {
                    'background-color': '#e8e0a7',
                    'border-radius': '20px'
                };
            } else {
                return {
                    'background-color': "#33322b",
                    'border-radius': '20px',
                    'color': '#ffffff'
                };
            }

            
        }
    },
    components: {
        avatar
    }
}
</script>
<style scoped>
</style>