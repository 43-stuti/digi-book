<template>
    <svg id='student' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 170" width="100" height="100">
        <defs>
        </defs>
        <g class="cls-1">
            <g id="Layer_2" data-name="Layer 2">
            <g id="Temp">
                <path class="cls-2" d="M85,52.11A29.71,29.71,0,0,0,55.32,22.4H29.7A29.7,29.7,0,0,0,0,52.1V67H85a7.43,7.43,0,1,0,0-14.85Z"/>
                <path class="cls-3" d="M0 67H85V104.7H0z"/>
                <path class="cls-4" d="M85,104.68H0a29.7,29.7,0,0,0,29.7,29.7H55.32A29.7,29.7,0,0,0,85,104.68Z"/>
                <rect class="cls-5" x="25.5" y="56.1" width="2" height="7.5" rx=".8"/>
                <rect class="cls-5" x="45.6" y="56.1" width="2" height="7.5" rx=".8"/>
                <path class="cls-6" d="M9.14,104.68H0a29.7,29.7,0,0,0,29.7,29.7h9.14A29.7,29.7,0,0,1,9.14,104.68Z"/>
                <path class="cls-3" d="M50.89,149.77a7.42,7.42,0,0,0-7.42,7.42H58.32A7.43,7.43,0,0,0,50.89,149.77Z"/>
                <path class="cls-3" d="M34,149.77a7.42,7.42,0,0,0-7.42,7.42H41.47A7.43,7.43,0,0,0,34,149.77Z"/>
                <path class="cls-4" d="M50.89,149.77a7.42,7.42,0,0,1,2.68.5V137.06a2.68,2.68,0,0,0-5.36,0v13.21A7.5,7.5,0,0,1,50.89,149.77Z"/>
                <path class="cls-4" d="M34,149.77a7.42,7.42,0,0,1,2.68.5V137.06a2.68,2.68,0,0,0-5.36,0v13.21A7.46,7.46,0,0,1,34,149.77Z"/>
                <path class="cls-7" d="M0,67v8a29.7,29.7,0,0,0,29.7,29.7H55.32A29.7,29.7,0,0,0,85,75V67Z"/>
                <path class="cls-3" d="M55.32,11.06H29.7A29.71,29.71,0,0,0,0,40.77V52.1A29.7,29.7,0,0,1,29.7,22.4H55.32A29.71,29.71,0,0,1,85,52.11V40.77A29.71,29.71,0,0,0,55.32,11.06Z"/>
                <path class="cls-3" d="M53.57,11.06a11.06,11.06,0,0,0-22.12,0Z"/>
                <path class="cls-8" d="M29.7 82.5L29.7 104.7"/>
                <path class="cls-8" d="M38.2 82.5L38.2 104.7"/>
                <path class="cls-8" d="M46.8 82.5L46.8 104.7"/>
                <path class="cls-8" d="M55.3 82.5L55.3 104.7"/>
                <path class="cls-9" d="M0,52.1V67H9.14V40.77a29.51,29.51,0,0,1,2.71-12.4A29.63,29.63,0,0,0,0,52.1Z"/>
                <g class="cls-10">
                <path class="cls-11" d="M29.7,11.06A29.71,29.71,0,0,0,0,40.77V52.1A29.63,29.63,0,0,1,11.85,28.37a29.71,29.71,0,0,1,27-17.31Z"/>
                </g>
                <path class="cls-12" d="M0 67H9.1V104.7H0z"/>
                <circle class="cls-2" cx="70.2" cy="112.1" r="7.4"/>
                <path class="cls-11" d="M44.07.12A11.45,11.45,0,0,0,42.51,0,11.06,11.06,0,0,0,31.45,11.06h3.11A11.06,11.06,0,0,1,44.07.12Z"/>
                <path class="cls-13" d="M62.74,112.11a7.42,7.42,0,0,1,6.09-7.3,7.43,7.43,0,1,0,0,14.59A7.42,7.42,0,0,1,62.74,112.11Z"/>
                <path class="cls-6" d="M53.57,150.27V148.1a7.42,7.42,0,0,0-2.68-.5,7.5,7.5,0,0,0-2.68.5v2.17a7.5,7.5,0,0,1,2.68-.5A7.42,7.42,0,0,1,53.57,150.27Z"/>
                <path class="cls-6" d="M36.72,150.27V148.1a7.43,7.43,0,0,0-5.36,0v2.17a7.43,7.43,0,0,1,5.36,0Z"/>
                <path class="cls-12" d="M35.38,149.89a7.34,7.34,0,0,0-1.34-.12,7.42,7.42,0,0,0-7.42,7.42H29.3A7.42,7.42,0,0,1,35.38,149.89Z"/>
                <path class="cls-12" d="M52.23,149.89a7.34,7.34,0,0,0-1.34-.12,7.42,7.42,0,0,0-7.42,7.42h2.68A7.42,7.42,0,0,1,52.23,149.89Z"/>
            </g>
            </g>
        </g>
    </svg>

</template>
<script>
import { TimelineLite } from 'gsap';
export default {
    name:'student',
    data() {
        return {
            move:false,
            timeline: new TimelineLite()
        }
    },
    props:['houseParams','currentAgent','showStudent'],
    watch: {
        currentAgent: function() {
            if(this.houseParams.enterNeighbourhood) {
                let studentParams = document.getElementById('student').getBoundingClientRect();
                this.timeline.to(document.getElementById('student'),{duration:1,scale: 0.1,ease:"circ"});
                this.timeline.to(document.getElementById('student'),{opacity: 0,ease:"circ"},"-=0.7");
                this.timeline.to(document.getElementById('student'),{duration: 1,x:(this.houseParams.x),ease:"circ"});
                this.timeline.to(document.getElementById('student'),{duration: 1,y:this.houseParams.y - studentParams.top,ease:"circ"},"-=1");
                this.timeline.to(document.getElementById('student'),{opacity: 1,ease:"circ"},"-=0.7");
                this.timeline.to(document.getElementById('student'),{duration:1,scale: 0.5,ease:"circ"},"-=0.5");
            }
        },
        showStudent: function() {
            console.log('SHOW STUDENT')
            this.timeline.from(document.getElementById('student'),{duration:2,scale:0.1,ease:"ease"})
        }
    }
}
</script>
<style scoped>
    .cls-1{isolation:isolate;}.cls-2{fill:#f4cbab;}.cls-3{fill:#fdc300;}.cls-4{fill:#535d62;}.cls-5{fill:#0b1213;}.cls-6{fill:#3d4548;}.cls-7{fill:#673922;}.cls-8{fill:none;stroke:#c47450;stroke-linecap:round;stroke-miterlimit:10;}.cls-9{fill:#f0bb8f;opacity:0.5;}.cls-10,.cls-12,.cls-9{mix-blend-mode:multiply;}.cls-10{opacity:0.4;}.cls-11,.cls-12{fill:#f7a600;}.cls-12{opacity:0.7;}.cls-13{fill:#e69a63;}
</style>