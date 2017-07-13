<template>
	<div class="fareDetail">
		<h2>Fare details</h2>
		<div class="fare-cont">
			<div class="list flex space-between">
				<span>payment</span><span><i class="rs">Rs.</i></span>
			</div>
			<div class="list flex space-between">
				<span>Airline&amp;HappyEasyGo Fee</span><span><i class="rs">Rs.</i></span>
			</div>
			<div class="total flex space-between">
				<span>Total refund</span>
				<span><i class="rs">Rs.</i></span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			orders:{
				type:Array
			}
		},
		data(){
			return {

			}
		},
		mounted(){
			console.log(this.orders)
		}
	}
</script>
<style lang="less" scoped>
	.fareDetail{
		background-color:#fff;
		border-radius:0.4rem;
		margin-top:0.4rem;
		h2{
			font-size:0.68rem;
			color:#333;
			text-align:left;
			padding:0.4rem 0.4rem 0;
		}
		.fare-cont{
			background-color:#fff;
			border-radius:0.4rem;
			padding:0.4rem;
			.list,.total{
				font-size:0.6rem;
				color:#333;
				height:1.4rem;
				line-height:1.4rem;
				span{
					text-align:left;
				}
			}
			.total{
				font-size:0.768rem;
				color:#333;
				padding:0.2rem 0rem;
			}
		}
	}
</style>