// Class with properties of animals

class AnimalProperties {    // Class of animals without backbone
    constructor(){
    // Applying abstraction
        if(this.constructor === AnimalProperties){
            throw new Error("Class can't be called or instantiated")
        }
    }

    // Applying encapsulation
    #backbone(){
        console.log("I  have a backbone")
    }
    backboneCheck(){
        this.#backbone()
    }
    #coldBlooded(){
        console.log("I am cold blooded")
    }
    coldBloodedCheck(){
        this.#coldBlooded()
    }
}

// The types of animals inherting 




class Aves extends AnimalProperties{    // Applied inheritance
    // Applying polymorphism
    coldBlooded(){
        console.log("I am warm blooded")
    }
}

class Fish extends AnimalProperties{
    // No data needs to be changed
}

class Amphibia extends AnimalProperties{
    // No data needs to be changed
}

class Reptiles extends AnimalProperties{
    // No data needs to be changed
}

class Anthropoda extends AnimalProperties{
    backbone(){
        console.log("I don't have a backbone")
    }
}

class Mammals extends AnimalProperties{
    coldBlooded(){
        console.log("I am warm blooded")
    }
}