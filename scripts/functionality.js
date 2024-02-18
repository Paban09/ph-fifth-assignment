let seatList=[];

function select(id){

    if(!seatList.includes(id)){

        let total=getElementById('total-seat');
        let totalNumber=getValue(total);
        totalNumber=totalNumber+1;

        if(totalNumber<=4){

            seatList.push(id);
            console.log(seatList);
            let selectedSit=getElementById(id);
            // console.log(selectedSit);
            console.log(selectedSit.classList);
        
            let remain=getElementById('seat-remain');
            let remainNumber=getValue(remain);
            remainNumber=remainNumber-1;

            total.innerText=totalNumber;
            remain.innerText=remainNumber;
           
        }
    }
        
}
