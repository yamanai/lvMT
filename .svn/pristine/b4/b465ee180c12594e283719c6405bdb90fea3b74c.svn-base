<template>
	<div class="wrapper">
		<head-top>
			<img slot="left" :src="require('../../assets/images/close.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">Payment Options</div>
		</head-top>
		<div class="container">
			<div class="flight-info">
				<span>New Delhi</span>
				<span class="arive"></span>
				<span>Mumbai multi-city</span>
			</div>
			<div class="passenger-info">
				<span>28 Apr &bull; 1Adult &bull; 1Child &bull; 1Infant</span>
			</div>
			<div class="payment-method flex" >
			<mt-button class="pay-options" type="default" 
			v-for="(item, index) in options" :key="index"
			:class="{active:idx==index}"
			@click="payMethod(index)">{{item}}</mt-button>
			</div>
			<div class="payment-card" v-show="this.idx==0">
				<div class="card1">
					<span>**** **** **** ****</span>
					<span class="card-img"></span>
				</div>
				<div class="card2">
					<span>MM/YY</span>
					<span>CVV</span>
				</div>
			</div>
			<div class="payment-wallets" v-show='this.idx==2'>
				<div class="paytm">
					<span :class="{sure:isPaytm}" @touchstart="choosePay"></span>
				</div>
				<div class="paymoney">
					<span :class="{sure:!isPaytm}" @touchstart="choosePay"></span>
				</div>
			</div>
			<div class="apply flex">
				<span>Coupon code</span>
				<a href="#">Apply</a>
			</div>
			<div class="payment-detail">
				<h2>Total booking amount</h2>
				<h3>Rs:{{totalCount}}</h3>
				<p>Rs:225 per traveller is included as convenience fee By proceeding, you accenpt the <span>T&amp;C</span></p>
			</div>
			<div class="payment-pay">
				<!-- <input type="button" value="Pay securely now"> -->
				<mt-button class="pay" @click="payment" type="primary">Pay securely now</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
import headTop from '../../components/head/head.vue'
import {FlightOrder} from '../../models/flightorder'
	export default{
		components:{
			headTop
		},
		data(){
			return {
				idx:0,
				show:false,
				isPaytm:true,
				isPaymoney:false,
				options:[
					'Creadit/Debit Card',
					'Netbanking',
					'Wallets'
				]
			}
		},
		computed:{
			totalCount:function(){
				debugger
				let a =0;
				return this.$store.getters.flightOrder.departFlight.totalPrice
			} 
		},
		methods:{
			payMethod(index){

				this.idx=index;
			},
			choosePay(){
				this.isPaytm=!this.isPaytm;
			},
			payment(){
				debugger
				this.$store.getters.flightOrder.requestPaymentOrderInfo(this);

				debugger
			}
		}
	}
</script>
<style lang="less" scoped>
	.header{
		background:#f7f7f8;
		box-shadow:0 1px 5px #ccc;
		.title{
			line-height:2.04rem;
			font-size:0.768rem;
			color:#000;
		}
	}
	.container{
		padding:0 0.68rem;
	}
	.flight-info{
		padding-top:2.04rem;
		font-size:0.68rem;
		color:#666;
		height:1.4rem;
		line-height:1.4rem;
		text-align:left;
		span{
			display:block;
			height:inherit;
			float:left;
		}
		.arive{
			width:2.4rem;
			background:url('../../assets/images/ic-btn-one3.png') center no-repeat;
			background-size:0.8rem;
		}
	}
	.passenger-info{
		text-align:left;
		span{
			font-size:0.68rem;
			color:#8e8e8e;
		}
	}
	.payment-method{
		justify-content:space-between;
		padding:0.6rem 0;
		.pay-options{
			width:4.7rem;
			height:1.2rem;
			line-height:1.2rem;
			display:inline-block;
			background-color:#ccc;
			border-radius:0.2rem;
			font-size:0.4rem;
			color:#fff;
		}
		.active{
			background-color:#0cb78d;
		}
	}
	.payment-card{
		background-color:#fafafc;
		border-radius:0.4rem;
		padding:0 0.68rem;
		.card1{
			display:flex;
			display:-webkit-flex;
			justify-content:space-between;
			height:1.92rem;
			line-height:1.92rem;
			border-bottom:1px solid #ccc;
			.card-img{
				width:1.53rem;
				display:inline-block;
				background:url('../../assets/images/payment/payment-card.png') center no-repeat;
				background-size:1.53rem;
			}
		}
		.card2{
			height:1.92rem;
			line-height:1.92rem;
			text-align:left;
			span{
				font-size:0.94rem;
				color:#ccc;
				padding-right:0.6rem;
			}
		}
	}
	.payment-wallets{
		padding:0 0.68rem;
		background-color:#fafafc;
		border-radius:0.4rem;
		.paytm,.paymoney{
			height:1.92rem;
			line-height:1.92rem;
			text-align:left;
			span{
				width:0.64rem;
				height:0.64rem;
				border:1px solid #ccc;
				border-radius:50%;
			}
		}
		.paytm{
			background:url('../../assets/images/payment/payment-paytm.png') 1.06rem center no-repeat;
			background-size:2.56rem;

		}
		.paymoney{
			background:url('../../assets/images/payment/payment-money.png') 1.06rem center no-repeat;
			background-size:2.56rem;
		}
		.sure{
			border:1px solid #ffad3d!important;
			background:#ffad3d url('../../assets/images/sure.png') center no-repeat;
			background-size:0.64rem;
		}
	}
	.apply{
		justify-content:space-between;
		height:1.92rem;
		line-height:1.92rem;
		padding:0 0.68rem;
		background-color:#fff;
		border-radius:0.4rem;
		margin-top:0.68rem;
		span{
			font-size:0.768rem;
			color:#ccc;
		}
		a{
			font-size:0.768rem;
			color:#ffad3d;
		}
	}
	.payment-detail{
		h2{
			font-size:0.768rem;
			color:#333;
			padding:0.68rem 0
		}
		h3{
			font-size:1.02rem;
			color:#333;
			padding:0.4rem 0
		}
		p{
			font-size:0.68rem;
			color:#666;
			line-height:1.02rem;
			span{
				color:#0b9d78;
			}
		}
	}
	.payment-pay{
		padding-top:1.02rem;
		.pay{
			width:12.56rem;
			height:1.88rem;
			background-color:#ffad3d;
			color:#fff;
			font-size:0.768rem;
		}
	}
</style>

