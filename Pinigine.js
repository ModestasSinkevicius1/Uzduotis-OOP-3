class Pinigine{
    constructor(){
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis){
        if(kiekis > 2){
            this.popieriniaiPinigai += kiekis;
        }
        else{
            this.metaliniaiPinigai += kiekis;
        }
    }

    skaiciuoti(){
        return this.popieriniaiPinigai + this.metaliniaiPinigai;
    }

    monetos(){
        return this.metaliniaiPinigai;
    }

    banknotai(){
        return this.popieriniaiPinigai;
    }
}

export { Pinigine }