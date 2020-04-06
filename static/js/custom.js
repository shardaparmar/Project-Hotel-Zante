// $(document).ready(function(){

//   // ========= remove duplicate values ===========
//   var list = document.querySelectorAll("#tagcloud a");
//   var array = []; 
//   var outputArray = [];
// 	var outputduplicate = [];
// 	var count = 0;
// 	var start = false;

//   for( var i = 0; i < list.length; i++) {
//     array[i] = list[i].innerHTML;

//   }
//   for (j = 0; j < array.length; j++) {
// 	  for (k = 0; k < outputArray.length; k++) {
// 		  if (array[j] == outputArray[k]) {
// 		    start = true;
// 		  }
// 	  }
// 	  count++;
  
// 	  if (count == 1 && start == false) {
// 		outputArray.push(array[j]);
  
// 	  } else {
// 		outputduplicate.push(array[j]);
  
// 	  }
// 	  start = false;
// 	  count = 0;
//   }
//   $('#tagcloud').empty();
// 	  for (var i = 0; i < array.length; i++) {
// 		$('#tagcloud').append('<a> <span>' + outputArray[i] + ' </span> </a>');
// 	  }
  
//   console.log("total length = " + array.length);
//   console.log('unique Values = ' + outputArray);
// 	console.log('Duplicate Values = ' + outputduplicate);

// });

$(document).ready(function(){

  var liText = '', liList = $('#tagcloud a'), listForRemove = [];

  $(liList).each(function(){
     var text = $(this).text();
     if(liText.indexOf('|'+ text + '|') == -1)
     {
      liText += '|'+ text + '|';
     }
     else
     {
      listForRemove.push($(this));
     }

  });

  $(listForRemove).each(function () { $(this).remove(); });

  // 

  var liText = '', liList = $('#category li'), listForRemove = [];

  $(liList).each(function(){
     var text = $(this).text();
     if(liText.indexOf('|'+ text + '|') == -1)
     {
      liText += '|'+ text + '|';
     }
     else
     {
      listForRemove.push($(this));
     }

  });

  $(listForRemove).each(function () { $(this).remove(); });
});