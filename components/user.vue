<template>
  <v-card
    class="mx-auto avatar-body"
    tile
    light
  >
    <v-container
      class="p-3"
    >
      <v-row
        align="end"
        class="fill-height pl-0"
      >
        <v-col
          class="pa-0 avatar__user"
          cols="12"
        >
          <v-avatar
            color="grey"
            size="128"
          >
            <nuxt-link
              :to="'/user/' + user.id"
            >
              <v-img :src="user.avatar"></v-img>
            </nuxt-link>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="accent"
            light
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                <nuxt-link
                  :to="'/user/' + user.id"
                >{{ user.first_name }} {{ user.last_name }}
                </nuxt-link>
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-dialog v-model="dialog" persistent max-width="390">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-account-remove</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">Вы действительно хотите удалить пользователя?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="deleteUserDialog(user.id)">Да</v-btn>
                  <v-btn color="dark darken-1" text @click="dialog = false">Нет</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "user",
        props: ['user','single'],
        methods: {
            ...mapActions('users',[
                'deleteUser',
                'deleteUserSinge',
            ]),
            deleteUserDialog(id) {
                this.dialog = false;
                if (this.single) {
                    this.deleteUserSinge();
                    return;
                }
                this.deleteUser(id);
            }
        },
        data() {
            return {
                dialog: false,
            }
        }
    }
</script>

<style scoped>
  .avatar-body {
    max-width: 300px;
  }
  .avatar__user {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title a {
    color: #212121;
    text-decoration: none;
  }
  .title a:hover,
  .title a:active {
    text-decoration: underline;
  }
  .v-card__title {
    word-break: break-word;
  }
  @media (max-width: 400px) {
    .avatar-body {
      max-width: 250px;
    }
  }
</style>
