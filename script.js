const searchStation = async () => {
    let res = await fetch("https://real-time-pnr-status-api-for-indian-railways.p.rapidapi.com/name/2749628734",
        {
            method: 'GET',
            headers: {
                	'x-rapidapi-key': '95f1d16b2cmsha3764bf0fd7707dp115fddjsn93574627e853',
		             'x-rapidapi-host': 'real-time-pnr-status-api-for-indian-railways.p.rapidapi.com'

            }
        })
        let data =  await res.json()

        console.log(data)

    let val =document.getElementById("resultsContainer")
    let date = document.createElement("h6")
    let bordinPoint = document.createElement("p")

    

    date.innerText = data.trainName
    bordinPoint.innerText = data.boardingPoint

    val.appendChild(date)
    val.appendChild(bordinPoint)

    document.body.section.div.appendChild(val)

}




const searchTrainNumber = async () => {
    let res = await fetch("https://real-time-pnr-status-api-for-indian-railways.p.rapidapi.com/name/2749628734",
        {
            method: 'GET',
            headers: {
                    'x-rapidapi-key': '95f1d16b2cmsha3764bf0fd7707dp115fddjsn93574627e853',
		             'x-rapidapi-host': 'real-time-pnr-status-api-for-indian-railways.p.rapidapi.com'

            }
        })
        let data =  await res.json()

        console.log(data)

    let val =document.getElementById("resultsContainer")
    let num = document.createElement("h6")


    num.innerText = data.trainName
    val.appendChild(num)

    document.body.section.appendChild(val)

}
const checkPNRStatus= async()=>{
    let res =  await fetch("https://real-time-pnr-status-api-for-indian-railways.p.rapidapi.com/name/2749628734",
        {
            method: 'GET',
            headers: {
                        'x-rapidapi-key': '95f1d16b2cmsha3764bf0fd7707dp115fddjsn93574627e853',
		             'x-rapidapi-host': 'real-time-pnr-status-api-for-indian-railways.p.rapidapi.com'

            }
        })
        let Data = await res.json()
        console.log(Data)

    let val =document.getElementById("resultsContainer")
    let pnrstatus = document.createElement("h6")

    pnrstatus.innerText = Data.chartStts

    val.appendChild(pnrstatus)

    document.body.section.appendChild(val)
}

const searchTrainsBetweenStations = async()=>{
    let res =  await fetch("https://real-time-pnr-status-api-for-indian-railways.p.rapidapi.com/name/2749628734",
        {
            method: 'GET',
            headers: {
                        'x-rapidapi-key': '95f1d16b2cmsha3764bf0fd7707dp115fddjsn93574627e853',
		             'x-rapidapi-host': 'real-time-pnr-status-api-for-indian-railways.p.rapidapi.com'

            }
        })
        let Data = await res.json()
        console.log(Data)

    let val =document.getElementById("resultsContainer")
    let pnrstatus = document.createElement("h6")

    pnrstatus.innerText = Data.trainName

    val.appendChild(pnrstatus)

    document.body.section.appendChild(val)
}