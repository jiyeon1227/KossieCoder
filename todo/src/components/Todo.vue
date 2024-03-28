<template>
    <div class="mb-2 d-flex" >
        <div>
            <input type="checkbox" 
            :checked="todo.checked" 
            @change="toggleCheckbox">
        </div>
    
        <!-- 클라스, 스타일 바인딩 -->
        <span class="ml-3 flex-grow-1"
            :class="todo.checked ? 'text-muted' : '' " 
            :style="todo.checked ? 'text-decoration:line-through' : ''">
            {{todo.text}}
        </span>

      <button class="btn btn-danger btn-sm" 
        @click="clickDelete">Delete</button>
        
    </div>
</template>

<script>
export default {
    props : {
        todo : {
            type : Object,
            required : true
        }
    },

    methods : {
        // actionds 사용 (모듈을 사용하면 앞에 모듈이름을 적어야함)
        toggleCheckbox(e){
            this.$store.dispatch("todo/toggleTodo",{id : this.todo.id, checked : e.target.checked})
        },
        clickDelete(){
            this.$store.dispatch("todo/deleteTodo", this.todo.id);
        }

        // mutations 사용
        // toggleCheckbox(e){
        //     this.$store.commit("TOGGLE_TODO", {id : this.todo.id, checked : e.target.checked})
        // },
        // clickDelete(){
        //     this.$store.commit("DELETE_TODO", this.todo.id);
        // }
    },
    computed : {
        numberOfCompletedTodo(){
            // 모듈사용 안했을때
            // return this.$store.getters.numberOfCompletedTodo;

            // 모듈사용할 때 (todo는 모듈이름)
            return this.$store.getters["todo/numberOfCompletedTodo"];
        }
    }
}
</script>