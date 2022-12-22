document.body.innerHTML =
    '<body><h1></h1><button style="text-align:center;" onclick="initiate()">Analyze sus level</button></body>';
document.body.style.textAlign = "center";
document.body.style.alignContent = "center";

function initiate()
{
    while (true)
    {
        let a = prompt(
            "Welcome to the sus Analyzer\n\nDeveloped by Noel Zemene (+noelzemene@upatoday.com)\n\nInput the full roster name (their name on Schoology) of the person you would like to analyze."
        );
        if (a == null || a == "")
        {
            break;
        }
        else
        {
            let d = confirm("Please confirm you would like to analyze " + a);
            if (d == true)
            {
                alert(a + "'s sus level is: " + calculate(a));
                break;
            }
        }
    }
}

function calculate(input)
{
    return Math.round(Math.random() * 100) + "%"
}
