// string = '' 
// let buttons = document.querySelectorAll('.btn');

// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string)
//             document.querySelector('.screen').value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = ''
//             document.querySelector('.screen').value = string;

//         }
//         else{
//             string+=e.target.innerHTML;
//             document.querySelector('.screen').value = string;
//         }
//     })
// })


let string = '';
let buttons = document.querySelectorAll('.btn'); 

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (event)=>{
        if(event.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.screen').value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            string = '';
            document.querySelector('.screen').value = string;
        }
        else{
            string+=event.target.innerHTML;
            document.querySelector('.screen').value = string;
        }
    })
})
