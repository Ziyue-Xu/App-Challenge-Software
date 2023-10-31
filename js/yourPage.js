//for css
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    })
);


//function
let tax = {
    "fl" : {
        Sale: {"Jacksonvill": 0.075, "Miami": 0.075, "Tampa": 0.08, "Orlando": 0.065, "StPetersburg": 0.07, "Hialeah": 0.07, "PortStLucie": 0.07, 
            "Tallahassee": 0.075, "CapeCoral": 0.065, "FtLauderdale": 0.07, "PembrokePines": 0.07, "Hollywood": 0.07, "Miramar": 0.07, "Gainsville": 0.07, 
            "CoralSprings": 0.07, "Clearwater": 0.07, "PalmBay": 0.07, "Lakeland": 0.07, "PompanoBeach": 0.07, "WestPalmBeach": 0.07, "MiamiGardens": 0.07, 
            "Davie": 0.07, "BocaRaton": 0.07, "Sunrise": 0.07, "Plantation": 0.07, "Deltona": 0.065, "PalmCoast": 0.07, "MiamiBeach": 0.07, "FortMyers": 0.065, 
            "Largo": 0.07, "Weston": 0.07},
        Property: 0.0083,
        Income: {
            "Single": {
                "9525": 0.1, "38700": 0.12, "82500": 0.22, "157500": 0.24, "200000": 0.32, "500000": 0.35, "over": 0.37
            },
            "Married": {
                "19050": 0.1, "77400": 0.12, "165000": 0.22, "315000": 0.24, "400000": 0.32, "600000": 0.35, "over": 0.37
            },
            "Head": {
                "13600": 0.1, "51800": 0.12, "s": 0.22, "157500": 0.24, "200000": 0.32, "500000": 0.35, "over": 0.37
            }
        },
        IncomeBrack: {
            "Single": {
                "0": 9525, "1": 38700, "2": 82500, "3": 157500, "4": 200000, "5": 500000, "6": Number.MAX_SAFE_INTEGER
            },
            "Married": {
                "0": 19050, "1": 77400, "2": 165000, "3": 315000, "4": 400000, "5": 600000, "6": Number.MAX_SAFE_INTEGER
            },
            "Head": {
                "0": 13600, "1": 51800, "2": 82500, "3": 157500, "4": 200000, "5": 500000, "6": Number.MAX_SAFE_INTEGER
            }            
        }
    },
    "ga" : {
        Sale: {"Albany": .08, "Alpharetta": 0.0775, "Athens": 0.08, "Atlanta": 0.089, "Augusta": 0.08, "Columbus": 0.09, "Dalton": 0.0, "Douglasville": 0.07, 
        "Dunwoody": 0.08, "East Point": 0.0775, "Gainesville": 0.07, "Hinesville": 0.08, "Johns Creek": 0.0775, "Mableton": 0.06, "Macon": 0.07, "Marietta": 0.06,
        "Martinez": 0.06, "Milton": 0.08, "Newman": 0.07, "North Atlanta": 0.08, "Peachtree City": 0.07, "Peachtree Corners": 0.06, "Redan": 0.08, "Rome": 0.07,
        "Roswell": 0.0775, "Sandy Springs": 0.0775, "Savannah": 0.07, "Smyrna": 0.06, "Valdosta": 0.08, "Warner Robins": 0.07}, 
        
    },
    "al" : {
        Sale: {"Alebaster": .09, "Anniston": 0.1, "Athens": 0.09, "Auburn": 0.09, "Bessemer": 0.1, "Birmingham": 0.1, "Center Point": 0.1, "Daphne": 0.095,
        "Decatur": 0.09, "Dothan": 0.09, "East Florence": 0.055, "Enterprise": 0.09, "Florence": 0.095, "Gadsen": 0.1, "Homewood": 0.1, "Hoover": 0.095,
        "Huntsville": 0.09, "Madison": 0.09, "Mobile": 0.1, "Montgomer": 0.1, "Northport": 0.1, "Opekila": 0.09, "Oxford": 0.07, "Pelham": 0.09, "Phenix City": 0.095, 
        "Prattville": 0.06, "Prichard": 0.1, "Smiths Station": 0.09, "Tuscaloosa": 0.1, "Vestavia Hills": 0.1},

    },
    "ak" : {
        Sale: {"Anchorage": 0, "Badger": 0, "Bethel": 0.06, "College": 0, "Dutch Harbor": 0, "Eielson Air Force": 0, "Fairbanks": 0, "Fishhook": 0, "Gateway": 0, 
        "Homer": 0.08, "Juneau": 0.05, "Kalifornsky": 0.03, "Kenai": 0.06, "Ketchikan": 0.07, "Knif-Fairview": 0, "Kodiak": 0.07, "Lakes": 0, "Meadow Lakes": 0, 
        "Nikriski": 0.03, "Nome": 0.05, "Nuiqsut": 0, "Palmer": 0.03, "Sitka": 0.05, "Solsotna": 0.06, "Sterling": 0.03, "Tanaina": 0, "Unalska": 0.03, "Utqiagvik": 0, 
        "Valdez": 0, "Wasilla": 0.03,},
        Income: {
            "Single": {
                "9525": 0, "38700": 0, "82500": 0, "157500": 0, "200000": 0, "500000": 0, "over": 0
            },
            "Married": {
                "19050": 0, "77400": 0, "165000": 0, "315000": 0, "400000": 0, "600000": 0, "over": 0
            },
            "Head": {
                "13600": 0, "51800": 0, "s": 0, "157500": 0, "200000": 0, "500000": 0, "over": 0
            }
        },
        IncomeBrack: {
            "Single": {
                "0": 9525, "1": 38700, "2": 82500, "3": 157500, "4": 200000, "5": 500000, "6": Number.MAX_SAFE_INTEGER
            },
            "Married": {
                "0": 19050, "1": 77400, "2": 165000, "3": 315000, "4": 400000, "5": 600000, "6": Number.MAX_SAFE_INTEGER
            },
            "Head": {
                "0": 13600, "1": 51800, "2": 82500, "3": 157500, "4": 200000, "5": 500000, "6": Number.MAX_SAFE_INTEGER
            }            
        }
    }
}
const pay = 150302
const state = "fl"
const city = "PalmBay"
const Incomed = "Married"
let incomeT = 0
let taxBrack
for (i in tax[state].IncomeBrack[Incomed]) {
    if (pay - tax[state].IncomeBrack[Incomed][i] >= 0) 
        if (i == 0) 
            incomeT += tax[state].Income[Incomed][(tax[state].IncomeBrack[Incomed][i]).toString()] * tax[state].IncomeBrack[Incomed][i]
        else 
            incomeT += tax[state].Income[Incomed][(tax[state].IncomeBrack[Incomed][i]).toString()] * (tax[state].IncomeBrack[Incomed][i] - tax[state].IncomeBrack[Incomed][i - 1])
    else {
        incomeT += tax[state].Income[Incomed][(tax[state].IncomeBrack[Incomed][i]).toString()] * (pay - tax[state].IncomeBrack[Incomed][i - 1])
        taxBrack = Number(i) + 1
        break
    }
}


let IncomeAT = pay-incomeT; 
let namer = "in monek i trust";

document.getElementById("namer").innerText = namer.toUpperCase();
document.getElementById("taxBrack").innerText = taxBrack;
document.getElementById("incomeT").innerText = incomeT.toFixed(2);
document.getElementById("state").innerText = state.toUpperCase();
document.getElementById("city").innerText = city;
document.getElementById("incomed").innerText = Incomed;
document.getElementById("incomeAT").innerText = IncomeAT;