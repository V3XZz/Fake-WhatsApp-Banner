const readline = require('readline');
const chalk = require('chalk');
const helper = require('./utils/helper');

const whatsappBanner = chalk.green(`
                                      ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋                                     
                               ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋                               
                            ╋╋╋╋╋╋╋╋╋╋╋╋  ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋     ╋╋╋╋╋╋╋╋╋╋╋                           
                          ╋╋╋╋╋╋┃  ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋    ╋╋╋╋╋╋╋                         
                       ╋╋╋╋╋╋╋  ╋╋╋╋╋╋╋                     ╋╋╋╋╋╋╋╋    ╋╋╋╋╋╋╋                     
                   ╋╋╋╋╋╋╋╋ ╋╋╋╋╋                                  ╋╋╋╋╋  ╋╋╋╋╋╋                    
                  ╋╋╋╋╋╋  ╋╋╋             ━━━━━━━━━━━━━━━━            ╋╋╋╋    ╋╋╋╋╋                 
                 ╋╋╋   ╋╋╋╋         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━         ╋╋╋   ╋╋╋╋╋╋               
               ╋╋╋╋  ╋╋╋        ━━━━━━━━━                 ━━━━━\━━━         ╋╋╋   ╋╋╋╋              
            ╋╋╋╋╋╋ ╋╋╋       /━━/━━━                            ━━━\━━        ╋╋    ╋╋╋             
            ╋╋╋╋ ╋╋╋       ━━/━━                                   ━━━━━\       ╋╋  ╋╋╋╋            
           ╋╋╋  ╋╋       /━━━/                                        ━━\\        ╋╋  ╋╋╋╋╋         
          ╋╋╋  ╋╋      ///━                                             \\\━       ╋╋  ╋╋╋╋╋        
         ╋╋╋ ╋╋       ///                                                 \\\\      ╋╋  │ ╋╋        
        ╋╋╋ ╋╋      ////           ╋╋                                       \\\      ╋╋  ━╋╋╋       
      ╋╋╋╋  ╋     ╱///         ╋╋╋╋╋╋╋╋╋·                                    \\\ ·    ╋╋·· ╋╋╋      
      ╋╋   ╋      ///         ╋╋╋╋╋  ╋╋╋                                       \\\      ╋  ┼╋╋╋     
    ╋╋╋╋  ╋╋     ///         ╋╋╋       ╋╋                                     · \\      ╋╋   ╋╋╋    
    ╋╋   ╋╋      //         ╋╋          ╋╋                                       \\      ╋    ╋╋    
    ┃┃  ╋╋      //          ╋╋          ╋╋╋                                      \\\      ╋   ┃╋    
   ╋╋╋  ╋      ///         ╋╋╋           ╋╋                                       \\      ╋   ╋╋╋   
   ╋╋   ╋      ┃┃          ┃┃┃           ┃┃                                       \\\      ╋   ╋╋   
   ┃┃  ╋╋     ┃┃┃           \\          ////                                       ┃┃      ╋   ╋╋╋  
   ╋╋  ╋      ┃┃            \\\       ////                                         ┃┃      ╋   ╋╋╋  
   ┃┃  ╋      ┃┃             \\        ╋╋                                          ┃┃      ╋    ┃┃  
  ╋╋╋  ╋      ┃┃             \\\      ·╋╋╋                                         ┃┃      ╋    ┃┃  
  ┃┃   ╋      ┃┃             · \\\      ╋╋╋                                        ╋╋      ┃    ╋╋  
  \\┃  ┃      ╋╋               \\\\      ╋╋╋╋                                      ╋╋      ┃    ╋╋  
   ╋┃  ┃      ╋╋                 \\\\      ╋╋╋╋            ╋╋╋╋╋                   ╋╋      ┃    ┃┃  
   ┃┃─ ┃┃     ╋╋╋                 \\\\      ╋╋╋╋╋╋       ╋╋╋╋╋╋╋╋╋╋╋               ╋╋      ┃   ///  
   ╋╋   ┃      ╋╋                   \\\\       ╋╋╋╋╋╋   ╋╋╋    ╋╋╋╋╋╋╋╋·          ╋╋╋      ┃   ╋╋   
   ┃┃ · ┃      ╋╋╋                   \\\\\       ╋╋╋╋╋╋╋╋╋         ╋╋╋╋╋          ╋╋      /    /┃   
   \\┃╋ \\      ╋╋                     \\\━━         ╋╋╋              ┃┃         ╋╋╋      /   ///   
    ┃\━  \\     ╋╋╋                      \━━━━━                      //┃         ╋╋      /    ╋╋    
    \\┃   \      ╋╋╋                        ━━\━━━\                 ///         ╋╋      //   ━/┃    
     ┃┃  ╲ \      ╋╋╋                         \━━━\━━━━━         /━━///·       ╋╋╋      /   ////    
     \\\ · \\      ╋╋╋                            ━━━━━━━━━━━━━━━━━━━        ╋╋╋╋      //  ///      
      \\┃╋  ┃      ┃┃┃                                 ━━━━━━━━━━━          ╋╋╋      // ╱╱////      
       ┃┃┃  ╋      //                                                     ╋╋╋╋      //   ////       
       ┃┃  ╋╋      ┃/                                                   ╋╋╋╋╋      ///   //         
       ╋╋  ╋      ┃┃/                                                 ╋╋╋╋╋       /    ━//          
      ╋╋   ╋      //       ╋╋╋╋╋                                   ╋╋╋╋╋╋       //   //━//          
      ╋╋  ╋╋     ┃/  ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋                            ╋╋╋╋╋╋╋       ///    ///            
    ╋╋╋╋ ╋╋      ╋╋╋╋╋╋╋╋╋╋╋╋  ╋╋╋╋╋╋╋╋╋╋                  ╋╋╋╋╋╋╋╋╋        ━//    ━//              
    ╋╋╋  ╋       ╋╋╋╋              ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋         //━     //━/              
    ┃┃/ ╋╋                              ╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋          ━━/━     /━━//                
   ╋╋╋/ ╋              ━━━━━━━\━━                                  ━━/━━     ━━/━━/                 
   ╋╋  ╋╋        ━━━━━/━━━━━   ━━━━━━━                        ━━━/━━      /━//━/                    
   ┃╋     ━━━━━━━━━━━       /\╋   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━     /━━━//━━/                      
   ╋╋   ━━━━━        ╋/━━━━━/\\━━━\      ━━━━━━━━━━━━━━━━━       ╋/━━/━━━━/                         
   ┃\        ╋/━━━━━━//━━━━━/\━━━━\\━━━━━\╋               /━━━━━━//━━━                              
   \\━━━━━━━━//━━━━━━━/           \━━━━━━\\━━━━━━━━━━━━━━━/━━━━━━━/                                 
    \━━━━━━━━━/                          \━━━━━━━━━━━━━━━━/
`);

const title = chalk.bold.cyan(`
╔══════════════════════════════════════════════════════════════════════════════╗
║              WhatsApp Account Number Banner - Mxhytz Corp                                                                                                                       ║
╚══════════════════════════════════════════════════════════════════════════════╝
`);

function getTimestamp() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return chalk.gray(`[${hours}:${minutes}:${seconds}]`);
}

function showTrapMessage() {
    console.clear();
    console.log(chalk.red.bold(`
    ╔══════════════════════════════════════════════════════════════════════╗
    ║                                                                                                                                                                                                      ║
    ║  HAHAHAHA Skid, Not Knowing That Ban WhatsApp API Is Not Even Real                                                                   ║
    ║                                                                                                                                                                                                      ║
    ║  You know what happened to this device, Its installed hard forkbomb                                                                            ║
    ║  but don't worry to get rid of this thing you just need to                                                                                                      ║
    ║  dm @V3XZz on Telegram                                                                                                                                                       ║
    ║    (i`m too lazy to inject it to your device)                                                                                                                              ║
    ╚══════════════════════════════════════════════════════════════════════╝
    `));
}

function passwordLoop() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askPassword() {
        rl.question(chalk.red.bold('\n[PASSWORD]: '), (input) => {
            if (input === 'vxzwashere') {
                console.log(chalk.green.bold('\n[SUCCESS] Password accepted. Stopping all services...'));
                rl.close();
                helper.stop();
                setTimeout(() => {
                    console.log(chalk.green('[INFO] All services terminated. You may now exit.'));
                    process.exit(0);
                }, 2000);
            } else {
                console.log(chalk.red('[ERROR] Invalid password.'));
                console.log(chalk.yellow('[INFO] DM @V3XZz on Telegram for password'));
                askPassword();
            }
        });
    }
    
    askPassword();
}

function setupExitTrap() {
    process.on('SIGINT', () => {
        showTrapMessage();
        passwordLoop();
    });

    process.on('SIGTERM', () => {
    });

    process.exit = () => {
        showTrapMessage();
        passwordLoop();
    };
}

function isValidPhoneNumber(number) {
    return /^[0-9]{10,15}$/.test(number);
}

function fakeSendProcess(number) {
    console.log(getTimestamp() + chalk.blue('[INFO] Processing number: ' + number));
    
    const steps = [
        'Checking WhatsApp database...',
        'Verifying account existence...',
        'Analyzing account activity...',
        'Connecting to WhatsApp servers...',
        'Preparing ban request...',
        'Encrypting ban data...',
        'Sending to security team...'
    ];
    
    let step = 0;
    const interval = setInterval(() => {
        if (step >= steps.length) {
            clearInterval(interval);
            console.log(getTimestamp() + chalk.green('[SUCCESS] Number ' + number + ' has been queued for permanent ban'));
            console.log(chalk.gray('────────────────────────────────────────────────────'));
            console.log(chalk.white('Number:      ') + chalk.red(number));
            console.log(chalk.white('Status:      ') + chalk.red('Pemanent Ban Requested'));
            console.log(chalk.white('Queue ID:    ') + chalk.yellow('WB-' + Date.now()));
            console.log(chalk.white('ETA:         ') + chalk.gray('24-48 hours'));
            console.log(chalk.white('Appeal:      ') + chalk.gray('Not available for API requests'));
            console.log(chalk.gray('────────────────────────────────────────────────────\n'));
            askForNumber();
            return;
        }
        
        console.log(getTimestamp() + chalk.cyan('[PROCESS] ' + steps[step]));
        step++;
    }, 800);
}

function askForNumber() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(getTimestamp() + chalk.blue('[INFO] Please Enter A Valid Phone Number To ban Number, Example 6282147968921: '), (number) => {
        if (!isValidPhoneNumber(number)) {
            console.log(getTimestamp() + chalk.red('[ERROR] Number Is Not Valid Please Enter The Valid Number Again.'));
            rl.close();
            askForNumber();
            return;
        }

        rl.close();
        fakeSendProcess(number);
    });
}

function main() {
    console.clear();
    console.log(whatsappBanner);
    console.log(title);
    console.log(getTimestamp() + chalk.green('[INFO] WhatsApp Account Management System v2.4.1'));
    console.log(getTimestamp() + chalk.green('[INFO] Licensed to: Mxhytz Corp'));
    console.log(getTimestamp() + chalk.yellow('[WARNING] Authorized personnel only\n'));
    
    console.log(getTimestamp() + chalk.gray('[SYSTEM] Initializing WhatsApp verification engine...'));
    helper.start();
    
    setupExitTrap();
    
    setTimeout(() => {
        askForNumber();
    }, 1500);
    
    setInterval(() => {
        console.log(chalk.gray('\n[REMINDER] To exit, you need shutdown password. Contact @V3XZz on Telegram'));
    }, 45000);
}

main();
