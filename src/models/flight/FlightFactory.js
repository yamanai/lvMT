import {Airline, AirlineManager} from '../airline'
import {Flight, FlightStop} from './'

export class FlightFactory {
	constructor (flightJsonObjects) {
		this.jobjArr = flightJsonObjects
		this.airlineManager = new AirlineManager(AirlineManager.loadLocalAirlines())
	}


	build(onPreBuild = null) {
		
		let self = this 
		let products = []

		this.jobjArr.forEach(function(json){

			let departDate = new Date(json.dt);
			let returnDate = new Date(json.at);
			let stops = [];

			for (let jobj of json.stopByFlightArray) {
				stops.push(FlightStop.getInstanceWithJsonObject(jobj));
			}

			// let airline = new Airline(jsonObject.al, jsonObject.co)

			let airline = self.airlineManager.getAirlineByShortname(json.al)

			let obfp = json.fee.obfp

			let bfp = json.fee.obfp

			let discount = json.fee.obfp - json.fee.bfp
			
			let price = json.opr + discount


			airline = Object.is(airline, undefined) ? new Airline(json.al, json.co): airline
			
			let product = new Flight(departDate, returnDate, airline, 
				json.fn, stops, json.fee.gst, discount, price, json.fee.refundable, json.ddts, json.policyId,json.da,json.aa,json.dt,json.at,obfp,bfp);

			
			products.push(product)

			if (!Object.is(onPreBuild, null)) {
				onPreBuild(product, discount)
			}
		})

		return products
	}
}