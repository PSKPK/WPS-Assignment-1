function change(ele){
  const lis=[
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/01/02/17/ironman.marvel.jpg?width=982&height=726&auto=webp&quality=75",
    "https://static.wikia.nocookie.net/marvel-cinematic/images/3/32/Steve_Rogers_2.jpg/revision/latest?cb=20131025030358",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsi5-WyoK6Yz7TXr4sO77hkChY_1DoYKrYxYswNa5xUWSkbOYPnTJ0-t2160NQHGaon0o&usqp=CAU"
  ]
  ele.src=lis[parseInt(ele.id)-1]
}

function back(ele){
  const lis=[
    "https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",
    "https://cdn.vox-cdn.com/thumbor/FEawP_AqJiJxEQhXS_Vt7R2x5po=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969337/spiderman_homecoming_movie_screencaps.com_7984.jpg",
    "https://media.wired.com/photos/5963bb93fd4c067111b11c04/125:94/w_1124,h_845,c_limit/Spiderman-FeatureARt.jpg"
  ]
  ele.src=lis[parseInt(ele.id)-1]
}
