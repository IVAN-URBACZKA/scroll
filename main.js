const bar = document.querySelector(".bar");

addEventListener("scroll",function(event){


    const max = document.body.scrollHeight - innerHeight;

    const pourcentage = pageYOffset /max * 100 ;

    console.log(pageYOffset,document.body.scrollHeight);

    bar.style.width = pourcentage + "%";


})