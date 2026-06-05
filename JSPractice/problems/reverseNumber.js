//Reverse a Number:
//12345 --> 54321/10
function reverseNumber(num){
    if(num>=0 && num<=9) return num;
    let reversedNumber =0;
    while(num >0){
        reversedNumber = reversedNumber*10+(num%10);
        /**
         * step1:0* 10+(123%10)=> 3
         * step2:3*10+(12%10) =>32
         * step3:32*10+(1%10) => 1
         */
        num = Math.floor(num/10);
    }
    return reversedNumber;
}

console.log(reverseNumber(123));