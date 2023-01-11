var clear = document.getElementById('clear')
var highScoresDiv = document.getElementById('highscores')


//sort entries in descending order and remove garbage
function sortEntries() {
    let resultArray = []
    for (var item in localStorage) {
        resultArray.push([item, localStorage[item]])   
    }
    console.log('resultArray:', resultArray)
    resultArray.splice(resultArray.length - 6, resultArray.length)
    resultArray.sort(function(a, b) {
        return a[1] - b[1]
    })
    return resultArray.reverse()
}

clear.addEventListener('click', deleteScores) // delete scores when button pressed

writeResults()

function writeResults() {
    var entries = sortEntries()
    highScoresDiv.innerHTML = ""
    for (var i = 0; i < entries.length; i++) {
        var resEntry = document.createElement('li')
        resEntry.innerText = `${entries[i][1]} - ${entries[i][0]}`
        highScoresDiv.appendChild(resEntry)
    }
}

function deleteScores() {
    localStorage.clear()
    writeResults()
}