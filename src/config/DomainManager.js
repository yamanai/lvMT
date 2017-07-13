 import {domainJson} from './domain.js'
    
export class DomainManager {

  static gitDominJson(){
        let domainJsonObj ={};
        if(typeof(domainJson)=="undefined"){
            let domainJsonStr = sessionStorage.domainJsonStre;
            domainJsonObj = JSON.parse(domainJsonStr);
        }else{
            domainJsonObj = domainJson;
        }

        return domainJsonObj;
    }

    static getCommonURLStringWithQueryString(path, queryString) {
        return  this.gitDominJson().protcal + '\:\/\/' + this.gitDominJson().domain + '\:' +  this.gitDominJson().port + path + '\?' + queryString
    }

    static getCommonURLString(path) {
        return this.gitDominJson().protcal + '\:\/\/' + this.gitDominJson().domain + '\:' + this.gitDominJson().port + path
    }

    static getSearchFlightsURLStirng(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().searchFlightPath, queryString)
    }

    static getFlightInfoURLString(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().getFlightInfoFromToken,queryString)
    }
    static getSearchLoginURLStirng(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().loginPath, queryString)
    }
    static getRegisterUrl(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().registerPath, queryString)
    }
    // this is for flight object to load more infomations
    static getLoadMoreInfoUrlString(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().loadMoreInfoPath, queryString)
    }

    static getRefundUrl(queryString){
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().refund,queryString)
    }

    static getPriceCheckUrlString() {
        return DomainManager.getCommonURLString(this.gitDominJson().checkPricePath)
    }

	static getSaveOrderUrl() {
		return DomainManager.getCommonURLString(this.gitDominJson().saveOrderPath)
	}

	static getBaggageInfoUrlString() {
		return DomainManager.getCommonURLString(this.gitDominJson().getBaggageInfo)
	}
    static getChangeSignUrl(){
        return DomainManager.getCommonURLString(this.gitDominJson().changeSignPath)
    }

    static getRefundsUrl(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().refunds,queryString)
    }
    /**
     * @param {string} queryString
     * @returns string
     */
    static getLoginWithFaceBookAccountUrlString(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().loginxPath,queryString)
    }

    static getPaymentInfoUrlString(queryString) {
        
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().getPaymentInfo, queryString)
    }

    static searchFlightOrderUrlString(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().searchOrder, queryString)
    }

    static getCouponURLString(queryString) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().getCoupon, queryString)
    }

    static getUserOrdersUrlString () {
        return DomainManager.getCommonURLString(this.gitDominJson().getUserOders)
    }

    static getUserInfoUrlString() {
        return DomainManager.getCommonURLString(this.gitDominJson().searchUserInfo)
    }

    static getIfOrderPaiedUrlString(queryStr) {
        return DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().ifOrderPaied, queryStr)
    }
    static getSearchOrderResultPageUrl(orderNumber){
        
         let returnUrl =window.location.protocol+"//" +window.location.host+ "/payresults?"+"orderNumber="+orderNumber
         return returnUrl
    }
    static getFareRuleUrl(param){
       
       return  DomainManager.getCommonURLStringWithQueryString(this.gitDominJson().getFareRulesPath,DomainManager.getQueryString(param))
    }
    // get check passenger and children age
    static getCheckPassengerUrl(){
       
       return  DomainManager.getCommonURLString(this.gitDominJson().getCheckPassengerPath)
    }

	static getQueryString(parmsMap){
		let strBuffer = ''
		let isFirst = true
		parmsMap.forEach((value, key, map) => {
			if (isFirst) {
				isFirst = false
			} else {
				strBuffer += '\&'
			}
			strBuffer += key+'\='+value
		}, this)

		return strBuffer
	}
}
