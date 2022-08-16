class Krepsys{
    constructor(){
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(obj){
        this.prikrauta += obj.svoris;
    }
}

export { Krepsys }