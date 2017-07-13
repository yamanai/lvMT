import { DomainManager } from '../../config/DomainManager'

export class User {

    /**
     * 
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} emailAddress
     * @param {string} phoneNumber
     */
    constructor(firstname, lastname, emailAddress, phoneNumber) {
        this.firstname = firstname
        this.lastname = lastname
        this.emailAddress = emailAddress
        this.phoneNumber = phoneNumber
	}

    /**
     * 
     * @param {any} vueComp
     * @param {string} username
     * @param {string} password
     * @param {boolean} ifRememberme
     */
    static login(vueComp, username, password, ifRememberme){
        
        let params = new Map()
        params.set("userName", username);
        params.set("password", password);
        params.set("rememberMe", ifRememberme);

        let queryParams = DomainManager.getQueryString(params);
        let url = DomainManager.getSearchLoginURLStirng(queryParams);
        //{ credentials: true, headers: { "x-Device": "mobile" } }
        let result = vueComp.$http.get(url, { withCredentials : true, headers: { "x-Device": "mobile"} })
        
        return result
        //return vueComp.$http.get(url);
    }
	
    /**
     * 
     * @param {any} vueComp
     * @param {string} facebookid
     * @param {string} email
     * @param {string} name
     */
    static loginWithFacebookInfos(vueComp, facebookid, email, firstName, lastName) {
        let parmsMap = new Map()

        parmsMap.set('id', facebookid)
        parmsMap.set('first_name', firstName)
        parmsMap.set('last_name', lastName)
        parmsMap.set('email', email)

        let qs = DomainManager.getQueryString(parmsMap)
        let urlString = DomainManager.getLoginWithFaceBookAccountUrlString(qs)
        
        vueComp.$http.get(urlString).then((res) => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
     }

    static getUserOrders(vueComp) {
        
        return new Promise((resolve, reject) => {
            vueComp.$http.get(DomainManager.getUserOrdersUrlString(), {withCredentials : true })
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

    static loadUser(vueComp) {
        //, { credentials: true } ,{ 'x-Device': 'PC' }, { credentials: true }
     //  let url =  DomainManager.getUserInfoUrlString()
        return new Promise((resolve, reject) => {

            vueComp.$http.get(DomainManager.getUserInfoUrlString(),{ withCredentials : true }).then(res => {

                res.json()
                    .then(json => {
                        console.log(json)
                        //returned jsonObject{ "userId":500797088725073925, "userName":"534837569@qq.com", "realName":null, "password":"347f675325ea744666457042ca5d3d3e839d24cb95f926c5fa0992580390575513807b2478b5e2a06ba3afa7ce37d084dc9350457fdde3842e857153861a67e4", "telephone":null, "cellphone":"15026957951", "email":"534837569@qq.com", "address":null, "photo":null, "idNo":null, "enable":true, "creattime":1495510048000, "rememberMe":true, "frozen":false, "frozenTime":null, "sourcetype":null, "version":1, "lastModifiedTime":1495510048000, "operatorId":null, "validatecode":null, "firstName":null, "lastName":null, "newPassword":null, "sex":null, "birthDate":null, "delFlag":true }
                        
                        resolve(new User(json.firstName, json.lastName, json.email, json.cellphone))
                    })
            }).catch(err => reject(err))  
        })
    }

    checkCoinRemian() {
        

        
    }

	logout(){

	}
}