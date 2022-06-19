const app = Vue.createApp({})

app.component("button-co",{
    data(){
        return {
            count: 0
        }
    },
    template:`<button v-on:click="count++">You clicked me {{ count }} time. </button>`
})

app.mount("#components-demo")