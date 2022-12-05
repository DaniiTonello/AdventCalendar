//funcion para crear regalo
const buttonAdd = document.getElementById('buttonAdd');
const input = document.getElementById('input');
inputValue = input.value;

//agregar presente a la lista
// const container_list = document.querySelector('list');

// const element = document.createElement('div');
// element.classList.add('element');
    
// const text = document.createElement('p');
// text.innerHTML = inputValue;
    
// const buttonDelete = document.createElement('button');
// buttonDelete.setAttribute('id', 'delete');
// buttonDelete.classList.add('buttonDelete');
// element.appendChild(text);
// element.appendChild(buttonDelete);

// container_list.appendChild(element);
    

function addElement(inputValue){
    const container_list = document.querySelector('list');

    const element = document.createElement('div');
    element.classList.add('element');

    const text = document.createElement('p');
    text.innerHTML = inputValue;

    const buttonDelete = document.createElement('button');
    buttonDelete.setAttribute('id', 'delete');
    buttonDelete.classList.add('buttonDelete');

    element.appendChild(text);
    element.appendChild(buttonDelete);
    container_list.appendChild(element);
}

buttonAdd.onclick = addElement(inputValue);

// function addPresent(){
    
//     let element = document.createElement('div');
//     element.classList.add('element');
    
//     let texto = document.createElement('p');
    
//     let buttonDelete = document.createElement('button');
//     buttonDelete.setAttribute('id', 'delete');
//     buttonDelete.classList.add('buttonDelete');
    
//     element.appendChild(texto);
//     element.appendChild(buttonDelete);

//     if(input !== ''){
//         element.innerHTML = texto;
//         element.innerHTML = buttonDelete;
//     }
// }