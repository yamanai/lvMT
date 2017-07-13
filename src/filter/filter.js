import Vue from 'vue'

Vue.filter('formatDate',function(value){
	return value.toString().replace(/\B(?=(?:\d{3})+\b)/g, ',');
})