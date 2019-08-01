<template>
    <v-app>
        <div v-if="isLoggedIn">
            <core-drawer :drawer="drawer" v-on:changeDrawer="changeDrawer" />
            <v-content>
                <core-toolbar :drawer="drawer" v-on:changeDrawer="changeDrawer" />

                <core-view />
            </v-content>
        </div>
        <div class="fill-height" v-else>
            <core-view />
        </div>
    </v-app>
</template>

<script>
import CoreToolbar from '@/components/core/Toolbar';
import CoreDrawer from './components/core/Drawer';
import CoreView from './components/core/View';

export default {
    name: 'App',
    components: { CoreToolbar, CoreDrawer, CoreView },
    data: () => ({
        drawer: null
    }),
    computed: {
        isLoggedIn() {
            return this.$store.getters['auth/isLoggedIn'];
        }
    },
    methods: {
        changeDrawer(drawer) {
            this.drawer = drawer;
        }
    }
};
</script>
