function getFrequencyTable(numbers) {
    const frequencyTable={};
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (frequencyTable[number]) {
            frequencyTable[number]++; 
        }
        else{
            frequencyTable[number] = 1;
        }

        
    }
    return frequencyTable
    
}
module.exports={getFrequencyTable};
