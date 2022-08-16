class Kibiras1{
    static visiAkmenys = 0;

    constructor(){
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni(){
        this.akmenuKiekis++;
        Kibiras1.bendrasAkmenuSkaicius(1);
    }

    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis;
        Kibiras1.bendrasAkmenuSkaicius(kiekis);
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius){
        Kibiras1.visiAkmenys += akmenuSkaicius;
    }

    static akmenuSkaiciusVisuoseKibiruose(){
        return Kibiras1.visiAkmenys;
    }
}

export { Kibiras1 }