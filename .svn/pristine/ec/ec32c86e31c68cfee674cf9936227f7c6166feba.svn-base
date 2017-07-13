<template>
	<div class="wrapper">
		<head-top class="header" v-show='showHead'>
			<img slot="left" :src="require('../../assets/images/prev.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">My Account</div>
		</head-top>
		<div class="container">
			<div>
				<div class="user flex direction-column align-items-center content-start">
					<div class="user-photo">
						<img :src="require('../../assets/images/account/photo.png')" alt="">
					</div>
					<span>{{greetings}}</span>
					<span v-if="Object.is(user,null)"></span>
					<span v-else>{{username}}</span>
					<span v-if="Object.is(user,null)"></span>
					<span v-else>{{user.emailAddress}}</span>
				</div>
				<div class="userCenter">
					<div class="userCenter-cont">
						<router-link :to="{path:item.route}" class="list flex space-between"  v-for="(item, index) in usercent" :key="index">
							<div class="list-left flex content-start">
								<div class="list-ico">
									<img :src="item.img" >
								</div>
								<div class="list-tit">{{item.text}}</div>
							</div>
							<div class="list-right"></div>
						</router-link>
					</div>
				</div>
				<div class="SignOut">
					<p @click="$router.push('/agreement')">Legal and privacy</p>
					<mt-button class="buttons" @click="signOut" type="default" size="large">Sign Out</mt-button>
				</div>
			</div>	
		</div>
	</div>
</template>
<script>
    import headTop from '../../components/head/head.vue'
    import { User } from '../../models/user'
    import{Toast} from "mint-ui"
    import {CookieUtil} from '../../models/utils'
    export default {
		components:{
			headTop
		},
		data(){
            return {
                user: null,
				usercent:[
					{
						img:require('../../assets/images/account/My-Trips.png'),
						text:'My Trips',
						route:'/trip'
					},
					{
						img:require('../../assets/images/account/My-Profile.png'),
						text:'My Profile',
						route:'/contact'
					},
					{
						img:require('../../assets/images/account/Happy-Wallet.png'),
						text:'Happy Wallet',
						route:'/happywallet'
					},
					{
						img:require('../../assets/images/account/Contact-us.png'),
						text:'Contact us',
						route:'/contact'
					}
					
				],
				showHead:true
			}
        },
        computed:{
        	greetings(){
        		let d = new Date();
        		let h = d.getHours();
        		if(h>=6 && h<12){
        			return 'Good morning';
        		}else if(h>=12 && h<18){
        			return 'Good afternoon';
        		}else{
        			return 'Good evening';
        		}
        	},
        	username(){
        		if(this.user.firstname == null && this.user.lastname == null){
        			return '';
        		}else{
        			return this.user.firstname + " " + this.user.lastname
        		}
        	}
        },
        methods:{
        	signOut(){
        		let self = this;
        		let cu = new CookieUtil(document)
    			if(cu.removeItem("uuid")){
	    			Toast({
					  message: 'sign out successful',
					  duration: 1000
					});
					self.$router.push("/")
        		}
        	}
        },
        watch:{
        	$route(to,from){
        		if(to.path=='/Account'){
        			this.showHead=true;
        		}else{
        			this.showHead=false;
        		}
        	}
        },
        mounted() {
        	let cu = new CookieUtil(document)
        	let self = this;
        	if(cu.hasItem("uuid")){
        		 User.loadUser(self)
                .then(user => {
                	self.$nextTick(()=>{
                		this.user = user
                	})
                })
                .catch(err => { console.log(err) })
        	}else {

        		//Toast("")
        	}
           
            
        }
	}
</script>
<style lang="less" scoped> 
	.header{
		background:transparent;
		.title{
			line-height:2.04rem;
			font-size:0.768rem;
			color:#fff;
		}
	}
	.container{
		background-color:#fff;
	}
	.user{
		height:8.8rem;
		padding:2.4rem 0.68rem;
		background:#fff url('../../assets/images/account/user-bg.png') top center no-repeat;
		background-size:100% 11.2rem;
		.user-photo{
			img{
				width:4.2rem;
				height:4.2rem;
			}
		}
		span{
			display:block;
			padding:0.1rem;
			color:#fff;
			font-size:0.6rem;
		}
	}
	.userCenter{
		padding:0 0.68rem;
		.userCenter-cont{
			background-color:#fff;
			border-radius:0.3rem;
			padding:0 0.4rem;
			.list{
				height:2.35rem;
				line-height:2.35rem;
				.list-left{
					.list-ico{
						img{
							width:0.68rem;
						}
					}
					.list-tit{
						font-size:0.6rem;
						color:#666;
						padding-left:0.6rem;
					}
				}
				.list-right{
					width:1rem;
					background:url('../../assets/images/ic-btn-one.png') center no-repeat;
					background-size:0.4rem;
				}
			}
		}
	}
	.SignOut{
		padding:1rem 0.68rem;
		p{
			font-size:0.6rem;
			color:#0cb78e;
			text-align:center;
			padding:0.4rem;
		}
		.buttons{
			background-color:#ffad3d;
			border:none;
			box-shadow:none;
			color:#fff;
		}
	}
</style>
