<template>
	<scroll-view fixed="true">
		<uni-nav-bar>
			<view class="title"><b>书架</b></view>
			<image slot="right" src="../../static/navbaricon/search.png" style="width: 23px;height: 23px;"></image>
		</uni-nav-bar>
		<view class="row">
			<view class="col" v-for="(book,index) in books" :key="index">
				<image class="cover" :src="book.cover" @click="loadBook(book.id)"></image>
				<label class="title">{{book.name}}</label>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {
		uniNavBar
	} from '@dcloudio/uni-ui';
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				books: [{
					id: '1',
					name: 'text1',
					cover: '../../static/logo.png'
				}, {
					id: '2',
					name: 'text2',
					cover: '../../static/logo.png'
				}, {
					id: '3',
					name: 'text3',
					cover: '../../static/logo.png'
				}, {
					id: '4',
					name: 'text4',
					cover: '../../static/logo.png'
				}, {
					id: '5',
					name: 'text5',
					cover: '../../static/logo.png'
				}, ]
			}
		},
		onLoad() {
			
		},
		methods: {
			loadBook(id){
				uni.navigateTo({
					url:"../book/book?id=`${id}`"
				})
			}
		}
	}
</script>

<style>
	.title {
		margin: auto;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
	}

	.col {
		display: flex;
		flex-direction: column;
		width: calc((100% - 20px)/3);
		margin-top: 20px;
	}

	.col:nth-child(3n) {
		margin-right: 10px;
	}

	.col:nth-child(3n+1) {
		margin-left: 10px;
	}

	.cover {
		width: 100px;
		height: 140px;
		margin: auto;
	}
</style>
