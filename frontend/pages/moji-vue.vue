<template>
  <v-card>
    <v-card-title>
      <v-btn depressed color="primary">
        + New
      </v-btn>
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="provinces"
      :search="search"
      :items-per-page="30"
    >
      <template #[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'ชื่อไทย', value: 'province' },
        { text: 'ชื่ออังกฤษ', value: 'province' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      desserts: [
        { province: 'กระบี่' },
        { province: 'กรุงเทพมหานคร' },
        { province: 'กาญจนบุรี' }
      ],
      provinces: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    editItem (item) {},
    deleteItem (item) {},
    async fetchData () {
      this.provinces = await this.$axios.$get('http://localhost:3000/provinces', {
        headers: {
          authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJudCIsImlhdCI6MTY1NTcxNTc2NjE5OH0.jqWmHVocQmaXAoUFp4ieD8Ag8915l5RrXFVhnUoj-SM'
        }
      })
    }
  }
}
</script>
