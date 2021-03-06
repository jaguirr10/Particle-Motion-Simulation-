// Juan Aguirre

window.onload = function()
{

	var canvas = document.createElement("canvas"); 
	var  c = canvas.getContext("2d");
	var  particles = {};
	var  particleIndex = 0;
	var  particleNum = 30;
	
	  canvas.width = innerWidth; 
	  canvas.height = innerHeight;
	
	document.body.appendChild(canvas);
	
	c.fillStyle = "black";
	c.fillRect(0,0,canvas.width, canvas.height);
	
	   function Particle()
	   {
		   this.x = canvas.width / 2;
		   this.y = canvas.height / 2;
		   this.vx = Math.random() * 10 - 5;
		   this.vy = Math.random() * 10 - 5;
		   this.gravity = 0.3;
		   particleIndex++;
		   particles[particleIndex] = this;
		   this.id = particleIndex;
		   this.life = 0;
		   this.maxLife = Math.random() * 30 + 50;
		   this.color = "hsl(" + parseInt(Math.random()*360, 10)+",100%,50%)";

		   
		   
		   
	   }
	   
	    Particle.prototype.draw = function()
		{
			this.x += this.vx;
			this.y += this.vy;
			
			if(Math.random() < 0.1)
			{
				this.vx = Math.random() * 10 - 5;
				this.vy = Math.random() * 10 - 5;
				
			}
			
			
			//this.vy += this.gravity;
			this.life++;
			if(this.life >= this.maxLife)
			{
				delete particles[this.id];
			}
			c.fillStyle = this.color;
			c.fillRect(this.x, this.y, 10,10);
		};
	   
	      
		 
		 setInterval(function()
		 {
			 c.globalCompositeOperation = "source-over";
			 c.fillStyle = "rgba(0,0,0,0.2)";
	         c.fillRect(0,0,canvas.width, canvas.height);
			 
			 for (var i = 0; i< particleNum; i++)
		  {
			 new Particle(); 
		  }
			 c.globalCompositeOperation = "lighter";
			 for ( var i in particles)
			 {
				 particles[i].draw();
			 }
			 
		 },30);
		 
		 
 };
	
	


	
	

