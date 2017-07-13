import {DiscountManager} from './DiscountManager.js'
import {DiscountPolicy} from './DiscountPolicy.js'

export class OnewayDiscountManager extends DiscountManager{
	constructor (policys) {
		super()
		this.policys = policys
	}

	calculateDiscount (flight) {
		
		flight.realDiscount = 0

		for (let item of this.policys) {
			if (item instanceof DiscountPolicy) {
				if (item.checkIfAvaliable(flight)) {
					flight.realDiscount = item.calculateDiscount(flight)
				}
			} else {
				if (item instanceof Array) {
					
					for (let cp of item) {
						if (cp.checkIfAvaliable(flight)) {
							flight.realDiscount += cp.calculateDiscount(flight)
							break
						}
					}
					
				}
			}
		}
	}
}