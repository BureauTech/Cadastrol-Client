<template>
  <v-row
    align="center"
    justify="center"
    no-gutters
  >
    <v-col cols="12">
      <v-progress-linear
        :active="loading"
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
      <v-form
        ref="UserForm"
        lazy-validation
      >
        <Card
          :loading="loading"
          padding="2"
          cols="8"
          sm="8"
          lg="8"
          xl="8"
          :roundLevel="4"
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
              sm="10"
              md="10"
              cols="10"
            >
              <p
                class="text-h4 bahama--text pb-10"
                v-text="formName"
              ></p>
              <v-row class="justify-center">
                <v-col md="3">
                  <b>Nome:</b>
                </v-col>
                <v-text-field
                  rounded
                  outlined
                  :rules="nameRules"
                  v-model="nameValue"
                  @input="$emit('nameChanged', nameValue)"
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
                  :rules="emailRules"
                  v-model="emailValue"
                  @input="$emit('emailChanged', emailValue)"
                />
              </v-row>
              <v-row class="justify-center">
                <v-col md="3">
                  <b>Telefone:</b>
                </v-col>
                <v-text-field
                  type="text"
                  rounded
                  outlined
                  :rules="phoneRules"
                  v-model="phoneValue"
                  @input="$emit('phoneChanged', phoneValue)"
                />
              </v-row>
              <v-row class="justify-center">
                <v-col md="3">
                  <b>Senha:</b>
                </v-col>
                <v-text-field
                  rounded
                  outlined
                  v-model="passwordValue"
                  @input="$emit('passwordChanged', passwordValue)"
                  :rules="passwordRules"
                  @click:append="() => (showPassword = !showPassword)"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                />
              </v-row>
              <v-row class="justify-center">
                <v-col md="3">
                  <b>Confirmar Senha:</b>
                </v-col>
                <v-text-field
                  rounded
                  outlined
                  v-model="confirmPasswordValue"
                  @input="$emit('confirmPasswordChanged', confirmPasswordValue)"
                  :rules="confirmPasswordRules"
                  @click:append="() => (showConfirmPassword = !showConfirmPassword)"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                />
              </v-row>
              <v-row class="mt-5 justify-space-around align-start">
                <v-col
                  md="5"
                  style="margin-bottom: 20px;"
                >
                  <v-btn
                    min-width="100%"
                    elevation="2"
                    rounded
                    color="grey"
                    class="white--text text-none text-h5"
                    @click="emitCancel"
                  >
                    Cancelar
                  </v-btn>
                </v-col>
                <v-col
                  md="5"
                  style="margin-bottom: 20px;"
                >
                  <v-btn
                    min-width="100%"
                    elevation="2"
                    rounded
                    color="#228B22"
                    class="white--text text-none text-h5"
                    type="submit"
                    @click="emitSave"
                  >
                    Salvar
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </Card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script src="./UserForm.js"></script>
<style></style>