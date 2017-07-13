 import {getJsonUtil} from '../models/utils/getJsonUtil.js'

 	getJsonUtil.domainJson().then((res)=>{
 		let session = sessionStorage;
 		
 		domainJson = res;
 		let resStr = JSON.stringify(res);
 		sessionStorage.domainJsonStre =resStr;
 	},(error)=>{
 		console.error(error);
 	}) 

 	export var domainJson;

