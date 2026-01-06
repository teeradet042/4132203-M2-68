<form id="form_blog">
    <input type="text" name="blog">
    <button type="submit">SAVE</button>
</form>
<div id="blog_msg"></div>

<script>
    $("#fm_blog").submit(function(e)){
        e.preventDefault();

        $ajax(
            url:"/php/blog_api.php",
            type:"post",
            data:$(this).serialize(),
            success: function (res){
                $("#blog_msg").html(JSON.stringify(res.message));
                $('#tb')
        })
    }
</script>