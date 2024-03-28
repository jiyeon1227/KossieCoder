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
        toggleCheckbox(e){
            this.$emit("toggle-Checkbox",{ // 부모 컴포넌트로 값 보내기
                id :this.todo.id,
                checked : e.target.checked
            })
        },
        clickDelete(){
            this.$emit("click-delete", this.todo.id);
        }
    }
}
</script>