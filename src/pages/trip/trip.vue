<template>
	<div class="wrapper">
		<head-top class="header">
			<img slot="left" :src="heads.img" @click="$router.go(-1)" alt="">
			<span slot="title">{{heads.title}}</span>
		</head-top>
		<div class="container">
			<div>
				<div class="section flex" v-show="true" v-for="(item,idx) in orders">
					<div class="dateTime flex">
							<h2>{{new Date(item.bookOn).getDate()}}</h2>
							<h3>{{TimeFormatUtil.getMonthDescription(new Date(item.bookOn).getMonth()).replace(/\./g,'')}}</h3>
					</div>
					<div class="bookInfo">
						<div class="tripID">
							<span>Trip Id:{{item.tripId}}</span>
						</div>
						<div class="city flex">
							<span class="fromCity">{{item.from}}</span>
							<span class="arive"></span>
							<span class="toCity">{{item.to}}</span>
						</div>
						<div class="orderDate">
							<span>Order date:{{TimeFormatUtil.getMonthDescription(new Date(item.departDateTime).getMonth()).replace(/\./g,'')}} {{new Date(item.departDateTime).getDate()}}</span>
						</div>
					</div>
					<div class="orderType">
						<span>{{item['booking_status']}}</span>
					</div>					
				</div>
			</div>	
		</div>
	</div>
</template>
<script>
    import { User } from '../../models/user'
    import { TimeFormatUtil } from '../../models/utils'
    import headTop from '../../components/head/head.vue'

	export default{
		components:{
            headTop
        },
        data() {
            return {
                TimeFormatUtil,
				heads:{
					img:require('../../assets/images/flight-prev.png'),
					title:'Bookings'
                },
                orders:[],
                cssStatuActive: 'section1-head',
                cssStatuDeactive: 'section2-head'
			}
        },
        mounted() {
        	let self = this;
            User.getUserOrders(self)
                .then(orders => {
                    self.orders = orders;
                    console.log(orders)
                })
                .catch(err => console.log(err))
        }
	}
</script>
<style lang="less" scoped>
	.header{
		background:#f7f7f8;
		border-bottom:1px solid #ccc;
		span{
			color:#000;
			font-size:0.768rem;
		}
	}
	.container>div{
		padding:2.4rem 0.68rem 0;
	}
	.upcoming{
		background-color:#d4efe8;
	}
	.paid{
		background-color:#ffeac4;
	}
	.complete{
		background-color:#efefef;
	}
	.section{
		justify-content:flex-start;
		background-color:#fff;
		border-radius:0.6rem;
		box-shadow:0 0.4rem 0.68rem #ddd;
		position:relative;
		overflow:hidden;
		margin-bottom:0.4rem;
		.dateTime{
			width:2.6rem;
			justify-content:center;
			align-items:center;
			flex-direction:column;
			border-right:1px solid #ddd;
			h2{
				font-size:1.02rem;
			}
			h3{
				font-size:0.6rem;
				color:#ccc;
			}
		}
		.bookInfo{
			.tripID{
				font-size:0.56rem;
				color:#ccc;
				text-align:left;
				padding:0.2rem;
				border-bottom:1px dashed #ddd;
			}
			.city{
				justify-content:space-between;
				align-items:center;
				padding:0.2rem;
				span{
					font-size:0.6rem;
					color:#333;
				}
				.arive{
					height:0.4rem;
					width:1.2rem;
					padding:0 0.4rem;
					background:url('../../assets/images/re-flight_07.png') center no-repeat;
					background-size:1.2rem;
				}
			}
			.orderDate{
				font-size:0.6rem;
				color:#ccc;
				text-align:left;
				padding:0 0.2rem 0.6rem;
			}
		}
		.orderType{
			position:absolute;
			right:-1px;
			bottom:-1px;
			font-size:0.5rem;
			padding:0.2rem 0.4rem;
			background-color:#efefef;
			color:#ccc;
		}
	}
</style>
