// mouse events example 1 start
const btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    // btn.setAttribute('class','mybtn');
    // console.log("classlist",btn.classList);
    // btn.classList.add('mybtn');
    // btn.classList.remove('mybtn');
    btn.classList.toggle('mybtn');
    // console.log("i am clicked");
    });

btn.addEventListener('dblclick', (event) => {
btn.classList.toggle('mybtn');
  console.log("i am clicked");
})

// btn.addEventListener('mousedown', (event) => {
//     // console.log(" event : ", event);
//     console.log("i am clicked");
// });

// btn.addEventListener('mouseup', (event) => {
//     // console.log(" event : ", event);
//     console.log("i am clicked");
// });



// example 1 end