function multiplication_table(index){
    for (let i = 1; i <= index; i++){
        var mymsg = []
        for (let j = 1; j <= i; j++){
            let product = i * j
            mymsg.push(i + '*' + j + '=' + product)
        }
        console.log(mymsg.join(' '))
        var mymsg = []
    }
}

multiplication_table(9);