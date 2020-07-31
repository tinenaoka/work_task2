<template>
  <v-layout
    class="mt-3"
  >
    <v-row
      align="start"
    >
      <v-col
        align-self="start"
        md="6"
        sm="6"
        xs="12"
        lg="4"
        v-for="user in users.data" :key="user.id"
      >
        <user :user="user"></user>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
    import user from "@/components/user";
    export default {
        name: "users",
        props: ['users'],
        components: {
            user
        }
    }
</script>

<style scoped>

</style>
