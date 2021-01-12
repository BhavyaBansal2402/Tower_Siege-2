
//making shortcut key words for matter.js
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Initialising the objects
var pentagon;
var G1,G2,G3; //G = Ground
var B1,B2,B3,B4,B5,B6,B7,B8,B9,B10;
var B11,B12,B13,B14,B15,B16,B17,B18,B19,B20;
var B21,B22,B23,B24,B25; //B = Block
var sling, pentagon;

function preload()
{

}

function setup()
{
    //creating the canvas
    var canvas = createCanvas(1000,400);

    //creating engine and adding it to the world
    engine = Engine.create();
    world = engine.world;

    //Ground making
    G1 = new Ground(390, 310, 270, 12);
    G2 = new Ground(800, 225, 210, 12);
    G3 = new Ground(500, 390, 1000, 20);

    //Blocks making
    B1 = new Box(300,275,30,40);
    B2 = new Box(330,275,30,40);
    B3 = new Box(360,275,30,40);
    B4 = new Box(390,275,30,40);
    B5 = new Box(420,275,30,40);
    B6 = new Box(450,275,30,40);
    B7 = new Box(480,275,30,40);
    B8 = new Box1(330,235,30,40);
    B9 = new Box1(360,235,30,40);
    B10 = new Box1(390,235,30,40);
    B11 = new Box1(420,235,30,40);
    B12 = new Box1(450,235,30,40);
    B13 = new Box2(360,195,30,40);
    B14 = new Box2(390,195,30,40);
    B15 = new Box2(420,195,30,40);
    B16 = new Box3(390,155,30,40);
    B17 = new Box(800-60,205,30,40);
    B18 = new Box(800-30,205,30,40);
    B19 = new Box(800,205,30,40);
    B20 = new Box(800+30,205,30,40);
    B21 = new Box(800+60,205,30,40);
    B22 = new Box2(800-30,205-40,30,40);
    B23 = new Box2(800,205-40,30,40);
    B24 = new Box2(800+30,205-40,30,40);
    B25 = new Box1(800,205-80,30,40);

    //making the shape of pentagon
    pentagon= new polygon(200,200,20);

    //making the constraint
    sling = new SlingShot(pentagon.body,{x:180,y:190})

}

function draw()
{

    //Giving background colour
    background(56,44,44); 

    //updating engine
    Engine.update(engine);
    
    //Displaying all the grounds
    G1.display();
    G2.display();
    G3.display();

    //Displaying all the Blocks
    B1.display();
    B2.display();
    B3.display();
    B4.display();
    B5.display();
    B6.display();
    B7.display();
    B8.display();
    B9.display();
    B10.display();
    B11.display();
    B12.display();
    B13.display();
    B14.display();
    B15.display();
    B16.display();
    B17.display();
    B18.display();
    B19.display();
    B20.display();
    B21.display();
    B22.display();
    B23.display();
    B24.display();
    B25.display();
    
    //Displaying shape of the pentagon
    pentagon.display();
    
    //Displaying slingshot
    sling.display();

    //adding the text
    strokeWeight(22);
    stroke("light blue");
    fill("black");
    textSize(22);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);
    text("Press SPACE BAR key to replace the Stone and launch!!",220,85);
}
    
    function mouseDragged()
    {
        Matter.Body.setPosition(pentagon.body, {x: mouseX, y: mouseY});
    }

    
    function mouseReleased()
    {
        sling.fly();
    }


    function keyPressed()
    {
        if(keyDown("space"))
        {
            Matter.Body.setPosition(pentagon.body,{x:100,y:200});
            sling.attach(pentagon.body);
        }
    }