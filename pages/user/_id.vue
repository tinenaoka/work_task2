<template>
    <div>
      <user :user="user_data" :single="true" class="single__avatar"/>
      <v-btn
        class="mt-3"
        color="dark"
        @click="back()"
      >
        Вернуться
      </v-btn>
    </div>
</template>

<script>
    import user from "@/components/user";
    import {mapState} from 'vuex'
    export default {
        layout: 'userId',
        middleware: 'userId',
        components: {
            user
        },
        computed: {
            ...mapState({
                user_data: state => state.users.user,
            }),
        },
        methods: {
            back() {
                if (window.history.length === 1) {
                    this.$router.push({ path: '/' });
                } else {
                    window.history.back()
                }
            }
        }
    }
</script>

<style>
  .single__avatar {
    max-width: 100% !important;
    margin-top: 20px;
  }
  .single__avatar .avatar__user {
    justify-content: start;
    align-items: start;
    margin-left: 30px;
  }
</style>
