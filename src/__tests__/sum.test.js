import { sum } from "../components/sum";


test("sum of two integeres",()=>{
    const result = sum(2,7);


    //Assertion
    expect(result).toBe(9);
});