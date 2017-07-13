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
     * @param {string} code coupon ��
     * @param {string} airlineCode ����ʹ�õĺ�˾����
     * @param {Number} discountType ���۷�ʽ�������� ��happy silver�� ��happy gold��
     * @param {any} discountPersentage ���۰ٷֱ�
     * @param {any} discountPrice ���ۼ۸�+Ϊ��  - Ϊ����
     * @param {any} applyType Ӧ�����ͣ�Ϊÿλ�˿� ����Ϊ�˵���
     * @param {any} isAddable �Ƿ�����������Żݵ���
     * @param {any} minimumOrderPrice ʹ�ô���� ���Ʊ��
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