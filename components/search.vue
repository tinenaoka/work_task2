<template>
  <v-autocomplete
    v-model="model"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    color="white"
    hide-no-data
    hide-selected
    placeholder="Поиск по имени"
    prepend-icon="mdi-account-search"
    return-object
    flat
    class="mt-4"
  ></v-autocomplete>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "search",
        data() {
            return {
                descriptionLimit: 60,
                entries: [],
                isLoading: false,
                model: null,
                search: null,
                items: [],
                searchData: [],
            }
        },
        computed: {
            ...mapState({
                users_data: state => state.users.users,
            }),
        },
        watch: {
            async search (val) {
                if (this.items.length > 0) {
                    return;
                }

                if (this.isLoading) {
                    return;
                }
                this.isLoading = true;
                for (let i = 1; i <= this.users_data.total_pages; i++) {
                    let data = await this.getDataUsers(i);
                    data.data.map(item => {
                        this.items.push({
                            text: item.first_name + ' ' + item.last_name,
                            id: item.id
                        })
                    })
                }
                this.isLoading = false;

            },
            model() {
                this.$router.push({ name:"user-id", params: { id: this.model.id }})
            }
        },
        methods: {
            ...mapActions('users',[
                'getDataUsers',
            ]),
        }

    }
</script>

<style>
  .v-input__prepend-outer {
    margin-top: 7px;
  }
</style>
