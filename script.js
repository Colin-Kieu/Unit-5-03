document.getElementById('report').addEventListener('click', reportResults)
/*the event listener will run the report results when the button is clicked, this works because the button has an Id*/
function reportResults() { 
  alert(document.getElementById('input').value)
}
