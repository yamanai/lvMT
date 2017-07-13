<template>
	<div class="wrapper">
		<div class="offer">
			<head-top class="header">
				<img slot="left" :src="heads.img" alt="">
				<span slot="title">{{heads.title}}</span>
				<img slot="right" :src="heads.img2" alt="">
			</head-top>
			<div class="offer-cont">
				<div class="offer-list" v-for="(item,index) in offerCont">
					<div class="offer-img">
						<img :src="item.img" alt="">
					</div>
					<div class="offer-info flex">
						<div class="left">
							<h2>{{item.tit1}}</h2>
							<h3>{{item.tit1}}</h3>
							<span>{{item.timer}}</span>
						</div>
						<div class="right">
							<div class="log">
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
					<div class="offer-more flex">
						<a>Know more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import headTop from '../../components/head/head.vue'
	export default {
		components:{
			headTop
		},
		data(){
			return {
				heads:{
					img:require('../../assets/images/offer/ic-3.png'),
					title:'Exclusive Mobile Offers',
					img2:require('../../assets/images/offer/ic-4.png')
				},
				offerCont:[
					{
						img:require('../../assets/images/offer/t1.png'),
						tit1:'Get Free Opportunity on your order',
						tit2:"Let's happy together'",
						timer:'2017/06-2018/06',
					},
					{
						img:require('../../assets/images/offer/t2.png'),
						tit1:'Save INR .200 on your Flight Booking',
						tit2:"Give you the Happy Price you want'",
						timer:'',
					}
				]
			}
		}
	}
</script>
<style lang="less" scoped>
	.offer{
		background-color:#efeff4;
		height:100%;
		.header{
			background-color:#f7f7f9;
			box-shadow:0 1px 3px #ccc;
			span{
				color:#333;
				font-size:0.769rem;
			}
		}
		.offer-cont{
			padding:2.6rem 0.68rem 0;
			.offer-list{
				background-color:#fff;
				border-radius:0.4rem;
				padding-bottom:0.6rem;
				margin-bottom:0.85rem;
			}
			.offer-img{
				img{
					width:100%;
				}
			}
			.offer-info{
				justify-content:space-between;
				.left{
					text-align:left;
					padding-left:0.4rem;
					h2{
						font-size:0.6rem;
						color:#333;
						text-align:left;
						line-height:0.8rem;
					}
					h3{
						font-size:0.56rem;
						color:#666;
						font-weight:normal;
						line-height:0.8rem;
						text-align:left;
					}
					span{
						font-size:0.5rem;
						color:#999;
						line-height:0.68rem;
						display:block;
					}
				}
				.right{
					.log{
						padding-right:0.4rem;
						span{
							width:0.72rem;
							height:0.72rem;
						}
						span:nth-of-type(1){
							background:url('../../assets/images/offer/ic-f.png') center no-repeat;
							background-size:0.72rem;
						}
						span:nth-of-type(2){
							background:url('../../assets/images/offer/ic-t.png') center no-repeat;
							background-size:0.72rem;
						}
					}
				}
			}
			.offer-more{
				justify-content:flex-end;
				padding-right:0.4rem;
				a{
					color:#fff;
					font-size:0.5rem;
					width:5.34rem;
					height:0.85rem;
					line-height:0.85rem;
					border-radius:0.2rem;
					background-color:#ffad3d;
					display:block;
				}
			}
		}
	}

</style>
<!-- <div class="offer-list">
	<div class="offer-img">
		<img :src="offerCont[0].img" alt="">
	</div>
	<div class="offer-info">
		<div class="left">
			<h2>Get Free Opportunity on your order</h2>
			<h3>Let's happy together</h3>
			<span>2017/06-2018/06</span>
		</div>
		<div class="right">
			<div class="log">
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
	<div class="offer-more">
		<a>Know more</a>
	</div>
</div> -->