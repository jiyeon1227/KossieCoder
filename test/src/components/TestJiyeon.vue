<template>
    <div>
        <p>header</p>
        <slot name="header" :StringJiyeon="jiyeon"></slot> <!-- :원하는속성="데이터" -> 그럼 이 데이터가 부모컴포넌트로 올라감 -->
        <p>body</p>
        <slot></slot>
        <p>footer</p>
    </div>
</template>

<script>
export default {

    data() {
        return {
            jiyeon : "test jiyeon"
        }
    }
}
</script>

<style scoped>

</style>