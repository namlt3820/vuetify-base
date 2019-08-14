<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
            <v-flex md12 sm12>
                Home
                <router-link to="/sign-in">Go to Login</router-link>
                <br />
                <br />
                <date-range-picker></date-range-picker>
                <br />
                <CKFinder></CKFinder>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import DateRangePicker from '../components/core/DateRangePicker';
import CKFinder from '../components/core/CKFinder';

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

    components: { DateRangePicker, CKFinder }
};
</script>
