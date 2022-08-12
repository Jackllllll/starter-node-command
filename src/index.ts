import {argv, exit} from 'process';


(function start() {
    const args2 = argv.slice(2)[0];


    if (args2 && args2 === '-v') {
        const versio = require('../package.json').version;
        // 输出版本号
        console.log(versio);
        exit(1);
    }

    function getSayello(): string {
        return 'Hello Wolld';
    }
    // Hello Wolld
    console.log(getSayello());
})();

