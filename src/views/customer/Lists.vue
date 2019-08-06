<template>
    <v-layout column px-5>
        <v-flex style="border: 1px solid black">
            <h2>Danh sách đối tác</h2>
            <div class="text-right">
                <div class="d-inline-block mr-3">
                    <v-btn right class="blue white--text">Tạo mới</v-btn>
                </div>
            </div>
            <v-layout justify-center>
                <v-flex xs10 sm8 md6>
                    <v-form>
                        <v-layout align-baseline wrap>
                            <v-text-field
                                placeholder="Nhập tên đối tác"
                                outlined
                                prepend-inner-icon="mdi-magnify"
                            ></v-text-field>
                            <v-btn class="blue white--text ml-sm-4">Tìm kiếm</v-btn>
                        </v-layout>
                        <v-layout justify-left wrap>
                            <v-flex xs10 sm8 md6 px-0
                                ><v-select :items="filter" label="Lọc" outlined></v-select
                            ></v-flex>
                        </v-layout>
                    </v-form>
                </v-flex>
            </v-layout>
            <v-simple-table>
                <thead class="brown lighten-3">
                    <tr>
                        <th class="text-left white--text">STT</th>
                        <th
                            class="text-left white--text"
                            v-for="(item, index) in tableData[0]"
                            :key="index"
                        >
                            {{ item.name }}
                        </th>
                        <th class="text-left white--text">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="position in 7" :key="position">
                        <td>{{ position }}</td>
                        <td v-for="(item, index) in tableData[0]" :key="index">{{ item.value }}</td>
                        <td>
                            <v-icon>mdi-eye</v-icon>&nbsp; <v-icon>mdi-content-copy</v-icon>&nbsp;
                            <v-icon>mdi-square-edit-outline</v-icon>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
            <custom-pagination></custom-pagination>
        </v-flex>
    </v-layout>
</template>

<script>
import CustomPagination from '../../components/core/Pagination';

export default {
    name: 'Lists',
    data() {
        return {
            filter: ['Không', 'PO', 'Merchant', 'Trạng thái'],
            tableData: [
                [
                    {
                        name: 'Tên đối tác',
                        value: 'Vpoint'
                    },
                    {
                        name: 'Loại đối tác',
                        value: 'PO'
                    },
                    {
                        name: 'Loại điểm',
                        value: 'Vpoint'
                    },
                    {
                        name: 'Giá trị điểm tương ứng (số tiền)',
                        value: '1 Vpoint=1.000 VND'
                    },
                    {
                        name: 'Giá trị điểm tương ứng (điểm Ipoint)',
                        value: '1 Vpoint= 1 Ipoint'
                    },
                    {
                        name: 'Thời gian tạo',
                        value: '01/01/2019'
                    },
                    {
                        name: 'Trạng thái',
                        value: 'Active'
                    }
                ]
            ]
        };
    },
    created() {},
    components: {
        CustomPagination
    }
};
</script>
