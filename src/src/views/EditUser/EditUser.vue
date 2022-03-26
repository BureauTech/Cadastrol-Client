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
      :confirmPasswordRules="[rules.optionalSame(user.usePassword, confirmPassword)]"
	  :loading="loading"
	  formName="Editar usuário"
	  @clickCancel="cancel"
	  @clickSave="updateUser"
    />
</template>

<script src="./EditUser.js"/>
