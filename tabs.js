function tabOff()
{
    var btns = document.getElementsByClassName("tab-button");
    var tabs = document.getElementsByClassName("tab");

    for(var i = 0; i < Math.min(btns.length, tabs.length); i++)
    {
        var btn = btns[i];
        var tab = tabs[i];

        if(btn.classList.contains("tab-button-active"))
        {
            btn.classList.remove("tab-button-active")
        }

        if(!tab.classList.contains("hidden"))
        {
            tab.classList.add("hidden")
        }
    }
}

function tab(sender)
{
    tabOff();

    var tab = document.getElementById(sender.id.replace("btn", "tab"));

    if(!sender.classList.contains("tab-button-active"))
    {
        sender.classList.add("tab-button-active");
    }

    if(tab.classList.contains("hidden"))
    {
        tab.classList.remove("hidden");
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    tabOff();
});