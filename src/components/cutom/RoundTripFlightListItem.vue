<template>
	<div class="flight-detail-list" @click='onClick'>
		<div class="price">
			<span class="price1"></span>
			<span class="price2">Rs:{{item.price | formatDate}}</span>
		</div>
		<div class="time">
			<span>{{TimeFormatUtils.getDisplayHourAndMinute(item.departDate)}}</span>
			<span class="time-ico"></span>
			<span>{{TimeFormatUtils.getDisplayHourAndMinute(item.returnDate)}}</span>
		</div>
		<div class="stop">
			<span>{{TimeFormatUtils.getDurationDescription(item)}}</span>
			<span>.</span>
			<span>{{((item.stops.length == 0) || item.stops.length)? 'non-stop' : item.length + 'stop(s)'}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isActive:false,

			}
		},
		methods:{
			closeCode(){
				this.$emit("close",this.isCode);
			},
			onClick(){
				this.$emit("onClick",this.isCode);
			}
		}
	}
</script>

<style>
	
</style>