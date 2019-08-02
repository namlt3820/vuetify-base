<template>
    <v-card>
        <v-card-text>
            <v-card class="title-grid" color="primary">
                <v-card-title>
                    <div>
                        <h3 class="headline t1">Simple Table</h3>
                        <div class="t2">Here is a subtitle for this table</div>
                    </div>
                    <div>
                        <v-btn color="success" text>Add Member</v-btn>
                    </div>
                </v-card-title>
            </v-card>
            <v-data-table
                :headers="headers"
                :items="desserts"
                :loading="true"
                @page-count="pageCount = $event"
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
            <Pagination :pageCount="pageCount" @page="page" @pagination="pagination" />
        </v-card-text>
    </v-card>
</template>

<script>
// @ is an alias to /src
import Pagination from '../../components/core/Pagination.vue';
import data from '../../data/data.json';

export default {
    name: 'List',
    data() {
        return {
            headers: [
                {
                    text: 'ID',
                    align: 'center',
                    sortable: false,
                    value: 'id'
                },
                { text: 'Name', value: 'name' },
                { text: 'Phone', value: 'phone' },
                { text: 'Email', value: 'email' },
                { text: 'Status', align: 'center', value: 'status' },
                { text: 'Actions', align: 'right', value: '', sortable: false }
            ],
            desserts: [],
            pageCount: 0,
            perpage: 0
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
            this.perpage = perpage;
            const newData = data.slice(0, perpage);
            this.desserts = newData;
        },
        page(page) {
            if (page === 1 || 0) {
                this.pagination(this.perpage);
            } else {
                const begin = (page - 1) * this.perpage;
                const end = page * this.perpage;
                const newData = data.slice(begin, end);
                this.desserts = newData;
            }
        }
    }
};
</script>
