#! /usr/bin/env node
// Importing all the packages that will used in the project
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";
import ListPrompt from "inquirer/lib/prompts/list.js";
import { promises } from "dns";
async function welcome() {
    let glitch = chalk.blueBright(chalkAnimation.neon('Digital Calculator using Typescript '));
    await new Promise<void>(resolve => {
        setTimeout(() => {
            console.log('\n' + glitch);
            resolve(); // Corrected: Added parentheses to call resolve()
        }, 4000);
    });
}
async function start (){
    await welcome();
    console.log(chalk.blue(` ____________________________________
    |                                                
    | ______________________________________________  |
    ||    __    __    __    __    __    __    __     ||
    || 1 |__|  2 |  3 |  + |  |  sin |  cos |  tan | ||
    ||---|---|---|---|---|---|---|---|---|---|---|---||
    || 4 | 5 | 6 |  - |  |  sinh |  cosh |  tanh |   ||
    ||---|---|---|---|---|---|---|---|---|---|---|---||
    || 7 | 8 | 9 |  * |  |  log |  ln |  π |         ||
    ||---|---|---|---|---|---|---|---|---|---|---|---||
    || 0 | . | = |  / |  |  x^2 |  √x |  e |         ||
    ||___|___|___|___|___|___|___|___|___|___|___|___||
    |______________ Developed by ABD__________________|
                              
    `))
    3
}
await start();

async function Op(){
  



 let userIn =  await inquirer.prompt([{
    name : 'operation' ,
    type : "list",
    choices :['Addition' , 'Subtraction' , 'Multiplication' ,'Divison'],
    
    message : 'Select the operation you want to perform'
    


} , {
    name : 'num1',
    type : 'number',
    message : 'Enter first Number',
    validate: function (number) {
        const isValid = !isNaN(parseFloat(number)) && isFinite(number);
        return isValid ? true : 'Please enter a valid number';
    }

},
   {
        name : 'num2',
        type : 'number',
        message : 'Enter second Number',
        validate: function (number) {
            const isValid = !isNaN(parseFloat(number)) && isFinite(number);
            return isValid ? true : 'Please enter a valid number';
    
    
        }   

}
])
let number1 = userIn.num1;
let number2 = userIn.num2;



let solution;
if(userIn.operation == 'Addition'){
    solution = number1 + number2;
    console.log(`${number1} + ${number2} = ${solution}`)
    

}else if(userIn.operation == 'Subtraction'){
    solution = number1 - number2;
    console.log(chalk.green(`${number1} - ${number2} = ${solution}`, ))
    


}else if(userIn.operation == 'Multiplication'){
    solution = number1 * number2;
    console.log(`${number1} x ${number2} = ${solution}`)
}else if(userIn.operation == 'Divison'){
    solution = number1 / number2;
    console.log(`${number1} / ${number2} = ${solution}`)
}
    
}
let Ans;
do {
await Op();
let repeat = await inquirer.prompt([{
    name : 'rep',
    type : 'string',
    message : ' if you want to continue your calculation then press y , otherwise Press any key'
    
}])
  Ans = repeat.rep;

} while (Ans === 'y' );

    









