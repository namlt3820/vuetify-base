<template>
    <div>
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
    data() {
        return {
            range: '',
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
            ],
            mode: ['Hôm nay', 'Tuần này', 'Tháng này', '30 ngày trước', 'Năm này', 'Tuỳ chọn']
        };
    }
};
</script>
