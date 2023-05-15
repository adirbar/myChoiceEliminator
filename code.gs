//Created by AdirBartov.com with ChatGPT

function removeChosenOptions(e) {
  var formId = "YOUR_FORM_ID"; // Replace with your Google Form ID
  var response = e.response;
  var itemResponses = response.getItemResponses();
  
  var form = FormApp.openById(formId);
  var items = form.getItems();
  
  // Iterate through each item response
  for (var j = 0; j < itemResponses.length; j++) {
    var itemResponse = itemResponses[j];
    var item = itemResponse.getItem();
    
    // Check if the item is a multiple-choice item
    if (item.getType() === FormApp.ItemType.MULTIPLE_CHOICE) {
      var choices = item.asMultipleChoiceItem().getChoices();
      var selectedChoice = itemResponse.getResponse();
      
      // Remove the selected choice from the list of choices
      for (var k = 0; k < choices.length; k++) {
        if (choices[k].getValue() === selectedChoice) {
          choices.splice(k, 1);
          break;
        }
      }
      
      // Update the item with the new choices
      item.asMultipleChoiceItem().setChoices(choices);
    }
  }
}
