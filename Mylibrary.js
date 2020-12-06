function has_collided(arg1,arg2){
    bulletRightEdge = arg1.x+arg1.width;
    wallLeftEdge = arg2.x;
    if (bulletRightEdge>= wallLeftEdge){
        return true;
    }
   else{
        return false;
    }
}  