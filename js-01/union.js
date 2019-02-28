function getUnion(array1,array2){
    const union=[];
    for (i=0,i<array1.length,i++){
        const element1=array1[i];
        for (j=0,j<array1.length,j++){
            if (array2[j]===element1){
                union.push(element1)
                break;
            }
        }
    }
union.sort(sort);
return union;
}
module.exports={union};
