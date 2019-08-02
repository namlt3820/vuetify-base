<template>
    <v-card class="table-type-1 add-member-page">
        <v-card-text>
            <v-card class="title-grid" color="primary">
                <v-card-title>
                    <div>
                        <h3 class="headline t1">Thêm hội viên</h3>
                        <div class="t2">Here is a subtitle for this table</div>
                    </div>
                </v-card-title>
            </v-card>
            <v-layout>
                <v-flex justify-center md3>
                    <v-layout justify-center mt-5>
                        <avatar-core></avatar-core>
                    </v-layout>
                </v-flex>
                <v-flex md8>
                    <form>
                        <v-text-field
                            :counter="10"
                            :error-messages="errors.collect('name')"
                            data-vv-name="name"
                            label="Name"
                            required
                            v-model="name"
                            v-validate="'required|max:10'"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="errors.collect('phone')"
                            data-vv-name="phone"
                            label="Phone"
                            v-model="phone"
                            v-validate="{ required: true, regex: '^([0-9]+)$' }"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="errors.collect('email')"
                            data-vv-name="email"
                            label="E-mail"
                            required
                            v-model="email"
                            v-validate="'required|email'"
                        ></v-text-field>
                        <v-select
                            :error-messages="errors.collect('select')"
                            :items="items"
                            data-vv-name="select"
                            label="Select"
                            required
                            v-model="select"
                            v-validate="'required'"
                        ></v-select>
                        <v-checkbox
                            :error-messages="errors.collect('checkbox')"
                            data-vv-name="checkbox"
                            label="Option"
                            required
                            type="checkbox"
                            v-model="checkbox"
                            v-validate="'required'"
                            value="1"
                        ></v-checkbox>
                        <v-radio-group row v-model="gender">
                            <v-radio color="primary" label="Nam" value="1"></v-radio>
                            <v-radio color="primary" label="Nữ" value="2"></v-radio>
                        </v-radio-group>
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
                                    <!-- <v-avatar
                                        class="accent white--text"
                                        left
                                        v-text="data.item.slice(0, 1).toUpperCase()"
                                    ></v-avatar>-->
                                    <span style="padding-right: 8px;">{{ item }}</span>
                                    <v-icon @click="parent.selectItem(item)" small
                                        >mdi-close</v-icon
                                    >
                                </v-chip>
                            </template>
                        </v-combobox>
                        <vue-editor v-model="content"></vue-editor>
                        <v-btn @click="submit" class="mr-4">submit</v-btn>
                        <v-btn @click="clear">clear</v-btn>
                    </form>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
// @ is an alias to /src
import { VueEditor } from 'vue2-editor';
import AvatarCore from '../../components/Avatar';

export default {
    name: 'Add',
    components: { VueEditor, AvatarCore },
    data() {
        return {
            title: 'Add Member Page',
            name: '',
            phone: '',
            email: '',
            gender: '1',
            content: '',
            select: null,
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            checkbox: null,
            img: true,
            overlay: false,
            selectChips: ['Vuetify', 'Programming'],
            itemsChips: ['Programming', 'Design', 'Vue', 'Vuetify'],
            dictionary: {
                attributes: {
                    email: 'E-mail Address'
                    // custom attributes
                },
                custom: {
                    name: {
                        required: () => 'Name can not be empty',
                        max: 'The name field may not be greater than 10 characters'
                        // custom messages
                    },
                    phone: {
                        required: () => 'Name can not be empty',
                        regex: 'The field field format is invalid.'
                        // custom messages
                    },
                    select: {
                        required: 'Select field is required'
                    }
                }
            }
        };
    },
    created() {},
    methods: {
        submit() {
            // console.log(this.content);
        },
        clear() {}
    }
};
</script>
