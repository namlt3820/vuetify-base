<template>
    <date-picker
        v-model="range"
        lang="en"
        range
        type="date"
        format="YYYY-MM-DD"
        placeholder="Select Date"
        width="500"
        confirm
        editable="'false'"
    >
        ></date-picker
    >
</template>

<script>
import DatePicker from 'vue2-datepicker';

export default {
    components: {
        DatePicker
    },
    data() {
        return {
            range: ''
        };
    }
};
</script>
