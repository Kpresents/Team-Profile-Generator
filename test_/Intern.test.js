const Intern= require ("../lib/intern");

describe ("Test Intern", ()=> {
    describe ("Test all properties of Intern",() =>{
        it ("Test all properties of Intern",() =>{
        const intern= new Intern ("Freya", 8700, "freya@yahoo.com", "USC")
        expect (intern.name).toEqual("Freya");
        expect (intern.id).toEqual(8700);
        expect (intern.email).toEqual("freya@yahoo.com");
        expect (intern.school).toEqual("USC");

        })
    })

    describe ("Test all methods of Intern", () => {
        it ("Test all methods of Intern", ()=>{
            const intern= new Intern ("Huxley", 1010, "hux@gmail.com", "CSULA")
            expect (intern.getName()).toEqual ("Huxley");
            expect (intern.getId()) .toEqual (1010);
            expect (intern.getEmail()).toEqual ("hux@gmail.com");
            expect (intern.getSchool()).toEqual ("CSULA");
        
        })
    })
})