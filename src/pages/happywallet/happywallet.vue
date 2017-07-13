<template>
	<div class="wrapper">
		<head-top class="header">
			<img slot="left" :src="require('../../assets/images/prev.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">Happy Wallet</div>
		</head-top>
		<div class="container">
			<div class="section1">
				<div class="price1">
					<h2><span class="rs">Rs.</span>15800</h2>
					<p>Credit Available</p>
				</div>
				<div class="price2 flex space-between">
					<div class="silver br">
						<h2><span class="rs">Rs.</span>19250</h2>
						<p>Happy Silveris</p>
					</div>
					<div class="gold">
						<h2><span class="rs">Rs.</span>10025</h2>
						<p>Happy Gold</p>
					</div>
				</div>
			</div>
			<div class="section2">
				<div class="content">
					<div class="text">
						<p>
							Happy Wallet is your personal travel currency , You can save on your travel bookings when you book using happy wallet Unless specified, the term ‘Happy Wallet' means Happy Gold &amp; Happy Silver
							INR 1 of Happy Gold/Happy Silver = INR 1
							Know more
						</p>
						<a class="yellow" href="javascript:">Know more</a>
					</div>
					<div class="btn flex space-between">
						<a class="yellow" href="javascript:">Exchange</a>
						<a class="yellow" href="javascript:">Withdraw</a>
						<a class="yellow" href="javascript:">Recharge</a>
					</div>
				</div>
				<div class="aside flex content-center">
					<h2><span class="price rs">Rs.</span><span class="price">58</span> will expire at <span class="date">Web Jul 2017</span></h2>
				</div>
			</div>
			<div class="section3">
				<h2 class="green">Happy Wallet</h2>
				<div class="silver">
					<h3>Happy Silver</h3>
					<p>
						Happy Silver can be used to save your payment when you 
						book your Domestic Flight as an instant discount cash. 
					</p>
					<a class="yellow" href="javascript:">Know More</a>
				</div>
				<div class="gold">
					<h3>Happy Gold</h3>
					<p>
						Happy Gold can be used to pay for your order and 
						withdraw as well. Just like your own cash. 
					</p>
					<a class="yellow" href="javascript:">Know More</a>
				</div>
			</div>
			<div class="section4">
				<div class="btn flex space-between">
                    <a :class="{selec:isChooseB}" @click="isChooseB=!isChooseB">Happy Silver</a>
                    <a :class="{selec:!isChooseB}" @click="isChooseB=!isChooseB">Happy Gold</a>
                </div>
                <div class="detail">
                	<ul>
                		<li class="flex space-between">
                			<span>Date &amp; Order</span>
                			<span>Web Jul 2017</span>
                		</li>
                		<li class="flex space-between">
                			<span>Type</span>
                			<span>Rechange</span>
                		</li>
                		<li class="flex space-between">
                			<span>Amount</span>
                			<p class="green"><span class="rs">Rs.</span>19250</p>
                		</li>
                		<li class="flex space-between">
                			<span>Balance</span>
                			<p><span class="rs">Rs.</span>9250</p>
                		</li>
                	</ul>
                </div>
			</div>
		</div>
	</div>
</template>
<script>
	import headTop from'../../components/head/head.vue'
	export default{
		components:{
			headTop
		},
		data(){
			return {
				isChooseB:true
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
	.section1{
		padding:2.4rem 0.68rem 0;
		background-color:#0b9d78;
		h2{
			font-size:0.68rem;
			color:#fefeff;
			line-height:1rem;
		}
		p{
			font-size:0.6rem;
			color:#ddd;
		}
		.price1{
			padding:0.8rem 0;
			border-bottom:1px solid #73bdae;
		}
		.price2{
			.silver,.gold{
				padding:0.8rem 0 3rem;
				width:50%;
			}
		}
		.br{
			border-right:1px solid #73bdae;
		}
	}
	.section2{
		background-color:#fff;
		margin:0 0.68rem;
		position:relative;
		border-radius:0.2rem;
		top:-0.4rem;
		.content{
			text-align:left;
			padding:1.4rem 0.4rem 1rem;
			p{
				font-size:0.52rem;
				color:#999;
				text-align:left;
				line-height:0.769rem;
			}
			a{
				text-decoration:underline;
				font-size:0.52rem;
			}
			.btn{
				padding-top:1rem;
				a{
					display:block;
					width:30%;
					padding:0.3rem 0;
					border:1px solid #ffa234;
					text-align:center;
					text-decoration:none;
					border-radius:0.2rem;
				}
			}
		}
		.aside{
			position:absolute;
			width:100%;
			top:-1rem;
			h2{
				font-size:0.68rem;
				color:#999;
				height:1.92rem;
				line-height:1.92rem;
				border-radius:1rem;
				padding:0 0.8rem;
				background-color:#fff;
				box-shadow:0 2px 5px #ccc;
				.price{
					color:#ff0000;
				}
				.date{
					color:#666;
				}
			}

		}
	}
	.section3{
		margin:0 0.68rem;
		padding:0.4rem;
		border-radius:0.2rem;
		background-color:#fff;
		h2{
			font-size:0.68rem;
			padding:0.28rem 0 0.68rem;
		}
		.silver,.gold{
			border-top:1px solid #ccc;
			text-align:left;
			padding-bottom:0.4rem;
			h3{
				text-align:left;
				font-size:0.6rem;
				color:#666;
				font-weight:normal;
				padding:0.4rem 0;
			}
			p{
				text-align:left;
				font-size:0.52rem;
				line-height:0.769rem;
				color:#999;
			}
			a{
				width:3.4rem;
				padding-right:0.4rem;
				font-size:0.52rem;
				display:block;
				background:url('../../assets/images/wallet/HappyWallet_03.png') right center no-repeat;
				background-size:0.52rem;
			}
		}
	}
	.section4{
		margin:0.4rem 0.68rem;
		padding:0.4rem;
		background-color:#fff;
		border-radius:0.2rem;
		.selec{
			background-color:#0b9d78;
			color:#fff!important;
		}
		.btn{
			width: 10.68rem; 
	        height: 1.276rem; 
	        border: 1px solid #0b9d78;
	        border-radius: 2px;
	        margin:0 auto;
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
		.detail{
			padding-top:1rem;
			ul>li{
				font-size:0.6rem;
				color:#999;
				height:1.6rem;
				line-height:1.6rem;
				border-bottom:1px solid #ccc;
			}
		}
	}
</style>