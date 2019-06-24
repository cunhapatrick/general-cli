const vorpal = require('vorpal')()
const chalk = vorpal.chalk;
const exec = require('child_process').exec;

vorpal
  .catch('[bashcmds...]')
  .action(function(args, next){
    exec(args.bashcmds.join(' '), (err, result) => {
      if (err) console.error(err);
      else console.log(result);
      next();
    });
});

vorpal
  .command('i','Install dependencies')
  .option('-d, --docker','Install docker')
  .option('-r, --react','Install create-react-app framework')
  .option('-R, --react_native','Install react native-cli')
  .action(function(args, callback) {
    const { docker, react, react_native } = args.options
    if (docker) this.log('docker true')
    if (react) this.log('react true')
    if (react_native) this.log('react native true')
    
    exec("ls", (err, result) => {
      if (err) this.log(chalk.magenta(err))
      else this.log(chalk.cyan(result))
      callback();
    })
  });

  vorpal
    .delimiter(chalk.green('vorpal$'))
    .show();