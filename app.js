$(document).ready(function() {
    // Pobierz cytaty z pliku JSON
    $.getJSON("cytaty.json", function(data) {
      var quotes = data.quotes;
      var numOfQuotes = quotes.length;
  
      // Ustaw datę początkową na dzisiejszą
      var today = new Date().toLocaleDateString();
      // Oblicz indeks cytatów na podstawie daty
      var quoteIndex = parseInt(today.replace(/\D/g,'')) % numOfQuotes;
  
      // Wyświetl pierwszy cytat
      $("#quote").text('„' + quotes[quoteIndex] + '”');
  
      // Funkcja, która będzie wywoływana co 24 godziny
      setInterval(function() {
        // Zwiększ indeks cytatów o 1
        quoteIndex = (quoteIndex + 1) % numOfQuotes;
        // Wyświetl kolejny cytat
        $("#quote").fadeOut(500, function() {
          $(this).text(quotes[quoteIndex]).fadeIn(500);
        });
      }, 24 * 60 * 60 * 1000);
    });
  });
  