<template>
    <div>
        <Todo 
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo" 
            @toggle-Checkbox="toggleCheckbox"
            @click-delete="deletetodo">
        </Todo>
    </div>
</template>

<script>
import Todo from "@/components/Todo.vue"

export default {
    components : {
        Todo
    },
    computed : {
        todos(){
            // 모듈을 사용안했을때
            // return this.$store.state.todos;

            // 모듈을 사용할 때
            return this.$store.state.todo.todos;
        }
    },
    methods:{
        toggleCheckbox(e){
            this.$emit("toggle-Checkbox",{
                id :this.todo.id,
                checked : e.target.checked
            })
        },
        deletetodo(){
            this.$emit("click-delete", this.todo.id);
        }
    }
}
</script>

<style>

</style>