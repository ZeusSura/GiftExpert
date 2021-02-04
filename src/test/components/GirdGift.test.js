import { shallow } from "enzyme";
import React from 'react'
import GridGift from "../../components/GirdGift";
import { useFetchGift } from "../../hooks/useFecthGift";

jest.mock('../../hooks/useFecthGift')
describe('Evaluacion del componente gridGift', () => {
    
    const categoria = "Dragon Ball"
    let  wrapper ;
    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper =shallow(<GridGift categoria={categoria} />)
    })
    test('componente', () => {
        
        expect(wrapper).toMatchSnapshot()
    })
    test('Debe de mostrart items cuando se cargan imagenes',()=>{

        const wrapper =shallow(<GridGift categoria={categoria} />)
        
    })
})
