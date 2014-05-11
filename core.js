"use strict";

// Global Mechanical Variables:

var wW;
var wH;

var ctx=document.getElementById("canvasBox").getContext("2d");

var log=function(m)
{
	document.getElementById("logBox").innerHTML+="<br>"+m;
	return undefined;
};

var clearLog=function()
{
	document.getElementById("logBox").innerHTML="";
	return undefined;
};

var point=function()
{
	document.getElementById("canvasBox").style.cursor="pointer";
};

var unpoint=function()
{
	document.getElementById("canvasBox").style.cursor="default";
};

var chron=0;

var userX=0;
var userY=0;
var userXV=0;
var userYV=0;
var userW=0;
var userA=0;
var userS=0;
var userD=0;
var user_=0;
var userC=0;

var initMain=function(){};
var initLoad=[];
var initDraw=function(){};
var chronometric=function(){};
var draw=function(){};
var callW=function(){};
var callA=function(){};
var callS=function(){};
var callD=function(){};
var call_=function(){};
var callMove=function(){};
var callClick=function(){};

(
	function()
	{
		var x=0;
		var y=0;

		// Event Functions:

		var mouseMove=function(e)
		{
			var a=translate(e.clientX,e.clientY);
			x=a.x;
			y=a.y;
			callMove(a.x,a.y);
			return undefined;
		};

		var mouseClick=function(e)
		{
			var a=translate(e.clientX,e.clientY);
			x=a.x;
			y=a.y;
			callClick(a.x,a.y);
			return undefined;
		};

		var translate=function(x,y)
		{
			x=(x-(window.innerWidth-wW-2)/2)/wW*200;
			x=Math.min(x,200);
			x=Math.max(x,0);
			x-=100;
			y=(y-(wH-wW/2)/2)/wW*200;
			y=Math.min(y,100);
			y=Math.max(y,0);
			y=50-y;
			return {x:x,y:y};
		};

		var pushKey=function(e)
		{
			var key;
			key=e.keyCode;
			if(key===32 || key===13)
			{
				user_=1;
				call_();
			}
			else if(key===37 || key===65)
			{
				userA=1;
				callA();
			}
			else if(key===38 || key===87)
			{
				userW=1;
				callW();
			}
			else if(key===39 || key===68)
			{
				userD=1;
				callD();
			}
			else if(key===40 || key===83)
			{
				userS=1;
				callS();
			}
			return undefined;
		};

		var releaseKey=function(e)
		{
			var key;
			key=e.keyCode;
			if(key===32 || key===13)
			{
				user_=0;
			}
			else if(key===37 || key===65)
			{
				userA=0;
			}
			else if(key===38 || key===87)
			{
				userW=0;
			}
			else if(key===39 || key===68)
			{
				userD=0;
			}
			else if(key===40 || key===83)
			{
				userS=0;
			}
			return undefined;
		};

		// Setup:

		var animate=function()
		{
			chronometric();
			animate=(function()
			{
				var request=window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
				return function()
				{
					request(animate);
					userXV=0.6*(x-userX);
					userYV=0.6*(y-userY);
					userX+=userXV;
					userY+=userYV;
					chronometric();
					chron++;
					return undefined;
				};
			})();
			animate();
			return undefined;
		};

		var format=function(b)
		{
			var cv,dpp;
			dpp=(DPP);
			dpp=Math.min(DPP,window.devicePixelRatio);
			wW=window.innerWidth-2;
			wH=window.innerHeight-2;
			if(wH<wW/2)
			{
				wW=wH*2;
			}
			cv=wW/200*dpp;
			document.getElementById("canvasBox").width=wW*dpp;
			document.getElementById("canvasBox").height=wW/2*dpp;
			document.getElementById("canvasBox").style.width=wW+"px";
			document.getElementById("canvasBox").style.height=wW/2+"px";
			document.getElementById("canvasBox").style.top=(wH-wW/2)/2+"px";
			document.getElementById("canvasBox").style.left=(window.innerWidth-wW-2)/2+"px";
			document.getElementById("logBox").style.fontSize=wW/1200+"em";
			document.getElementById("logBox").style.top=(wH-wW/2)/2+"px";
			document.getElementById("logBox").style.left=(window.innerWidth-wW-2)/2+wW/40+"px";
			ctx.scale(cv,-cv);
			ctx.translate(100,-50);
			document.body.style.background="#555";
			if(!b)
			{
				initDraw();
				draw();
			}
			return undefined;
		};

		var asyncLoad=function(n,t0,callback)
		{
			var t,delay;
			t=Date.now();
			delay=1;
			if(initLoad[n]!==undefined)
			{
				if(t-t0>=20)
				{
					document.getElementById("progressBox").style.width=60*n/initLoad.length+"%";
					delay=20;
				}
				window.setTimeout(asyncLoad,delay,n+1,t,callback);
			}
			else
			{
				callback();
			}
			return undefined;
		};

		var initialize=function(e)
		{
			var a;
			format(1);
			a=translate(e.clientX,e.clientY);
			userX=a.x;
			userY=a.y;
			initMain();
			asyncLoad(
				0,
				Date.now(),
				function()
				{
					initDraw();
					document.getElementById("blockBox").style.display="none";
					animate();
					window.setTimeout(
						function()
						{
							document.body.onmousedown=function(){userC=1;};
							document.body.onmouseup=function(){userC=0;};
							document.body.onclick=mouseClick;
							document.body.onmousemove=mouseMove;
							document.body.onkeydown=pushKey;
							document.body.onkeyup=releaseKey;
							return undefined;
						},
						10
					);
				}
			);
			return undefined;
		};
		document.getElementById("blockBox").onclick=initialize;
		window.onresize=function()
		{
			format(0);
			return undefined;
		};
		return undefined;
	}
)();