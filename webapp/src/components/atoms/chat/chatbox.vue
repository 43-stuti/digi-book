<template>
    <b-container class="mt-3" id="parent" :style="chatBoxStyle">
        <b-row id="background">
            <div id="scrollable">
                <b-container class="mt-3" v-for = "(chat,c) in chatHistory"
                    :chat="chat"
                    :key="c"
                >
                    <b-container v-for = "(message,m) in chat.messages"
                        :message="message"
                        :key="m"
                        ref="chatScreenMessages"
                    >
                        <b-row v-if="message.type == 'System'" align-h="start">
                            <chatbubbles :message = "message" :sender = "sender">
                            </chatbubbles>
                        </b-row>
                        <b-row v-if="message.type == 'User'" align-h="end">
                            <chatbubbles :message = "message" :sender = "sender">
                            </chatbubbles>
                        </b-row>
                    </b-container>
                </b-container>
            </div>
            <b-row align-v="end" align-h="center" class="w-100 mx-1 mb-3">
                <div v-if="chatHistory.length" class="separator"/>
                <b-col v-for = "(buttons,i) in availableChatButtons"
                    :button = "buttons"
                    :key= "i"
                >
                    <chatButton :message = "buttons" @registerUserResponse = 'registerUserResponse' :sender = "sender"> 
                    </chatButton>
                </b-col>
            </b-row>
        </b-row>
    </b-container>
</template>
<script>
    //lib external
    import _ from 'lodash';
    import { TimelineLite } from 'gsap';
    //internal
    import chatbubbles from './chatbubbles'
    import chatButton from './chatButton'
    import chats from '../../../master/chats.js'
    export default {
        name:'chatbox',
        data() {
            return {
                chatHistory:[],
                lastChat: null,
                currentAgentObj:null,
                currentAgentHistoryObj:null,
                timeline: new TimelineLite(),
                toggle: {
                    height:5
                },
                sender:'stan'
            }
        },
        props:['currentAgent','startChat'],
        methods: {
            registerUserResponse: function(variable) {
                this.currentAgentHistoryObj.messages.push(variable);
                let nextChat = variable.nextChat;
                this.lastChat = variable;
                this.timeline.to(variable, {duration: 0.75, need: true, onComplete: () => {
                    if(nextChat && nextChat.length) {
                        this.generateSystemChat(nextChat)
                    }

                }});
            },
            generateSystemChat: function(messages) {
                for(let i=0; i<messages.length; i++) {
                    this.currentAgentHistoryObj.messages.push(this.currentAgentObj[messages[i]]);
                    this.lastChat = this.currentAgentObj[messages[i]];
                }
                
            },
            updateAgent: function() {
                let currentChat = _.find(this.chatHistory,(c) => {
                    return c.agent == this.currentAgent
                })
                if(!currentChat) {
                    let firstKey = Object.keys(chats[this.currentAgent])[0];
                    let obj = {
                        messages:[chats[this.currentAgent][firstKey]],
                        agent:this.currentAgent
                    }
                    this.chatHistory.push(obj);
                    this.lastChat = obj.messages[0];

                    this.currentAgentObj = chats[this.currentAgent];
                    this.currentAgentHistoryObj = _.find(this.chatHistory,(c) => {
                        return c.agent == this.currentAgent
                    })
                } else {
                    let chatLength = currentChat.messages.length
                    this.currentAgentObj = chats[this.currentAgent];
                    this.currentAgentHistoryObj = currentChat;
                    this.lastChat = currentAgentHistoryObj.messages[chatLength-1]

                }
            }
        },
        computed: {
            availableChatButtons() {
                let buttons = [];
                if(this.lastChat && this.lastChat.chatButtonOptions) {
                    let currentOptions = this.lastChat.chatButtonOptions
                    for(let i=0; i<currentOptions.length; i++) {
                        if(this.currentAgentObj[currentOptions[i]])
                            buttons.push(this.currentAgentObj[currentOptions[i]])
                    }
                }
                return buttons;
            },
            toAnimate() {
                return this.$refs.chatScreenMessages ? this.$refs.chatScreenMessages : [];
            },
            chatBoxStyle() {
                return {
                    height: this.toggle.height+'px'
                }
            }
        },
        components: {
            chatbubbles,
            chatButton
        },
        watch: {
            //update current currentAgent
            currentAgent:function() {
                this.updateAgent();
            },
            lastChat:function() {
                let scrollable = document.getElementById('scrollable');
                let shouldScroll = scrollable.scrollTop + scrollable.clientHeight === scrollable.scrollHeight;
                if(!shouldScroll) scrollable.scrollTop = scrollable.scrollHeight
                
            },
            startChat: function() {
                this.updateAgent();
            }
        },
        mounted() {
            //this.updateAgent();
            this.timeline.from(document.getElementById('parent'),{duration:3,y:-200,ease:"sine"})
            this.timeline.to(document.getElementById('parent'),{duration:3,x:100,ease:"sine"},"=-5")
            this.timeline.to(this.toggle,{duration:3,height:400,ease:"sine",onComplete: ()=>{
                this.$emit("animateStan",2);    
            }},"=-1")
        }
    }
</script>
<style scoped>
    #parent {
    }
    #scrollable{
        height: 70%;
        width: 100%;
        overflow-y: hidden;
    }
    #background {
        background-color: rgb(238, 238, 238);;
        border-radius: 15px;
        height: 100%;
        width: 100%;
    }
    .separator {
        height: 0.5px;
        width: 100%;
        background-color: rgb(218, 169, 124);
    }
</style>