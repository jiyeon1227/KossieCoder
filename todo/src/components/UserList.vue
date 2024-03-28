<template>
    <div>
        User List
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
// maphelper 함수 (구조분해로 원하는걸 가져옴)
import { mapState,mapActions } from 'vuex';

export default {
    created(){
        this.getUsers();
    },
    computed : {
        // maphelper사용
        // 모듈 사용 안할 때
        // ...mapState([
        //     "todos",
        //     "users"
        // ])

        // 모듈 사용할 때
        ...mapState("user", {
            users: state => state.users
        })
        
        // 아래 users(), todos()를 위에 maphelper로 한번에 쓸 수 있음
        // users(){
        //     return this.$store.state.users;
        // },
        // todos(){
        //     return this.$store.state.todos;
        // }
    },
    methods : {
        // maphelper사용 (모듈을 사용하면 array앞에 모듈이름을 써주면 됨)
        ...mapActions("user", ["getUsers"])

        // getUsers(){
        //     this.$store.dispatch("getUsers");
        // }
    }
}
</script>