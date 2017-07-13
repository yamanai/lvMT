import {OnewayDiscountPolicy} from '../OnewayDiscountPolicy.js'

export class OnewayCompanyDiscountPolicy extends OnewayDiscountPolicy{
	constructor (discountItemList) {
		super()
		this.discountItemList = discountItemList 
	}

	checkIfAvaliable (flight) {
		return true
	}

	calculateDiscount(flight) {
		for (let item of this.discountItemList) {
			if (Object.is(item.flightNumber, flight.flightNumber)) {

				return item.discountPrice
			}
		}
		
		return 0 
	}
}