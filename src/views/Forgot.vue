<template>
    <v-content class="login-content fill-height">
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
                                label="Username"
                                name="login"
                                prepend-icon="person"
                                type="text"
                                v-model="loginInfo.username"
                            ></v-text-field>
                            <v-text-field
                                :rules="[rules.required]"
                                id="password"
                                label="Password"
                                name="password"
                                prepend-icon="lock"
                                type="password"
                                v-model="loginInfo.password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :disabled="!valid" @click="login" color="success">Login</v-btn>
                        <v-btn @click color="success">Register</v-btn>
                        <a to="/forgot-password">Forgot password</a>
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
export default {
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
.login-content .v-card__actions {
    justify-content: center;
    padding-bottom: 15px;
}
</style>
