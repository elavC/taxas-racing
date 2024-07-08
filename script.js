// CONDICIONAL PARA SELECIONAR A BANDEIRA DO CARTÃO

const bandeira = document.getElementById('bandeiras');
const main = document.getElementById('main');
const other = document.getElementById('other');
const visaMasterBtn = document.getElementById('visa-master');
const outrasBandeiras = document.getElementById('outras-bandeiras');

function visaMaster () {
    bandeira.style.display = "none"
    main.style.display = "flex"
    console.log("clicou")
}

function otherBandeira () {
    bandeira.style.display = "none"
    other.style.display = "flex"
    console.log("clicou")
}

visaMasterBtn.addEventListener('click', visaMaster);
outrasBandeiras.addEventListener('click', otherBandeira);

// CONDICIONAL PARA SELECIONAR A BANDEIRA DO CARTÃO


// CALCULO PARA TAXAS DE OUTRAS BANDEIRAS

let receberOther = document.getElementById('receberOther');
const sendBtnOther = document.getElementById('sendBtnOther');

const OtherN0 = document.getElementById('other-n0');
const OtherN1 = document.getElementById('other-n1');
const OtherN2 = document.getElementById('other-n2')
const OtherN3 = document.getElementById('other-n3')
const OtherN4 = document.getElementById('other-n4')
const OtherN5 = document.getElementById('other-n5')
const OtherN6 = document.getElementById('other-n6')
const OtherN7 = document.getElementById('other-n7')
const OtherN8 = document.getElementById('other-n8')
const OtherN9 = document.getElementById('other-n9')
const OtherN10 = document.getElementById('other-n10')
const OtherN11 = document.getElementById('other-n11')
const OtherN12 = document.getElementById('other-n12')
const OtherN13 = document.getElementById('other-n13')
const OtherN14 = document.getElementById('other-n14')
const OtherN15 = document.getElementById('other-n15')
const OtherN16 = document.getElementById('other-n16')
const OtherN17 = document.getElementById('other-n17')
const OtherN18 = document.getElementById('other-n18')

const OtherP0 = document.getElementById('other-p0');
const OtherP1 = document.getElementById('other-p1');
const OtherP2 = document.getElementById('other-p2')
const OtherP3 = document.getElementById('other-p3')
const OtherP4 = document.getElementById('other-p4')
const OtherP5 = document.getElementById('other-p5')
const OtherP6 = document.getElementById('other-p6')
const OtherP7 = document.getElementById('other-p7')
const OtherP8 = document.getElementById('other-p8')
const OtherP9 = document.getElementById('other-p9')
const OtherP10 = document.getElementById('other-p10')
const OtherP11 = document.getElementById('other-p11')
const OtherP12 = document.getElementById('other-p12')
const OtherP13 = document.getElementById('other-p13')
const OtherP14 = document.getElementById('other-p14')
const OtherP15 = document.getElementById('other-p15')
const OtherP16 = document.getElementById('other-p16')
const OtherP17 = document.getElementById('other-p17')
const OtherP18 = document.getElementById('other-p18')


function calcularOther () {
    let receberValorOther = parseFloat(receberOther.value);

    let Othervalue0 = receberValorOther / 0.9984
    let Othervalue1 = receberValorOther / 0.9601
    let Othervalue2 = receberValorOther /0.9470
    let Othervalue3 = receberValorOther / 0.9401
    let Othervalue4 = receberValorOther / 0.9331
    let Othervalue5 = receberValorOther / 0.9265
    let Othervalue6 = receberValorOther / 0.9198
    let Othervalue7 = receberValorOther / 0.9053
    let Othervalue8 = receberValorOther / 0.8987
    let Othervalue9 = receberValorOther / 0.8922
    let Othervalue10 = receberValorOther / 0.8857
    let Othervalue11 = receberValorOther / 0.8794
    let Othervalue12 = receberValorOther / 0.8730
    let Othervalue13 = receberValorOther / 0.8668
    let Othervalue14 = receberValorOther / 0.8606
    let Othervalue15 = receberValorOther / 0.8544
    let Othervalue16 = receberValorOther / 0.8483
    let Othervalue17 = receberValorOther / 0.8423
    let Othervalue18 = receberValorOther / 0.8363

    let Otherparcela0 = "Não se aplica";
    let Otherparcela1 = Othervalue1 / 1;
    let Otherparcela2 = Othervalue2 / 2;
    let Otherparcela3 = Othervalue3 / 3;
    let Otherparcela4 = Othervalue4 / 4;
    let Otherparcela5 = Othervalue5 / 5;
    let Otherparcela6 = Othervalue6 / 6;
    let Otherparcela7 = Othervalue7 / 7;
    let Otherparcela8 = Othervalue8 / 8;
    let Otherparcela9 = Othervalue9 / 9;
    let Otherparcela10 = Othervalue10 / 10;
    let Otherparcela11 = Othervalue11 / 11;
    let Otherparcela12 = Othervalue12 / 12;
    let Otherparcela13 = Othervalue13 / 13;
    let Otherparcela14 = Othervalue14 / 14;
    let Otherparcela15 = Othervalue15 / 15;
    let Otherparcela16 = Othervalue16 / 16;
    let Otherparcela17 = Othervalue17 / 17;
    let Otherparcela18 = Othervalue18 / 18;



    OtherN0.innerHTML = Othervalue0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN1.innerHTML = Othervalue1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN2.innerHTML = Othervalue2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN3.innerHTML = Othervalue3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN4.innerHTML = Othervalue4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN5.innerHTML = Othervalue5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN6.innerHTML = Othervalue6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN7.innerHTML = Othervalue7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN8.innerHTML = Othervalue8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN9.innerHTML = Othervalue9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN10.innerHTML = Othervalue10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN11.innerHTML = Othervalue11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN12.innerHTML = Othervalue12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN13.innerHTML = Othervalue13.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN14.innerHTML = Othervalue14.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN15.innerHTML = Othervalue15.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN16.innerHTML = Othervalue16.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN17.innerHTML = Othervalue17.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN18.innerHTML = Othervalue18.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    OtherP0.innerHTML = Otherparcela0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP1.innerHTML = Otherparcela1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP2.innerHTML = Otherparcela2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP3.innerHTML = Otherparcela3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP4.innerHTML = Otherparcela4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP5.innerHTML = Otherparcela5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP6.innerHTML = Otherparcela6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP7.innerHTML = Otherparcela7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP8.innerHTML = Otherparcela8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP9.innerHTML = Otherparcela9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP10.innerHTML = Otherparcela10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP11.innerHTML = Otherparcela11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP12.innerHTML = Otherparcela12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP13.innerHTML = Otherparcela13.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP14.innerHTML = Otherparcela14.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP15.innerHTML = Otherparcela15.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP16.innerHTML = Otherparcela16.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP17.innerHTML = Otherparcela17.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP18.innerHTML = Otherparcela18.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

sendBtnOther.addEventListener('click', calcularOther)

// CALCULO PARA TAXAS DE OUTRAS BANDEIRAS






// CALCULO PARA TAXAS DE VISA E MASTER

let receber = document.getElementById('receber');
const sendBtn = document.getElementById('sendBtn');


const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const n10 = document.getElementById('n10');
const n11 = document.getElementById('n11');
const n12 = document.getElementById('n12');
const n13 = document.getElementById('n13');
const n14 = document.getElementById('n14');
const n15 = document.getElementById('n15');
const n16 = document.getElementById('n16');
const n17 = document.getElementById('n17');
const n18 = document.getElementById('n18');

const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');
const p11 = document.getElementById('p11');
const p12 = document.getElementById('p12');
const p13 = document.getElementById('p13');
const p14 = document.getElementById('p14');
const p15 = document.getElementById('p15');
const p16 = document.getElementById('p16');
const p17 = document.getElementById('p17');
const p18 = document.getElementById('p18');


function calcular () {
    let receberValor = parseFloat(receber.value);

    let value0 = receberValor / 0.9901
    let value1 = receberValor / 0.9701
    let value2 = receberValor / 0.9591
    let value3 = receberValor / 0.9522
    let value4 = receberValor / 0.9453
    let value5 = receberValor / 0.9386
    let value6 = receberValor / 0.9319
    let value7 = receberValor / 0.9233
    let value8 = receberValor / 0.9167
    let value9 = receberValor / 0.9102
    let value10 = receberValor / 0.9037;
    let value11 = receberValor / 0.8974
    let value12 = receberValor / 0.8910
    let value13 = receberValor / 0.8768
    let value14 = receberValor / 0.8706
    let value15 = receberValor / 0.8444
    let value16 = receberValor / 0.8583
    let value17 = receberValor / 0.8523
    let value18 = receberValor / 0.8463

    let parcela0 = "Não se aplica";
    let parcela1 = value1 / 1;
    let parcela2 = value2 / 2;
    let parcela3 = value3 / 3;
    let parcela4 = value4 / 4;
    let parcela5 = value5 / 5;
    let parcela6 = value6 / 6;
    let parcela7 = value7 / 7;
    let parcela8 = value8 / 8;
    let parcela9 = value9 / 9;
    let parcela10 = value10 / 10;
    let parcela11 = value11 / 11;
    let parcela12 = value12 / 12;
    let parcela13 = value13 / 13;
    let parcela14 = value14 / 14;
    let parcela15 = value15 / 15;
    let parcela16 = value16 / 16;
    let parcela17 = value17 / 17;
    let parcela18 = value18 / 18;


    n0.innerHTML = value0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n1.innerHTML = value1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n2.innerHTML = value2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n3.innerHTML = value3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n4.innerHTML = value4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n5.innerHTML = value5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n6.innerHTML = value6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n7.innerHTML = value7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n8.innerHTML = value8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n9.innerHTML = value9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n10.innerHTML = value10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n11.innerHTML = value11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n12.innerHTML = value12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n13.innerHTML = value13.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n14.innerHTML = value14.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n15.innerHTML = value15.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n16.innerHTML = value16.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n17.innerHTML = value17.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n18.innerHTML = value18.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    p0.innerHTML = parcela0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p1.innerHTML = parcela1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p2.innerHTML = parcela2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p3.innerHTML = parcela3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p4.innerHTML = parcela4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p5.innerHTML = parcela5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p6.innerHTML = parcela6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p7.innerHTML = parcela7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p8.innerHTML = parcela8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p9.innerHTML = parcela9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p10.innerHTML = parcela10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p11.innerHTML = parcela11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p12.innerHTML = parcela12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p13.innerHTML = parcela13.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p14.innerHTML = parcela14.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p15.innerHTML = parcela15.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p16.innerHTML = parcela16.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p17.innerHTML = parcela17.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p18.innerHTML = parcela18.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

sendBtn.addEventListener('click', calcular)

// CALCULO PARA TAXAS DE VISA E MASTER
