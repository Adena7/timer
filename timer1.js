const args = process.argv.splice(2);

for (const char of args) {
    setTimeout(() => {
        process.stdout.write('\x07');
    }, char * 1000);
};
