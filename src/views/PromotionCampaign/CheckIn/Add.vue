<template>
    <v-card class="table-type-1 add-member-page">
        <v-card-text>
            <v-card class="title-grid" color="primary">
                <v-card-title>
                    <div>
                        <h3 class="headline t1">Tạo Check-in</h3>
                        <div class="t2">Here is a subtitle for this table</div>
                    </div>
                </v-card-title>
            </v-card>
            <v-layout>
                <v-flex sm8 xs12 offset-sm2 offset-md2 offset-lg2>
                    <form>
                        <v-text-field
                            label="Tiêu đề chương trình"
                            required
                            v-model="title"
                            v-validate="{ required: true }"
                        ></v-text-field>
                        <v-textarea
                            v-model="des"
                            name="input-7-4"
                            label="Mô tả chương trình"
                        ></v-textarea>
                        <vue-editor v-model="content" v-validate="{ required: true }"></vue-editor>

                        <v-layout>
                            <v-flex xs12 lg6>
                                <v-menu
                                    v-model="menu1"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    max-width="290px"
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            v-model="fromDateFormatted"
                                            label="Áp dụng từ ngày"
                                            readonly
                                            hint="MM/DD/YYYY format"
                                            persistent-hint
                                            append-icon="mdi-calendar"
                                            @blur="fromDate = parseDate(fromDateFormatted)"
                                            v-on="on"
                                            v-validate="{ required: true }"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="fromDate"
                                        no-title
                                        @input="menu2 = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-flex>
                            <v-flex xs12 lg6>
                                <v-menu
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    max-width="290px"
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            v-model="toDateFormatted"
                                            label="Áp dụng đến ngày"
                                            readonly
                                            append-icon="mdi-calendar"
                                            @blur="toDate = parseDate(toDateFormatted)"
                                            v-on="on"
                                            v-validate="{ required: true }"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="toDate"
                                        no-title
                                        @input="menu1 = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center justify-center>
                            <v-flex xs12 lg5>
                                <v-text-field
                                    label="Số lần được nhận quà "
                                    v-validate="{ required: true, regex: '^([0-9]+)$' }"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 lg1>Trên</v-flex>
                            <v-flex xs12 lg6>
                                <v-select :items="labelDateGift" v-model="selectLabel"></v-select>
                            </v-flex>
                        </v-layout>
                        <v-select
                            :items="labelTimeReset"
                            v-model="timeReset"
                            label="Thời gian reset lượt nhận quà"
                        ></v-select>
                        <v-select
                            :items="listMembers"
                            v-model="mApplied"
                            label="Đối tượng áp dụng"
                        ></v-select>
                        <v-layout align-center>
                            <v-flex xs12 lg4>
                                <v-radio-group v-model="pointValue">
                                    <v-radio
                                        color="primary"
                                        label="Điểm thưởng cố định"
                                        value="1"
                                    ></v-radio>
                                </v-radio-group>
                            </v-flex>
                            <v-flex xs12 lg8>
                                <v-text-field
                                    placeholder="Điền số điểm"
                                    :required="pointValue == '1'"
                                    v-validate="{ numeric: true }"
                                    v-model="pointConst"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center>
                            <v-flex xs12 lg4>
                                <v-radio-group v-model="pointValue">
                                    <v-radio
                                        color="primary"
                                        label="Điểm thưởng ngẫu nhiên"
                                        value="2"
                                    ></v-radio>
                                </v-radio-group>
                            </v-flex>
                            <v-flex xs12 lg8>
                                <v-layout align-center>
                                    <v-flex xs6>
                                        <v-text-field
                                            placeholder="Từ"
                                            v-model="pointFrom"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field
                                            placeholder="Đến"
                                            v-model="pointTo"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                        <div>
                            <b>Tỉ lệ nhận điểm ngẫu nhiên</b>
                        </div>
                        <v-layout align-center>
                            <v-flex xs5>
                                <v-text-field
                                    placeholder="Số điểm"
                                    v-model="pointFrom"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs1 justify-center>% nhận</v-flex>
                            <v-flex xs5>
                                <v-text-field v-model="pointFrom"></v-text-field>
                            </v-flex>
                            <v-flex xs1 justify-center>
                                <v-btn text icon>
                                    <v-icon>mdi-close-circle</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center>
                            <v-flex xs5>
                                <v-text-field
                                    placeholder="Số điểm"
                                    v-model="pointFrom"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs1 justify-center>% nhận</v-flex>
                            <v-flex xs5>
                                <v-text-field v-model="pointFrom"></v-text-field>
                            </v-flex>
                            <v-flex xs1 justify-center>
                                <v-btn text icon>
                                    <v-icon>mdi-close-circle</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center>
                            <v-flex xs5>
                                <v-text-field
                                    placeholder="Số điểm"
                                    v-model="pointFrom"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs1 justify-center>% nhận</v-flex>
                            <v-flex xs5>
                                <v-text-field v-model="pointFrom"></v-text-field>
                            </v-flex>
                            <v-flex xs1 justify-center>
                                <v-btn text icon>
                                    <v-icon>mdi-close-circle</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center>
                            <v-flex xs4>Điểm được nhận sẽ hết hạn sau</v-flex>
                            <v-flex xs4>
                                <v-text-field
                                    placeholder="Number"
                                    v-model="pointFrom"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs4>
                                <v-select :items="labelDateGift" v-model="selectLabel"></v-select>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center justify-center>
                            <div class="px-3">
                                <v-btn color="success">Xác nhận</v-btn>
                            </div>
                            <div class="px-3">
                                <v-btn>Hủy bỏ</v-btn>
                            </div>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
    name: 'Add',
    components: { VueEditor },
    data(vm) {
        return {
            menu1: false,
            menu2: false,
            fromDateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            toDateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            title: '',
            des: '',
            content: '',
            fromDate: new Date().toISOString().substr(0, 10),
            toDate: new Date().toISOString().substr(0, 10),
            labelDateGift: ['Ngày', 'Tháng', 'Năm', 'Trong khoảng thời gian áp dụng'],
            selectLabel: 'Tháng',
            labelTimeReset: ['12:00', '15:00', '18:00', '21:00'],
            timeReset: '15:00',
            listMembers: ['Tất cả', 'Nhận được code'],
            mApplied: 'Tất cả',
            pointValue: '1',
            pointConst: '',
            pointFrom: '',
            pointTo: ''
        };
    },
    created() {},
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.myCheckIn.fromDate);
        }
    },

    watch: {
        fromDate() {
            this.fromDateFormatted = this.formatDate(this.fromDate);
        },
        toDate() {
            this.toDateFormatted = this.formatDate(this.toDate);
        }
    },
    methods: {
        submit() {
            // console.log(this.content);
        },
        clear() {},
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split('-');
            return `${month}/${day}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [month, day, year] = date.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
    }
};
</script>
