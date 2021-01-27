function collide(obj1,obj2){
    if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
      obj2.x-obj1.x<obj1.width/2+obj2.width/2 &&
      obj1.y-obj2.y<obj1.height/2+obj2.height/2&&
      obj2.y-obj1.y<obj1.height/2+obj2.height/2){
        return true
      }
    else{
     return false
    }
   
  }
  function bounceoff(o1,o2){
  if(o1.x-o2.x<o1.width/2+o2.width/2&&
    o2.x-o1.x<o1.width/2+o2.width/2){
    o1.velocityX=o1.velocityX*(-1);
    o2.velocityX=o2.velocityX*(-1);
 
   }

 if(o1.y-o2.y<o1.height/2+o2.height/2&&
    o2.y-o1.y<o1.height/2+o2.height/2){
    o1.velocityY=o1.velocityY*(-1);
    o2.velocityY=o2.velocityY*(-1);
   
     }
}