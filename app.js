function main() {

  const acc = document.querySelectorAll('.accordion')
  const aboutMeAcc = document.querySelector('.about-accordion')
  const skillsAcc = document.querySelector('.skills-accordion')
  const projectsAcc = document.querySelector('.projects-accordion')
  const contactMeAcc = document.querySelector('.contacts-accordion')
  const aboutMePanel = document.querySelector('.about-panel')
  const skillsPanel = document.querySelector('.skills-panel')
  const projectsPanel = document.querySelector('.projects-panel')
  const contactMePanel = document.querySelector('.contacts-panel')

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle('active')

      /* Toggle between hiding and showing the active panel */
      const panel = this.nextElementSibling
      if (panel.style.display === 'block') {
        panel.style.display = 'none'
      } else {
        panel.style.display = 'block'
      }

      if (panel.style.maxWidth) {
        panel.style.maxWidth = null
      } else {
        panel.style.maxWidth = panel.scrollHeight + 'px'
      }

      if (this.classList.contains('about-accordion')) {
        skillsPanel.style.display === 'none'
        skillsPanel.style.maxWidth = null
        skillsAcc.classList.remove('active')
        projectsPanel.style.display === 'none'
        projectsPanel.style.maxWidth = null
        projectsAcc.classList.remove('active')
        contactMePanel.style.display === 'none'
        contactMePanel.style.maxWidth = null
        contactMeAcc.classList.remove('active')
      } else if (this.classList.contains('skills-accordion')) {
        aboutMePanel.style.display === 'none'
        aboutMePanel.style.maxWidth = null
        aboutMeAcc.classList.remove('active')
        projectsPanel.style.display === 'none'
        projectsPanel.style.maxWidth = null
        projectsAcc.classList.remove('active')
        contactMePanel.style.display === 'none'
        contactMePanel.style.maxWidth = null
        contactMeAcc.classList.remove('active')
      } else if (this.classList.contains('projects-accordion')) {
        aboutMePanel.style.display === 'none'
        aboutMePanel.style.maxWidth = null
        aboutMeAcc.classList.remove('active')
        skillsPanel.style.display === 'none'
        skillsPanel.style.maxWidth = null
        skillsAcc.classList.remove('active')
        contactMePanel.style.display === 'none'
        contactMePanel.style.maxWidth = null
        contactMeAcc.classList.remove('active')
      } else if (this.classList.contains('contacts-accordion')) {
        aboutMePanel.style.display === 'none'
        aboutMePanel.style.maxWidth = null
        aboutMeAcc.classList.remove('active')
        skillsPanel.style.display === 'none'
        skillsPanel.style.maxWidth = null
        skillsAcc.classList.remove('active')
        projectsPanel.style.display === 'none'
        projectsPanel.style.maxWidth = null
        projectsAcc.classList.remove('active')
      }
    })
  }

}

window.addEventListener('DOMContentLoaded', main)