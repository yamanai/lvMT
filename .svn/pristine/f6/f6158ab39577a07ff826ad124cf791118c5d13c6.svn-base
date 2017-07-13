<template>
	<div class="passenger">
		<head-top>
			<img slot="left" :src="require('../../assets/images/close.png')" class="prev" @click="$router.go(-1)">
			<div slot="title" class="title">passenger</div>
			<div slot="right" class="set"></div>
		</head-top>
		<div class="container">
			<div class="creat-passenger">
				<router-link to='/detail'>
					<img :src="require('../../assets/images/passenger/passenger-add.png')">
					<span>Creat new passenger</span>
				</router-link>
			</div>
			<div class="passenger-info">
				<ul>
					<li class="clear" v-for="(item,index) in user">
						<div class="user-info">
							<div class="user-img">
								<img :src="item.img">
							</div>
							<div class="user-name">
								<h3>{{item.name1}}</h3>
								<span>{{item.name2}}</span>
							</div>
						</div>
						<div class="user-del" @click="removeUser(index)">
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import headTop from '../../components/head/head.vue'
import detail from './child/detail.vue'
	export default{
		components:{
			headTop,
			detail
		},
		data(){
			return {
				user:[
					{
						img:require('../../assets/images/passenger/passenger-user.png'),
						name1:'VVBJ/FCBN',
						name2:'Passport Dgk'
					}
				]
			}
		},
		methods:{
			removeUser(index){
				this.user.splice(index,1)
			}
		}
	}
</script>
<style lang="less" scoped>
	.passenger{
		width:100%;
		height:100%;
		position:fixed;
		z-index:10;
	}
	.header{
		background:#f7f7f8;
		box-shadow:0 1px 5px #ccc;
		.title{
			line-height:2.04rem;
			font-size:1.02rem;
			color:#000;
		}
	}
	.creat-passenger{
		padding-top:2.04rem;
		a{	
			width:100%;
			display:inline-block;
			line-height:2.2rem;
			background-color:#efdcd8;
			img{
				width:0.768rem;
			}
			span{
				font-size:0.68rem;
				color:#ffad3d;
			}
		}
	}
	.passenger-info{
		padding:0.68rem;
		ul{
			li{
				width:100%;
				margin-bottom:0.4rem;
				.user-info{
					float:left;
					.user-img{
						float:left;
						line-height:1.5rem;
						img{
							width:1.4rem;
							vertical-align:middle;
						}
					}
					.user-name{
						float:left;
						padding-left:0.4rem;
						h3{
							font-size:0.68rem;
							line-height:0.8rem;
							color:#333;
							font-weight:normal;
						}
						span{
							display:block;
							color:#666;
							line-height:0.8rem;
							font-size:0.56rem;
							font-weight:400;
						}
					}
				}
				.user-del{
					float:right;
					width:1.5rem;
					height:1.5rem;
					line-height:1.5rem;
					background:url('../../assets/images/passenger/passenger-dell.png') center no-repeat;
					background-size:1.4rem;
				}
			}
		}
	}
</style>