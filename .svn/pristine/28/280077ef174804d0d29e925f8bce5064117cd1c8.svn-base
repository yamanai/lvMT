    
import * as mutationNames from '../../vuex/models/flightorder/MutationName.js'
import * as xFlight from '../../vuex/models/flight/XFlight.js'



import {OnewayOrder,RoundTripOrder} from '../flightorder'
import {Flight} from '../flight'


    export class GetFlightOrderUtil{


        static getOrderFromSession(vueComp,sessionStorage){
            
        	let order = vueComp.$store.getters.flightOrder
        	if(order==null){
        		let orderInsession = sessionStorage.order
        		let orderInObj = JSON.parse(orderInsession)

        		let opraOrder = null

        		if(orderInObj.orderType=="one"){
        				opraOrder = new OnewayOrder()
        		}else if(orderInObj.orderType=="two"){
        			 opraOrder = new RoundTripOrder()
        		}

        		  opraOrder.toObject(orderInObj) 
	        	  order = opraOrder
        		vueComp.$store.commit(mutationNames.setupOrder,order)
        	}
        	return 	order
        }


        static setOrderIntoSession(flightOrders,sessionStorage){
        	let orderJson = flightOrders.toJSON()
        	let orderStr = JSON.stringify(flightOrders)
        	sessionStorage.order = orderStr
        }
    }