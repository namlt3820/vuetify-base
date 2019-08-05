<template>
    <v-layout column px-5>
        <v-flex style="border: 1px solid black">
            <h2>Tạo cửa hàng</h2>
        </v-flex>
        <v-flex class="pa-4" style="border: 1px solid black; border-top: none;">
            <div class="pa-6">
                <v-container>
                    <v-layout align-center>
                        <v-flex xs4 sm-3>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Tên đối tác</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field v-model="name" class="font-weight-bold"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs4 sm-3 mt-6>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Bộ mã</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field label="ID cấp 3G"></v-text-field>
                            <v-text-field label="ID cấp 2G"></v-text-field>
                            <v-text-field label="ID cấp G"></v-text-field>
                            <v-text-field label="ID Shop"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center>
                        <v-flex xs4 sm-3>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Lĩnh vực</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field></v-text-field>
                        </v-flex>
                    </v-layout>
                    <h2>Thông tin điểm</h2>
                    <hr />
                    <v-layout align-center>
                        <v-flex xs4 sm-3>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Tên loại điểm</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field label="Mpoint"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center>
                        <v-flex xs4 sm-3>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Quy đổi điểm</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field label="Point"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center>
                        <v-flex xs4 sm-3>
                            <p class="mb-0 text-right mr-10 font-weight-bold">
                                1 điểm tương ứng với
                            </p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field label="VNĐ"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <h2>Thông tin chi tiết</h2>
                    <hr />
                    <v-layout align-center>
                        <v-flex xs4 sm-3>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Số điện thoại</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center>
                        <v-flex xs4 sm-3>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Giờ làm việc</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field label="HH:MM đến HH:MM"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs4 sm-3 mt-6>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Vùng</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-select :items="provinces" placeholder="Tỉnh/Thành phố"></v-select>
                            <v-select :items="districts" placeholder="Quận/Huyện"></v-select>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs4 sm-3 mt-6>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Toạ độ</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field label="Kinh độ"></v-text-field>
                            <v-text-field label="Vĩ độ"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center>
                        <v-flex xs4 sm-3>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Website cửa hàng</p>
                        </v-flex>
                        <v-flex xs8 sm-9>
                            <v-text-field></v-text-field>
                        </v-flex>
                    </v-layout>
                    <h2>Thông tin hiển thị</h2>
                    <hr />
                    <v-layout>
                        <v-flex xs2 sm-3 mt-6>
                            <p class="mb-0 text-right mr-10 font-weight-bold">Ảnh</p>
                        </v-flex>
                        <v-flex xs5>
                            <v-layout column>
                                <v-flex><v-file-input label="Ảnh logo"></v-file-input></v-flex>
                                <v-flex>
                                    <p class="px-4">
                                        Hệ thống chỉ chấp nhận file PNG, JPG, JPEG. Dung lượng nhỏ
                                        hơn 3MB
                                    </p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs5>
                            <v-layout column>
                                <v-flex
                                    ><v-file-input label="Ảnh giới thiệu"></v-file-input
                                ></v-flex>
                                <v-flex>
                                    <p class="px-4">
                                        Hệ thống chỉ chấp nhận file PNG, JPG, JPEG. Dung lượng nhỏ
                                        hơn 3MB
                                    </p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
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
            name: '',
            provinces: ['Tỉnh 1', 'Tỉnh 2', 'Tỉnh 3', 'Tỉnh 4'],
            districts: ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4']
        };
    }
};
</script>
