function nbYear(p0, percent, aug, p) {
    let num = 0;
    let percentage =percent / 100
    var total = p0 + p0 * percentage + aug;
let nb = total;
    for(var count = 1; nb <= p; coount++){
        var totalTmp = nb + nb * percentage + aug;
        num = count + 1;
        nb = totalTmp;
    }
return num;
}