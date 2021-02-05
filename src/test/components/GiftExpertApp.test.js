import React from 'react'
import GiftExpertApp from '../../GiftExpertApp'
import {shallow } from 'enzyme'

describe('Pruebas sobre el componente GiftExpertApp',()=>{




    test('Deberia hacer mach con el snapshots', () => {
        let  wrapper =shallow(<GiftExpertApp/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['dragon ball','one punch']

        const  wrapper =shallow(<GiftExpertApp defaultCategories={categories}/>)

        expect(wrapper.find('GridGift').length).toBe(categories.length)
    })
    
})
