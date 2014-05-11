"use strict";

var http=require("http");
var url=require("url");
var fs=require("fs");
var path=require("path");

var manifest=require("./manifest.json");

var loadFiles=function(a,f)
{
	var k,n,F;
	k=a.length;
	n=a.length;
	F=function(n)
	{
		return function(e,data)
		{
			E(e);
			k--;
			a[n].data=data;
			if(k===0)
			{
				f(a);
			}
		};
	};
	while(n--)
	{
		fs.readFile(
			a[n].loc,
			"utf-8",
			F(n)
		);
	}
};

var E=function(e)
{
	if(e)
	{
		console.log("Error: "+e);
	}
};

var File=function(loc)
{
	return {
		loc:path.join(__dirname,loc),
		data:undefined
	};
};

var indexHTML=File("index.html");
var coreJS=File("core.js");
var standardJS=File("standard.js");

var files=[
	indexHTML,
	coreJS,
	standardJS
];

var demos=(
	function()
	{
		var n,no,m,l,x,y,F;
		F=function(o)
		{
			return function(e,data)
			{
				var n,x;
				E(e);
				data=JSON.parse(data);
				for(n in data)
				{
					o[n]=data[n];
				}
				n=data.jsFiles.length;
				while(n--)
				{
					x=path.join(o.location,data.jsFiles[n]);
					x=File(x);
					files.push(x);
					o.jsFiles[n]=x;
				}
				l--;
				if(l===0)
				{
					loadFiles(files,main);
				}
			};
		};
		x=[];
		y={};
		l=manifest.demos.length;
		n=manifest.demos.length;
		while(n--)
		{
			no=manifest.demos[n];
			x[n]={
				name:no.name,
				description:no.description,
				location:no.location
			};
			m=no.url.length;
			while(m--)
			{
				y[no.url[m]]=x[n];
			};
			fs.readFile(
				path.join(__dirname,no.location,"info.json"),
				F(x[n])
			);
		}
		return y;
	}
)();

var main=function()
{
	var base,x,a;
	x="";
	x+="<script>\n\n\t"+coreJS.data.replace(/\n/g,"\n\t")+"\n\n\t";
	x+=standardJS.data.replace(/\n/g,"\n\t")+"\n\n</script>\n";
	base=indexHTML.data;
	base=base.replace("<!--GENERAL SCRIPT-->",x);
	http.createServer(
		function(request,response)
		{
			var x,y,n;
			request=url.parse(request.url,true).pathname;
			request=request.split("/");
			request.shift();
			console.log(request);
			if(request[0]==="demos" || request[0]==="Demos" || request[0]==="d")
			{
				a=request[2];
				a=(a==="about" || a==="About" || a==="a");
				request=demos[request[1]];
				if(request!==undefined)
				{
					x=base;
					x=x.replace("<!--TITLE-->",request.name);
					x=x.replace(/(DPP)/g,request.dpp);
					y=[];
					n=request.jsFiles.length;
					while(n--)
					{
						y[n]="\n\n\t"+request.jsFiles[n].data.replace(/\n/g,"\n\t");
					}
					y=y.join("");
					y="<script>"+y+"\n\n</script>";
					x=x.replace("<!--SPECIFIC SCRIPT-->",y);
					response.writeHead(200,
						{
							"Content-Type":"text/html"
						}
					);
					response.write(x);
					response.end();
				}
			}
			console.log("Done!");
		}
	).listen(80);
};



