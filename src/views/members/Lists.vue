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
            <v-data-table :headers="headers" :items="desserts" :loading="true">
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
        </v-card-text>
    </v-card>
</template>

<script>
// @ is an alias to /src

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
            desserts: [
                {
                    id: 1,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 2,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 3,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 4,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 5,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 6,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 7,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 8,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 9,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                },
                {
                    id: 10,
                    name: 'Frozen Yogurt',
                    phone: 159,
                    email: 6.0,
                    status: 24
                }
            ]
        };
    },
    created() {},
    components: {}
};
</script>
