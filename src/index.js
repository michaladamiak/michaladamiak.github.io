document.addEventListener('DOMContentLoaded', () => {
    const about = document.querySelector('.about_me')
    const contacts = document.querySelector('.contacts')
    const o = document.querySelector('.o')
    const projects = document.querySelector('.projects')
    const e = document.querySelector('.e')

    about.addEventListener('mouseover', function() {
        about.style.color = 'rgb(68,214,44)'
        about.style.textShadow = '0 0 60px rgb(211, 211, 211), 0 0 40px rgb(68,214,44)'
        o.style.color = 'rgb(68,214,44)'
        o.style.textShadow = '0 0 60px rgb(211, 211, 211), 0 0 40px rgb(68,214,44)'
        e.style.color = 'rgb(68,214,44)'
        e.style.textShadow = '0 0 60px rgb(211, 211, 211), 0 0 40px rgb(68,214,44)'
        contacts.style.color = 'gray'
        projects.style.color = 'gray'
    })
    about.addEventListener('mouseout', function() {
        about.style.color = 'white'
        about.style.textShadow = '0 0 0'
        o.style.color = 'white'
        o.style.textShadow = '0 0 0'
        e.style.color = 'white'
        e.style.textShadow = '0 0 0'
        contacts.style.color = 'white'
        projects.style.color = 'white'
    })
    contacts.addEventListener('mouseover', function() {
        contacts.style.color = 'darkorchid'
        contacts.style.textShadow = '0 0 60px lightgray, 0 0 40px darkorchid'
        o.style.color = 'darkorchid'
        o.style.textShadow = '0 0 60px rgb(211, 211, 211), 0 0 40px darkorchid'
        about.style.color = 'gray'
        projects.style.color = 'gray'
        e.style.color = 'gray'
    })
    contacts.addEventListener('mouseout', function() {
        contacts.style.color = 'white'
        contacts.style.textShadow = '0 0 0'
        o.style.color = 'white'
        o.style.textShadow = '0 0 0'
        about.style.color = 'white'
        projects.style.color = 'white'
        e.style.color = 'white'
    })
    projects.addEventListener('mouseover', function() {
        projects.style.color = 'RGB(77, 77, 255)'
        projects.style.textShadow = '0 0 60px rgb(211, 211, 211), 0 0 40px RGB(77, 77, 255)'
        e.style.color = 'RGB(77, 77, 255)'
        e.style.textShadow = '0 0 60px rgb(211, 211, 211), 0 0 40px rgb(77, 77, 255)'
        about.style.color = 'gray'
        contacts.style.color = 'gray'
        o.style.color = 'gray'
    })
    projects.addEventListener('mouseout', function() {
        projects.style.color = 'white'
        projects.style.textShadow = '0 0 0'
        e.style.color = 'white'
        e.style.textShadow = '0 0 0'
        about.style.color = 'white'
        contacts.style.color = 'white'
        o.style.color = 'white'
    })
})