const section = document.querySelector('section')
var nav = document.createElement('nav')
section.parentNode.insertBefore(nav, section)
var navHeadlines = document.createElement('ul')
navHeadlines.textContent = "En esta página"
navHeadlines.className = "this-page"
nav.appendChild(navHeadlines)

function addToNav(head){
    // set id for healine
    const headText = head.textContent;
    const id = headText.replace(' ','-');
    const tag = head.tagName.toLowerCase();
    head.id = id
    console.log(head)
    const navHeadlineHref = document.createElement('a')
    navHeadlineHref.textContent = headText
    navHeadlineHref.href = "#"+id
    navHeadlineHref.onclick = "location.href='{{% navHeadline.href %}}'"
    console.log(navHeadlineHref)

    const navItem = document.createElement('li')
    navItem.className = "tag-"+tag
    navItem.appendChild(navHeadlineHref)
    console.log(navItem)
    if (tag=="h1"){
        console.log(navItem)
        navHeadlines.appendChild(navItem)
    }
    else if (tag=="h2"){
        if (navHeadlines.lastChild.lastChild.tagName.toLowerCase() == 'ul'){
            navHeadlines.lastChild.lastChild.appendChild(navItem)
        }
        else {
            const navSubHeadList = document.createElement('ul')
            navSubHeadList.appendChild(navItem)
            navHeadlines.lastChild.appendChild(navSubHeadList)
        }
    }
}
const headlines = document.querySelectorAll('h1,h2')
headlines.forEach(head=>addToNav(head))



//a {
//    font-weight: 400;
//    text-decoration: none;
//}
//
//a:hover, a:active {
//    outline: 0;
//}
//a:focus {
//    outline: thin dotted;
//}
//li {
//    
//    text-align: -webkit-match-parent;
//}
//
//nav ul {
//    list-style: none;
//    list-style-image: none;
//    font-size: 14px;
//    line-height: 24px;
//}
//nav ul li {
//    padding: 5px 0px;
//    line-height: 16px;
//}
//.tag-h1 {
//    font-size: 16px;
//}
//nav ul a:hover {
//    color: #999;