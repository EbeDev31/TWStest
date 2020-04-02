
Information I knew were the starting point of the of rover nad the instructions(as a string) to direct the rover

Assumptions:
************
starting point an object;
Instructions will have no errors(lowercase or spaces or perhaps other random carachters)

Testing:
********
I tested my solution with below examples:

sp={
  x:3,y: 3, dir:"E"
}

inst="MMRMMRRRM"

console.log(moveRover(sp,inst));
--------------------------
sp={
  x:1,y: 2, dir:"N"
}

inst="LMLMLMLMM"

console.log(moveRover(sp,inst));

