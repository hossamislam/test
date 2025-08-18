$(document).ready(function() {


// Start first task
    $(".hide").mouseenter(()=>{
        $("h1").hide();
    })
    $(".toggle").mouseenter(()=>{
        $("h1").toggle();
    })
    // End first task 
    // start Seconde Task 
    $("#fadein").dblclick(()=>{
        $("h2").fadeIn();
    })
    $("#fadeOut").dblclick(()=>{
        $("h2").fadeOut();
    })
        // End Seconde Task 
// Start Third Task
     $("h3").mouseenter(function() {
        $("#box").slideDown(); 
      });
           $("h3").mouseleave(function() {
        $("#box").slideUp();
      });
    //   End Third Task 
    //  Start forth Task  
   $("#box1").mouseenter(function() {
        $(this).animate({
          width: "250px",
          height: "250px",
          fontSize: "24px",
          borderRadius: "50px"
        }, 600); 
      });
 $("#box1").mouseleave(function() {
        $(this).animate({
          width: "150px",
          height: "150px",
          fontSize: "16px",
          borderRadius: "10px"
        }, 600);
      });

    // end forth Task 

});