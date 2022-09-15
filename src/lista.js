let tomb=[];

export function hozzaad(a){

    if(a>=0){
        tomb.push(a);
    }else{
        console.log("Hiba");
    }

}

export function atlag(){
    let osszeg=0;

    for (const item of tomb) {
        osszeg+=item;
    }

    let atlag=osszeg/tomb.length;

    return atlag;
}



