<template>
    <div>
        <h2>first</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {},
    mounted(){
        console.log('start')
        this.$emit('opened','first')
    }
};
</script>
