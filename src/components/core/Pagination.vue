<template>
    <v-layout align-center d-flex justify-end>
        <v-flex d-flex sm1 xs1>
            <v-select :items="items" @change="changeLimitData()" v-model="perpage"></v-select>
        </v-flex>
        <div class="text-center pt-2">
            <v-pagination :length="6" :total-visible="5" v-model="page"></v-pagination>
        </div>
    </v-layout>
</template>

<script>
// import data from '../../data/data.json';

export default {
    name: 'Pagination',
    props: ['pageCount'],
    data() {
        return {
            page: 1,
            items: [2, 5, 10, 20],
            perpage: 5
        };
    },
    methods: {
        changeLimitData() {
            this.$emit('pagination', this.perpage);
        }
    },
    watch: {
        page() {
            this.$emit('page', this.page);
        }
    }
};
</script>
