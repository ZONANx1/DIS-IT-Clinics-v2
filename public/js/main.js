$(document).ready(function () {
  window._token = $('meta[name="csrf-token"]').attr('content')

  var allEditors = document.querySelectorAll('.ckeditor');
  for (var i = 0; i < allEditors.length; ++i) {
    ClassicEditor.create(
        allEditors[i],
        {
            removePlugins: ['ImageUpload']
        }
    );
  }

  moment.updateLocale('en', {
    week: {dow: 1} // Monday is the first day of the week
  })

  $('.date').datetimepicker({
    format: 'DD-MM-YYYY',
    locale: 'en'
  })

  $('.datetime').datetimepicker({
    format: 'DD-MM-YYYY hh:mm A', // Use 'hh:mm a' for lowercase 'am/pm' format
    locale: 'en',
    sideBySide: true,
    stepping: 15
  })

  $('.timepicker').datetimepicker({
    format: 'hh:mm:ss A' // Use 'hh:mm:ss a' for lowercase 'am/pm' format
  })

  $('.select-all').click(function () {
    let $select2 = $(this).parent().siblings('.select2')
    $select2.find('option').prop('selected', 'selected')
    $select2.trigger('change')
  })
  $('.deselect-all').click(function () {
    let $select2 = $(this).parent().siblings('.select2')
    $select2.find('option').prop('selected', '')
    $select2.trigger('change')
  })

  $('.select2').select2()

  $('.treeview').each(function () {
    var shouldExpand = false
    $(this).find('li').each(function () {
      if ($(this).hasClass('active')) {
        shouldExpand = true
      }
    })
    if (shouldExpand) {
      $(this).addClass('active')
    }
  })
})
