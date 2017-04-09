$(document).ready(function() {
  var term = "";
  var startURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  var endURL = "&format=json&callback=?";
  var completeURL = "";
  function searchTerm(event) {
    $.getJSON(completeURL, function(response) {
      for(var i=0; i<response[1].length; i++){
        document.getElementById('info').innerHTML = "<li><a href =" +response[3][0]+ ">"+response[1][0]+"</a><p>"+response[2][0]+"</p></li>";
      }
      console.log(response);
    });
  }
  
  $('#searchTerm').keyup(function(){
    term = $(this).val();
    completeURL = startURL + term + endURL;
  });

  $('#search').on('click', searchTerm);
});
