import airlineJsonArr from '../../../static/airlines.json'
import {Airline} from './Airline.js'


export class AirlineManager {

	constructor (defaultAirlines) {
		this.airlines = defaultAirlines
	}

	static loadLocalAirlines() {
		
		let airlines = []
		airlineJsonArr.forEach((v, i , arr) => {
			airlines.push(new Airline(v.ab, v.al, v.iconPath))
		})
		return airlines
	}

	getAirlineByName(name) {
		let self = this

		for (let airline of this.airlines) {
			if (Object.is(airline.name, name)) {

				return airline
			}
		}

		return undefined
	}

	getAirlineByShortname(shortname) {
		let self = this

		for (let airline of this.airlines) {
			if (Object.is(airline.shortname, shortname)) {
				return airline
			}
		}

		return undefined
	}
}