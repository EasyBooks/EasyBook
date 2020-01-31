<template>
	<view class="page_reg">
		<text class="tip">短信验证码已发送至{{telNum}}请查收</text>
		<view class="code">
			<input type="text" value="" placeholder="验证码" />
			<button class="submit" type="primary">获取验证码</button>
		</view>
		<view class="pwd">
			<input password type="password" value="" placeholder="登录密码" />
		</view>
		<view style="width:100%;">
			<text class="tip">8-16位，数字、字母或数字字母组合</text>
		</view>
		<view style="width: 100%;">
			<label class="checkbox">
				<checkbox value="" checked />
				<text class="protocol_tip">我已阅读并同意</text>
			</label>
			<text class="protocol_tip link">《注册服务协议》</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				telNum:''
			};
		}
	}
</script>

<style>
	page {
		background-color: #f5f6f8;
	}
</style>
<style lang="scss" scoped>
	$text-color: #B6B6B6;
	$form-border-color: rgba(214, 214, 214, 1);
	
	.page_reg {
		height: 100%;
		margin: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.tip {
		margin-top: 30px;
		font-size: 13px;
		color: $text-color;
	}
	.code {
		width: 100%;
		min-height: 65px;
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid $form-border-color;
		.submit {
			color: white;
			background-color: rgba(0, 190, 251, 1.0);
			-webkit-tap-highlight-color: rgba(0, 190, 251, 1.0);
		
			&:active {
				color: #B6B6B6;
				background-color: rgba(0, 190, 251, 0.8);
			}
		}
	}
	.pwd {
		width: 100%;
		margin-top: 10px;
		min-height: 65px;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid $form-border-color;
	}
	
	.protocol_tip {
		font-size: 16px;
		color: $text-color;
	}
	
	.link {
		color: #3a8de8;
	}
</style>
