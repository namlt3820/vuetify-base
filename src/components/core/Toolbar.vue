<template>
    <v-app-bar color="rgb(29, 41, 57)" dark>
        <v-app-bar-nav-icon @click.stop="status = !status"></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu
            :close-on-content-click="false"
            :nudge-width="200"
            nudge-right
            offset-y
            v-model="menu"
        >
            <template v-slot:activator="{ on }">
                <v-avatar color="teal" v-on="on">
                    <span class="white--text headline">C</span>
                </v-avatar>
            </template>

            <v-card max-width="344" class="mx-auto popup-user">
                <v-layout py-4 pl-4>
                    <v-flex shrink>
                        <v-img
                            height="200"
                            width="200"
                            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                        ></v-img>
                    </v-flex>
                    <v-flex text-center>
                        <v-container grid-list-lg pa-0>
                            <v-layout column>
                                <v-flex>
                                    <v-btn icon>
                                        <v-icon>mdi-heart</v-icon>
                                    </v-btn>
                                </v-flex>
                                <v-flex>
                                    <v-btn icon>
                                        <v-icon>mdi-bookmark</v-icon>
                                    </v-btn>
                                </v-flex>
                                <v-flex>
                                    <v-btn @click="logout" class="btn-logout" color="error" text>
                                        Logout
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>
<script>
export default {
    name: 'Toolbar',
    props: ['drawer'],
    event: 'changeDrawer',
    data() {
        return {
            status: this.drawer,
            fav: true,
            menu: false,
            message: false,
            hints: true,
            items: [{ title: 'Click 1', to: '/' }, { title: 'Click 2', to: '/' }]
        };
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters['auth/isLoggedIn'];
        }
    },
    created() {
        // console.log("isLoggedIn", this.isLoggedIn);
    },
    watch: {
        drawer(val) {
            this.status = val;
        },
        status(val) {
            this.$emit('changeDrawer', val);
        }
    },
    methods: {
        logout() {
            window.localStorage.removeItem('jwt');
            this.$store.dispatch('auth/logout');
        }
    }
};
</script>
