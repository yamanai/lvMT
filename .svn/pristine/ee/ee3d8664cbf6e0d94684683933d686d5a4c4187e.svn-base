<template>
	<div class="wrapper" ref="viewbox">
		<head-top class="header">
			<img slot="left" :src="require('../../assets/images/prev.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">Wallet</div>
		</head-top>
		<div class="container">
			<div class="top"></div>
			<div class="section1">
				<div class="silver">
					<div class="title">Happy Silver</div>
					<div class="text">
						<p>
							Happy Silver can be used to save your payment 
							when you book your Domestic Flight as an instant 
							discount cash. 
						</p>
					</div>
				</div>
				<div class="gold">
					<div class="title">Happy Gold</div>
					<div class="text">
						<p>
							Happy Gold can be used to pay for your order and 
							withdraw as well. Just like your own cash. 
						</p>
					</div>
				</div>
			</div>
			<div class="section2">
				<div class="text">
					<p>
						There are several ways to earn more Happy Wallet 
						Cash. Let's take a look and get start step by step.
					</p>
				</div>
				<div class="box box1">
					<h2>Get Happy Wallet Cash by Signing up</h2>
					<p>
						Earn Happy Silver <span class="yellow">Rs.</span><span class="green">2000</span> <br>Just for new user
					</p>
					<a href="javascript:" @click="$router.push('/register')">Sign up</a>
					<div class="num"></div>
				</div>
				<div class="box box2">
					<h2>If you are a Business Flyer, it's easy for you to earn more Happy Wallet cash</h2>
					<p>
						Book Your Business Flight &amp; Earn<br> your own Happy Gold Cash.
					</p>
					<a href="javascript:" @click="$router.push('/cashback')">Know More</a>
					<div class="num"></div>
				</div>
				<div class="box box3">
					<h2>Now you have chance to get even more</h2>
					<p>
						Recharge your Happy Gold Account
						You will be given additional
						Cash Reward
					</p>
					<a href="javascript:">Know More</a>
					<div class="num"></div>
				</div>
				<div class="box box4">
					<h2>Focus on our Social Media or Email Info</h2>
					<p>
						We will send some coupon on special day, you can exchange Happy Wallet Cash by using it.
					</p>
					<div class="coupon flex content-end align-items-center">
						<input type="text" placeholder="Coupon Code"><a href="javascript:">Apply code</a>
					</div>
					<div class="aside flex content-end">
						<img :src="require('../../assets/images/cashback/icon-12.png')" alt="">
						<img :src="require('../../assets/images/cashback/icon-13.png')" alt="">
						<img :src="require('../../assets/images/cashback/icon-14.png')" alt="">
					</div>
					<div class="num"></div>
				</div>
			</div>
			<div class="foot flex content-center">
				<a href="javascript:" @click="$router.push('wallet/rules')">Click here for Terms &amp; Conditions</a>
			</div>
		</div>
	</div>
</template>
<script>
import headTop from '../../components/head/head.vue'
import rules from './child/rules.vue'

	export default{
		components:{
			headTop,
			rules
		},
		data(){
			return {
				scrollTop:document.body.scrollTop
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
		background:#fff url('../../assets/images/wallet/wallet-app-silver_01.png') center no-repeat;
		background-size:100% 9.8rem;
	}
	.section1:before{
		display:table;
		content:'';
	}
	.section1{
		padding:0.4rem 0.68rem;
		background-color:#fff;
		.silver,.gold{
			margin-top:0.4rem;
			border:1px solid #999;
			box-sizing:border-box;
			.title{
				font-size:0.64rem;
				color:#999;
				height:1.5rem;
				line-height:1.5rem;
				text-align:left;
				text-indent:0.4rem;
			}
			.text{
				padding:0.4rem;
				p{
					font-size:0.6rem;
					color:#999;
					line-height:0.769rem;
					text-align:left;
				}	
			}
			
		}
		.silver .title{
			background:url('../../assets/images/wallet/HappySilver-bg.jpg') center no-repeat;
			background-size:100% 1.5rem;
		}
		.gold .title{
			background:url('../../assets/images/wallet/HappyGold-bg.jpg') center no-repeat;
			background-size:100% 1.5rem;
		}
	}
	.section2{
		padding:0.4rem 0.68rem;
		background-color:#fff;
		margin-top:0.4rem;
		.text{
			padding:0.4rem;
			p{
				font-size:0.56rem;
				color:#ffa234;
				line-height:0.769rem;
				text-align:left;
			}
		}
		.box{
			border:1px #999 dashed;
			padding:0.4rem 1rem;
			position:relative;
			margin-top:0.4rem;
			h2{
				font-size:0.6rem;
				color:#333;
				line-height:1rem;
			}
			p{
				font-size:0.52rem;
				color:#999;
				line-height:1rem;
			}
			a{
				display:inline-block;
				background-color:#ffa234;
				color:#fff;
				font-size:0.52rem;
				width:3.6rem;
				height:1.1rem;
				line-height:1.02rem;
				margin-top:0.4rem;
				border-raius:0.4rem;
				text-align:center;
			}
			.num{
				width:1.36rem;
				height:1.36rem;
				border-radius:50%;
				border:1px #999 dashed;
				position:absolute;
				top:50%;
				margin-top:-0.68rem;
			}
		}
		.box1{
			background:url('../../assets/images/wallet/sign-icon.png') right bottom no-repeat;
			background-size:3.8rem;
			text-align:left;
			h2,p{
				text-align:left;
			}
			.num{
				left:-0.68rem;
				background:url('../../assets/images/wallet/01.png') center no-repeat;
				background-size:100%;
			}
		}
		.box2{
			background:url('../../assets/images/wallet/wallet-app_08.png') left bottom no-repeat;
			background-size:3.8rem;
			text-align:right;
			h2,p{
				text-align:right;
			}
			
			.num{
				right:-0.68rem;
				background:url('../../assets/images/wallet/02.png') center no-repeat;
				background-size:100%;
			}
		}
		.box3{
			background:url('../../assets/images/wallet/wallet-app_12.png') right bottom no-repeat;
			background-size:3.8rem;
			text-align:left;
			h2,p{
				text-align:left;
			}
			.num{
				left:-0.68rem;
				background:url('../../assets/images/wallet/03.png') center no-repeat;
				background-size:100%;
			}
		}
		.box4{
			background:url('../../assets/images/wallet/wallet-app_03.png') left bottom no-repeat;
			background-size:3.8rem;
			text-align:right;
			h2,p{
				text-align:right;
			}
			.coupon{
				margin-top:0.4rem;
				input{
					height:1.02rem;
					width:6rem;
					border:1px solid #ccc;
					padding-left:0.4rem;
					text-indent:0;
				}
				a{
					margin-top:0;
				}
			}
			.aside{
				img{
					width:1.6rem;
					height:1.6rem;
					margin-top:0.8rem;
				}
			}
			.num{
				right:-0.68rem;
				background:url('../../assets/images/wallet/04.png') center no-repeat;
				background-size:100%;
			}
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
</style>