class Stikline{
    constructor(turis){
        this.turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis){
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
    }

    ispilti(){
        const temp = this.kiekis;
        this.kiekis = 0;
        return temp;
    }

    stiklinejeYra(){
        return `Skysčio yra ${this.kiekis} ir tūrio ${this.turis}`;
    }
}

export { Stikline }