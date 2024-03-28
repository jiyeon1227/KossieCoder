<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="updateName()">submit</button>
  </div>
</template>

<script>
export default {

    data(){ 
        return {
            name : "jiyeon"
        }
    },

    beforeCreate(){
        console.log("beforeCreate", this.name); // 인스턴스 생성전에는 데이터 접근 불가
    },
    created(){
        console.log("created", this.name); // 여기서부터 데이터 접근 가능
    },
    beforeMount(){
        alert("beforeMount");
    },
    mounted(){
        alert("mounted"); // DOM을 컨트롤 하고싶을때는 mounted에서 하면됨
    },
    beforeUpdate(){
        alert("beforeUpdate");
    },
    updated(){
        alert("updated");
    },
    beforeDestroy(){ // 다른 페이지로 넘어가려면 새로운 컴포넌트가 생성되기때문에 파괴됨
        alert("beforeDestroy");
    },
    destroyed(){
        alert("destroyed");
    },

    methods: {
        updateName(){
            this.name = "hi jiyeon";
        }
    }
}
</script>

<style scoped>
h1 {
    color: skyblue;
}
</style>