function previewId(){
    let leftPanel= document.querySelector(".left-panel");
    let generateCard= document.querySelector("#generateCard");
    let PreviewCard= document.querySelector("#PreviewCard");
    leftPanel.style.display="none";
    generateCard.style.display="block"; 
    PreviewCard.style.display="none"; 

 }
 document.addEventListener("DOMContentLoaded", function() {
     var employeeDetails = [];

     function updateLivePreview() {
         var name = document.getElementById("name").value || "N/A";
         var collegeName = document.getElementById("collegeName").value;
         var studentId = document.getElementById("studentId").value;
         var photo = document.getElementById("photo").files[0];
         var photoPreview = document.getElementById("idCardPhoto");
         var textColor = document.getElementById("text-color").value || "#000000";
         var bgColor = document.getElementById("bg-color").value || "#000000";
         var fontFamily = document.getElementById("font-family").value || "Arial";
         var idCardName = document.getElementById("idCardName");
         var idCardStudentId = document.getElementById("idCardStudentId");
         var namePositionTopToBottom = document.getElementById("namePositionTopToBottom").value;
         var namePositionLeftToRight = document.getElementById("namePositionLeftToRight").value;
         var idPositionTopToBottom = document.getElementById("idPositionTopToBottom").value;
         var idPositionLeftToRight = document.getElementById("idPositionLeftToRight").value;
         var idCardContent=document.getElementById("idCardContent");

         document.getElementById('college-name').innerText = collegeName;
         document.getElementById('idCardName').innerText = name;
         document.getElementById('idCardStudentId').innerText = `Student ID: ${studentId}`;
         document.getElementById('idCardContent').style.background = 'linear-gradient(white, ' + bgColor + ')';

         if (idCardName) {
             idCardName.textContent = name;
             idCardName.style.color = textColor;
             idCardName.style.fontFamily = fontFamily;
             idCardName.style.top = `${namePositionTopToBottom}px`;
             idCardName.style.left = `${namePositionLeftToRight}px`;
         }
         if (idCardStudentId) {
             idCardStudentId.textContent = studentId;
             idCardStudentId.style.color = textColor;
             idCardStudentId.style.fontFamily = fontFamily;
             idCardStudentId.style.top = `${idPositionTopToBottom}px`;
             idCardStudentId.style.left = `${idPositionLeftToRight}px`;
         }

         if (photo) {
             var reader = new FileReader();
             reader.onload = function(e) {
                 photoPreview.style.backgroundImage = `url(${e.target.result})`;
             };
             reader.readAsDataURL(photo);
         } else {
             photoPreview.style.backgroundImage = 'none';
         }
     }
     

     document.getElementById("name").addEventListener("input", updateLivePreview);
     document.getElementById("collegeName").addEventListener("input", updateLivePreview);
     document.getElementById("studentId").addEventListener("input", updateLivePreview);
     document.getElementById("photo").addEventListener("change", updateLivePreview);
     document.getElementById("text-color").addEventListener("input", updateLivePreview);
     document.getElementById("bg-color").addEventListener("input", updateLivePreview);
     document.getElementById("font-family").addEventListener("input", updateLivePreview);
     document.getElementById("namePositionTopToBottom").addEventListener("input", updateLivePreview);
     document.getElementById("namePositionLeftToRight").addEventListener("input", updateLivePreview);
     document.getElementById("idPositionTopToBottom").addEventListener("input", updateLivePreview);
     document.getElementById("idPositionLeftToRight").addEventListener("input", updateLivePreview);


     document.getElementById("idCardForm").addEventListener("submit", function(event) {
         event.preventDefault();
         var name = document.getElementById("name").value;
         var collegeName = document.getElementById("collegeName").value;
         var studentId = document.getElementById("studentId").value;
         var photo = document.getElementById("photo").files[0];

         var employee = {
             name: name,
             collegeName: collegeName,
             studentId: studentId,
             photo: photo
         };

         employeeDetails.push(employee);

         document.getElementById("name").value = "";
         document.getElementById("collegeName").value = "";
         document.getElementById("studentId").value = "";
         document.getElementById("photo").value = "";

         clearLivePreview();
     });

     function clearLivePreview() {
         var photoPreview = document.getElementById("idCardPhoto");
     }
 });
 function generatePDF() {
     var element = document.getElementById('idCardContent');
   

     var opt = {
         margin: 0,
         filename: 'myfile.pdf',
         image: { type: 'jpeg', quality: 1 },
         html2canvas: { scale: 1 },
         jsPDF: { unit: 'in', format: [4.6, 3.01], orientation: 'landscape', precision: '12' } 
     };

     html2pdf().set(opt).from(element).save();
 }