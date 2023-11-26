<script>

//song list
let All_song = [
   

{
    name: "Yeshua",
    path: "https://od.lk/s/NjBfMTE2MDM0ODgxXw/AUD-20230628-WA0008.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "....."
   },
{
    name: "Tongues",
    path: "https://od.lk/s/NjBfMTE2MDM0OTQzXw/AUD-20230810-WA0018.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Tongues",
    path: "https://od.lk/s/NjBfMTE2MDM0OTQ3Xw/AUD-20230810-WA0019.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin Rev. Karen. N"
   },


{
    name: "Tongues",
    path: "https://od.lk/s/NjBfMTE2MDM0OTY1Xw/AUD-20230810-WA0020.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen. N"
   },

{
    name: "I dey",
    path: "https://od.lk/s/NjBfMTE2MDM0OTc0Xw/AUD-20230810-WA0028.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen. Nubidga"
   },

{
    name: "More Than  Conqueror",
    path: "https://od.lk/s/NjBfMTE2MDM0OTc5Xw/AUD-20230810-WA0029.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen. Nubidga"
   },

{
    name: "Tongues of Glory",
    path: "https://od.lk/s/NjBfMTE2MDM0OTk0Xw/AUD-20230810-WA0036.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Rock of Ages",
    path: "https://od.lk/s/NjBfMTE2MDM0OTk3Xw/AUD-20230810-WA0037.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen. Nubidga"
   },


{
    name: "Tongues of Grace",
    path: "https://od.lk/s/NjBfMTE2MDM0OTk5Xw/AUD-20230810-WA0038.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },


{
    name: "Tongues",
    path: "https://od.lk/s/NjBfMTE2MDM1MDA2Xw/AUD-20230810-WA0039.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen. Nubidga"
   },


{
    name: "Lover of my Soul",
    path: "https://od.lk/s/NjBfMTE2MDM1MDEzXw/AUD-20230810-WA0040.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Your Mercy",
    path: "https://od.lk/s/NjBfMTE2MDM1MDI3Xw/AUD-20230810-WA0042.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },

{
    name: "Sweet Jesus",
    path: "https://od.lk/s/NjBfMTE2MDM1MDIwXw/AUD-20230810-WA0041.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },

{
    name: "Messaih",
    path: "https://od.lk/s/NjBfMTE2MDM1MjUxXw/AUD-20230810-WA0043.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Njika' Yahweh",
    path: "https://od.lk/s/NjBfMTE2MDM1MjU4Xw/AUD-20230810-WA0044.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Vehila",
    path: "https://od.lk/s/NjBfMTE2MDM1MjU5Xw/AUD-20230810-WA0045.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Worthy of my Praise",
    path: "https://od.lk/s/NjBfMTE2MDM1MjYyXw/AUD-20230810-WA0046.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen. Nubidga"
   },


{
    name: "Watch And Pray",
    path: "https://od.lk/s/NjBfMTE2MDM1MjYzXw/AUD-20230810-WA0048.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Source of Joy",
    path: "https://od.lk/s/NjBfMTE2MDM1MzkwXw/AUD-20230810-WA0049.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev Karen Nubidga"
   },

{
    name: "I Plead the Blood",
    path: "https://od.lk/s/NjBfMTE2MDM1NDAxXw/AUD-20230811-WA0000.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen. Nubidga"
   },

{
    name: "Tongues of Glory",
    path: "https://od.lk/s/NjBfMTE2MDM1NDA5Xw/AUD-20230811-WA0001.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Vehila",
    path: "https://od.lk/s/NjBfMTE2MDM1NDE0Xw/AUD-20230811-WA0002.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin.N"
   },


{
    name: "Tongues of Grace",
    path: "https://od.lk/s/NjBfMTE2MDM1NDM2Xw/AUD-20230811-WA0003.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen. Nubidga"
   },


{
    name: "Take Over Me",
    path: "https://od.lk/s/NjBfMTE2MDM1NDQ4Xw/AUD-20230811-WA0005.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },


{
    name: "Take Over Skit",
    path: "https://od.lk/s/NjBfMTE2MDM1NDU1Xw/AUD-20230811-WA0006.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "....."
   },


{
    name: "I Hail You",
    path: "https://od.lk/s/NjBfMTE2MDM1NDY0Xw/AUD-20230811-WA0007.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev Karen Nubidga"
   },

{
    name: "Tears of Blood",
    path: "https://od.lk/s/NjBfMTE2MDM1NDk0Xw/AUD-20230811-WA0008.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },

{
    name: "Covernnt Keeping God",
    path: "https://od.lk/s/NjBfMTE2MDM1NTE2Xw/AUD-20230811-WA0009.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },


{
    name: "Your Grace is Amazing",
    path: "https://od.lk/s/NjBfMTE2MDM1NTMyXw/AUD-20230811-WA0010.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },


{
    name: "Messaih Messaih",
    path: "https://od.lk/s/NjBfMTE2MDM1NTUxXw/AUD-20230811-WA0025.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Glory to Glory",
    path: "https://od.lk/s/NjBfMTE2MDM1NTc5Xw/AUD-20230811-WA0026.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },


{
    name: "Njika'Aba",
    path: "https://od.lk/s/NjBfMTE2MDM1NjE1Xw/AUD-20230811-WA0027.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },


{
    name: "Welcome to Zion",
    path: "https://od.lk/s/NjBfMTE2MDM1NjM0Xw/AUD-20230811-WA0028.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Prophet Kelvin. N"
   },

{
    name: "E Go beter",
    path: "https://od.lk/s/NjBfMTE2MDM1NjQ4Xw/AUD-20230811-WA0029.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },

{
    name: "Kingdom Cypher chapter 1",
    path: "https://od.lk/s/NjBfMTE2MDM1NjU0Xw/AUD-20230811-WA0030.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "The Anointed Lyricist ft KJV $ Daddy. D"
   },


{
    name: "Waka ya Waka",
    path: "https://od.lk/s/NjBfMTE2MDM1NjcwXw/AUD-20230811-WA0031.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "De Anointed Lyricist ft KJV $ Ambassadors of Glory"
   },


{
    name: "Messiah",
    path: "https://od.lk/s/NjBfMTE2MDM1Njc3Xw/AUD-20230811-WA0032.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "De Anointed Ones"
   },


{
    name: "Sunshine",
    path: "https://od.lk/s/NjBfMTE2MDM1NjgyXw/AUD-20230811-WA0033.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "De Anointed Lyricist ft Shekina Shawn"
   },


{
    name: "We are One",
    path: "https://od.lk/s/NjBfMTE2MDM1Njg4Xw/AUD-20230811-WA0034.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "The Anointed Ones"
   },

{
    name: "Show me your Way",
    path: "https://od.lk/s/NjBfMTE2MDM1Njk3Xw/AUD-20230811-WA0035.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },

{
    name: " Yeshua Worship",
    path: "https://od.lk/s/NjBfMTE2MDM1NzA1Xw/AUD-20230811-WA0036.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },


{
    name: "Nsanane Yesu",
    path: "https://od.lk/s/NjBfMTE2MDM1NzExXw/AUD-20230811-WA0037.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Ambssadors of Glory"
   },


{
    name: "I Am Prophetic",
    path: "https://od.lk/s/NjBfMTE2MDM1NzE4Xw/AUD-20230811-WA0038.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "The Anointed Ones"
   },


{
    name: "Your Grace Dey carry me",
    path: "https://od.lk/s/NjBfMTE2MDM1NzMwXw/AUD-20230811-WA0039.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "The Anointed Ones ft KJV"
   },


{
    name: "Who is Jesus",
    path: "https://od.lk/s/NjBfMTE2MDM1NzM3Xw/AUD-20230811-WA0040.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "The Anointed Ones"
   },

{
    name: "Jesus you reign",
    path: "https://od.lk/s/NjBfMTE2MDM1NzQ1Xw/AUD-20230811-WA0041.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },

{
    name: "Ele Ele Worship",
    path: "https://od.lk/s/NjBfMTE2MDM1NzUzXw/AUD-20230811-WA0042.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen Nubidga"
   },

{
    name: "Lead Me To The Rock",
    path: "https://od.lk/s/NjBfMTE2MDM1NzYwXw/AUD-20230811-WA0043.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Shekina Shawn"
   },


{
    name: "Supernatural",
    path: "https://od.lk/s/NjBfMTE2MDM1NzcwXw/AUD-20230811-WA0044.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "De Anointed lyricist ft KJV"
   },


{
    name: "Voice of Grace",
    path: "https://od.lk/s/NjBfMTE2MDM1ODExXw/AUD-20230812-WA0000.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "....."
   },


{
    name: "I'M On Fire",
    path: "https://od.lk/s/NjBfMTE2MDM1ODIzXw/AUD-20230812-WA0002.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "The Anointed Ones"
   },


{
    name: "You Are holy",
    path: "https://od.lk/s/NjBfMTE2MDM1ODQ2Xw/AUD-20230812-WA0003.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Rev. Karen ft Shekina Shawn"
   },


{
    name: "Messiah You Reign",
    path: "https://od.lk/s/NjBfMTE2MDM1OTUwXw/AUD-20230812-WA0004.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "Shekina Shawn"
   },

{
    name: "Voice of Grace",
    path: "https://od.lk/s/NjBfMTE2MDM2MDM4Xw/AUD-20230812-WA0005.mp3",
    img: "https://i.ibb.co/Zg86csp/D-4-SKj6-XHt-E-HD.jpg",
    singer: "....."
   },

];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/

</script>
