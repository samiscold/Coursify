const introActive = document.querySelector('.intro');
const lessonActive = document.querySelector('.less');
const quizeActive = document.querySelector('.qa');

const introduction = document.querySelector('.introduction')
const lesson = document.querySelector('.lesson')
const quize = document.querySelector('.quize')

introActive.addEventListener('click', () => {
    introActive.classList.add('active')
    introduction.classList.remove('hidden')

    lessonActive.classList.remove('active')
    lesson.classList.add('hidden')
    quizeActive.classList.remove('active')
    quize.classList.add('hidden')


})





// buttons next and back
const next = document.querySelector('.nextLesson');
const back = document.querySelector('.backLesson');
const lesson1 = document.querySelector('.lesson-1');
const lesson2 = document.querySelector('.lesson-2');

const startButton = document.querySelector('.startButton')
const quizeButton = document.querySelector('.quizeButton');

startButton.addEventListener('click', () => {
    lessonActive.classList.add('active')
    lesson.classList.remove('hidden')
    introActive.classList.remove('active')
    introduction.classList.add('hidden')
    quizeActive.classList.remove('active')
    quize.classList.add('hidden')

    lessonActive.addEventListener('click', () => {
        lessonActive.classList.add('active')
        lesson.classList.remove('hidden')

        introActive.classList.remove('active')
        introduction.classList.add('hidden')
        quizeActive.classList.remove('active')
        quize.classList.add('hidden')
    })

    lessonActive.classList.remove('disable')
})

next.addEventListener('click', () => {
    lesson1.classList.add('hidden');
    lesson2.classList.remove('hidden');
    quizeActive.classList.remove('disable')

    quizeActive.addEventListener('click', () => {
        quizeActive.classList.add('active')
        quize.classList.remove('hidden')

        lessonActive.classList.remove('active')
        lesson.classList.add('hidden')
        introActive.classList.remove('active')
        introduction.classList.add('hidden')


    })
})

back.addEventListener('click', () => {
    lesson2.classList.add('hidden');
    lesson1.classList.remove('hidden');
})

quizeButton.addEventListener('click', () => {
    quizeActive.classList.add('active')
    quize.classList.remove('hidden')

    lessonActive.classList.remove('active')
    lesson.classList.add('hidden')
    introActive.classList.remove('active')
    introduction.classList.add('hidden')
    quizeActive.classList.remove('disable')

})



// TEST PART BUG: SHOULD DELETE IN THE END
// quizeActive.addEventListener('click', () => {
//     quizeActive.classList.add('active')
//     quize.classList.remove('hidden')

//     lessonActive.classList.remove('active')
//     lesson.classList.add('hidden')
//     introActive.classList.remove('active')
//     introduction.classList.add('hidden')
// })
// *******************************************

