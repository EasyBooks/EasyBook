<template>
	<view class="page_login">
		<!-- 头部logo -->
		<view class="head">
			<view class="head_bg">
				<view class="head_inner_bg">
					<image style="width: 55px;height: 65px;" :src="imgInfo.head" class="head_logo" />
				</view>
			</view>
		</view>
		<!-- form -->
		<view class="form">
			<view class="input">
				<input type="text" v-model="phoneNo" placeholder="请输入手机号" />
				<view class="img">
					<image @tap="delUser" class="img_del" :src="imgInfo.icon_del" v-show="phoneNo" />
				</view>
			</view>
			<view class="code">
				<input type="text" :value="code" placeholder="请输入验证码" />
				<button style="height:52px;" type="primary" plain="">获取验证码</button>
			</view>
			<view class="input">
				<input :type="pwdType" :value="userpwd" @input="inputPwd" placeholder="请输入密码">
				<view class="img" @tap="switchPwd">
					<image class="img_pwd_switch" :src="imgInfo.icon_pwd_switch" v-show="eyeStatus==false" />
					<image class="img_eye" :src="imgInfo.icon_pwd_eye" v-show="eyeStatus==true" />
				</view>
			</view>
		</view>
		<!-- 登录提交 -->
		<button class="submit" type="primary" @tap="modifyPwd">修改密码</button>
	</view>
</template>

<script>
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				phoneNo: '',
				userpwd: '',
				code: '',
				pwdType: 'password',
				imgInfo: {
					head: '/static/login/head.png',
					icon_del: '/static/login/icon_del.png',
					icon_pwd_switch: '/static/login/icon_pwd_switch.png',
					icon_pwd_eye: '/static/login/icon_eye.png'
				},
				eyeStatus: false
			};
		},
		methods: {
			delUser() {
				this.phoneNo = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
				this.eyeStatus = !this.eyeStatus
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			modifyPwd() {

			}
		},
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #f5f6f8;
	}
</style>

<style lang="scss" scoped>
	$logo-padding: 60px;
	$form-border-color: rgba(214, 214, 214, 1);

	.page_login {
		padding: 10px;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		padding-bottom: $logo-padding;

		.head_bg {
			border: 1px solid #fbecf1;
			border-radius: 50px;
			width: 100px;
			height: 100px;
			display: flex;
			align-items: center;
			justify-content: center;

			.head_inner_bg {
				border-radius: 40px;
				width: 80px;
				height: 80px;
				display: flex;
				background-color: #00aaff;
				align-items: flex-end;
				justify-content: center;
				overflow: hidden;
			}
		}
	}

	.form {
		display: flex;
		margin: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.code {
			width: 102%;
			min-height: 50px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			input {
				outline: none;
				height: 50px;
				border: 1px solid $form-border-color;
				border-radius: 5px;
				padding-left: 10px;
				margin-right: 20px;

				&:focus {
					outline: none;
				}
			}
		}

		.input {
			width: 100%;
			min-height: 50px;
			margin: 10px;
			display: flex;
			padding: 3px;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			border: 1px solid $form-border-color;
			border-radius: 5px;

			input {
				outline: none;
				margin-left: 10px;
				height: 40px;
				width: 100%;

				&:focus {
					outline: none;
				}
			}

			.img {
				min-width: 40px;
				min-height: 40px;
				margin: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.img_del {
				width: 21px;
				height: 21px;
			}

			.img_eye {
				width: 28px;
				height: 28px;
			}

			.img_pwd_switch {
				width: 28px;
				height: 12px;
			}

		}
	}

	.submit {
		margin-top: 30px;
		margin-left: 20px;
		margin-right: 20px;
		color: white;
		background-color: rgba(0, 170, 255, 1.0);
		-webkit-tap-highlight-color: rgba(0, 170, 255, 1.0);

		&:active {
			color: #B6B6B6;
			background-color: rgba(0, 170, 255, 0.8);
		}
	}
</style>
