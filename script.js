//your code here
  <script>
        const draggables = document.querySelectorAll('.draggable');
        
        draggables.forEach(draggable =>{
          draggable.addEventListener('dragstart', dragstart);
          draggable.addEventListener('dragover', dragOver);
          draggable.addEventListener('drop', drop);
        });
        
        function dragstart(e){
          e.dataTransfer.setData('text/plain', e.target.id);
        }
        
        function dragOver(e){
          e.preventDefault();
        }
        function drop(event){
          e.preventDefault();
          const id = event.dataTransfer.getData('text/plain');
          const draggable = document.getElementById(id); // image 1
          
          const targetElement = event.target; // image 2
          if(targetElement.classList.contains('draggable')){
            const draggedImage = draggable.style.backgroundImage;
            const targetImage = targetElement.style.backgroundImage;
          }
          
          draggable.style.backgroundImage = targetImage;
          targetElement.style.backgroundImage = draggedImage;
          
        }