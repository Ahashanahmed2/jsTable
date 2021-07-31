//button click
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')


//input 
let bank = document.querySelector('#bank')
let hand = document.querySelector('#hand')
let market = document.querySelector('#market')
//output table

let ba = Number(bank)

const tbody = document.querySelector('#tbody')

//read output
const bank1 = document.querySelector('#bank1')
const hand1= document.querySelector('#hand1')
const market1 = document.querySelector('#market1')


btn1.addEventListener('click',()=>{
tbody.className = 'text-center'



tbody.innerHTML += `
<tr>
<th scope="row">1</th>
<td>
${bank.value }
</td>
<td>
-
</td>
<td>
-
</td>
</tr>
`
 
bank1.value += bank.value;
console.log(typeof(bank.value)); //String
bank.value = ''
})
btn2.addEventListener('click',()=>{
    tbody.className = 'text-center'
    tbody.innerHTML += `
    <tr>
    <th scope="row">1</th>
    <td>
    -
    </td>
    <td>
    ${hand.value +2}
    </td>
    <td>
    -
    </td>
    </tr>
    `
    let aa = hand1.value += hand.value;
    console.log(typeof(aa)); //String
     let bb = bank1.value -=hand.value;
  console.log(typeof(bb)); //Number
      hand.value = '';
 
    })

    
      

    btn3.addEventListener('click',()=>{

      
        tbody.className = 'text-center'
        tbody.innerHTML += `
        <tr>
        <th scope="row">1</th>
        <td>
        -
        </td>
        <td>
       -
        </td>
        <td>
        ${market.value}
        </td>
        </tr>
        `
      
        market.value = '';
        
        
        
        })

    
  
      