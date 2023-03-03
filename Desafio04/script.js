const loginPage = document.querySelector('.loginpage');
const recoverPage = document.querySelector('.recoverpage');
const signinPage = document.querySelector('.signinpage');
const loading = document.querySelector('.spinner');

const forgetBtn = document.querySelector('.forgetBtn');
forgetBtn.addEventListener('click', (e) => {
  loginPage.style.display = 'none';
  loading.style.display = 'flex';
  e.preventDefault();
  
  setTimeout(() => {
    loading.style.display = 'none';
    recoverPage.style.display = 'flex';
  }, 500);
});


const signInBtn = document.querySelector('.signBtn');
signInBtn.addEventListener('click', (e) => {
  loginPage.style.display = 'none';
  loading.style.display = 'flex';
  e.preventDefault();

  setTimeout(() => {
    loading.style.display = 'none';
    signinPage.style.display = 'flex';
  }, 500);
});


const loginBtn = document.querySelectorAll('.loginBtn');
loginBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    loading.style.display = 'flex';
    signinPage.style.display = 'none';
    recoverPage.style.display = 'none';
    e.preventDefault();
    
    setTimeout(() => {
      loading.style.display = 'none';
      loginPage.style.display = 'flex';
    }, 500);
  });
});