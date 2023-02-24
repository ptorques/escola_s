const iframecontent = document.getElementById("iframe")
const selectoroption = document.getElementById("selector")

showgraph = () => {
    if (selectoroption.value == "aus") {
        iframecontent.innerHTML = "<iframe src='https://data.worldbank.org/share/widget?end=2021&indicators=FP.CPI.TOTL.ZG&locations=AU&start=1960&view=chart' width='600' height='400' frameBorder='0' scrolling='no' ></iframe>"
    }
    else if (selectoroption.value == "br") {
        iframecontent.innerHTML = "<iframe src='https://data.worldbank.org/share/widget?end=2021&indicators=FP.CPI.TOTL.ZG&locations=BR&start=2000&view=chart' width='600' height='400' frameBorder='0' scrolling='no' ></iframe>"
    }
    else if (selectoroption.value == "eua") {
        iframecontent.innerHTML = "<iframe src='https://data.worldbank.org/share/widget?end=2021&indicators=FP.CPI.TOTL.ZG&locations=US&name_desc=false&start=1960&view=chart' width='600' height='400' frameBorder='0' scrolling='no' ></iframe>"
    }
    else if (selectoroption.value == "uk") {
        iframecontent.innerHTML = "<iframe src='https://data.worldbank.org/share/widget?end=2021&indicators=FP.CPI.TOTL.ZG&locations=GB&name_desc=false&start=1960&view=chart' width='600' height='400' frameBorder='0' scrolling='no' ></iframe>"
    }
    else if (selectoroption.value == "ger") {
        iframecontent.innerHTML = "<iframe src='https://data.worldbank.org/share/widget?end=2021&indicators=FP.CPI.TOTL.ZG&locations=DE&name_desc=false&start=1960&view=chart' width='600' height='400' frameBorder='0' scrolling='no' ></iframe>"
    }
    

}