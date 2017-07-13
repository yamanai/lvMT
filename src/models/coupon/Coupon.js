import { DomainManager } from '../../config/DomainManager'
import { FlightOrder } from '../../models/flightorder'


export class Coupon {

    /**
     * 
     * @param {any} vueComp
     * @param {string} code
     */
    static getCouponByCode(vueComp, code) {

        let map = new Map()
        map.set('k1', code.toUpperCase())

        let urlStr = DomainManager.getCouponURLString(DomainManager.getQueryString(map))
        return new Promise((resolve, reject) => {
            vueComp.$http.get(urlStr)
                .then(res => {
       
                    res.json()
                        .then(json => {
                            resolve(json)
                        })
                        .catch(err => reject(err))
                })
                .catch(err => reject(err))
        })
    }

    /**
     * 
     * @param {string} code coupon 码
     * @param {string} airlineCode 可以使用的航司名称
     * @param {Number} discountType 减价方式（立减， 返happy silver， 返happy gold）
     * @param {any} discountPersentage 减价百分比
     * @param {any} discountPrice 减价价格（+为加  - 为减）
     * @param {any} applyType 应用类型（为每位乘客 还是为此单）
     * @param {any} isAddable 是否可以与其他优惠叠加
     * @param {any} minimumOrderPrice 使用此码的 最低票价
     */
    constructor(code, airlineCode, discountType, discountPersentage, discountPrice, applyType, isAddable, minimumOrderPrice) {
        this.code = code
        this.airlineCode = airlineCode
        this.discountType = discountType
        this.discountPersentage = discountPersentage
        this.discountPrice = discountPrice
        this.applyType = applyType
        this.isAddable = isAddable
        this.minimumOrderPrice = minimumOrderPrice
    }

}