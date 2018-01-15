const { resolve, parse } = require('path');
const { readFileSync } = require('fs');
const chalk = require('chalk');
const htmllint = require('htmllint');

const htmlPath = resolve(process.cwd(), process.argv[2]);

const html = readFileSync(htmlPath, { encoding: 'utf-8' });
const result = htmllint(html);

result.then(issues => {
    const header = chalk.underline.yellow(`${parse(htmlPath).base}:`);

    console.log(header);
    issues.forEach(issue => {
        const msg = [
            chalk.white(`\t${issue.line}:${issue.column}`),
            chalk.red(`\t${issue.rule}`),
            chalk.white(`\t${htmllint.messages.renderIssue(issue)}`)
        ].join('');

        console.log(chalk.red(msg));
    });
}, console.log);
