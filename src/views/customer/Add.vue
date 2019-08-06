<template>
    <v-card>
        <!-- <v-card-text> -->
        <!-- <v-card class="title-grid" color="primary"> -->
        <!-- <v-card-title>
                    <div>
                        <h3 class="headline t1">Simple Table</h3>
                        <div class="t2">Here is a subtitle for this table</div>
                    </div>
        </v-card-title>-->
        <!-- </v-card> -->
        <v-flex style="border: 1px solid black">
            <h2>Tạo đối tác</h2>
        </v-flex>
        <v-flex style="border: 1px solid black; border-top: none;">
            <v-layout flex row>
                <v-flex xs2>
                    <p class="mb-0 text-right mr-10 font-weight-bold">Mpoint</p>
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
                    <p class="mb-0 text-right mr-10 font-weight-bold">Bộ mã ID</p>
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
                    <p class="mb-0 text-right mr-10 font-weight-bold">Lĩnh vực</p>
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
                        <template v-slot:selection="{ attrs, item, parent, selected, disabled }">
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
                    <h2 class="information">Thông tin điểm</h2>
                </v-flex>
            </v-layout>
            <v-layout align-center flex row>
                <v-flex xs2>
                    <p class="mb-0 text-right mr-10 font-weight-bold">Tên loại điểm</p>
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
                    <p class="mb-0 text-right mr-10 font-weight-bold">Quy đổi điểm</p>
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
                    <h2 class="information">Thông tin hiển thị</h2>
                </v-flex>
            </v-layout>
            <v-layout align-center flex row>
                <v-flex xs2>
                    <p class="mb-0 text-right mr-10 font-weight-bold">Ảnh</p>
                </v-flex>
                <v-flex xs2>
                    <AvatarCore />
                </v-flex>
                <v-flex xs3>
                    <v-subheader>Ảnh logo.</v-subheader>
                </v-flex>
                <v-flex xs2>
                    <AvatarCore />
                </v-flex>
                <v-flex xs3>
                    <v-subheader>Ảnh logo</v-subheader>
                </v-flex>
                <v-flex xs2>
                    <p class="mb-0 text-right mr-10 font-weight-bold">Mô tả</p>
                </v-flex>
                <v-flex text-center xs9>
                    <v-btn class="my-2" color>Mpoint- Chương trình điểm của MobiFone</v-btn>
                </v-flex>
            </v-layout>

            <v-layout>
                <v-flex>
                    <h2 class="information">Thông tin tham khảo/ liên hệ</h2>
                </v-flex>
            </v-layout>
            <v-layout align-center flex row>
                <v-flex xs2>
                    <p class="mb-0 text-right mr-10 font-weight-bold">Website</p>
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
                    <p class="mb-0 text-right mr-10 font-weight-bold">Số điện thoại</p>
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
        <!-- </v-card-text> -->
    </v-card>
</template>

<script>
// @ is an alias to /src
import AvatarCore from '../../components/Avatar';

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
    components: {
        AvatarCore
    }
};
</script>

<style>
.information {
    border-bottom: 1px solid #333;
}
</style>
