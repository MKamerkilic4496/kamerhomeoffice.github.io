// Bootsrap classında px sağdan soldan padding değeri verir.
// py ise yukarıdan aşağıdan değer verir.
// display-sayi  mesela display-4 bu texti büyütmeye yarayan bir bootstrap classıdır.

const correctAnswers=['Y','Y','Y','Y'];

const form=document.querySelector('.question-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    // for prevent refresh
    e.preventDefault();

    let score=0;
    // kullanıcının veriği cevapları form.name.value yardımıyla userAnswers adlı değişkende tutuyoruz.
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer,index)=>{
          if(answer===correctAnswers[index]){
              score+=25;
          }
    })
    // console.log(score);
    result.classList.remove('d-none');
    let point=0;
    const bass=setInterval(()=>{
        result.querySelector('span').textContent=`${point}%`;
        if(point==score){
            clearInterval(bass);
        }
        else{
            point++;
        }
    },10);

   
})

// setTimeout(()=>{
//   console.log('Kamer');
// },2000);

// setInterval(()=>{
//     console.log('Kamer');
// },1000);
// let i=0;
// const bass=setInterval(()=>{
//     console.log('Kamer');
//     i++;
//     if(i==4){
//         clearInterval(bass);
//     }

// },1000);