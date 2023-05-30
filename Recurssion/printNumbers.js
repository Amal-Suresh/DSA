function PrintTen(num){
    if(num>10){
        return
    }
    console.log(num);
    return PrintTen(num+1)
}

PrintTen(1)
