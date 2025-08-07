let cities = [
  { id: 1, name: "کرج" },
  { id: 2, name: "تهران" },
  { id: 3, name: "شیراز" },
  { id: 4, name: "رشت" },
];

let categories = [
  { id: 1, name: "وسایل نقلیه", icon: "fa-car" },
  { id: 2, name: "خانه و آشپزخانه", icon: "fa-kitchen-set" },
  { id: 3, name: "املاک", icon: "fa-house" },
  { id: 4, name: "کالای دیجیتال", icon: "fa-mobile-screen" },
  { id: 5, name: "استخدام و کاریابی", icon: "fa-briefcase" },
];

let ads = [
  {id : 1 , cityid:1 , categoryid : 1 , title : "یاماها Xmax سـبز مــدل 1404در نیـرو مـوتـور قـرچـک" , price :"112.200" , image : "./assests/images/car1.webp",
    seller : [
      { name:" علی ایمانی", phone : "09125488572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 2 , cityid:1 , categoryid : 1 , title : "هیوندای توسان ix 35 2400cc، مدل ۲۰۱۴" , price :"223.450" , image : "./assests/images/car2.webp",
    seller : [
      { name:" علی ایمانی", phone : "09125488572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 3 , cityid:1 , categoryid : 2 , title : "کیسه دار بند رخت  قفسه دار" , price : "111.732 ", image : "./assests/images/h1.webp",
    seller : [
      { name:" علی ایمانی", phone : "09125488572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 4 , cityid:1 , categoryid : 2 , title : "تخت خواب تکنفره کلاسیک<" , price :" 4589.326", image : "./assests/images/h2.webp",
    seller : [
      { name:" علی ایمانی", phone : "09125488572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 5 ,  cityid:1 ,categoryid : 3 , title : "۵۵متر خوش نقشه/برج نشینی ویو دریاچه‌چیتگر" , price : "256.000", image : "./assests/images/a1.webp",
    seller : [
      { name:" علی ایمانی", phone :"09125488572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 6 ,  cityid:1 ,categoryid : 3 , title : "120 متر / پونک / تک واحدی/ سرمایه گذاری" , price :"563.000 ", image : "./assests/images/a2.webp",
    seller : [
      { name:" علی ایمانی", phone : "09125488572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 7 , cityid:1 , categoryid : 4 , title : "معاوضه و خریدار آیفون همه مدل" , price :"222.000" , image : "./assests/images/m1.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 8 , cityid:1 , categoryid : 4 , title :"گوشی Ao3تمیز" , price : "360.000", image : "./assests/images/m2.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 9 ,  cityid:1 ,categoryid : 5 , title : "فروشنده پوشاک کت و شلوار اقایان" , price :"563.230" , image : "./assests/images/k1.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 10,  cityid:1 ,categoryid : 5 , title : "وردست آرایشگر مردانه" , price : "698.021", image : "./assests/images/k2.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },

  {id : 11 , cityid:2 , categoryid : 1 , title : "۲۰۷ پانا در حد" , price :"112.000" , image : "./assests/images/car3.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 12 , cityid:2 , categoryid : 1 , title : "بی‌ام‌و سری 3 کروک 325i، مدل ۲۰۱۱", price :"223.450" , image : "./assests/images/car4.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 13 , cityid:2 , categoryid : 2 , title : "کاشان کرم ۹ متری" , price : "111.732 ", image : "./assests/images/h3.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 14 , cityid:2 , categoryid : 2 , title : "مبل پینترستی راحتی مبلمان مینیمال مارتیان" , price : "4589.326", image : "./assests/images/h4.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 15 ,  cityid:2 ,categoryid : 3 , title : "128 متر / اباذر/ ویودار / کلید نخورده" , price : "256.000", image : "./assests/images/a3.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 16 ,  cityid:2 ,categoryid : 3 , title : "فرمانیه‌شرقی،۲۶۰مترویوابدی فول مشاعات۳پارکینگ سندی", price :"563.000" , image : "./assests/images/a4.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 17 , cityid:2 , categoryid : 4 , title : "آیفون ۱۶ نرمال حافظه ۱۲۸ CH نو با گارانتی" , price :"222.030" , image : "./assests/images/m3.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 18 , cityid:2 , categoryid : 4 , title : "اپل iPhone 13 Pro Max با حافظهٔ ۲۵۶ گیگابایت" , price : "360.000", image : "./assests/images/m4.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 19 ,  cityid:2 ,categoryid : 5 , title : "سرمایه گذاری درمانگاه فروش سهام وپرداخت ثابت کرج" , price :"563.230" , image : "./assests/images/k3.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 20,  cityid:2 ,categoryid : 5 , title : "کارآموزی و کار حسابداری" , price : "698.021", image : "./assests/images/k4.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },

  {id : 21 , cityid:3 , categoryid : 1 , title : "موتور دایچی 150 ( نیرو موتور )" , price :"112.000" , image : "./assests/images/car5.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 22 , cityid:3 , categoryid : 1 , title : "دانگ فنگ H30 کراس، مدل ۱۳۹۷" , price :"223.450 ", image : "./assests/images/car6.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 23 , cityid:3 , categoryid : 2 , title : "دو عدد کنسول درحد نو فوقالعاده تمیز" , price : "111.732 ", image : "./assests/images/h5.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 24 , cityid:3 , categoryid : 2 , title : "تابلو فرش‌دستبافت منظره" , price :" 4589.326", image : "./assests/images/h6.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 25 ,  cityid:3 ,categoryid : 3 , title : "فروش آپارتمان ۹۴ متری ۲ خوابه در تهران‌سر", price :" 256.000", image : "./assests/images/a5.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 26 ,  cityid:3 ,categoryid : 3 , title : "120 متر / 3 ساله/سرمایه گذاری/تک واحدی" , price :"563.000" , image : "./assests/images/a6.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 27 , cityid:3 , categoryid : 4 , title : "گوشی سامسونگ گلکسی A55" , price :"222.000 ", image : "./assests/images/m5.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 28 , cityid:3 , categoryid : 4 , title : "دوعدد قاب گوشی سامسونگa14" , price : "360.000", image : "./assests/images/m6.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 29 ,  cityid:3 ,categoryid : 5 , title : "کارمند مسلط به اکسل وورد وشبکه های مجازی" , price :"563.230" , image : "./assests/images/k5.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 30,  cityid:3 ,categoryid : 5 , title : "استخدام کارمند با سابقه در آژانس هواپیمایی" , price :" 698.021", image : "./assests/images/k6.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  
  {id : 31 , cityid:4 , categoryid : 1 , title : "لیفان X60 دنده‌ای، مدل ۱۳۹۴" , price :"112.000 ", image : "./assests/images/car7.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 32 , cityid:4 , categoryid : 1 , title : "هیوندای سوناتا YF، مدل ۲۰۱۱" , price :"223.450" , image : "./assests/images/car8.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 33 , cityid:4 , categoryid : 2 , title : "کتابخانه فلزی.روستیک.استند فلزی کد 10" , price :" 111.732" , image : "./assests/images/h7.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 34 , cityid:4 , categoryid : 2 , title : "لوستر غنچه ۶ شاخه سرامیکی" , price : "4589.326", image : "./assests/images/h8.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 35 ,  cityid:4 ,categoryid : 3 , title : "آپارتمان 145 متر چشم نواز و دیزاین شده" , price : "256.000", image : "./assests/images/a7.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 36 ,  cityid:4 ,categoryid : 3 , title : "117 متری 2 خوابه / ویوی دو طرفه / شهرک نفت/پونک" , price :"563.000" , image : "./assests/images/a8.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 37 , cityid:4 , categoryid : 4 , title : "گوشی شیائومی نوت ۱۳ پرو" , price :"222.000" , image : "./assests/images/m7.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 38 , cityid:4 , categoryid : 4 , title : "ایفون 11 حافظه 128" , price : "360.000", image : "./assests/images/m8.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 39 ,  cityid:4 ,categoryid : 5 , title :"استخدام منشی خانم" , price :"563.230" , image : "./assests/images/k7.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
  {id : 40,  cityid:4 ,categoryid : 5 , title : "مسئول پذیرش باشگاه بدنسازی" , price : "698.021", image : "./assests/images/k8.webp",
    seller : [
      { name:" علی ایمانی", phone : "0912 548 8572" , address:"تهران , سعادت آباد" }
    ]
  },
];

if (!localStorage.getItem("selectedCityId")) {
  localStorage.setItem("selectedCityId", "1");
}

let locationdiv = document.getElementById("location");
let locationspan = document.getElementById("selected-city");
let citymenu = document.getElementById("city-menu");
let categorylist = document.getElementById("category-list");
let adscontainer = document.getElementById("ads-container");

function getselectcityid() {
  return Number(localStorage.getItem("selectedCityId"));
}

function getSelectedCityName() {
  let city = cities.find((c) => c.id === getselectcityid());
  return city ? city.name : "انتخاب شهر";
}

function renderselectcity() {
  locationspan.textContent = getSelectedCityName();
}

function rendercitymenu() {
  citymenu.innerHTML = "";

  cities.forEach((city) => {
    let li = document.createElement("li");
    li.textContent = city.name;

    li.addEventListener("click", () => {
      localStorage.setItem("selectedCityId", city.id);
      renderselectcity();
      renderads();
      citymodal.style.display = "none";
    });
    citymenu.appendChild(li);
  });
}

function rendercategories() {
  categorylist.innerHTML = "";

  let divallads = document.createElement("div");
  divallads.className = ` catdiv fa-solid fa-arrow-right `;
  divallads.innerHTML = "<p>همه آگهی ها</p>";
  divallads.onclick = () => renderads();

  categorylist.appendChild(divallads);

  categories.forEach((category) => {
    let catdiv = document.createElement("div");
    catdiv.className = ` catdiv fa-solid ${category.icon}`;
    catdiv.innerHTML = `<p>${category.name}</p>`;
    catdiv.onclick = () => renderads(category.id);

    categorylist.appendChild(catdiv);
  });
}

function renderads(selectedcategoryid = null , searchQuery = "") {
  adscontainer.innerHTML = "";

  let filterads = ads.filter((ad) => {
    let matchcity = ad.cityid === getselectcityid();
    let matchcategory = selectedcategoryid
      ? ad.categoryid === selectedcategoryid : true;
      let matchsearch = ad.title.toLowerCase().includes(searchQuery.toLowerCase()); 
      return matchcity && matchcategory && matchsearch;
  });

  if (filterads.length === 0) {
    adscontainer.textContent = "هیچ آگهی‌ای پیدا نشد.";
    return;
  }

  filterads.forEach((ad) => {
    let adsdiv = document.createElement("div");
    adsdiv.className = "adsdiv";
    adsdiv.innerHTML = `
      <div class="adstitle">
      <h2>${ad.title}</h2>
      <div class="p-title">
      <span>برای دیدن اطلاعات فروشنده کلیک کنید !</span>
      <p> ${ad.price}   تومان</p>
      </div>
      </div>
      <img src="${ad.image}" alt="" style="width: 130px; height: 130px;">
      `;
      adsdiv.onclick= ()=> showsellers(ad.id);
    adscontainer.appendChild(adsdiv);
  });
}

let citymodal = document.getElementById("city-modal");
let cityCloseModal = document.getElementById("close-modal");


locationdiv.addEventListener("click", () => {
  citymodal.style.display = "block";
});

cityCloseModal.addEventListener("click", () => {
  citymodal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === citymodal) {
    citymodal.style.display = "none";
  }
});

function showsellers(adid) {
  let ad = ads.find((a) => a.id === adid);
  let sellermodal = document.getElementById("seller-modal");
  let sellerlist = document.getElementById("seller-list");
  let sellerCloseModal = document.getElementById("seller-close-modal");

  sellerlist.innerHTML = "";

   
    ad.seller.forEach((seller) => {
      let div = document.createElement("div");
      div.className = "sellerdiv";
      div.innerHTML = `
        <p>نام فروشنده: ${seller.name}</p>
        <p>شماره تماس فروشنده:  ${seller.phone.replace(/\s/g, '')}</p>
        <p>آدرس فروشنده: ${seller.address}</p>
      `;
      sellerlist.appendChild(div);
    });
  

  sellermodal.style.display = "block";

  sellerCloseModal.addEventListener("click", () => {
    document.getElementById("seller-modal").style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === sellermodal) {
      sellermodal.style.display = "none";
    }
  });
}

let searchInput = document.getElementById("search"); 

searchInput.addEventListener("input", () => {
  let searchText = searchInput.value.trim();
  renderads(null, searchText); 
});

renderselectcity();
rendercitymenu();
renderads();
rendercategories();
