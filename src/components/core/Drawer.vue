<template>
    <v-navigation-drawer app v-model="status">
        <div class="logo-page">
            <img src="@/assets/logo.png" title="Point Hub v2.0" />
            <div class="text-logo">Point Hub v2.0</div>
        </div>

        <v-list class="list-menu-left" dense>
            <template v-for="item in items">
                <v-list-item :key="item.title" :to="item.to" v-if="!item.items">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group :key="item.title" :prepend-icon="item.icon" v-else>
                    <template v-slot:activator>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </template>
                    <v-list-item :key="item2.title" :to="item2.to" v-for="item2 in item.items">
                        <v-list-item-action>
                            <v-icon>{{ item2.icon }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{ item2.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    name: 'Drawer',
    props: ['drawer'],
    event: 'changeDrawer',
    data() {
        return {
            status: this.drawer,
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
                {
                    title: 'Quản lý hội viên',
                    icon: 'mdi-account-badge-horizontal',
                    to: '/member',
                    items: [
                        {
                            title: 'Danh sách hội viên',
                            to: '/member/lists'
                        },
                        {
                            title: 'Thêm hội viên',
                            to: '/member/add'
                        }
                    ]
                },
                {
                    title: 'Quản lý đối tác',
                    icon: 'mdi-account-group',
                    to: '/customer'
                },
                {
                    title: 'Quản lý hoạt động người dùng',
                    icon: 'mdi-account-convert',
                    to: '/user-actions'
                },
                { title: 'Ưu đãi và quảng cáo', icon: 'mdi-view-dashboard', to: '/advertisement' },
                { title: 'Hiệu quả hoạt động', icon: 'mdi-view-dashboard', to: '/powerful' },
                { title: 'Quản lý tích điểm', icon: 'mdi-view-dashboard', to: '/points' },
                { title: 'Quản lý hệ thống', icon: 'mdi-view-dashboard', to: '/systems' },
                { title: 'Thiết lập tài khoản', icon: 'mdi-view-dashboard', to: '/user-configs' }
            ]
        };
    },
    watch: {
        drawer(val) {
            this.status = val;
            this.$emit('changeDrawer', val);
        },
        status(val) {
            this.$emit('changeDrawer', val);
        }
    }
};
</script>
