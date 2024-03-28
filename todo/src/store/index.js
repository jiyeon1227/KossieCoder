import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        // 모듈이름: 사용할 이름
        // todo: todo,
        // user: user
        // 모듈이름이랑 사용할 이름이랑 같으면 생략 가능
        todo,
        user
    }
});