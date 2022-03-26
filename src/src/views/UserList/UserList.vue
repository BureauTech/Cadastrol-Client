<template>
  <v-row no-gutters>
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
            height=480
            :headers="headers"
            :items="users"
            class="elevation-1"
            :footer-props="{'items-per-page-options': [9]}"
            @update:page="getUsers"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Lista de Usuários</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  color="#228B22"
                  style="margin-right: 5px;"
                  @click="addUser"
                >
                  <v-icon>
                    mdi-account-plus
                  </v-icon>
                  Criar
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  @click="logout"
                >
                  Sair
                  <v-icon>
                    mdi-logout-variant
                  </v-icon>
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon class="mr-2" @click="editDialog(item)">
                mdi-pencil
              </v-icon>
              <v-icon @click="deleteDialog(item)">
                mdi-delete
              </v-icon>
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
                  @click="deleteUser()"
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