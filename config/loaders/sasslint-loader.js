const sassLint = require('sass-lint');
const { resolveRoot, relativeRoot } = require('../paths');
const chalk = require('chalk');

const WARNING = 1;
const ERROR = 2;

function loader(source) {
  const result = sassLint.lintText({ text: source }, {}, resolveRoot('.sasslintrc'));
  console.log(chalk.underline(relativeRoot(this.resourcePath)));
  result.messages.forEach(message => {
    switch (message.severity) {
      case WARNING:
        console.log(formWarningMessage(message));
        break;
      case ERROR:
        console.log(formErrorMessage(message));
        break;
      default:
        break;
    }
  })
  return source;
}

const formWarningMessage = ({ ruleId, line, column, message, severity }) => {
  return [
    chalk.red(` ${line}:${column}`),
    chalk.red(`\t${ruleId}`),
    chalk.white(`\t${message}`)
  ].join('');
};

const formErrorMessage = ({ ruleId, line, column, message, severity }) => {
  return [
    chalk.yellow(`\t${line}:${column}`),
    chalk.yellow(`\t${ruleId}`),
    chalk.white(`\t${message}`)
  ].join('');
};

module.exports = loader;
