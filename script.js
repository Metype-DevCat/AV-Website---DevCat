function populateHeader(unlinked) {
    let links = ["index.html","summary.html","audio.html","video.html","story-writing.html","technology.html"];
  
    let names = ["Home","Summary","Audio","Video","Storywriting", "Technology"];

    let head = $("<div></div>");
    let title = $("<title></title>");
    head.addClass("header");
    let header = $("<div></div>");
    header.addClass("scrollmenu");
    for(let i in links){
      let a = $("<a></a>")
      header.append(a);
      if(unlinked == links[i]){
        title.html("Adamsville A/V - " + names[i]);
        a.addClass("current");
      }else{
        a.attr("href",links[i])
      }
      if(links[i] == links[0]){
        a.html("<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplivCsV01IQK2x5yUzVvPe5Pabg15BQDKfA&usqp=CAU\"/>")
        a.addClass("first");
        a.addClass("img");
      } else {
        a.html(names[i]);
        a.addClass("normal")
      }
    }
    head.append(header);
    $("body").prepend(head);
    $("head").append(title);
  $("head").append($("<link></link>").attr("rel","icon").attr("type","image/x-icon").attr("href","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplivCsV01IQK2x5yUzVvPe5Pabg15BQDKfA&usqp=CAU"))
  }
  
  