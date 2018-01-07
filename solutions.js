// Exercise: Find the top navbar by query for the element type, which is <nav>.
$('nav');

// Exercise: Find the sidebar on the right by using it's id.
$('#sidebar-right');

// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
$('.pages');
$('.groups');

// Exercise: Find all of the comments on the page.
$('.media-body > div');

// Exercise: Find the first comment on the page.
$('.media-body > div > div > div').first();

// Exercise: Find the last comment on the page.
$('.media-body > div > div > div').last();

// Exercise: Find the first comment nested under the third post.
$('.media-body:nth-child(2) > div > div > div > div')[3];

// Exercise: Find one of the ads in the sidebar and use .hide() to hide it.
$('#sidebar-right > div > div').first().hide();
// Exercise: Use .show() to make the ad that$() you hid in the previous step visible again.
$('#sidebar-right > div > div').first().show();

// Exercise: Use .toggle() to toggle the display of the nav bar at the top of the page.
$('nav').toggle();

// Exercise: Use .attr() to change src attribute of one of the ads in the sidebar. Here's an image source if you need one: http://placebear.com/200/300.
$image = $('#sidebar-right > div > div').first();
$image.attr('src', 'http://placebear.com/200/300');

// Exercise: Find Sam's post and change it's text to something incredible.
$('.post:nth-child(4) > div p').first().text('THIS IS INCREDIBLE');

 // Exercise: Find the first post and use .addClass() to add the .post-liked class to it.
$firstPost = $('.post').first();
$firstPost.addClass('post-liked')
// Exercise: Find the second post and use .removeClass() to remove the .post-liked class.
$secondPost = $('.post:nth-child(2)');
$secondPost.removeClass('post-liked');

// Exercise: Find any post and use .toggleClass() to toggle the .post-liked class.
$secondPost = $('.post:nth-child(2)');
$secondPost.toggleClass('post-liked');
