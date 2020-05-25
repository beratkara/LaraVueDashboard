<template>
    <div>
    <h4 class="card-title mb-4">{{ $t('dealers.create') }}</h4>
    <form @submit.prevent="createDealer">
        <div class="form-group row mb-4">
            <label class="col-form-label col-lg-2">{{ $t('dealers.name') }}</label>
            <div class="col-lg-10">
                <input
                    type="text"
                    class="form-control"
                    :placeholder="this.$t('dealers.name')"
                    v-model="name"
                    @blur="$v.name.$touch()"
                    :class="{ 'is-invalid': $v.name.$error }"
                />
                <div v-if="$v.name.$error" class="invalid-feedback">
                    <span v-if="!$v.name.required">{{ $t('validations.required') }}</span>
                    <span v-if="!$v.name.minLength">{{ $t('validations.minLength', [$v.name.$params.minLength.min]) }}</span>
                    <span v-if="!$v.name.maxLength">{{ $t('validations.maxLength', [$v.name.$params.maxLength.max]) }}</span>
                </div>
            </div>
        </div>

        <div class="form-group row mb-4">
            <label class="col-md-2 col-form-label">{{ $t('dealers.owner') }}</label>
            <div class="col-md-10">
                <multi-select v-model="user" select-label="Eklemek için tıklayın" deselect-label="Silmek için tıklayın" track-by="name" label="name" placeholder="Select one" :options="users.data" :searchable="true" :allow-empty="true">
                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong></template>
                </multi-select>
            </div>
        </div>

        <div class="col-sm-12">
            <div class="text-sm-right">
                <b-button @click="createDealer"><i class="mdi mdi-truck-fast mr-1"></i> {{ $t('common.create') }}</b-button>
            </div>
        </div>


    </form>
    </div>
</template>

<script>
    import MultiSelect from "vue-multiselect";
    import UserService from "@services/api/UserService";
    import DealersService from "@services/api/DealersService";
    import {required, minLength, maxLength} from "vuelidate/lib/validators";

    export default {
        name: "create",
        components: { MultiSelect },
        data() {
            return {
                name : null,
                user: null,
                users: {
                    data: []
                },
            }
        },
        validations: {
            name: {
                required, minLength: minLength(3), maxLength: maxLength(250)
            }
        },
        methods: {
            async getUsers(){
                let query = (new UserService).all();
                let {data: items} = await query;
                this.users = items;
            },
            async createDealer() {
                this.$v.$touch();
                if(!this.$v.$invalid)
                {
                    let payload = {
                        name: this.name,
                        user: this.user
                    };

                    let query = (new DealersService).store(payload);
                    let {data: items} = await query;
                    this.$router.push({ name: 'admin.dealers.show' });
                }
            }
        },
        async created() {
            await this.getUsers();
        }
    }
</script>

<style scoped>

</style>
