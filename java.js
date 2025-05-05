$(document).ready(function() {
    $("#addTask").click(function() {
        let input = $("#taskInput").val();
        
        if (input === "") return; 
        
        $("#taskList").on("click", "li button",
            e => $(e.target).closest('li').remove()
        );
    
        $("#taskList").append('<li><input id="checkbox" type="checkbox">' + input + '<button class="del">Delete</button>' + '</li>');
    
        $("li").css("list-style", "none").css("margin-bottom", "10px").css("margin-top", "20px");
        $(".del").css("margin-left", "20px");
    
        $('input[type="text"]').val('');

        let checkbox = $('input[type="checkbox"]').val();
        if (checkbox === 'on') {
            $('input[type="checkbox"]').on("click",
                e => $(e.target).closest('li').css('color', 'yellow')
            );
        } 
    })
})