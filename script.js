
const Account = require('./Account.js');
const CommandLine = require('./CommandLine');

async function main(){
    
    try{
    const accountName = await CommandLine.ask(
        "which account would you like to access"
    )
    let account = await Account.find(accountName); 
    if(account == null) account = await promptCreateAccount(accountName);
    if(account != null) await promptAsk(account)
    } catch(e){
        CommandLine.print("ERROR: Please try again")
    }
};

async function promptCreateAccount(accountName){
    const response = await CommandLine.ask("That account does not exist. Would you like to create it (yes/no)");
    if(response === 'yes'){
        return await Account.create(accountName);
    };
};

async function promptAsk(account){
    const response = await CommandLine.ask(
        "What would you like to do? (view/desposit/withdraw)"
    );
    if(response === 'deposit') {
        const amount =  parseFloat( await CommandLine.ask("How much would?"))
        await account.deposit(amount)
        CommandLine.print(`Your balance is ${account.balance}`)
       
    }
    if(response === 'withdraw') {
        const amount =  parseFloat( await CommandLine.ask("How much?"))
        try{
            await account.withdraw(amount)
            CommandLine.print(`Your balance is ${account.balance}`)
        } catch(e){
            CommandLine.print("insufficient funds")
        }
    }
};
main();




