  $('.first_letter').click(function() {
    $('.first_content').attr('style', 'display: inline;');
    $('.second_content').removeAttr('style', 'display: none;');
    $('.third_content').removeAttr('style', 'display: none;');
  });
  $('.second_letter').click(function() {
    $('.first_content').removeAttr('style', 'display: none;');
    $('.second_content').attr('style', 'display: inline;');
    $('.third_content').removeAttr('style', 'display: none;');
  });
  $('.third_letter').click(function() {
    $('.first_content').removeAttr('style', 'display: none;');
    $('.second_content').removeAttr('style', 'display: none;');
    $('.third_content').attr('style', 'display: inline;');
  });