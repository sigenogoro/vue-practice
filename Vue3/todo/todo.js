const todoList = {
    data(){
        return {
            addtext: "",
            todos: [
                { done: false, text: "Vue.js を知る" },
                { done: false, text: "Vue.js で todo アプリを作成" },
                { done: false, text: "github へコミット" }
            ]
        }
    },
    computed: {
        remaining: function(){
            return this.todos.filter(function(val){
                return val.done == true;
            }).length;
        }
    },
    methods: {
        addToDo: function(){
            if(this.addtext){
                this.todos.push({done: false, text: this.addtext});
                this.addtext = "";
            }
        },
        cleanToDo: function(){
            this.todos = this.todos.filter(function(val){
                return val.done == false
            })
        }
    }
}

const app = Vue.createApp(todoList)
app.mount("#app")