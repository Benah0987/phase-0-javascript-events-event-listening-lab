function addingEventListener() {
    const input = document.getElementById('button');
  
    input.addEventListener('click', clickAlert);
  
    function clickAlert() {
      alert('I was clicked!');
    }
  }
  //or i can do this

  
  //document.addEventListener('DOMContentLoaded', function() {
    //addingEventListener();
  //});
