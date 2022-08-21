// document.write("bismillaha");

// 1 parent div ke ander bohat saray div hen jo keh bachay hen,pehley waley bachay ko first child ,or last waley bachay ko lastChild kahayen gey , tamam chalid apas me behan bhai hen ,baray waley bhai ko jo pehley wala ho ga us ko first child kahen gey,or last waley ko last child kahen gey , pehley waley ko  previous sibling ,oor baad waley ko next sibling kahaney gey  ;

// node 

// parentNode div bhi hota hey ,
// child div childNodes bhi ho ga, 

// ise terha firstChild element ,or last child element ki tarha bhi use ho ga 

// var a = document.getElementById("inner").parentElement;
// a = document.createElement("h3");


// var b = document.getElementById("outer").parentElement;
// console.log(b);

// var c = document.body.parentElement;
// console.log(c)

// var a = document.getElementById("inner").parentElement.style.background = "#333";

// inner div se outer div ko target kar ke color chang kia 


// var b = document.getElementById("child-c").parentElement.style.background = "orange";


// ----------------------------------

// parent element me parent tag ko target karey ga ager parent tag na milay to undefind miley ga 

// parent node kuch na kuch return zaroor karey ga ;
// parant nod me parant tag dhoonday ga ,wo na mila do document he return kar dey ga 

// var a = document.getElementById("main").parentNode;

// console.log(a);

// var b = document.getElementById("main").parentElement;

// console.log(b);

// ----------------------------------

// childern or childernNode 

// parent ko le k childern ko target kartay hen 

// var outer = document.getElementById("outer").children;

// console.log(outer);

// var outer = document.getElementById("inner").children;

// console.log(outer);

// kisi 1 childern ko target karney k leye index number de ke kuch bhi kr saktay hen ; 

// var outer = document.getElementById("inner").children[2].style.background = "red";

// var outer = document.getElementById("inner").children[2].innerHTML;

// console.log(outer);

// ---------------------------------- 

// childernNode 

// childern node me childern tag ke sath space jo enter ka button dabanay se a jati hey us ko text show karay ga  or text me data show karay ga ;yeaha tek keh comment jo kia gaya hota hey us ko bhi child ke toor pe shoow karey ga ;

//[0] index enter ka indexnumber dalney pe innerHTML den gey to ye undefined dey ga 


// var outer = document.getElementById("inner").childNodes[0].innerHTML;

// console.log(outer);

// jaha pe comment ho ga wo bhi undefined aye ga 


// var outer = document.getElementById("inner").childNodes[5].style.background="green";

// console.log(outer);


// comment ko bhi utha ke le aye ga 

// var outer = document.getElementById("inner").childNodes[3];

// console.log(outer);
// ----------------------------------
// FIRSTCHILD 
// FIRSTELEMENTCHILD
//  LASTCHILD
//  LASTELEMENTCHILD


// firstElementChild


// var firstChild = document.getElementById("inner").firstElementChild.style.background="green";


//  var firstChild = document.getElementById("inner").firstElementChild;

//  console.log(firstChild);

// ----------------------------------
// lastElementChild


// var lastChild = document.getElementById("inner").lastElementChild.style.background="green";

// console.log(lastChild);


//  var lastChild = document.getElementById("inner").lastElementChild;

//  console.log(lastChild);

// -------------------------------
// firstChild
// first child me text dekhay ga jo keh space ,comment ,ya enter bhi ho saktea hey ;space ki styling nahi ho sakti or is ko set karney pe error aye ga 

//  var firstChild = document.getElementById("inner").firstChild;

//  console.log(firstChilast
// -------------------------------
// lastChild

// last child me text dekhay ga jo keh space ,comment ,ya enter bhi ho saktea hey ;space ki styling nahi ho sakti or is ko set karney pe error aye ga 

//  var lastChild = document.getElementById("inner").lastChild;

//  console.log(lastChild);

// ----------------------------------
// nextElementsibling
// nextsibling 
// previousElementsibling 
// previoussibling 
// ----------------------------------
// nextElementsibling

// se murad aagay wala tag 

//  var a = document.getElementById("child-c").nextElementSibling;

//  console.log(a);

//  var a = document.getElementById("child-c").nextElementSibling.style.background="green";

//  console.log(a);

// ----------------------------------
// previousElementSibling

// se murad back wala tag 

// var a = document.getElementById("child-c").previousElementSibling;

// console.log(a);

// var a = document.getElementById("child-c").previousElementSibling.style.background="green";

// console.log(a);

// ----------------------------------
// previousElementSibling

// var a = document.getElementById("child-c").previousElementSibling;

// console.log(a);

// var a = document.getElementById("child-c").previousElementSibling.style.background="green";

// console.log(a);

// ----------------------------------

// creatElement
// createTextNode
// createComment 

// ----------------------------------
// javascript se koi bhi tag dal saktay hen 

// creatElement 

// var createlement0 = document.createElement("a");

// var createlement1 = document.createElement("ul");

// var createlement2 = document.createElement("li");

// console.log(createlement0);
// console.log(createlement1);
// console.log(createlement2);

// ----------------------------------

// createTextNode 

// javascript se koi bhi text dal saktay hen document me kahen bhi ,or text ki koi limit nahi ho gi 

// var newText = document.createTextNode("this is a para");

// console.log(newText);

// var newText = document.createTextNode("my name is nasirhanif");

// console.log(newText);

// ---------------------------------- 

// createComment 

// javascript ki madad se koi bhi comment dal saktay hen 


// var creatComment = document.createComment("i am comment");

// console.log(creatComment);


// var creatComment = document.createComment("this is a comment");

// console.log(creatComment)


// ---------------------------------- 
// dom append methods appendChild 
// javascript ki file me kisi tag me text ko append karta hey , ya tag key ander tag ko ,
// ya or phir document me print karney key leye 
// bhi kisi bhi tag, text , comment , ko print karney k leye use hota hey ;bhaley ap kisi tag me text ko append ker len ya ;
// phir tag , text , comment ko document me append ker len  




// var newtag = document.createElement("h2");

// var newtext = document.createTextNode("creat first tag and append text");

// newtag.appendChild(newtext);

// document.getElementById("creat").appendChild(newtag);

// ----------------------------------  
// insertBefore

// appandhild docoment me end me tag ko print karta tha ;

// insertBefor docoment me pehleley tag ko print karta hey is me childNode ka index number bhi dena parta hey 


// kis jagha pe ,kis se pehley creat kia gaya headding or text ko appendChild ke baad kis jagha dekana hey us ki posetion hendel karney k leye pehley jis div ya kisi or tag me laganey k leye os div ko 1 vareable me stor kia jata hey phir  insertbefore method lagaya jata hey 
// or insertBefore method me 3 chezen dene hoti hen no 1 jo insert karna hey us ka vareable name phir wo vareable jis me koi div ki maloomat hen or phir us div key child nod me index number dena ho ga 


// var newtag = document.createElement("h2");

// var newtext = document.createTextNode("creat first tag and append text");

// newtag.appendChild(newtext);

// var targetposition = document.getElementById("creat");

// targetposition.insertBefore(newtag,targetposition.childNodes[0])


    //   EXEMPLE :2 

    // insertBefore kisi vareable ki value jo keh object ho us ko print karwata hey na key 
    // kisi vareable ki value jo keh string ho us ko na to print karwata hey na location deta hey 

// var text = document.createTextNode("nasir hanif")

// var target = document.getElementById("test")

// target.insertBefore(text,target.childNodes[0])
// console.log(typeof text)

// ---------------------------------- 
// insertAdjaccentElement
// insertAdjaccentHTML
// insertAdjaccentText 


// appendChild or insertBefore 
// kisi alement ko ya text ko ya comment ko jo keh pehley se bana hota tha us ko append kartey hen ;
// pehley se moojood kisi bhi element me koi bhi text ya koi or tag ya comment ko append karta hey yeani mix karta hey exemple : 1 tag hey us  paragraph me text append ker dena , 
// ya koi list hey hey us key li tag me text shamil kr dena 

// exemple:kaheen pe tag dalna hey jesa keh elemeneter me hota hey us me kaheen pe tag dalna ho ya text dalna ho ya comment dalna ho indeveusele to us ko append karney ke leye ya tag or string ko malaney k leye use hota hey 


// jab keh hamaay to docment me tag ke ander 1 sath text bhi lode karna hota hey 
// creat& append bhi kartay hen ,jis se hamara bohat sa time bach jata hey 
// ---------------------------------- 
// insertAdjaccentElement 

// is case me tage ko creat karna or append karta hey 

// var newElement = document.createElement("h2");
// var newText = document.createTextNode("my name is nasir");
// newElement.appendChild(newText);

// var creat= document.getElementById("test");
// creat.insertAdjacentElement("beforebegin",newElement);
 
// ---------------------------------- 
// insertAdjaccentHTML

// is case me paragraph creat bhi karay ga or sath me is ka text bhi creat kr
//  de ga 
// var target = document.getElementById("test");

// target.insertAdjacentHTML("afterbegin","<h2>nasirhanif</h2>")


// ---------------------------------- 
// insertAdjaccentText 


// text node ko creat bhi karey ga or append bhi 
// karey ga 

// var target = document.getElementById("test");

// target.insertAdjacentText("beforeend","my name is nasir")



// ---------------------------------- 
// beforebegin
// afterbegin
// beforeend
// afterend
// ---------------------------------- 
// beforebegin
// kisi bhi div , p , se pehley banaye gaye tag bama text ko append karey ga 

// var target = document.getElementById("test");

// target.insertAdjacentHTML("beforeBegin","<p>my mame is nasir</P>")


// // ---------------------------------- 
// // afterbegin
// kisi bhi div , p ,me start me yeayne [0]
// pe append karey ga nod element ko 

// var target = document.getElementById("test");

// target.insertAdjacentHTML("afterbegin","<h2>nasir hanif</h2>");

// // ----------------------------------

// // beforeend
// kisi bhi div , p ,me jo content mojood hey 
// us key baad append karey ga element

// var target = document.getElementById("test");

// target.insertAdjacentHTML("beforeend","<p>my name is nasir</p>")

// // ---------------------------------
// // afterend
// kisi bhi div , p ,key khatoom honey key baad 
// yeayne div se bahir append karey ga element

// var target = document.getElementById("test");

// target.insertAdjacentHTML("afterend","<p>i am paragraph</p>")

// // ---------------------------------
// replaceChild()

// removeChild()

// // ---------------------------------
// replaceChild()


// html file me javascript key zarye ager kisi tag ko ya text ko chang karna chahtey hen to replace() , method use karen gey 

// pehley jo element lagana hey us ko bananay k leye creatElement kar key us me jo text lagana hey wo text creat ker ke vareable me save ker den 
// or jo element creat kia hey us ko or jo text ko creat kia hey us vareable ko append kana hey ta keh tag me text a jaye 

// phir jis tag ko target karna hey us ko bhi vareable me store karen 
// us ke baad jis tag ko target kia gaya hey us vareable me se jis child ko target karna hey us ki index number bhi 1 vareable me stor karna ho gi 

// phir jo tag target kia gaya hey jis tag me tabdeli karni hey  us key vareable ko lena hey or us pe replace child lagana hey 
// replace child keeey()
// me  2 vareable bataney hotay hen 1 wo vareable batana hey jis me hum ne new tag bana ke rakha huva hey ,or dusara vareable wo dena hey jis me hum ney child index rakha hey jis ko chang karna hey


// var creatEle = document.createElement("li");

// var creatText = document.createTextNode("japani phal");

// creatEle.appendChild(creatText);

// var target = document.getElementById("list");

// var oldElement = target.children[0];

// target.replaceChild(creatEle,oldElement)

    //    exemple 2

    // // Select first child element:
    // const element = document.getElementById("list").children[0];
    
    // // Create a new text node:
    // const newNode = document.createTextNode("Water");
    
    // // Replace the text node:
    // element.replaceChild(newNode, element.childNodes[0]);
    


// // ---------------------------------

// removeChild() vs remove()

// html page me javascript ke zarye kisi tag ya text node ko remove karney k leye remove child() use ho ga 
// remove me sirf wo perameter dena hey jis ko remove karna hey 

// jis tag ko ya tag ke ander kisi children me se kisi child ko remove karna ho to us child ka index number dena hota hey 
// jis tag ko  ya us me kuch remove karna hey us ko pehley likhana hey us ko remove method laga ke us me target kiya gaya Element ka vareable dena ho ga 


// const element = document.getElementById("list").children[1];

// const oldelement = document.getElementById("list")
// oldelement.removeChild(element)


// ---------------------------------

// dom clone Node()
// clone node me kisi bhi tag ko ya us key kisi child ko clone kar saktay hen copy kr saktay hen ,
// pehley jis elemen ko ya childern ko copy karna hey us ko target kar ke vareable me stor ker len gey ;
// phir target kiye huve vareable ko .clone karen gey or us ki (true ya false den gey);
// by defalt value false hoti hey ager (false ) ho ga to sirf tag ko he colone karey ga or sath me us key atrebute ko copy karey ga  ;
// or ager (true) ho ga to tag key sath text ko bhi clone karey ga 

// target kia us tag ko jis se data lane hey



// const target = document.getElementById("list").children[1];

// // false condesition onley tag clon
// var copyelement = target.cloneNode(false)

// // true condesition tag and trxt clon
// var copyelement = target.cloneNode(true)

// // console.log(copyelement)

// // ab target karen gey us tag ko jis me value past karni hey or wo vareable jo past karna hey 

// var paste = document.getElementById("list2").appendChild(copyelement)

// --------------------------------- 
// dom contains()

// contains ka matlab kisi bhi tag me id ko ya class ko talash karen ;
// wo us tag me childern ho ya grand childern ho  or ager wo mojood ho to true aye ga or ager na ho to false aye ga 

// jis div me se talashi lene hey us ko vareable me stor kia 

// var target = document.getElementById("test");

// // div me jis  id ka name  find karney se pehley us id name ko vareable me stor ker lena hey  

// var findid = document.getElementById("test3");

// // result jo aye ga us ko bhi vareable me stor kar lena hey jo return me aye ga 

// var result = target.contains(findid);


// console.log(result)

// --------------------------------- 
// Dom has attribute 

// kisi bhi div me us key attribute ko check karney key leye has attribute use kia jata hey attrebute me value hey ya nahi is se has attrebute ka koi sarokar nahi ,has attrebute ne condesition check karni hey or fals ya true me bollean condesition dene hey ;
// attrebute class bhi ho sakti hey ya koi or attrebute bhi ho sakta hey 

// jis tag ko target kia ja raha hey sirf us tag me lagaye huve attrebute ko check karey ga na keh childern ya grand childern me lagay huvey attrebute ko 

// // jis tag me attrebute find karna he us tag ko vareable me stor karna ho ga 

// var target = document.getElementById("test");

// // jis attrebute ko find karna he us ka name den gey

// var find = target.hasAttribute("class")

// console.log(find)

// --------------------------------- 
// haschildernNode();

// kisi bhi tag me ya div me childern node find karey ga "ager space ya enter bhi ho gi tab bhi true aye ga ";

// // is me anser false ya true aye ga 

// var target = document.getElementById("test");

// var findChildNode = target.hasChildNodes();

// console.log(findChildNode)

// --------------------------------- 

// dom isEqualNode()

// is equal node ka matlab 2 1 jesey tag ke dermeyan node campear karna jin 2 tag me compear kia ja raha hey wo 1 jesey hen k nahe ,compear karney ke bohat sare type hen or zeada ter type me false ya true he milay ga bolean value he milay gi ;

// var target1 = document.getElementById("list_1").firstElementChild;
// var target2 = document.getElementById("list_2").firstElementChild;

// var result = target1.isEqualNode(target2)

// console.log(result)
// ===================================
        //  exemple2

// var target1 = document.getElementById("list_1").firstElementChild;
// var target2 = document.getElementById("list_2").children[1];

// var result = target1.isEqualNode(target2);

// console.log(result);


//  dom isEqualNode() check karney k bohar sarey method hen 
// compear method        result 
// same Node type      true , false
// same node name      true , false
// same node value     true , false
// same child node     true , false
// same attributes     true , false
// same attribute value   true , false

// --------------------------------- 
// same Node type 
// same type se murad 2 tag 1 jesey honey chahey 
// peragrap ko peragrap he type hone chahey ;
// list hey to dono ka comperesition list type he hona chehey ;warna false aye ga 

// var target1 = document.getElementById("list_1").firstElementChild;
// var target2 = document.getElementById("list_2").children[2];

// var result = target1.isEqualNode(target2)

// console.log(target1)
// console.log(target2)
// console.log(result)

// --------------------------------- 
// same node name 

// is ka matlab hey li ko li se he compear karna hey na keh peragraph se dono taraf ka tag1 jesa hona chahey ;  warna false aye ga 


// --------------------------------- 
// same node value 
//  is ka matlab hey li ko li se he compear karna hey na keh peragraph se dono taraf ka tag 1 jesa hona chahey or in me majood value bhi 1 jesi same honey chahey ;warna false aye ga ; jis ko check kia ja raha hey us me attribute 1 jese honey chahey ,ager class lagi hey or us ki value bhi same honei chahey ;
//  100% same hona chahey 
// attribute ki value 
// alfabet bara chota ho ga tab bhi false ho jaye ga

// --------------------------------- 
// // same child node
// // 2 list ke child 1 jesey honey chahey 1;
// // taraf list ka li tag hey to dosare taraf bhi li tag hona chahey na keh li me peragraph
// ;warna false aye ga 

// --------------------------------- 
// same attributes
// ager 1 tag me jo class name ka attrebute laga huva hey to dosarey tag me bhi class name ka attribute laga hona chahey;warna false aye ga  

// --------------------------------- 
// same attribute value

// ager 1 tag me attribute ki value jo hey wo value dosarey tag key attribute me bhi value 1 jese hone chahey  ;warna false aye ga  
// 1 tag me class ki jo value hey wo dosrey tag 
// ki class me bhi honey chahey 

// --------------------------------- 
// foram event

// keyDown;            select ;
// keypress;           Submit;
// keyup ;            invalid;
// focus();
// blur();
// Input;
// Change;

// --------------------------------- 

// focus();

// jab input me click karney pe curser dekhai dey ga is ka matlab hey keh fucus ye input filed hey
// focus ko input selectbox or ancertag pe bhi laga saktay hen 



// function focusFunction(element){
//     element.style.background = "lime"
// }

// function blurFunction(element){
//     element.style.background = ""
// }
// -------------- 

// focus event use add event listner 

// const x = document.getElementById("inputfucus");
// x.addEventListener("focus",focusok)

// x.addEventListener("blur",blurok);

// function focusok(){
//     x.style.background = "lime";
// }
// function blurok(){
//     x.style.background = "";
// }



// --------------------------------- 
// form target
// html page lode honey key baad ager koi value get karen gey ko to html me jo bhi ho ga wo delete ho ga or jo value ya event karwaya ho ga wo agley page pe aye ga ;
// is ki waja ye hey keh docoment.write me jo ap likhayn gey wo docment load honey pe document me write ho ke aye Ga;
// ager document lode ho gaya or baad me direct document me kisi event ke zarye document write kia to wo html ko delete ker ke phir dubara pag lode ho ga ou us document me jo write karwana tha wo likha aye ga ;

// ager document lode ho gaya us me koi write baad me karen gey to tamam html delete ho ke phir write ho ga 



// function okvalue(){
       
//     let name = document.form1.text.value;
//     document.write(name)
//  }

// --------------------------------- 
// new window open and write document

// pehley to 1 button banay gey jis ka type button hona chahey lazmi toor pe , phir jis function ko cal karna ho us ko us ka on click event cal karen button me ;
// phir jo function banayen us me 1 vareable banayen our us me new window openfunction karney ka function ko save karen ;
// phir wo vareble len jis me window open ka function hey us ke ander document ke ander write karen lazmi

// function addNow(){
//       let newDoc = window.open() 
//       newDoc.document.write("nasir ");
//       newDoc.document.write("hanif");
//  }
// --------------------------------- 
        //  exemple 2 
        // function addNow() {
        //     const myWindow = window.open();
        //     myWindow.document.open();
        //     myWindow.document.write("<h1>Hello World!</h1>");
        //     myWindow.document.close();
        //   }
// ---------------------------------

// docment.writeline method 



// document.write("docment write mode");

// // document.write(" <br />");
// document.write("docment write mode ");

// // document.write(" <br />");

// document.writeln("docment.write line mode ");
// document.writeln("docment.write line mode ");

// ---------------------------------
// oninput


// jab input type me kuch bhi enter karen gey to function worak karey ga jo bhi input me ho ga wo kisi div me print ho ga 

// function focusFunction(element){
//     element.style.background = "lime"
// }

// function blurFunction(element){
//     element.style.background = ""
// }

// function writevalue(element){
//     let getvalue = element.value; 
//     document.getElementById("print").innerText = getvalue;
// }

// -----------------------------