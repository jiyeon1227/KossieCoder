<template>
    <div>
        Completed Todos: {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    computed : { // store에서 가져올 때는 computed에서 가져와야함
        numberOfCompletedTodo(){

            // 모듈 사용 안했을 때
            // return this.$store.getters.numberOfCompletedTodo;

            // 모듈 사용할 때
            return this.$store.getters["todo/numberOfCompletedTodo"];
        }
    }
}
</script>

<style>

</style>