<template>
  <v-row>
    <v-col>
      <Card
        :roundLevel="0"
        class="Card"
        colorCard="transparent"
        sm="10"
        xs="12"
      >
        <template>
          <v-data-table
            height=475
            :headers="headers"
            :items="users"
            sort-by="use_cod"
            class="elevation-1"
            :footer-props="{'items-per-page-options': [9]}"
            @update:page="getUsers"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Lista de Usuários</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                  class="m-2"
                  fab
                  dark
                  small
                  color="blue"
                  @click="AddUser"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:item.edit="{ item }">
              <v-btn
                small
                @click="Edit(item)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <template v-slot:item.delete="{ item }">
              <v-btn
                small
                @click="Delete(item)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="500"
          >
            <v-card>
              <v-card-title class="text-h6">
                Tem certeza que deseja excluir este usuário?
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="red darken-1"
                  text
                  @click="dialog = false"
                >
                  Não
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="DeleteUser()"
                >
                  Sim
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </Card>
    </v-col>
  </v-row>
</template>

<script src="./UserList.js" scoped></script>

<style src="./UserList.css"></style>