<template>
    <div class="relative">
            <input
            type="date"
            placeholder="Date"
            class="milkstore04-text flex justify-center text-xs minimal-y-padding border border-custom-700 focus:outline-none focus:border-blue-500  text-xl w-full"
            v-model="dateValue"
            @input="emitValue"
            />
        </div>
</template>

<style lang="css">
@import "../src/assets/css/general-styles.css";
    .minimal-y-padding{
        padding-top: 10px;
        padding-bottom: 10px;
    }

</style>


<script>
export default {
    props: ['options','text_type','default_caption','type'],
    components: {
    },
    data() {
        return {
            dateValue: ''
        };
    },
    methods: {
        emitValue() {
            this.$emit('dateValue', this.dateValue);
        }
    }
};
</script>