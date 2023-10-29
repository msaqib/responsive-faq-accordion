// const questions = document.querySelectorAll('.question');

// questions.forEach((question) => {
//   const answer = question.nextElementSibling;
//   question.addEventListener('click', () => {
//     answer.classList.toggle('active');
//   });
// });
const list = document.querySelector('.container')

const questionsData = [
    {
        question: 'Who is the CEO of Jamster?',
        answer: 'Our founder is James Hamloshing. He is a Stanford Alumnus, with a degree is Child Psychology. He lives in St. Louis, Missouri with his 39 dogs, and a son.'
    },
    {
        question: 'When was the company founded?',
        answer: 'Our company was founded on the eve of February 31, 2018. It was founded at a party held to hail a match winning NBA performance by a famous player. The founding members met there by chance and hit it off immediately.'
    },
    {
        question: 'Is the company public?',
        answer: 'Our company has not yet gone public. But, we plan to see how things go. We plan to go public by 2025. If we dont make that, we will try to go public by 2028. Or any year afterwards.'
    }
]

questionsData.forEach( question => {
    const container = document.createElement('div')
    container.classList.add('centered')
    const dcq = document.createElement('div')
    const dqp = document.createElement('p')
    const dqspan = document.createElement('span')
    dqspan.classList.add('material-symbols-outlined')
    dcq.classList.add('question')
    dqp.innerText = question.question
    dqspan.innerText = 'add'
    dcq.appendChild(dqp)
    dcq.appendChild(dqspan)

    const dca = document.createElement('div')
    const dap = document.createElement('p')
    dca.classList.add('answer')
    dap.innerText = question.answer
    dca.appendChild(dap)
    container.appendChild(dcq)
    container.appendChild(dca)

    container.addEventListener('click', (e) => {
        let handled = false
        const open = document.querySelectorAll('.centered.active')
        open.forEach( (element) => {
            element.classList.toggle('active')
            element.querySelector('span').innerText = 'add'
            if (element === e.currentTarget) {
                handled = true
            }
        })
        if (!handled) {
            e.currentTarget.classList.toggle('active')
            e.currentTarget.querySelector('span').innerText = 'remove'
        }
    })

    list.appendChild(container)
})