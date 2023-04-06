



const ul = document.getElementById("ul");
//Inject data

 function addData(appointment, id){
    const html = `
    
            <div  class="col-sm-6 col-lg-3 mb-4">
            <li data-id="${id}" id="delete">
              <div class="card h-100 shadow card-span rounded-3"><img class="card-img-top rounded-top-3" src="assets/img/gallery/user.png" alt="news" />
                <div class="card-body"><span class="fs--1 text-primary me-3">${appointment.name}</span>
                  <svg class="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                  </svg><span class="fs--1 text-900">Nov 21, 2021</span><span class="fs--1"></span>
                  <hr>
                  <h4>Name: ${appointment.name}</h4>
                  <p>Email: <a class="text-primary" href="mailto:${appointment.email}">${appointment.email}</a></p>
                  <p>Phone: ${appointment.phone}</p>
                  <p><b>Comments</b>: ${appointment.comment}</p>
                <div class="d-flex flex-row mb-3">
                    <div class="p-2"><button id="call" type="button" class="btn btn-warning btn-sm"><a class="text-light" href="tel:${appointment.phone}">Call</a></button></div>
                    
                    <div class="p-2"><button id="remove" type="button" class="btn btn-danger btn-sm">Remove</button></div>
                </div>
                  
                  


                  </div>
                </div>
                </li>
              </div>
          
    `
    ul.innerHTML += html;
 }
//Delete from template
const deleteRecipe = (id) => {
    const deleteAppointment = document.querySelectorAll("li");
    deleteAppointment.forEach(appoint => {
        if(appoint.getAttribute('data-id') === id){
            appoint.remove();
        }
    })
    // const appointment = document.getElementById("delete");
    // appointment.forEach(appoint => {
    //   if(appoint.getAttribute('data-id') === id){
    //     appoint.remove();
    //   }
    // });
  }

 //Get Documents
db.collection('appointment').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      const doc = change.doc;
      if(change.type === 'added'){
        addData(doc.data(), doc.id);
      }else if(change.type === 'removed'){
        deleteRecipe(doc.id);
      }
    })
  });
db.collection("appointment").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().name}`);
    });
});


// Deleting data(collection) from firebase
// ul.addEventListener('click', e => {
//     if(e.target.tagName === 'BUTTON'){
//       const id = e.target.parentElement.getAttribute('data-id');
//       db.collection('appointment').doc(id).delete().then(() => {
//         console.log("Deleted succesfully")
//       });
//     }
//   })
ul.addEventListener('click', e => {
    // console.log(e.target.id)
    if(e.target.id === "remove"){
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
        console.log("You have clicked remove button. Are you sure you want to delete it?")
        db.collection('appointment').doc(id).delete().then(() => {
            console.log("Deleted succesfully")
        });
    }
})

//Call
