"use strict";

// Constants:

var pi=Math.PI;

// Mathematics Functions:

var absv=function(x)
{
	return Math.abs(x);
};

var expo=function(x)
{
	return Math.exp(x);
};

var sqrt=function(x)
{
	return Math.sqrt(x);
};

var sine=function(x)
{
	return Math.sin(x);
};

var cosi=function(x)
{
	return Math.cos(x);
};

var atan=function(x,y)
{
	return Math.atan2(y,x);
};

var sign=function(x)
{
	return x?x/Math.abs(x):0;
};

var pow2=function(x)
{
	return x*x;
};

var pow3=function(x)
{
	return x*x*x;
};

var rand=function()
{
	return Math.random();
};

var hypo=function(x,y)
{
	return Math.sqrt(x*x+y*y);
};

var magn=function(x)
{
	return Math.sqrt(x[0]*x[0]+x[1]*x[1]);
};

var scal=function(c,v)
{
	return [
		c*v[0],
		c*v[1]
	];
};

var addi=function(u,v)
{
	return [
		u[0]+v[0],
		u[1]+v[1]
	];
};

var comb=function(x,u,v)
{
	return [
		x[0]*u[0]+x[1]*v[0],
		x[0]*u[1]+x[1]*v[1]
	];
};

var unit=function(theta)
{
	return [
		Math.cos(theta),
		Math.sin(theta)
	];
};

var dpro=function(u,v)
{
	return u[0]*v[0]+u[1]*v[1];
};

var xpro=function(u,v)
{
	return u[0]*v[1]-u[1]*v[0];
};

// Color Functions:

var rgba=function(r,g,b,a)
{
	return "rgba("+Math.round(255*r)+","+Math.round(255*g)+","+Math.round(255*b)+","+a+")";
};

var hsla=function(h,s,l,a)
{
	return "hsla("+h+","+100*s+"%,"+100*l+"%,"+a+")";
};

// Canvas Functions:

var mark=function(x,y,r,fill,stroke)
{
	var oldFill,oldStroke;
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28,0);
	ctx.closePath();
	if(fill!==undefined)
	{
		oldFill=ctx.fillStyle;
		ctx.fillStyle=fill;
		ctx.fill();
		ctx.fillStyle=oldFill;
	}
	if(stroke!==undefined)
	{
		oldStroke=ctx.strokeStyle;
		ctx.strokeStyle=stroke;
		ctx.stroke();
		ctx.strokeStyle=oldStroke;
	}
};

// Miscellaneous Functions:

var time=function()
{
	return Date.now();
};