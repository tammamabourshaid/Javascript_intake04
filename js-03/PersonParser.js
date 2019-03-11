class PersonParser{
    Parse(cvs){
        return cvs
        .split("\n")
        .filter(e => e.trim())
        .map(e=> e.split(","))
        .map(firstname,lastname,gender){
            firstname,
            lastname,
            gender,
        }
    }
    
}