var loans = [];

var loan0 = {
    id: 0,
    customerName: "John Smith",
    phoneNumber: "480-579-5269",
    address: "1234 s arizona ave.",
    loanAmount: 2345.71,
    interest: 2.4,
    loanTermYears: 2,
    loanType: "Personal",
    description: "Personal Loan",
    calculatedLoanAmount: function() {
        let x = (1 + this.interest / 100);
        calcTotal = this.loanAmount * (Math.pow(x, this.loanTermYears));
        calcTotal = calcTotal.toFixed(2);
        return calcTotal
    }
}

var loan1 = {
    id: 1,
    customerName: "Jane Doe",
    phoneNumber: "602-753-5566",
    address: "4321 n arizona ave.",
    loanAmount: 76427.28,
    interest: 10,
    loanTermYears: 10,
    loanType: "Student",
    description: "Student Loan",    
    calculatedLoanAmount: function() {
        let x = (1 + this.interest / 100);
        calcTotal = this.loanAmount * (Math.pow(x, this.loanTermYears));
        calcTotal = calcTotal.toFixed(2);
        return calcTotal
    }
}

var loan2 = {
    id: 2,
    customerName: "Gregory House",
    phoneNumber: "555-741-5961",
    address: "554 w azalea st.",
    loanAmount: 1191.79,
    interest: 1.5,
    loanTermYears: 1,
    loanType: "Personal",
    description: "Personal Loan",
    calculatedLoanAmount: function() {
        let x = (1 + this.interest / 100);
        calcTotal = this.loanAmount * (Math.pow(x, this.loanTermYears));
        calcTotal = calcTotal.toFixed(2);
        return calcTotal
    }
}

var loan3 = {
    id: 3,
    customerName: "Chuck Fitzgerald",
    phoneNumber: "661-789-1245",
    address: "951 s senate st",
    loanAmount: 9364.17,
    interest: 2.61,
    loanTermYears: 2,
    loanType: "Auto",
    description: "Auto Loan",
    calculatedLoanAmount: function() {
        let x = (1 + this.interest / 100);
        calcTotal = this.loanAmount * (Math.pow(x, this.loanTermYears));
        calcTotal = calcTotal.toFixed(2);
        return calcTotal
    }
}

var loan4 = {
    id: 4,
    customerName: "Terry Jones",
    phoneNumber: "235-999-8721",
    address: "333 e north st",
    loanAmount: 108969.08,
    interest: 3.7,
    loanTermYears: 30,
    loanType: "Mortgage",
    description: "Moertgage Loan",
    calculatedLoanAmount: function() {
        let x = (1 + this.interest / 100);
        calcTotal = this.loanAmount * (Math.pow(x, this.loanTermYears));
        calcTotal = calcTotal.toFixed(2);
        return calcTotal
    }
}

loans.push(loan0, loan1, loan2, loan3, loan4);

loans.forEach((item) => console.log("Loan " + item.id + " $" + item.calculatedLoanAmount()));