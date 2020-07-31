<template>
  <users :users="users_data" />
</template>

<script>
    import users from "@/components/users";
    import {mapState} from 'vuex'

    export default {
        layout: 'userIndex',
        components: {
            users,
        },
        computed: {
            ...mapState({
                users_data: state => state.users.users,
            }),
        },
    }
</script>
