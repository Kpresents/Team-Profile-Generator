const Engineer= require ("../lib/engineer");

describe ("Test Engineer", ()=> {
    describe ("Test all properties of Engineer",() =>{
        it ("Test all properties of Engineer",() =>{
        const engineer= new Engineer ("Pilar", 2211, "mpilar@yahoo.com", "PilarGH")
        expect (engineer.name).toEqual("Pilar");
        expect (engineer.id).toEqual(2211);
        expect (engineer.email).toEqual("mpilar@yahoo.com");
        expect (engineer.github).toEqual("PilarGH");

        })
    })

    describe ("Test all methods of Engineer", () => {
        it ("Test all methods of Engineer", ()=>{
            const engineer= new Engineer ("Mario", 1011, "mario@gmail.com", "MarioGH")
            expect (engineer.getName()).toEqual ("Mario");
            expect (engineer.getId()) .toEqual (1011);
            expect (engineer.getEmail()).toEqual ("mario@gmail.com");
            expect (engineer.getGithub()).toEqual ("MarioGH");
        
        })
    })
})