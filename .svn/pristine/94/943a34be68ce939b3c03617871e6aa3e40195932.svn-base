<template>
	<div class="orderDtail">
		<head-top class="header">
			<img slot="left" :src="require('../../assets/images/flight-prev.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">Order details</div>
		</head-top>
		<transition enter-active-class="fadeIn" leave-active-class="fadeOut">
			<prompt v-show="showReschedule" class="Reschedule animated">
				<h2 class="titles" slot="title">Change sign</h2>
				<div slot="content" class="inputGroup">
					<input type="text" v-model="flightNomber" placeholder="Flight Number">
				</div>
				<div slot="content" class="inputGroup">
					<input type="text" v-model="dateTime" @click="openPicker" placeholder="order number">
					<mt-datetime-picker
					    ref="picker"
					    type="date"
					    cancelText="Cancel"
					    confirmText="OK"
					    v-model="orderDate">
					</mt-datetime-picker>
				</div>
				<div slot="btn" class="choose">
					<mt-button class="btn" @click="changeSign" type="primary">Confirm</mt-button>
					<mt-button @click="showReschedule=false" class="btn" type="danger">Cancel</mt-button>
				</div>
			</prompt>
		</transition>
		<transition enter-active-class="fadeIn" leave-active-class="fadeOut">	
			<prompt v-show="showRefound" class="refound">
				<h2 class="titles" slot="title">Search</h2>
				<div class="inputGroup" slot="content">
					<p>21313123132123</p>
				</div>
				<div slot="btn" class="choose">
					<mt-button class="btn" type="primary">Confirm</mt-button>
					<mt-button @click="showRefound=false" class="btn" type="danger">Cancel</mt-button>
				</div>
			</prompt>
		</transition>	
        <div class="orders">
		<div class="order-cont" v-for="o in orders">
			<div class="order-head">
				<div class="city-info">
					<div class="flex" style="display: none">
						<span>New Detai</span>
						<span></span>
						<span>Mumbai multi-city</span>
					</div>
					<div class="tripID">
						<span>Trip ID</span>
						<span>{{orderNubmer}}</span>
					</div>
                    
				</div>
				<div class="city-options">
                    <div class="ft" style="margin-top: 0.5rem">
                        <span>Status :</span>
                        <span>{{o.status}}</span>
                    </div>
					<ul class="flex"  v-if ="false">
						<li>
							<span><img :src="require('../../assets/images/order/ic-pass-order.png')"></span>
							<span>Get pass</span>
						</li>
						<li>
							<span><img :src="require('../../assets/images/order/ic-pass-order.png')"></span>
							<span>Reschedule</span>
						</li>
						<li>
							<span><img :src="require('../../assets/images/order/ic-pass-order.png')"></span>
							<span>Refound</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="section1" v-for="v in (o.voyageinfo)" >
				<div  class="section1-tit clear" >
					<span>{{v.dc}}</span><span></span><span>{{v.ac}}</span>
				</div>
				<div class="section-info">
					<div class="info-head">
						<img src="" alt="">
						<span>{{v.fn}}</span>
					</div>
					<div class="info-cont">
						<div class="info-cont-top flex">
							<div class="info-item">
								<span>{{v.ds}}</span>
							</div>
							<div class="info-time">
								<span>{{v.wdt}}</span>
							</div>
							<div class="info-item">
								<span>{{v.as}}</span>
							</div>
						</div>
						<div class="info-date clear">
							<span>{{v.dt}}</span>
							<span>{{v.at}}</span>
						</div>
						<div class="info-pnr" style="display:none">
							<h2>PNR:BDNMEJ</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="section2" >
				<div class="section2-tit">
					<h2>TRAVELLER DETAILS<!-- (<span class="yround"></span>Adults<span class="ground"></span>Child<span class="bround"></span>Infant) --></h2>
				</div>	
				<div class="section2-con">
					<ul>
						<li class="flex" v-for="t in o.travellerinfo">
							<span>{{t.name}}</span>
                            <div v-if="Object.is(t.status, '1')">
                                <mt-button class="btn" @click="showReschedule=true,travellername=t.name,travellerId=t.travellerId" type="primary">Reschedule</mt-button>
                                <mt-button class="btn" @click="showRefound=true" type="primary">Refound</mt-button>
                            </div>
                            <div v-else class="ft">
                                Can not refound
                            </div>
						</li>
					</ul>
				</div>
			</div>
			<div class="section3">
				<div class="section3-tit">
					<h2>PAYMENT DETAILS</h2>
				</div>
				<div class="section3-con">
					<ul>
						<li class="flex">
							<span>Base Fare</span>
							<span><i class="rs">Rs.</i> {{o.fare['Base Fare'] | formatDate}}</span>
						</li>
						<li class="flex">
							<span>Taxes &amp; Fees</span>
							<span><i class="rs">Rs.</i>{{o.fare['Taxes and Fees'] | formatDate}}</span>
						</li>
                        <li class="flex">
                            <span>Convenience Fee</span>
                            <span><i class="rs">Rs.</i>{{o.fare['Convenience Fee'] | formatDate}}</span>
                        </li>
						<li class="flex">
							<span>Total</span>
							<span><i class="rs">Rs.</i>{{o.price | formatDate}}</span>
						</li>
					</ul>
				</div>
			</div>
			<p v-if="false">Though credit card #4096 70** **** 2820</p>
		</div>
    </div>
	</div>
</template>
<script>

import { FlightOrder } from '../../models/flightorder'
import  {Indicator,Toast} from 'mint-ui'
import headTop from '../../components/head/head.vue'
import prompt from '../../components/prompt/prompt.vue'
	export default{
		components:{
			headTop,
			prompt
		},
		data(){
            return {
            	flightNomber:"",
            	travellername:"",
            	travellerId:"",
                orders: null,
                showReschedule:false,
                showRefound:false,
                popupVisible:true,
                orderDate:new Date(),
				flight:[
					{
						img:require('../../assets/images/filter/9W.png'),

					},
					{
						img:require('../../assets/images/filter/6E.png')
					}
				]
			}
        },
        computed: {
            orderNubmer: {
                get() {
                    let sh = window.location.search

                    if (Object.is(sh.length, 0))
                        return undefined

                    let qs = sh.replace('?', '')
                   
                    return qs.split('=')[1]
                }
            },
            dateTime:{
				get(){
					let arr=this.orderDate.toString().split(" ");
					arr=arr.slice(0,1).join()+", "+arr.slice(2,3).join()+" "+arr.slice(1,2).join()+", "+arr.slice(3,4).join();
					return arr;
				},
				set(arr){
					this.orderDate=arr;
				}
			}
        },
        methods: {
        	openPicker(){
        		this.$refs.picker.open();
        	},
            search() {
                window.location.search = ("?orderNumber=" + String(this.inputNumber))
            },
         	changeSign(){
         	
   
         		
         		if(this.travellerId==""){
         			
         			Toast({message: 'Data exception',
									duration: 1000
         							  });

         		}else if(this.flightNomber.trim()==""){
         			
         			Toast({message: 'Please enter the flight number',
										duration: 1000
         							  });
         		}else{
         	       	FlightOrder.changeSign(this.travellerId,this.flightNomber,this.orderDate,this).then(res=>{
         				if(res.success){

         						this.showReschedule=false
         						
         			
         						Toast({message: 'Change success',
										duration: 500
         							  });

         						// one second later execute
         						setTimeout("location.reload()",200);
         						
         					}
         			},error=>{
         				console.log(error)
         				
         				Toast({message: 'Flight information is incorrect',
										duration: 1000
         						});
         			});
         		}
         		
         	}
        },
        mounted() {
        	
            if (!Object.is(this.orderNubmer,undefined)) {
            	Indicator.open({
				 	 spinnerType: 'fading-circle'
					});
                FlightOrder.searchOrder(this, this.orderNubmer)
                    .then(json => {
                    	console.log(json)
                        this.orders = json
                        Indicator.close();
                    })
                    .catch(err => {
                        console.log(err)
                        Indicator.close()
                    })
            }
        }
	}
</script>
<style lang="less" scoped>
	.orderDtail{
		height:100%;
		overflow:auto;
	}
	.Reschedule,.refound{
		width:100%;
		position:fixed;
		z-index:30;
		.titles{
			font-size:0.768rem;
			color:#333;
		}
		.inputGroup{
			p{
				font-size:0.6rem;
			}
			input{
				height:1.2rem;
				border:1px solid #ccc;
				margin-top:0.4rem;
			}
		}
		.choose{
			.btn{
				width:2.6rem;
				height:1.2rem;
				font-size:0.52rem;
			}
		}
	}
    .order-head::before{
        display:table;
        content:'';
    }
	.header{
		background:#f7f7f8;
		border-bottom:1px solid #ccc;
		.title{
			line-height:2.04rem;
			font-size:0.8rem;
			color:#000;
		}
	}
	.orderDtail{
		background-color:#efeff4;
		padding-bottom:0.6rem;
	}
    .orders {
        padding-top: 2.04rem;
    }
	.order-cont{
		.order-head{
			width:100%;
			height:6.19rem;
			background:url('../../assets/images/order/order-bg.jpg') center no-repeat;
			background-size:100%;
			position:relative;
			.city-info{
                          margin-top:1.4rem;
				div:nth-of-type(1){
					padding:1.28rem 2.8rem 0.4rem;
					justify-content:space-between;
					span{
						color:#fff;
						font-size:0.68rem;
					}
					span:nth-of-type(2){
						width:0.769rem;
						hieght:0.512rem;
						background:url('../../assets/images/order/ic-btn-order.png') center no-repeat;
						background-size:0.769rem;
						padding:0 0.2rem;
					}
				}
				.tripID{
					font-size:0.8rem;
					color:#ffd1af;
				}
			}	
			.city-options{
				width:100%;
				height:1.92rem;
				position:absolute;
				bottom:0;
				background-color:rgba(255, 255, 255, 0.3);
				ul{
					padding:0 0.68rem;
					justify-content:space-between;
					li{
						font-size:0.56rem;
						color:#fff;
						height:1.92rem;
						line-height:1.92rem;
						span{
							height:1.92rem;
							line-height:1.92rem;
							float:left;
							display:block;
						}
						img{
							width:0.94rem;
							margin-top:0.5rem;
							margin-right:0.2rem;
						}
					}
				}
			}
		}
		.section1{
			padding:0 0.68rem;
			.section1-tit{
				height:1.2rem;
				padding:0.6rem 0.4rem 0;
				span{
					display:block;
					float:left;
					height:1.2rem;
					line-height:1.2rem;
					font-size:0.6rem;
					color:#666;
				}
				span:nth-of-type(2){
					width:0.68rem;
					height:0.8rem;
					background:url('../../assets/images/order/ic-jiant-order.png') center bottom no-repeat;
					background-size:0.68rem;
					padding:0 0.4rem;
				}
			}
			.section-info{
				background-color:#fff;
				border-radius:0.4rem;
				padding:0.4rem 0.4rem 0;
				.info-head{
					height:2.69rem;
					text-align:left;
					span{
						height:2.69rem;
						line-height:2.69rem;
						font-size:0.5rem;
						color:#ccc;
						text-align:left;
						padding-left:0.4rem;
					}
					img{
						width:0.68rem;
                        display:none;
					}
				}
				.info-cont{
					.info-cont-top{
						justify-content:space-between;
						padding:0 1.2rem;
						.info-item{
							height:1.2rem;
							span:nth-of-type(1){
								font-size:0.768rem;
								color:#333;
							}
							span:nth-of-type(2){
								font-size:0.768rem;
								color:#000;
							}
						}
						.info-time{
							height:1.2rem;
							span{
								width:1.92rem;
								height:1.2rem;
								line-height:1.2rem;
								font-size:0.4rem;
								color:#666;
								display:block;
								margin-bottom:0.2rem;
								background:url('../../assets/images/order/ic-arr-order.png') center 75% no-repeat;
								background-size:1.96rem;
							}
						}
					}
					.info-date{
						font-size:0.5rem;
						color:#ccc;
						padding:0 1.2rem;
						border-bottom:1px solid #eee;
						span{
							float:left;
							padding-bottom:0.6rem;
						}
						span:nth-of-type(2){
							margin-left:3.2rem;
						}
					}
					.info-pnr{
						h2{
							font-size:0.56rem;
							color:#666;
							padding:0.5rem 0;
						}
					}
				}
			}
		}
		.section2{
			padding:0 0.68rem;
			.section2-tit{
				height:1.2rem;
				padding:0.6rem 0.4rem 0;
				h2{
					font-size:0.56rem;
					color:#666;
					text-align:left;
					line-height:1.2rem;
				}
			}
			.section2-con{
				background-color:#fff;
				border-radius:0.4rem;
				ul{
					li{
						text-align:left;
                        justify-content:space-between;
						line-height:1.2rem;
						padding-left:0.4rem;
						span{
							font-size:0.5rem;
							color:#333;
						}
                        .btn{
                            height:1rem;
                            font-size:0.52rem;
                            line-height:1rem;
                        }
					}
				}
			}
		}
		.yround{
			width:0.4rem;
			height:0.4rem;
			background-color:#ffad3d;
			border-radius:50%;
			margin:0 0.2rem;
		}
		.bround{
			width:0.4rem;
			height:0.4rem;
			background-color:#5fc9f9;
			border-radius:50%;
			margin:0 0.2rem;
		}
		.ground{
			width:0.4rem;
			height:0.4rem;
			background-color:#0cb78d;
			border-radius:50%;
			margin:0 0.2rem;
		}
		.section3{
			padding:0 0.68rem;
			.section3-tit{
				height:1.2rem;
				padding:0.6rem 0.4rem 0;
				h2{
					font-size:0.56rem;
					color:#666;
					text-align:left;
					line-height:1.2rem;
				}
			}
			.section3-con{
				background-color:#fff;
				border-radius:0.4rem;
				ul{
					li{
						justify-content:space-between;
						line-height:1.2rem;
						text-align:left;
						padding:0 0.4rem;
						span{
							font-size:0.5rem;
							color:#333;
						}
					}
				}
			}
		}
		p{
			font-size:0.5rem;
			color:#ccc;
			padding:0 1.08rem;
			text-align:right;
			line-height:0.8rem;
		}
        .ft {
            font-size: 0.6rem;
            color: #ffd1af;
            margin-right: 0.2rem;
        }
	}
</style>

<!-- <div class="section3">
				<div class="section3-tit">
					<h2>PAYMENT DETAILS</h2>
				</div>
				<div class="section3-con">
					<ul>
						<li>
							<span>Base Fare</span>
							<span>Rs 45,608</span>
						</li>
						<li>
							<span>Taxes &amp; Fees</span>
							<span>Rs 45,608</span>
						</li>
						<li>
							<span>Total</span>
							<span>Rs 45,608</span>
						</li>
					</ul>
				</div> -->