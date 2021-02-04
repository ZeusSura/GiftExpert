import React from "react";
import CategoryAdd from "../../components/CategoryAdd";
import { shallow } from "enzyme";

describe("Pruebas de categoria add", () => {
  const setCategorias =jest.fn();
  let wraper = shallow(<CategoryAdd setCategorias={setCategorias} />);
  beforeEach(()=>{
    jest.clearAllMocks()
    wraper = shallow(<CategoryAdd setCategorias={setCategorias} />);
  })
  
  test("pruebas de snapshot", () => {
    expect(wraper).toMatchSnapshot();
  });
  test("Haciendo pruebas sobre el input", () => {
    const input =  wraper.find('.input-categoria')
    const value = "Este es un valor"
    input.simulate('change',{target:{value}})
    
    expect(wraper.find('p').text().trim()).toBe(value)
  });

  test("No debe postear la informacion on submite",()=>{

    wraper.find('form').simulate('submit',{preventDefault(){}})
    expect(setCategorias).not.toHaveBeenCalled()
  })

  test("simular como enviaria datos normalmente",()=>{
    //Se crea el formulario
    const value = "Este es un valor"
    const input =  wraper.find('.input-categoria')
    input.simulate('change',{target:{value}})
    //Se locailiza el formulario y envia los datos
    wraper.find('form').simulate('submit',{preventDefault(){}})
    expect(setCategorias).toHaveBeenCalled()
    expect(input.props().value.trim()).toBe('')
  });
});
