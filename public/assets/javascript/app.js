$("document").ready(function(){

  // hide form for adding events on load
    $('#addEventForm').hide();
    $('.hiddenBtns').hide();
    $('#searchTerm').hide();

  $('.form-inline').submit(function () {
    return false;
    });

  $('#searchBtn').on("click",function(){
    var searchText = $("#searchF").val();
    $("#searchTerm").show();

// *************************************************************
var spreadsheetID = "11cJPysNTLI8NziYjA2wiTHijEQIaMt1CZXDq27OnZso";

// Make sure it is public or set to Anyone with link can view
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

$.getJSON(url, function(data) {

 // var entry = data.feed.entry;
 // console.log(entry );

 // $(entry).each(function(){
 //     // Column names are name, age, etc.
 //   $('.results').prepend('<h2>'+this.gsx$date.$t+'</h2><p>'+this.gsx$totalsteps.$t+'</p>');
 // });

});
// **************************************************************

    if (searchText=="") {
      // if empty show all the appointments
      $.get( url, function( data ) {
        console.log(data.feed.entry);


        //display all appointments with DATA
        $('.eventTable').DataTable( {

          data: data.feed.entry,
        "ordering": false,
        "info":     false,
          columns: [
        { data: 'gsx$date.$t' },
        { data: 'gsx$totalsteps.$t' }
        // { data: 'description' },
            ]
          } );

        });

    } else {
      var lookup = '/search/'+ searchText;

      $.get(lookup, function(data){

        $('.eventTable').DataTable( {
        data: data,
        "ordering": false,
        "info":     false,
          columns: [
        { data: 'date' },
        { data: 'time' },
        { data: 'description' },
            ]
          } );
      })
    }
  })

  $("#addEventBtn").on("click",function(){
      $("#addEventBtn").hide();
      $(".hiddenBtns").show();
      $("#addEventForm").show('slow');

  })//end of addEventBtn function

    $('#cancelBtn').on('click',function(){
      $("#addEventBtn").show();
      $("#addEventForm").hide();
      $(".hiddenBtns").hide();

    }) //end of cancelBtn function

    $('.nobacgr').on("click", function(){
      console.log("fuckyou!")
    })


}) //end of document.ready
