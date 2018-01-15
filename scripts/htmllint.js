var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var htmllint = require('htmllint');

var htmlPath = path.resolve(process.cwd(), process.argv[2]);
var html = fs.readFileSync(htmlPath, { encoding: 'utf-8' });

htmllint(html).then(issues => {
    var header = chalk.underline.yellow(`${path.parse(htmlPath).base}:`);

    console.log(header);
    issues.forEach(issue => {
        var msg = [
            chalk.white(`\t${issue.line}:${issue.column}`),
            chalk.red(`\t${issue.rule}`),
            chalk.white(`\t${htmllint.messages.renderIssue(issue)}`)
        ].join('');

        console.log(chalk.red(msg));
    });
}, console.log);
