function megaMath(...args) {
    let chetNumbers = args.filter((a) => a % 2 === 0);
    // console.log(chetNumbers);
    chetNumbers = chetNumbers.map((a) => a ** 2);
    console.log(chetNumbers);
    
    let notChetNumbers = args.filter((a) => a % 2 !== 0);
    // console.log(notChetNumbers);
    notChetNumbers = notChetNumbers.map((a) => a ** 3);
    console.log(notChetNumbers);
}

megaMath(1, 2, 3, 4);