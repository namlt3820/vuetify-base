<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
            <v-flex class="style-header-grid" md12 sm12>
                <router-view></router-view>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Check-In',
    data() {
        return {};
    },
    created() {},
    components: {}
};
</script>
