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
                    <template v-for="item2 in item.items">
                        <v-list-item :key="item2.title" :to="item2.to" v-if="!item2.items">
                            <v-list-item-action>
                                <v-icon>{{ item2.icon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>{{ item2.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-group sub-group :key="item2.title" v-else>
                            <template v-slot:activator>
                                <v-list-item-title>{{ item2.title }}</v-list-item-title>
                            </template>

                            <v-list-item
                                :key="item3.title"
                                :to="item3.to"
                                v-for="item3 in item2.items"
                            >
                                <v-list-item-action>
                                    <v-icon>{{ item3.icon }}</v-icon>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item3.title }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </template>
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
                    to: '/customer',
                    items: [
                        {
                            title: 'Danh sách đối tác',
                            to: '/customer/lists'
                        },
                        {
                            title: 'Thêm đối tác',
                            to: '/customer/add'
                        },
                        {
                            title: 'Chi tiết cửa hàng',
                            to: '/customer/detail'
                        }
                    ]
                },
                {
                    title: 'Promotion Campaign',
                    icon: 'mdi-account-group',
                    to: '/promotion-campaign',
                    items: [
                        {
                            title: 'Quản lý Check-in',
                            icon: 'mdi-account-group',
                            items: [
                                {
                                    title: 'Thêm check-in',
                                    to: '/promotion-campaign/check-in/add'
                                }
                            ]
                        },
                        {
                            title: 'Quản lý Minigame',
                            icon: 'mdi-account-group',
                            items: [
                                {
                                    title: 'Thêm minigame',
                                    to: '/promotion-campaign/minigame/add'
                                }
                            ]
                        }
                    ]
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
