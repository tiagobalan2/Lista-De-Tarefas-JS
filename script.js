let contador = 0;

let input = document.getElementById("inputTarefa");

let btnAdd = document.getElementById("btn-add");
 //agora input é o input tarefa e btnAdd é o btn-add

 let main = document.getElementById("areaLista")

function addTarefa() {
    //pegar o valor digitado no input && 
    let valorInput = input.value;

    //se nao for vaziom nem nulo, nem indefinido
    if ((valorInput !== "") && (valorInput !==null) && (valorInput !==undefined)){
        
        ++contador;

        let novoItem = `<div id="${contador}" class="item">

        <div onclick="marcarTarefa(${contador})" class="item-icone">
        <img id="icone_${contador}" class="circle-outline" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAyNJREFUWEfdmFmIjmEUx3+D7NsFylJkS0jiRlEuJIkijJrsW0mS7BHZIluS4oIoMYaxJUku5IobkUJZssuWJCJbo/903unxeNeZ963Jqen7+p5zzvN/znOW/zMl1DMpqWd4+G8ADQPKgH4REb4DHAOuZ72BLBFqCswHFgNdU270GNgNHAC+p7FJC2g2sA1ol8ZpiM47O8jxJPs0gHYAyzxHH4FTwDlAUXhp612AnsB4YCLQ1rNbC2yOAxUHSGuHgRmOgxfAFuAg8CvhtE2AecAqoLOju8eiFWoeB2i/5UxgWAlMBX4khd1bbw6cAMY6v28A1of5iQK0BNjlGGwHVmYE4qprn33eAacBR32fYYDaAK+AFqZ8GphUBzCBaQPgIjDKfngNdPMjHgZI4VxnRkrYvmlLNgXo1sBDoIPpLgCUGjXiA2oMvHWqYwJwNsVGWVTUywIQOnCPOEBjgAumcC+mE2cB4Os2AnRdQU8bCNwOlPwIHQJm2aL6hfpGEeLus8lJkX+Gq5AOMARDgWtFoAFKgZPm+xIwOipCqq5OtqgKeFYQIF3TLfN9F+gfBegr0MwW1dC+FQRII0XjR/LJHTF+Dn0GWppiK+BLQYC0h/aS6FPtoFp8QA+AXramz0cFAeoN3Dff+uwTBegqMNwWRwBXCgI0ErhsvrWH9gqNkEs19H1FQYBE2kT0JFuB1VGAhji0Uy1eoS1Cntgck+/BwM0oQMopka2g9NUvRMTyFE35I+ZQwLq7zsOGq9ihrkuS93BVK1GhdDT/icNVeupDz51ZI2I2OYcQ6fDnHaL2xh4LfxG+KII2114KAY485tpeYKFzsClAuX/QOAorlrjcMdC9C+jPjNHS86kCGOfYRZL9pFeHyPwcx9FTYKMl5e8EYFEkXyUvihwqSYBkpOta41l/MOKmChRIVWZDe12ow4vyKiI1I8HsFfGdcQdJA0j2M63yavtQFItYBJxJuu60gORHuaB31tIMT2nNKeWi8i/pHVeNNQug4HCyEXmbDgwC2ttfFfDe6Kn+yaAKupEUkSxVltVXLvq1iVAuG9elygoF4Dv/A56zhyXSFkVuAAAAAElFTkSuQmCC"/>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>

        <div class="item-botao">

            <button onclick="deletar(${contador})" class="delete">Deletar <img width="30px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAQJJREFUWEftmEkKwkAQRV9AD+N0Ic+gK92ra3GlZxC8juNh3EgkgZChq6oTQaV6l6Tq9+dVekz4spZ8mR9+3tAUWAAToC/QfQIXYAcctZWwEBoBV61wKW4M3DS5FkMzYK8RrYmZAwdNrsXQGlhlohsgfQ41a/xbyw1JZasjVEQt5bf9Xim9GyohVREq5kSNlJo6qnWkUaYW6moK+BtDTeSs7ytgYwlZO1aX3g0BwXXQCTmhhj2Tj7J892idn3xilMh1Rsi6U/z4T+2GcgJtDodNFIOHRmktGwB3a32E+CHwaIqRDKV56QXDMrtg6EWaSy8ezsAWOIU0NIYiPcSluSGJ2wteAJolADDSFgAAAABJRU5ErkJggg=="/></button>
        </div>
    </div>`;
    
    //adicionar novo item no main
    main.innerHTML += novoItem; 

    //zerar os campinhos
    input.value = "";
    input.focus();

    

    }
}


//REVER FUNÇÃO - TEM QUE SER CORRIGIDA
input.addEventListener("keyup", function(event){
    //se teclou enter que é o 13
    if(event.key === 'Enter'){
        event.preventDefault();
        btnAdd.click();

    }
})


function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe == "item"){
        item.classList.add('clicado')

        var icone = document.getElementById("icone_" +id);
        icone.classList.remove('circle-outline');
        
        item.parentNode.appendChild(item);


    } else{
        item.classList.remove('clicado')

        var icone = document.getElementById("icone_" +id);
        icone.classList.remove('circle-outline');
        
    }
}


//REVER CÓDIGO AMANHÃ - DIA 08 DO 12











