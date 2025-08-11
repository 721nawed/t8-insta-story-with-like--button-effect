let stories = document.querySelector(".stories");
let fulscr = document.querySelector(".fulscr");
let img = document.querySelector("#cont-img");
let likeef = document.querySelector("#likeicon");
let heart= document.querySelector("#heart");
let arr = [
    {dp: "rohitsharma.webp",
      story:"rohit.webp",
      myname : "Rohit"}, 


      {dp:"FB_IMG_1611142785922.jpg",
        story:"IMG_20231217_193711.jpg",
        myname : "Ashfaque"}, 
                                                         {dp:"haniaamir.webp",
                                                          story:"hania.jpg",
                                                        myname : "Hania amir"},

                                    
              {dp:"IMG_20230129_100958.jpg",
        story: "1712905115590.jpg",
    myname : "Saif Alam"},

    {dp:"varun.jpg",
story:"IMG_20250428_210845[1].jpg",
myname : "Shahznad"},
                             {dp: "pexels-photo-1378723.jpeg",
                               story:"haniaamir.webp",
                            myname : "Dusky"}
]

let clutter = ""
arr.forEach((val,i)=>{
clutter += `<div class="story-head">
                    <div class="story">
                        <img id="${i}" src="${val.dp}" alt="">
                    </div>
                    <h1>${val.myname}</h1>
                </div>`
});

stories.innerHTML = clutter;

stories.addEventListener( "click", (e)=>{
    fulscr.style.display = "block"
    fulscr.style.backgroundImage = `url(${arr[e.target.id].story})`

    setTimeout(() => {

        fulscr.style.display = "none"
        
    },3000);
});

img.addEventListener( "dblclick", ()=>{

    likeef.style.transform = "translate(-50% , -50%) scale(1)"
    likeef.style.opacity = "0.8"
    heart.style.color = "red";
    color = "red";

  setTimeout(()=>{
  
    likeef.style.opacity = "0"
  
  },1000)

  setTimeout(()=>{
  
   likeef.style.transform = "translate(-50% , -50%) scale(0)"
  
  },1100)
    

});

let color = "black";
heart.addEventListener( "click", ()=>{
  if(color=="black"){
    heart.style.color = "red";
    color= "red"
  }else{
         heart.style.color = "black";
         color = "black";
  }
})

