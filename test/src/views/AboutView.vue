<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TestJiyeon>
      <!-- 축약형 <template #header> -->
      <template v-slot:header="jiyeon"> <!-- ="받은 데이터 변수명" -->
        <h1>name이 header인 slot에 들어감 {{ jiyeon.StringJiyeon }}</h1> <!-- 변수명.속성(속성은 자식컴포넌트에서 작성했던거 적어야됨) -->
      </template>
      <template v-slot:default>
        <h1>slot에 name이 없는곳에 들어감</h1>
      </template>
    </TestJiyeon>
  </div>
</template>

<script>
import TestJiyeon from '@/components/TestJiyeon.vue'

export default {
  components : {
    TestJiyeon
  }
}
</script>
