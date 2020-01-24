// document.getElementById('well').style.display = 'none';

$('#well').hide();

function submitResult() {    
    
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteUrl').value;
    
    document.getElementById('websiteName').innerHTML = siteName;
    document.getElementById('visit').setAttribute('href', siteURL);
    
    var cloneNode = document.getElementById('well').cloneNode(true);       
        
    // var clone = $("#well").val(); 
    var appendNode = document.getElementById('bookmarksResults').appendChild(cloneNode);
    
    $('#well').show();
}