const buyChocolate = () => {
    return {type: "Milk Chocolate"}
}

//console.log(buyChocolate)


const addFlavoring = (newCandy) => {
    newCandy.flavor = "Mint"
    return newCandy
}


const makeBarkMixture = (newCandy) => {
    if (newCandy.flavor === "Mint") {
        return newCandy.mixed = true
    } else {
        return newCandy.mixed = false
    }
}

const bakeCandy = (newCandy) => {
    if (newCandy.mixed) {
        return newCandy.baked = true
    } else {
        return newCandy.baked = false
    }
}

const breakBark = (newCandy) => {
    if (newCandy.baked) {
        return [ "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", 
        "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", 
        "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece" ]
        return newCandy
    } 
}


let choco = buyChocolate();
    
    
    addFlavoring(choco)
    makeBarkMixture(choco)
    bakeCandy(choco)
    breakBark(choco)
    

    console.log(choco)



