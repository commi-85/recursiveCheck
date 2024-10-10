function TicketPricing(age) {
    let price
    if (age <= 12) {
       return price = `10 $`;
    }
    else if(age >= 13 && age < 18){
        return price = `15 $`;
    }
    else{
        return price = `20 $`;
    }
}
console.log(TicketPricing(32));