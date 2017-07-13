
<template>
	<div class="wrapper">
		<head-top class="header">
				<img slot="left" class="prev" :src="heads.img1" @click="goBack" alt="" />
				<div slot="title" class="title">
					<div v-if="getFlightOrder!=null" class="title-detail">
						<span>{{getFlightOrder.departAirport.cityName}}</span>
						<span class="title-detail-ico"></span>
						<span>{{getFlightOrder.destinationAirport.cityName}}</span>
					</div>
					<div class="title-info">
						<span>{{flightTimeRangeString}}</span>
						<span>&bull;</span>
						<span>{{travellerNum}}Traveller</span>
					</div>
				</div>
				<a slot="right" v-show="true" @click="skipFilter"><img :src="heads.img2" alt=""></a>
		</head-top>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <keep-alive>
                <router-view :filter="onewayFilter" @onFilterSelectFinish="onFilterSelectFinish" class="animated"></router-view>
            </keep-alive>
        </transition>
		<loading v-show="showLoad"></loading>
		<mt-popup
		  v-model="showPopup"
		  popup-transition="popup-fade"
		  modal="true"
		  closeOnClickModal="false">
		 	<failure>
		 		<div slot="head">Flight unavailable</div>
		  		<p slot="content">We've really sorry,but the flight you selected is no longer available.please select a different flight</p>
		  		<mt-button @click="goBack" slot="btn" class="btn" type="default">Ok</mt-button>
		 	</failure>
		</mt-popup>
        <div class="container">
            <div class="con-title flex space-betweens">
				<span v-for='(item,index) in titleList' :class='{active:sortType==index}' @click='sort(index)'>
					{{item}}
					<i class="sortIco">
					 	<img v-show="sortType==index" :src="imgs" alt="" />
					</i>
				</span>
            </div>
            <div class="flight-info">
                <ul>
                    <li class="flex space-between"
                        :class="{active:this.idx==index}"
                        @click="onFlightItemClick(index)"
                        v-for="(item,index) in displayedFlights">
                        <div class="flight-time flex space-between">
                            <div class="flight-time-ico flex content-center align-items-center">
                                <img :src="item.airline.iconPath"/>
                            </div>
                        </div>
                        <div class="flight-time-info flex space-between">
                            <div>
                                <h2>{{TimeFormatUtil.getDisplayHourAndMinute(item.departDate) + '-' + TimeFormatUtil.getDisplayHourAndMinute(item.returnDate)}}<i v-show="item.durationDays!=0">&nbsp;+{{item.durationDays}}</i></h2>
                                <p>{{(TimeFormatUtil.getDurationDescription(item))
                                    + " &bull; "+ (item.stops.length-1==0 ? 'non-stop' : item.stops.length-1+'stop')}}</p>
                            </div>
                        </div>
                        <div class="flight-price flex space-between">
                            <div class="flight-price-detail flex align-items-center">
                                <div>
                                    <h2 class="present-price"><span class="rs">RS.</span><span>{{item.realPrice | formatDate}}</span></h2>
                                    <h2 class="past-price"><span class="rs">RS.</span><span>{{item.price | formatDate}}</span></h2>
                                </div>
                            </div>
                            <div class="flight-next"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
	</div>
</template>
<script>
const SORT_BY_TIME = 0;
const SORT_BY_DURATION = 1;
const SORT_BY_PRICE = 2;

import headTop from '../../../components/head/head.vue'
import loading from '../../../components/loading/loading.vue'
import filter from './filter.vue'
import failure from '../../failure/failure.vue'
import {TimeFormatUtil, CabinClassUtil,GetFlightOrderUtil} from '../../../models/utils'
import {Flight, FlightFactory} from '../../../models/flight'
import {bus} from '../../../main.js'
import {mapGetters} from 'vuex'
import { Indicator,Toast } from 'mint-ui';
import { OnewayFilter } from '../../../models/filter'
import {OnewayOrder, RoundTripOrder} from '../../../models/flightorder'

import {Passenger, Adult, Child, Infant} from '../../../models/passenger'
import * as XFlight from '../../../vuex/models/flight/XFlight.js'
import * as mutationNames from '../../../vuex/models/flightorder/MutationName.js'
import {OnewayDiscountManager, DiscountItem, OnewayCompanyDiscountPolicy, OnewayLadderDiscountPolicy} 
from '../../../models/aboutdiscount'

var _discountManager = null

	export default{
		components:{
			headTop,
			loading,
			failure
		},
		data(){ 
			return {
				sortType: SORT_BY_PRICE,
				idx:'-1',
				showFilte:false,
				showLoad:false,
				showPopup:false,
				isPrice:true,
				isTime:true,
				isSort:true,
 			isDuration:true,
				imgs:require('../../../assets/images/ic-btn-one1.png'),
				heads:{
					img1:require('../../../assets/images/flight-prev.png'),
					img2:require('../../../assets/images/ic-loudou.png'),
					fromCity:'New Delhi',
					toCity:'Mumbai',
					time:'18Mar-31Mar',
					traveller:'1'
				},
				titleList:[
					"Time",
					"Duration",
					"Price"
                ],
                /**
                 @type {OnewayFilter} onewayFilter
                */
                onewayFilter: null,
				TimeFormatUtil
			}
		},
		methods:{
			goBack(){
				Indicator.close();
				this.$router.go(-2);
			},
			getFlight(){			
					return this.$store.getters.selectflightofall;
			},
			skipFilter(){
			
				this.$router.push('/oneway/filter');

			},
			ico(item){
				
				return item.airline.iconPath;
			},
			sort(index){
			
				//location.reload();
				this.sortItem=index;
				if(this.isSort){
					$('.con-title span').eq(index).find('img').css({
						transform:'rotateX(0deg)',
						transition:'.3s'
					})
				}else{
					$('.con-title span').eq(index).find('img').css({
						transform:'rotateX(180deg)',
						transition:'.3s'
					})
				}
			},
			onFlightItemClick(index) {
				
				Indicator.open({
				  spinnerType: 'fading-circle'
				});
				
				let self = this 
				
				
                this.$store.getters.flightOrder.setDepartFlight(this, this.getFlight()[index])

          		this.$store.getters.flightOrder.setAirportFullName(this.getFlight()[index])
				

				this.$store.getters.flightOrder.checkPrice(this)
                    .then(function (res) {
                    
					Indicator.close();
					
					let order = self.$store.getters.flightOrder;

//					order.serviceFee = res.cf;
				
//					order.addFilghtNumber(order,res.baggageInfo);

					let orderJson = order.toJSON()
		
					let orderStr = JSON.stringify(orderJson)

					sessionStorage.order = orderStr
					
					self.$router.push('book')
				}).catch(function(err) {
					Indicator.close();
					self.showPopup=true;
					console.log(err)
				})
			},
			onFilterSelectFinish(options){
				
			},
			sortDate(sortType) {
				switch (sortType) {
						case SORT_BY_TIME:
							this.isTime =! this.isTime; 
							this.getFlight().sort((o1, o2) => {
								if(this.isTime){
									this.isSort=true;
									return o1.departDate.getTime() - o2.departDate.getTime();
								}else{
									this.isSort=false;
									return o2.departDate.getTime() - o1.departDate.getTime();
								}
							});
						break;
						case SORT_BY_DURATION: 
							this.isDuration =! this.isDuration; 
							this.getFlight().sort((o1, o2) => {
								if(this.isDuration){
									this.isSort=true;
									return o1.getDurationInMinute() - o2.getDurationInMinute();
								}else{
									this.isSort=false;
									return o2.getDurationInMinute() - o1.getDurationInMinute();
								}
							})

						break;
						case SORT_BY_PRICE:
							this.isPrice =! this.isPrice; 
							this.getFlight().sort((o1, o2) => {
								if(this.isPrice){
									this.isSort=true;
									return o1.getPrice() - o2.getPrice();
								}else{
									this.isSort=false;
									return o2.getPrice() - o1.getPrice();
								}
							})
						break;
					}
			},
			refreshFlightDates (datas) {
				
				//jie ti yan jia de policys
				let props =  datas.x.props;
				let flightDiscountItems = []
				let fac = new FlightFactory(datas.departFlightArray)
				let allFlight = fac.build((flight, discount) => {
					flightDiscountItems.push(new DiscountItem(flight.flightNumber, Number(discount)))
                })
				this.$store.commit(XFlight.getAllFlight,allFlight)
				//GetFlightOrderUtil.setDepartOrReturnFlightIntoSession(allFlight,sessionStorage,"flight")
				 sessionStorage.flightType = "one"
				 
				this.$store.commit(XFlight.selsectAllFlight,allFlight)
				
				let a =this.getFlight();
				let policys = [[
					new OnewayLadderDiscountPolicy(props), 
					new OnewayCompanyDiscountPolicy(flightDiscountItems)
				]]
				_discountManager = new OnewayDiscountManager(policys)

				for (let f of this.getFlight()) {
					_discountManager.calculateDiscount(f)
				}
				this.getFlight().sort((o1,o2)=>{
					this.isSort=true;
					return o1.getPrice() - o2.getPrice();
				})
				this.getFlight().forEach((el)=>{
					let d = el.departDate;
					let r = el.returnDate;
					el.durationDays=r.getDate()-d.getDate();
				})
			},
			flightDurationDes: (flight) => {
				return this.TimeFormatUtil.getDurationDescription(flight)
			},
			hourAndMinuteDescription: (date) => {
				return this.TimeFormatUtil.getDisplayHourAndMinute(date)
			},
			calculateDiscount (flight) {

			},
			getFlightData(index){
				
				this.idx=index;
			},
			filter(filterOptions){
				
				this.filterOptions=filterOptions;
			}
		},
		computed: {
			getFlightOrder(){
				
				return GetFlightOrderUtil.getOrderFromSession(this,sessionStorage)
			},
			flightTimeRangeString(){
				
				if(this.$store.getters.flightOrder!=null){
					let d = this.$store.getters.flightOrder.departDate
					return TimeFormatUtil.getMonthDescription(d.getMonth()) + d.getDate();
				}
				
			},
			travellerNum(){
				let order = this.$store.getters.flightOrder
				
				if(order!=null){
					let adultNum = order.adults.length
					let childNum = order.children.length
					let infantsNum = order.infants.length
					return (adultNum + childNum + infantsNum)
				}
				
			},
			iconPath(item){
				
				return item.airline.iconPath;
			},
			sortItem: {
				set: function(index){
					
					this.sortType = index;
					this.sortDate(this.sortType);
				},
				get: function(){
					
					return this.sortType;
				}
            },
            displayedFlights() {
                     return this.getFlight()
            }
		},
        mounted() {	
        	 this.$store.commit(XFlight.getAllFlight,null)
             this.$store.commit(XFlight.selsectAllFlight,null)
        	let opraOrder = this.getFlightOrder

				this.showLoad=true;
				this.showPopup=false;
				
				opraOrder.searchSuitableFlights(this).then((jsonObect) => {
				this.showLoad=false;
				Indicator.close();
                this.refreshFlightDates(jsonObect);
                console.log(jsonObect.token)
                this.$store.state.flightOrder.order.token = jsonObect.token
                this.onewayFilter = new OnewayFilter(this.getFlight())
			}).catch((res)=>{
				this.showPopup=true;
				console.log(res);
			})
		}
	}

	
</script>
<style lang='less' scoped>
	.active{
		background-color:#fbcfcc;
	}
	.prev{
		width:0.9rem;
	}
	::-webkit-scrollbar {
		display: none;
	}
	.header{
		background:#f7f7f8;
		border-bottom:1px solid #ccc;
		a{
			display:block;	
			width:1.2rem;
			img{
				width:1rem;
			}
		}
	}
	 .title{
	 	height:2.04rem;
		.title-detail{
			font-size:0.8rem;
			color:#000;
			height:0.8rem;
			margin-top:-0.2rem;
		}
		.title-detail-ico{
			width:0.64rem;
			height:0.64rem;
			display:inline-block;
			background:url('../../../assets/images/ic-btn-one3.png') center no-repeat;
			background-size:0.64rem;
		}
		.title-info{
			font-size:0.56rem;
			color:#ffad3d;
			height:0.56rem;
			padding-bottom:0.4rem;
		}
	} 
	.con-title{
		padding:0 0.68rem;
		margin-top:2.44rem;
		font-size:0.64rem;
		height:1.02rem;
		cursor:pointer;
		span{
			width:33.33%;
			line-height:1.02rem;
			border-radius:5px;
		}
		.active{
			background:#0cb78d;
			color:#fff;
		}
		i{
			margin-left:6px;
			img{
				width:0.3rem;
			}
		}
	}
	.container:before{
		display:table;
		content:"";
	}
	
	.flight-info{
		position: absolute;
		top: 3.46rem;
		bottom: 0px;
		left: 0px;
		right: 0px;
		padding:0.4rem 0.68rem;
		ul{	
			overflow: auto;
			height: 100%;
			background-color:#fff;
			border-radius:0.4rem;
			li{
				margin:0;
				padding:0.6rem;
				border-bottom:1px solid #eee;
				cursor:pointer;
				.flight-time{
					.flight-time-ico{
						width:1.02rem;
						img{
							width:1.02rem;
						}
					}
				}
				.flight-time-info{
						width:5.8rem;
						h2{
							width:5.8rem;
							font-size:0.56rem;
							font-weight:bold;
							line-height:1rem;
							text-align:center;
							i{
								font-size:0.52rem;
							}
						}
						p{
							width:5.8rem;
							font-size:0.4rem;
							line-height:0.8rem;
							text-align:center;
						}
					}
				.flight-price{
					.flight-price-detail{
						.present-price{
							width:3rem;
							font-size:0.6rem;
							text-align:left;
							color:#ffad3d;
							line-height:0.8rem;
							font-weight:bold;
						}
						.past-price{
							width:3rem;
							font-size:0.5rem;
							color:#ccc;
							text-align:left;
							line-height:0.8rem;
							span{
								text-decoration:line-through;
							}
						}
						/* h2{
							width:3.2rem;
							
							font-weight:bold;
							height:2.52rem;
							line-height:2.52rem;
							
							span{
								margin-left:0.2rem;
							}
						} */
						/* p{
							font-size:0.5rem;
							line-height:0.8rem;
						} */
					}
					.flight-next{
						width:0.6rem;
						background:url('../../../assets/images/ic-btn-one.png') center no-repeat;
						background-size:0.5rem;
					}
				}
			}
		}
	}

</style>
