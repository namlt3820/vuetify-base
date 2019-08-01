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
    name: 'about',
    data() {
        return {};
    },
    created() {},
    components: {}
};
</script>
<style>
.style-header-grid {
    margin-top: 40px;
}
.style-header-grid .title-grid {
    color: #fff;
}
.style-header-grid .title-grid .t1 {
    font-size: 18px !important;
}
.style-header-grid .title-grid .t2 {
    font-size: 14px;
}
.style-header-grid .title-grid {
    margin-top: -40px;
}
.style-header-grid .title-grid .v-card__title {
    justify-content: space-between;
}
.style-header-grid .title-grid .v-btn {
    text-transform: initial;
}
</style>
