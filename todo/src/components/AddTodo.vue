<template>
     <input v-model="todoText" type="text" class="w-100 p-2" placeholder="Type Todo" 
      @keyup.enter="addTodo">
</template>

<script>
export default {
    data(){
        return {
        todoText:"",
        }
    },
    methods :{
        addTodo(e){
            // mutations 사용
            // this.$store.commit("ADD_TODO", e.target.value); // (mutations에서 원하는 함수이름, vlaue)

            // actions 사용 (모듈 사용하면 모듈명/ 을 해줘야함)
            this.$store.dispatch("todo/addTodo", e.target.value);
            
            this.todoText="";
        }
    }
}
</script>

<style>

</style>