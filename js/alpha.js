const playNow = () => {
  const home = document.getElementById("home-section");
  home.classList.add('hidden')
  
    // appear the playground
    const playground = document.getElementById("playground-section");
    playground.classList.remove('hidden');
   
};
