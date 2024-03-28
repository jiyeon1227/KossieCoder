<template>
  <div id="app" class="container">
    <h1 class="text-center">ToDo App</h1>
    <input v-model="todoText" type="text" class="w-100 p-2" placeholder="Type Todo" 
      @keyup.enter="addTodo">
    <hr>
    <Todo v-for="todo in todos" 
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
  components:{
    Todo
  },

  data(){
    return{
      todoText:"",
      todos:[
        {id : 1, text : "buy a car", checked: false},
        {id : 2, text : "buy a phone", checked: false}
      ]
    }
  },

  methods:{
    addTodo(e){
      console.log(e.target.value);
      this.todos.push({
        id : Math.random(), // 순서를 정할수가 없어서 랜덤값으로
        text: e.target.value,
        checked : false
      })
      this.todoText=""; // 리스트에 추가되면 입력칸 비우기
    },
    toggleCheckbox({id, checked}){ // {}는 구조분해 할당(원하는거만 빼올 수 있음)
      console.log(id, checked);
      const index = this.todos.findIndex(todo => { // findIndex는 인덱스를 찾아주는 함수
        return todo.id === id;
      });
      this.todos[index].checked = checked; // Todo.vue에있는checked값으로 설정
    },
    deletetodo(id){
      // 방법 1. 인덱스 사용
      const index= this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos.splice(index,1);

      // 방법 2. 필터 사용
      // this.todos =  this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

<style>

</style>
