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
            <Table :member="member" />
        </v-card-text>
    </v-card>
</template>

<script>
import Table from '../../components/core/Table.vue';
import member from '../../utils/member.json';

export default {
    name: 'List',
    components: {
        Table
    },
    computed: {
        member() {
            return member;
        }
    }
};
</script>
