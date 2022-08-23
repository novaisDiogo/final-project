import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2022-07-08 para 08/07/2022', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2022-07-08')).toEqual('08/07/2022');
  })
});
