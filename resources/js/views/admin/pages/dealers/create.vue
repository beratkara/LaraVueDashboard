<template>
    <div>
    <h4 class="card-title mb-4">Create New Dealer</h4>
    <form @submit.prevent="createDealer">
        <div class="form-group row mb-4">
            <label class="col-form-label col-lg-2">Dealer Name</label>
            <div class="col-lg-10">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Dealer Name..."
                    v-model="name"
                />
            </div>
        </div>

<!--        <div class="form-group row mb-4">-->
<!--            <label class="col-form-label col-lg-2">Create Date</label>-->
<!--            <div class="col-lg-2">-->
<!--                <date-picker v-model="daterange" append-to-body lang="en" confirm></date-picker>-->
<!--            </div>-->
<!--        </div>-->

        <div class="form-group row mb-4">
            <label class="col-md-2 col-form-label">Select Owner</label>
            <div class="col-md-10">
                <multiselect v-model="user" select-label="Eklemek için tıklayın" deselect-label="Silmek için tıklayın" track-by="name" label="name" placeholder="Select one" :options="users.data" :searchable="true" :allow-empty="true">
                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong></template>
                </multiselect>
            </div>
        </div>

        <div class="col-sm-12">
            <div class="text-sm-right">
                <b-button @click="createDealer"><i class="mdi mdi-truck-fast mr-1"></i> Oluştur</b-button>
            </div>
        </div>


    </form>
    </div>
</template>

<script>
    import DatePicker from "vue2-datepicker";
    import Multiselect from "vue-multiselect";
    import UserService from "@services/api/UserService";
    import DealersService from "@services/api/DealersService";

    export default {
        name: "create",
        components: { DatePicker, Multiselect },
        data() {
            return {
                name : null,
                user: null,
                users: {
                    data: []
                },
            }
        },
        methods: {
            async getUsers(){
                let query = (new UserService).all();
                let {data: items} = await query;
                this.users = items;
            },
            async createDealer() {
                let payload = {
                    name: this.name,
                    user: this.user
                };

                let query = (new DealersService).store(payload);
                let {data: items} = await query;
                this.$router.push({ name: 'admin.dealers.show' });
            }
        },
        async created() {
            await this.getUsers();
        }
    }
</script>

<style scoped>

</style>
