import { shallow } from "enzyme";
import React from 'react'
import GridGift from "../../components/GirdGift";
import { useFetchGift } from "../../hooks/useFecthGift";
jest.mock('../../hooks/useFecthGift')

describe('Evaluacion del componente gridGift', () => {
    
    const gifts=[{
        id:1,
        url:'/123/diasdi.jpg',
        title:'Imagen 1'
    },
    {
        id:2,
        url:'/123/diasdi.jpg',
        title:'Imagen 1'
    },{
        id:3,
        url:'/123/diasdi.jpg',
        title:'Imagen 1'
    },
    {
        id:4,
        url:'/123/diasdi.jpg',
        title:'Imagen 1'
    }]
    const categoria = "Dragon Ball"
    let  wrapper ;
    beforeEach(()=>{
        jest.clearAllMocks()

        
        useFetchGift.mockReturnValue({
            data: gifts,
            loading: true,
        })
        wrapper =shallow(<GridGift categoria={categoria} />)
    })
    test('componente', () => {
        
      
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GridGiftItem').exists()).toBe(true)
        expect(wrapper.find('GridGiftItem').length).toBe(gifts.length)

    })

})
