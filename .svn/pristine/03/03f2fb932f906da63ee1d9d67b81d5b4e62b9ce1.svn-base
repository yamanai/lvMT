<template>
	<div class="menu" v-show="showMenu" @touchstart="hideMenu">
		<div class="menu-cont">
			<div class="menu-user clear">
				<div class="user-img">
					<img src="../../assets/images/menu/menu-user.png" alt="">
				</div>
				<div class="user-login">
					<span>Log in/</span><span>Sign up</span>
				</div>
			</div>
			<div class="menu-list">
				<ul>
					<li class="active">
						<span>Booking</span>
					</li>
					<li>
						<span>Passengers</span>
					</li>
					<li>
						<router-link to="/about">About us</router-link>
					</li>
					<li>
						<router-link to="/contact">Contact us</router-link>
					</li>
					<li>
						<span>Feedback</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				showMenu:false
			}
		},
		methods:{
			hideMenu(e){
				let touch=e.targetTouches[0];
				let oWidth=$('.menu-cont').css('width').replace(/[^\d\.]/g,'');
				if(touch.pageX>oWidth){
					this.$emit('closeMenu',this.showMenu);
				}
				console.log(oWidth>touch.pageX)
			}
		}
	}
</script>
<style lang="less" scoped>
	.menu{
		width:100%;
		height:100%;
		background-color:rgba(0,0,0,0.5);
		position:fixed;
		box-shadow:1px 0 5px #666;
		z-index:20;
		.menu-cont{
			width:10.07rem;
			height:100%;
			background-color:#343642;
			padding-left:0.68rem;
			.menu-user{
				padding-top:2.77rem;
				.user-img{
					text-align:left;
					float:left;
					img{
						width:3.16rem;
					}
				}
				.user-login{
					float:left;
					margin-left:0.4rem;
					span{
						color:#fff;
						font-size:0.68rem;
						text-align:left;
						display:inline-block;
						line-height:3.16rem;
					}
				}
			}
		}
		.menu-list{
			padding-top:2.1rem;
			ul{
				li{
					text-align:left;
					font-size:0.768rem;
					color:#fff;
					a,span{
						display:inline-block;
						line-height:2.1rem;
						margin-left:1.7rem;
						color:#fff;
					}
				}
				.active{
					color:#0b9d78;
				}
		}
		}
	}
	.menu-list li:nth-child(1){
		background:url('../../assets/images/menu/menu-booking.png') left center no-repeat;
		background-size:0.98rem;
	}
	.menu-list li:nth-child(2){
		background:url('../../assets/images/menu/menu-passenger.png') left center no-repeat;
		background-size:0.98rem;
	}
	.menu-list li:nth-child(3){
		background:url('../../assets/images/menu/menu-about.png') left center no-repeat;
		background-size:0.98rem;
	}
	.menu-list li:nth-child(4){
		background:url('../../assets/images/menu/menu-contact.png') left center no-repeat;
		background-size:0.98rem;
	}
	.menu-list li:nth-child(5){
		background:url('../../assets/images/menu/menu-feedback.png') left center no-repeat;
		background-size:0.98rem;
	}

	
</style>