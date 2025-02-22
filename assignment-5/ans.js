let globalCount=0;

function incrementCounter(){
    let localCount=0;
    globalCount++;
    localCount++;
 console.log(`globalCount: ${globalCount} , localCount: ${localCount}`);

}
incrementCounter();
incrementCounter()
console.log(`FinalglobalCount:${globalCount}`)
    //console.log(localCount) Error as it is defined locally