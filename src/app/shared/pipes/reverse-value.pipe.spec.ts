import { ReverseValuePipe } from './reverse-value.pipe';
describe('ReverseValuePipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new ReverseValuePipe();
  });
  it('should be create', () => {
    expect(pipe).toBeTruthy();
  });
  it('should reverse value which we input', () => {
    expect(pipe.transform('hello')).toEqual('olleh');
  });
});
