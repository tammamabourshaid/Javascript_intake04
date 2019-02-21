function shortenDirections(directions){
    let horizentol = 0;
    let vertical = 0;
    for (let index = 0; index < directions.length; index++) {
        const direction = directions[index];
        switch (direction){
            case "NORTH":
            vertical++;
            break;
            case "SOUTH":
            vertical--;
            break;
            case "WEST":
            horizentol--;
            break;
            case "EAST":
            horizentol++;
            break;
    
        }
        const putDirectionsTime=function(direction,times){
            for (let index = 0; index < times; index++) {
                shortenDirections.push(direction);

                if(horizentol>0){
                    putDirectionsTime("EAST",horizentol);
                    
                } if(horizentol<0){
                    putDirectionsTime("WEST",horizentol * -1);
                
                
            } if(vertical>0){
                putDirectionsTime("NORTH",vertical);
            
        } if(vertical<0){
            putDirectionsTime("SOUTH",vertical * -1);
        
        
    }
    return shortenDirections
}
        }
    }
}
module.exports={shortenDirections};
