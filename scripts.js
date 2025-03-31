/**
 * Language switcher function for toggling between Japanese and English content
 * @param {string} lang - The language to switch to ('ja' for Japanese, 'en' for English)
 */
function switchLanguage(lang) {
  const jaElements = document.querySelectorAll('.ja');
  const enElements = document.querySelectorAll('.en');
  const jaBtn = document.getElementById('ja-btn');
  const enBtn = document.getElementById('en-btn');
  
  if (lang === 'ja') {
    jaElements.forEach(el => el.style.display = 'block');
    enElements.forEach(el => el.style.display = 'none');
    jaBtn.classList.add('active-lang');
    enBtn.classList.remove('active-lang');
  } else {
    jaElements.forEach(el => el.style.display = 'none');
    enElements.forEach(el => el.style.display = 'block');
    enBtn.classList.add('active-lang');
    jaBtn.classList.remove('active-lang');
  }
}
