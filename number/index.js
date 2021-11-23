function check_range_even(index){
    for (let i = 1; i <= index; i++){
        if (i % 2 == 0){
            console.log(i + " is even number.")
        } else {
            console.log(i + " is odd number.")
        }
    }
}
check_range_even(20);