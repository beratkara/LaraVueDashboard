<template>
    <div>
        <h4 class="card-title">{{ $t('menu.dealers') }}</h4>
        <p class="card-title-desc">
            Create responsive tables by wrapping any
            <code>.table</code> in
            <code>.table-responsive</code>
            to make them scroll horizontally on small devices (under 768px).
        </p>

        <div class="row mt-4">
            <!-- Search -->
            <div class="col-sm-12 col-md-12">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                    <label class="d-inline-flex align-items-center">
                        {{ $t('common.search') }}:
                        <b-form-input
                            v-model="search"
                            type="search"
                            :placeholder="this.$t('common.search') + '...'"
                            class="form-control form-control-sm ml-2"
                        ></b-form-input>
                    </label>
                </div>
            </div>
            <!-- End search -->
        </div>
        <!-- Table -->
        <div class="table-responsive mb-0">
            <b-table
                :items="items.data"
                :fields="headers"
                responsive="sm"
                :per-page="items.meta.per_page"
                :busy.sync="loading"
                :sort-by.sync="orderBy"
                :sort-desc.sync="sortDesc"
                @sort-changed="sortChanged"
            >
                <template v-slot:table-busy>
                    <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        <strong>{{ loadingMessage + '...' }}</strong>
                    </div>
                </template>
                <template v-slot:cell(name)="{ item }">
                    {{ item.name }}
                </template>
                <template v-slot:cell(owner)="{ item }" >
                    <template v-if="item.hasOwnProperty('owner')">
                        {{ item.owner }}
<!--                        <b-link :href="owners.uuid">{{ owners.name }}</b-link>-->
                    </template>
                </template>

            </b-table>
        </div>
        <div class="row">
            <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                    <ul class="pagination pagination-rounded mb-0">
                        {{ $t('common.show') }}:
                        <b-form-select v-model="perPage" small :options="pageOptions" @input="pageChange"></b-form-select>
                        <!-- pagination -->
                        <b-pagination v-model="page" :total-rows="items.meta.total" :per-page="perPage" @input="pageChange"></b-pagination>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import DealersService from "@services/api/DealersService";

    export default {
        name: "show",
        data() {
            return {
                page: 1,
                perPage: 10,
                pageOptions: [10, 25, 50, 100],

                search: null,
                awaitingSearch: false,

                orderBy: "name",
                sortedBy: "desc",
                sortDesc : true,

                loading: true,

                items: {
                    data: [],
                    meta: {
                        current_page: 1,
                        per_page: 10,
                        total: 0,
                    }
                },

            }
        },
        computed: {
            headers () {
                return [
                    { key: 'name', label: this.$t('dealers.name'), sortable: true },
                    { key: 'owner', label: this.$t('dealers.owner'), sortable: true },
                ]
            },
            loadingMessage () {
                return this.$t('common.loading');
            }
        },
        mounted() {
            this.list({page: this.page,perPage: this.perPage, orderBy: this.orderBy, sortedBy: this.sortedBy});
        },
        methods: {
            async list({page = 1, perPage = 10, orderBy = 'id', sortedBy = 'desc'}) {
                this.loading = true;
                let includes = ['users'];
                let query = (new DealersService)
                    .paginate(page, perPage)
                    .filter(this.search)
                    .sort(orderBy, sortedBy)
                    .include(includes)
                    .all();

                let {data: items} = await query;

                this.items = items;
                this.loading = false;
            },
            pageChange() {
                this.list({page: this.page,perPage: this.perPage, orderBy: this.orderBy, sortedBy: this.sortedBy});
            },
            sortChanged(sort) {
                this.perPage = sort.perPage;
                this.orderBy = sort.sortBy;
                this.sortedBy = (sort.sortDesc ? 'desc' : 'asc');
                this.sortDesc = sort.sortDesc;
                this.list({page: this.page,perPage: this.perPage, orderBy: this.orderBy, sortedBy: this.sortedBy});
            }

        },
        watch: {
            search: function(val) {
                if (!this.awaitingSearch) {
                    setTimeout(() => {
                        this.list({});
                        this.awaitingSearch = false;
                    }, 1000);
                }
                this.awaitingSearch = true;
            }
        }
    }
</script>

<style scoped>

</style>
