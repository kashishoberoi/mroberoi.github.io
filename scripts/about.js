function displayAboutMe(id)
{
    var nodisp = document.getElementsByClassName('about-bin');
    var disp = document.getElementsByClassName(id);
    for(var i=0;i < nodisp.length;i++)
    {
        nodisp[i].style.display="none";
    }
    disp[0].style.display="block";
}