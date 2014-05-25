"use strict";

var dt=1;
var steps=50;
var particles=[];
var message="HELLO,WORLD!";
var gravity=0.004;

var Particle=function(x,y,r,m,f)
{
	return {
		x:x,
		y:y,
		xv:0,
		yv:0,
		xa:0,
		ya:0,
		r:r,
		m:m,
		f:f
	};
};

var initMain=function()
{
	var n,no,m,x;
	x=180;
	n=message.length;
	while(n--)
	{
		no=Alphabet[
			cypher.indexOf(
				message.charAt(n)
			)
		];
		x-=14;
		m=no.length;
		while(m--)
		{
			particles.push(Particle(2*no[m].x-85+x-0.5,2*no[m].y-0.5,0.8,1,rand()));
			particles.push(Particle(2*no[m].x-85+x-0.5,2*no[m].y+0.5,0.8,1,rand()));
			particles.push(Particle(2*no[m].x-85+x+0.5,2*no[m].y-0.5,0.8,1,rand()));
			particles.push(Particle(2*no[m].x-85+x+0.5,2*no[m].y+0.5,0.8,1,rand()));
		}
	}
	dt/=steps;
	point();
};

var callClick=function()
{
	var n,no,dx,dy,d;
	n=particles.length;
	while(n--)
	{
		no=particles[n];

		dx=no.x-userX;
		dy=no.y-userY;
		d=hypo(dx,dy);
		dx/=d;
		dy/=d;
		d=15+d*d;
		no.xa+=100*dx/d;
		no.ya+=100*dy/d;

		dx=no.x+userX;
		dy=no.y-userY;
		d=hypo(dx,dy);
		dx/=d;
		dy/=d;
		d=15+d*d;
		no.xa+=100*dx/d;
		no.ya+=100*dy/d;
	}
};

var draw=function()
{
	var n,no,v,m,c1,c2;
	ctx.clearRect(-100,-50,200,100);
	n=particles.length;
	while(n--)
	{
		no=particles[n];
		v=hypo(no.xv,no.yv);
		m=colors.length-1;
		while(m--)
		{
			c2=colors[m];
			c1=colors[m+1];
			if(v<c2[2])
			{
				v-=c1[2];
				v/=c2[2]-c1[2];
				break;
			}
		}
		ctx.fillStyle=rgba(
			(c1[0][0]+c1[1][0]*no.f)*(1-v)+(c2[0][0]+c2[1][0]*no.f)*v,
			(c1[0][1]+c1[1][1]*no.f)*(1-v)+(c2[0][1]+c2[1][1]*no.f)*v,
			(c1[0][2]+c1[1][2]*no.f)*(1-v)+(c2[0][2]+c2[1][2]*no.f)*v,
			(c1[0][3]+c1[1][3]*no.f)*(1-v)+(c2[0][3]+c2[1][3]*no.f)*v
		);
		ctx.beginPath();
		ctx.arc(no.x,no.y,no.r,0,6.28);
		ctx.closePath();
		ctx.fill();
	}
};

var chronometric=function()
{
	var k,n,no,d;
	draw();
	k=steps;
	while(k--)
	{
		n=particles.length;
		while(n--)
		{
			no=particles[n];
			no.xa+=0.005*no.xv;
			no.ya+=0.005*no.yv;
			d=1.8*((rand()>0.5)?1:-1);
			no.xa+=d*no.yv;
			no.ya-=d*no.xv;
			d=hypo(no.x,no.y);
			no.xa-=gravity*no.x/d*hypo(no.xv,no.yv);
			no.ya-=gravity*no.y/d*hypo(no.xv,no.yv);
		}
		n=particles.length;
		while(n--)
		{
			no=particles[n];
			no.xv+=no.xa*dt;
			no.yv+=no.ya*dt;
			no.x+=no.xv*dt;
			no.y+=no.yv*dt;
			no.xa=0;
			no.ya=0;
		}
	}
};