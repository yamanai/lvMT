<template>
	<div class="fareRules">
		<head-top class="header">
			<img slot="left" :src="require('../../../assets/images/close.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">Fare rules</div>
			<div slot="right" class="set"></div>
		</head-top>
		<div class="fare-cont">
			<div class="fare-fee">
				<h2>Cancellation fee</h2>
				<div class="fare-fee-info">
					
					<div class="flex space-between">
						<span>Airline fee&amp;HappyEasyGo fee</span>
						<span><i class="rs">Rs.</i>{{rebookinfo}}</span>
					</div>
				</div>
			</div>
			<div class="fare-fee">
				<h2>Change flight fee</h2>
				<div class="fare-fee-info">
					
					<div class="flex space-between">
						<span>Airline fee&amp;HappyEasyGo fee</span>
						<span><i class="rs">Rs.</i>{{refundinfo}}</span>
					</div>
				</div>
			</div>
			<div class="note">
				<h2>Please note</h2>
				<p>Cancellation/Flight change charges, composed of both airline fees and HappyEasyGo fees, are indicative. cancellation/Flight change requests<span>3 hours</span> before flight departure</p>
			</div>
		</div>
	</div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
import {Toast} from 'mint-ui'
import {FlightOrder} from '../../../models/flightorder'
	export default{
		components:{
			headTop
		},
		data(){
			return{
				rebookinfo:"",
				refundinfo:""
			}
		},
		mounted:function(){
			//let flightNo = this.flightorder
			//debugger
			let flightNo = this.$route.query.flightNo;
			let departTimeStamp =  this.$route.query.departTimeStamp;
			let averagePrice = this.$route.query.averagePrice;
			FlightOrder.getFareRule(flightNo,departTimeStamp, averagePrice,this).then(res=>{
				this.rebookinfo = res.rebookinfo
				this.refundinfo = res.refundinfo
			},(error)=>{
			 	Toast(error)
			})
		}
	}
</script>
<style lang="less" scoped>
	
	.fareRules{
		width:100%;
		height:100%;
		position:fixed;
		z-index:10;
		overflow:scroll;
		.header{
			background:#f7f7f8;
			box-shadow:0 1px 5px #ccc;
			z-index:10;
			.title{
				line-height:2.04rem;
				font-size:1.02rem;
				color:#000;
			}
		}
		.fare-cont{
			height:100%;
			background-color:#efeff4;
			padding:0 0.68rem;
			.fare-fee{
				padding-top:2.4rem;
				h2{
					font-size:0.68rem;
					color:#333;
					text-align:left;
					text-indent:0.4rem;
					line-height:1.8rem;
				}
				.fare-fee-info{
					background-color:#fff;
					border-radius:0.4rem;
					padding:0.4rem;
					div{
						span{
							font-size:0.56rem;
							color:#999;
							height:1.8rem;
							line-height:1.8rem;
						}
					}
					div:nth-of-type(1){
						border-bottom:1px solid #eee;
					}
				}
			}
			.note{
				h2{
					font-size:0.68rem;
					color:#333;
					text-align:left;
					text-indent:0.4rem;
					line-height:1.8rem;
				}
				p{
					font-size:0.56rem;
					color:#999;
					text-align:left;
					text-indent:0.4rem;
					padding:0 0.4rem;
					line-height:0.68rem;
					span{
						font-size:0.6rem;
						color:#000;
					}
				}
			}
		}
	}
</style>