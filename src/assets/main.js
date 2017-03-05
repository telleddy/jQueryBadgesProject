



$(function() {


$.ajax({
  url:'https://www.codeschool.com/users/3305031.json',
  dataType:'jsonp',
  success:function(response){
    //transform the array of objects into html elements
    var courseArray = response.courses.completed;
    var courseElements = $.map(courseArray,function(course,i){
    var listItem = $('<div></div>',{'class':'course'});
    $('<h3>'+course.title+'</h3>').appendTo(listItem);
    $('<img>',{'src':course.badge}).appendTo(listItem);
    $('<a></a>',{
      'class':'btn btn-primary',
      'text':'See Course',
      'href':course.url,
      'target':'_blank'
    }).appendTo(listItem);
    return listItem;
    });
    //detach the elements and reinsert them
    $('#badges').detach().html(courseElements).appendTo($('.container'));
  }
});
});
//failed 1st time because of a missing dollar sign
//failed 2nd time because of adding class through listItem.addClass('course')
//failed 3rd time because of using $('img').closest('div').addClass('course')
//succeed by adjusting my code of the method in the video
/*

$.ajax({
  url:'https://www.codeschool.com/users/3305031.json',
  dataType:'jsonp',
  success:function(response){
    var courses = response.courses.completed;
    addCourses(courses);
}


});
function addCourses(courses){
var $badges = $('#badges');
courses.forEach(function(course){
var $course = $('<div />',{'class':'course'}).appendTo($badges);
$('<h3 />',{'text':course.title}).appendTo($course);
$('<img />',{'src':course.badge}).appendTo($course);
$('<a />'.{
  'class':'btn btn-primary',//class property comes first or error occurs
  'text':'See Course',
  'href':course.url,
  'target':'_blank'
}).appendTo($course));

});

}

*/
