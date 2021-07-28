const Intern = require("./lib/Intern");

describe("Intern class", () => {
    it("should be instantiated", () => {
        const employee = new Intern ();
        expect(typeof(employee)).toBe("object");
    })

    it('should have a school property that can be set on instantiation', () => {
        const testValue = 'school'
    const employee = new Intern ('dave', 45, 'email@email.com', testValue);
    expect(employee.school).toBe(testValue);
    })

    
            it("can get name using getSchool()", () =>{
                const testValue = 'SCHOOL NAME';
                const employee = new Intern('D', 45, 'email', testValue);
                expect(employee.getSchool()).toBe(testValue)
            })


            it("can get me the role via getRole()", () =>{
            const employee = new Intern()
                expect(employee.getRole()).toBe('Intern')
            })
})