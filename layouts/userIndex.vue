<template>
  <v-app light>
    <v-main>
      <v-container class="h-100">
        <toolbar />
        <nuxt />
        <v-pagination
          v-model="page"
          :length="users_data.total_pages"
          circle
          light
          color="accent"
          class="navigation_bottom"
        ></v-pagination>
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <div class="text-center">&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
    import toolbar from "@/components/toolbar";
    import {mapState, mapActions} from 'vuex'
    export default {
        data () {
            return {
                fixed: false,
                page: 0,
                init: true,
            }
        },
        components: {
            toolbar,
        },
        computed: {
            ...mapState({
                users_data: state => state.users.users,
            }),
        },
        watch: {
            page() {
                if (!this.init) {
                    this.$router.push({ name: 'pagination-page', params: { page: this.page } });
                }
            }
        },
        methods: {
            ...mapActions('users',[
                'getUsers',
            ]),
        },
        async created() {
            if (this.$route.params.page) {
                this.page = Number(this.$route.params.page);
            } else {
                this.page = 1;
            }
            await this.getUsers(this.page);
            this.init = false;
        }
    }
</script>

<style>
  footer {
    text-align: center;
  }
  .h-100 {
    height: 100%;
  }
  .v-pagination__item:focus , .v-pagination__navigation:focus {
    outline: none !important;
    transform: scale(0.9);
  }
  @media (min-width: 1264px) {
    .navigation_bottom {
      position: absolute;
      bottom: 10px;
      width: 100%;
      left: 0;
    }
  }
</style>
