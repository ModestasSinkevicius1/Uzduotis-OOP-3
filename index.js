import { Grybas } from "./Grybas.js";
import { Kibiras1 } from "./Kibiras1.js";
import { Krepsys } from "./Krepsys.js";
import { Pinigine } from "./Pinigine.js";
import { PirkiniuKrepselis } from "./PirkiniuKrepselis.js";
import { Stikline } from "./Stikline.js";
import { Troleibusas } from "./Troleibusas.js";
import { rand } from "./utilities.js";

//Task 1

console.log('Task 1:');
const kib = new Kibiras1();

console.log('Pradžia: ', kib);

kib.prideti1Akmeni();

kib.pridetiDaugAkmenu(10);

console.log('Pabaiga: ', kib);

//Task 2

console.log('Task 2:');
const pin = new Pinigine();

pin.ideti(1);
pin.ideti(1);
pin.ideti(1);

pin.ideti(20);

console.log(pin.skaiciuoti());

//Task 3

console.log('Task 3:');
const tro = new Troleibusas();

tro.ilipa(20);
tro.islipa(21);

//Expected: 20
console.log(tro.vaziuoja());

//Task 4

console.log('Task 4:');
const tro2 = new Troleibusas();

tro.islipa(4);

console.log('Troleibuse 1 yra: ', tro.keleiviuSkaiciusVisuoseTroleibusuose());

Troleibusas.bendrasKeleiviuSkaicius(7);

console.log('Bendras troleibuse 1 yra: ', tro.keleiviuSkaiciusVisuoseTroleibusuose());
console.log('Bendras troleibuse 2 yra: ', tro2.keleiviuSkaiciusVisuoseTroleibusuose());

Troleibusas.bendrasKeleiviuSkaicius(7);
console.log('Bendras troleibuse 2 yra: ', tro2.keleiviuSkaiciusVisuoseTroleibusuose());

//Task 5

console.log('Task 5:');

const pk = new PirkiniuKrepselis();

pk.idetiSureli(3);
pk.idetiSureli(3);

pk.idetiDuonos(1);

pk.idetiPieno(2);

console.log(pk.krepselioTurinys());

//Task 6

console.log('Task 6:');

pin.ideti(2);
pin.ideti(4);

console.log('Monetos:', pin.monetos());
console.log('Banknotai:', pin.banknotai());

//Task 7

console.log('Task 7:');

console.log('Bendras akmenu kiekis:', Kibiras1.akmenuSkaiciusVisuoseKibiruose());

//Task 8

console.log('Task 8:');

const sti = new Stikline(200);
const sti2 = new Stikline(150);
const sti3 = new Stikline(100);

sti.ipilti(130);
console.log(sti.stiklinejeYra());

sti2.ipilti(sti.ispilti());
console.log(sti2.stiklinejeYra());

sti3.ipilti(sti2.ispilti());
console.log(sti3.stiklinejeYra());

//Task 9

console.log('Task 9:');

const krep = new Krepsys();

let size = krep.dydis;
let amount = krep.prikrauta;
let n = 0;
let blogi = 0;

while(size>amount){
    const gry = new Grybas(rand(0, 1), rand(0, 1), rand(5, 45));
    if(!gry.sukirmijes && gry.valgomas){
        krep.deti(gry);
    }
    else{
        blogi++;
    }
    amount = krep.prikrauta;
    n++;
}

console.log('Surinktas:',krep, 'ir rasta:', n - blogi,'(geri) ir', blogi, '(blogi)');
