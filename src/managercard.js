function managercard (manager){
    return`
    <div class="col-md-4">
    <div class="card">
        <h2 class="card-title">${manager.name} </h2>
        <h3 class=" card-subtitle mb-2 text-muted"> ${manager.getRole()}</h3>
        <p class="card-text">ID:${manager.id}</p>
        <p>Email:<a href=mailto:> ${manager.email}</a></p>
        <p class="card-text">Office Number:${manager.officeNumber}</p>
    </div>
</div>
    
    
    
    `
}

module.exports= managercard