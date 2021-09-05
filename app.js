var form = document.getElementById("my-form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var search = document.getElementById("search").value;
    var original_name = search.split(' ').join('');

    var profile_url = 'https://github.com/' + original_name;
    fetch("https://api.github.com/users/" + original_name)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            document.getElementById("result").innerHTML = `
   
            <style>
            :root {
                --Pale-blue: hsl(225, 100%, 94%);
                --Bright-blue: hsl(245, 75%, 52%);
                --Very-pale-blue: hsl(225, 100%, 98%);
                --Desaturated-blue: hsl(224, 23%, 55%);
                --Dark-blue: hsl(223, 47%, 23%);
            }

            body{
                background-color: #5CDB95;
            }
            #result .container {
                position: absolute;
                left: 50%;
                top: 50%;
                text-align: center;
                transform: translate(-50%, -50%);
                background-color: white;
                margin-top:20px;
                height: 450px;
                width: 280px;
                border-radius: 18px;
            }
            
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .content{
                transform: translate(0px, 59px);
            }
            .special-heading {
                color: #05386B;
                font-size: 20px;
                text-align: center;
                font-weight: 800;
                transform: translate(0px, -30px);
                margin: 0 15px;
                
            }
            .small-circle img{
                width: 150px;
                display: flex;
                height: 150px;
                border-radius: 50%;
                transform: translate(0px, -70px);
            }
            .small-circle{
                display:flex;
                justify-content: center;
                align-items: center;
                margin: 0px 10px 10px 10px;
                transform: translate(0, -40px);
            }  
            .data{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size:15px;
                font-weight:bold;
                padding-bottom:5px;
            }     
            .data span{
                display:block;
                font-size:12px;
            }
            .small-container a{
                text-decoration:none;
                font-weight: bolder;
                background-color: #05386B;
    padding: 10px 12px 12px 12px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    border-radius: 25px;
    display: block;
    transform: translate(0px, 25px);
    color: #EDF5E1;
            }
            .content .back{
                background-image: url(https://github.githubassets.com/images/modules/site/social-cards/github-social.png);
                background-repeat: no-repeat;
                background-size: cover;
                height: 225px;
                width: 280px;
                background-position-y: -36px;
                border-radius: 20px 20px 0 0;
            }
            .info{
                
                transform: translate(0px, -75px);
                padding: 7px;
            }
            </style>
            <div class="container">

    <div class="content">
            <div class="back"></div>
              <div class="small-circle">
                <img src="${data.avatar_url}" alt="">
              </div>

    <div class="info">
        <h2 class="special-heading">${data.login}</h2>
        <p>${data.bio}</p>

        <div class="small-container">
            

            <div class="data">
                <p>Followers:  <span>${data.followers}</span></p>
                <p>Following: <span>${data.following}</span></p>
                <p>Location: <span>${data.location}</span></p>
            </div>
            
            <a href="${profile_url}">Visit me!</a>
        </div>
    </div>
    </div>
</div>`
        })


})