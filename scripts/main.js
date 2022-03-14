const section = document.querySelector('section')
var nav = document.createElement('nav')
section.parentNode.insertBefore(nav, section)
var navHeadlines = document.createElement('ul')
navHeadlines.textContent = "En esta página"
navHeadlines.className = "this-page"
nav.appendChild(navHeadlines)

const headlines = document.querySelectorAll('h1,h2')

function addToNav(head){
    // set id for healine
    const headText = head.textContent
    const id = headText.replace(' ','-')
    const tag = head.tagName.toLowerCase()
    head.id = id

    const navHeadlineHref = document.createElement('a')
    navHeadlineHref.textContent = headText
    navHeadlineHref.href = "#"+id
    navHeadlineHref.onclick = "location.href='{{% navHeadline.href %}}'"

    const navItem = document.createElement('li')
    navItem.className = "tag-"+tag
    navItem.appendChild(navHeadlineHref)

    if (tag=="h1"){
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