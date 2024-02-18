function  getElementById(value){
    const element=document.getElementById(value);
    return element;
}

function getValue(element){
    const text=element.innerText;
    const number=parseInt(text);
    return number;
}


function createP(value){
    let p=document.createElement('p');
    p.innerText=value;
    return p;
}

