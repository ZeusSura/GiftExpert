import { useFetchGift } from "../../hooks/useFecthGift"
import {renderHook} from '@testing-library/react-hooks'
describe('Purbeas sobre useFetchGift', () => {
    

    test('Debe retornar el estado inicial', () => {
        const categoria = 'dragon ball'
        const {result}  = renderHook(()=>useFetchGift('one punch'))
        const {data,loading,} = result.current;
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('Debe de retornar un arreglo dse img y el loading en false', async() => {
        const categoria = 'dragon ball'
        const {result,waitForNextUpdate}  = renderHook(()=>useFetchGift(categoria))
        await waitForNextUpdate()
        const {data,loading} = result.current
        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })
    
    
})
