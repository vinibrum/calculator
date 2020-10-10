var elements = document.querySelectorAll('.num-bttn');

elements.forEach(function(el){
    el.addEventListener('click', function(){
        let display = document.getElementById('display');
        if(display.innerText.length == 0 && el.innerText == '0')    return;
        if(display.innerText == '0')    display.innerText = '';
        if(display.innerText.length < 15){
            if(display.innerText.indexOf(',') == -1){
                let strAux = display.innerText.replaceAll('.','');
                let newDisplayInfo = strAux + el.innerText;
                display.innerText = addThousandSeparator(newDisplayInfo);
            }else
                display.innerText += el.innerText;
        }
    });
});

var el = document.getElementById('backspace-bttn');
el.addEventListener('click', function(){
    let display = document.getElementById('display');
    if(display.innerText.indexOf(',') == -1){
        let strAux = display.innerText.replaceAll('.', '');
        let newDisplayInfo = strAux.length == 2 && isNaN(strAux.charAt(0)) ? '' : strAux.substring(0, strAux.length - 1);
        let valAux = Number(newDisplayInfo);
        let resp = valAux <= 1000 || valAux >= 1000 ? addThousandSeparator(newDisplayInfo) : newDisplayInfo;
        
        if(resp.length == 0)    display.innerText = '0';
        else                    display.innerText = resp;
    }else
        display.innerText = display.innerText.substring(0, display.innerText.length - 1);
    
});

el = document.getElementById('negate-bttn');
el.addEventListener('click', function(){
    let display = document.getElementById('display');
    let str = display.innerText;
    let value = Number(str.replaceAll('.',''));
    value = negate(value);
    display.innerText = value <= 1000 || value >= 1000 ? addThousandSeparator(value.toString()) : value.toString();
});

el = document.getElementById('decimal-sep-bttn');
el.addEventListener('click', function(){
    let display = document.getElementById('display');
    if(display.innerText.indexOf(',') == - 1)   display.innerText += ',';
});

function negate(value){
    return -1 * value;
}

function addThousandSeparator(str){
    let resp = '';
    let cont = 0;
    let aux = '';
    for(let i = str.length - 1; i >= 0; i--){
        if(!isNaN(str.charAt(i))){
            if(cont == 3){
                aux = '.';
                aux += resp;
                resp = aux;
                cont = 0;
            }
            cont++;
        }
        aux = str.charAt(i);
        aux += resp;
        resp = aux;
    }
    return resp;
}