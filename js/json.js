$(document).ready(function() {

	var url = window.location.href.slice(window.location.href.indexOf('?') + 1);

	$('#search').click(function(){
		window.location="?"+$('#search_text').val();
	});

	if(url != null)
	{
			switch (url)
			{
				case "home" :
                    $('#home').parent('li').addClass('active');
				break;
                case "project" :
                    $('#project').parent('li').addClass('active');
                    $('.project').css('display','block');
				break;
                case "news" :
                    $('#news').parent('li').addClass('active');
                    $('.news').css('display','block');
                break;
                case "about" :
                    $('#about').parent('li').addClass('active');
                    $('.about').css('display','block');
                break;
                case "contact" :
                    $('#contact').parent('li').addClass('active');
                break;
                default :
                    $('#home').parent('li').addClass('active');
                break;
			}
	}

});
