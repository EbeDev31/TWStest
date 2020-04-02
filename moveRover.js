const rotateLeft = (direction) => {  
    let dir = direction;

    if (dir=="N"){dir="W"}
    else if(dir=="W"){dir="S"}
    else if(dir=="S"){dir="E"}
    else if(dir=="E"){dir="N"}

    return dir;

}
const rotateRight = (direction) => {  
  let dir = direction;
       if (dir=="N"){dir="E"}
       else if(dir=="E"){dir="S"}
       else if(dir=="S"){dir="W"}
       else if(dir=="W"){dir="N"}
       return dir;
} 
const roll = (position) => {  
  let {x,y,dir} = position;

      if (dir=="N"){y+=1}
      else if(dir=="E"){x+=1} 
      else if(dir=="S"){y-=1}
      else if(dir=="W"){x-=1}
      return {x,y,dir}
}
  
const moveRover = (startP, allInstructions) => { 
  let newPosition = startP;

        allInstructions.split("").map( instruction => {  
          if (instruction=="L"){newPosition.dir=rotateLeft(newPosition.dir)} 
          else if (instruction=="R"){newPosition.dir=rotateRight(newPosition.dir)} 
          else if (instruction=="M") {newPosition = roll(newPosition)}
        });
        return newPosition

}
