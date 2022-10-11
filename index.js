$(".delete").click(function(){
    console.log("prepare for termination");
    var id = $(this).attr("id");
    fetch(`name/name_id:${id}`, {
        method:"delete",
        headers: {'Content-Type': 'applications/json'}
      })
    
    })