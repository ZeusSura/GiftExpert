import {callFechApi} from '../../helpers/HelperGIFAPI'

describe('probando archivo de pruebas',()=>{

    test('pruebas sobre el archivo', async()=>{
     const array = await callFechApi('goku')
     expect(array.length).toBe(10)
    })
})
