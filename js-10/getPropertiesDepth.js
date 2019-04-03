function getPropertiesDepth(object){
    const returner={};
    for(let property in object){
        returner[property]=getDepth(object[property],1);

    }
    return returner;
}
const getDepth=function(object,currentLevel){
    if(typeof object==="object"){
        const depths=[];
        Object.keys(object).forEach(property=>{ 
        const depth=getDepth(object[property], currentLevel + 1);
        depths.push(depth);
        });
        return Math.max(...depths);
    }else{
        return currentLevel;
    }
}
module.exports={ getPropertiesDepth };