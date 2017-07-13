<template>
	<div class="wrapper">
		<head-top class="header">
			<img slot="left" :src="require('../../assets/images/prev.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">Wallet</div>
		</head-top>
		<div class="container">
			<div class="top"></div>
			<div class="share">
				<h2 class="green">Share Your Refferal Link</h2>
				<div class="share-list">
					<h2>Email(Invite upto 5 friends)</h2>
					<div class="flex space-between">
						<input type="text" placeholder="abc@email.com"><a href="javascript:">Invite</a>
					</div>
				</div>
				<div class="share-list">
					<h2>Send SMS(Invite upto 5 friends)</h2>
					<div class="flex space-between">
						<input type="text" placeholder="9818xxxx"><a href="javascript:">Invite</a>
					</div>
				</div>
				<div class="share-list">
					<h2>Copy URL(Copy your unique url)</h2>
					<div class="flex space-between">
						<input type="text" placeholder="https://www.happeasygo.com/"><a href="javascript:">Invite</a>
					</div>
				</div>
				<div class="share-list flex content-start">
					<h2>Social media</h2>
					<a id="fac" href="javascript:"></a>
				</div>
			</div>
			<div class="section1">
				<h2 class="green">How It Works?</h2>
				<p>
					&bull; Start earning, login in your account.
				</p>
				<p>
					&bull; Go to the Referral Program and share your unique referral 
  					  link with your friends using any social channel of your choice.
				</p>
				<p>
					&bull; Your friends would need to register on happyeasygo.com 
					  using your unique referral link to get benefits. You will earn 
					  Rs.500 Happy Silver Cash in your Happy Wallet.Your friends 
					  will earn Rs. 2000 Happy Silver Cash in their Happy 
					  Wallet when they successfully sign up.
				</p>
				<p>
					&bull; When your friends make their booking, you will earn an 
					   additional bonus 10%*of the transaction value per order 
					   (up to a maximum of Rs.1000)  as Happy Silver Cash in 
					   your Happy Wallet.
				</p>
			</div>
			<div class="foot flex content-center">
				<a href="javascript:" @click="$router.push('referrerInfo')">Click here for Terms &amp; Conditions</a>
			</div>
		</div>	
	</div>
</template>
<script>
	import headTop from '../../components/head/head.vue'
	export default{
		components:{
			headTop
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
		height:12.9rem;
		background:url('../../assets/images/referral/Referral-banner.png') center no-repeat;
		background-size:100%;
	}
	.share{
		background-color:#fff;
		margin-top:0.4rem;
		padding:0.68rem;
		h2{
			font-size:0.68rem;
			height:1.2rem;
			line-height:1.2rem;
		}
		.share-list{
			text-align:left;
			margin:0.2rem 0;
			h2{
				color:#999;
			}
			div{
				padding:0.4rem 0;
			}
			input{
				width:80%;
				height:1.2rem;
				line-height:1.2rem;
				font-size:0.6rem;
				text-indent:0.4rem;
			}
			a{
				display:inline-block;
				width:20%;
				height:1.2rem;
				line-height:1.2rem;
				font-size:0.68rem;
				color:#fff;
				background-color:#ffa033;
				text-align:center;
			}
			#fac{
				width:7.2rem;
				height:1.36rem;
				background:url('../../assets/images/referral/facebook-icon.png') center no-repeat;
				background-size:7.2rem 1.36rem;
				display:block;
				margin-left:0.4rem;
			}

		}
	}
	.section1{
		padding:0.68rem;
		background-color:#fff;
		margin-top:0.4rem;
		h2{
			font-size:0.68rem;
			height:1.2rem;
			line-height:1.2rem;
		}
		p{
			font-size:0.6rem;
			text-align:left;
			color:#999;
			line-height:0.769rem;
			margin-top:0.4rem;
		}
	}
	.foot{
		background-color:#fff;
		padding:1rem 0;
		a{
			width:10.68rem;
			height:1.2rem;
			line-height:1.2rem;
			border:1px solid #ffa234;
			font-size:0.6rem;
			color:#ffa234;
			text-align:center;
			border-radius:0.2rem;
		}
	}
	::-webkit-input-placeholder{color:#ccc;font-size:0.6rem;padding-left:0.2rem}
	::-moz-placeholder{color:#ccc;font-size:0.6rem;padding-left:0.2rem}
	:-moz-placeholder{color:#ccc;font-size:0.6rem;padding-left:0.2rem}
</style>