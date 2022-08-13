function engineercard (engineer){
return `
<div class="col-md-4">
<div class="card">
    <h2 class="card-title"> ${engineer.name} </h2>
    <h3 class="card-subtitle mb-2 text-muted"> ${engineer.getRole()} </h3>
    <p class="card-text">ID:${engineer.id} </p>
    <p>Email:<a href=mailto:> ${engineer.email} </a> </p>
    <p>GitHub:<a href="https://github.com/Kpresents">${engineer.github}</a></p>
</div>
</div>




`


}

module.exports = engineercard