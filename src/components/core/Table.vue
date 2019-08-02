<template>
    <div class="table-member">
        <v-data-table
            :headers="headers"
            :items="desserts"
            :loading="true"
            @page-count="paginations.pageCount = $event"
            hide-default-footer
        >
            <v-progress-linear color="blue" indeterminate v-slot:progress></v-progress-linear>
            <template v-slot:items="props">
                <td class="text-xs-center">{{ props.item.id }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.phone }}</td>
                <td class="text-xs-left">{{ props.item.email }}</td>
                <td class="text-xs-center">{{ props.item.status }}</td>
                <td class="text-xs-right">s</td>
            </template>
        </v-data-table>
        <Pagination :pageCount="paginations.pageCount" @page="page" @pagination="pagination" />
    </div>
</template>

<script>
// @ is an alias to /src
import Pagination from './Pagination.vue';
import data from '../../data/data.json';
import member from '../../utils/member.json';

export default {
    name: 'Table',
    data() {
        return {
            headers: member,
            desserts: [],
            paginations: {
                pageCount: 0,
                perpage: 0
            }
        };
    },
    mounted() {
        this.pagination(5);
    },
    components: {
        Pagination
    },
    methods: {
        pagination(perpage) {
            this.paginations.perpage = perpage;
            const newData = data.slice(0, perpage);
            this.desserts = newData;
        },
        page(page) {
            if (page === 1 || 0) {
                this.pagination(this.paginations.perpage);
            } else {
                const begin = (page - 1) * this.paginations.perpage;
                const end = page * this.paginations.perpage;
                const newData = data.slice(begin, end);
                this.desserts = newData;
            }
        }
    }
};
</script>
