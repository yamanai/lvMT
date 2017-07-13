export let getJsonUtil = {
	domainJson(){
		return new Promise((resolve,reject)=>{
			$.getJSON('static/domain.json').then((res)=>{
				resolve(res);
			},(error)=>{
				reject(error);
			})
		})
	}
}