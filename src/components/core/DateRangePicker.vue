<template>
    <div>
        <v-btn @click="showDateOptions = true" color="success">{{ displayRange }}</v-btn>
        <v-layout justify-start>
            <v-flex xs12 sm6 md4 py-0>
                <v-list v-if="showDateOptions">
                    <v-list-item-group v-model="item" color="primary">
                        <v-list-item v-for="(item, index) in items" :key="index" @click="item.fn">
                            <v-list-item-content>
                                <v-list-item-title>{{ item.nameRange }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
        <date-picker
            v-model="range"
            :lang="lang"
            range
            type="date"
            format="Ngày DD/MM/YYYY"
            placeholder="Chọn thời gian"
            width="500"
            confirm
            :editable="false"
            :shortcuts="shortcuts"
            range-separator=" ~ "
            v-show="showDateRange"
            :popupStyle="{ 'z-index': '9999999999' }"
            :input-attr="{ id: 'dateRange' }"
        >
            ></date-picker
        >
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';

export default {
    components: {
        DatePicker
    },
    methods: {
        changeRange(item) {
            item.fn();
        }
    },
    data() {
        return {
            select: {},
            showDateRange: false,
            showDateOptions: false,
            items: [
                {
                    nameRange: 'Hôm nay',
                    fn: () => {
                        this.showDateRange = false;
                        this.range = [new Date(), new Date()];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: 'Tuần này',
                    fn: () => {
                        this.showDateRange = false;
                        const date = new Date();
                        const firstDay = new Date(date.setDate(date.getDate() - date.getDay() + 1));
                        const lastDay = new Date(date.setDate(date.getDate() - date.getDay() + 7));
                        this.range = [firstDay, lastDay];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: 'Tuần trước',
                    fn: () => {
                        this.showDateRange = false;
                        const date = new Date();
                        const firstDay = new Date(date.setDate(date.getDate() - date.getDay() - 6));
                        const lastDay = new Date(date.setDate(date.getDate() - date.getDay() + 7));
                        this.range = [firstDay, lastDay];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: '7 ngày trước',
                    fn: () => {
                        this.showDateRange = false;
                        const date = new Date();
                        const firstDay = new Date(date.setDate(date.getDate() - 6));
                        const lastDay = new Date();
                        this.range = [firstDay, lastDay];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: 'Tháng này',
                    fn: () => {
                        this.showDateRange = false;
                        const date = new Date();
                        const year = date.getFullYear();
                        const month = date.getMonth();
                        const firstDay = new Date(year, month, 1);
                        const lastDay = new Date(year, month + 1, 0);
                        this.range = [firstDay, lastDay];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: 'Tháng trước',
                    fn: () => {
                        this.showDateRange = false;
                        const date = new Date();
                        const year = date.getFullYear();
                        const month = date.getMonth();
                        const firstDay = new Date(year, month - 1, 1);
                        const lastDay = new Date(year, month, 0);
                        this.range = [firstDay, lastDay];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: '30 Ngày trước',
                    fn: () => {
                        this.showDateRange = false;
                        const today = new Date();
                        const last30Days = new Date(today.setDate(today.getDate() - 30));
                        this.range = [last30Days, new Date()];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: 'Quý này',
                    fn: () => {
                        this.showDateRange = false;
                        const date = new Date();
                        const year = date.getFullYear();
                        const month = date.getMonth() + 1;
                        const quarter = parseInt(month / 4, 10) + 1;
                        const firstDay = new Date(year, quarter * 3 - 3, 1);
                        const lastDay = new Date(year, quarter * 3, 0);
                        this.range = [firstDay, lastDay];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: 'Quý trước',
                    fn: () => {
                        this.showDateRange = false;
                        const date = new Date();
                        const year = date.getFullYear();
                        const month = date.getMonth() + 1;
                        const quarter = parseInt(month / 4, 10);
                        const firstDay = new Date(year, quarter * 3 - 3, 1);
                        const lastDay = new Date(year, quarter * 3, 0);
                        this.range = [firstDay, lastDay];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: 'Năm này',
                    fn: () => {
                        this.showDateRange = false;
                        const date = new Date();
                        const year = date.getFullYear();
                        const firstDay = new Date(year, 0, 1);
                        const lastDay = new Date(year, 11, 31);
                        this.range = [firstDay, lastDay];
                        this.showDateOptions = false;
                    }
                },
                {
                    nameRange: 'Tuỳ chọn',
                    fn: () => {
                        this.showDateRange = true;
                        this.showDateOptions = false;
                        document.getElementById('dateRange').click();
                        document.getElementById('dateRange').style.display = 'none';
                    }
                }
            ],
            range: [],
            lang: {
                days: ['CN', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy'],
                months: [
                    'Tháng 1',
                    'Tháng 2',
                    'Tháng 3',
                    'Tháng 4',
                    'Tháng 5',
                    'Tháng 6',
                    'Tháng 7',
                    'Tháng 8',
                    'Tháng 9',
                    'Tháng 10',
                    'Tháng 11',
                    'Tháng 12'
                ]
            },
            shortcuts: []
        };
    },
    computed: {
        displayRange() {
            const firstDay = this.range[0];
            const lastDay = this.range[1];
            if (firstDay === undefined || lastDay === undefined) {
                return 'Chọn thời gian';
            }
            return `Ngày ${firstDay.getDate()}/${firstDay.getMonth() +
                1}/${firstDay.getFullYear()} ~ Ngày ${lastDay.getDate()}/${lastDay.getMonth() +
                1}/${lastDay.getFullYear()}`;
        }
    }
};
</script>
