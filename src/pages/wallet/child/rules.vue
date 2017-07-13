<template>
	<div class="wrapper">
		<head-top class="header">
			<img slot="left" :src="require('../../../assets/images/prev.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">Wallet</div>
		</head-top>
		<div class="container">
			<div class="top"></div>
			<div class="section1">
				<h2>Happy Wallet Usage Rules</h2>
				<div class="content">
					<p>Happy Wallet can be used for any booking make on HappyEasyGo via our website, mobile website and App only.</p>
					<p>HappyEasyGo holds the right to cancel all or partial Happy Wallet Cash granted to the user by HappyEasyGo at any point in time without any prior notice.</p>
					<p>In case of any disputes, HappyEasyGo's decision will be final.</p>
				</div>
				<div class="content">
					<p>
						Happy Wallet is your personal travel currency , You can save 
						on your travel bookings when you book using happy wallet
						Unless specified, the term ‘Happy Wallet' means 
						Happy Gold &amp; Happy Silver<br>
						INR 1 of Happy Gold/Happy Silver = INR 1
					</p>
				</div>
			</div>
			<div class="section2">
				<div class="choose flex content-center align-items-center">
	                <div class="btn flex space-between">
	                    <a id="oneway" :class="{green:isChooseA}" @click="isChooseA=!isChooseA">Happy Silver</a>
	                    <a id="roundtrip" :class="{green:!isChooseA}" @click="isChooseA=!isChooseA">Happy Gold</a>
	                </div>
	            </div>
	            <silver-a v-show='isChooseA'></silver-a>
	            <gold-a v-show='!isChooseA'></gold-a>
			</div>
			<div class="section2">
				<div class="choose flex content-center align-items-center">
	                <div class="btn flex space-between">
	                    <a id="oneway" :class="{green:isChooseB}" @click="isChooseB=!isChooseB">Other Rules</a>
	                    <a id="roundtrip" :class="{green:!isChooseB}" @click="isChooseB=!isChooseB">Cancellation Rules</a>
	                </div>
	            </div>
	            <silver-b v-show='isChooseB'></silver-b>
	            <gold-b v-show='!isChooseB'></gold-b>
			</div>
		</div>	
	</div>
</template>
<script>
	import headTop from '../../../components/head/head.vue'
	import silverA from './base/silverA.vue'
	import silverB from './base/silverB.vue'
	import goldA from './base/goldA.vue'
	import goldB from './base/goldB.vue'
	export default{
		components:{
			headTop,
			silverA,
			silverB,
			goldA,
			goldB
		},
		data(){
			return {
				isChooseA:false,
				isChooseB:false,
			}
		}
	}
</script>
<style lang='less' scoped>
	.wrapper{
		font-family:"PingFangSC";
	}
	.header{
		background:transparent;
		.title{
			line-height:2.04rem;
			font-size:0.768rem;
			color:#fff;
		}
	}
	.top{
		height:9.8rem;
		background:#fff url('../../../assets/images/wallet/wallet-app-silver_01.png') center no-repeat;
		background-size:100% 9.8rem;
	}
	.green{
		background-color:#0b9d78;
		color:#fff!important;
	}
	.section1{
		padding:0 0.68rem 0.769rem;
		background-color:#fff;
		h2{
			font-size:0.6rem;
			color:#0b9d78;
		}
		.content{
			font-size:0.52rem;
			color:#999;
			padding-top:0.769rem;
			p{
				text-align:left;
				line-height:0.769rem;
			}
		}
	}
	.section2{
		padding:0.768rem 0.68rem;
		margin-top:0.4rem;
		background-color:#fff;
		.choose{
			.btn{
				width: 10.68rem; 
		        height: 1.276rem; 
		        border: 1px solid #0b9d78;
		        border-radius: 2px;
		        a{
		        	width: 50%;
			        height: 100%;
			        font-size: 0.52rem; 
			        color: #333;
			        line-height: 1.276rem;
			        text-align: center;
			        display: block;
		        }
			}
		}
	}
</style>