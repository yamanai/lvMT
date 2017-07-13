<template>
	<div class="wrapper">
		<head-top class="header">
			<img slot="left" :src="require('../../assets/images/prev.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">Cashback Program</div>
		</head-top>
		<div class="container">
			<div class="top"></div>
			<div class="section1">
				<ul>
					<li class="flex content-start">
						<img :src="require('../../assets/images/cashback/icon-1.png')" alt="">
						<p>Validity From <span class="yellow">1 Jul 2017</span></p>
					</li>
					<li class="flex content-start">
						<img :src="require('../../assets/images/cashback/icon-1.png')" alt="">
						<p>Applicable <span class="yellow">on Domestic Flights</span></p>
					</li>
					<li class="flex content-start">
						<img :src="require('../../assets/images/cashback/icon-1.png')" alt="">
						<p>Applicable for <span class="yellow">PC Site &amp; Moble Site</span></p>
					</li>
					<li class="flex content-start align-items-center">
						<img :src="require('../../assets/images/cashback/icon-1.png')" alt="">
						<p>Expires in <span class="yellow">∞</span></p>
					</li>
				</ul>
			</div>
			<div class="section2">
				<h2 class="yellow">HappyEasyGo Cashback Program</h2>
				<p>
					From now on, if you are Business Flyer and have been our member, Congratulations!
				</p>
				<p>
					You can earn up to Rs.1510 cash per order in your own wallet when you book your Business Flight on Happyeasygo.com.
				</p>
				<p>
					OOPS, You haven't registered yet? 
					Come on, <span class="yellow" @click="$router.push('/register')">click</span> here to join us and start to experience 
					HappyEasyGo Cashback Program right now! 
				</p>
			</div>
			<div class="section3">
				<h2 class="yellow">About The Offer</h2>
				<h4>How to get your Cashback</h4>
				<div class="list flex flex-start align-items-center">
					<div class="ico">
						<img :src="require('../../assets/images/cashback/icon-6.png')" alt="">
					</div>
					<div class="text">
						<p>
							Select your flight and choose ‘Get XXX Cash 
							Back after Your Booking' under the 
							flight on search result page.
						</p>
					</div>
				</div>
				<div class="list flex flex-start align-items-center">
					<div class="ico">
						<img :src="require('../../assets/images/cashback/icon-7.png')" alt="">
					</div>
					<div class="text">
						<p>
							You will be shown the original price that you 
							should pay now, then click on book.
						</p>
					</div>
				</div>
				<div class="list flex flex-start align-items-center">
					<div class="ico">
						<img :src="require('../../assets/images/cashback/icon-8.png')" alt="">
					</div>
					<div class="text">
						<p>
							Complete the rest process on flight booking page.
						</p>
					</div>
				</div>
				<div class="list flex flex-start align-items-center">
					<div class="ico">
						<img :src="require('../../assets/images/cashback/icon-9.png')" alt="">
					</div>
					<div class="text">
						<p>
							Pay securely &amp; complete your booking.
						</p>
					</div>
				</div>
				<div class="list flex flex-start align-items-center">
					<div class="ico">
						<img :src="require('../../assets/images/cashback/icon-10.png')" alt="">
					</div>
					<div class="text">
						<p>
							Cash back will be credited into your Happy 
							Gold Account when you finished your booking.
						</p>
					</div>
				</div>
				<div class="line"></div>
			</div>
			<div class="section4">
				<h2>Total Amount of Cashback</h2>
				<p>
					You will get the difference amount between original price and instant discount price.
				</p>
				<p>
					<strong>For Example:</strong> If the instant discount amount of the Flight that 
					you select is Rs. 600, then you will get the amount of 
					Rs. 600 cashback in your Happy Gold Account.
				</p>
				<p>
					&bull; The cashback is dependant on a unique booking ID/PNR 
				    and not on the number of passengers, number of flights or 
				    one-way / return booking.
				</p>
				<p>
					&bull; Coupons and Happy Silver discounts can not be used at the same time.
				</p>
			</div>
			<div class="section5">
				<h2 class="yellow">FAQS</h2>
				<div class="list">
					<h2>What is the HappyEasyGo Cashback?</h2>
					<div class="text">
						<p>
							HappyEasyGo Cashback is a special reward plan provided 
							to the business person who register and book flights 
							through Happyeasygo.com.
						</p>
					</div>
				</div>
				<div class="list">
					<h2>Where and when will I receive my cashback?</h2>
					<div class="text">
						<p>
							We will credit your cashback amount to your Happy 
							Gold Account within 5 days after your booking, which you 
							can use to pay for any order on Happyeasygo.com. 
						</p>
					</div>
				</div>
				<div class="list">
					<h2>What is Happy Gold?</h2>
					<div class="text">
						<p>
							Happy Gold is one kind of e-cash under our Happy 
							Wallet Program, Happy Gold has no usage limits &amp; 
							unlimited validity and can be withdrawn as well.
							<span @click="$router.push('/wallet')">Know more about Happy Wallet Program.</span>
						</p>
					</div>
				</div>
			</div>
			<div class="btn flex content-center">
				<a href="javascript:" @click="$router.push('/happywallet')">Know more about Happy Wallet Program.</a>
			</div>
			<div class="terms">
				<h2 class="yellow">Terms and Conditions</h2>
			</div>
			<div class="share" v-show='false'>
				<h2 class="yellow">Share this Offer</h2>
				<div class="ico flex space-between">
					<img :src="require('../../assets/images/cashback/icon-12.png')" alt="">
					<img :src="require('../../assets/images/cashback/icon-13.png')" alt="">
					<img :src="require('../../assets/images/cashback/icon-14.png')" alt="">
				</div>
				<div class="input-group">
					<div class="list flex space-between">
						<input type="text" placeholder="Enter your email">
						<a href="javascript:">Send</a>
					</div>
					<div class="list flex space-between">
						<input type="text" placeholder="https://www.happyeasygo.com/">
						<a href="javascript:">Copy</a>
					</div>
				</div>
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
		height:9.8rem;
		background:#fff url('../../assets/images/cashback/Cashback-banner.jpg') center no-repeat;
		background-size:100% 9.8rem;
	}
	.section1{
		padding:0.4rem 0.68rem 1rem;
		background-color:#fff;
		ul li{
			padding:0.4rem 0;
			border-bottom:1px solid #ccc;
			img{
				width:0.769rem;
				height:0.769rem;
			}
			p{
				font-size:0.68rem;
				color:#999;
				padding-left:0.4rem;
			}
		}
	}
	.section2{
		padding:0.68rem;
		margin-top:0.4rem;
		background-color:#fff;
		h2{
			font-size:0.6rem;
		}
		p{
			font-size:0.52rem;
			color:#999;
			text-align:left;
			line-height:0.769rem;
			margin:0.4rem 0;
		}
	}
	.section3{
		position:relative;
		background-color:#fff;
		margin-top:0.4rem;
		padding:0.68rem;
		h2{
			font-size:0.6rem;
			padding:0.6rem 0;
		}
		h4{
			font-size:0.6rem;
			color:#666;
			font-weight:normal;
			text-align:left;
			padding:0.2rem 0;
		}
		.line{
			width:1px;
			height:10.2rem;
			background-color:#ffa033;
			position:absolute;
			left:1.36rem;
			top:4.68rem;
			z-index:1;
		}
		.list{
			padding:0.4rem 0;
			.ico{
				z-index:2;
				img{
					width:1.32rem;
				}
			}
			.text{
				p{
					font-size:0.52rem;
					color:#999;
					text-align:left;
					padding-left:0.4rem;
					line-height:0.769rem;
				}
			}
		}
	}
	.section4{
		padding:0.6rem;
		background-color:#fff;
		h2{
			font-size:0.68rem;
			color:#666;
			text-align:left;
			padding:0.4rem 0;
		}
		p{
			font-size:0.52rem;
			color:#999;
			line-height:0.769rem;
			margin:0.4rem 0;
			text-align:left;
		}
	}
	.section5{
		padding:0 0.68rem 0.68rem;
		background-color:#fff;
		margin-top:0.4rem;
		h2{
			font-size:0.6rem;
			padding:0.68rem 0;
		}
		.list{
			h2{
				text-align:left;
				padding:0.4rem 0 0.4rem 1rem;
				color:#666;
				background:url('../../assets/images/cashback/icon-11.png') left center no-repeat;
				background-size:0.8rem;
			}
			.text{
				padding:0.68rem;
				background-color:#fbfbfb;
				p{
					font-size:0.52rem;
					color:#999;
					line-height:0.769rem;
					text-align:left;
				}
			}
		}
	}
	.btn{
		background-color:#fff;
		padding:1rem 0;
		a{
			height:1.2rem;
			line-height:1.2rem;
			border:1px solid #ffa234;
			font-size:0.52rem;
			color:#ffa234;
			text-align:center;
			border-radius:0.2rem;
			padding:0 0.2rem;
		}
	}
	.terms{
		margin-top:0.4rem;
		padding:0 0.68rem;
		background-color:#fff;
		h2{
			font-size:0.6rem;
			height:2rem;
			line-height:2rem;
			background:url('../../assets/images/cashback/Cashback-app_39.png') right center no-repeat;
			background-size:0.68rem;
		}
	}
	.share{
		padding:0.68rem;
		margin-top:0.4rem;
		background-color:#fff;
		h2{
			font-size:0.6rem;
			height:2rem;
			line-height:2rem;
		}
		.ico{
			padding:0 2rem;
			img{
				width:1.6rem;
				height:1.6rem;
			}
		}
		.input-group{
			padding:0.6rem 0 1rem;
			.list{
				margin-top:0.4rem;
				input{
					width:80%;
					text-indent:0.4rem;
					height:1.2rem;
					line-height:1.2rem;
					font-size:0.6rem;
					border:1px solid #eee;
				}
				a{
					display:block;
					width:20%;
					height:1.2rem;
					line-height:1.2rem;
					text-align:center;
					background-color:#ffa033;
					color:#fff;
					font-size:0.6rem;
				}
			}
		}
	}
	::-webkit-input-placeholder{color:#ccc;font-size:0.6rem;padding-left:0.2rem}
	::-moz-placeholder{color:#ccc;font-size:0.6rem;padding-left:0.2rem}
	:-moz-placeholder{color:#ccc;font-size:0.6rem;padding-left:0.2rem}
</style>