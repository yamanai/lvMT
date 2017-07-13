<template>
	<div class="wrapper">
		<div class="failure">
		<div class="failure-cont flex">
			<img :src="require('../../assets/images/payment/success.png')" alt="" v-if="imgShow">
			<img :src="require('../../assets/images/payment/failure.png')" alt="" v-else>

			<h2>{{markInfo}}</h2>
			<mt-button class="btn" @click="$router.push('/home')" v-if="imgShow" type="danger">Back home page</mt-button>
			<mt-button class="btn" @click="$router.push('/home')" v-else type="danger">Back home page</mt-button>
		</div>
	</div>
	</div>
</template>
<script>
import failure from './child/failure.vue'
import success from './child/success.vue'
import {FlightOrder} from '../../models/flightorder'
import {Toast} from 'mint-ui'
	export default{
	
		data(){
			return{
				f:false,
				mark:""
			}
		},
		mounted:function(){
				let param = window.location.search
				let arr = param.split("=")
				let orderNumber = "";
				if(arr.length==2){
					orderNumber = arr[1]
				}
				FlightOrder.isOrderPayed(this,orderNumber).then((res)=>{
						this.f = true
				},(err)=>{
					console.log(err)
				})
			},
			computed:{
				markInfo(){
					return this.mark
				},
				imgShow(){

					return this.f
				}
			}
	}
</script>
<style lang="less" scoped>
	.failure{
		width:100%;
		height:100%;
		background-color:#f8fefc;
		.failure-cont{
			height:100%;
			flex-direction:column;
			justify-content:center;
			align-items:center;
			img{
				width:7.72rem;
			}
			h2{
				font-size:0.68rem;
				color:#0b9d78;
			}
			.btn{
				width:10.68rem;
				background-color:#ffad3d;
				margin-top:2rem;
			}
		}
	}
</style>