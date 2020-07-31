<template>
  <users :users="users_data" />
</template>

<script>
    import users from "@/components/users";
    import {mapState, mapActions} from 'vuex'
    export default {
        layout: 'userIndex',
        name: "pagination",
        components: {
            users,
        },
        computed: {
            ...mapState({
                users_data: state => state.users.users,
            }),
        },
        methods: {
            ...mapActions('users',[
                'getUsers',
            ]),
        },
        async created() {
            await this.getUsers(this.$route.params.page);
            if (!this.users_data.data || !this.users_data.data.length) {
                this.$router.push({ name: 'error' });
            }
        }
    }
</script>

<style scoped>

</style>
