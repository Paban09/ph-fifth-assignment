let seatList=[];
const classType='economy';
const ticketPrice=550;
let couponOne='NEW15';
let couponTwo='Couple 20';
// let totalNumber=0;


function select(id){

    if(!seatList.includes(id)){

        let total=getElementById('total-seat');
        let totalNumber=getValue(total);
        totalNumber=totalNumber+1;

        if(totalNumber<=4){

            seatList.push(id);          

            let selectedSit=getElementById(id);
            selectedSit.classList.remove('bg-gray-100');
            selectedSit.classList.add('bg-[#1DD100]');
            selectedSit.classList.add('text-white');


            let tableOfTransaction=getElementById('transaction-list');
            let p1 = createP(id);           
            let p2 = createP(classType);
            let p3 = createP(ticketPrice);
            tableOfTransaction.append(p1);
            tableOfTransaction.append(p2);
            tableOfTransaction.append(p3);
            
            // console.log(typeof ticketPrice);
            let totalPrice=getElementById('total');
            let totalValue=getValue(totalPrice);
            totalValue=totalValue+ticketPrice;
            totalPrice.innerText=totalValue;
            // console.log(totalValue);
        
            let remain=getElementById('seat-remain');
            let remainNumber=getValue(remain);
            remainNumber=remainNumber-1;

            total.innerText=totalNumber;
            remain.innerText=remainNumber;

            
           
        }else{
            alert("You Can't Buy More Ticket");
        }
    }else{
        alert("Already Selected");
    }
        
}
