const watchExampleVM = {
    data(){
        return {
            question4: "",
            answer: "Questions usually contain a question mark. ;-)"
        }
    },
    watch: {
        question4(newQuestion, oldQuestion){
            if(newQuestion.indexOf("?") > -1){
                this.getAnswer()
            }
        }
    },
    methods: {
        getAnswer(){
            this.answer = "Thinking...."
            axios.get("https://yesno.wtf/api").then(response => {
                this.answer = response.data.answer
            })
            .catch(error => {
                this.answer = "Error! Could not reach the API." + error
            })
        }
    }
}

const app = Vue.createApp(watchExampleVM)

app.mount("#watch-example")