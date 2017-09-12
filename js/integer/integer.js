function Int(num) {
    var nums = [];
    for (var i = 0; i < num.length; i++) {
        
        nums[num.length-i-1] = num[i];
    }
    return nums;
}