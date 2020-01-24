document.getElementById('well').style.display = 'none';

function submitResult() {    
    
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteUrl').value;
    
    document.getElementById('websiteName').innerHTML = siteName;
    document.getElementById('visit').setAttribute('href', siteURL);
    
    var cloneNode = document.getElementById('well').cloneNode(true);

    var appendNode = document.getElementById('bookmarksResults').appendChild(cloneNode);

    document.getElementById('well').style.display = 'block';
}

function deleteBookmark(e) {
    e.currentTarget.parentElement.parentElement.remove();
}