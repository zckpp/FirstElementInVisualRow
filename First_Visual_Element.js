  // Find the first element in each visual row and do something

  // Collect all elements
  var $elems = $('.Target-item');
  // Mark the first element
  var $prev = $elems.eq(0);
  $elems.slice(1).each(function () {
    var $elem = $(this);
    // If the 'top' value changed, it's in the second row
    if ($elem.position().top > $prev.position().top) {
      // Do something here
    }
    // Move to next element
    $prev = $elem;
  });