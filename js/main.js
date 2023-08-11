

let tax = {
    fl : {
        Sale: {"Jacksonvill": 0.075, "Miami": 0.075, "Tampa": 0.08, "Orlando": 0.065, "StPetersburg": 0.07, "Hialeah": 0.07, "PortStLucie": 0.07, 
            "Tallahassee": 0.075, "CapeCoral": 0.065, "FtLauderdale": 0.07, "PembrokePines": 0.07, "Hollywood": 0.07, "Miramar": 0.07, "Gainsville": 0.07, 
            "CoralSprings": 0.07, "Clearwater": 0.07, "PalmBay": 0.07, "Lakeland": 0.07, "PompanoBeach": 0.07, "WestPalmBeach": 0.07, "MiamiGardens": 0.07, 
            "Davie": 0.07, "BocaRaton": 0.07, "Sunrise": 0.07, "Plantation": 0.07, "Deltona": 0.065, "PalmCoast": 0.07, "MiamiBeach": 0.07, "FortMyers": 0.065, 
            "Largo": 0.07, "Weston": 0.07},
        Property: 0.0083,
        Income: {
            Single: {
                "9525": 0.1, "38700": 0.12, "82500": 0.22, "157500": 0.24, "200000": 0.32, "500000": 0.35, "over": 0.37
            },
            Married: {
                "19050": 0.1, "77400": 0.12, "165000": 0.22, "315000": 0.24, "400000": 0.32, "600000": 0.35, "over": 0.37
            },
            Head: {
                "13600": 0.1, "51800": 0.12, "82500": 0.22, "157500": 0.24, "200000": 0.32, "500000": 0.35, "over": 0.37
            }
        },
        IncomeBrack: {
            Single: {
                "0": 9525, "1": 38700, "2": 82500, "3": 157500, "4": 200000, "5": 500000, "6": Number.MAX_SAFE_INTEGER
            },
            Married: {
                "0": 19050, "1": 77400, "2": 165000, "3": 315000, "4": 400000, "5": 600000, "6": Number.MAX_SAFE_INTEGER
            },
            Head: {
                "0": 13600, "1": 51800, "2": 82500, "3": 157500, "4": 200000, "5": 500000, "6": Number.MAX_SAFE_INTEGER
            }            
        }
    }
}

const pay = 150302
const city = "PalmBay"
const Incomed = "Single"
let incomeT = 0
let taxBrack
for (i in tax.fl.IncomeBrack.Married) 
    if (pay - tax.fl.IncomeBrack.Married[i] >= 0) 
        if (i == 0) 
            incomeT += tax.fl.Income.Married[(tax.fl.IncomeBrack.Married[i]).toString()] * tax.fl.IncomeBrack.Married[i]
        else 
            incomeT += tax.fl.Income.Married[(tax.fl.IncomeBrack.Married[i]).toString()] * (tax.fl.IncomeBrack.Married[i] - tax.fl.IncomeBrack.Married[i - 1])
    else {
        incomeT += tax.fl.Income.Married[(tax.fl.IncomeBrack.Married[i]).toString()] * (pay - tax.fl.IncomeBrack.Married[i - 1])
        taxBrack = Number(i) + 1
        break
    }
console.log(incomeT + " = tax payed")
console.log(pay - incomeT + " = after tax")
console.log(taxBrack)