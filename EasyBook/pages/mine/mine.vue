<template>
	<view>
		<view class="topMenu" :style="`background-color: rgba(228, 247, 255,${transparent});`">
			<image src="../../static/mine/setting.png" class="icon" style="margin-top: 10rpx;float: right;margin-right: 30rpx;"></image>
		</view>
		<view class="body">
			<view class="mine-info">
				<image src="../../static/mine/unKnowUser.png" class="head-img" @tap="goLogin"></image>
				<text style="position:relative;top: -50rpx;font-size: 28rpx;color: #C0C0C0;">您还未登录,点击头像登录</text>
			</view>
			<view style="padding: 20rpx;">
				<view class="view">
					<view style="display: flex;flex-direction: row;justify-content:space-around;">
						<view>
							<image src="../../static/mine/sign.png" style="width: 70rpx; height: 70rpx;"></image>
							<p style="font-size: 28rpx;text-align: center;width: 70rpx;">签到</p>
						</view>
						<view>
							<image src="../../static/mine/history.png" style="width: 70rpx; height: 70rpx;"></image>
							<p style="font-size: 28rpx;text-align: center;width: 70rpx;">历史</p>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uniNavBar
	} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				transparent: 0.0
			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '../login/login'
				})
			}
		},
		onPageScroll(val) {
			this.transparent = val.scrollTop / 100
		},
		mounted() {

		}
	}
</script>

<style>
	.mine-info {
		height: 150rpx;
		width: 100%-20rpx;
		margin: 0rpx 20rpx 0rpx 20rpx;
		background-color: rgb(228, 247, 255);
		border-radius: 20rpx;
	}

	.topMenu {
		position: fixed;
		top: 0rpx;
		width: 100%;
		height: 100rpx;
		z-index: 10;
	}

	.body {
		padding-top: 100rpx;
	}

	.head-img {
		height: 100rpx;
		width: 100rpx;
		margin: 20rpx 40rpx;
		border-radius: 100rpx;
	}

	.icon {
		height: 80rpx;
		width: 80rpx;
	}

	.view {
		height: 140rpx;
		width: 100%;
		border-bottom: solid #F1F1F1 1rpx;
	}
</style>
