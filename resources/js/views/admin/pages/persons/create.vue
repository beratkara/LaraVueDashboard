<template>
    <div>
    <h4 class="card-title mb-4">{{ $t('person.create') }}</h4>
    <form @submit.prevent="createDealer">
        <div class="form-group row mb-4">
            <label class="col-form-label col-lg-2">{{ $t('person.name') }}</label>
            <div class="col-lg-10">
                <input
                    type="text"
                    class="form-control"
                    :placeholder="this.$t('person.name')"
                    v-model="person.name"
                    @blur="$v.person.name.$touch()"
                    :class="{ 'is-invalid': $v.person.name.$error }"
                />
                <div v-if="$v.person.name.$error" class="invalid-feedback">
                    <span v-if="!$v.person.name.required">{{ $t('validations.required') }}</span>
                    <span v-if="!$v.person.name.minLength">{{ $t('validations.minLength', [$v.person.name.$params.minLength.min]) }}</span>
                    <span v-if="!$v.person.name.maxLength">{{ $t('validations.maxLength', [$v.person.name.$params.maxLength.max]) }}</span>
                </div>
            </div>
        </div>

        <div class="form-group row mb-4">
            <label class="col-form-label col-lg-2">{{ $t('person.surname') }}</label>
            <div class="col-lg-10">
                <input
                    type="text"
                    class="form-control"
                    :placeholder="this.$t('person.surname')"
                    v-model="person.surname"
                    @blur="$v.person.surname.$touch()"
                    :class="{ 'is-invalid': $v.person.surname.$error }"
                />
                <div v-if="$v.person.surname.$error" class="invalid-feedback">
                    <span v-if="!$v.person.surname.required">{{ $t('validations.required') }}</span>
                    <span v-if="!$v.person.surname.minLength">{{ $t('validations.minLength', [$v.person.surname.$params.minLength.min]) }}</span>
                    <span v-if="!$v.person.surname.maxLength">{{ $t('validations.maxLength', [$v.person.surname.$params.maxLength.max]) }}</span>
                </div>
            </div>
        </div>

        <div class="form-group row mb-4">
            <label class="col-form-label col-lg-2">{{ $t('person.email') }}</label>
            <div class="col-lg-10">
                <input
                    type="email"
                    class="form-control"
                    :placeholder="this.$t('person.email')"
                    v-model="person.email"
                    @blur="$v.person.email.$touch()"
                    :class="{ 'is-invalid': $v.person.email.$error }"
                />
                <div v-if="$v.person.email.$error" class="invalid-feedback">
                    <span v-if="!$v.person.email.required">{{ $t('validations.required') }}</span>
                </div>
            </div>
        </div>

        <div class="form-group row mb-4">
            <label class="col-form-label col-lg-2">{{ $t('person.password') }}</label>
            <div class="col-lg-10">
                <input
                    type="password"
                    class="form-control"
                    autocomplete="new-password"
                    :placeholder="this.$t('person.password')"
                    v-model="person.password"
                    @blur="$v.person.password.$touch()"
                    :class="{ 'is-invalid': $v.person.password.$error }"
                />
                <div v-if="$v.person.password.$error" class="invalid-feedback">
                    <span v-if="!$v.person.password.required">{{ $t('validations.required') }}</span>
                    <span v-if="!$v.person.password.minLength">{{ $t('validations.minLength', [$v.person.password.$params.minLength.min]) }}</span>
                    <span v-if="!$v.person.password.maxLength">{{ $t('validations.maxLength', [$v.person.password.$params.maxLength.max]) }}</span>
                </div>
            </div>
        </div>

        <div class="form-group row mb-4">
            <label class="col-form-label col-lg-2">{{ $t('person.identity_number') }}</label>
            <div class="col-lg-10">
                <input
                    type="text"
                    class="form-control"
                    :placeholder="this.$t('person.identity_number')"
                    v-model="person.identity_number"
                    @blur="$v.person.identity_number.$touch()"
                    :class="{ 'is-invalid': $v.person.identity_number.$error }"
                />
                <div v-if="$v.person.identity_number.$error" class="invalid-feedback">
                    <span v-if="!$v.person.identity_number.required">{{ $t('validations.required') }}</span>
                    <span v-if="!$v.person.identity_number.minLength">{{ $t('validations.minLength', [$v.person.identity_number.$params.minLength.min]) }}</span>
                    <span v-if="!$v.person.identity_number.maxLength">{{ $t('validations.maxLength', [$v.person.identity_number.$params.maxLength.max]) }}</span>
                </div>
            </div>
        </div>

        <div class="form-group row mb-4">
            <label class="col-md-2 col-form-label">{{ $t('dealers.dealer') }}</label>
            <div class="col-md-10">
                <multi-select v-model="dealer" select-label="Eklemek için tıklayın" deselect-label="Silmek için tıklayın" track-by="name" label="name" placeholder="Select one" :options="dealers.data" :searchable="true" :allow-empty="true">
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
    import PersonsService from "@services/api/PersonsService";
    import {required, minLength, maxLength, email} from "vuelidate/lib/validators";
    import DealersService from "@services/api/DealersService";

    export default {
        name: "create",
        components: { MultiSelect },
        data() {
            return {
                person: {},

                dealer: null,
                dealers: {
                    data: []
                },
            }
        },
        validations: {
            person:{
                name: {
                    required, minLength: minLength(3), maxLength: maxLength(250)
                },
                surname: {
                    required, minLength: minLength(3), maxLength: maxLength(250)
                },
                email: {
                    required, email
                },
                password: {
                    required, minLength: minLength(8), maxLength: maxLength(250)
                },
                identity_number: {
                    required, minLength: minLength(11), maxLength: maxLength(11)
                }
            },
        },
        methods: {
            async getDealers(){
                let query = (new DealersService).all();
                let {data: items} = await query;
                this.dealers = items;
            },
            async createDealer() {
                this.$v.$touch();
                if(!this.$v.$invalid)
                {
                    let query = (new PersonsService).store(this.person);
                    let {data: items} = await query;
                    this.$router.push({ name: 'admin.persons.show' });
                }
            }
        },
        async created() {
            await this.getDealers();
        }
    }
</script>

<style scoped>

</style>
