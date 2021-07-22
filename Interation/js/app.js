let a = 100;
while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  a++;
}

for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  

 for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
  }

  for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
      console.log("-");
    } else {
      console.log("*");
    }
  }
  
    let now = new Date(); 
    let day = now.getDay();
    switch (day) {
        case 0:
            console.log(`It's Sunday`);
             break;
        case 6:
            console.log(`It's Saturday`);
            break;
        case 1:
            console.log(`It's Monday`);
            break;
        case 2:
            console.log(`It's Tuesday`);
            break;
        case 3:
            console.log(`It's Wednesday`);
            break;
        case 4:
            console.log(`It's Thursday`);
            break;
        case 5:
            console.log(`It's Friday`);
             break;
        default:
            console.log(`Excuse me?`);
            break;
    }