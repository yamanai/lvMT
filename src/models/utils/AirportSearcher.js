export class AirportSearcher {
	constructor(airports){
		this.airports = airports
	}

	getSuitableAirports(keywords) {
		if (keywords == '') {
			return []
		} else {
			let reg = new RegExp(keywords, 'ig')
			let res = []
			for (let airport of this.airports){
				if(airport.iataCode.match(reg)){
					res.unshift(airport)
				}else if(airport.anotherNames.match(reg)||airport.countryName.match(reg)){
					res.push(airport)
				}
			}
			return res
		}
	}
} 