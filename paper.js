class Paper {


    constructor (x,y, radius)
    {
    var options ={
    isStatic: false,
    'restitution': 0.3,
    'friction': 1,
    'density': 1.2
    }
    this.body = Bodies.circle(x,y, radius, options)
    this.radius = radius
    this.image = loadImage("paper.png")
    World.add(world, this.body)
    }
    
    display()
    {
    
    push()
    //translate (this.body.position.x, this.body.position.y)
    //rotate (this.body.angle)
    //ellipseMode(RADIUS)
    imageMode(CENTER)
    image(this.image, this.body.position.x, this.body.position.y, 2*this.radius, 2*this.radius)
    //circle(0, 0, this.radius)

    pop ()
    }
    
    }