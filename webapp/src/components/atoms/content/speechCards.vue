<template>
    <b-container fluid>
        <div class="px-4" :style="cardStyle">
            <b-container id="mainContent" v-if = "toggle.regional" class="text-white pt-4">
                <div>
                    <h6 id="contentTitle">{{content.title}}</h6>
                </div>
                <div class="mt-1">
                    <p id="contentDescription">{{content.description}}</p>
                </div>
            </b-container>
            <b-container id="regionalContent" v-if = "!toggle.regional" class="text-white pt-4">
                <div>
                    <h6>{{content.title}}</h6>
                </div>
                <div class="mt-1">
                    <p>{{content.description}}</p>
                </div>
            </b-container>
            <b-container @click="translate" class="pb-4">
                {{toggle.buttonText}}
            </b-container>
        </div>
    </b-container>
</template>
<script>
import { TimelineLite } from 'gsap';
export default {
    name:'writeup',
    props:['content'],
    data() {
        return {
            timeline: new TimelineLite(),
            toggle:{
                regional:true,
                gradient: 100,
                buttonText: 'Translate'
            }
        }
    },
    computed: {
        cardStyle() {
            if(this.content) {
                return {
                    'background': "rgba(255, 200, 184,"+ (100-this.toggle.gradient)/100 + ")",
                    'background-image' : "linear-gradient(to bottom,rgba(180, 85, 56,"+ this.toggle.gradient/100 +") "+ this.toggle.gradient+"%,rgba(255, 200, 184, 1))",
                    'position':'absolute',
                    'left':this.content.x+'px',
                    'margin-top':-this.content.y+'px',
                    'border-radius':'15px',
                    'width' : '300px'
                }
            }
        }
    },
    methods: {
        translate: function() {
            this.timeline.to(document.getElementById('contentTitle'),{duration:1,opacity:0,ease:"circ"});
            this.timeline.to(document.getElementById('contentDescription'),{duration:1,opacity:0,ease:"circ"},"-=1");
            this.timeline.to(this.toggle,{duration:0.5,gradient:0},"-=1");
            this.timeline.to(this.toggle,{duration:0.5,regional:false,ease:"circ"},"-=0.9");
            this.timeline.to(this.toggle,{duration:0.5,buttonText:'See original',ease:"circ"},"-=0.9");
        },
        updateGradient: function() {
            this.cardStyle['background-image'] = "linear-gradient(to bottom,rgba(180, 85, 56, 1) "+ this.toggle.gradient+"%,rgba(255, 200, 184, 1))"
        }
    }
}
</script>
<style scoped>
#background {
    background-color: rgb(180, 85, 56);
    border-radius: 15px;
    position: absolute;
}
</style>