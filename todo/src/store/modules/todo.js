export default {
    namespaced : true,
    state: { // 데이터가 들어가는곳 (컴포넌트에서 data)
        todos:[
            {id : 1, text : "buy a car", checked: false},
            {id : 2, text : "buy a phone", checked: false}
          ]
    },
    mutations:{ // 데이터가 실질적으로 바뀌는곳 -> 함수를 작성하고 state변수를 변경
        ADD_TODO(state, value){
            state.todos.push({
                id : Math.random(),
                text: value,
                checked : false
              });
              state.todoText="";
        },

        TOGGLE_TODO(state,{id, checked}){ // 구조분해
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
              });
              state.todos[index].checked = checked;
        },

        DELETE_TODO(state, todoId){
            const index= state.todos.findIndex(todo => {
                return todo.id === todoId;
              });
              state.todos.splice(index,1);
        }
    },
    actions : { // 함수가 들어가는곳 (컴포넌트에서 methods)
        addTodo({commit}, value){
            /* 비동기 작업이 일어남 (axios.post()를 많이 사용) */
            setTimeout(function(){
                commit("ADD_TODO",value);
            }, 2000); // 2초후 작업 실행
        },
        toggleTodo({commit}, payload){
            setTimeout(function(){
                commit("TOGGLE_TODO",payload);
            }, 1000); // 0.5초후 작업 실행
        },
        deleteTodo({commit}, todoId){
            setTimeout(function(){
                commit("DELETE_TODO",todoId);
            }, 1000); // 0.5초후 작업 실행
        }
    },
    getters:{ // 컴포넌트에서 competed랑 비슷함
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}