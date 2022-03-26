<template>
    <UserForm
	  :initialValue="{...user, ...confirmPassword}"
      @nameChanged="(value) => {user.useName = value}"
      :nameRules="nameRules"
      @emailChanged="(value) => {user.useEmail = value}"
      :emailRules="emailRules"
      @phoneChanged="(value) => {user.usePhone = value}"
      :phoneRules="phoneRules"
      @passwordChanged="(value) => {user.usePassword = value}"
      :passwordRules="passwordRules"
      @confirmPasswordChanged="(value) => {confirmPassword = value}"
      :confirmPasswordRules="[rules.same(user.usePassword, confirmPassword)]"
	  :loading="loading"
	  formName="Cadastrar usuário"
	  @clickCancel="cancel"
	  @clickSave="addUser"
    />
</template>

<script src="./Signup.js"/>
