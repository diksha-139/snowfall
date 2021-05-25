class Snow {
    constructor(x,y,r1,r2) {
        var options = {

            restitution: 1,
            friction: 0,
        }

        this.r1 = r1;
        this.r2=r2;
        //this.color= color("white");
        this.body = Bodies.circle(x, y,this.r1, options);
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r1,this.r2);
        pop();
    }

}