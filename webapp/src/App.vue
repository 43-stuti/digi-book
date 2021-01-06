<template>
  <b-container fluid class="structure">
    <landing :scrollTimeline="tlLanding" class="landing mb-5"/>
    <religion-intro :scrollTimeline="mdLanding" class="medieval"/>
  </b-container>
</template>

<script>
//gsap
import { gsap } from "gsap";
import { TimelineLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//components
import landing from './components/pages/landing.vue'
import religionIntro from './components/pages/religionIntro.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tlLanding: new TimelineLite(),
      mdLanding: new TimelineLite(),
    }
  },
  components:{
    landing,
    religionIntro
  },
  mounted() {
    ScrollTrigger.create({
        animation: this.tlLanding,
        trigger: ".landing",
        start: "bottom center",
        end: "45% 100%",
        scrub: 3,
    });
    ScrollTrigger.create({
        animation: this.mdLanding,
        trigger: ".medieval",
        start: "bottom center",
        end: "45% 100%",
        scrub: 3,
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
