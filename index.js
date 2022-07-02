// let hours = new Date().getHours()
// let min = new Date().getMinutes()
// let day = new Date().getDay()
// let month = new Date().getMonth()
// let seconds = new Date().getSeconds()

// console.log(`${hours}:${min}`);
// console.log(seconds);
// // console.log(new Date().getTime());

// let name = prompt('what is ur name?')
// let isDone = confirm('did u do ur hometask?')

// if(isDone === true) {
//     let score = +prompt('your score is')
    
//     if(score >= 7) {
//         alert(`congratulations mr/ms ${name} your score is ${score}`)
//     } else if (score >= 4) {
//         alert(`not bad your score is ${score}`)
//     } else if(score < 4) {
//         alert('dvoyshnik')
//     }
// } else {
//     alert(`А голову дома не забыл? а ${name}`)
// }



let name = prompt('what is ur name?').toLowerCase().trim() // AMir

if(name[0] === 'a') {
    let age = prompt('how old are u?')

    if(age >= 20 && age <= 40) {
        let money = prompt('how much money do u have?')

        if(money >= 100) {
            alert(`
                Welcome to our club mr/ms ${name}
            `)
        } else {
            alert(`sorry mr/ms ${name}`)
        }

    } else {
        alert(`sorry mr/ms ${name}`)
    }
} else {
    alert(`sorry mr/ms ${name}`)
}