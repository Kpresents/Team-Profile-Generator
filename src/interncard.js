function interncard (intern){
return `
<div class="col-md-4">
            <div class="card">
                <h2 class="card-title">${intern.name}</h2>
                <h3 class="card-subtitle mb-2 text-muted"> ${intern.getRole()}</h3>
                <p class="card-text">ID:${intern.id}</p>
                <p>Email:<a href=mailto:> ${intern.email} </a></p>
                <p class="card-text">School: ${intern.school} </p>
            </div>
        </div>




`

}

module.exports = interncard