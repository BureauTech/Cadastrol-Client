<template>
  <v-app>
    <v-progress-linear
      :active="loading"
      color="deep-purple"
      height="10"
      indeterminate
    ></v-progress-linear>
    <v-form>
      <v-layout
        row
        justify-center
        margin
        align-top
        class="no-negative"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-row
          class="mt-5 justify-space-around align-start"
          no-gutters
        >
          <v-col
            sm="8"
            md="6"
            cols="11"
          >
            <p class="text-h4 bahama--text pb-10">Editar usuário</p>
            <v-row class="justify-center">
              <v-col md="3">
                <b>Nome:</b>
              </v-col>
              <v-text-field
                rounded
                outlined
                :rules="[rules.required]"
                v-model="user.name"
              />
            </v-row>

            <v-row class="justify-center">
              <v-col md="3">
                <b>Email:</b>
              </v-col>
              <v-text-field
                rounded
                outlined
                type="email"
                :rules="[rules.required, rules.email]"
                v-model="user.email"
              />
            </v-row>
            <v-row class="justify-center">
              <v-col md="3">
                <b>Telefone:</b>
              </v-col>
              <v-text-field
                type="tel"
                rounded
                outlined
                :rules="[rules.number]"
                v-model="user.phone"
              />
            </v-row>
            <v-row class="justify-center">
              <v-col md="3">
                <b>Senha:</b>
              </v-col>
              <v-text-field
                rounded
                outlined
                :rules="[rules.required]"
                v-model="user.password"
                @click:append="() => (value = !value)"
                :type="value ? 'text' : 'password'"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              />
            </v-row>
            <v-row class="justify-center">
              <v-col md="3">
                <b>Confirmar Senha:</b>
              </v-col>
              <v-text-field
                rounded
                outlined
                type="password"
                :rules="[rules.required, rules.same(samePass, user.password)]"
                v-model="samePass"
              />
            </v-row>
            <v-row class="mt-5 justify-space-around align-start">

              <v-col md="5">
                <v-btn
                  min-width="100%"
                  elevation="2"
                  rounded
                  color="#2A6484"
                  class="white--text text-none text-h5"
                >
                  Salvar
                </v-btn>
              </v-col>

              <v-col md="5">
                <v-btn
                  min-width="100%"
                  elevation="2"
                  rounded
                  color="red"
                  class="white--text text-none text-h5"
                >
                  Cancelar
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-layout>
    </v-form>
  </v-app>
</template>

<script src="./EditUser.js"/>