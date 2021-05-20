
//additional tasks 
class Iron{

    constuctor(x,y,width,height){

        var options={
            restitution:0.3,
            density:8,
            friction:0.5
            }
        
        this.bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        
        this.width=width
        this.height=height
        
        }
        
        
        display()
        {
          push ()
          translate (this.body.position.x,this.body.position.y)
          rotate (this.body.angle)
            fill("black")
            rectMode(CENTER)
            rect(0,0,this.width,this.height)
            pop ()
        }
    }