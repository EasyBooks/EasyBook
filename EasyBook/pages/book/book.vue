<template>
	<view>
		<!-- 顶部导航栏 -->
			<view class="menu-top" v-if="show" :style="darkness">
				<view @click="back()">
					<image src="../../static/navbaricon/back-dark.png" class="back-image"></image>
				</view>
			</view>
		<!-- 小说主体 -->
		<view @click="openmenu()" :style="darkness">
			<image src="../../static/logo.png"></image>
		</view>
		<!-- 侧栏抽屉 -->
		<view>
			<uni-drawer :visible="dirflag" mode="left" @close="closeDirectory()">
				<view style="padding:30rpx;">
					<view class="uni-title">抽屉式导航</view>
				</view>
			</uni-drawer>
		</view>

		<!-- 底部菜单栏 -->
			<view class="menu-bottom" v-if="show" :style="darkness">
				<view class="page-manager">
					<a class="previous-page">上一章</a>
					<view class="slider-page">
						<slider min="0" max="100" block-size="22" activeColor="red"></slider>
					</view>
					<a class="next-page">下一章</a>
				</view>
				<!-- 目录设置等按钮 -->
				<view class="book-menu">
					<view class="book-menu-item" @click="loadDirectory()" >
						<image src="../../static/menu/directory.png"></image>
						<label>目录</label>
					</view>
					<view class="book-menu-item">
						<image src="../../static/menu/brightness.png"></image>
						<label>亮度</label>
					</view>
					<view class="book-menu-item" @click="setColor()">
						<image :src="darkness.src"></image>
						<label>{{darkness.text}}</label>
					</view>
					<view class="book-menu-item">
						<image src="../../static/menu/setup.png"></image>
						<label>设置</label>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import {
		uniDrawer
	} from '@dcloudio/uni-ui';
	export default {
		components: {
			uniDrawer
		},
		data() {
			return {
				show: false, //控制弹出层
				dirflag: false, //控制抽屉显示
				// 设置夜间模式
				darkness: {
					background: '#ffffff',
					color: "#000000",
					src: "../../static/menu/dark.png",
					text: "夜间"
				},
				isDark: false,
			}
		},
		onLoad() {

		},
		methods: {
			// 打开popup菜单
			openmenu() {
				if (this.show == true) {
					this.show = false;
				} else {
					this.show = true;
				}
			},

			// 返回上一级
			back() {
				uni.navigateBack();
			},
			// 加载目录
			loadDirectory() {
				this.dirflag = true;
			},
			// 关闭目录
			closeDirectory() {
				this.dirflag = false;
			},
			// 开启夜间模式
			setColor() {
				if (this.isDark) {
					this.isDark = false;
					this.darkness = {
						background: '#ffffff',
						color: "#000000",
						src: "../../static/menu/dark.png",
						text: "夜间"
					}
				} else {
					this.isDark = true;
					this.darkness = {
						background: '#0d0d0d',
						color: "#ffffff",
						src: "../../static/menu/light.png",
						text: "白天"
					}
				}
			}
		}
	}
</script>

<style>
	/**
	 * 顶部菜单
	 */
	.menu-top {
		position: absolute;
		top: 0px;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0.9);
		width: 100%;
	}

	/**
	 * 底部菜单
	 */
	.menu-bottom {
		position: absolute;
		bottom: 0px;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0.9);
		width: 100%;
		height: calc(15%);
	}

	/* 底部菜单中 章节进度*/
	.page-manager {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	/* 底部菜单中 书本相关选项 */
	.book-menu {
		display: flex;
		flex-direction: row;
	}

	/* 书本菜单 的菜单项 */
	.book-menu-item {
		display: flex;
		flex-direction: column;
		width: calc(100% / 4);
		padding-top: 5px;
	}

	/* 选项的图片 */
	.book-menu-item image {
		width: 30px;
		height: 30px;
		margin: auto;
	}

	/* 选项label */
	.book-menu-item label {
		width: auto;
		height: auto;
		margin: auto;

		font-size: 15px;
	}

	/* 返回按钮样式 */
	.back-image {
		margin-top: 7px;
		margin-left: 6px;
		margin-bottom: 2px;
		width: 25px;
		height: 25px;
	}

	/* 上一章按钮样式 */
	.previous-page {
		padding: 5px;
		width: 16%;
		font-size: 20px;
	}

	/* 下一章按钮样式 */
	.next-page {
		padding: 5px;
		width: 16%;
		font-size: 20px;
	}

	/* 页面进度条样式 */

	.slider-page {
		width: 60%;
	}
</style>
