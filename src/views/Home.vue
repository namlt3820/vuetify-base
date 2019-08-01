<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
            <v-flex md12 sm12>
                Home
                <router-link to="/sign-in">Go to Login</router-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'home',
    data() {
        return {};
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters['auth/isLoggedIn'];
        }
    },
    created() {
        // console.log(this.isLoggedIn);
    },

    components: {}
};
</script>
