<template>
    <div>
        <lable for="">Name</lable>
        <input 
            type="text" 
            :value="name" 
            style="padding: 30px; border: 2px solid green;"
            @input="updateName"
        >
    </div>
</template>

<script>
export default {
    props:{
        name:{
            type : String,
            required : true
        }
    },

    methods:{
        updateName(e){ // e는 이벤트를 말함
            console.log(e.target.value);
            this.$emit("update-name",e.target.value); // $emit으로 부모컴포넌트에 보냄 (원하는 이벤트이름, 보내고싶은 값)
        }
    }
}
</script>