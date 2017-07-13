<template>
  <div class="wrapper">
    <head-top class="header">
		<img slot="left" :src="heads.img" @click="$router.go(-1)" alt="">
		<span slot="title">{{heads.title}}</span>
	</head-top>
    <div class="container">
      <div class="search">
        <div class="search-cont">
          <input type="search" id="search" @keypress.13="searchOrder" v-model="orderNubmer" placeholder="Tirp ID or Order ID" />
          <button type="button" @click="searchOrder"></button>
        </div>
      </div>
      <div class="searchResult">
      	<keep-alive>
			<order-list :orders="orders"></order-list>	
		</keep-alive>	      
		<div class="noResult" v-show="orders.length==0">
			<h2>No record was found</h2>
		</div>
		</div>
    </div>
  </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
import orderList from './base/orderList.vue'
import {FlightOrder} from '../../../models/flightorder'
import { Indicator, Toast } from 'mint-ui'
	export default{
		components:{
			headTop,
			orderList
		},
		data(){
			return {
				orderNubmer:'',
				heads:{
					img:require('../../../assets/images/flight-prev.png'),
					title:'Search'
				},
				orders:[]
			}
		},
		methods:{
			searchOrder(){
				if(this.orderNubmer.trim() == ''){
					 Toast({
                      message: 'Please input correct trip ID or order ID',
                      duration: 1000
                    });
				}else{
					Indicator.open({
				 	 spinnerType: 'fading-circle'
					});
	                FlightOrder.searchOrder(this, this.orderNubmer)
	                    .then(json => {
	                        this.orders = json
	                        sessionStorage.removeItem('orders');
	                        sessionStorage.removeItem('orderId');
	                        sessionStorage.setItem('orders',JSON.stringify(this.orders));
	                        console.log(this.orderNubmer);
	                        sessionStorage.setItem('orderId',this.orderNubmer);
	                        Indicator.close();
	                    })
	                    .catch(err => {
	                        console.log(err)
	                        Indicator.close()
	                    })
				}
			}
		},
		mounted(){
			if(location.search){
				this.orderNubmer = location.search.replace(/\D/g,'');
				this.searchOrder();
			}
		}
	}
</script>
<style lang='less' scoped>
	.header{
		background:#f7f7f8;
		border-bottom:1px solid #ccc;
		span{
			color:#000;
			font-size:0.768rem;
		}
	}
	.search{
		padding:2.72rem 0.68rem 0.68rem;
		.search-cont{
			position:relative;
			#search{
				width:100%;
				height:1.58rem;		
				border:none;
				font-size:0.6rem;
				border-radius:0.68rem;
				background:#4fbc9f;
				padding-left:1.4rem;
				color:#fff;
			}
			button{
				width:0.769rem;
				height:0.769rem;
				background:url('../../../assets/images/search_ico.png') center no-repeat;
				background-size:0.769rem;
				border:0;
				position:absolute;
				left:0.4rem;
				top:50%;
				-webkit-transform:translateY(-50%);
				transform:translateY(-50%);
			}
		}
		
	}
	.searchResult{
		padding:0 0.68rem;
		.noResult{
			padding-top:10rem;
			background:url('../../../assets/images/pnr_03.jpg') center 2rem no-repeat;
			background-size:7rem;
			h2{
				font-size:0.6rem;
			}
		}
	}
	
::-webkit-input-placeholder{color:#addcce;font-size:0.6rem;padding-left:0.4rem;}
::-moz-placeholder{color:#addcce;font-size:0.6rem;padding-left:0.4rem;}
:-moz-placeholder{color:#addcce;font-size:0.6rem;padding-left:0.4rem;}
.upcoming{
	background-color:#d4efe8;
}
.paid{
	background-color:#ffeac4;
}
.complete{
	background-color:#efefef;
}
</style>