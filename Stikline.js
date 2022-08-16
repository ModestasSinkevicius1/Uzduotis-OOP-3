class Stikline{
    constructor(turis){
        this.turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis){
        const min = 0;
        const max = this.turis;
        const num = kiekis;

        const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
        
        this.kiekis = clamp(kiekis, min, max);
    }

    ispilti(){
        return this.kiekis;
    }
}

export { Stikline }