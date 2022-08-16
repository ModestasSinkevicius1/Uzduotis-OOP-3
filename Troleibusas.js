class Troleibusas{
    static visiKeleiviai = 0;

    constructor(){
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius){
        if(keleiviuSkaicius > 0){
            this.keleiviuSkaicius += keleiviuSkaicius;
            Troleibusas.visiKeleiviai += keleiviuSkaicius;
        }
    }

    islipa(keleiviuSkaicius){
        if(this.keleiviuSkaicius - keleiviuSkaicius > 0){
            this.keleiviuSkaicius -= keleiviuSkaicius;
            Troleibusas.visiKeleiviai -= keleiviuSkaicius;
        }
    }

    vaziuoja(){
        return this.keleiviuSkaicius;
    }

    static bendrasKeleiviuSkaicius(keleiviuSkaicius){
        Troleibusas.visiKeleiviai += keleiviuSkaicius;
    }

    keleiviuSkaiciusVisuoseTroleibusuose(){
        return Troleibusas.visiKeleiviai;
    }
}

export { Troleibusas }