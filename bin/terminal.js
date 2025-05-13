function write(message){
    process.stdout.write(message);
};

const ESC = '\x1b';

write(ESC + "[31m");
write(ESC + "[42m");
write("message");
write(ESC + "[0m");
write("\n");

write(ESC + "[31m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[32m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[33m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[34m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[35m"); write("message"); write(ESC + "[0m"); write("\n");

write(ESC + "[41m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[42m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[43m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[44m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[45m"); write("message"); write(ESC + "[0m"); write("\n");

write(ESC + "[1m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[2m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[3m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[4m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[5m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[7m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[8m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[9m"); write("message"); write(ESC + "[0m"); write("\n");



write(ESC + "[31m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[1;31m"); write("message"); write(ESC + "[0m"); write("\n");
write(ESC + "[2;31m"); write("message"); write(ESC + "[0m"); write("\n");


for(let i = 0; i<256; i ++){
    write(ESC + `[48;5;${i}m`); write(" "); 
}

write(ESC + "[0m");


for(let i = 0; i<256; i ++){
    write(ESC + `[48;2;${i};0;0m`); write(" "); 
}

write(ESC + "[0m");