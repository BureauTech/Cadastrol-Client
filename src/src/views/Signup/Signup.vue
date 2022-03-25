<template>
	<v-app>
		<v-progress-linear
			:active="loading"
			color="deep-purple"
			height="10"
			indeterminate
		></v-progress-linear>
		<Card
			:loading="loading"
				padding="2"
			cols="8"Î
			sm="8"
			lg="8"
			xl="8"
			:roundLevel="4"
		> 
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
						sm="10"
						md="10"
						cols="10"
					>
						<p class="text-h4 bahama--text pb-10">Cadastrar usuário</p>
						<v-row class="justify-center">
							<v-col md="3">
								<b>Nome:</b>
							</v-col>
							<v-text-field
								rounded
								outlined
								:rules="[rules.required]"
								v-model="user.useName"
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
								v-model="user.useEmail"
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
								v-model="user.usePhone"
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
								v-model="user.usePassword"
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
								:rules="[rules.required, rules.same(samePass, user.usePassword)]"
								v-model="samePass"
								@click:append="() => (value = !value)"
								:type="value ? 'text' : 'password'"
								:append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
							/>
						</v-row>
						<v-row class="mt-5 justify-space-around align-start">
							<v-col md="5" style="margin-bottom: 20px;">
								<v-btn
									min-width="100%"
									elevation="2"
									rounded
									color="grey"
									class="white--text text-none text-h5"
									@click="cancel"
								>
									Cancelar
								</v-btn>
							</v-col>
						<v-col md="5" style="margin-bottom: 20px;">
							<v-btn
								min-width="100%"
								elevation="2"
								rounded
								color="#228B22"
								class="white--text text-none text-h5"
								@click="addUser"
							>
								Salvar
							</v-btn>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-layout>
	</Card>
	</v-app>
</template>

<script src="./Signup.js"/>

