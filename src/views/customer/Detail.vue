<template>
    <v-layout column px-5>
        <v-flex style="border: 1px solid black">
            <h2>Chi tiết cửa hàng</h2>
        </v-flex>
        <v-flex class="pa-4" style="border: 1px solid black; border-top: none;">
            <div class="text-right">
                <div class="d-inline-block mr-3">
                    <v-btn right> <v-icon left>mdi-square-edit-outline</v-icon>Chỉnh sửa </v-btn>
                </div>
                <div class="d-inline-block mr-3">
                    <v-btn right> <v-icon left>mdi-content-copy</v-icon>Sao chép </v-btn>
                </div>
                <div class="d-inline-block mr-3">
                    <v-btn outlined right color="red lighten-1 white--text">
                        <v-icon left>mdi-cancel</v-icon>Chặn
                    </v-btn>
                </div>
                <div class="d-inline-block">
                    <v-btn right color="blue lighten-1 white--text">
                        <v-icon left>mdi-plus</v-icon>Tạo mới
                    </v-btn>
                </div>
            </div>

            <div class="pa-6">
                <h2>Hệ thống cửa hàng</h2>
                <hr />
                <v-layout>
                    <v-flex v-for="(item, index) in selectData" :key="index">
                        <v-select :items="item.value" :label="item.name"></v-select>
                    </v-flex>
                </v-layout>
                <v-layout column>
                    <v-flex v-for="(item, index) in stores" :key="index">
                        <v-card class="pa-6 mb-4">
                            <h3 class="mb-2">{{ index + 1 }}. {{ item.name }}</h3>
                            <v-layout>
                                <v-flex xs3>Lĩnh vực</v-flex>
                                <v-flex xs6>{{ item.field }}</v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex xs3>Website</v-flex>
                                <v-flex xs6>{{ item.website }}</v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex xs3>Địa chỉ</v-flex>
                                <v-flex xs6>{{ item.address }}</v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex xs3>Số điện thoại</v-flex>
                                <v-flex xs6>{{ item.phone }}</v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex xs3>Giờ mở cửa</v-flex>
                                <v-flex xs6>{{ item.opening }}</v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex xs3>Toạ độ</v-flex>
                                <v-flex xs6>{{ item.geolocation }}</v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Customer',
    data() {
        return {
            selectData: [
                {
                    name: 'Chọn chuỗi cửa hàng',
                    value: ['Chuỗi 1', 'Chuỗi 2', 'Chuỗi 3', 'Chuỗi 4']
                },
                {
                    name: 'Chọn cửa hàng',
                    value: ['Cửa hàng 1', 'Cửa hàng 2', 'Cửa hàng 3', 'Cửa hàng 4']
                },
                {
                    name: 'Tỉnh/Thành phố',
                    value: ['Tỉnh 1', 'Tỉnh 2', 'Tỉnh 3', 'Tỉnh 4']
                },
                {
                    name: 'Quận/Huyện',
                    value: ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4']
                }
            ],

            stores: [
                {
                    name: 'Kichi Kichi Big C',
                    field: 'Ẩm thực',
                    website: 'www.kichikichi.vn',
                    address: 'Tầng 1 Big C, 222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội',
                    phone: '02437868424',
                    opening: '9:00am- 9.00pm',
                    geolocation: '10.12435785:132.2016425352'
                },
                {
                    name: 'Kichi Kichi Big C',
                    field: 'Ẩm thực',
                    website: 'www.kichikichi.vn',
                    address: 'Tầng 1 Big C, 222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội',
                    phone: '02437868424',
                    opening: '9:00am- 9.00pm',
                    geolocation: '10.12435785:132.2016425352'
                },
                {
                    name: 'Kichi Kichi Big C',
                    field: 'Ẩm thực',
                    website: 'www.kichikichi.vn',
                    address: 'Tầng 1 Big C, 222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội',
                    phone: '02437868424',
                    opening: '9:00am- 9.00pm',
                    geolocation: '10.12435785:132.2016425352'
                },
                {
                    name: 'Kichi Kichi Big C',
                    field: 'Ẩm thực',
                    website: 'www.kichikichi.vn',
                    address: 'Tầng 1 Big C, 222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội',
                    phone: '02437868424',
                    opening: '9:00am- 9.00pm',
                    geolocation: '10.12435785:132.2016425352'
                }
            ]
        };
    },
    created() {},
    components: {}
};
</script>
