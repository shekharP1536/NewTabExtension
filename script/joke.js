// document
//   .getElementById("DropdownAjoke")
//   .addEventListener("mouseover", getjokes);
document.getElementById("news_load_btn").addEventListener("click", news_feed);
document.getElementById("page_scroll").addEventListener("click", scroll_page);

function update_btn(route) {
  var btn = document.getElementById("news_load_btn");
  if (route == "load") {
    document.getElementById("page_scroll").style.display = "block";
    document.getElementById("news_load_btn").style.display = "none";
    window.scroll(1000, 0);
  }
}
function scroll_page() {
  window.scroll(1000, 0);
}
window.addEventListener("load", () => {
  var data_ls = localStorage.getItem("News");
  construct(JSON.parse(data_ls));
  store_local_news(data_ls);
});


// function getjokes() {
//   var jokeElement = document.getElementById("jokep");
//   jokeElement.innerHTML = "Loading...";

//   fetch("https://icanhazdadjoke.com/slack")
//       .then((data) => data.json())
//       .then((jokedata) => {
//           var joketext = jokedata.attachments[0].text;
//           jokeElement.innerHTML = joketext;
//       });

//   // Remove the event listener after the function is executed
//   document.getElementById("DropdownAjoke").removeEventListener("mouseover", getjokes);
// }

function store_local_news(data){
  var universe = document.getElementById("news_feed_container");
  universe.innerHTML = '';
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      for (let i = 0; i < 40; i++) {
        var new_link = data[key][i].link;
        var new_source = data[key][i].source;
        var new_source_icon = data[key][i].source_icon;
        var img_src = data[key][i].og;
        var news_title = data[key][i].title;

        //console.log(new_source_icon);

        var contianer, main_div, img, title_span, span, img_icon, more, cc_div;

        contianer = document.createElement("div");
        cc_div = document.createElement("div");
        main_div = document.createElement("div");
        img = document.createElement("img");
        title_span = document.createElement("span");
        span = document.createElement("span");
        img_icon = document.createElement("img");
        more = document.createElement("a");

        contianer.className = "news_continer";
        main_div.className = "news_main_div";
        img.className = "news-img-src";
        title_span.className = "title_span";
        img_icon.className = "src_icon_img";
        cc_div.className = "icon_src_holder";

        img.src = img_src;
        more.href = new_link;
        img_icon.src = new_source_icon;
        title_span.innerText = news_title;
        span.innerText = new_source;
        more.href = new_link;
        more.target = "/";
        more.innerText = "More here...";

        contianer.appendChild(main_div);
        contianer.appendChild(img);
        contianer.appendChild(cc_div);
        cc_div.appendChild(img_icon);
        cc_div.appendChild(span);
        contianer.appendChild(title_span);
        contianer.appendChild(more);

        universe.appendChild(contianer);

        document.body.appendChild(universe);
      }
    }
  }
}
// news fetching function
var num = 0;
function news_feed() {
  update_btn("load");
  showMessage("Loading News..");
  if (num <= 0) {
    fetch("https://ok.surf/api/v1/cors/news-feed")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        var news_date = new Date();
        console.log(data);
        var st_data = JSON.stringify(data);
        localStorage.setItem("News", st_data);
        localStorage.setItem("last_updated", news_date);
        show(data);
      });
    show = (data) => {
      var universe;
      universe = document.getElementById("news_feed_container");
      // div.innerHTML = JSON.stringify(data);
      // json = data;
      //console.log("fetch news");
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          for (let i = 0; i < 20; i++) {
            try {
              var new_link = data[key][i].link;
              var new_source = data[key][i].source;
              var new_source_icon = data[key][i].source_icon;
              var img_src = data[key][i].og;
              var news_title = data[key][i].title;

              //console.log(new_source_icon);

              var contianer,
                main_div,
                img,
                title_span,
                span,
                img_icon,
                more,
                cc_div;

              contianer = document.createElement("div");
              cc_div = document.createElement("div");
              main_div = document.createElement("div");
              img = document.createElement("img");
              title_span = document.createElement("span");
              span = document.createElement("span");
              img_icon = document.createElement("img");
              more = document.createElement("a");

              contianer.className = "news_continer";
              main_div.className = "news_main_div";
              img.className = "news-img-src";
              title_span.className = "title_span";
              img_icon.className = "src_icon_img";
              cc_div.className = "icon_src_holder";

              img.src = img_src;
              more.href = new_link;
              img_icon.src = new_source_icon;
              title_span.innerText = news_title;
              span.innerText = new_source;
              more.href = new_link;
              more.target = "/";
              more.innerText = "More here...";

              contianer.appendChild(main_div);
              contianer.appendChild(img);
              contianer.appendChild(cc_div);
              cc_div.appendChild(img_icon);
              cc_div.appendChild(span);
              contianer.appendChild(title_span);
              contianer.appendChild(more);

              universe.appendChild(contianer);

              document.body.appendChild(universe);
            } catch (error) {
              // console.log(error);
            }
          }
        }
      }
      window.scrollBy(0, 400);
      update_btn("up");
    };
    num++;
    //console.log(num);
  }
  ///
}
//     quoteElement.innerHTML = quotetext;});
construct = (data) => {
  var universe;
  universe = document.getElementById("news_feed_container");
  // div.innerHTML = JSON.stringify(data);
  // json = data;
  console.log(data);
  store_local_news(data);
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      for (let i = 0; i < 40; i++) {
        var new_link = data[key][i].link;
        var new_source = data[key][i].source;
        var new_source_icon = data[key][i].source_icon;
        var img_src = data[key][i].og;
        var news_title = data[key][i].title;

        //console.log(new_source_icon);

        var contianer, main_div, img, title_span, span, img_icon, more, cc_div;

        contianer = document.createElement("div");
        cc_div = document.createElement("div");
        main_div = document.createElement("div");
        img = document.createElement("img");
        title_span = document.createElement("span");
        span = document.createElement("span");
        img_icon = document.createElement("img");
        more = document.createElement("a");

        contianer.className = "news_continer";
        main_div.className = "news_main_div";
        img.className = "news-img-src";
        title_span.className = "title_span";
        img_icon.className = "src_icon_img";
        cc_div.className = "icon_src_holder";

        img.src = img_src;
        more.href = new_link;
        img_icon.src = new_source_icon;
        title_span.innerText = news_title;
        span.innerText = new_source;
        more.href = new_link;
        more.target = "/";
        more.innerText = "More here...";

        contianer.appendChild(main_div);
        contianer.appendChild(img);
        contianer.appendChild(cc_div);
        cc_div.appendChild(img_icon);
        cc_div.appendChild(span);
        contianer.appendChild(title_span);
        contianer.appendChild(more);

        universe.appendChild(contianer);

        document.body.appendChild(universe);
      }
    }
  }
  window.scrollBy(0, 400);
  update_btn("up");
};
////
const tabs = document.querySelectorAll("[data-tab-value]");
const tabInfos = document.querySelectorAll("[data-tab-info]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabValue);

    tabInfos.forEach((tabInfo) => {
      tabInfo.classList.remove("active");
    });
    target.classList.add("active");
  });
});

