<template>
    <svg id='stan' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 170" width="20">
        <g style="isolation:isolate">
            <g id="Layer_2" data-name="Layer 2">
            <g id="Temp">
                <path d="M85 115.5H0a29.7 29.7 0 0029.7 29.7h25.6A29.7 29.7 0 0085 115.5z" class="cls-2"/>
                <path d="M50.3 85.7l-14.8 21.6-14.7-21.6H0v29.7h85V85.7H50.3z" class="cls-3"/>
                <circle cx="67.7" cy="122.9" r="7.4" class="cls-4"/>
                <path d="M62.7 122.9a7.4 7.4 0 016.3-7.4 8.1 8.1 0 00-1.2 0 7.4 7.4 0 000 14.8 8.1 8.1 0 001.2-.1 7.4 7.4 0 01-6.3-7.3z" class="cls-5"/>
                <path d="M85 62.9V51.5a29.7 29.7 0 00-29.7-29.7H29.7A29.7 29.7 0 000 51.5v34.2h85v-8A7.4 7.4 0 1085 63z" class="cls-4"/>
                <rect width="2" height="7.5" x="25.5" y="66.9" class="cls-6" rx=".8"/>
                <rect width="2" height="7.5" x="45.6" y="66.9" class="cls-6" rx=".8"/>
                <path d="M49.5 79.7a.5.5 0 01-.5.5H37.4a.5.5 0 01-.5-.5.5.5 0 01.5-.5H49a.5.5 0 01.5.5z" class="cls-6"/>
                <path d="M38.8 21.8h-9.1A29.7 29.7 0 000 51.5v34.2h9.1V51.5a29.7 29.7 0 0129.7-29.7z" class="cls-5"/>
                <path d="M0 85.7h9.1v29.7H0zM9.1 115.5H0a29.7 29.7 0 0029.7 29.7h9.1a29.7 29.7 0 01-29.7-29.7zM50.9 160.5a7.4 7.4 0 00-7.4 7.5h14.8a7.4 7.4 0 00-7.4-7.5zM34 160.5a7.4 7.4 0 00-7.4 7.5h14.9a7.4 7.4 0 00-7.5-7.5z" class="cls-7"/>
                <path d="M50.9 160.5a7.2 7.2 0 012.7.5v-13.2a2.7 2.7 0 10-5.4 0V161a7.3 7.3 0 012.7-.5zM34 160.5a7.2 7.2 0 012.7.5v-13.2a2.7 2.7 0 00-5.4 0V161a7.3 7.3 0 012.7-.5z" class="cls-2"/>
                <path d="M80.6 30.7H4.4a2.6 2.6 0 010-5.1h76.2a2.6 2.6 0 010 5.1z" class="cls-7"/>
                <path d="M68.1 25.6a25.6 25.6 0 10-51.2 0z" class="cls-3"/>
                <path fill="#fff" d="M35.5 107.3l14.8-21.6H20.8l14.7 21.6z"/>
                <path d="M31.3 101.1l4.2 6.2 4.3-6.2-3.4-15.4h-1.7l-3.4 15.4z" class="cls-7"/>
                <path d="M45.4.2a26.8 26.8 0 00-2.9-.2A25.6 25.6 0 0017 25.6h5.7A25.6 25.6 0 0145.4.2z" class="cls-2"/>
            </g>
            </g>
        </g>
    </svg>

</template>
<script>
import { TimelineLite } from 'gsap';
export default {
    name:'stan',
    data() {
        return {
            move:false,
            timeline: new TimelineLite(),
            toggle:{
                remove:false
            }
        }
    },
    props:['animateStan'],
    mounted() {
        this.timeline.from(document.getElementById('stan'),{duration:3,y:-200,ease:"sine"})
        this.timeline.to(document.getElementById('stan'),{duration:3,x:100,ease:"sine"},"=-5")
    },
    methods: {
        moveToChatBox() {
            this.timeline.to(document.getElementById('stan'),{duration:1,scale: 0.1,ease:"circ"});
            this.timeline.to(document.getElementById('stan'),{opacity: 0,ease:"circ"},"-=0.7");
            //this.timeline.to(document.getElementById('stan'),{duration: 1,x:(this.houseParams.left - studentParams.left),ease:"circ"});
            //this.timeline.to(document.getElementById('stan'),{duration: 1,y:100,ease:"circ"},"-=1");
            this.timeline.to(document.getElementById('stan'),{opacity: 1,ease:"circ"},"-=0.7");
            //this.timeline.to(document.getElementById('stan'),{duration:1,scale: 1,ease:"circ"},"-=0.7");
            this.timeline.to(this.toggle,{remove:true,onComplete: ()=> {
                this.$emit("removeStan",2);
            }},"-=1.5");
        }
    },
    watch: {
        animateStan: function() {
            this.moveToChatBox();
        }
    }
}
</script>
<style scoped>
      .cls-2{fill:#535d62}.cls-3{fill:#67737a}.cls-4,.cls-5{fill:#f0bb8f}.cls-5{opacity:.4;mix-blend-mode:multiply}.cls-6{fill:#0b1213}.cls-7{fill:#3d4548}
</style>