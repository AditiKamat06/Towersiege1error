class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 100
        }
        console.log(options);
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB;
    }

    display(){
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke(0);
            strokeWeight(4);            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }

    fly(){
        this.chain.bodyA=null;
    }
}