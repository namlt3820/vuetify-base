<template>
    <v-card>
        <v-card-text>
            <v-card class="title-grid" color="primary">
                <v-card-title>
                    <div>
                        <h3 class="headline t1">Simple Table</h3>
                        <div class="t2">Here is a subtitle for this table</div>
                    </div>
                </v-card-title>
            </v-card>
            <v-flex>
                <v-layout flex row>
                    <v-flex xs2>
                        <v-subheader>Mpoint</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <v-text-field
                            :error-messages="errors.collect('nameCustomer')"
                            data-vv-name="nameCustomer"
                            label="Mpoint"
                            required
                            v-model="nameCustomer"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                        <v-subheader>Bộ mã ID</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <v-text-field
                            :error-messages="errors.collect('id3G')"
                            data-vv-name="id3G"
                            label="ID cấp 3G"
                            required
                            v-model="id3G"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="errors.collect('id2G')"
                            data-vv-name="id2G"
                            label="ID cấp 2G"
                            required
                            v-model="id2G"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="errors.collect('idG')"
                            data-vv-name="idG"
                            label="ID cấp G"
                            required
                            v-model="idG"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="errors.collect('idShop')"
                            data-vv-name="idShop"
                            label="ID Shop"
                            required
                            v-model="idShop"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                        <v-subheader>Lĩnh vực</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <v-combobox
                            :items="itemsChips"
                            hide-selected
                            label="I use a scoped slot"
                            multiple
                            small-chips
                            v-model="selectChips"
                        >
                            <template
                                v-slot:selection="{ attrs, item, parent, selected, disabled }"
                            >
                                <v-chip
                                    :disabled="disabled"
                                    :input-value="selected"
                                    :key="JSON.stringify(item)"
                                    @click:close="parent.selectItem(item)"
                                    small
                                    v-bind="attrs"
                                >
                                    <span style="padding-right: 8px;">{{ item }}</span>
                                    <v-icon @click="parent.selectItem(item)" small>mdi</v-icon>
                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex>
                        <v-subheader>Thông tin điểm</v-subheader>
                    </v-flex>
                </v-layout>
                <v-layout align-center flex row>
                    <v-flex xs2>
                        <v-subheader>Tên loại điểm</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <v-text-field
                            :error-messages="errors.collect('nameMpoint')"
                            data-vv-name="nameMpoint"
                            label="Mpoint"
                            required
                            v-model="nameMpoint"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                        <v-subheader>Quy đổi điểm</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <v-text-field
                            :error-messages="errors.collect('point')"
                            data-vv-name="point"
                            label="Point"
                            required
                            v-model="point"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="errors.collect('vnd')"
                            data-vv-name="vnd"
                            label="VND"
                            required
                            v-model="vnd"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex>
                        <v-subheader>Thông tin hiển thị</v-subheader>
                    </v-flex>
                </v-layout>
                <v-layout align-center flex row>
                    <v-flex xs2>
                        <v-subheader>Ảnh</v-subheader>
                    </v-flex>
                    <v-flex xs2>
                        <v-avatar color="teal" size="130">
                            <span class="white--text headline">Avatar</span>
                        </v-avatar>
                    </v-flex>
                    <v-flex xs3>
                        <v-subheader>Ảnh logo.</v-subheader>
                    </v-flex>
                    <v-flex xs2>
                        <v-avatar color="teal" size="130">
                            <span class="white--text headline">Avatar</span>
                        </v-avatar>
                    </v-flex>
                    <v-flex xs3>
                        <v-subheader>Ảnh logo</v-subheader>
                    </v-flex>
                    <v-flex xs2>
                        <v-subheader>Mô tả</v-subheader>
                    </v-flex>
                    <v-flex text-center xs9>
                        <v-btn class="my-2" color>Mpoint- Chương trình điểm của MobiFone</v-btn>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex>
                        <v-subheader>Thông tin tham khảo/ liên hệ</v-subheader>
                    </v-flex>
                </v-layout>
                <v-layout align-center flex row>
                    <v-flex xs2>
                        <v-subheader>Website đối tác</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <v-text-field
                            :error-messages="errors.collect('website')"
                            data-vv-name="website"
                            label="Website"
                            required
                            v-model="website"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                        <v-subheader>Website đối tác</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <v-text-field
                            :error-messages="errors.collect('phone')"
                            data-vv-name="phone"
                            label="Số điện thoại"
                            required
                            v-model="phone"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex text-center>
                        <v-btn class="my-2" small>Hủy bỏ</v-btn>
                        <v-btn class="my-2" color="primary" small>Cập nhật</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-card-text>
    </v-card>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Add',
    data() {
        return {
            nameCustomer: '',
            id3G: '',
            id2G: '',
            idG: '',
            idShop: '',
            selectChips: ['Vuetify', 'Programming'],
            itemsChips: ['Programming', 'Design', 'Vue', 'Vuetify'],
            nameMpoint: '',
            point: 1,
            vnd: 1000,
            website: '',
            phone: ''
        };
    },
    created() {},
    components: {}
};
</script>
