$(document).ready(function(){
    $("#colors").click(
        function(event){
            alert(event.target.id.slice(3));
            $("*").removeClass("shadow");
            let targetColor=event.target.id.slice(3);
            $(`li.${targetColor}`).addClass("shadow");

            $("#fruits").on("click", ".star", function () {
                let clickedStar = $(this);
            
                
                                                                        //Remove the gold stars
                clickedStar.parent().find(".star").removeClass("gold");
            
                clickedStar.addClass("gold");            //add gold star
            
                let prevStar = clickedStar.prev();
                while (prevStar.length > 0) {
                  prevStar.addClass("gold");
                  prevStar = prevStar.prev();
                }
              });
            }


    );
});