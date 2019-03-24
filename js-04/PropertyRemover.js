class PropertyRemover {
    constructor() {
        this.propertyToBeRemoved = [];
    }
    addPropertyToBeRemoved(eini) {
        this.propertyToBeRemoved.push(...eini)
    }
    process(eini) {
        //        console.log(this.propertyToBeRemoved);
        //        console.log(eini[this.propertyToBeRemoved]);
        
        for (let i = 0; i < this.propertyToBeRemoved.length; i++) {
            delete eini[this.propertyToBeRemoved[i]];
        }
        return eini;
    }
}

 module.exports = {PropertyRemover}