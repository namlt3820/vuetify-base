<template>
    <div>
        <v-layout align-center>
            <v-flex xs12 sm6 md4 class="pb-0">
                <v-select
                    solo
                    :items="items"
                    v-model="select"
                    label="Chọn thời gian"
                    single-line
                    item-text="nameRange"
                    return-object
                    v-on:change="changeRange"
                    :hide-details="true"
                ></v-select>
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
            class="mb-7"
            :popupStyle="{ 'z-index': '9999999999' }"
            :input-attr="{ id: 'dateRange' }"
        >
            ></date-picker
        >
        <p>{{ displayRange }}</p>
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
            items: [
                {
                    nameRange: 'Hôm nay',
                    fn: () => {
                        this.showDateRange = false;
                        this.range = [new Date(), new Date()];
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
                    }
                },
                {
                    nameRange: '30 Ngày trước',
                    fn: () => {
                        this.showDateRange = false;
                        const today = new Date();
                        const last30Days = new Date(today.setDate(today.getDate() - 30));
                        this.range = [last30Days, new Date()];
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
                    }
                },
                {
                    nameRange: 'Tuỳ chọn',
                    fn: () => {
                        this.showDateRange = true;
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
            shortcuts: [
                {
                    text: 'Hôm nay',
                    onClick: () => {
                        this.range = [new Date(), new Date()];
                    }
                },
                {
                    text: 'Tuần này',
                    onClick: () => {
                        const date = new Date();
                        const firstDay = new Date(date.setDate(date.getDate() - date.getDay() + 1));
                        const lastDay = new Date(date.setDate(date.getDate() - date.getDay() + 7));
                        this.range = [firstDay, lastDay];
                    }
                },
                {
                    text: 'Tháng này',
                    onClick: () => {
                        const date = new Date();
                        const year = date.getFullYear();
                        const month = date.getMonth();
                        const firstDay = new Date(year, month, 1);
                        const lastDay = new Date(year, month + 1, 0);
                        this.range = [firstDay, lastDay];
                    }
                },
                {
                    text: '30 Ngày trước',
                    onClick: () => {
                        const today = new Date();
                        const last30Days = new Date(today.setDate(today.getDate() - 30));
                        this.range = [last30Days, new Date()];
                    }
                },
                {
                    text: 'Năm này',
                    onClick: () => {
                        const date = new Date();
                        const year = date.getFullYear();
                        const firstDay = new Date(year, 0, 1);
                        const lastDay = new Date(year, 11, 31);
                        this.range = [firstDay, lastDay];
                    }
                }
            ]
        };
    },
    computed: {
        displayRange() {
            const firstDay = this.range[0];
            const lastDay = this.range[1];
            if (firstDay === undefined || lastDay === undefined) {
                return '';
            }
            return `Ngày ${firstDay.getDate()}/${firstDay.getMonth() +
                1}/${firstDay.getFullYear()} ~ Ngày ${lastDay.getDate()}/${lastDay.getMonth() +
                1}/${lastDay.getFullYear()}`;
        }
    }
};
</script>
