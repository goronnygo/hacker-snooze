const website= document.querySelector('body');

const owner= document.createElement('div');
owner.className= 'parent';

const subs= document.createElement('div');
subs.className = 'child';

const item= document.querySelectorAll(".container-fluid");
const container= document.querySelectorAll('.container-fluid')


owner.appendChild(subs);
website.appendChild(owner);


document.addEventListener("DOMContentLoaded", function () {
    
    function getNewsData(){ 
        const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
        fetch(URL)
        .then(response => response.json())
        .then(function(arr){
            arr = arr.slice(0,99);
            arr.forEach(function(num) {
                let storyURL =`https://hacker-news.firebaseio.com/v0/item/${num}.json?print=pretty`
                getNewsStory(storyURL);
            })
        })
    }
    
    function getNewsStory(storyURL) {
        fetch(storyURL)
        .then((response) => response.json())
        .then(function (storyURL) {
            createList(storyURL)
            console.log(storyURL)
        })
    }
    
    function createList(story){
        
        let html = `<div class="container-fluid">
        <br>
        <h6 class="title"><a class="glow-on-hover kir" href=${story.url}>${story.title}</a></h6>
        <br>
        <div> 
        ${story.score} points by <a class="glow-on-hover" href="#" > ${story.by} </a> ${Math.floor(Math.random()* 99).toFixed(0)} hours ago |  | 
        <button height="3opx" width="1px" type="button" class="btn btn-sm  btn-dark position-relative">
        Comments&ensp;<span class="top-2 translate-left">${Math.floor(Math.random()* 99).toFixed(0)} <span class="visually-hidden">unread messages</span>
        </button>
        </div>
        </div>`
        
        website.innerHTML += html;
    }
    
    getNewsData();
})