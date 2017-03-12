$(function() {
  chrome.storage.sync.get('mapService', function(data) {
    $('.services option[value=' + data.mapService + ']').prop('selected', true);
  });

  $('.services').change(function () {
    var newMapService = $('.services option:selected').val();
    chrome.storage.sync.set({'mapService': newMapService});
  });
});
