function studentScore (number){
    if (number >= 80 && < 100) {
        return "A";
    } else if (number >= 65 && < 79) {
        return "B+";
    } else if (number >= 50 && < 64) {
        return "B";
    } else if (number >= 35 && < 49) {
        return "C";
    }else if (number >= 0 && < 34) {
            return "D";
    }if (number >= 100 && < 0) {
                return "invalid";
    } 
}   
