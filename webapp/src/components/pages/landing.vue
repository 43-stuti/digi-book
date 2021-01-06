<template>
    <div class="main">
        <clouds :scrollTimeline="scrollTimeline" class="clouds"/>
        <houses :scrollTimeline="scrollTimeline" class="houses" @houseParams="updateNeighbourhoodProps"/>
        <div class="entry"> 
          <div>
            <hotAirBalloon class="hotAirBalloon" :flyBalloon="flyBalloon"/>
            <stan v-if="showStan" :animateStan="animateStan" @removeStan="removeStan" class="stan"/>
          </div>
          <div :style="{marginTop:'-15px'}">
            <chatbox class="chatbox" :currentAgent="currentAgent" :startChat="startChat" @animateStan="movestan"/>
          </div>
          <student v-if="showStudent" :houseParams="houseParams" :currentAgent="currentAgent" :showStudent="showStudent" />
        </div>
        <neighbourhood :scrollTimeline="scrollTimeline" class="neighbourhood"/>
    </div>
</template>

<script>
import neighbourhood from '../svg/neighbourhood.vue'
import student from '../svg/student.vue'
import hotAirBalloon from '../svg/hotAirBalloon.vue'
import stan from '../svg/stan.vue'
import chatbox from '../atoms/chat/chatbox.vue'
import clouds from '../svg/clouds.vue'
import houses from '../svg/houses.vue'
export default {
  name: 'landing',
  props:{
    scrollTimeline: {
        type: Object
    }
  },
  data () {
    return {
      houseParams: null,
      currentAgent: 'Intro',
      startChat:false,
      animateStan: false,
      flyBalloon: false,
      showStan: true,
      showStudent:false
    }
  },
  components:{
    neighbourhood,
    student,
    chatbox,
    hotAirBalloon,
    stan,
    clouds,
    houses
  },
  methods:{
      updateNeighbourhoodProps(variable) {
          this.houseParams = variable;
          this.currentAgent = variable.currentAgent;
      },
      movestan() {
        this.animateStan = true;
        this.flyBalloon = true;
        this.startChat = true;
        this.showStudent = true;
      },
      removeStan() {
        this.showStan = false;
      }
  }
}
</script>

<style>
.main {
  position:relative;
  width: 100%;
}
.landing {
  position: relative;
}
.entry {
  position: absolute;
  width: 45%;
  display: block;
}
.chatbox {
  z-index: 400;
  position: relative;
}
.neighbourhood {
  z-index: -100;
  position: relative;
}
.clouds {
  position: absolute;
  z-index: 0;
}
.houses {
  position: absolute;
  z-index: 0;
  margin-left: 55%;
  margin-top: 20%;
}
.hotAirBalloon {
  position: relative;
  z-index: 300;
}
.student {
  position: absolute;
  z-index: 200;
}
.stan {
  position: relative;
  margin-top: 130px;
  margin-left: -70px;
  z-index: 150;
}
.cls-1,.cls-11,.cls-34,.cls-8{fill:none}.cls-2{fill:#dde6a8}.cls-19{opacity:.4}.cls-8{stroke:#fff;stroke-width:2px;stroke-miterlimit:10}.cls-10,.cls-38{fill:#5d4116}.cls-11{stroke:#5d4116}.cls-11,.cls-34{stroke-linejoin:round;stroke-width:.25px}.cls-12{fill:#812d18}.cls-13{fill:#a83c16}.cls-14{fill:#ffec55}.cls-15,.cls-42{fill:#a78b50}.cls-16{opacity:.5}.cls-17{fill:#fff}.cls-18{fill:#ce694a}.cls-20{fill:#d4e6f1}.cls-21{fill:#004e76}.cls-22{fill:#003766}.cls-34{stroke:#a78b50}.cls-36,.cls-37{fill:#607c29}.cls-37,.cls-38,.cls-42{fill-rule:evenodd}.cls-39{fill:#602480}.cls-40{fill:#b093c5}.cls-41{fill:#814d99}.cls-44{fill:#2b556b}.cls-45{fill:#69c2ee}.cls-46{fill:#4587ab}.cls-47{fill:#861d58}.cls-48{fill:#ef9ec5}.cls-49{fill:#d64090}.cls-56{fill:#334194}.cls-57{fill:#4456a3}.cls-58{fill:#a1a4d2}
</style>
