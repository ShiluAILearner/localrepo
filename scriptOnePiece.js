let main=document.getElementById("main");
let arr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5a8NrDJ5_sBkQTtbq2ybH4jFl-q6u8JepA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiuasnGxHDt3Y7S1P3RYvnb8XtfnXVrP90A&s",
    "https://i.pinimg.com/736x/2b/bc/47/2bbc47578113791e42e1063d39acd9e3.jpg",
    "https://static.wikia.nocookie.net/characters/images/d/d4/Sanji.jpg/revision/latest/scale-to-width-down/985?cb=20171210214150",
    "https://statics.ruadoll.com/image/cache/2023/1013/0/06d0e053-3432-e348-953a-139dd9732208-1000x1000.jpg",
    "https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20260315214841",
    "https://ih1.redbubble.net/image.5291993770.6015/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "https://static.wikia.nocookie.net/tasw/images/3/35/Franky.png/revision/latest/scale-to-width-down/600?cb=20220503001843",
    "https://static.wikia.nocookie.net/p__/images/5/55/Brook.png/revision/latest?cb=20190529050014&path-prefix=protagonist",
    "https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20240720150824"
];
//ussop, luffy, zoro, sanji, robin, nami, jinbe, franky, brook, chopper...
let str= "";
for(let i=1; i<=65; i++){
    let r=Math.floor(Math.random()*arr.length);
    str +=`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML= str;