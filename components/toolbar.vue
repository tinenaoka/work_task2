<template>
  <v-toolbar
    dense
  >
    <v-btn
      icon
      @click="$router.push({ name: 'pagination-page', params: { page: 1 } })"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <search />
    <v-btn
      icon
      @click.stop="dialog = true"
    >
      <v-icon>mdi-account-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      max-width="490"
    >
      <v-form
        ref="form"
        v-model="valid"
        class="form__add_user"
        lazy-validation
      >
        <h2 class="form__title">Добавление пользователя
          <span class="float-right" @click="dialog = false"><v-icon>mdi-close</v-icon></span>
        </h2>

        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          label="Имя"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          :rules="lastNameRules"
          label="Фамилия"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Почта"
          required
        ></v-text-field>

        <v-file-input accept="image/*" label="Фотография" :rules="fileRules"></v-file-input>

        <v-btn
          :disabled="!valid"
          color="dark"
          class="mt-4"
          @click="validate()"
        >
          Добавить
        </v-btn>
      </v-form>
    </v-dialog>
  </v-toolbar>
</template>

<script>
    import {mapActions} from 'vuex'
    import search from "@/components/search";
    export default {
        name: "toolbar",
        components: {
            search
        },
        data() {
            return {
                dialog: false,
                valid: true,
                firstName: '',
                lastName: '',
                firstNameRules: [
                    v => !!v || 'Имя обязательно',
                ],
                lastNameRules: [
                    v => !!v || 'Имя обязательно',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'Почта обязательеа',
                    v => /.+@.+\..+/.test(v) || 'Неверный формат почты',
                ],
                file: '',
                fileRules: [
                    v => !!v || 'Фотография обязательна',
                ],
            }
        },
        methods: {
            ...mapActions('users',[
                'addUser',
            ]),
            async validate() {
                await this.$refs.form.validate();
                if (this.valid) {
                  this.addUser({
                      id: Math.floor(Math.random() * 1000 - 30),
                      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
                      email: this.email,
                      first_name: this.firstName,
                      last_name: this.lastName,
                  });
                  this.resetForm();
                }
            },
            resetForm() {
                this.$refs.form.reset();
                this.firstName = '';
                this.email = '';
                this.firstName = '';
                this.file = '';
            }
        }
    }
</script>

<style scoped>
  .form__add_user {
    background: white;
    padding: 20px;
  }
  .form__title {
    font-size: 24px;
  }
  .form__title span i {
    color: #000;
    cursor: pointer;
  }
</style>
