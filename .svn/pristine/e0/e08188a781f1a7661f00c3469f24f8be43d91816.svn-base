export const FontUtil={
	setFontSize(size){
		const ohtml = document.querySelector('html');
		const nWidth = window.screen.width;
		ohtml.style.fontSize = (nWidth/size) +'px';
	},
	init(){
		let _this = this;
		_this.setFontSize(16);
		window.onresize=function(){
			_this.setFontSize(16);
		}
	}

}
