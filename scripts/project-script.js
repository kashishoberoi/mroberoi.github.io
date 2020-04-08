function listProjects(projectid)
{
    var projectBtnClean = document.getElementsByClassName('project-name-btn');
    for(var i=0;i < projectBtnClean.length;i++)
    {
        projectBtnClean[i].style.display="none";
    }
    var projectCattext = document.getElementsByClassName('project-topic-btn')[projectid].id;
    document.getElementById('project-cat-text').innerHTML = String(projectCattext);
    var projectCat = document.getElementsByClassName('project-name')[projectid];
    var projectBtn = projectCat.children;
    for(var i=0;i < projectBtn.length;i++)
    {
        projectBtn[i].style.display="block";
    }
}

function projectDisplay(projectId)
{
    var projectBtnClean = document.getElementsByClassName('project-bin');
    for(var i=0;i < projectBtnClean.length;i++)
    {
        projectBtnClean[i].style.display="none";
    }
    document.getElementById(projectId).style.display='block';
}