class PirkiniuKrepselis{
    constructor(){
        this.turinys = new Map();
    }

    idetiSureli(kiekis){
        this.idetiPreke('surelis', kiekis);
    }

    idetiPieno(kiekis){
        this.idetiPreke('pienas', kiekis);
    }

    idetiDuonos(kiekis){
        this.idetiPreke('duona', kiekis);
    }

    idetiPreke(preke, kiekis){
        const key = preke;
        if(this.turinys.has(key))           
            this.turinys.set(key, this.turinys.get(key)+kiekis);
        else
            this.turinys.set(key, kiekis);
    }

    krepselioTurinys(){
        return this.turinys;
    }
}

export { PirkiniuKrepselis }