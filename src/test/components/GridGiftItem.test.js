import { shallow } from "enzyme";
import React from "react";
import GridGiftItem from "../../components/GridGiftItem";

const img = {
  id: "CXijLuAwu955u",
  title: "windows microsoft GIF",
  url:"https://media3.giphy.com/media/CXijLuAwu955u/giphy…6kzxdnqldrd3k3psn84dxmkxjp3d4mqi8ky&rid=giphy.gif",
};
const wraper = shallow(<GridGiftItem imagen={img} />);
describe("Pruebas item grid", () => {
  test("Prueba de snapshot esperado", () => {
    expect(wraper).toMatchSnapshot();
  });
  test ('Pruebas sobre la url ',()=>{
    const p  =wraper.find('img')
    const attr = p.props();
    
    expect(attr.src.trim()).toBe(img.url)
  })

  test('Pruebas sobre el titulo',()=>{
    const p = wraper.find('p')
    const attr = p.text()
    expect(attr.trim()).toBe(img.title)
  })

});
