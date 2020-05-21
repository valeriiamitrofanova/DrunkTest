// //validation
// const inputs = document.querySelectorAll('.infovalidation');
// const patterns = {
//     username: /^[a-z]{5-12}$/i,
//     email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
// };

// //validation function
// function validate(field,regex){
//     if(regex.test(field.value)){
//         field.className = 'valid';
//     } else {
//         field.className = 'invalid'
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup', (e) => {
//         //console.log(e.target.attributes.name.value)
//         validate(e.target,patterns[e.target.attributes.name.value])
//     });
// });

//Answers
const correctAnswers = ["B", "B", "A", "A", "B", "A", "B", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  });

  //SHOW RESULT ON TOP
  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
