const Engineer = require("./lib/Engineer");

describe("Engineer class", () => {
    it("should be instantiated", () => {
        const employee = new Engineer ();
        expect(typeof(employee)).toBe("object");
    })

    it('should have an github property that can be set on instantiation', () => {
        const testValue = 'GITHUB NAME'
    const employee = new Engineer ('dave', 45, 'email@email.com', testValue);
    expect(employee.github).toBe(testValue);
    })

    
            it("can get name using getName()", () =>{
                const testValue = 'GITHUB NAME';
                const employee = new Engineer('D', 45, 'email', testValue);
                expect(employee.getGithub()).toBe(testValue)
            })


            it("can get me the role via getRole()", () =>{
            const employee = new Engineer()
                expect(employee.getRole()).toBe('Engineer')
            })
})
