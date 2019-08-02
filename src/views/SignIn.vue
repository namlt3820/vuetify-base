<template>
    <v-content class="login-page fill-height">
        <v-container fill-height fluid>
            <v-layout align-center justify-center>
                <v-card class="elevation-12" max-width="100%" width="400px">
                    <v-toolbar class="title-login" color="primary" dark height="50">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                                :rules="[rules.required, rules.email]"
                                autofocus
                                label="Username"
                                name="login"
                                prepend-icon="mdi-account"
                                type="text"
                                v-model="loginInfo.username"
                                v-on:keyup.13="login"
                            ></v-text-field>
                            <v-text-field
                                :rules="[rules.required]"
                                id="password"
                                label="Password"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                                v-model="loginInfo.password"
                                v-on:keyup.13="login"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :disabled="!valid" @click="login" color="success">Login</v-btn>
                        <!-- <v-btn color="success">Register</v-btn>
                        <v-btn color="primary" text>Forgot password</v-btn>-->
                    </v-card-actions>
                    <div class="card-bottom">
                        <a href="/">Forgot password</a> -
                        <a href="/">Register</a>
                    </div>
                </v-card>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
import store from '../store/index';

export default {
    beforeRouteEnter(to, from, next) {
        // console.log(3);
        if (store.getters['auth/isLoggedIn']) {
            next(vm => {
                if (vm.$route.query.redirect) {
                    vm.$router.push(vm.$route.query.redirect);
                } else {
                    vm.$router.push('/');
                }
            });
        } else {
            next();
        }
    },
    data() {
        return {
            valid: false,
            loginInfo: {
                username: '',
                password: ''
            },
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.';
                }
            }
        };
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        login() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('auth/login', this.loginInfo);

                if (this.$route.query.redirect) {
                    this.$router.push(this.$route.query.redirect);
                } else {
                    this.$router.push('/');
                }
            }
        }
    },
    components: {}
};
</script>
<style>
.title-login .v-toolbar__title {
    width: 100%;
    text-align: center;
}
.login-page .v-card__actions {
    justify-content: center;
    padding-bottom: 15px;
}
.login-page .card-bottom {
    text-align: center;
    padding-bottom: 8px;
}
.login-page .card-bottom a {
    text-decoration: unset;
    font-size: 13px;
}
</style>
