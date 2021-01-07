class Bird extends BaseClass {
  constructor(x, y) {
  super(x,y,50,50); // transfer all the properties from the base class with dimensions as x,y,50,50
  
  this.image=loadImage("sprites/bird.png")

}
  display(){
this.body.position.x=mouseX;
this.body.position.y=mouseY;

super.display();// transfer the display function also
  }
};