$(".delete").click(function(){
    console.log("prepare for termination");
    var id = $(this).attr("id");
    fetch(`name/name_id:${id}`, {
        method:"delete",
        headers: {'Content-Type': 'applications/json'}
      })
    
    })
    $(".update").click(function(){
        console.log("update button clicked");
        var id2 = $(this).attr("id");
        fetch(`name/name_id:${id2}`, {
            method: "put",
            header: {'Content-Type': 'applications/json'}
          })
        
        })