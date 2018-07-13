class mButton
{
	init()
	{
		document.querySelectorAll(".m-button").forEach((elm)=>
		{
			elm.childNodes.forEach((sub)=>
			{
				if(sub.nodeName != "#text")
					sub.style.opacity = "0";
			});
			elm.querySelector(".first").style.opacity = "1";
			elm.style.width="100px";
			elm.style.height="20px";
			elm.style.paddingLeft="30px";
			elm.querySelector(".loading").innerHTML = `<img style='width:35px;height:22px' src='img/roll.svg' class='svg' />`;
		});
	}
	click(elm,call)
	{
		this.camino = () => 
		{
			let promesa = new Promise((okay,error)=>
			{
				call(okay,error);
			});
			document.querySelector(elm).childNodes.forEach((sub)=>
			{
				if(sub.nodeName != "#text")
					sub.style.opacity = "0";
			});
			document.querySelector(elm).querySelector(".loading").style.opacity = "1";
			document.querySelector(elm).style.width="45px";
			document.querySelector(elm).style.height="20px";
			document.querySelector(elm).style.paddingLeft="15px";
			promesa.then(()=>
			{
				document.querySelector(elm).childNodes.forEach((sub)=>
				{
					if(sub.nodeName != "#text")
						sub.style.opacity = "0";
				});
				document.querySelector(elm).querySelector(".last").style.opacity = "1";
				document.querySelector(elm).style.width="100px";
				document.querySelector(elm).style.height="20px";
				document.querySelector(elm).style.paddingLeft="30px";
				document.querySelector(elm).removeEventListener("click",this.camino,false);
				let restaurar = () =>
				{
					this.restoreState(elm,call)
					document.querySelector(elm).removeEventListener("click",restaurar,false);
				}
				document.querySelector(elm).addEventListener("click",restaurar,false);
			})
		}
		if(document.querySelector(elm).className.indexOf("m-button") != -1)
			document.querySelector(elm).addEventListener("click",this.camino,false);
	}
	restoreState(elm,call)
	{
		this.init();
		this.click(elm,call);
	}
}