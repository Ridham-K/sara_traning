try{

    let marks = 120;

    if(marks > 100){

        throw new Error(
        "Marks cannot exceed 100"
        );

    }

}

catch(error){
    console.log(error.message);
}