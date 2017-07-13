<template>
	<div>
		<div class="flightInfo" v-for="(item,index) in orders">
			<div class="tripID">
				<h3>Trip ID: {{item.id}}</h3>
			</div>
			<div class="options flex space-between" v-show="$route.path=='/order/upcoming'">
				<div v-for="(op,i) in options" :class="{active:idx==i}" @click="choose(i,op,item)">
					<img :src="op.img2" alt="" v-show="idx!=i">
					<img :src="op.img" alt="" v-show="idx==i">
					<span>{{op.text}}</span>
				</div>
			</div>
			<div class="flight-detail">
				<div v-for="(obj,i) in item.voyageinfo">
					<div class="status"
					:class="{upcoming:item.ticketsinfo[obj.fn][0].status==105,
						notpay:item.ticketsinfo[obj.fn][0].status==107}">{{OrderStatusUtil.getOrderStatus(item.ticketsinfo[obj.fn][0].status)}}</div>
					<div class="title flex content-start" :class="{pt:i>0}">
						<img :src="ico[obj.fn.slice(0,2)]" alt="">
						<h2>{{obj.an}} {{obj.fn.slice(0,2)}} {{obj.fn.slice(2)}}</h2>
					</div>
					<div class="flight-date flex space-between">
						<div class="from">
							<h2><span class="city">{{obj.ds}}</span><span class="time">&nbsp;{{obj.dt.split(" ")[1]}}</span></h2>
							<h2>{{TimeFormatUtil.getOrderDetailDate(obj.dt)}}</h2>
						</div>
						<div class="duration">
							<div class="time">
								<span>{{obj.wdt}}</span>
							</div>
							<div class="line">
								<div class="round">
									<span></span>
								</div>
							</div>
						</div>
						<div class="to">
							<h2><span class="city">{{obj.as}}</span><span class="time">&nbsp;{{obj.at.split(" ")[1]}}</span></h2>
							<h2>{{TimeFormatUtil.getOrderDetailDate(obj.at)}}</h2>
						</div>
					</div>
					<div class="baggage" v-show="item.voyageinfo.length!=1">
						<div class="title flex space-between">
							<span>Baggage Info</span>
							<span v-show="false" :id="'bag'+i"></span>
						</div>
						<ul v-show="true">
							<li class="flex space-between">
								<h3>{{obj.fn}}</h3>
								<span>Ticket NO. {{item.ticketsinfo[obj.fn][0].ticketno}}</span>
							</li>
							<li class="flex space-between">
								<span>Check in</span>
								<span>{{item.baggageinfo[obj.fn].ch}}kg</span>
							</li>
							<li class="flex space-between">
								<span>Cabin</span>
								<span>{{item.baggageinfo[obj.fn].ca}}kg</span>
							</li>
						</ul>
					</div>
					<div class="baggage" v-show="item.voyageinfo.length==1">
						<div class="title flex space-between">
							<span>Baggage Info</span>
							<span v-show="false" :id="'bag'+index"></span>
						</div>
						<ul v-show="true">
							<li class="flex space-between">
								<h3>{{obj.fn}}</h3>
								<span v-if="item.ticketsinfo[obj.fn][0].ticketno">Ticket NO. {{item.ticketsinfo[obj.fn][0].ticketno}}</span>
							</li>
							<li class="flex space-between">
								<span>Check in</span>
								<span>{{item.baggageinfo[obj.fn].ch}}kg</span>
							</li>
							<li class="flex space-between">
								<span>Cabin</span>
								<span>{{item.baggageinfo[obj.fn].ca}}kg</span>
							</li>
						</ul>
					</div>
					<div class="traveller">
						<div class="titles flex space-between">
							<h2>Traveller details(<span class="yellow">&bull;</span>Adults<span class="green">&bull;</span>Child<span class="blue">&bull;</span>Infant)</h2>
							<span v-show="false" id="traveller-right"></span>
						</div>
						<div class="content">
							<div class="trave-list" v-for="el in item.travellerinfo">
								<h2>
									<span :class="[{yellow:el.passengerType==1},{green:el.passengerType==2},{blue:el.passengerType==3}]">&bull;</span>
									{{el.ptype}} {{el.name.split('/')[0]}} {{el.name.split('/')[1]}}
								</h2>
								<ul>
									<li class="flex space-between">
										<span>{{obj.fn.slice(0,2)}} {{obj.fn.slice(2)}}</span>
										<span v-if="item.ticketsinfo[obj.fn][0].ticketno">Ticket NO.{{item.ticketsinfo[obj.fn][0].ticketno}}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="pnr flex space-between" v-show="false">
					<span>PNR</span>
					<span></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {OrderStatusUtil,TimeFormatUtil,CookieUtil} from '../../../../models/utils'
import { Indicator } from 'mint-ui'
	export default{
		props:{
			orders:{
				type:Array
			}
		},
		data(){
			return{
				idx:-1,
				show:false,
				showLogin:true,
				OrderStatusUtil,
				TimeFormatUtil,
				ico:{
					"G8":require("../../../../assets/images/G8.png"),
					"SG":require("../../../../assets/images/SG.png"),
					"UK":require("../../../../assets/images/UK.png"),
					"AI":require("../../../../assets/images/IX.png"),
					"9W":require("../../../../assets/images/9W.png"),
					"6E":require("../../../../assets/images/6E.png"),
					"I5":require("../../../../assets/images/I5.png")
				},
				options:[
					{
						img:require('../../../../assets/images/order/paid_17.png'),
						img2:require('../../../../assets/images/order/paid_2.png'),
						text:'Get pass',
						id:0
					},
					{
						img:require('../../../../assets/images/order/icon-jiaohuan1.png'),
						img2:require('../../../../assets/images/order/icon-jiaohuan.png'),
						text:'Reschedule',
						id:1
					},
					{
						img:require('../../../../assets/images/order/icon-jing1.png'),
						img2:require('../../../../assets/images/order/icon-jing.png'),
						text:'Cancel trip',
						id:2
					}
				]
			}
		},
		methods:{
			choose(i,op,item){
				let _this = this;
				this.idx=i;
				let ck = new CookieUtil();
				if(ck.hasItem('uuid')){
					Indicator.open({
					  spinnerType: 'fading-circle'
					});
					setTimeout(()=>{ 
						Indicator.close();
						if(op.id==0){
							_this.$router.push('/ticket')
						}else if(op.id==2){
							sessionStorage.removeItem("id");
							sessionStorage.setItem("id",item.id);
							sessionStorage.removeItem('orders');
							let res = [];
							res.push(item);
							sessionStorage.setItem("orders",JSON.stringify(res));
							 _this.$router.push('/canceltrip1');
						}else if(op.id==1){
							sessionStorage.removeItem("id");
							sessionStorage.setItem("id",item.id);
							sessionStorage.removeItem('orders');
							let res = [];
							res.push(item);
							sessionStorage.setItem("orders",JSON.stringify(res));
							_this.$router.push('/changetrip');
						}
					},500)
				}else{
					this.$emit('login',this.showLogin)
				}
			},
			rotates(el,item){
				if(item){
					el.css({
						transform:'rotateZ(90deg)'
					})
				}else{
					el.css({
						transform:'rotateZ(0deg)'
					})
				}
			},
		},
		mounted(){
			this.orders.forEach((el,index)=>{
				if(!el.refundable){
					this.options.forEach((op,i)=>{
						if(op.id == 2){
							this.options.splice(i,1);
						}
					})
				}
			})
		}
	}
</script>
<style lang="less" scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: all .5s;
	}
	.fade-enter, .fade-leave-active {
	  opacity:0;
	  fliter:alpha(opacity=0);
	}
	.flightInfo{
		.tripID{
			padding:0.4rem;
			h3{
				text-align:left;
				font-size:0.6rem;
				color:#333;
				font-weight:normal;
			}
			
		}
		.options{
			margin-bottom:0.4rem;
			div{
				width:30%;
				padding:0.2rem 0;
				text-align:center;
				font-size:0.6rem;
				border-radius:0.2rem;
				img{
					width:0.6rem;
				}
			}
			.active{
				background-color:#0b9d78;
				color:#fff!important;
			}
		}
		.flight-detail{
				background-color:#fff;
				border-radius:0.4rem;
				padding:1.2rem 0.4rem 0.4rem;
				position:relative;
				margin-bottom:0.4rem;
				.status{
					position:absolute;
					top:0;
					right:-1px;
					border-top-right-radius:0.4rem;
					font-size:0.52rem;
					padding:0.2rem 0.4rem;
					background-color:#efefef;
					color:#ccc;
				}
				.pt{
						padding-top:0.6rem;
					}
				.title{
					height:1rem;
					img{
						width:0.8rem;
						height:auto;
					}
					h2{
						font-size:0.6rem;
						color:#333;
						text-align:left;
						line-height:1rem;
						padding-left:0.4rem;
					}
				}
				.flight-date{
					padding:0.4rem 0;
					.from,.to{
						h2:nth-child(1){
							.city{
								font-size:0.68rem;
								color:#333;
							}
							.time{
								font-size:0.52rem;
								color:#666;
							}
						}
						h2:nth-child(2){
							font-size:0.52rem;
							color:#ccc;
						}
					}
					.from{
						h2{
							text-align:left;
							padding:0.2rem 0;
						}
					}
					.to{
						h2{
							text-align:right;
							padding:0.2rem 0;
						}
					}
					.duration{
						.time{
							span{
								font-size:0.6rem;
								color:#ccc;
								padding:0.2rem 0.8rem;
								margin-left:0.6rem;
								background:url('../../../../assets/images/order/paid_07.jpg') left center no-repeat;
								background-size:0.768rem;
							}
						}
						.line{
							width:5rem;
							height:1px;
							border-top:1px #ffad3d dashed;
							position:relative;
							.round{
								width:6px;
								height:6px;
								border-radius:50%;
								border:1px solid #ffad3d;
								background-color:#fff;
								position:absolute;
								left:50%;
								transform:translateY(-50%) translateX(-50%);
								-webkit-transform:translateY(-50%) translateX(-50%);
								span{
									width:4px;
									height:4px;
									background-color:#ffad3d;
									border-radius:50%;
									position:absolute;
									top:50%;
									left:50%;
									transform:translateY(-50%) translateX(-50%);
									-webkit-transform:translateY(-50%) translateX(-50%);
								}
							}
						}
					}
				}
			}
		.baggage{
			font-size:0.52rem;
			color:#666;
			text-align:left;
			padding:0.4rem 0 0.2rem;
			border-top:1px solid #eee;
			.title{
				span{
					height:1rem;
					display:block;
					line-height:1rem;
					color:#666;
				}
				span:nth-of-type(2){
					width:0.4rem;
					background:url('../../../../assets/images/ic-btn-one.png') center no-repeat;
					background-size:0.4rem;
				}
			}
			ul{
				li{
					font-size:0.52rem;
					color:#ccc;
					line-height:1rem;
					h3{
						color:#666;
						font-size:0.56rem;
						font-weight:normal;
					}
				}
			}
		}
		.traveller{
			background-color:#fff;
			border-radius:0.4rem;
		}
		.titles{
			padding:0.2rem 0;
			h2{
				font-size:0.52rem;
				color:#333;
				text-align:left;
				span{
					font-size:0.68rem;
					padding:0 0.2rem;
				}
			}
			#traveller-right{
				height:1rem;
				width:0.4rem;
				background:url('../../../../assets/images/ic-btn-one.png') right center no-repeat;
				background-size:0.4rem;
			}
		}
		.trave-list{
			h2{
				font-size:0.6rem;
				color:#333;
				text-align:left;
				padding:0.4rem 0;
				span{
					padding-right:0.2rem;
				}
			}
			ul{
				li{
					font-size:0.52rem;
					color:#ccc;
					padding-left:0.4rem;
				}
			}
		}
		.pnr{
			font-size:0.6rem;
			text-align:left;
			padding:0.2rem 0;
		}
	}
</style>