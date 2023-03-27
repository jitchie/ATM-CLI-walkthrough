/**
 * we can seperate repedative tasks like asking questions into its own module to seperate it
 * from the script.js file... this is an object! created using the node RL module that makes out main file so much
 * cleaner to work with
 */
 const readLine = require('readline');

 module.exports = class CommandLine {
    static ask (question){
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
        return new Promise((resolve, reject)=>{
            rl.question(`${question} `, answer =>{
                resolve(answer)
                rl.close()
            })
        })
    }

    static print(text){
        console.log(text)
    }
 }
