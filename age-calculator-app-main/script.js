const btn= document.querySelector(".container #btn-1")

const reset = document.querySelector(".container #btn-2")

const form = document.querySelector(".container form")

const year= document.querySelector(".years")
const month= document.querySelector(".months")
const day= document.querySelector(".days")

// console.log(year);
// console.log(month);
// console.log(day);

const currentFullDate = new Date();

const nowDate= currentFullDate.getDate();
const nowMonth= currentFullDate.getMonth()+1;
const nowYear = currentFullDate.getFullYear();


form.addEventListener('submit', function(e){

    e.preventDefault()

    const dayInput = parseInt(document.querySelector(".container .day-input").value);
    const monthInput = parseInt(document.querySelector(".container .month-input").value);
    const yearInput = parseInt( document.querySelector(".container .year-input").value);

    let year12=0;
    let month12 =0
    let day12 =0;

    if(nowYear>yearInput && monthInput<13 && dayInput<32){
        
        year12=nowYear-yearInput;
        // console.log(year12);

        if(nowMonth<monthInput && monthInput!== 2){
            year12 = nowYear-1
            month12= (12+nowMonth) - monthInput;
            year12 = year12 -yearInput

            if(nowDate<dayInput) {
                month12 = month12-1
                day12 = (31+nowDate)-dayInput;
                console.log("1st condition")
            }
            else{
                day12 = nowDate-dayInput;
                console.log("1st else")
            }
        }
        else if(nowMonth>=monthInput){
            year12=nowYear-yearInput;
            month12 = nowMonth - monthInput
            if(nowDate<dayInput) {
                month12 = month12-1
                day12 = (31+nowDate)-dayInput;
                console.log("2st condition")
            }
            else{
                day12 = nowDate-dayInput;
                console.log("2st else")
            }
        }
           day.innerHTML = day12
           month.innerHTML = month12
           year.innerHTML = year12

    }
    else{
        alert(`Invalid Data Entered`)
    }


    

})


