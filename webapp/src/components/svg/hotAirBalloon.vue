<template>
    <svg xmlns="http://www.w3.org/2000/svg" id="hotAirBalloon" viewBox="0 0 509.7 832.6" height="200">
    <defs>
    </defs>
    <title>
        Hot Air Balloon
    </title>
    <g id="Layer_2" data-name="Layer 2">
        <g id="Hot_Air_Balloon" data-name="Hot Air Balloon">
        <path class="cls-1" d="M233.55,494.79l-1,0Z"/>
        <path class="cls-1" d="M266.6,494.5l-1.55,0Z"/>
        <path class="cls-1" d="M244.61,494.47l-1.55,0Z"/>
        <path class="cls-1" d="M254.83,0C338.86,0,407,85.56,407,191.11c0,32.82-5.82,64.55-18.2,90.69-40,84.48-69.48,84.93-93.57,214.2,15.41,1.4,25.36,3.58,25.36,6,40.7-135.41,90.58-134.45,158.61-220.24,20.73-26.14,30.48-57.87,30.48-90.69C509.66,85.56,395.57,0,254.83,0Z"/>
        <path class="cls-1" d="M0,191.11c0,32.82,9.75,64.55,30.48,90.69,68,85.79,117.91,84.83,158.61,220.24,0-2.46,9.95-4.64,25.36-6-24.09-129.27-53.58-129.72-93.57-214.2-12.38-26.14-18.2-57.87-18.2-90.69C102.68,85.56,170.8,0,254.83,0,114.09,0,0,85.56,0,191.11Z"/>
        <path class="cls-1" d="M277.12,494.83l-1,0Z"/>
        <path class="cls-2" d="M254.83,494.37c-3.29,0-6.5,0-9.66.1C248.34,494.41,251.54,494.37,254.83,494.37Z"/>
        <path class="cls-2" d="M102.68,191.11c0,32.82,5.82,64.55,18.2,90.69,40,84.48,69.48,84.93,93.57,214.2,7.7-.7,16.81-1.19,26.69-1.44-.84,0-1.7,0-2.53.06C229,366.73,217.27,366,201.36,281.8c-4.94-26.14-7.26-57.87-7.26-90.69C194.1,85.56,221.29,0,254.83,0,170.8,0,102.68,85.56,102.68,191.11Z"/>
        <path class="cls-2" d="M254.83,0c33.54,0,60.73,85.56,60.73,191.11,0,32.82-2.32,64.55-7.26,90.69-15.91,84.18-27.65,84.93-37.25,212.82-.83,0-1.7,0-2.53-.06,9.88.25,19,.74,26.69,1.44,24.09-129.27,53.58-129.72,93.57-214.2,12.38-26.14,18.2-57.87,18.2-90.69C407,85.56,338.86,0,254.83,0Z"/>
        <path class="cls-2" d="M264.49,494.47c-3.16-.06-6.37-.1-9.66-.1C258.12,494.37,261.32,494.41,264.49,494.47Z"/>
        <path class="cls-3" d="M287.7,586.78H222L155.28,707.41h199.1Z"/>
        <path class="cls-3" d="M279.22,586.78H230.44L181,707.41H328.71Z"/>
        <rect class="cls-4" x="124.9" y="707.4" width="259.8" height="125.2" rx="19.7"/>
        <ellipse class="cls-5" cx="254.8" cy="502" rx="65.7" ry="7.7"/>
        <path class="cls-6" d="M257.8,509.69l29.9,77.09L320.57,502C320.57,506.16,292.72,509.51,257.8,509.69Z"/>
        <path class="cls-7" d="M238.61,494.62q7.8-.24,16.22-.25t16.22.25C280.65,366.73,292.39,366,308.3,281.8c4.94-26.14,7.26-57.87,7.26-90.69C315.56,85.56,288.37,0,254.83,0S194.1,85.56,194.1,191.11c0,32.82,2.32,64.55,7.26,90.69C217.27,366,229,366.73,238.61,494.62Z"/>
        <path class="cls-8" d="M254.83,509.71c-36.31,0-65.74-3.43-65.74-7.67L222,586.78H287.7l-29.9-77.09Z"/>
        <path class="cls-9" d="M124.9 733.4H384.70000000000005V759.6H124.9z"/>
        <path class="cls-9" d="M124.9 780.4H384.70000000000005V806.6H124.9z"/>
        </g>
    </g>
    </svg>
</template>
<script>
import { TimelineLite } from 'gsap';
export default {
    name:'hotAirBalloon',
    props:['flyBalloon'],
    data() {
        return {
            timeline: new TimelineLite()
        }
    },
    mounted() {
        this.timeline.from(document.getElementById('hotAirBalloon'),{duration:3,y:-200,ease:"sine"})
        this.timeline.to(document.getElementById('hotAirBalloon'),{duration:3,x:100,ease:"sine"},"=-5")
    },
    methods: {
        exitBalloon() {
            this.timeline.to(document.getElementById('hotAirBalloon'),{duration:3,y:-200,ease:"sine"},"=+1")
            this.timeline.to(document.getElementById('hotAirBalloon'),{duration:3,x:0,ease:"sine"},"=-3")
        }
    },
    watch: {
        flyBalloon: function() {
            this.exitBalloon();
        }
    }
}
</script>
 <style scoped>
    .cls-1{fill:#484b9a;}.cls-2{fill:#e83882;}.cls-3{fill:none;stroke:#603d0f;stroke-linejoin:round;stroke-width:2px;}.cls-4{fill:#603d0f;}.cls-5{fill:#ebbd00;}.cls-6{fill:#ffeb66;}.cls-7{fill:#70c1a9;}.cls-8{fill:#fd0;}.cls-9{fill:#a16215;}
</style>